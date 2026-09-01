# 课本英语 vs 地道英语

一个纯前端的英语情景答题小游戏：同一个场面，课本教一种说法，老外用另一种。三个真实场面、三条命，说错一句空气就凉一次。

两个模式，共用一个引擎：

| 模式 | 面向 | 题量 | 内容 |
|---|---|---|---|
| 🧒 小学生入门 | 刚学英语的小学生 | 60 题 | 打招呼 / 课堂 / 生活 / 交朋友 |
| 🧑‍💼 成人地道 | 出国、外企、留学 | 4 题 | 点餐 / 旅途 / 职场 / 生活 |

单文件、无依赖、无构建：双击 `index.html` 即可玩；仓库推到 GitHub Pages 就能上线。

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

每次开始都重新抽题，`drawSet()` 五步：

1. **Fisher–Yates 洗牌**打乱当前模式的题库（每种排列等概率）
2. 上一局出过的题排到队尾，优先抽没做过的（两个模式各记一份）
3. 依次取题，同一大类先只取 1 道 → 一局里 3 个场景不重样
4. 大类数量不够时用剩下的题补满 `ROUND`
5. 按 `level` 升序排列 → 难度由浅入深

小学生模式还会**把三个选项也洗一遍**（`shuffleOptions: true`）。题库越大，正解越容易扎堆在某个位置，小朋友就会摸出"点第一个准没错"；打乱之后位置彻底失效。成人模式关掉了这个开关，因为 `w-01` 的解析里写了"用 C 选项的 Yes, and 法则"，位置不能动。

实测：小学生模式 60 题能抽出 **13 500 种不同组合**（4 类选 3 × 每类 15 题）；跑 2 万局模拟出现过 10 372 种，单题出现 910~1085 次（均值 1000）。跑 200 局 600 题，正解落在 A/B/C 的次数是 212 / 184 / 204，判定零错误。

## 题库

### 🧒 小学生入门（60 题，四大类各 15 题）

| 大类 | key | id | 考什么 |
|---|---|---|---|
| 👋 打招呼篇 | `hello` | `kh-` | Good morning / Nice to meet you / See you tomorrow / How are you / What's your name / Have a nice day → You too / Where are you from / This is my friend / 电话里的 This is Lily / 老师不叫 teacher / Morning! / Bye-bye 偏幼 / What's up? / call me Anna / 别叫 aunt |
| 🏫 课堂篇 | `class` | `kc-` | 点名答"到" Here! / May I …, please? / I don't understand / 听懂 page ten / 迟到 May I come in? / 短答 Yes, I do. / Line up / 忘带作业 forgot / borrow 与 lend / Read after me / Work in pairs / Time's up / Are you with me? / Sure, here you are / Let me try |
| 🏠 生活篇 | `life` | `kl-` | What color…? 回什么 / Would you like…? / 被夸怎么回 / fine 与 nine / Help yourself! / Bless you! / For here or to go? / 天气 It's sunny / I have a headache / change 是零钱 / Dinner is ready / I'm full / Make a wish / Watch your step / How many |
| 🎈 交朋友篇 | `friend` | `kf-` | Can I play with you? / Sorry 与 Excuse me / Here you are 三句链 / Are you OK? / Would you like some? / Your turn! / After you / 收礼物当场拆 / No problem / 委婉拒绝邀请 / Can you help me / 夸人 I like your… / Cool! / Good game / Same here |

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

## 代码结构

单文件 `index.html`，内部分四段，加题只动第二段：

```
<style>            复古扁平 UI（米底 + 粗黑边 + 硬投影）
<script>
  ★ 第一段 CORE       ROUND / MAX_HP / 题型 TYPES（两个模式共用）
  ★ 第二段 题库       BANK_KIDS（60 题）· BANK_ADULT（4 题） ← 扩充题目只改这里
  ★ 第三段 MODES      每个模式 = 分类 PACKS + 称号 RANKS + 题库 + 文案
  ★ 第四段 引擎       洗牌抽题 / 血量 / 判定 / 特效 / 结算 / 题库自检
```

引擎里用 `M` 表示当前模式，`M.BANK` / `M.PACKS` / `M.RANKS` / `M.impactOk` 全从这里取，所以加模式不用改引擎。

## 加一道题

往对应的 `BANK_KIDS` 或 `BANK_ADULT` 数组里追加一个对象：

```js
{
  id:'kc-04', pack:'class', level:2, type:'phrase',
  scene:'🏫 想借橡皮',
  situation:'你的橡皮找不到了，想跟同桌借一块。',
  quote:'',                              // 老外的原话，渲染成大号引用框；没有就写 ''
  note:'他正在写作业。',                   // 灰色补充小字，可留 ''
  ask:'该怎么开口？',
  options:[
    { text:'…', note:'括号里的语感提示', badge:'太冲', kind:'trap',   ok:false, why:'…' },
    { text:'…', note:'…',              badge:'地道', kind:'native', ok:true,  why:'…' },
    { text:'…', note:'…',              badge:'生硬', kind:'stiff',  ok:false, why:'…' }
  ],
  explain:'💡 …可用 <span class="highlight">重点</span> 标高亮',
  takeaway:'一句话金句，会出现在结算页的带走清单里'
}
```

### 字段说明

| 字段 | 说明 |
|---|---|
| `id` | 唯一编号（小学生 `kh`/`kc`/`kl`/`kf`，成人 `o`/`t`/`w`/`l`） |
| `pack` | 必须是所属模式 `MODES.xxx.PACKS` 里已定义的 key |
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

- **配色只表示踩雷风险，不表示对错**。像"香蕉是什么颜色""Your turn 什么意思"这种纯知识题，三个选项要同色（60 题里有 24 道是这么写的），否则小朋友会发现"点绿的准没错"。
- **标签不要总是"绿色 = 正解"**。故意放几道"看起来礼貌其实用错场合"的题，玩家才不会靠标签蒙。
- **别在解析里写"选 C"**。小学生模式的选项顺序是随机的，位置会变；成人模式的 `w-01` 因为解析里写死了 C，只能单独关掉打乱开关。

## 题库能存多少？

代码层面没有上限：`drawSet()` 每局只是对当前模式的题库做一次 O(n) 洗牌，1000 题和 10 题的开销差别可以忽略。真正的约束是文件体积和维护手感。

单题源码平均 **1.2 KB**（含情景、三个选项、逐项解析、避坑解析、金句）：

| 小学生题量 | 单文件大小 | 可抽组合数 | 说明 |
|---|---|---|---|
| 24 题（每类 6） | 78 KB | 864 | 玩十几局才会撞见重复题 |
| 40 题（每类 10） | 97 KB | 4 000 | 舒适区，单文件还很好翻 |
| **60 题（现在，每类 15）** | **119 KB** | **13 500** | 单文件比较舒服的上限，再多建议拆 `data/*.js` |
| 100 题（每类 25） | ~168 KB | 62 500 | 单文件仍能秒开，但编辑器里翻起来累 |
| 200 题以上 | 286 KB+ | 50 万+ | 一定要拆文件，否则改一道题得翻半天 |

作为参照：一张手机照片就有 2~4 MB，所以 200 KB 的 HTML 在加载上完全不是问题——**先卡住的一定是你的耐心，不是浏览器**。

组合数按当前抽题规则算：`C(4,3) × 每类题数³`（4 个大类里选 3 类，每类抽 1 题）。想让组合数涨得更快，加**大类**比加题更有效：5 个大类每类 6 题（30 题）就有 `C(5,3) × 6³ = 2160` 种。

实用建议：

- **每类 15 题**（现在这样）：13 500 种组合、119 KB，已经是单文件比较舒服的上限
- 再往上加，先按最后一节拆成 `data/*.js`；或者加**第五个大类**——组合数会从 13 500 跳到 `C(5,3) × 15³ = 33 750`，比继续往老类里堆题划算得多
- 加题时注意四类**保持均衡**：抽题是每类各取 1 道，某一类堆到 20 题、别的类只有 3 题，也不会提高它的出场率

### 题库自检

页面加载时会把**两套题库都检查一遍**：字段缺失、`id` 重复、正解数量不为 1、`kind`/`type`/`pack` 非法、题目数少于 `ROUND`……有问题就在页面顶部弹红条并在控制台打印，指到哪个模式第几题第几个选项。

## 再加一个模式

比如想加「初中生」模式：

1. 在第二段写一个 `BANK_TEEN = [...]`
2. 在第三段 `MODES` 里照抄一份，改 `key` / `emoji` / `name` / `sub` / `chip` / `PACKS` / `RANKS` / `shuffleOptions` / 文案，`BANK` 指向 `BANK_TEEN`
3. 在引擎的 `lastIds` 里加一个同名空 Set

封面按钮和抽题、结算全部自动适配，引擎不用动。

## 部署

推到 GitHub 后，Settings → Pages → Source 选 `main` / `root` 即可。`.nojekyll` 让 Pages 原样托管静态文件。

## 题量涨上去之后（可选）

题量继续往上涨时，可按 `jp-learning` 的方案拆分：

```
index.html          引擎与样式
data/_core.js       CORE + MODES 骨架 + 注册器 + 自检 + 抽题
data/kids-*.js      小学生各大类题库
data/adult-*.js     成人各大类题库
build.mjs           把 <script src> 原地内联，产出 dist/index.html 单文件版
```

拆分成本很低：本文件的四段结构和 `jp-learning` 的三层结构一一对应，第一、三段搬进 `_core.js`，第二段按 `pack` 拆成若干 `data/*.js`，第四段留在 `index.html` 里。
