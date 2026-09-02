/* ============================================================
   🐤 启蒙 L2 · 短句子（72 题 · 打招呼 / 礼貌用语 / 日常短句 各 24 题）
   ------------------------------------------------------------
   比 L1 难一点：题面出现一句最短的英文，选项是三到四个词的短句。
   考的是"这个场合该说哪一句"，干扰项都是别的常用短句（用错场合）。
   只放数据。字段说明见 data/_core.js。
   ============================================================ */
(function (EN) {
  "use strict";

  /* ---------- 👋 打招呼篇 ---------- */
  EN.add('starter2', 'hello', [

  {
    id:'b-01', pack:'hello', level:1, type:'phrase',
    scene:'👋 打招呼篇',
    emoji:'🙋',
    situation:'外教第一次走进教室，笑着朝大家挥手：',
    quote:'Hello!',
    note:'她在等大家回应她。',
    ask:'你该说什么？',
    options:[
      { text:'Hello!', note:'你好', badge:'地道', kind:'native', ok:true,
        why:'别人说 Hello，你也说 Hello，最简单也最不会错。' },
      { text:'Bye!', note:'再见', badge:'说反了', kind:'stiff', ok:false,
        why:'Bye 是要走的时候说的，刚见面就说会很奇怪。' },
      { text:'Sorry.', note:'对不起', badge:'用错了', kind:'stiff', ok:false,
        why:'Sorry 是做错事才说的。' }
    ],
    explain:'💡 见面说 Hello! 或 Hi!；要走了说 Bye! 或 See you!。',
    takeaway:'见面说 Hello，走时说 Bye。'
  },
  {
    id:'b-02', pack:'hello', level:1, type:'phrase',
    scene:'👋 打招呼篇',
    emoji:'🌅',
    situation:'早读课刚开始，外教走进教室对全班说：',
    quote:'Good morning!',
    note:'现在是早上八点。',
    ask:'你该回哪一句？',
    options:[
      { text:'Good morning!', note:'早上好', badge:'地道', kind:'native', ok:true,
        why:'原样还回去就对了，这是最标准的早上问候。' },
      { text:'Good night!', note:'晚安', badge:'说反了', kind:'stiff', ok:false,
        why:'Good night 是晚上睡觉前说的。' },
      { text:'Good afternoon!', note:'下午好', badge:'时间错', kind:'stiff', ok:false,
        why:'Good afternoon 要等到中午以后才用。' }
    ],
    explain:'💡 按时间打招呼：早上 Good morning、下午 Good afternoon、傍晚 Good evening、睡前 Good night。',
    takeaway:'早上互道 Good morning!'
  },
  {
    id:'b-03', pack:'hello', level:2, type:'phrase',
    scene:'👋 打招呼篇',
    emoji:'🎒',
    situation:'放学了，外教站在门口跟每个同学挥手，轮到你：',
    quote:'Bye!',
    note:'你背着书包正要走。',
    ask:'你该说什么？',
    options:[
      { text:'Bye! See you!', note:'再见，回头见', badge:'地道', kind:'native', ok:true,
        why:'道别就把同样的话还回去，加一句 See you 更自然。' },
      { text:'Hello!', note:'你好', badge:'说反了', kind:'stiff', ok:false,
        why:'Hello 是见面时说的，这时候该道别了。' },
      { text:'Thank you.', note:'谢谢', badge:'答偏了', kind:'stiff', ok:false,
        why:'道谢没有错，但她现在是在跟你说再见。' }
    ],
    explain:'💡 道别的几种说法：Bye! / See you! / See you tomorrow!。挥挥手一起说更自然。',
    takeaway:'要走了 → Bye! See you!'
  },
  {
    id:'b-04', pack:'hello', level:2, type:'phrase',
    scene:'👋 打招呼篇',
    emoji:'🤝',
    situation:'外教走到你面前，弯下腰笑着问：',
    quote:'How are you?',
    note:'你今天心情很好。',
    ask:'你该怎么回答？',
    options:[
      { text:"I'm fine, thank you.", note:'我很好，谢谢', badge:'地道', kind:'native', ok:true,
        why:'先说自己好不好，再谢一句，最标准的回答。' },
      { text:"I'm nine.", note:'我九岁', badge:'听岔了', kind:'trap', ok:false,
        why:'那是回答 How old are you?（你几岁）的。' },
      { text:'Hello.', note:'你好', badge:'答偏了', kind:'stiff', ok:false,
        why:'她已经打过招呼了，现在问的是你好不好。' }
    ],
    explain:'💡 How are you?（你好吗）→ I\'m fine, thank you.；How old are you?（你几岁）→ I\'m nine. 两句长得像，别听混。',
    takeaway:"How are you? → I'm fine, thank you."
  }

  ]);

  /* ---------- 🙏 礼貌用语篇 ---------- */
  EN.add('starter2', 'polite', [

  {
    id:'b-05', pack:'polite', level:1, type:'manners',
    scene:'🙏 礼貌用语篇',
    emoji:'🍬',
    situation:'邻居阿姨蹲下来，递给你一颗糖，放到了你手心里。',
    quote:'',
    note:'她笑眯眯地看着你。',
    ask:'你该说什么？',
    options:[
      { text:'Thank you!', note:'谢谢', badge:'地道', kind:'native', ok:true,
        why:'收到别人给的东西，第一句永远是谢谢。' },
      { text:'Sorry.', note:'对不起', badge:'用错了', kind:'stiff', ok:false,
        why:'做错事才说 Sorry，收到东西要道谢。' },
      { text:'Hello.', note:'你好', badge:'答偏了', kind:'stiff', ok:false,
        why:'Hello 是打招呼，这时候该说谢谢。' }
    ],
    explain:'💡 收到东西说 Thank you!（或 Thanks!），对方会回你一句 You\'re welcome.',
    takeaway:'收到东西 → Thank you!'
  },
  {
    id:'b-06', pack:'polite', level:1, type:'manners',
    scene:'🙏 礼貌用语篇',
    emoji:'👟',
    situation:'排队时你没站稳，一脚踩到了前面同学的鞋。',
    quote:'',
    note:'他"哎哟"了一声回过头。',
    ask:'你该说什么？',
    options:[
      { text:'Sorry!', note:'对不起', badge:'地道', kind:'native', ok:true,
        why:'踩到人是自己不小心，要道歉。' },
      { text:'Thank you!', note:'谢谢', badge:'说反了', kind:'stiff', ok:false,
        why:'踩到人可不是好事，说谢谢就搞反了。' },
      { text:'Bye!', note:'再见', badge:'用错了', kind:'stiff', ok:false,
        why:'这时候要道歉，不是道别。' }
    ],
    explain:'💡 做错事、给别人添麻烦就说 Sorry!。对方一般会回一句 That\'s OK.（没关系）。',
    takeaway:'做错事 → Sorry!'
  },
  {
    id:'b-07', pack:'polite', level:2, type:'manners',
    scene:'🙏 礼貌用语篇',
    emoji:'📚',
    situation:'你帮同学捡起了掉在地上的书，他抱着书连忙说：',
    quote:'Thank you!',
    note:'他正看着你，等你回一句。',
    ask:'你该怎么回？',
    options:[
      { text:"You're welcome.", note:'不客气', badge:'地道', kind:'native', ok:true,
        why:'别人谢你，你就回一句"不客气"。' },
      { text:'Thank you.', note:'谢谢', badge:'绕圈了', kind:'stiff', ok:false,
        why:'他谢的是你，你再谢回去就绕圈了。' },
      { text:'Sorry.', note:'对不起', badge:'用错了', kind:'stiff', ok:false,
        why:'你做的是好事，用不着道歉。' }
    ],
    explain:'💡 完整的一来一回：Thank you.（谢谢）→ You\'re welcome.（不客气）。也可以说 No problem. 或 Sure.',
    takeaway:"别人说 Thank you → You're welcome."
  },
  {
    id:'b-08', pack:'polite', level:2, type:'manners',
    scene:'🙏 礼貌用语篇',
    emoji:'🚪',
    situation:'走廊里挤了好多人在聊天，你想从他们中间过去。',
    quote:'',
    note:'大家都背对着你，没看见你。',
    ask:'你该先说哪一句？',
    options:[
      { text:'Excuse me.', note:'劳驾、借过', badge:'地道', kind:'native', ok:true,
        why:'想请别人让一让，先说这一句，大家就会给你让路。' },
      { text:'Sorry.', note:'对不起', badge:'时机不对', kind:'stiff', ok:false,
        why:'Sorry 是做错事之后说的，你还没做错什么。' },
      { text:'Hello!', note:'你好', badge:'答偏了', kind:'stiff', ok:false,
        why:'打招呼解决不了"请让一让"这件事。' }
    ],
    explain:'💡 Excuse me 用在想过去、想问路、想叫住别人之前；Sorry 用在已经做错事之后。',
    takeaway:'想借过 → Excuse me.'
  }

  ]);

  /* ---------- 🗣️ 日常短句篇 ---------- */
  EN.add('starter2', 'daily', [

  {
    id:'b-09', pack:'daily', level:2, type:'phrase',
    scene:'🗣️ 日常短句篇',
    emoji:'🧃',
    situation:'阿姨端着果汁走过来问你要不要喝，你正好口渴。',
    quote:'Do you want some juice?',
    note:'杯子已经递到你面前了。',
    ask:'该怎么答应？',
    options:[
      { text:'Yes, please.', note:'好的，谢谢', badge:'地道', kind:'native', ok:true,
        why:'想要就说 Yes, please.，又短又礼貌。' },
      { text:'Yes.', note:'是的', badge:'不够礼貌', kind:'stiff', ok:false,
        why:'不算错，但光一个 Yes 有点干，加上 please 才好听。' },
      { text:'No, thank you.', note:'不用了，谢谢', badge:'说反了', kind:'stiff', ok:false,
        why:'这是不想要时说的，意思正好相反。' }
    ],
    explain:'💡 要就说 Yes, please.，不要就说 No, thank you.。这两句一天能用好多次。',
    takeaway:'要 → Yes, please.'
  },
  {
    id:'b-10', pack:'daily', level:2, type:'manners',
    scene:'🗣️ 日常短句篇',
    emoji:'🍰',
    situation:'你已经吃得很饱了，阿姨又端来一块蛋糕问你还要不要。',
    quote:'Do you want more cake?',
    note:'你实在吃不下了。',
    ask:'该怎么礼貌地拒绝？',
    options:[
      { text:'No, thank you.', note:'不用了，谢谢', badge:'地道', kind:'native', ok:true,
        why:'拒绝的时候带上 thank you，语气一下就柔和了。' },
      { text:'No!', note:'不要！', badge:'太硬', kind:'trap', ok:false,
        why:'只喊一个 No 会让阿姨以为你不喜欢她做的蛋糕。' },
      { text:'Yes, please.', note:'好的，谢谢', badge:'说反了', kind:'stiff', ok:false,
        why:'这是"我还要"的意思。' }
    ],
    explain:'💡 拒绝别人别只说 No，要说 No, thank you.。这是英语里最基本的礼貌。',
    takeaway:'不要 → No, thank you.'
  },
  {
    id:'b-11', pack:'daily', level:1, type:'listening',
    scene:'🗣️ 日常短句篇',
    emoji:'🪑',
    situation:'上课铃响了，外教走进教室，对还站着的同学说：',
    quote:'Sit down, please.',
    note:'其他同学都开始往座位上坐。',
    ask:'她让大家做什么？',
    options:[
      { text:'请坐下', note:'sit down = 坐下', badge:'坐下', kind:'stiff', ok:true,
        why:'sit down 是坐下，down 表示往下。' },
      { text:'请起立', note:'那是 stand up', badge:'起立', kind:'stiff', ok:false,
        why:'起立是 stand up，up 表示往上。' },
      { text:'请安静', note:'那是 be quiet', badge:'安静', kind:'stiff', ok:false,
        why:'让大家安静会说 Be quiet.' }
    ],
    explain:'💡 一上一下记一对：sit down（坐下）↔ stand up（起立）。down 往下，up 往上。',
    takeaway:'Sit down, please. = 请坐下。'
  },
  {
    id:'b-12', pack:'daily', level:2, type:'listening',
    scene:'🗣️ 日常短句篇',
    emoji:'🧼',
    situation:'快开饭了，寄宿家庭的阿姨看了看你的手，说了一句：',
    quote:'Wash your hands.',
    note:'她指了指洗手间的方向。',
    ask:'她让你做什么？',
    options:[
      { text:'去洗手', note:'wash = 洗', badge:'洗手', kind:'stiff', ok:true,
        why:'wash 是洗，hands 是手，合起来就是洗手。' },
      { text:'去洗澡', note:'那是 take a shower', badge:'洗澡', kind:'stiff', ok:false,
        why:'洗澡是 take a shower，比洗手大工程多了。' },
      { text:'举起手来', note:'那是 put up your hands', badge:'举手', kind:'stiff', ok:false,
        why:'举手是 put up your hands 或 hands up。' }
    ],
    explain:'💡 和 hands（手）有关的三句：Wash your hands.（洗手）、Hands up!（举手）、Clap your hands!（拍手）。',
    takeaway:'Wash your hands. = 去洗手。'
  }

  ]);

  /* ---------- 👋 打招呼篇（加餐） ---------- */
  EN.add('starter2', 'hello', [

  {
    id:'b-13', pack:'hello', level:1, type:'phrase',
    scene:'👋 打招呼篇',
    emoji:'🌇',
    situation:'午休后第一节课，外教走进来对大家说：',
    quote:'Good afternoon!',
    note:'现在是下午两点。',
    ask:'你该回哪一句？',
    options:[
      { text:'Good afternoon!', note:'下午好', badge:'地道', kind:'native', ok:true,
        why:'原样还回去，下午就用这一句。' },
      { text:'Good morning!', note:'早上好', badge:'时间错', kind:'stiff', ok:false,
        why:'Good morning 只在早上用，现在是下午了。' },
      { text:'Good night!', note:'晚安', badge:'说反了', kind:'stiff', ok:false,
        why:'Good night 是睡觉前才说的。' }
    ],
    explain:'💡 按时间打招呼：早上 Good morning、下午 Good afternoon、傍晚 Good evening、睡前 Good night。',
    takeaway:'下午互道 Good afternoon!'
  },
  {
    id:'b-14', pack:'hello', level:1, type:'phrase',
    scene:'👋 打招呼篇',
    emoji:'🌙',
    situation:'寄宿家庭里，睡觉前阿姨走进房间帮你关灯，轻轻说：',
    quote:'Good night!',
    note:'你正要钻进被窝。',
    ask:'你该回哪一句？',
    options:[
      { text:'Good night!', note:'晚安', badge:'地道', kind:'native', ok:true,
        why:'睡前互道 Good night，最自然。' },
      { text:'Good morning!', note:'早上好', badge:'说反了', kind:'stiff', ok:false,
        why:'Good morning 是早上起来才说的。' },
      { text:'Hello!', note:'你好', badge:'时机不对', kind:'stiff', ok:false,
        why:'这会儿要道晚安，不是打招呼。' }
    ],
    explain:'💡 睡觉前说 Good night（晚安）；早上见面说 Good morning（早上好）。一个进被窝，一个出被窝。',
    takeaway:'睡前互道 Good night!'
  },
  {
    id:'b-15', pack:'hello', level:2, type:'phrase',
    scene:'👋 打招呼篇',
    emoji:'🙋',
    situation:'新同学好奇地看着你，笑着问：',
    quote:"What's your name?",
    note:'她想知道你叫什么。',
    ask:'你该怎么回答？',
    options:[
      { text:'My name is Tom.', note:'我叫 Tom', badge:'地道', kind:'native', ok:true,
        why:'问名字就用 My name is + 名字来回答。' },
      { text:"I'm fine.", note:'我很好', badge:'答偏了', kind:'trap', ok:false,
        why:'那是回答 How are you?（你好吗）的。' },
      { text:'How are you?', note:'你好吗', badge:'答非所问', kind:'stiff', ok:false,
        why:'她问的是名字，你却反问回去了。' }
    ],
    explain:"💡 问名字：What's your name? → My name is …／I'm …。把 Tom 换成你自己的名字就行。",
    takeaway:"What's your name? → My name is …"
  },
  {
    id:'b-16', pack:'hello', level:2, type:'phrase',
    scene:'👋 打招呼篇',
    emoji:'🎂',
    situation:'外教想知道你几岁了，指着你笑着问：',
    quote:'How old are you?',
    note:'你今年九岁。',
    ask:'你该怎么回答？',
    options:[
      { text:"I'm nine.", note:'我九岁', badge:'地道', kind:'native', ok:true,
        why:'问年龄用 I\'m + 数字来回答，nine 就是九。' },
      { text:"I'm fine.", note:'我很好', badge:'听岔了', kind:'trap', ok:false,
        why:'fine 和 nine 只差一个音，但那是回答 How are you? 的。' },
      { text:'My name is Tom.', note:'我叫 Tom', badge:'答偏了', kind:'stiff', ok:false,
        why:'那是回答 What\'s your name? 的。' }
    ],
    explain:"💡 How old are you?（你几岁）→ I'm nine.；How are you?（你好吗）→ I'm fine. fine 和 nine 别听混。",
    takeaway:"How old are you? → I'm nine."
  }

  ]);

  /* ---------- 🙏 礼貌用语篇（加餐） ---------- */
  EN.add('starter2', 'polite', [

  {
    id:'b-17', pack:'polite', level:2, type:'manners',
    scene:'🙏 礼貌用语篇',
    emoji:'👟',
    situation:'一个同学不小心踩到了你的脚，红着脸连忙说：',
    quote:'Sorry!',
    note:'他正紧张地看着你，等你回话。',
    ask:'你该怎么回？',
    options:[
      { text:"That's OK.", note:'没关系', badge:'地道', kind:'native', ok:true,
        why:'别人道歉，你就回一句"没关系"，让他别放在心上。' },
      { text:'Thank you.', note:'谢谢', badge:'答偏了', kind:'stiff', ok:false,
        why:'他是在道歉，不是给你东西，用不着谢。' },
      { text:'Sorry.', note:'对不起', badge:'反了', kind:'stiff', ok:false,
        why:'踩人的是他，该道歉的也是他，你不用说 Sorry。' }
    ],
    explain:"💡 完整的一来一回：Sorry.（对不起）→ That's OK.（没关系）。也可以回 It's OK. 或 Never mind.",
    takeaway:"别人说 Sorry → That's OK."
  },
  {
    id:'b-18', pack:'polite', level:2, type:'manners',
    scene:'🙏 礼貌用语篇',
    emoji:'🎂',
    situation:'今天是你生日，外国朋友端着蛋糕走过来，笑着对你说：',
    quote:'Happy birthday!',
    note:'大家都看着你，等你回话。',
    ask:'你该说什么？',
    options:[
      { text:'Thank you!', note:'谢谢', badge:'地道', kind:'native', ok:true,
        why:'别人祝福你，回一句谢谢最自然。' },
      { text:'Happy birthday!', note:'生日快乐', badge:'反了', kind:'trap', ok:false,
        why:'今天是你的生日，不是他的，别祝回去。' },
      { text:'Sorry.', note:'对不起', badge:'用错了', kind:'stiff', ok:false,
        why:'过生日是好事，用不着道歉。' }
    ],
    explain:'💡 别人祝你 Happy birthday!，你回 Thank you! 就好。收到任何祝福都能用 Thank you。',
    takeaway:'Happy birthday! → Thank you!'
  },
  {
    id:'b-19', pack:'polite', level:2, type:'manners',
    scene:'🙏 礼貌用语篇',
    emoji:'🆘',
    situation:'行李箱太重，你一个人搬不动，想请旁边的叔叔帮忙。',
    quote:'',
    note:'他就站在你旁边。',
    ask:'该怎么开口最有礼貌？',
    options:[
      { text:'Can you help me, please?', note:'你能帮我一下吗', badge:'地道', kind:'native', ok:true,
        why:'请人帮忙用 Can you help me, please?，客气又清楚。' },
      { text:'Help me!', note:'帮我！', badge:'太冲', kind:'trap', ok:false,
        why:'光喊 Help me! 像在命令人，还有点像出事了在呼救。' },
      { text:'I want help.', note:'我要帮忙', badge:'生硬', kind:'stiff', ok:false,
        why:'能听懂，但 I want 的语气太直，不够客气。' }
    ],
    explain:'💡 请人帮忙的万能句：Can you help me, please?。对方帮了你，别忘了说 Thank you。',
    takeaway:'请人帮忙 → Can you help me, please?'
  },
  {
    id:'b-20', pack:'polite', level:2, type:'manners',
    scene:'🙏 礼貌用语篇',
    emoji:'🤝',
    situation:'外教把一位新老师介绍给你，新老师笑着伸出手说：',
    quote:'Nice to meet you.',
    note:'她在等你回话。',
    ask:'你该怎么回？',
    options:[
      { text:'Nice to meet you, too.', note:'我也很高兴认识你', badge:'地道', kind:'native', ok:true,
        why:'对方说很高兴认识你，你加一个 too 还回去，最标准。' },
      { text:'Thank you.', note:'谢谢', badge:'答偏了', kind:'stiff', ok:false,
        why:'这不是道谢的场合，是初次见面互相问好。' },
      { text:"You're welcome.", note:'不客气', badge:'用错了', kind:'stiff', ok:false,
        why:"You're welcome 是别人谢你时才回的。" }
    ],
    explain:'💡 初次见面：Nice to meet you.（很高兴认识你）→ Nice to meet you, too.（我也是）。加一个 too 就对了。',
    takeaway:'Nice to meet you. → Nice to meet you, too.'
  }

  ]);

  /* ---------- 🗣️ 日常短句篇（加餐） ---------- */
  EN.add('starter2', 'daily', [

  {
    id:'b-21', pack:'daily', level:1, type:'listening',
    scene:'🗣️ 日常短句篇',
    emoji:'🤫',
    situation:'教室里太吵了，外教把食指竖在嘴边，说了一句：',
    quote:'Be quiet, please.',
    note:'她指了指自己的嘴唇。',
    ask:'她让大家做什么？',
    options:[
      { text:'请安静', note:'quiet = 安静', badge:'安静', kind:'stiff', ok:true,
        why:'Be quiet 就是安静下来、别出声。' },
      { text:'请坐下', note:'那是 sit down', badge:'坐下', kind:'stiff', ok:false,
        why:'坐下是 sit down，跟安静不是一回事。' },
      { text:'请起立', note:'那是 stand up', badge:'起立', kind:'stiff', ok:false,
        why:'起立是 stand up，让你站起来。' }
    ],
    explain:'💡 课堂常听三句：Be quiet.（安静）、Sit down.（坐下）、Stand up.（起立）。手指竖嘴边＝安静。',
    takeaway:'Be quiet, please. = 请安静。'
  },
  {
    id:'b-22', pack:'daily', level:1, type:'listening',
    scene:'🗣️ 日常短句篇',
    emoji:'🧍',
    situation:'早读要开始了，外教走进来对坐着的同学说：',
    quote:'Stand up, please.',
    note:'同学们都从座位上站了起来。',
    ask:'她让大家做什么？',
    options:[
      { text:'请起立', note:'stand up = 起立', badge:'起立', kind:'stiff', ok:true,
        why:'stand up 是站起来，up 表示往上。' },
      { text:'请坐下', note:'那是 sit down', badge:'坐下', kind:'stiff', ok:false,
        why:'坐下是 sit down，down 表示往下，正好相反。' },
      { text:'请安静', note:'那是 be quiet', badge:'安静', kind:'stiff', ok:false,
        why:'安静是 Be quiet，不用站起来。' }
    ],
    explain:'💡 一上一下记一对：stand up（起立）↔ sit down（坐下）。up 往上站，down 往下坐。',
    takeaway:'Stand up, please. = 请起立。'
  },
  {
    id:'b-23', pack:'daily', level:2, type:'listening',
    scene:'🗣️ 日常短句篇',
    emoji:'🗣️',
    situation:'教新单词时，外教先念一遍，然后对大家说：',
    quote:'Read after me.',
    note:'她念一句，停一下，等大家跟上。',
    ask:'她让大家做什么？',
    options:[
      { text:'跟着我读', note:'after me = 跟在我后面', badge:'跟读', kind:'stiff', ok:true,
        why:'Read after me 就是她先读，你跟着读一遍。' },
      { text:'自己看书读', note:'那是 read by yourself', badge:'自己读', kind:'stiff', ok:false,
        why:'自己读是 read by yourself，这里要跟着老师。' },
      { text:'听我说', note:'那是 listen to me', badge:'听', kind:'stiff', ok:false,
        why:'听我说是 Listen to me，这句还要你开口读。' }
    ],
    explain:'💡 课堂跟读三连：Listen.（听）→ Read after me.（跟我读）→ Again, please.（再来一遍）。',
    takeaway:'Read after me. = 跟着我读。'
  },
  {
    id:'b-24', pack:'daily', level:1, type:'listening',
    scene:'🗣️ 日常短句篇',
    emoji:'🤲',
    situation:'你跟阿姨要一张纸巾，她抽了一张递到你面前，说：',
    quote:'Here you are.',
    note:'她把纸巾往你手边送。',
    ask:'她这句是什么意思？',
    options:[
      { text:'给你', note:'递东西时说的', badge:'给你', kind:'stiff', ok:true,
        why:'Here you are 就是把东西递给你时说的"给你、拿好"。' },
      { text:'你在哪儿', note:'那是 Where are you?', badge:'在哪', kind:'stiff', ok:false,
        why:'问你在哪儿是 Where are you?，跟递东西没关系。' },
      { text:'你好吗', note:'那是 How are you?', badge:'你好吗', kind:'stiff', ok:false,
        why:'How are you 是问好，这会儿她在给你东西。' }
    ],
    explain:'💡 递东西给别人就说 Here you are.（或 Here you go.）。接过来别忘了说 Thank you。',
    takeaway:'Here you are. = 给你。'
  }

  ]);

  /* ---------- 👋 打招呼篇（加餐 2） ---------- */
  EN.add('starter2', 'hello', [

  {
    id:'b-25', pack:'hello', level:1, type:'phrase',
    scene:'👋 打招呼篇',
    emoji:'🏫',
    situation:'放学了，明天还要上课，外教朝你挥挥手说：',
    quote:'See you tomorrow!',
    note:'明天你们还会再见面。',
    ask:'你该回哪一句？',
    options:[
      { text:'See you tomorrow!', note:'明天见', badge:'地道', kind:'native', ok:true,
        why:'原样还回去就对了，明天见就说 See you tomorrow!' },
      { text:'Good morning!', note:'早上好', badge:'时机不对', kind:'stiff', ok:false,
        why:'现在是放学，不是早上问好。' },
      { text:'Nice to meet you.', note:'很高兴认识你', badge:'用错了', kind:'stiff', ok:false,
        why:'那是第一次见面才说的，你们早就认识了。' }
    ],
    explain:'💡 道别的几种说法：Bye! / See you! / See you tomorrow!（明天见）。',
    takeaway:'明天还见面 → See you tomorrow!'
  },
  {
    id:'b-26', pack:'hello', level:2, type:'phrase',
    scene:'👋 打招呼篇',
    emoji:'😊',
    situation:'你问外教 How are you?，她笑着回答完，又反问你：',
    quote:"I'm fine. And you?",
    note:'她想知道你今天怎么样。',
    ask:'你该怎么接？',
    options:[
      { text:"I'm fine, too.", note:'我也很好', badge:'地道', kind:'native', ok:true,
        why:'她问 And you?（你呢），你就说自己也好，加个 too。' },
      { text:'And you?', note:'你呢', badge:'绕圈了', kind:'trap', ok:false,
        why:'她已经问你了，你再问回去就绕圈了。' },
      { text:"I'm nine.", note:'我九岁', badge:'答偏了', kind:'stiff', ok:false,
        why:'那是回答 How old are you? 的。' }
    ],
    explain:"💡 And you?（你呢）是把问题抛回来。回答 I'm fine, too. 里的 too 就是“也”的意思。",
    takeaway:"And you? → I'm fine, too."
  },
  {
    id:'b-27', pack:'hello', level:2, type:'phrase',
    scene:'👋 打招呼篇',
    emoji:'🌍',
    situation:'新来的外教想认识大家，指着你问：',
    quote:'Where are you from?',
    note:'她想知道你是哪里人。',
    ask:'你该怎么回答？',
    options:[
      { text:"I'm from China.", note:'我来自中国', badge:'地道', kind:'native', ok:true,
        why:'问你从哪儿来，用 I\'m from + 地方来回答。' },
      { text:"I'm fine.", note:'我很好', badge:'答偏了', kind:'stiff', ok:false,
        why:'那是回答 How are you? 的。' },
      { text:"I'm nine.", note:'我九岁', badge:'答偏了', kind:'stiff', ok:false,
        why:'那是回答 How old are you? 的。' }
    ],
    explain:"💡 Where are you from?（你从哪儿来）→ I'm from China.。把 China 换成你的城市也行。",
    takeaway:"Where are you from? → I'm from China."
  },
  {
    id:'b-28', pack:'hello', level:1, type:'phrase',
    scene:'👋 打招呼篇',
    emoji:'🚪',
    situation:'第一次去寄宿家庭，阿姨打开门，张开双臂笑着说：',
    quote:'Welcome!',
    note:'她很高兴你来。',
    ask:'你该说什么？',
    options:[
      { text:'Thank you!', note:'谢谢', badge:'地道', kind:'native', ok:true,
        why:'别人欢迎你，回一句谢谢最自然。' },
      { text:'Welcome!', note:'欢迎', badge:'反了', kind:'trap', ok:false,
        why:'是她欢迎你，不是你欢迎她，别还回去。' },
      { text:'Sorry.', note:'对不起', badge:'用错了', kind:'stiff', ok:false,
        why:'这是高兴的场合，用不着道歉。' }
    ],
    explain:'💡 别人说 Welcome!（欢迎）迎接你，你回 Thank you! 就好。',
    takeaway:'Welcome! → Thank you!'
  }

  ]);

  /* ---------- 🙏 礼貌用语篇（加餐 2） ---------- */
  EN.add('starter2', 'polite', [

  {
    id:'b-29', pack:'polite', level:2, type:'manners',
    scene:'🙏 礼貌用语篇',
    emoji:'🎨',
    situation:'美术课上，外教看了看你的画，竖起大拇指说：',
    quote:'Your picture is nice!',
    note:'她在夸你画得好。',
    ask:'你该怎么回？',
    options:[
      { text:'Thank you!', note:'谢谢', badge:'地道', kind:'native', ok:true,
        why:'别人夸你，大方地说声谢谢就好。' },
      { text:'No, no.', note:'不不不', badge:'太见外', kind:'trap', ok:false,
        why:'中文爱谦虚说“没有没有”，但英语里被夸就直接说 Thank you。' },
      { text:'Sorry.', note:'对不起', badge:'用错了', kind:'stiff', ok:false,
        why:'被表扬是好事，别道歉。' }
    ],
    explain:'💡 被夸奖时，英语里不用谦虚推辞，一句 Thank you! 就是最好的回应。',
    takeaway:'被表扬 → Thank you!'
  },
  {
    id:'b-30', pack:'polite', level:2, type:'manners',
    scene:'🙏 礼貌用语篇',
    emoji:'🚻',
    situation:'上课上到一半，你很想上厕所，只能举手问老师。',
    quote:'',
    note:'你得先得到老师同意。',
    ask:'该怎么问最有礼貌？',
    options:[
      { text:'Can I go to the toilet, please?', note:'我可以去厕所吗', badge:'地道', kind:'native', ok:true,
        why:'请求许可用 Can I…, please?，客气又清楚。' },
      { text:'I go toilet.', note:'我去厕所', badge:'不通顺', kind:'stiff', ok:false,
        why:'少了 Can I 和 to，句子不完整也不礼貌。' },
      { text:'Toilet!', note:'厕所！', badge:'太冲', kind:'trap', ok:false,
        why:'只喊一个词像在下命令，很不礼貌。' }
    ],
    explain:'💡 想做某件事先征得同意：Can I go to the toilet, please? / Can I have some water, please?',
    takeaway:'请求许可 → Can I …, please?'
  },
  {
    id:'b-31', pack:'polite', level:2, type:'manners',
    scene:'🙏 礼貌用语篇',
    emoji:'⏰',
    situation:'你迟到了，轻轻推开教室门，全班都看过来。',
    quote:'',
    note:'老师正在讲课。',
    ask:'进门第一句该说什么？',
    options:[
      { text:"Sorry, I'm late.", note:'对不起，我迟到了', badge:'地道', kind:'native', ok:true,
        why:'迟到打扰了大家，先道个歉最得体。' },
      { text:'Hello, everyone!', note:'大家好', badge:'不合适', kind:'trap', ok:false,
        why:'迟到还大声打招呼，会更打扰上课。' },
      { text:'I late.', note:'我迟到', badge:'不通顺', kind:'stiff', ok:false,
        why:'少了 am：I\'m late.，前面还要加 Sorry。' }
    ],
    explain:"💡 迟到进门先说 Sorry, I'm late.，老师一般会说 Come in.（进来吧）。",
    takeaway:"迟到 → Sorry, I'm late."
  },
  {
    id:'b-32', pack:'polite', level:2, type:'manners',
    scene:'🙏 礼貌用语篇',
    emoji:'🙌',
    situation:'你帮同学讲明白了一道题，他特别感激地说：',
    quote:'Thank you so much!',
    note:'他谢得特别真诚。',
    ask:'你该怎么回？',
    options:[
      { text:'No problem!', note:'不客气、小事一桩', badge:'地道', kind:'native', ok:true,
        why:'别人谢你，回 No problem! 又轻松又地道。' },
      { text:'Thank you so much!', note:'太谢谢你了', badge:'绕圈了', kind:'stiff', ok:false,
        why:'他谢的是你，你再谢回去就绕圈了。' },
      { text:'Sorry.', note:'对不起', badge:'用错了', kind:'stiff', ok:false,
        why:'你帮了忙是好事，不用道歉。' }
    ],
    explain:"💡 别人道谢，回哪句都行：You're welcome. / No problem. / Sure. / My pleasure.",
    takeaway:'Thank you so much! → No problem!'
  }

  ]);

  /* ---------- 🗣️ 日常短句篇（加餐 2） ---------- */
  EN.add('starter2', 'daily', [

  {
    id:'b-33', pack:'daily', level:2, type:'listening',
    scene:'🗣️ 日常短句篇',
    emoji:'👀',
    situation:'外教在黑板上写了新单词，转过身对大家说：',
    quote:'Look at the blackboard.',
    note:'她用手指了指身后的黑板。',
    ask:'她让大家做什么？',
    options:[
      { text:'看黑板', note:'look at = 看向', badge:'看黑板', kind:'stiff', ok:true,
        why:'Look at the blackboard 就是往黑板那儿看。' },
      { text:'擦黑板', note:'那是 clean the blackboard', badge:'擦黑板', kind:'stiff', ok:false,
        why:'擦黑板是 clean，这里只是让你看。' },
      { text:'合上书', note:'那是 close your book', badge:'合书', kind:'stiff', ok:false,
        why:'合上书是 close your book，跟黑板没关系。' }
    ],
    explain:'💡 Look at… 就是“看向……”：Look at me.（看我）、Look at the blackboard.（看黑板）。',
    takeaway:'Look at the blackboard. = 看黑板。'
  },
  {
    id:'b-34', pack:'daily', level:2, type:'listening',
    scene:'🗣️ 日常短句篇',
    emoji:'🙋',
    situation:'做游戏时外教喊了一声口令，会的同学都把手举了起来：',
    quote:'Hands up!',
    note:'知道答案的就举手。',
    ask:'她让大家做什么？',
    options:[
      { text:'把手举起来', note:'up = 往上', badge:'举手', kind:'stiff', ok:true,
        why:'Hands up! 就是把手举高。' },
      { text:'把手放下', note:'那是 hands down', badge:'放下', kind:'stiff', ok:false,
        why:'放下手是 hands down，down 表示往下。' },
      { text:'拍拍手', note:'那是 clap your hands', badge:'拍手', kind:'stiff', ok:false,
        why:'拍手是 clap your hands，不是举手。' }
    ],
    explain:'💡 和 hands（手）有关的口令：Hands up!（举手）、Hands down!（放下）、Clap your hands!（拍手）。',
    takeaway:'Hands up! = 把手举起来。'
  },
  {
    id:'b-35', pack:'daily', level:1, type:'listening',
    scene:'🗣️ 日常短句篇',
    emoji:'🍽️',
    situation:'饭菜都端上桌了，阿姨招呼大家坐下，笑着说：',
    quote:"Let's eat!",
    note:'大家都拿起了筷子。',
    ask:'她在说什么？',
    options:[
      { text:'开饭啦', note:"Let's = 一起来", badge:'吃饭', kind:'stiff', ok:true,
        why:"Let's eat! 就是招呼大家一起开动。" },
      { text:'去睡觉', note:'那是 go to bed', badge:'睡觉', kind:'stiff', ok:false,
        why:'睡觉是 go to bed，这会儿是吃饭。' },
      { text:'洗洗手', note:'那是 wash your hands', badge:'洗手', kind:'stiff', ok:false,
        why:'洗手是 wash your hands，是吃之前的事，这句是开吃了。' }
    ],
    explain:"💡 Let's + 动词 = 我们一起做：Let's eat!（开饭）、Let's go!（走吧）、Let's play!（一起玩）。",
    takeaway:"Let's eat! = 开饭啦！"
  },
  {
    id:'b-36', pack:'daily', level:1, type:'listening',
    scene:'🗣️ 日常短句篇',
    emoji:'☀️',
    situation:'早上七点，阿姨拉开窗帘，轻轻拍拍你说：',
    quote:'Wake up!',
    note:'太阳都晒屁股了。',
    ask:'她让你做什么？',
    options:[
      { text:'该起床了', note:'wake up = 醒来', badge:'起床', kind:'stiff', ok:true,
        why:'Wake up! 就是叫你醒醒、起床了。' },
      { text:'快睡觉', note:'那是 go to sleep', badge:'睡觉', kind:'stiff', ok:false,
        why:'睡觉是 go to sleep，这会儿是早上叫你起。' },
      { text:'站起来', note:'那是 stand up', badge:'起立', kind:'stiff', ok:false,
        why:'站起来是 stand up，跟起床不是一回事。' }
    ],
    explain:'💡 一睡一醒记一对：Wake up!（醒醒、起床）↔ Go to sleep.（睡觉）。',
    takeaway:'Wake up! = 该起床了！'
  }

  ]);

  /* ---------- 👋 打招呼篇（加餐 3） ---------- */
  EN.add('starter2', 'hello', [

  {
    id:'b-37', pack:'hello', level:1, type:'phrase',
    scene:'👋 打招呼篇',
    emoji:'🌆',
    situation:'傍晚你去朋友家吃饭，一进门朋友的爸爸对你说：',
    quote:'Good evening!',
    note:'天刚擦黑，太阳快落山了。',
    ask:'你该回哪一句？',
    options:[
      { text:'Good evening!', note:'晚上好', badge:'地道', kind:'native', ok:true,
        why:'傍晚见面互道 Good evening，原样还回去。' },
      { text:'Good morning!', note:'早上好', badge:'时间错', kind:'stiff', ok:false,
        why:'Good morning 是早上用的，现在天都黑了。' },
      { text:'Good night!', note:'晚安', badge:'时机不对', kind:'stiff', ok:false,
        why:'Good night 是睡觉前道别用的，不是见面问好。' }
    ],
    explain:'💡 四句时段问候凑齐：早 Good morning、午后 Good afternoon、傍晚 Good evening、睡前 Good night。',
    takeaway:'傍晚见面 → Good evening!'
  },
  {
    id:'b-38', pack:'hello', level:2, type:'phrase',
    scene:'👋 打招呼篇',
    emoji:'👋',
    situation:'早上你要去上学，寄宿家庭的阿姨在门口笑着送你：',
    quote:'Have a nice day!',
    note:'她祝你今天过得开心。',
    ask:'你该怎么回？',
    options:[
      { text:'Thanks, you too!', note:'谢谢，你也是', badge:'地道', kind:'native', ok:true,
        why:'别人祝你，你回一句 you too（你也是）最自然。' },
      { text:'Me too.', note:'我也是', badge:'不地道', kind:'trap', ok:false,
        why:'这里习惯说 You too.，而不是 Me too.。' },
      { text:'No, thank you.', note:'不用了，谢谢', badge:'答偏了', kind:'stiff', ok:false,
        why:'她在祝福你，不是问你要不要东西。' }
    ],
    explain:'💡 别人祝你 Have a nice day! / Have a good weekend!，都回一句 Thanks, you too!',
    takeaway:'Have a nice day! → Thanks, you too!'
  },
  {
    id:'b-39', pack:'hello', level:2, type:'phrase',
    scene:'👋 打招呼篇',
    emoji:'🤗',
    situation:'放假好久没见的外国朋友在街上遇见你，张开手臂说：',
    quote:'Nice to see you!',
    note:'你们早就认识，只是好久没见了。',
    ask:'你该怎么回？',
    options:[
      { text:'Nice to see you, too!', note:'见到你也很高兴', badge:'地道', kind:'native', ok:true,
        why:'老朋友重逢用 see；加个 too 还回去就对了。' },
      { text:'Nice to meet you.', note:'很高兴认识你', badge:'用错了', kind:'trap', ok:false,
        why:'meet 是第一次认识才用，你们早就认识了，要用 see。' },
      { text:'See you!', note:'回头见', badge:'说反了', kind:'stiff', ok:false,
        why:'See you! 是道别时说的，这会儿刚见面。' }
    ],
    explain:'💡 第一次认识用 meet：Nice to meet you.；老朋友重逢用 see：Nice to see you.',
    takeaway:'老朋友重逢 → Nice to see you, too!'
  },
  {
    id:'b-40', pack:'hello', level:1, type:'phrase',
    scene:'👋 打招呼篇',
    emoji:'🙋',
    situation:'开学第一天，老师让每个人站起来做自我介绍，轮到你了。',
    quote:'',
    note:'你叫 Lily，想告诉大家。',
    ask:'开口第一句怎么说？',
    options:[
      { text:"Hi, I'm Lily.", note:'你好，我是 Lily', badge:'地道', kind:'native', ok:true,
        why:"自我介绍用 I'm + 名字，简单又自然。" },
      { text:'Hi, I Lily.', note:'漏了 am', badge:'漏词', kind:'stiff', ok:false,
        why:"少了 am：I'm (I am) Lily. 才完整。" },
      { text:'Hi, my name Lily.', note:'漏了 is', badge:'漏词', kind:'stiff', ok:false,
        why:"要么 I'm Lily.，要么 My name is Lily.，中间的 is 不能少。" }
    ],
    explain:"💡 自我介绍两种说法：I'm Lily. / My name is Lily.。别把 am、is 漏掉。",
    takeaway:"自我介绍 → Hi, I'm Lily."
  }

  ]);

  /* ---------- 🙏 礼貌用语篇（加餐 3） ---------- */
  EN.add('starter2', 'polite', [

  {
    id:'b-41', pack:'polite', level:2, type:'manners',
    scene:'🙏 礼貌用语篇',
    emoji:'🤧',
    situation:'旁边的外国同学突然“阿嚏”打了个大喷嚏。',
    quote:'Achoo!',
    note:'他打完喷嚏看了看你。',
    ask:'这时候你该说什么？',
    options:[
      { text:'Bless you!', note:'保佑你（打喷嚏时说）', badge:'地道', kind:'native', ok:true,
        why:'别人打喷嚏，英语里习惯说 Bless you! 送上一句祝福。' },
      { text:'Thank you.', note:'谢谢', badge:'用错了', kind:'stiff', ok:false,
        why:'他又没帮你什么，用不着谢。' },
      { text:'Sorry.', note:'对不起', badge:'用错了', kind:'stiff', ok:false,
        why:'打喷嚏的又不是你，不用道歉。' }
    ],
    explain:'💡 别人打喷嚏，你说 Bless you!；对方会回你一句 Thank you.。这是英语里的小默契。',
    takeaway:'别人打喷嚏 → Bless you!'
  },
  {
    id:'b-42', pack:'polite', level:2, type:'manners',
    scene:'🙏 礼貌用语篇',
    emoji:'🍽️',
    situation:'饭菜摆上桌，阿姨招呼你先吃，笑着说：',
    quote:'Enjoy your meal!',
    note:'她把菜往你面前推了推。',
    ask:'你该怎么回？',
    options:[
      { text:'Thank you!', note:'谢谢', badge:'地道', kind:'native', ok:true,
        why:'别人请你好好吃，回一句谢谢就好。' },
      { text:'Sorry.', note:'对不起', badge:'用错了', kind:'stiff', ok:false,
        why:'吃饭是开心的事，用不着道歉。' },
      { text:'No, thank you.', note:'不用了，谢谢', badge:'说反了', kind:'stiff', ok:false,
        why:'这会儿是要开吃了，不是拒绝。' }
    ],
    explain:'💡 Enjoy your meal!（好好吃）是饭前的客气话，回一句 Thank you! 就行。',
    takeaway:'Enjoy your meal! → Thank you!'
  },
  {
    id:'b-43', pack:'polite', level:2, type:'manners',
    scene:'🙏 礼貌用语篇',
    emoji:'🚪',
    situation:'你来晚了，教室门关着，你敲了敲门。',
    quote:'',
    note:'要先得到老师同意才能进。',
    ask:'该怎么问最有礼貌？',
    options:[
      { text:'May I come in?', note:'我可以进来吗', badge:'地道', kind:'native', ok:true,
        why:'进门前问一句 May I come in?，得到同意再进最有礼貌。' },
      { text:'I come in.', note:'我进来', badge:'不通顺', kind:'stiff', ok:false,
        why:'少了 May I，像是直接闯进去，不礼貌。' },
      { text:'Open the door!', note:'开门！', badge:'太冲', kind:'trap', ok:false,
        why:'这是命令的口气，很不客气。' }
    ],
    explain:'💡 请求许可可以用 May I…? 或 Can I…?：May I come in?（我能进来吗）。老师会说 Come in.',
    takeaway:'进门先问 → May I come in?'
  },
  {
    id:'b-44', pack:'polite', level:2, type:'manners',
    scene:'🙏 礼貌用语篇',
    emoji:'👂',
    situation:'外教说了句话，但你没听清，想请她再说一遍。',
    quote:'',
    note:'你不太确定她刚才说了什么。',
    ask:'该怎么说最有礼貌？',
    options:[
      { text:'Pardon?', note:'请再说一遍好吗', badge:'地道', kind:'native', ok:true,
        why:'没听清礼貌地说 Pardon? 或 Sorry?，请对方再说一遍。' },
      { text:'What?', note:'什么？', badge:'太冲', kind:'trap', ok:false,
        why:'光一个 What? 听起来有点冲，像不耐烦。' },
      { text:'Say again.', note:'再说', badge:'生硬', kind:'stiff', ok:false,
        why:'能听懂，但少了礼貌，最好说 Pardon? 或 Could you say that again?' }
    ],
    explain:'💡 没听清别急着说 What?，礼貌的说法是 Pardon? / Sorry? / Could you say that again?',
    takeaway:'没听清 → Pardon?'
  }

  ]);

  /* ---------- 🗣️ 日常短句篇（加餐 3） ---------- */
  EN.add('starter2', 'daily', [

  {
    id:'b-45', pack:'daily', level:1, type:'listening',
    scene:'🗣️ 日常短句篇',
    emoji:'🚪',
    situation:'外面有点吵，外教指了指开着的门，对最靠门的同学说：',
    quote:'Close the door, please.',
    note:'门正开着，外面的声音传进来。',
    ask:'她让那个同学做什么？',
    options:[
      { text:'把门关上', note:'close = 关', badge:'关门', kind:'stiff', ok:true,
        why:'close the door 就是把门关起来。' },
      { text:'把门打开', note:'那是 open the door', badge:'开门', kind:'stiff', ok:false,
        why:'打开是 open，和 close 正好相反。' },
      { text:'把窗关上', note:'那是 close the window', badge:'关窗', kind:'stiff', ok:false,
        why:'那是关窗户 close the window，她说的是门。' }
    ],
    explain:'💡 一对反义词到处能用：open（开）↔ close（关）。the door、the window、your book 都能配。',
    takeaway:'Close the door, please. = 把门关上。'
  },
  {
    id:'b-46', pack:'daily', level:2, type:'listening',
    scene:'🗣️ 日常短句篇',
    emoji:'🪟',
    situation:'教室里有点闷，外教走到窗边，对同学说：',
    quote:'Open the window, please.',
    note:'她想让新鲜空气进来。',
    ask:'她让大家做什么？',
    options:[
      { text:'把窗户打开', note:'open = 打开', badge:'开窗', kind:'stiff', ok:true,
        why:'open the window 就是把窗户打开透气。' },
      { text:'把窗户关上', note:'那是 close the window', badge:'关窗', kind:'stiff', ok:false,
        why:'关上是 close，和 open 正好相反。' },
      { text:'把门打开', note:'那是 open the door', badge:'开门', kind:'stiff', ok:false,
        why:'那是开门 open the door，她说的是窗户。' }
    ],
    explain:'💡 open（开）配上不同的东西：open the window（开窗）、open the door（开门）、open your book（翻开书）。',
    takeaway:'Open the window, please. = 把窗户打开。'
  },
  {
    id:'b-47', pack:'daily', level:1, type:'listening',
    scene:'🗣️ 日常短句篇',
    emoji:'🚶',
    situation:'你敲了敲老师办公室的门，里面传来一个声音：',
    quote:'Come in, please.',
    note:'老师在里面招呼你。',
    ask:'老师让你做什么？',
    options:[
      { text:'进来', note:'come in = 进来', badge:'进来', kind:'stiff', ok:true,
        why:'Come in 就是让你推门进去。' },
      { text:'出去', note:'那是 go out', badge:'出去', kind:'stiff', ok:false,
        why:'出去是 go out，方向正好相反。' },
      { text:'等一下', note:'那是 wait a moment', badge:'等等', kind:'stiff', ok:false,
        why:'等一下是 Wait a moment，这句是让你进去。' }
    ],
    explain:'💡 敲门后听到 Come in.（进来）就可以推门进去；反过来是 Go out.（出去）。',
    takeaway:'Come in, please. = 进来。'
  },
  {
    id:'b-48', pack:'daily', level:2, type:'listening',
    scene:'🗣️ 日常短句篇',
    emoji:'👣',
    situation:'参观学校时，外教在前面带路，回头对大家说：',
    quote:'Follow me.',
    note:'她招招手，往前走了。',
    ask:'她让大家做什么？',
    options:[
      { text:'跟我走', note:'follow = 跟随', badge:'跟着走', kind:'stiff', ok:true,
        why:'Follow me 就是跟在她后面走。' },
      { text:'看着我', note:'那是 look at me', badge:'看我', kind:'stiff', ok:false,
        why:'看我是 Look at me，这句是让你跟上。' },
      { text:'等等我', note:'那是 wait for me', badge:'等我', kind:'stiff', ok:false,
        why:'等我是 Wait for me，这句是叫你跟着走。' }
    ],
    explain:'💡 带路时常说 Follow me.（跟我走）；跟不上就喊 Wait for me!（等等我）。',
    takeaway:'Follow me. = 跟我走。'
  }

  ]);

  /* ---------- 👋 打招呼篇（加餐 4） ---------- */
  EN.add('starter2', 'hello', [

  {
    id:'b-49', pack:'hello', level:2, type:'phrase',
    scene:'👋 打招呼篇',
    emoji:'🤙',
    situation:'走廊里遇到熟悉的外教，她轻松地问了一句：',
    quote:"How's it going?",
    note:'这是很随意的一句“最近怎么样”。',
    ask:'你该怎么回？',
    options:[
      { text:'Good, thanks!', note:'挺好的，谢谢', badge:'地道', kind:'native', ok:true, why:"How's it going? 是随口问好，回一句 Good, thanks! 就很自然。" },
      { text:"I'm nine.", note:'我九岁', badge:'答偏了', kind:'stiff', ok:false, why:'那是回答 How old are you? 的。' },
      { text:'Good morning!', note:'早上好', badge:'答偏了', kind:'stiff', ok:false, why:'她问的是最近怎么样，不是在道早安。' }
    ],
    explain:"💡 How's it going? / How are you? 都是问好，回 Good, thanks! / I'm fine, thanks! 都行。",
    takeaway:"How's it going? → Good, thanks!"
  },
  {
    id:'b-50', pack:'hello', level:1, type:'phrase',
    scene:'👋 打招呼篇',
    emoji:'🎉',
    situation:'新年第一天，外国朋友笑着对你说：',
    quote:'Happy New Year!',
    note:'新的一年开始了。',
    ask:'你该回哪一句？',
    options:[
      { text:'Happy New Year!', note:'新年快乐', badge:'地道', kind:'native', ok:true, why:'新年祝福原样还回去，最简单也最热闹。' },
      { text:'Happy birthday!', note:'生日快乐', badge:'用错了', kind:'trap', ok:false, why:'那是过生日才说的，不是过新年。' },
      { text:'Good night!', note:'晚安', badge:'答偏了', kind:'stiff', ok:false, why:'这是节日问候，不是道晚安。' }
    ],
    explain:"💡 节日互相祝福，原样还回去就行：Happy New Year! / Happy Children's Day!",
    takeaway:'Happy New Year! → Happy New Year!'
  },
  {
    id:'b-51', pack:'hello', level:2, type:'phrase',
    scene:'👋 打招呼篇',
    emoji:'🙌',
    situation:'生病请假几天，你回到学校，同学高兴地对你说：',
    quote:'Welcome back!',
    note:'大家都很想你。',
    ask:'你该怎么回？',
    options:[
      { text:'Thank you!', note:'谢谢', badge:'地道', kind:'native', ok:true, why:'别人欢迎你回来，回一句谢谢最自然。' },
      { text:'Welcome back!', note:'欢迎回来', badge:'反了', kind:'trap', ok:false, why:'回来的是你，不是他，别把这句还回去。' },
      { text:'Goodbye!', note:'再见', badge:'说反了', kind:'stiff', ok:false, why:'你刚回来，不是要走。' }
    ],
    explain:'💡 别人说 Welcome back!（欢迎回来）迎接你，你回 Thank you! 就好。',
    takeaway:'Welcome back! → Thank you!'
  },
  {
    id:'b-52', pack:'hello', level:2, type:'phrase',
    scene:'👋 打招呼篇',
    emoji:'🍀',
    situation:'马上要考试了，同桌拍拍你的肩说：',
    quote:'Good luck!',
    note:'他在祝你考出好成绩。',
    ask:'你该怎么回？',
    options:[
      { text:'Thank you!', note:'谢谢', badge:'地道', kind:'native', ok:true, why:'别人祝你好运，回一句谢谢就好。' },
      { text:'Sorry.', note:'对不起', badge:'用错了', kind:'stiff', ok:false, why:'祝福是好事，用不着道歉。' },
      { text:'Goodbye!', note:'再见', badge:'答偏了', kind:'stiff', ok:false, why:'他在祝你好运，不是要走。' }
    ],
    explain:'💡 别人祝你 Good luck!（祝你好运），回 Thank you!；如果他也要考，可以说 You too!',
    takeaway:'Good luck! → Thank you!'
  }

  ]);

  /* ---------- 🙏 礼貌用语篇（加餐 4） ---------- */
  EN.add('starter2', 'polite', [

  {
    id:'b-53', pack:'polite', level:2, type:'manners',
    scene:'🙏 礼貌用语篇',
    emoji:'🚪',
    situation:'你和老师同时走到门口，都想进去。',
    quote:'',
    note:'门只够一个人先过。',
    ask:'有礼貌的话该说什么？',
    options:[
      { text:'After you.', note:'您先请', badge:'地道', kind:'native', ok:true, why:'让别人先走，说一句 After you. 又客气又得体。' },
      { text:'Me first!', note:'我先！', badge:'太自私', kind:'trap', ok:false, why:'抢在老师前面还喊“我先”，很没礼貌。' },
      { text:'Go go go!', note:'快走快走', badge:'太冲', kind:'stiff', ok:false, why:'这样催人像在赶人，不礼貌。' }
    ],
    explain:'💡 让别人先走、先过、先拿，都可以说 After you.；对方会回你一句 Thank you.',
    takeaway:'让别人先 → After you.'
  },
  {
    id:'b-54', pack:'polite', level:2, type:'manners',
    scene:'🙏 礼貌用语篇',
    emoji:'🧂',
    situation:'吃饭时你想要盐，可盐罐在桌子另一头，够不着。',
    quote:'',
    note:'盐就在阿姨的手边。',
    ask:'该怎么请别人递给你？',
    options:[
      { text:'Can you pass me the salt, please?', note:'能把盐递给我吗', badge:'地道', kind:'native', ok:true, why:'请别人递东西用 Can you pass me…, please?，客气又清楚。' },
      { text:'Give me the salt!', note:'把盐给我！', badge:'太冲', kind:'trap', ok:false, why:'这是命令的口气，像在下令。' },
      { text:'I want the salt.', note:'我要盐', badge:'生硬', kind:'stiff', ok:false, why:'能听懂，但 I want 的语气比较直。' }
    ],
    explain:'💡 请人递东西：Can you pass me the salt / water / bread, please?。拿到后说 Thank you。',
    takeaway:'请人递东西 → Can you pass me …, please?'
  },
  {
    id:'b-55', pack:'polite', level:2, type:'manners',
    scene:'🙏 礼貌用语篇',
    emoji:'🙇',
    situation:'在同学家玩，你一不小心把杯子碰到地上摔碎了。',
    quote:'',
    note:'这回闯的祸有点大。',
    ask:'你该赶紧说什么？',
    options:[
      { text:"I'm so sorry!", note:'真对不起', badge:'地道', kind:'native', ok:true, why:"闯了大祸，加个 so 让道歉更诚恳：I'm so sorry!" },
      { text:"That's OK.", note:'没关系', badge:'反了', kind:'trap', ok:false, why:"That's OK 是原谅别人时说的，做错事的人要道歉。" },
      { text:'Thank you.', note:'谢谢', badge:'用错了', kind:'stiff', ok:false, why:'摔坏东西可不是好事，该道歉不是道谢。' }
    ],
    explain:"💡 小事说 Sorry.，闯了大祸说 I'm so sorry! / I'm really sorry!，语气更诚恳。",
    takeaway:"闯大祸 → I'm so sorry!"
  },
  {
    id:'b-56', pack:'polite', level:2, type:'manners',
    scene:'🙏 礼貌用语篇',
    emoji:'🏆',
    situation:'同学在比赛中得了第一名，抱着奖杯特别开心。',
    quote:'',
    note:'大家都围过来为他高兴。',
    ask:'你该对他说什么？',
    options:[
      { text:'Congratulations!', note:'恭喜你！', badge:'地道', kind:'native', ok:true, why:'别人取得好成绩，说一句 Congratulations! 送上祝贺。' },
      { text:'Thank you!', note:'谢谢', badge:'反了', kind:'trap', ok:false, why:'得奖的是他，该道谢的也是他，你要祝贺他。' },
      { text:'Sorry.', note:'对不起', badge:'用错了', kind:'stiff', ok:false, why:'这是高兴的事，别道歉。' }
    ],
    explain:'💡 别人得奖、生日、过节都能用 Congratulations!（恭喜）；被祝贺的人回 Thank you!',
    takeaway:'别人得奖 → Congratulations!'
  }

  ]);

  /* ---------- 🗣️ 日常短句篇（加餐 4） ---------- */
  EN.add('starter2', 'daily', [

  {
    id:'b-57', pack:'daily', level:2, type:'listening',
    scene:'🗣️ 日常短句篇',
    emoji:'🧹',
    situation:'手工课结束了，桌上到处是纸屑，外教拍拍手说：',
    quote:'Clean up, please.',
    note:'该把桌子收拾干净了。',
    ask:'她让大家做什么？',
    options:[
      { text:'收拾干净', note:'clean up = 收拾整理', badge:'收拾', kind:'stiff', ok:true, why:'Clean up 就是把乱七八糟的东西收拾整齐。' },
      { text:'安静下来', note:'那是 be quiet', badge:'安静', kind:'stiff', ok:false, why:'安静是 Be quiet，这句是让你收拾。' },
      { text:'站起来', note:'那是 stand up', badge:'起立', kind:'stiff', ok:false, why:'up 不一定是“起来”，clean up 是“收拾好”。' }
    ],
    explain:'💡 别看见 up 就以为是“往上”：clean up（收拾）、eat up（吃光）、hurry up（快点）。',
    takeaway:'Clean up, please. = 收拾干净。'
  },
  {
    id:'b-58', pack:'daily', level:1, type:'listening',
    scene:'🗣️ 日常短句篇',
    emoji:'👂',
    situation:'要放一段英文录音了，外教把手拢在耳边，说：',
    quote:'Listen carefully.',
    note:'她提醒大家竖起耳朵。',
    ask:'她让大家做什么？',
    options:[
      { text:'仔细听', note:'listen = 听', badge:'认真听', kind:'stiff', ok:true, why:'Listen carefully 就是仔细地听、认真地听。' },
      { text:'跟着读', note:'那是 read after me', badge:'跟读', kind:'stiff', ok:false, why:'跟读是 Read after me，这句只让你听。' },
      { text:'大声说', note:'那是 speak loudly', badge:'大声', kind:'stiff', ok:false, why:'大声说是 speak loudly，这句是让你听。' }
    ],
    explain:'💡 听说读看的口令：Listen.（听）、Read.（读）、Say it.（说）、Look.（看）。',
    takeaway:'Listen carefully. = 仔细听。'
  },
  {
    id:'b-59', pack:'daily', level:2, type:'listening',
    scene:'🗣️ 日常短句篇',
    emoji:'🖐️',
    situation:'你答对了问题，外教高兴地举起手掌，笑着说：',
    quote:'Give me five!',
    note:'她的手掌朝着你，等着你拍。',
    ask:'她想让你做什么？',
    options:[
      { text:'跟她击个掌', note:'give me five = 击掌', badge:'击掌', kind:'stiff', ok:true, why:'Give me five! 是伸手掌让你和她“啪”地击一下掌，表示棒极了。' },
      { text:'给她五个东西', note:'不是真要五样东西', badge:'字面错', kind:'trap', ok:false, why:'虽然有 five，但这不是真让你拿五样东西，是击掌。' },
      { text:'举起五根手指', note:'那是 show five fingers', badge:'举手指', kind:'stiff', ok:false, why:'give me five 是击掌，不是让你比数字。' }
    ],
    explain:'💡 Give me five! 是高兴时的击掌（five 指五根手指、整个手掌）。答对、赢了都能来一下。',
    takeaway:'Give me five! = 来击个掌！'
  },
  {
    id:'b-60', pack:'daily', level:1, type:'listening',
    scene:'🗣️ 日常短句篇',
    emoji:'⚠️',
    situation:'地上刚拖过还很滑，阿姨看你跑过来，赶紧喊：',
    quote:'Be careful!',
    note:'她怕你滑倒。',
    ask:'她在提醒你什么？',
    options:[
      { text:'小心点', note:'careful = 小心', badge:'小心', kind:'stiff', ok:true, why:'Be careful! 就是提醒你当心、别摔着。' },
      { text:'快点儿', note:'那是 Hurry up', badge:'快点', kind:'stiff', ok:false, why:'催你快是 Hurry up!，这句是让你当心。' },
      { text:'安静点', note:'那是 Be quiet', badge:'安静', kind:'stiff', ok:false, why:'安静是 Be quiet，这句是提醒你小心。' }
    ],
    explain:'💡 提醒当心用 Be careful!（小心）、Watch out!（当心）、Look out!（快躲开）。',
    takeaway:'Be careful! = 小心点！'
  }

  ]);

  /* ---------- 👋 打招呼篇（加餐 5） ---------- */
  EN.add('starter2', 'hello', [

  { id:'b-61', pack:'hello', level:2, type:'phrase', scene:'👋 打招呼篇', emoji:'🙋',
    situation:'一个陌生人走过来，想确认你是不是叫 Tom：', quote:'Are you Tom?',
    note:'你正是 Tom。', ask:'你该怎么回答？',
    options:[
      { text:'Yes, I am.', note:'用 am 回 Are', badge:'地道', kind:'native', ok:true, why:'Are you…? 开头，用 Yes, I am. 来短答。' },
      { text:'Yes, I do.', note:'助动词用错了', badge:'不配对', kind:'stiff', ok:false, why:'do 是回答 Do you…? 的，这句是 Are 开头。' },
      { text:"Yes, I'm Tom yes.", note:'又乱又重复', badge:'啰嗦', kind:'stiff', ok:false, why:'一句 Yes, I am. 就够了，不用重复。' }
    ],
    explain:"💡 确认身份：Are you Tom? → Yes, I am. / No, I'm not.。跟着 Are 用 am 答。",
    takeaway:'Are you Tom? → Yes, I am.' },

  { id:'b-62', pack:'hello', level:2, type:'phrase', scene:'👋 打招呼篇', emoji:'👩‍🏫',
    situation:'早上在校门口遇到你的英语老师，她姓 Li。', quote:'',
    note:'对老师要用尊称，不能直呼名字。', ask:'该怎么问好最有礼貌？',
    options:[
      { text:'Good morning, Miss Li!', note:'早上好，李老师', badge:'地道', kind:'native', ok:true, why:'称呼老师用 Miss / Mr. + 姓，礼貌又得体。' },
      { text:'Good morning, Li!', note:'直呼姓氏', badge:'不礼貌', kind:'trap', ok:false, why:'直接叫姓 Li 不够尊重，要加 Miss。' },
      { text:'Hey, you!', note:'喂，你', badge:'太没礼貌', kind:'stiff', ok:false, why:'这样叫老师非常不礼貌。' }
    ],
    explain:'💡 称呼大人加尊称：男老师 Mr. Li、女老师 Miss Li / Mrs. Li。别直接叫名字。',
    takeaway:'称呼老师 → Miss / Mr. + 姓' },

  { id:'b-63', pack:'hello', level:1, type:'phrase', scene:'👋 打招呼篇', emoji:'👋',
    situation:'中午你去打饭，跟同学说等会儿回来，他挥挥手说：', quote:'See you later!',
    note:'你们过一会儿还会见面。', ask:'你该回哪一句？',
    options:[
      { text:'See you later!', note:'待会儿见', badge:'地道', kind:'native', ok:true, why:'一会儿还见面，原样还回去就对了。' },
      { text:'Nice to meet you.', note:'很高兴认识你', badge:'用错了', kind:'stiff', ok:false, why:'那是第一次认识才说的，你们早认识了。' },
      { text:'Good morning!', note:'早上好', badge:'答偏了', kind:'stiff', ok:false, why:'这是道别，不是早上问好。' }
    ],
    explain:'💡 道别看时间：马上还见 See you later!；明天见 See you tomorrow!；不知何时见 See you!',
    takeaway:'待会儿见 → See you later!' },

  { id:'b-64', pack:'hello', level:2, type:'phrase', scene:'👋 打招呼篇', emoji:'🧣',
    situation:'天冷了，你要出门，寄宿家庭的阿姨叮嘱你：', quote:'Take care!',
    note:'她让你路上当心、照顾好自己。', ask:'你该怎么回？',
    options:[
      { text:'You too!', note:'你也是', badge:'地道', kind:'native', ok:true, why:'别人让你保重，回一句 You too! 最自然。' },
      { text:'Me too.', note:'我也是', badge:'不地道', kind:'trap', ok:false, why:'这里习惯说 You too.，而不是 Me too.。' },
      { text:'No, thank you.', note:'不用了，谢谢', badge:'答偏了', kind:'stiff', ok:false, why:'她在关心你，不是问你要不要东西。' }
    ],
    explain:'💡 Take care!（保重）、Have a nice day!（过得愉快）都回一句 You too! / Thanks, you too!',
    takeaway:'Take care! → You too!' }

  ]);

  /* ---------- 🙏 礼貌用语篇（加餐 5） ---------- */
  EN.add('starter2', 'polite', [

  { id:'b-65', pack:'polite', level:2, type:'manners', scene:'🙏 礼貌用语篇', emoji:'🎁',
    situation:'你给寄宿家庭的阿姨准备了一份小礼物，双手递过去。', quote:'',
    note:'你想说这是送给她的。', ask:'递礼物时该说什么？',
    options:[
      { text:'This is for you.', note:'这是给你的', badge:'地道', kind:'native', ok:true, why:'送东西时说 This is for you.，又清楚又得体。' },
      { text:'Give you.', note:'给你（不通顺）', badge:'不通顺', kind:'stiff', ok:false, why:'Give you 不成句，送东西说 This is for you. 或 Here you are.' },
      { text:'Take it!', note:'拿去！', badge:'太冲', kind:'trap', ok:false, why:'Take it! 像在命令，送礼要客气点。' }
    ],
    explain:'💡 送礼物说 This is for you.（这是给你的）；对方会回 Thank you! / For me?',
    takeaway:'送礼物 → This is for you.' },

  { id:'b-66', pack:'polite', level:2, type:'manners', scene:'🙏 礼貌用语篇', emoji:'⏳',
    situation:'同学来找你出去玩，可你还差一道题没写完，想请他稍等。', quote:'',
    note:'你马上就好。', ask:'该怎么请他等一下？',
    options:[
      { text:'Just a moment, please.', note:'请稍等一下', badge:'地道', kind:'native', ok:true, why:'请人稍等说 Just a moment, please. 或 Wait a moment, please.' },
      { text:'Wait!', note:'等着！', badge:'太冲', kind:'trap', ok:false, why:'光一个 Wait! 像在命令，加 please 才礼貌。' },
      { text:'Quick, quick!', note:'快快快', badge:'用错了', kind:'stiff', ok:false, why:'那是催别人快，你是想请他等一等。' }
    ],
    explain:'💡 请人稍等：Just a moment, please. / One moment, please. / Wait a minute, please.',
    takeaway:'请人稍等 → Just a moment, please.' },

  { id:'b-67', pack:'polite', level:2, type:'manners', scene:'🙏 礼貌用语篇', emoji:'🤲',
    situation:'你看见阿姨手里抱着一大摞东西，快拿不动了。', quote:'',
    note:'你想主动搭把手。', ask:'该怎么开口最合适？',
    options:[
      { text:'Can I help you?', note:'需要我帮忙吗', badge:'地道', kind:'native', ok:true, why:'主动帮忙说 Can I help you?，热心又礼貌。' },
      { text:'You need help.', note:'你需要帮助', badge:'像命令', kind:'stiff', ok:false, why:'这是在替她下判断，不像在问要不要帮忙。' },
      { text:'Help you!', note:'帮你！', badge:'不通顺', kind:'trap', ok:false, why:'Help you! 不成句，主动帮忙说 Can I help you?' }
    ],
    explain:'💡 请别人帮你用 Can you help me?；你主动帮别人用 Can I help you?。一 me 一 you，别弄反。',
    takeaway:'主动帮忙 → Can I help you?' },

  { id:'b-68', pack:'polite', level:2, type:'manners', scene:'🙏 礼貌用语篇', emoji:'🚻',
    situation:'在商场里你想找洗手间，得向一位陌生的叔叔打听。', quote:'',
    note:'你要先叫住他，再问路。', ask:'该怎么开口最有礼貌？',
    options:[
      { text:"Excuse me, where's the toilet?", note:'打扰一下，洗手间在哪儿', badge:'地道', kind:'native', ok:true, why:'先说 Excuse me 叫住对方，再问路，最礼貌。' },
      { text:'Where toilet?', note:'厕所哪', badge:'不通顺', kind:'stiff', ok:false, why:'少了词，句子不完整也不礼貌。' },
      { text:'Hey! Toilet!', note:'喂！厕所！', badge:'太冲', kind:'trap', ok:false, why:'这样喊很没礼貌，要用 Excuse me 开头。' }
    ],
    explain:"💡 问路先说 Excuse me（打扰一下），再问 Where's the …?：Excuse me, where's the toilet?",
    takeaway:"问路 → Excuse me, where's the …?" }

  ]);

  /* ---------- 🗣️ 日常短句篇（加餐 5） ---------- */
  EN.add('starter2', 'daily', [

  { id:'b-69', pack:'daily', level:2, type:'listening', scene:'🗣️ 日常短句篇', emoji:'💡',
    situation:'天黑了教室里看不清，外教指了指墙上的开关说：', quote:'Turn on the light.',
    note:'她想让屋里亮起来。', ask:'她让大家做什么？',
    options:[
      { text:'把灯打开', note:'turn on = 打开（电器）', badge:'开灯', kind:'stiff', ok:true, why:'Turn on the light 就是把灯打开。' },
      { text:'把灯关掉', note:'那是 turn off', badge:'关灯', kind:'stiff', ok:false, why:'关掉是 turn off，和 turn on 正好相反。' },
      { text:'把门打开', note:'那是 open the door', badge:'开门', kind:'stiff', ok:false, why:'开电器用 turn on，开门开窗才用 open。' }
    ],
    explain:'💡 电器开关用 turn on / turn off：灯、电视、电脑都这么说；门窗才用 open / close。',
    takeaway:'Turn on the light. = 把灯打开。' },

  { id:'b-70', pack:'daily', level:2, type:'listening', scene:'🗣️ 日常短句篇', emoji:'🔌',
    situation:'看电视看太久了，阿姨拿起遥控器对你说：', quote:'Turn off the TV.',
    note:'该让眼睛歇歇了。', ask:'她让你做什么？',
    options:[
      { text:'把电视关掉', note:'turn off = 关掉（电器）', badge:'关电视', kind:'stiff', ok:true, why:'Turn off the TV 就是把电视关掉。' },
      { text:'把电视打开', note:'那是 turn on', badge:'开电视', kind:'stiff', ok:false, why:'打开是 turn on，和 turn off 正好相反。' },
      { text:'把声音调大', note:'那是 turn it up', badge:'调大声', kind:'stiff', ok:false, why:'调大声是 turn up，关掉是 turn off。' }
    ],
    explain:'💡 一对反义：turn on（开）↔ turn off（关）。灯、电视、水龙头都能用。',
    takeaway:'Turn off the TV. = 把电视关掉。' },

  { id:'b-71', pack:'daily', level:1, type:'listening', scene:'🗣️ 日常短句篇', emoji:'🐢',
    situation:'你说话太快外教听不清，她笑着摆摆手说：', quote:'Slow down.',
    note:'她希望你说慢一点。', ask:'她让你做什么？',
    options:[
      { text:'慢一点', note:'slow down = 慢下来', badge:'慢点', kind:'stiff', ok:true, why:'Slow down 就是慢一点、别那么急。' },
      { text:'快一点', note:'那是 hurry up', badge:'快点', kind:'stiff', ok:false, why:'快一点是 Hurry up!，和 slow down 正好相反。' },
      { text:'停下来', note:'那是 stop', badge:'停下', kind:'stiff', ok:false, why:'停下是 Stop，slow down 只是让你慢点。' }
    ],
    explain:'💡 一快一慢记一对：Slow down.（慢点）↔ Hurry up!（快点）。说话、走路都能用。',
    takeaway:'Slow down. = 慢一点。' },

  { id:'b-72', pack:'daily', level:2, type:'listening', scene:'🗣️ 日常短句篇', emoji:'🛑',
    situation:'在商场里，妈妈要去旁边拿个东西，指着长椅对你说：', quote:'Wait here, please.',
    note:'她一会儿就回来。', ask:'她让你做什么？',
    options:[
      { text:'在这儿等', note:'wait here = 在这里等', badge:'在这等', kind:'stiff', ok:true, why:'Wait here 就是待在这儿别走，等她回来。' },
      { text:'跟我来', note:'那是 follow me', badge:'跟着', kind:'stiff', ok:false, why:'跟我来是 Follow me，这句是让你留在原地。' },
      { text:'过来这儿', note:'那是 come here', badge:'过来', kind:'stiff', ok:false, why:'过来是 Come here，这句是让你在这儿等。' }
    ],
    explain:'💡 Wait here.（在这儿等）、Wait for me.（等等我）、Wait a moment.（稍等）都带 wait。',
    takeaway:'Wait here, please. = 在这儿等。' }

  ]);

})(window.EN);
