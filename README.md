# 课本英语 vs 地道英语

一个纯前端的英语情景答题小游戏：同一个场面，课本教一种说法，老外用另一种。三个真实场面、三条命，说错一句空气就凉一次。

**在线试玩 → https://lyjellie.github.io/en-learning/**

两个模式，共用一个引擎：

| 模式 | 面向 | 题量 | 内容 |
|---|---|---|---|
| 🧒 小学生入门 | 刚学英语的小学生 | 75 题 | 打招呼 / 课堂 / 生活 / 交朋友 / 出门在外 |
| 🧑‍💼 成人地道 | 出国、外企、留学 | 4 题 | 点餐 / 旅途 / 职场 / 生活 |

无依赖、无框架。仓库根目录的 `index.html` 是构建好的**单文件成品**，双击就能玩，拷走也能跑。

---

## 玩法

- 封面选模式 → 3 颗心血量 + 进度条，每局 3 题，答错扣一颗心，**血量归零立即 GG 结算**
- 答对：整张卡片变**浅绿底 + 绿边**，撒花 + 冲击字
- 答错：整张卡片变**浅红底 + 红边**，红屏闪烁 + 画面震动 + 心碎裂，并**高亮正确选项**（打上 `✓ 正解` 标）
- 每题都有逐项解析 + 黄色「避坑解析」框
- 结算给称号、弱项诊断和「带走清单」；可以「再来一次」（同模式）或「换个模式」
- 支持键盘 A / B / C 作答；`prefers-reduced-motion` 下自动关动效

两个模式的文案是分开的：成人版答错弹 `AWKWARD! 空气突然安静…`，小学生版弹 `OOPS! 没关系，看看解析～`；称号也从「字面直译爱好者」换成「英语小新手」，答错不打击。

## 抽题逻辑

每次开始都重新抽题，`EN.draw()` 五步：

1. **Fisher–Yates 洗牌**打乱当前模式的题库（每种排列等概率）
2. 上一局出过的题排到队尾，优先抽没做过的（每个模式各记一份）
3. 依次取题，同一大类先只取 1 道 → 一局里 3 个场景不重样
4. 大类数量不够时用剩下的题补满 `ROUND`
5. 按 `level` 升序排列 → 难度由浅入深

小学生模式还会**把三个选项也洗一遍**（`shuffleOptions: true`）。题库越大，正解越容易扎堆在某个位置，小朋友就会摸出"点第一个准没错"；打乱之后位置彻底失效。成人模式关掉了这个开关，因为 `w-01` 的解析里写了"用 C 选项的 Yes, and 法则"，位置不能动。

实测：小学生模式 75 题、5 个大类，可抽出 **33 750 种不同组合**（`C(5,3) × 15³`）。用 headless 浏览器跑 200 局 600 题，每题都点正解 → 判定错误 0 次，正解位置 A/B/C ≈ 214/207/179，五个大类出场次数 112~125，分布均匀。

## 访问量统计

页面底部有一个「累计访问」计数器，用的是 [hits.sh](https://hits.sh) 的免费挂件——它返回一张 SVG 图片，浏览器每加载一次就自动 +1：

```html
<img src="https://hits.sh/lyjellie.github.io/en-learning.svg?style=flat-square&label=views&color=ff4757&labelColor=111111"
     onerror="document.getElementById('visitCounter').hidden = true;">
```

- **计数的 key 就是 URL 里那段路径**（`lyjellie.github.io/en-learning`）。想单独统计别的页面就换路径；想清零，换一个没用过的路径即可
- 不用注册、不写 Cookie、不加 JS SDK，就是一张图片
- 配色跟着页面走：`labelColor=111111` 黑标签、`color=ff4757` 红数字，外面套一层粗黑边 + 硬投影，和整体风格一致
- **加载不出来时（离线、被广告拦截插件屏蔽）整行自动隐藏**，不会在页面底部留一个裂图

## 题库

### 🧒 小学生入门（75 题，五大类各 15 题）

| 大类 | key | id | 考什么 |
|---|---|---|---|
| 👋 打招呼篇 | `hello` | `kh-` | Good morning / Nice to meet you / How are you / What's your name / Have a nice day → You too / Where are you from / This is my friend / 电话里的 This is Lily / 老师不叫 teacher / Morning! / Bye-bye 偏幼 / What's up? / call me Anna / 别叫 aunt |
| 🏫 课堂篇 | `class` | `kc-` | 点名答"到" Here! / May I …, please? / I don't understand / page ten / 迟到 May I come in? / 短答 Yes, I do. / Line up / 忘带作业 forgot / borrow 与 lend / Read after me / Work in pairs / Time's up / Are you with me? / Sure, here you are / Let me try |
| 🏠 生活篇 | `life` | `kl-` | What color…? / Would you like…? / 被夸怎么回 / fine 与 nine / Help yourself! / Bless you! / For here or to go? / 天气 It's sunny / I have a headache / change 是零钱 / Dinner is ready / I'm full / Make a wish / Watch your step / How many |
| 🎈 交朋友篇 | `friend` | `kf-` | Can I play with you? / Sorry 与 Excuse me / Here you are 三句链 / Are you OK? / Would you like some? / Your turn! / After you / 收礼物当场拆 / No problem / 委婉拒绝邀请 / Can you help me / 夸人 I like your… / Cool! / Good game / Same here |
| 🧳 出门在外篇 | `trip` | `kt-` | 问路先说 Excuse me / How much is it? / Wait in line / 听方向 turn left / Chicken or beef? / fasten your seat belt / One child ticket / take a picture of us / 让座 / Is this seat taken? / Take off your shoes / I'm lost / try it on / No photos / Can I have …, please |

写小学生题的四条原则：

1. 句子不超过 8 个词，只用小学阶段词汇
2. 干扰项必须是**中国小朋友真的会犯的错**（说反了 / 答非所问 / 逐词直译），不放没人会选的搞笑选项
3. 解析先说清"这句到底什么意思"，再给一条能直接背的规律
4. 语气全程鼓励，答错不嘲笑

### 🧑‍💼 成人地道（4 题，四大类各 1 题）

| 大类 | key | id | 考什么 |
|---|---|---|---|
| 🏪 点餐生存篇 | `order` | `o-` | Subway 的 `Toasted?` |
| ☕ 机场旅途篇 | `travel` | `t-` | 咖啡师的 `Room for milk?` |
| 💼 外企职场篇 | `office` | `w-` | 委婉反对：`I see your point, but…` |
| 🛒 生活日常篇 | `life` | `l-` | 超市的 `Paper or plastic?` |

## 项目结构

题库拆成了多个文件（好找好改），发布时再合并成单文件——和 `jp-learning` 的方案一致：

```
index.html          ← 构建产物：单文件成品，GitHub Pages 跑的就是它
src/index.html      开发版：样式 + 引擎 + <script src="../data/*.js">
data/
  _core.js          全局设置 CORE / 模式定义 MODES / 注册器 EN.add / 自检 / 抽题
  kids-hello.js     🧒 打招呼篇
  kids-class.js     🧒 课堂篇
  kids-life.js      🧒 生活篇
  kids-friend.js    🧒 交朋友篇
  kids-trip.js      🧒 出门在外篇
  adult.js          🧑‍💼 成人地道（四个大类都在这一个文件里）
build.mjs           把 <script src> 原地内联 → 根目录 index.html
.nojekyll           让 GitHub Pages 原样托管（否则 _core.js 这种下划线开头的会被忽略）
```

引擎里用 `M` 表示当前模式，`M.BANK` / `M.PACKS` / `M.RANKS` / `M.impactOk` 全从这里取，所以加模式不用改引擎。

## 开发流程

```bash
# 1. 改题：编辑 data/*.js
# 2. 看效果：直接双击 src/index.html
#    （file:// 下 <script src="../data/xxx.js"> 正常工作，不用起服务器）
# 3. 发布前合并：
node build.mjs        # → 根目录 index.html
# 4. 提交（src/、data/、index.html 一起提交）
```

`build.mjs` 做了两道安全检查：内联前把代码里的 `</script` 转义成 `<\/script`（否则浏览器解析到它会当场截断脚本，后面的代码会被当成 HTML 吐在页面上），构建完再数一遍 `</script` 的个数对不对，不对就中止写入。

## 加一道题

打开对应的 `data/kids-xxx.js`，往数组里追加一个对象（`pack` 可以不写，`EN.add()` 会按文件自动补上）：

```js
{
  id:'kt-16', level:2, type:'phrase',
  scene:'🧳 在酒店前台',
  situation:'退房时前台问你行李要不要先寄存。',
  quote:'',                              // 老外的原话，渲染成大号引用框；没有就写 ''
  note:'你们的飞机是晚上的。',              // 灰色补充小字，可留 ''
  ask:'想说"能帮我存一下行李吗"，该说？',
  options:[
    { text:'…', note:'括号里的语感提示', badge:'太冲', kind:'trap',   ok:false, why:'…' },
    { text:'…', note:'…',              badge:'地道', kind:'native', ok:true,  why:'…' },
    { text:'…', note:'…',              badge:'生硬', kind:'stiff',  ok:false, why:'…' }
  ],
  explain:'💡 …可用 <span class="highlight">重点</span> 标高亮',
  takeaway:'一句话金句，会出现在结算页的带走清单里'
}
```

改完刷新 `src/index.html` 就能看到效果；发布前记得跑一次 `node build.mjs`。

### 字段说明

| 字段 | 说明 |
|---|---|
| `id` | 唯一编号（小学生 `kh`/`kc`/`kl`/`kf`/`kt`，成人 `o`/`t`/`w`/`l`） |
| `pack` | 大类，必须是所属模式 `PACKS` 里已定义的 key；同文件内可省略 |
| `level` | 难度 1~3，决定它在一局里的出场顺序 |
| `type` | `listening` 听力 / `phrase` 说法 / `culture` 习惯 / `social` 情商 / `word` 单词 / `manners` 礼貌 |
| `scene` | 场景名，显示在顶部黑胶囊里 |
| `situation` / `note` | 情景铺垫 / 灰色补充小字 |
| `quote` | 老外说的原话；听力题必填，纯情景题可留空 |
| `ask` | 设问 |
| `options` | **必须正好 3 个**，且**恰好 1 个** `ok:true` |
| `text` / `note` | 选项正文（说法题写英文，理解题写中文释义）/ 括号里的语感提示 |
| `badge` / `kind` | 语感标签 / 配色：`trap` 红（踩雷）、`native` 绿（地道）、`stiff` 黄（生硬） |
| `why` | 逐项解析，答错时会同时显示"你选的"和"正解" |
| `explain` | 黄框「避坑解析」，本题的核心知识点 |
| `takeaway` | 一句话金句，用于结算页 |

### 三条内容约定

- **配色只表示踩雷风险，不表示对错**。像"香蕉是什么颜色""Your turn 什么意思"这种纯知识题，三个选项要同色（75 题里有 31 道是这么写的），否则小朋友会发现"点绿的准没错"。
- **标签不要总是"绿色 = 正解"**。故意放几道"看起来礼貌其实用错场合"的题，玩家才不会靠标签蒙。
- **别在解析里写"选 C"**。小学生模式的选项顺序是随机的，位置会变；成人模式的 `w-01` 因为解析里写死了 C，只能单独关掉打乱开关。

### 题库自检

页面加载时会把**两套题库都检查一遍**：字段缺失、`id` 重复、正解数量不为 1、`kind`/`type`/`pack` 非法、某个大类一道题都没有、题目数少于 `ROUND`……有问题就在页面顶部弹红条并在控制台打印，指到哪个模式第几题第几个选项。

## 加一个大类

以「🐶 动物与自然篇」为例：

1. 在 `data/_core.js` 的 `MODES.kids.PACKS` 里加一行 `animal: { label:'🐶 动物与自然篇', cn:'动物自然' }`
2. 新建 `data/kids-animal.js`，照抄别的题库文件的壳子，用 `EN.add('kids', 'animal', [...])` 注册
3. 在 `src/index.html` 里加一行 `<script src="../data/kids-animal.js"></script>`
4. `node build.mjs`

**加大类比往老类里堆题划算得多**：抽题是每类各取 1 道，组合数按 `C(大类数, 3) × 每类题数³` 算——4 类 15 题是 13 500 种，5 类 15 题就跳到 33 750 种。

## 加一个模式

比如想加「初中生」模式：在 `data/_core.js` 的 `MODES` 里照抄一份，改 `key` / `emoji` / `name` / `sub` / `chip` / `PACKS` / `RANKS` / `shuffleOptions` / 文案，`BANK` 留 `[]`；再建对应的 `data/teen-*.js`，用 `EN.add('teen', ...)` 注册。封面按钮、抽题、结算全部自动适配，引擎一行都不用动。

## 题库能存多少？

代码层面没有上限：抽题每局只是对当前模式的题库做一次 O(n) 洗牌，1000 题和 10 题的开销差别可以忽略。真正的约束是文件体积和维护手感。单题源码平均 **1.2 KB**：

| 小学生题量 | 单文件大小 | 可抽组合数 | 说明 |
|---|---|---|---|
| 40 题（4 类各 10） | 97 KB | 4 000 | 舒适区 |
| **75 题（现在，5 类各 15）** | **143 KB** | **33 750** | 已拆成 data/*.js，编辑不再受体积影响 |
| 150 题（5 类各 30） | ~230 KB | 270 000 | 单文件仍能秒开，靠拆分维持可维护性 |
| 300 题以上 | 400 KB+ | 200 万+ | 考虑按需加载，或者拆成多个页面 |

作为参照：一张手机照片就有 2~4 MB，所以 200 KB 的 HTML 在加载上完全不是问题。

## 部署

推到 GitHub 后，Settings → Pages → Source 选 `main` / `root` 即可。Pages 加载的是根目录那个**构建好的单文件 `index.html`**，`src/` 和 `data/` 只是源码，不影响线上运行。`.nojekyll` 保证 `_core.js` 这种下划线开头的文件不被 Jekyll 忽略。
