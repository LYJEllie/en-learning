/* ============================================================
   🐤 启蒙 L2 · 短句子（12 题 · 打招呼 / 礼貌用语 / 日常短句 各 4 题）
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

})(window.EN);
