/* ============================================================
   🐤 启蒙 L2 · 短句子（36 题 · 打招呼 / 礼貌用语 / 日常短句 各 12 题）
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

})(window.EN);
