(function () {
  const ROUTE_DAYS = [
    {
      day: "Day 1",
      short: "鸟取海岸",
      title: "鸟取砂丘、白兔海岸与三朝温泉",
      summary: "从鸟取市出发，先看砂丘和砂之美术馆，再沿海岸线往西，傍晚进入温泉町。",
      distance: "约 95 km",
      drive: "约 2.5 h",
      overnight: "三朝温泉",
      color: "#d8692a",
      stops: [
        {
          time: "09:00",
          name: "鸟取站 / 取车",
          place: "Tottori Station",
          lat: 35.494,
          lng: 134.225,
          stay: "30 min",
          drive: "出发",
          tags: ["取车", "补给"],
          desc: "从鸟取市区取车，先把导航、停车点和当日温泉入住时间确认好。",
          note: "如果是鸟取机场进，也可以把第一站替换成机场取车。"
        },
        {
          time: "09:35",
          name: "鸟取砂丘",
          place: "Tottori Sand Dunes",
          lat: 35.5397,
          lng: 134.2289,
          stay: "90 min",
          drive: "约 20 min",
          tags: ["砂丘", "海景"],
          desc: "第一站直接进入最有辨识度的景观：砂丘、海风和日本海视野，适合慢慢走到高处看线条。",
          note: "夏季中午沙面会很热，建议早上或傍晚停留。"
        },
        {
          time: "11:20",
          name: "砂之美术馆",
          place: "The Sand Museum",
          lat: 35.5416,
          lng: 134.2324,
          stay: "60 min",
          drive: "约 5 min",
          tags: ["室内", "艺术"],
          desc: "和砂丘放在同一段体验里，作为天气不好或想拍细节时的稳定选择。",
          note: "展期主题会变化，正式出行前需要确认开放日。"
        },
        {
          time: "13:20",
          name: "白兔神社 / 白兔海岸",
          place: "Hakuto Shrine",
          lat: 35.5229,
          lng: 134.1395,
          stay: "55 min",
          drive: "约 35 min",
          tags: ["神话", "海岸"],
          desc: "沿海岸线西行，在白兔神话相关地点停靠，节奏从砂丘的开阔切到海边散步。",
          note: "海边风大时体感会降，轻薄外套很实用。"
        },
        {
          time: "15:10",
          name: "仓吉白壁土藏群",
          place: "Kurayoshi Shirakabe",
          lat: 35.4336,
          lng: 133.8249,
          stay: "75 min",
          drive: "约 45 min",
          tags: ["町屋", "咖啡"],
          desc: "白壁仓库、赤瓦与河畔街区很适合放进下午，作为从海岸到温泉之间的城市感停顿。",
          note: "小店较早关门，想逛店的话别排太晚。"
        },
        {
          time: "17:05",
          name: "三朝温泉",
          place: "Misasa Onsen",
          lat: 35.4087,
          lng: 133.8957,
          stay: "Overnight",
          drive: "约 25 min",
          tags: ["温泉", "住宿"],
          desc: "第一晚用温泉收尾，降低第二天上大山和跨县移动的疲劳。",
          note: "晚餐时间通常固定，建议按旅馆入住要求反推当天节奏。"
        }
      ]
    },
    {
      day: "Day 2",
      short: "大山到松江",
      title: "大山、境港与松江湖畔",
      summary: "从山景转向港町，再进入岛根县松江。当天驾驶距离较长，但停靠点变化很鲜明。",
      distance: "约 165 km",
      drive: "约 4 h",
      overnight: "松江",
      color: "#0f8b70",
      stops: [
        {
          time: "09:00",
          name: "三朝温泉出发",
          place: "Misasa Onsen",
          lat: 35.4087,
          lng: 133.8957,
          stay: "15 min",
          drive: "出发",
          tags: ["温泉街", "出发"],
          desc: "第二天先从温泉街出发，路线往西北方向进入大山区域。",
          note: "山路天气变化快，出发前看一下雾和降雨。"
        },
        {
          time: "10:20",
          name: "大山寺 / 大山环山道路",
          place: "Daisenji Temple",
          lat: 35.3912,
          lng: 133.5329,
          stay: "100 min",
          drive: "约 75 min",
          tags: ["山景", "步道"],
          desc: "大山是这段自驾的山景核心。可以轻量散步，也可以只做观景和咖啡停留。",
          note: "冬季或恶劣天气要按道路状况调整。"
        },
        {
          time: "12:45",
          name: "大山牧场牛奶之里",
          place: "Daisen Makiba Milk no Sato",
          lat: 35.4083,
          lng: 133.5185,
          stay: "55 min",
          drive: "约 15 min",
          tags: ["午餐", "牧场"],
          desc: "午餐安排在大山视野附近，路线不会为了吃饭大幅绕路。",
          note: "适合做轻食，不建议把下午港町时间压得太紧。"
        },
        {
          time: "14:35",
          name: "水木茂之路",
          place: "Mizuki Shigeru Road",
          lat: 35.5454,
          lng: 133.2309,
          stay: "80 min",
          drive: "约 70 min",
          tags: ["街区", "伴手礼"],
          desc: "境港的漫画主题街区很好逛，和上午的大山形成明显反差。",
          note: "街区停车场较多，先选离主街近的点。"
        },
        {
          time: "16:25",
          name: "由志园",
          place: "Yuushien Garden",
          lat: 35.4898,
          lng: 133.1689,
          stay: "65 min",
          drive: "约 35 min",
          tags: ["庭园", "牡丹"],
          desc: "进入岛根前后用庭园把节奏放慢，也能顺路经过中海一带。",
          note: "夜间点灯活动季节性很强，正式日期需要再查。"
        },
        {
          time: "18:00",
          name: "松江湖畔入住",
          place: "Matsue",
          lat: 35.4648,
          lng: 133.0585,
          stay: "Overnight",
          drive: "约 25 min",
          tags: ["湖景", "住宿"],
          desc: "第二晚住松江，方便第三天把城、水乡、庭园和出云串起来。",
          note: "如果想看宍道湖夕阳，入住点尽量靠湖西侧或湖畔。"
        }
      ]
    },
    {
      day: "Day 3",
      short: "松江与出云",
      title: "松江城、足立美术馆、出云大社",
      summary: "上午看松江城和水边城市，下午转向出云神话线，傍晚到日御碕。",
      distance: "约 135 km",
      drive: "约 3.5 h",
      overnight: "出云 / 玉造",
      color: "#2563eb",
      stops: [
        {
          time: "08:50",
          name: "松江城",
          place: "Matsue Castle",
          lat: 35.4751,
          lng: 133.0505,
          stay: "90 min",
          drive: "市内",
          tags: ["国宝", "城下町"],
          desc: "第三天从松江城开始，先把城市的历史核心看完，再转向湖和庭园。",
          note: "城内楼梯较陡，鞋子舒适会轻松很多。"
        },
        {
          time: "10:40",
          name: "宍道湖畔",
          place: "Lake Shinji",
          lat: 35.4633,
          lng: 133.0528,
          stay: "35 min",
          drive: "约 10 min",
          tags: ["湖景", "散步"],
          desc: "湖畔短暂停留，给松江这一段加一点水面和城市留白。",
          note: "如果前一晚已看夕阳，这里可以缩短。"
        },
        {
          time: "12:00",
          name: "足立美术馆",
          place: "Adachi Museum of Art",
          lat: 35.3828,
          lng: 133.1993,
          stay: "120 min",
          drive: "约 45 min",
          tags: ["庭园", "美术"],
          desc: "用美术馆和日本庭园作为中午主停靠，适合慢一点走。",
          note: "它和出云方向有一点折返感，若想少开车可改成松江市内深度游。"
        },
        {
          time: "15:20",
          name: "出云大社",
          place: "Izumo Taisha",
          lat: 35.4012,
          lng: 132.6858,
          stay: "100 min",
          drive: "约 80 min",
          tags: ["神社", "神话"],
          desc: "岛根段的精神核心，参道、拜殿和神乐殿适合安排完整时间。",
          note: "参拜后可以把神门通的咖啡和小吃留作休息。"
        },
        {
          time: "17:20",
          name: "稻佐之滨",
          place: "Inasa Beach",
          lat: 35.3999,
          lng: 132.6745,
          stay: "35 min",
          drive: "约 8 min",
          tags: ["海滩", "日落"],
          desc: "从神社到海边很近，适合把神话感延伸到傍晚的海岸。",
          note: "如果时间紧，可以和出云大社合并为同一段停留。"
        },
        {
          time: "18:10",
          name: "日御碕灯塔",
          place: "Hinomisaki Lighthouse",
          lat: 35.4339,
          lng: 132.6293,
          stay: "50 min",
          drive: "约 25 min",
          tags: ["灯塔", "海岸"],
          desc: "第三天用岛根半岛西端的海岸线收尾，视觉上很有终点感。",
          note: "夜间山海路段注意车速，住宿不要排太远。"
        }
      ]
    },
    {
      day: "Day 4",
      short: "石见到津和野",
      title: "石见银山、温泉津、益田与津和野",
      summary: "把岛根西部拉开：世界遗产、港町温泉、石见海岸，再接到山口县边境的津和野。",
      distance: "约 190 km",
      drive: "约 4.5 h",
      overnight: "津和野 / 益田",
      color: "#8a3ffc",
      stops: [
        {
          time: "09:00",
          name: "出云市区出发",
          place: "Izumo",
          lat: 35.3609,
          lng: 132.7562,
          stay: "15 min",
          drive: "出发",
          tags: ["出发", "补给"],
          desc: "从出云继续往西，今天开始把路线从神话核心区推向石见和山口方向。",
          note: "如果前一晚住玉造温泉，到石见银山会多一点车程。"
        },
        {
          time: "10:15",
          name: "石见银山・大森町",
          place: "Iwami Ginzan",
          lat: 35.1132,
          lng: 132.4408,
          stay: "150 min",
          drive: "约 70 min",
          tags: ["世界遗产", "町步"],
          desc: "世界遗产矿山和大森町街区是岛根西部的主菜，建议步行慢慢看。",
          note: "核心区停车和交通方式有限制，正式出行前要确认停车场和接驳。"
        },
        {
          time: "13:35",
          name: "龙源寺间步",
          place: "Ryugenji Mabu Mine Shaft",
          lat: 35.1007,
          lng: 132.4357,
          stay: "60 min",
          drive: "区域内",
          tags: ["矿道", "历史"],
          desc: "如果体力允许，把矿道作为石见银山的深一点体验。",
          note: "雨天和高温天要留意步行距离，不必勉强。"
        },
        {
          time: "15:10",
          name: "温泉津温泉",
          place: "Yunotsu Onsen",
          lat: 35.0913,
          lng: 132.3478,
          stay: "75 min",
          drive: "约 35 min",
          tags: ["温泉", "港町"],
          desc: "温泉津是很适合停顿的港町温泉，能把路线从银山历史带回到日本海边。",
          note: "如果泡汤，记得给下午西行留出余量。"
        },
        {
          time: "16:35",
          name: "益田・持石海岸",
          place: "Masuda Coast",
          lat: 34.7056,
          lng: 131.8409,
          stay: "35 min",
          drive: "约 70 min",
          tags: ["海岸", "休息"],
          desc: "长距离西行中安排一个海岸停靠，把驾驶节奏拆开，也给日本海线多一个候选点。",
          note: "如果想压缩行程，这一站最容易删。"
        },
        {
          time: "17:45",
          name: "津和野",
          place: "Tsuwano",
          lat: 34.4667,
          lng: 131.7736,
          stay: "Overnight",
          drive: "约 45 min",
          tags: ["小京都", "夜宿"],
          desc: "津和野作为岛根与山口之间的过渡夜宿很合适，第二天可以接萩和长门海岸线。",
          note: "如果想少换酒店，也可以住益田，第二天直接开去萩。"
        }
      ]
    },
    {
      day: "Day 5",
      short: "津和野到长门",
      title: "津和野、萩城下町、元乃隅与长门汤本",
      summary: "从山间小镇切到萩的城下町历史，再沿北长门海岸看鸟居和海景。",
      distance: "约 175 km",
      drive: "约 4 h",
      overnight: "长门汤本 / 萩",
      color: "#c2410c",
      stops: [
        {
          time: "08:50",
          name: "太鼓谷稻成神社",
          place: "Taikodani Inari Shrine",
          lat: 34.4691,
          lng: 131.7732,
          stay: "55 min",
          drive: "市内",
          tags: ["神社", "町景"],
          desc: "津和野的红色鸟居和山坡视野很醒目，适合作为进入山口段前的第一段视觉记忆。",
          note: "如果前一晚到得早，也可以改成傍晚散步。"
        },
        {
          time: "10:50",
          name: "萩城下町",
          place: "Hagi Castle Town",
          lat: 34.4108,
          lng: 131.3993,
          stay: "120 min",
          drive: "约 85 min",
          tags: ["城下町", "世界遗产"],
          desc: "萩的武家屋敷、土墙街道和陶器店适合作为山口县历史线的核心候选。",
          note: "街区适合步行，停车后别频繁挪车。"
        },
        {
          time: "13:25",
          name: "松阴神社 / 松下村塾",
          place: "Shoin Shrine",
          lat: 34.4132,
          lng: 131.4139,
          stay: "55 min",
          drive: "约 10 min",
          tags: ["幕末", "历史"],
          desc: "想把萩和明治维新的脉络连起来，这一站很适合放进候选池。",
          note: "对历史兴趣不强的话，可把时间给萩城下町或咖啡。"
        },
        {
          time: "15:10",
          name: "元乃隅神社",
          place: "Motonosumi Shrine",
          lat: 34.4215,
          lng: 131.0604,
          stay: "70 min",
          drive: "约 75 min",
          tags: ["鸟居", "海崖"],
          desc: "海边红色鸟居是山口段辨识度很高的画面，适合放在下午光线里。",
          note: "海边停车和道路较窄，旺季需要预留机动时间。"
        },
        {
          time: "17:25",
          name: "长门汤本温泉",
          place: "Nagato Yumoto Onsen",
          lat: 34.3296,
          lng: 131.1763,
          stay: "Overnight",
          drive: "约 45 min",
          tags: ["温泉", "夜宿"],
          desc: "第五晚用温泉收束，第二天进秋吉台会比较顺。",
          note: "如果更想住海边，也可以改住萩或长门市区。"
        }
      ]
    },
    {
      day: "Day 6",
      short: "秋吉台与山口",
      title: "秋吉台、秋芳洞、别府弁天池与山口市",
      summary: "把山口县中部的喀斯特地貌、洞窟、清水池和城市文化放到同一天比较。",
      distance: "约 145 km",
      drive: "约 3.5 h",
      overnight: "汤田温泉 / 防府",
      color: "#0e7490",
      stops: [
        {
          time: "09:00",
          name: "长门汤本出发",
          place: "Nagato Yumoto Onsen",
          lat: 34.3296,
          lng: 131.1763,
          stay: "15 min",
          drive: "出发",
          tags: ["温泉街", "出发"],
          desc: "从温泉街出发，今天切到山口中部的地貌和城市线。",
          note: "秋芳洞内部湿滑，鞋底防滑会舒服很多。"
        },
        {
          time: "09:55",
          name: "秋吉台展望台",
          place: "Akiyoshidai Plateau",
          lat: 34.2347,
          lng: 131.3052,
          stay: "55 min",
          drive: "约 45 min",
          tags: ["喀斯特", "高原"],
          desc: "秋吉台的高原和石灰岩地貌是山口段自然线的主轴，开车路段也很有自驾感。",
          note: "雾天视野会受影响，但氛围也会更安静。"
        },
        {
          time: "11:05",
          name: "秋芳洞",
          place: "Akiyoshido Cave",
          lat: 34.2266,
          lng: 131.3037,
          stay: "100 min",
          drive: "约 10 min",
          tags: ["洞窟", "自然"],
          desc: "从高原进入地下洞窟，和前几天的海岸、神社形成完全不同的体验类型。",
          note: "正式行程要核对营业时间和入口停车位置。"
        },
        {
          time: "13:10",
          name: "别府弁天池",
          place: "Beppu Benten Pond",
          lat: 34.2636,
          lng: 131.2306,
          stay: "45 min",
          drive: "约 30 min",
          tags: ["清水", "短停"],
          desc: "作为秋吉台周边的小尺度自然点，适合拿来比较：要不要把小清新水景放进行程。",
          note: "如果当天想轻松，秋吉台和秋芳洞已经足够。"
        },
        {
          time: "15:05",
          name: "瑠璃光寺五重塔",
          place: "Rurikoji Five-storied Pagoda",
          lat: 34.1832,
          lng: 131.4721,
          stay: "65 min",
          drive: "约 55 min",
          tags: ["寺院", "山口市"],
          desc: "山口市的标志性古建，适合给山口中部加一段安静的文化停留。",
          note: "若遇到修缮遮挡，可以把重点转向香山公园散步。"
        },
        {
          time: "17:00",
          name: "汤田温泉",
          place: "Yuda Onsen",
          lat: 34.1634,
          lng: 131.4592,
          stay: "Overnight",
          drive: "约 15 min",
          tags: ["温泉", "夜宿"],
          desc: "第六晚可以住汤田温泉，城市便利度高，也方便第七天往角岛或下关走。",
          note: "如果想更靠濑户内海，可改住防府。"
        }
      ]
    },
    {
      day: "Day 7",
      short: "角岛到下关",
      title: "防府、角岛大桥、唐户市场与关门海峡",
      summary: "最后一天给两个方向：想看海景就走角岛，想少开车就偏防府和下关。",
      distance: "约 190 km",
      drive: "约 4 h",
      overnight: "下关 / 北九州返程",
      color: "#be185d",
      stops: [
        {
          time: "08:40",
          name: "汤田温泉出发",
          place: "Yuda Onsen",
          lat: 34.1634,
          lng: 131.4592,
          stay: "15 min",
          drive: "出发",
          tags: ["出发", "选择日"],
          desc: "最后一天是广度候选日，可以按体力在角岛海景和防府文化线之间取舍。",
          note: "如果当天有航班或新干线，不建议把所有点都硬塞进去。"
        },
        {
          time: "09:20",
          name: "防府天满宫",
          place: "Hofu Tenmangu Shrine",
          lat: 34.0546,
          lng: 131.5743,
          stay: "55 min",
          drive: "约 35 min",
          tags: ["神社", "备选"],
          desc: "防府能给山口段加一条濑户内侧文化线，适合不想绕角岛时保留。",
          note: "若决定走角岛，这一站可以删掉。"
        },
        {
          time: "11:45",
          name: "角岛大桥展望点",
          place: "Tsunoshima Bridge Viewpoint",
          lat: 34.3529,
          lng: 130.8855,
          stay: "45 min",
          drive: "约 115 min",
          tags: ["海桥", "拍照"],
          desc: "角岛大桥是山口自驾的强视觉点，适合做路线预览里的大场面候选。",
          note: "这段绕路明显，只有天气好、时间足时才值得。"
        },
        {
          time: "12:45",
          name: "角岛灯塔",
          place: "Tsunoshima Lighthouse",
          lat: 34.3847,
          lng: 130.8494,
          stay: "60 min",
          drive: "约 20 min",
          tags: ["灯塔", "海岛"],
          desc: "过桥上岛后，可以用灯塔和海边散步补足角岛段的停留感。",
          note: "旺季车流会慢，别把下关午餐时间卡太死。"
        },
        {
          time: "15:20",
          name: "唐户市场",
          place: "Karato Market",
          lat: 33.9576,
          lng: 130.9436,
          stay: "75 min",
          drive: "约 85 min",
          tags: ["海鲜", "下关"],
          desc: "下关的鱼市场和海峡区域适合作为全线收束，也方便连接九州或新干线。",
          note: "市场热闹时段和营业日要提前确认，晚到可能只适合看海峡。"
        },
        {
          time: "17:05",
          name: "关门海峡 / 赤间神宫",
          place: "Kanmon Strait",
          lat: 33.9607,
          lng: 130.9587,
          stay: "55 min",
          drive: "约 8 min",
          tags: ["海峡", "终点"],
          desc: "用关门海峡给路线一个明确终点：从日本海一路开到本州西端。",
          note: "返程可选下关、新下关、小仓或北九州机场。"
        }
      ]
    }
  ];

  const PHOTO_GRADIENTS = [
    "linear-gradient(120deg, rgba(216,105,42,.82), rgba(242,198,109,.78)), radial-gradient(circle at 70% 20%, rgba(255,255,255,.58), transparent 28%)",
    "linear-gradient(120deg, rgba(31,155,180,.84), rgba(15,139,112,.72)), radial-gradient(circle at 25% 10%, rgba(255,255,255,.55), transparent 26%)",
    "linear-gradient(120deg, rgba(37,99,235,.78), rgba(138,63,252,.62)), radial-gradient(circle at 78% 16%, rgba(255,255,255,.5), transparent 28%)",
    "linear-gradient(120deg, rgba(41,50,65,.86), rgba(216,105,42,.65)), radial-gradient(circle at 30% 12%, rgba(255,255,255,.5), transparent 24%)",
    "linear-gradient(120deg, rgba(194,65,12,.82), rgba(15,139,112,.62)), radial-gradient(circle at 74% 18%, rgba(255,255,255,.5), transparent 26%)",
    "linear-gradient(120deg, rgba(14,116,144,.82), rgba(242,198,109,.62)), radial-gradient(circle at 26% 14%, rgba(255,255,255,.5), transparent 24%)",
    "linear-gradient(120deg, rgba(190,24,93,.76), rgba(31,155,180,.7)), radial-gradient(circle at 72% 18%, rgba(255,255,255,.52), transparent 26%)"
  ];


  window.TRIP_DATA = {
    id: "sanin-yamaguchi-2026-08",
    title: "鸟取・岛根・山口自驾游广度版",
    routeDays: ROUTE_DAYS,
    photoGradients: PHOTO_GRADIENTS
  };
})();
