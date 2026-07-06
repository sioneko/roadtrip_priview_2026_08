# Google Sheet 评论同步设置

1. 在你的 Google Drive 新建一个 Google Sheet。
2. 打开这个 Sheet，进入 `扩展程序` -> `Apps Script`。
3. 删除默认代码，把 `google-sheet-comment-webapp.gs` 的内容粘进去。
4. 点 `部署` -> `新建部署`。
5. 类型选择 `Web 应用`。
6. 执行身份选择 `我`。
7. 访问权限选择 `任何人`。
8. 部署后复制 Web App URL。
9. 打开 `index.html`，把脚本里的这一行：

```js
const SYNC_ENDPOINT = "";
```

改成：

```js
const SYNC_ENDPOINT = "你的 Web App URL";
```

完成后，地点评论和气泡批注会同时保存在浏览器本地和你的 Google Sheet。其他人打开同一个 HTML 链接时，也能读取同一批记录。

当前脚本会自动维护两个工作表：

- `comments`：地点评论
- `annotations`：页面 / 地图气泡批注

如果之后修改了 `google-sheet-comment-webapp.gs`，需要在 Apps Script 里进入 `部署` -> `管理部署`，编辑 Web App 部署并选择新版本，然后点更新。
