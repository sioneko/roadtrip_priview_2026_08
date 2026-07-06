const SHEET_NAME = "comments";
const ANNOTATION_SHEET_NAME = "annotations";
const HEADERS = [
  "id",
  "createdAt",
  "routeKey",
  "day",
  "dayTitle",
  "stopIndex",
  "stopName",
  "visitorId",
  "name",
  "color",
  "text",
  "updatedAt"
];
const ANNOTATION_HEADERS = [
  "id",
  "createdAt",
  "updatedAt",
  "visitorId",
  "name",
  "color",
  "text",
  "target",
  "page",
  "mapId",
  "x",
  "y",
  "lat",
  "lng"
];

function doGet(e) {
  const params = e && e.parameter ? e.parameter : {};
  const callback = sanitizeCallback_(params.callback || "callback");
  const payload = routeAction_(params.action || "list", params);

  return ContentService
    .createTextOutput(`${callback}(${JSON.stringify(payload)});`)
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
}

function routeAction_(action, params) {
  if (action === "add") return addComment_(params);
  if (action === "update") return updateComment_(params);
  if (action === "delete") return deleteComment_(params);
  if (action === "listAnnotations") return listAnnotations_();
  if (action === "addAnnotation") return addAnnotation_(params);
  if (action === "updateAnnotation") return updateAnnotation_(params);
  if (action === "deleteAnnotation") return deleteAnnotation_(params);
  return listComments_();
}

function addComment_(params) {
  const sheet = getCommentsSheet_();
  const id = String(params.id || "");
  if (!id) return { ok: false, error: "missing_id" };
  if (hasComment_(sheet, id)) return { ok: true, duplicate: true };

  sheet.appendRow([
    id,
    params.createdAt || new Date().toISOString(),
    params.routeKey || "",
    params.day || "",
    params.dayTitle || "",
    params.stopIndex || "",
    params.stopName || "",
    params.visitorId || "",
    params.name || "Unnamed",
    params.color || "#22c55e",
    params.text || "Marked",
    params.updatedAt || ""
  ]);

  return { ok: true };
}

function updateComment_(params) {
  const sheet = getCommentsSheet_();
  const id = String(params.id || "");
  const visitorId = String(params.visitorId || "");
  const rowNumber = findCommentRow_(sheet, id);
  if (!rowNumber) return { ok: false, error: "not_found" };
  if (!canMutateRow_(sheet, rowNumber, visitorId)) return { ok: false, error: "forbidden" };

  const columns = getHeaderColumns_(sheet);
  sheet.getRange(rowNumber, columns.name).setValue(params.name || "Unnamed");
  sheet.getRange(rowNumber, columns.color).setValue(params.color || "#22c55e");
  sheet.getRange(rowNumber, columns.text).setValue(params.text || "Marked");
  sheet.getRange(rowNumber, columns.updatedAt).setValue(params.updatedAt || new Date().toISOString());

  return { ok: true };
}

function deleteComment_(params) {
  const sheet = getCommentsSheet_();
  const id = String(params.id || "");
  const visitorId = String(params.visitorId || "");
  const rowNumber = findCommentRow_(sheet, id);
  if (!rowNumber) return { ok: true, deleted: false };
  if (!canMutateRow_(sheet, rowNumber, visitorId)) return { ok: false, error: "forbidden" };

  sheet.deleteRow(rowNumber);
  return { ok: true, deleted: true };
}

function addAnnotation_(params) {
  const sheet = getAnnotationsSheet_();
  const id = String(params.id || "");
  if (!id) return { ok: false, kind: "annotations", error: "missing_id" };
  if (findRowById_(sheet, id)) return { ok: true, kind: "annotations", duplicate: true };

  sheet.appendRow([
    id,
    params.createdAt || new Date().toISOString(),
    params.updatedAt || "",
    params.visitorId || "",
    params.name || "Unnamed",
    params.color || "#22c55e",
    params.text || "Marked",
    params.target || "ui",
    params.page || "route",
    params.mapId || "route",
    params.x || "",
    params.y || "",
    params.lat || "",
    params.lng || ""
  ]);

  return { ok: true, kind: "annotations" };
}

function updateAnnotation_(params) {
  const sheet = getAnnotationsSheet_();
  const id = String(params.id || "");
  const visitorId = String(params.visitorId || "");
  const rowNumber = findRowById_(sheet, id);
  if (!rowNumber) return { ok: false, kind: "annotations", error: "not_found" };
  if (!canMutateRow_(sheet, rowNumber, visitorId)) return { ok: false, kind: "annotations", error: "forbidden" };

  const columns = getHeaderColumns_(sheet);
  sheet.getRange(rowNumber, columns.name).setValue(params.name || "Unnamed");
  sheet.getRange(rowNumber, columns.color).setValue(params.color || "#22c55e");
  sheet.getRange(rowNumber, columns.text).setValue(params.text || "Marked");
  sheet.getRange(rowNumber, columns.updatedAt).setValue(params.updatedAt || new Date().toISOString());

  return { ok: true, kind: "annotations" };
}

function deleteAnnotation_(params) {
  const sheet = getAnnotationsSheet_();
  const id = String(params.id || "");
  const visitorId = String(params.visitorId || "");
  const rowNumber = findRowById_(sheet, id);
  if (!rowNumber) return { ok: true, kind: "annotations", deleted: false };
  if (!canMutateRow_(sheet, rowNumber, visitorId)) return { ok: false, kind: "annotations", error: "forbidden" };

  sheet.deleteRow(rowNumber);
  return { ok: true, kind: "annotations", deleted: true };
}

function listComments_() {
  const sheet = getCommentsSheet_();
  return listRows_(sheet);
}

function listAnnotations_() {
  const sheet = getAnnotationsSheet_();
  const payload = listRows_(sheet);
  payload.kind = "annotations";
  return payload;
}

function listRows_(sheet) {
  const values = sheet.getDataRange().getValues();
  if (values.length <= 1) return { ok: true, rows: [] };

  const headers = values[0];
  const rows = values.slice(1).map(row => {
    const item = {};
    headers.forEach((header, index) => {
      item[header] = row[index];
    });
    return item;
  });

  return { ok: true, rows };
}

function getCommentsSheet_() {
  return getSheetWithHeaders_(SHEET_NAME, HEADERS);
}

function getAnnotationsSheet_() {
  return getSheetWithHeaders_(ANNOTATION_SHEET_NAME, ANNOTATION_HEADERS);
}

function getSheetWithHeaders_(sheetName, headers) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(sheetName);
  if (!sheet) sheet = spreadsheet.insertSheet(sheetName);

  const existingHeaders = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
  const needsHeaders = existingHeaders.join("") === "";
  const needsUpgrade = headers.some((header, index) => existingHeaders[index] !== header);
  if (needsHeaders || needsUpgrade) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function hasComment_(sheet, id) {
  return Boolean(findCommentRow_(sheet, id));
}

function findCommentRow_(sheet, id) {
  return findRowById_(sheet, id);
}

function findRowById_(sheet, id) {
  if (!id) return 0;
  const lastRow = sheet.getLastRow();
  if (lastRow <= 1) return 0;
  const ids = sheet.getRange(2, 1, lastRow - 1, 1).getValues().flat();
  const index = ids.indexOf(id);
  return index === -1 ? 0 : index + 2;
}

function getHeaderColumns_(sheet) {
  const lastColumn = sheet.getLastColumn();
  const headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];
  const columns = {};
  headers.forEach((header, index) => {
    columns[header] = index + 1;
  });
  return columns;
}

function canMutateRow_(sheet, rowNumber, visitorId) {
  const columns = getHeaderColumns_(sheet);
  const storedVisitorId = String(sheet.getRange(rowNumber, columns.visitorId).getValue() || "");
  return storedVisitorId && visitorId && storedVisitorId === visitorId;
}

function sanitizeCallback_(callback) {
  return String(callback).replace(/[^\w.$]/g, "") || "callback";
}
