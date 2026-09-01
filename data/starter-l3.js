/* ============================================================
   🐥 启蒙 L3 · 小对话（12 题 · 课堂 / 家里 / 校园 各 4 题）
   ------------------------------------------------------------
   启蒙的最后一档：一问一答，要先听懂问句，再选出配得上的回答。
   顺带把最基础的语法点带出来：a / an、单复数、have 和 am、
   短答要跟问句配对（Do you…? → Yes, I do.）。
   过了这一档就可以去玩「🧒 小学生入门」了。
   只放数据。字段说明见 data/_core.js。
   ============================================================ */
(function (EN) {
  "use strict";

  /* ---------- 🏫 课堂小对话 ---------- */
  EN.add('starter3', 'class', [

  {
    id:'c-01', pack:'class', level:1, type:'phrase',
    scene:'🏫 课堂小对话',
    emoji:'📕',
    situation:'外教举起一本课本，指着它问你：',
    quote:"What's this?",
    note:'你知道这是一本书，但整句话该怎么说？',
    ask:'完整的回答是？',
    options:[
      { text:"It's a book.", note:'完整又标准', badge:'地道', kind:'native', ok:true,
        why:'回答"这是什么"要用 It\'s a + 名字，一个都不能少。' },
      { text:"It's book.", note:'漏了 a', badge:'漏词', kind:'stiff', ok:false,
        why:'book 前面必须有 a，表示"一本"。' },
      { text:'This book.', note:'没有动词，话没说完', badge:'不完整', kind:'trap', ok:false,
        why:'少了 is，句子立不住：This is a book. 才完整。' }
    ],
    explain:'💡 一个东西前面要有 a 或 an：a book、a cat、an apple、an egg。元音开头的词用 an。',
    takeaway:"What's this? → It's a book."
  },
  {
    id:'c-02', pack:'class', level:2, type:'phrase',
    scene:'🏫 课堂小对话',
    emoji:'✏️✏️✏️',
    situation:'外教把三支铅笔摆在讲台上，问全班：',
    quote:'How many pencils?',
    note:'讲台上一共三支。',
    ask:'该怎么回答？',
    options:[
      { text:'Three.', note:'问几个，就回数字', badge:'地道', kind:'native', ok:true,
        why:'How many 问的是数量，回一个数字就够了。' },
      { text:'Pencils.', note:'答成了名字', badge:'答偏了', kind:'stiff', ok:false,
        why:'回答名字用在 What are they? 上面。' },
      { text:"They're red.", note:'答成了颜色', badge:'答偏了', kind:'stiff', ok:false,
        why:'这是回答 What color are they? 的。' }
    ],
    explain:'💡 听问句开头就知道要回什么：How many…? 回数字，What…? 回名字，What color…? 回颜色。',
    takeaway:'How many…? → 回数字。'
  },
  {
    id:'c-03', pack:'class', level:3, type:'phrase',
    scene:'🏫 课堂小对话',
    emoji:'🏊',
    situation:'体育课上外教问你会不会游泳，你会：',
    quote:'Can you swim?',
    note:'你游得还挺好。',
    ask:'该怎么回答？',
    options:[
      { text:'Yes, I can.', note:'用 can 回 can', badge:'地道', kind:'native', ok:true,
        why:'问句用 Can，回答就用 can，这叫"配对短答"。' },
      { text:'Yes, I do.', note:'助动词用错了', badge:'不配对', kind:'stiff', ok:false,
        why:'do 是用来回答 Do you…? 的。' },
      { text:'Yes, I swim.', note:'把动词又说了一遍', badge:'啰嗦', kind:'stiff', ok:false,
        why:'能听懂，但英语里习惯用 Yes, I can. 这种短答。' }
    ],
    explain:'💡 短答要跟问句配对：Can you…? → Yes, I can.；Do you…? → Yes, I do.；Are you…? → Yes, I am.',
    takeaway:'Can you…? → Yes, I can.'
  },
  {
    id:'c-04', pack:'class', level:1, type:'listening',
    scene:'🏫 课堂小对话',
    emoji:'📖',
    situation:'外教举起课本，翻到某一页，对全班说：',
    quote:'Open your book.',
    note:'同学们都动起来了。',
    ask:'她让大家做什么？',
    options:[
      { text:'把书翻开', note:'open = 打开', badge:'翻开', kind:'stiff', ok:true,
        why:'open your book 就是把书打开。' },
      { text:'把书合上', note:'那是 close your book', badge:'合上', kind:'stiff', ok:false,
        why:'合上是 close，和 open 正好相反。' },
      { text:'把书举起来', note:'那是 hold up your book', badge:'举起', kind:'stiff', ok:false,
        why:'举起来会说 hold up 或 put up。' }
    ],
    explain:'💡 一对反义指令：Open your book.（翻开书）↔ Close your book.（合上书）。',
    takeaway:'Open your book. = 把书翻开。'
  }

  ]);

  /* ---------- 🏠 家里小对话 ---------- */
  EN.add('starter3', 'home', [

  {
    id:'c-05', pack:'home', level:2, type:'phrase',
    scene:'🏠 家里小对话',
    emoji:'🐕',
    situation:'妈妈的外国朋友想知道你家有没有养小动物，她问你：',
    quote:'Do you have a pet?',
    note:'你家养了一只小狗。',
    ask:'该怎么回答？',
    options:[
      { text:'Yes, I have a dog.', note:'先答 Yes，再说养了什么', badge:'地道', kind:'native', ok:true,
        why:'一句话就说清楚了：有，是一只狗。' },
      { text:'I am a dog.', note:'把"有"说成了"是"', badge:'差很远', kind:'trap', ok:false,
        why:'have 是"有"，am 是"是"。用错就变成你自己是小狗了。' },
      { text:'Yes, I have.', note:'话说了一半', badge:'不完整', kind:'stiff', ok:false,
        why:'后面还得说出养的是什么，对方才知道。' }
    ],
    explain:'💡 have 是"有"，am / is / are 是"是"：I have a dog.（我有一只狗）／I am a student.（我是学生）。',
    takeaway:'Do you have a pet? → Yes, I have a dog.'
  },
  {
    id:'c-06', pack:'home', level:3, type:'phrase',
    scene:'🏠 家里小对话',
    emoji:'🍜',
    situation:'快到饭点了，阿姨看你在厨房转来转去，问了一句：',
    quote:'Are you hungry?',
    note:'你确实饿了。',
    ask:'该怎么回答？',
    options:[
      { text:'Yes, I am.', note:'用 am 回 Are', badge:'地道', kind:'native', ok:true,
        why:'Are you…? 开头的问句，要用 Yes, I am. 来短答。' },
      { text:'Yes, I do.', note:'助动词用错了', badge:'不配对', kind:'stiff', ok:false,
        why:'do 用来回答 Do you…?，这句是 Are 开头的。' },
      { text:'I am hungry yes.', note:'词序乱了', badge:'语序错', kind:'stiff', ok:false,
        why:'yes 要放在最前面：Yes, I am hungry.' }
    ],
    explain:'💡 又一次练配对短答：Are you…? → Yes, I am. / No, I\'m not.。记住问什么就用什么回。',
    takeaway:'Are you…? → Yes, I am.'
  },
  {
    id:'c-07', pack:'home', level:2, type:'phrase',
    scene:'🏠 家里小对话',
    emoji:'💧',
    situation:'你在同学家玩得口渴了，想跟阿姨要一杯水。',
    quote:'',
    note:'她正在厨房忙。',
    ask:'该怎么开口最有礼貌？',
    options:[
      { text:'Can I have some water, please?', note:'请求＋please', badge:'地道', kind:'native', ok:true,
        why:'Can I have…? 是要东西时最常用、最礼貌的说法。' },
      { text:'I want water.', note:'像在提要求', badge:'生硬', kind:'stiff', ok:false,
        why:'能听懂，但 I want 的语气比较直。' },
      { text:'Water!', note:'只喊一个词', badge:'太冲', kind:'trap', ok:false,
        why:'单蹦一个名词听起来像命令，不像请求。' }
    ],
    explain:'💡 要东西的万能句：Can I have some water, please?。把 water 换成别的词就能到处用。',
    takeaway:'要东西 → Can I have …, please?'
  },
  {
    id:'c-08', pack:'home', level:2, type:'word',
    scene:'🏠 家里小对话',
    emoji:'🎒',
    situation:'出门前妈妈的外国朋友帮你找书包，问你书包在哪儿。',
    quote:'Where is your bag?',
    note:'书包好好地放在书桌的桌面上。',
    ask:'该怎么回答？',
    options:[
      { text:"It's on the desk.", note:'在桌面上', badge:'on', kind:'stiff', ok:true,
        why:'on 是"在……上面"，东西贴着桌面放就用它。' },
      { text:"It's in the desk.", note:'在桌子里面', badge:'in', kind:'stiff', ok:false,
        why:'in 是"在……里面"，那是塞进抽屉里了。' },
      { text:"It's under the desk.", note:'在桌子下面', badge:'under', kind:'stiff', ok:false,
        why:'under 是"在……下面"，那是掉到桌子底下了。' }
    ],
    explain:'💡 三个位置词一起记：on（上面）、in（里面）、under（下面）。问在哪儿用 Where is…?，回答用 It\'s + 位置词。',
    takeaway:'Where is…? → It\'s on / in / under the desk.'
  }

  ]);

  /* ---------- 🎒 校园小对话 ---------- */
  EN.add('starter3', 'school', [

  {
    id:'c-09', pack:'school', level:2, type:'phrase',
    scene:'🎒 校园小对话',
    emoji:'👩',
    situation:'妈妈来接你放学，你想把她介绍给外国同学。',
    quote:'',
    note:'同学正好奇地看着你们。',
    ask:'该怎么说？',
    options:[
      { text:'This is my mom.', note:'介绍别人的固定说法', badge:'地道', kind:'native', ok:true,
        why:'This is… 就是用来把身边的人介绍给别人的。' },
      { text:'This my mom.', note:'少了 is', badge:'漏词', kind:'stiff', ok:false,
        why:'句子里必须有 is，不然话没说完。' },
      { text:'She is my mom\'s.', note:'多了一个所有格', badge:'语法错', kind:'stiff', ok:false,
        why:'加了 \'s 就变成"我妈妈的（东西）"，介绍人的时候不能这么说。' }
    ],
    explain:'💡 介绍别人用 This is + 人：This is my mom. / This is my friend Tom.。对方会说 Nice to meet you.',
    takeaway:'介绍别人 → This is my mom.'
  },
  {
    id:'c-10', pack:'school', level:3, type:'phrase',
    scene:'🎒 校园小对话',
    emoji:'🐕',
    situation:'你和同学站在操场上，他指着远处树底下的一只狗问你那是什么。',
    quote:"What's that?",
    note:'那只狗离你们挺远。',
    ask:'该怎么回答？',
    options:[
      { text:"That's a dog.", note:'远的东西用 that', badge:'地道', kind:'native', ok:true,
        why:'他问的是 that（那个），你也用 that 来回答。' },
      { text:"This is a dog.", note:'this 是近处的东西', badge:'远近错', kind:'stiff', ok:false,
        why:'this 指身边的东西，狗在远处，要用 that。' },
      { text:"It's dog.", note:'漏了 a', badge:'漏词', kind:'stiff', ok:false,
        why:'dog 前面要加 a：It\'s a dog.' }
    ],
    explain:'💡 近的用 this，远的用 that：What\'s this?（这是什么）／What\'s that?（那是什么）。回答时跟着问句走。',
    takeaway:"What's that? → That's a dog."
  },
  {
    id:'c-11', pack:'school', level:3, type:'word',
    scene:'🎒 校园小对话',
    emoji:'🐱🐱',
    situation:'外教在黑板上画了两只猫，让你用英语说出来。',
    quote:'How many cats?',
    note:'黑板上一共两只。',
    ask:'两只猫该怎么说？',
    options:[
      { text:'Two cats.', note:'不止一个要加 s', badge:'地道', kind:'native', ok:true,
        why:'名词不止一个的时候，后面要加 s：two cats。' },
      { text:'Two cat.', note:'忘了加 s', badge:'漏 s', kind:'stiff', ok:false,
        why:'两只以上就得加 s，这是中国小朋友最容易忘的一点。' },
      { text:'Two cat s.', note:'s 要贴着单词写', badge:'写法错', kind:'stiff', ok:false,
        why:'s 是直接接在词尾的，中间不能空开。' }
    ],
    explain:'💡 一个 a cat，两个 two cats——不止一个就在词尾加 s：two dogs、three books、five apples。',
    takeaway:'不止一个，词尾加 s：two cats。'
  },
  {
    id:'c-12', pack:'school', level:2, type:'listening',
    scene:'🎒 校园小对话',
    emoji:'🏃',
    situation:'快上课了，你还在慢吞吞地系鞋带，同学在楼梯口冲你喊：',
    quote:'Hurry up!',
    note:'上课铃马上就要响了。',
    ask:'他在喊什么？',
    options:[
      { text:'快点儿', note:'hurry = 赶快', badge:'快点', kind:'stiff', ok:true,
        why:'Hurry up! 就是催你动作快一点。' },
      { text:'举起来', note:'那是 hands up', badge:'举起', kind:'stiff', ok:false,
        why:'带 up 的短语很多，别看见 up 就以为是"举起来"。' },
      { text:'起床啦', note:'那是 get up', badge:'起床', kind:'stiff', ok:false,
        why:'起床是 get up，你已经在学校啦。' }
    ],
    explain:'💡 带 up 的常用短语：Hurry up!（快点）、Stand up.（起立）、Get up.（起床）、Hands up!（举手）。',
    takeaway:'Hurry up! = 快点儿！'
  }

  ]);

})(window.EN);
