# 课本英语 vs 地道英语

一个纯前端的英语情景答题小游戏：雅思考了 7 分，点个三明治全靠比划。三个真实场面、三条命，说错一句空气就凉一次。

单文件、无依赖、无构建：双击 `index.html` 即可玩；直接把仓库推到 GitHub Pages 就能上线。

---

## 玩法

- 3 颗心血量 + 进度条，每局 3 题，答错扣一颗心，**血量归零立即 GG 结算**
- 答对：整张卡片变**浅绿底 + 绿边**，撒花 + `NAILED IT!` 冲击字
- 答错：整张卡片变**浅红底 + 红边**，红屏闪烁 + 画面震动 + 心碎裂，并**高亮正确选项**（打上 `✓ 正解` 标）
- 每题都有逐项解析 + 黄色「避坑解析」框
- 结算给称号、弱项诊断和「带走清单」
- 支持键盘 A / B / C 作答；`prefers-reduced-motion` 下自动关动效

## 抽题逻辑

每次点「开始挑战」都重新抽题，`drawSet()` 五步：

1. **Fisher–Yates 洗牌**打乱整个题库（每种排列等概率）
2. 上一局出过的题排到队尾，优先抽没做过的
3. 依次取题，同一大类先只取 1 道 → 一局里 3 个场景不重样
4. 大类数量不够时用剩下的题补满 `ROUND`
5. 按 `level` 升序排列 → 难度由浅入深

## 题库结构

四大类各 1 题（可继续扩充）：

| 大类 | key | id 前缀 | 考什么 |
|---|---|---|---|
| 🏪 点餐生存篇 | `order` | `o-` | Subway / 快餐店 / 咖啡店的高频省略问句 |
| ☕ 机场旅途篇 | `travel` | `t-` | 机场、酒店、交通里的地道缩略表达 |
| 💼 外企职场篇 | `office` | `w-` | 会议、邮件、反馈的分寸与情商 |
| 🛒 生活日常篇 | `life` | `l-` | 超市、药店、快递、租房的生活常识 |

## 代码结构

单文件 `index.html`，内部分三段，加题只动第二段：

```
<style>            复古扁平 UI（米底 + 粗黑边 + 硬投影）
<script>
  ★ 第一段 CONFIG   分类 PACKS / 题型 TYPES / ROUND / MAX_HP / 称号 RANKS
  ★ 第二段 BANK     题库数组 ← 扩充题目只改这里
  ★ 第三段 引擎     洗牌抽题 / 血量 / 判定 / 特效 / 结算 / 题库自检
```

## 加一道题

往 `BANK` 数组里追加一个对象即可：

```js
{
  id:'o-02', pack:'order', level:2, type:'phrase',
  scene:'🏪 快餐店篇',
  situation:'点完汉堡，收银员问了一句：',
  quote:'For here or to go?',          // 老外的原话，渲染成大号引用框；没有就写 ''
  note:'你身后还排着五个人。',           // 灰色补充小字，可留 ''
  ask:'他在问你什么？',
  options:[
    { text:'…', note:'括号里的语感提示', badge:'直译', kind:'stiff',  ok:false, why:'…' },
    { text:'…', note:'…',              badge:'地道', kind:'native', ok:true,  why:'…' },
    { text:'…', note:'…',              badge:'踩雷', kind:'trap',   ok:false, why:'…' }
  ],
  explain:'💡 听力避坑：…可用 <span class="highlight">重点</span> 标高亮',
  takeaway:'一句话金句，会出现在结算页的带走清单里'
}
```

### 字段说明

| 字段 | 说明 |
|---|---|
| `id` | 唯一编号，前缀 = 大类（`o` / `t` / `w` / `l`） |
| `pack` | 必须是 `CONFIG.PACKS` 里已定义的 key |
| `level` | 难度 1~3，决定它在一局里的出场顺序 |
| `type` | `listening` 听力题 / `phrase` 说法题 / `culture` 习惯题 / `social` 情商题 |
| `scene` | 场景名，显示在顶部黑胶囊里 |
| `situation` / `note` | 情景铺垫 / 灰色补充小字 |
| `quote` | 老外说的原话；理解题（如 `Room for milk?`）必填，纯情景题可留空 |
| `ask` | 设问 |
| `options` | **必须正好 3 个**，且**恰好 1 个** `ok:true` |
| `text` / `note` | 选项正文（说法题写英文，理解题写中文释义）/ 括号里的语感提示 |
| `badge` / `kind` | 语感标签 / 配色：`trap` 红（踩雷）、`native` 绿（地道）、`stiff` 黄（生硬） |
| `why` | 逐项解析，答错时会同时显示"你选的"和"正解" |
| `explain` | 黄框「避坑解析」，本题的核心知识点 |
| `takeaway` | 一句话金句，用于结算页 |

### 两条内容约定

- **配色只表示踩雷风险，不表示对错**。纯知识题三个选项可以同色，避免颜色泄题。
- **标签不要总是"绿色 = 正解"**。故意放几道"看起来礼貌其实用错场合"的题，玩家才不会靠标签蒙。

### 题库自检

页面加载时自动检查：字段缺失、`id` 重复、正解数量不为 1、`kind`/`type`/`pack` 非法、题目数少于 `ROUND`……有问题就在页面顶部弹红条并在控制台打印，指到第几题第几个选项。

## 部署

推到 GitHub 后，Settings → Pages → Source 选 `main` / `root` 即可。`.nojekyll` 让 Pages 原样托管静态文件。

## 题量涨上去之后（可选）

题目超过 ~30 道时，单文件会变长，可按 `jp-learning` 的方案拆分：

```
index.html          引擎与样式
data/_core.js       CONFIG + 注册器 EN.add() + 自检 + 抽题
data/order.js       点餐生存篇
data/travel.js      机场旅途篇
data/office.js      外企职场篇
data/life.js        生活日常篇
build.mjs           把 <script src> 原地内联，产出 dist/index.html 单文件版
```

拆分成本很低：本文件的三段结构和 `jp-learning` 的三层结构一一对应，第一段搬进 `_core.js`，第二段按 `pack` 拆成四个 `data/*.js`，第三段留在 `index.html` 里。
