/* ============================================================
   🧒 小学生入门 · 🏫 课堂篇（20 题）
   只放数据。字段说明见 data/_core.js，加题直接往数组里追加对象。
   ============================================================ */
(function (EN) {
  "use strict";

  EN.add('kids', 'class', [

  {
    id:'kc-01', pack:'class', level:1, type:'listening',
    scene:'🏫 老师点名',
    situation:'第一节课老师拿着名单点名，念到了你的名字：',
    quote:'Amy? ... Amy?',
    note:'全班都安静下来看着你。',
    ask:'你要怎么应"到"？',
    options:[
      { text:'Here!', note:'一个词就够，最标准', badge:'地道', kind:'native', ok:true,
        why:'英语课堂点名答"到"就是 Here!，正式一点也可以说 Present!' },
      { text:'Me too.', note:'这是"我也是"', badge:'用错了', kind:'trap', ok:false,
        why:'Me too 是别人说完某句话，你表示"我也一样"，点名时说会让老师一头雾水。' },
      { text:'Yes, I am Amy, I am here.', note:'太长了，像在写作文', badge:'啰嗦', kind:'stiff', ok:false,
        why:'意思没错但太长，课堂上没人会说这么一大串。' }
    ],
    explain:'💡 点名答到只要一个词：Here!（或 Present!）。英语里很多场合都是"越短越自然"，不用把整句话说完整。',
    takeaway:'点名喊到 → Here!'
  },
  {
    id:'kc-02', pack:'class', level:2, type:'phrase',
    scene:'🏫 上课想上厕所',
    situation:'课上到一半你实在憋不住了，举手想跟老师请假。',
    quote:'',
    note:'老师停下来，看向你。',
    ask:'最礼貌的说法是？',
    options:[
      { text:'Toilet!', note:'只蹦一个词，很没礼貌', badge:'太冲', kind:'trap', ok:false,
        why:'单蹦一个名词像在喊口令，而且 toilet 在英语里更多指马桶本身。' },
      { text:'May I go to the restroom, please?', note:'标准的请求句', badge:'礼貌', kind:'native', ok:true,
        why:'May I…? 是最礼貌的请求句式，句尾加 please 更客气。美式英语里厕所常说 restroom 或 bathroom。' },
      { text:'I want to go to the toilet.', note:'像在通知老师，不是请求', badge:'生硬', kind:'stiff', ok:false,
        why:'I want… 是在陈述你的愿望，听起来像通知而不是请假。' }
    ],
    explain:'💡 想请老师同意，用 May I…? 或 Can I…?，句尾加 please。比如 May I come in?（我可以进来吗）、Can I have a pencil, please?（能给我一支铅笔吗）。',
    takeaway:'请求老师 → May I ... , please?'
  },
  {
    id:'kc-03', pack:'class', level:2, type:'phrase',
    scene:'🏫 没听懂老师的话',
    situation:'外教说了一长串英语，还笑着看你，可你一个字都没听明白。',
    quote:'',
    note:'教室安静了三秒，你得说点什么。',
    ask:'想告诉老师"我没听懂"，该说？',
    options:[
      { text:"I don't know.", note:'这是"我不知道答案"', badge:'意思差一点', kind:'stiff', ok:false,
        why:'这句回答的是问题的答案，老师会以为你听懂了只是答不上来。' },
      { text:'What?', note:'只说 What? 语气有点冲', badge:'不礼貌', kind:'trap', ok:false,
        why:'单说一个 What? 在英语里挺不客气的，想请对方再说一遍要用 Sorry? 或 Pardon?' },
      { text:"Sorry, I don't understand.", note:'又礼貌又清楚', badge:'地道', kind:'native', ok:true,
        why:'understand 是"听懂、理解"，这句准确说出了你的情况，老师会放慢速度再讲一遍。' }
    ],
    explain:'💡 没听懂说 Sorry, I don\'t understand.；没听清说 Sorry? 或 Could you say that again, please?（能再说一遍吗）。这两句是新手最该先背下来的救命句。',
    takeaway:'没听懂 → Sorry, I don\'t understand.'
  },
  {
    id:'kc-04', pack:'class', level:2, type:'listening',
    scene:'🏫 听懂课堂指令',
    situation:'外教敲了敲黑板，对全班说：',
    quote:'Open your books to page ten.',
    note:'同学们都开始翻书了，你得赶紧跟上。',
    ask:'老师让大家做什么？',
    options:[
      { text:'把书翻到第 10 页', note:'page ten = 第十页', badge:'翻页', kind:'stiff', ok:true,
        why:'open … to page ten 就是"翻到第 10 页"，to 后面跟的是要翻到的地方。' },
      { text:'打开十本书', note:'把 ten 当成了书的数量', badge:'数量', kind:'stiff', ok:false,
        why:'如果是十本书，要说 ten books，ten 得放在 books 前面。' },
      { text:'读第十行', note:'行是 line，不是 page', badge:'行数', kind:'stiff', ok:false,
        why:'page 是页，line 是行，这两个词别记混。' }
    ],
    explain:'💡 课堂指令背下来就不会慌：Open your books（翻开书）、Close your books（合上书）、Stand up（起立）、Sit down（坐下）、Look at the blackboard（看黑板）。',
    takeaway:'page ten = 第 10 页，翻书说 Open your books to…'
  },
  {
    id:'kc-05', pack:'class', level:2, type:'phrase',
    scene:'🏫 上学迟到了',
    situation:'你跑到教室门口时，外教已经在讲课了。你站在门口，全班都看过来。',
    quote:'',
    note:'你得先说一句才好意思进去。',
    ask:'这时候该说？',
    options:[
      { text:'May I come in?', note:'迟到进门的固定说法', badge:'地道', kind:'native', ok:true,
        why:'先请求再进门是基本礼貌，进去以后再补一句 Sorry I\'m late. 就更完整了。' },
      { text:'Can I in?', note:'少了动词，句子不完整', badge:'语法错', kind:'trap', ok:false,
        why:'in 是介词不是动词，必须说 come in（进来）。' },
      { text:'I come in.', note:'像在通知老师', badge:'生硬', kind:'stiff', ok:false,
        why:'陈述句听起来像"我要进来了"，完全没有征求老师同意。' }
    ],
    explain:'💡 敲门进屋的万能句就是 May I come in?。等老师说 Come in, please. 再进去，坐下前补一句 Sorry I\'m late.（对不起我迟到了）。',
    takeaway:'迟到进教室 → May I come in?'
  },
  {
    id:'kc-06', pack:'class', level:3, type:'phrase',
    scene:'🏫 老师确认你懂没懂',
    situation:'外教讲完一道题，转过头看着你问：',
    quote:'Do you understand?',
    note:'你这次是真的听懂了。',
    ask:'怎么回答最自然？',
    options:[
      { text:'Yes, I do.', note:'英语里的标准短答', badge:'地道', kind:'native', ok:true,
        why:'Do 开头的问句，用 Yes, I do. / No, I don\'t. 来短答，这是英语里最常见的回答方式。' },
      { text:'Yes, I understand you.', note:'把整句重复一遍，很啰嗦', badge:'啰嗦', kind:'stiff', ok:false,
        why:'意思没错但没人这么说，而且 understand you 更像"我理解你的心情"。' },
      { text:'Of course.', note:'语气有点冲', badge:'太冲', kind:'trap', ok:false,
        why:'Of course 带着"这还用问"的意思，回答老师容易显得不客气。' }
    ],
    explain:'💡 英语的短答要跟问句"配对"：Do you…? → Yes, I do.；Are you…? → Yes, I am.；Can you…? → Yes, I can.。助动词用错，一听就不对劲。',
    takeaway:'Do you…? → Yes, I do. / No, I don\'t.'
  },
  {
    id:'kc-07', pack:'class', level:1, type:'listening',
    scene:'🏫 体育课集合',
    situation:'体育课上，外教吹了一声哨子，对大家喊：',
    quote:'Line up, please!',
    note:'同学们呼啦一下都动了起来。',
    ask:'老师让你们做什么？',
    options:[
      { text:'排好队', note:'line 在这里是"队伍"', badge:'排队', kind:'stiff', ok:true,
        why:'line up 是"排成一队"，操场集合、食堂打饭、上车之前都用它。' },
      { text:'画一条线', note:'画线是 draw a line', badge:'画线', kind:'stiff', ok:false,
        why:'line 确实有"线"的意思，但 line up 是固定短语，意思是排队。' },
      { text:'把手举起来', note:'举手是 put up your hand', badge:'举手', kind:'stiff', ok:false,
        why:'带 up 的短语很多，别看见 up 就以为是"举起来"。' }
    ],
    explain:'💡 带 up 的课堂指令记一组：Line up（排队）、Stand up（起立）、Hurry up（快点）、Put up your hand（举手）。',
    takeaway:'Line up! = 排好队。'
  },
  {
    id:'kc-08', pack:'class', level:2, type:'phrase',
    scene:'🏫 作业忘在家里了',
    situation:'老师开始收作业了，你翻遍书包才想起来——作业本落在家里的桌子上。',
    quote:'',
    note:'老师已经走到你旁边了。',
    ask:'该怎么跟老师说？',
    options:[
      { text:"I'm sorry. I forgot my homework at home.", note:'先道歉，再说清楚', badge:'地道', kind:'native', ok:true,
        why:'事情已经发生了，用过去式 forgot；先说 sorry 再解释，老师会好接受得多。' },
      { text:'I forget my homework.', note:'时态不对', badge:'语法错', kind:'stiff', ok:false,
        why:'忘带是刚才发生的事，要用过去式 forgot，不是 forget。' },
      { text:'My homework is not here.', note:'像在陈述一件和自己无关的事', badge:'甩锅', kind:'trap', ok:false,
        why:'听起来像"作业自己不见了"，完全没有承认是自己忘了带。' }
    ],
    explain:'💡 出小状况的三步：I\'m sorry.（道歉）+ 说清楚发生了什么 + I\'ll bring it tomorrow.（我明天带来）。承认加补救，比找借口有用得多。',
    takeaway:'忘带东西 → I\'m sorry, I forgot my homework.'
  },
  {
    id:'kc-09', pack:'class', level:3, type:'phrase',
    scene:'🏫 想借同学的橡皮',
    situation:'你的橡皮不见了，想跟旁边的外国同学借一块用一下。',
    quote:'',
    note:'他的橡皮就放在桌角。',
    ask:'该怎么开口？',
    options:[
      { text:'Can I borrow your eraser?', note:'借进来用 borrow', badge:'地道', kind:'native', ok:true,
        why:'borrow 是"借入"，主语是借东西的那个人，也就是你。' },
      { text:'Can I lend your eraser?', note:'borrow 和 lend 用反了', badge:'方向反', kind:'stiff', ok:false,
        why:'lend 是"借出"，主语得是东西的主人：Can you lend me your eraser? 才对。' },
      { text:'Give me your eraser.', note:'像在命令', badge:'太冲', kind:'trap', ok:false,
        why:'没有 please 的祈使句听起来是在要东西，不是在借。' }
    ],
    explain:'💡 borrow 是"借进来"，lend 是"借出去"，方向正好相反。这两句意思一样：Can I borrow your eraser?（我能借你的橡皮吗）＝ Can you lend me your eraser?（你能借我橡皮吗）。',
    takeaway:'我借别人的用 borrow；别人借给我用 lend。'
  },
  {
    id:'kc-10', pack:'class', level:1, type:'listening',
    scene:'🏫 跟着老师念课文',
    situation:'外教举起课本念了一句英文，然后停下来看着全班说：',
    quote:'Read after me.',
    note:'她念一句，停一下，等着大家。',
    ask:'她让你们做什么？',
    options:[
      { text:'她念一句，你们跟着念一句', note:'after = 在…之后', badge:'跟读', kind:'stiff', ok:true,
        why:'read after me 就是"跟我读"，老师先念，你们再重复。' },
      { text:'排在她后面读书', note:'把 after 理解成了位置', badge:'位置', kind:'stiff', ok:false,
        why:'这里的 after 说的是时间上的先后，不是排队站在谁后面。' },
      { text:'读给她听', note:'读给某人听是 read to me', badge:'读给', kind:'stiff', ok:false,
        why:'read to me 才是"读给我听"，换一个介词，意思就全变了。' }
    ],
    explain:'💡 一个介词就能改变整句话：read after me（跟我读）、read to me（读给我听）、read with me（和我一起读）。听指令要连介词一起听。',
    takeaway:'Read after me. = 跟我读。'
  },
  {
    id:'kc-11', pack:'class', level:1, type:'listening',
    scene:'🏫 老师安排练习',
    situation:'讲完一段对话，外教拍拍手说：',
    quote:'Work in pairs, please.',
    note:'同学们纷纷转向旁边的人。',
    ask:'老师让你们怎么做？',
    options:[
      { text:'两人一组练习', note:'pair = 一对', badge:'两人', kind:'stiff', ok:true,
        why:'pair 是"一对"，in pairs 就是两个人一组。' },
      { text:'在纸上写答案', note:'把 pair 听成了 paper', badge:'写纸上', kind:'stiff', ok:false,
        why:'paper（纸）和 pair（一对）听起来像，但完全是两个词。' },
      { text:'把桌子排成一排', note:'排桌子是 line up', badge:'排桌子', kind:'stiff', ok:false,
        why:'排队、排东西用 line up，和 pair 无关。' }
    ],
    explain:'💡 分组指令记一组：Work in pairs（两人一组）、Work in groups（分小组）、Work by yourself（自己做）。',
    takeaway:'Work in pairs. = 两人一组。'
  },
  {
    id:'kc-12', pack:'class', level:2, type:'listening',
    scene:'🏫 小测验结束',
    situation:'小测验做到一半，外教看了看表，说了两句话：',
    quote:"Time's up. Pens down.",
    note:'周围的同学都停笔了。',
    ask:'她的意思是？',
    options:[
      { text:'时间到了，把笔放下', note:'收卷的固定说法', badge:'停笔', kind:'stiff', ok:true,
        why:'Time\'s up 是"时间到"，Pens down 是"停笔"，两句一起就是收卷。' },
      { text:'时间还早，接着写', note:'意思正好相反', badge:'继续', kind:'stiff', ok:false,
        why:'up 在这里表示"用完了"，不是"还有"。' },
      { text:'把笔尖朝下放好', note:'当成了摆放要求', badge:'摆放', kind:'stiff', ok:false,
        why:'Pens down 说的是停止书写这个动作，不是要你摆笔的姿势。' }
    ],
    explain:'💡 考试三句：You may begin.（开始答题）、Five minutes left.（还剩五分钟）、Time\'s up. Pens down.（时间到，停笔）。',
    takeaway:"Time's up. Pens down. = 时间到，停笔。"
  },
  {
    id:'kc-13', pack:'class', level:3, type:'listening',
    scene:'🏫 老师讲到一半停下来',
    situation:'外教在黑板上写了一长串，转过身看着大家问：',
    quote:'Are you with me?',
    note:'她的眼睛扫过全班，等着大家点头。',
    ask:'她在问什么？',
    options:[
      { text:'你们跟上我的思路了吗', note:'确认大家听懂没', badge:'听懂没', kind:'stiff', ok:true,
        why:'这是老师确认大家有没有跟上，听懂了就点头或者说 Yes.' },
      { text:'你们要跟我一起走吗', note:'照字面理解了', badge:'同行', kind:'stiff', ok:false,
        why:'字面确实是"和我在一起"，但在课堂上它只表示"听明白了吗"。' },
      { text:'你们站在我这边吗', note:'当成了表态站队', badge:'站队', kind:'stiff', ok:false,
        why:'那是争论时表态支持谁的说法，和上课无关。' }
    ],
    explain:'💡 老师确认你听懂的几种问法：Are you with me? / Does that make sense? / Any questions?。跟上了答 Yes.，没跟上就说 Sorry, I don\'t understand.',
    takeaway:'Are you with me? = 跟上了吗？'
  },
  {
    id:'kc-14', pack:'class', level:1, type:'phrase',
    scene:'🏫 同学来借你的书',
    situation:'同桌探过头来问你，能不能借一下你的课本。',
    quote:'Can I borrow your book?',
    note:'你很乐意借给他。',
    ask:'该怎么答应？',
    options:[
      { text:'Sure. Here you are.', note:'答应＋把东西递过去', badge:'地道', kind:'native', ok:true,
        why:'Sure 是爽快的"当然可以"，递东西时说 Here you are.，一气呵成。' },
      { text:'Yes, I can.', note:'主语搞错了', badge:'语法错', kind:'stiff', ok:false,
        why:'对方问的是"我能不能借"，要回答 Yes, you can. 或者干脆说 Sure.' },
      { text:"You're welcome.", note:'时机不对', badge:'说早了', kind:'stiff', ok:false,
        why:'"不客气"要等对方说完 Thank you 才轮到你说。' }
    ],
    explain:'💡 答应别人的请求：Sure. / Of course. / No problem.，然后递东西说 Here you are.。这一串正好接上前面学的 Thank you → You\'re welcome。',
    takeaway:'答应就说 Sure. Here you are.'
  },
  {
    id:'kc-15', pack:'class', level:2, type:'phrase',
    scene:'🏫 老师找人上台',
    situation:'黑板上写着一道题，外教问全班谁想上来试试。你很想去。',
    quote:'Who wants to try?',
    note:'你举起了手。',
    ask:'举手的同时该说什么？',
    options:[
      { text:'Let me try!', note:'又短又有劲', badge:'地道', kind:'native', ok:true,
        why:'Let me… 是"让我来"，主动争取机会时最常用。' },
      { text:'I want try.', note:'少了一个 to', badge:'语法错', kind:'stiff', ok:false,
        why:'want 后面要跟 to：I want to try.，不过还是 Let me try! 更有主动劲儿。' },
      { text:'I can do.', note:'句子没说完', badge:'不完整', kind:'trap', ok:false,
        why:'do 后面缺了宾语，要说 I can do it.' }
    ],
    explain:'💡 主动争取的三句：Let me try!（我来试试）、Can I try?（我能试试吗）、I\'ll do it!（我来做）。老师最喜欢主动举手的学生。',
    takeaway:'想试试 → Let me try!'
  }

  ]);

  /* ---------- 🏫 课堂篇（加餐） ---------- */
  EN.add('kids', 'class', [

  {
    id:'kc-16', pack:'class', level:2, type:'culture',
    scene:'🏫 想回答问题',
    situation:'外教在黑板上写了个问题，问全班：',
    quote:'Who knows the answer?',
    note:'你正好知道答案，激动得差点喊出来。',
    ask:'最合适的做法是？',
    options:[
      { text:'先举手，等老师点你再说', note:'课堂规矩', badge:'地道', kind:'native', ok:true,
        why:'想发言先举手（put up your hand），被老师点到再回答，这在英语课堂里很重要。' },
      { text:'直接大声把答案喊出来', note:'没轮到你就抢答', badge:'太冲', kind:'trap', ok:false,
        why:'不举手就喊答案（calling out）在国外课堂被认为没礼貌，老师会请你先举手。' },
      { text:'知道也不吭声', note:'太可惜了', badge:'太闷', kind:'stiff', ok:false,
        why:'会就大方举手，闷着不说老师也不知道你懂了。' }
    ],
    explain:'💡 外国课堂讲究"举手—被点名—发言"。老师点你会说 Yes, Lily? 你再开口。抢答（calling out）通常不受欢迎。',
    takeaway:'想回答 → 先举手，等老师点名。'
  },
  {
    id:'kc-17', pack:'class', level:2, type:'social',
    scene:'🏫 被点到却没把握',
    situation:'老师点你回答，可你心里没底，不太确定答案对不对。',
    quote:'',
    note:'又不想随便瞎猜，也不想干站着。',
    ask:'该怎么说最得体？',
    options:[
      { text:"I'm not sure, but maybe…", note:'先坦白再试着答', badge:'地道', kind:'native', ok:true,
        why:'I\'m not sure（我不太确定）先给自己留余地，再说出想法，既诚实又肯尝试。' },
      { text:'（沉默不说话）', note:'把场面僵在那儿', badge:'冷场', kind:'stiff', ok:false,
        why:'一直不吭声会让老师和同学都尴尬，说一句 I\'m not sure 也比沉默强。' },
      { text:"I don't know!（大声、不耐烦）", note:'语气冲', badge:'太生硬', kind:'trap', ok:false,
        why:'光甩一句 I don\'t know 显得不想动脑，加个 but maybe… 会好很多。' }
    ],
    explain:'💡 不确定时的万能开头：I\'m not sure, but…（我不太确定，不过…）、I think…（我觉得…）。它让你在没把握时也能体面地开口。',
    takeaway:"没把握 → I'm not sure, but maybe…"
  },
  {
    id:'kc-18', pack:'class', level:2, type:'phrase',
    scene:'🏫 老师说得太快',
    situation:'外教语速很快，你只听懂了一半，想请她放慢一点。',
    quote:'',
    note:'你不想打断得太生硬。',
    ask:'该怎么说最有礼貌？',
    options:[
      { text:'Could you say that again more slowly, please?', note:'既请重说又请放慢', badge:'地道', kind:'native', ok:true,
        why:'Could you…, please? 是很客气的请求，加上 more slowly 明确说出你希望她慢一点。' },
      { text:'Slowly! Slowly!', note:'像在命令', badge:'太冲', kind:'trap', ok:false,
        why:'光喊 Slowly 像在下令，加上 Could you…, please? 才礼貌。' },
      { text:"I can't understand you.", note:'话太重，像怪对方', badge:'太生硬', kind:'stiff', ok:false,
        why:'这句听起来像在抱怨"我听不懂你"，换成请对方慢点说会舒服得多。' }
    ],
    explain:'💡 跟不上语速别急，礼貌三句：Could you say that again?（再说一遍）、more slowly（慢一点）、Sorry?（没听清）。',
    takeaway:'太快了 → Could you say that again more slowly, please?'
  },
  {
    id:'kc-19', pack:'class', level:1, type:'phrase',
    scene:'🏫 交作业给老师',
    situation:'上课了，老师走过来收作业，你把本子递上去。',
    quote:'',
    note:'你想边递边说一句。',
    ask:'该说哪句最自然？',
    options:[
      { text:"Here's my homework.", note:'递东西＋说明是什么', badge:'地道', kind:'native', ok:true,
        why:'Here\'s my homework.（这是我的作业）边递边说，清楚又自然；只说 Here you are. 也行。' },
      { text:'This is my homework doing.', note:'多了个词还不对', badge:'语法错', kind:'stiff', ok:false,
        why:'homework 后面不用加 doing，直接说 Here\'s my homework. 就好。' },
      { text:'Give you homework.', note:'漏了主语，像命令', badge:'不通顺', kind:'trap', ok:false,
        why:'Give you 不成句，递东西说 Here you are. 或 Here\'s my homework.' }
    ],
    explain:'💡 递东西的万能句 Here you are. / Here\'s + 东西：Here\'s my homework.（作业）、Here\'s your pen.（还你笔）。',
    takeaway:"交作业 → Here's my homework."
  },
  {
    id:'kc-20', pack:'class', level:2, type:'phrase',
    scene:'🏫 上课想去接水',
    situation:'上课上到一半你渴得厉害，想出去接杯水，得先问老师。',
    quote:'',
    note:'不能一声不吭就走出去。',
    ask:'该怎么问最有礼貌？',
    options:[
      { text:'May I get some water, please?', note:'先请求许可', badge:'地道', kind:'native', ok:true,
        why:'离开座位、做别的事之前先用 May I…? / Can I…? 征得同意，最有礼貌。' },
      { text:'I go to drink water.', note:'没在问，是在通知', badge:'不礼貌', kind:'stiff', ok:false,
        why:'这是直接宣布"我要去喝水"，上课时应该先征求老师同意。' },
      { text:'Water! Water!', note:'只蹦名词像在喊', badge:'太冲', kind:'trap', ok:false,
        why:'光喊 Water 像在叫喊，要说完整的 May I get some water, please?' }
    ],
    explain:'💡 上课想做别的事先请示：May I go to the toilet?（上厕所）、May I get some water?（接水）、May I go out?（出去一下）。',
    takeaway:'想接水 → May I get some water, please?'
  }

  ]);

})(window.EN);
