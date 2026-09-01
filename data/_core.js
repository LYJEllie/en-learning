/* ============================================================
   题库核心 —— 全局设置 / 模式定义 / 注册器 / 自检 / 抽题
   题目数据在同目录的 kids-*.js 与 adult.js
   ------------------------------------------------------------
   加一道题：打开对应的 data/kids-xxx.js，往数组里追加一个对象。
   加一个大类：在下面 MODES.kids.PACKS 里加一行，建一个同名
              data/kids-xxx.js，再去 src/index.html 加一行 <script src>。
   加一个模式：照抄一份 MODES.xxx，BANK 留空数组即可。

   字段说明：
     id        唯一编号（小学生 kh/kc/kl/kf/kt，成人 o/t/w/l）
     pack      大类，必须是所属模式 PACKS 里已定义的 key
     level     难度 1~3，同一局里按 1→3 排序出题
     type      CORE.TYPES 的 key
     scene     场景名（显示在顶部黑胶囊里）
     situation 情景铺垫（中文）
     quote     老外说的那句原话（大号引用框；没有就留空 ''）
     note      情景补充（灰色小字，可留 ''）
     ask       设问
     options   必须正好 3 个，且恰好 1 个 ok:true
                 text/note  选项正文与语感提示
                 badge      语感标签
                 kind       配色：trap 红(踩雷) / native 绿(地道) / stiff 黄(生硬)
                            ※ 纯知识题三项同色，避免颜色泄题
                 why        逐项解析
     explain   💡 避坑解析（黄框正文）
     takeaway  一句话金句（结算页"带走清单"用）
   ============================================================ */
(function (root) {
  "use strict";

  const CORE = {
    ROUND:  3,   // 每局题数
    MAX_HP: 3,   // 初始血量（3 颗心）

    /* 题型：显示在场景胶囊旁，提示这题在考什么（两个模式共用） */
    TYPES: {
      listening: { label:'听力题' },   // 听懂对方那句话到底在问什么
      phrase:    { label:'说法题' },   // 同一个意思，哪种说法地道
      culture:   { label:'习惯题' },   // 当地规矩该怎么应对
      social:    { label:'情商题' },   // 说法没错，但会不会得罪人
      word:      { label:'单词题' },   // 该回哪个词（小学生模式）
      manners:   { label:'礼貌题' }    // 该说哪句才不失礼（小学生模式）
    }
  };

  const MODES = {

    kids: {
      key:'kids',
      emoji:'🧒',
      name:'小学生入门',
      sub:'打招呼 / 课堂 / 生活 / 交朋友 / 出门在外',
      chip:'🧒 小学生入门',
      /* 选项每次随机排序：题库写得越多，正解越容易扎堆在某个位置，
         小朋友会摸出"点第一个准没错"。打乱之后位置彻底失效 */
      shuffleOptions: true,
      BANK: [],   // 题目由 data/kids-*.js 注册进来
      PACKS: {
        hello:  { label:'👋 打招呼篇',   cn:'打招呼' },
        class:  { label:'🏫 课堂篇',     cn:'课堂用语' },
        life:   { label:'🏠 生活篇',     cn:'生活常识' },
        friend: { label:'🎈 交朋友篇',   cn:'交朋友' },
        trip:   { label:'🧳 出门在外篇', cn:'出门在外' }
      },
      /* 小学生模式的文案：答错也不打击 */
      impactOk: ['GREAT JOB!', '答对啦！'],
      impactNg: ['OOPS!', '没关系，看看解析～'],
      verdictOk: '答对了 ・ 太棒了',
      verdictNg: '答错了 ・ 记住它就赚到了',
      RANKS: [
        { min:3, rank:'英语小达人', win:true,
          en:'You did it! Perfect!',
          note:'三题全对！这几句话已经是你的了，下次真的遇到外国朋友，你也能张口就来。' },
        { min:2, rank:'进步小明星', win:true,
          en:'Great job! Almost perfect!',
          note:'只差一点点。把错的那句大声念三遍，明天就忘不掉了。' },
        { min:1, rank:'努力小学员', win:false,
          en:'Good try! Keep going!',
          note:'答对一题也很棒！英语就是这样一句一句学会的，看完解析再来一次，一定更好。' },
        { min:0, rank:'英语小新手', win:false,
          en:"Don't worry. Try again!",
          note:'第一次见到这些句子都会懵，一点也不丢人。把解析读一遍再玩一次，你会发现它们突然变简单了。' }
      ]
    },

    adult: {
      key:'adult',
      emoji:'🧑‍💼',
      name:'成人地道',
      sub:'点餐 / 旅途 / 职场 / 生活',
      chip:'🧑‍💼 成人地道',
      /* 这里保持原顺序：w-01 的解析里写了"用 C 选项的 Yes, and 法则"，位置不能动 */
      shuffleOptions: false,
      BANK: [],   // 题目由 data/adult.js 注册进来
      PACKS: {
        order:  { label:'🏪 点餐生存篇', cn:'点餐生存' },
        travel: { label:'☕ 机场旅途篇', cn:'旅途口语' },
        office: { label:'💼 外企职场篇', cn:'职场情商' },
        life:   { label:'🛒 生活日常篇', cn:'生活常识' }
      },
      impactOk: ['NAILED IT!', '答得地道！'],
      impactNg: ['AWKWARD!', '空气突然安静…'],
      verdictOk: '答对了 ・ 空气很安全',
      verdictNg: '答错了 ・ 空气凝固了',
      RANKS: [
        { min:3, rank:'地道口语达人', win:true,
          en:'You sound like a local.',
          note:'三个场面零失误。你已经能把课本英语留在课本里，把真实反应带到现场——这正是"能不能用"的分界线。' },
        { min:2, rank:'半熟留学生', win:true,
          en:'Almost there. Keep going.',
          note:'大方向没错，偶尔会漏出直译腔。记住：地道 = 短句 + 场景默契，不是把中文一个词一个词换成英文。' },
        { min:1, rank:'教科书选手', win:false,
          en:'Textbook English, real-world gap.',
          note:'语法满分，语感扣分。先把 "Yes, please." / "I brought my own." / "I see your point, but..." 这几句练成条件反射。' },
        { min:0, rank:'字面直译爱好者', win:false,
          en:'Lost in translation.',
          note:'你的英语都是逐词翻译过来的——写下来能看懂，说出口全是尴尬。好消息是：地道表达就那么几十句，套路可以速成。再来一次。' }
      ]
    }

  };

  /* ========== 洗牌：Fisher–Yates，每种排列等概率 ========== */
  function shuffle(arr){
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /* ========== 抽题：洗牌 → 避开上一局 → 每类只取 1 道 → 难度升序 ========== */
  const lastIds = {};   // 每个模式各记一份上局出过的题

  function drawSet(mode){
    const seen = lastIds[mode.key] || new Set();
    const pool = shuffle(mode.BANK);                     // ① 整个题库彻底打乱
    const fresh = pool.filter(q => !seen.has(q.id));
    const ordered = [...fresh, ...pool.filter(q => seen.has(q.id))];  // ② 没出过的排前面

    // ③ 依次取题，同一大类先只取 1 道，保证一局里场景不重样
    const picked = [], usedPacks = new Set();
    for (const q of ordered){
      if (picked.length >= CORE.ROUND) break;
      if (usedPacks.has(q.pack)) continue;
      picked.push(q); usedPacks.add(q.pack);
    }
    // ④ 大类不够时，用剩下的题补满
    for (const q of ordered){
      if (picked.length >= CORE.ROUND) break;
      if (!picked.includes(q)) picked.push(q);
    }

    picked.sort((a, b) => a.level - b.level);            // ⑤ 难度由浅入深
    lastIds[mode.key] = new Set(picked.map(q => q.id));
    return picked;
  }

  /* ========== 题库自检：写错题当场报红条，而不是白屏 ========== */
  const KINDS = new Set(["trap", "native", "stiff"]);

  function validateMode(mode){
    const errs = [], ids = new Set();
    mode.BANK.forEach((q, i) => {
      const at = `${mode.name} 第${i + 1}题（${q.id || "缺 id"}）`;
      ["id", "pack", "scene", "situation", "ask", "explain", "takeaway"].forEach(f => {
        if (!q[f]) errs.push(`${at}：缺字段 ${f}`);
      });
      if (q.id){
        if (ids.has(q.id)) errs.push(`${at}：id 与前面重复`);
        ids.add(q.id);
      }
      if (!mode.PACKS[q.pack]) errs.push(`${at}：pack「${q.pack}」未在 PACKS 中定义`);
      if (!(q.level >= 1 && q.level <= 3)) errs.push(`${at}：level 必须是 1~3`);
      if (!CORE.TYPES[q.type]) errs.push(`${at}：type「${q.type}」不合法`);
      if (!Array.isArray(q.options) || q.options.length !== 3){
        errs.push(`${at}：必须正好 3 个选项`);
        return;
      }
      const rights = q.options.filter(o => o.ok).length;
      if (rights !== 1) errs.push(`${at}：正解有 ${rights} 个，必须恰好 1 个`);
      q.options.forEach((o, j) => {
        const tag = `${at} 选项${"ABC"[j]}`;
        ["text", "note", "badge", "why"].forEach(f => { if (!o[f]) errs.push(`${tag}：缺字段 ${f}`); });
        if (!KINDS.has(o.kind)) errs.push(`${tag}：kind「${o.kind}」不合法（只能 trap/native/stiff）`);
      });
    });
    Object.keys(mode.PACKS).forEach(p => {
      if (!mode.BANK.some(q => q.pack === p)) errs.push(`${mode.name}：大类「${p}」一道题都没有，抽题会漏空`);
    });
    if (mode.BANK.length < CORE.ROUND) errs.push(`${mode.name}：题库只有 ${mode.BANK.length} 题，少于每局需要的 ${CORE.ROUND} 题`);
    return errs;
  }

  root.EN = {
    CORE, MODES, shuffle,
    /* 注册一批题目；忘写 pack 字段时按文件所属大类自动补上 */
    add(modeKey, pack, list){
      const mode = MODES[modeKey];
      if (!mode) { console.error("[题库] 未知模式：" + modeKey); return; }
      list.forEach(q => { if (!q.pack && pack) q.pack = pack; mode.BANK.push(q); });
    },
    draw: (mode) => drawSet(mode),
    validate: () => Object.values(MODES).flatMap(validateMode)
  };

})(window);
