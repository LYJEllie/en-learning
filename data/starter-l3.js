/* ============================================================
   🐥 启蒙 L3 · 小对话（72 题 · 课堂 / 家里 / 校园 各 24 题）
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

  /* ---------- 🏫 课堂小对话（加餐） ---------- */
  EN.add('starter3', 'class', [

  {
    id:'c-13', pack:'class', level:2, type:'phrase',
    scene:'🏫 课堂小对话',
    emoji:'🍎',
    situation:'外教举起一个红苹果，指着它问你：',
    quote:"What's this?",
    note:'apple 是元音开头的词。',
    ask:'完整的回答是？',
    options:[
      { text:"It's an apple.", note:'元音前用 an', badge:'地道', kind:'native', ok:true,
        why:'apple 以元音开头，前面要用 an，不是 a。' },
      { text:"It's a apple.", note:'该用 an 却用了 a', badge:'冠词错', kind:'stiff', ok:false,
        why:'a apple 念起来打架，元音开头得用 an apple。' },
      { text:"It's apple.", note:'漏了冠词', badge:'漏词', kind:'stiff', ok:false,
        why:'apple 前面必须有 an，不能什么都不加。' }
    ],
    explain:'💡 元音（a/e/i/o/u）开头的词前面用 an：an apple、an egg、an orange；其余用 a：a book、a cat。',
    takeaway:"元音开头用 an → It's an apple."
  },
  {
    id:'c-14', pack:'class', level:2, type:'phrase',
    scene:'🏫 课堂小对话',
    emoji:'🖍️',
    situation:'外教举起一支红蜡笔，问全班这是什么颜色：',
    quote:'What color is it?',
    note:'蜡笔是红色的。',
    ask:'该怎么回答？',
    options:[
      { text:"It's red.", note:'问颜色就答颜色', badge:'地道', kind:'native', ok:true,
        why:'What color 问颜色，用 It\'s + 颜色 来回答。' },
      { text:"It's a crayon.", note:'答成了名字', badge:'答偏了', kind:'stiff', ok:false,
        why:'那是回答 What\'s this?（这是什么）的。' },
      { text:'Three.', note:'答成了数量', badge:'答偏了', kind:'stiff', ok:false,
        why:'回数字是给 How many? 的。' }
    ],
    explain:'💡 听问句开头就知道答什么：What color…? 答颜色，What…? 答名字，How many…? 答数字。',
    takeaway:"What color…? → It's red."
  },
  {
    id:'c-15', pack:'class', level:3, type:'phrase',
    scene:'🏫 课堂小对话',
    emoji:'🖊️',
    situation:'同桌想跟你借支笔，先问你有没有：',
    quote:'Do you have a pen?',
    note:'你笔袋里正好有一支。',
    ask:'该怎么回答？',
    options:[
      { text:'Yes, I do.', note:'用 do 回 Do', badge:'地道', kind:'native', ok:true,
        why:'Do you…? 开头的问句，用 Yes, I do. 来短答。' },
      { text:'Yes, I can.', note:'助动词用错了', badge:'不配对', kind:'stiff', ok:false,
        why:'can 是用来回答 Can you…? 的。' },
      { text:'Yes, I have.', note:'把动词又说了一遍', badge:'不配对', kind:'stiff', ok:false,
        why:'短答要用 do 顶替 have：Yes, I do. 才地道。' }
    ],
    explain:'💡 短答跟问句配对：Do you…? → Yes, I do.；Can you…? → Yes, I can.；Are you…? → Yes, I am.',
    takeaway:'Do you…? → Yes, I do.'
  },
  {
    id:'c-16', pack:'class', level:1, type:'listening',
    scene:'🏫 课堂小对话',
    emoji:'📗',
    situation:'下课前外教合上自己的课本，对大家说：',
    quote:'Close your book.',
    note:'同学们都把书合上了。',
    ask:'她让大家做什么？',
    options:[
      { text:'把书合上', note:'close = 合上', badge:'合上', kind:'stiff', ok:true,
        why:'close your book 就是把书合起来。' },
      { text:'把书翻开', note:'那是 open your book', badge:'翻开', kind:'stiff', ok:false,
        why:'翻开是 open，和 close 正好相反。' },
      { text:'把书收起来', note:'那是 put away your book', badge:'收起', kind:'stiff', ok:false,
        why:'收起来是 put away，这里只是合上。' }
    ],
    explain:'💡 一对反义指令：Open your book.（翻开）↔ Close your book.（合上）。',
    takeaway:'Close your book. = 把书合上。'
  }

  ]);

  /* ---------- 🏠 家里小对话（加餐） ---------- */
  EN.add('starter3', 'home', [

  {
    id:'c-17', pack:'home', level:3, type:'phrase',
    scene:'🏠 家里小对话',
    emoji:'🍚',
    situation:'你已经吃得很饱了，阿姨盛着饭问你还饿不饿：',
    quote:'Are you hungry?',
    note:'你一点都不饿了。',
    ask:'该怎么回答？',
    options:[
      { text:"No, I'm not.", note:'用 am 的否定短答', badge:'地道', kind:'native', ok:true,
        why:'Are you…? 的否定短答是 No, I\'m not.（I am not 的缩写）。' },
      { text:"No, I don't.", note:'助动词用错了', badge:'不配对', kind:'stiff', ok:false,
        why:'don\'t 用来回答 Do you…?，这句是 Are 开头的。' },
      { text:'No, I not hungry.', note:'少了 am', badge:'漏词', kind:'stiff', ok:false,
        why:'not 前面要有 am：No, I\'m not (hungry).' }
    ],
    explain:"💡 Are you…? 的一对短答：Yes, I am. / No, I'm not.。否定别忘了 am。",
    takeaway:"Are you…? → No, I'm not."
  },
  {
    id:'c-18', pack:'home', level:2, type:'word',
    scene:'🏠 家里小对话',
    emoji:'🐱',
    situation:'阿姨在找猫，问你看见了没有。你看见它钻到桌子底下了。',
    quote:'Where is the cat?',
    note:'猫正趴在桌子的下面。',
    ask:'该怎么回答？',
    options:[
      { text:"It's under the table.", note:'在桌子下面', badge:'under', kind:'stiff', ok:true,
        why:'under 是"在……下面"，猫钻到桌子底下就用它。' },
      { text:"It's on the table.", note:'在桌面上', badge:'on', kind:'stiff', ok:false,
        why:'on 是"在……上面"，那是趴在桌面上了。' },
      { text:"It's in the table.", note:'在桌子里面', badge:'in', kind:'stiff', ok:false,
        why:'in 是"在……里面"，桌子又没有肚子能钻进去。' }
    ],
    explain:'💡 三个位置词：on 上面、in 里面、under 下面。问在哪儿用 Where is…?，回答用 It\'s + 位置词。',
    takeaway:"Where is…? → It's under the table."
  },
  {
    id:'c-19', pack:'home', level:2, type:'phrase',
    scene:'🏠 家里小对话',
    emoji:'🍎',
    situation:'吃水果时阿姨想知道你爱不爱吃苹果，问你：',
    quote:'Do you like apples?',
    note:'你很爱吃苹果。',
    ask:'该怎么回答？',
    options:[
      { text:'Yes, I do.', note:'用 do 回 Do', badge:'地道', kind:'native', ok:true,
        why:'Do you like…? 用 Yes, I do. 来短答，最干脆。' },
      { text:'Yes, I am.', note:'助动词用错了', badge:'不配对', kind:'stiff', ok:false,
        why:'am 用来回答 Are you…?，这句是 Do 开头的。' },
      { text:'Yes, I like.', note:'话没说完', badge:'不完整', kind:'stiff', ok:false,
        why:'like 后面得跟东西；短答直接说 Yes, I do. 就够了。' }
    ],
    explain:'💡 Do you like…?（你喜欢……吗）→ Yes, I do. / No, I don\'t.。跟着问句的 Do 走。',
    takeaway:'Do you like…? → Yes, I do.'
  },
  {
    id:'c-20', pack:'home', level:1, type:'phrase',
    scene:'🏠 家里小对话',
    emoji:'🛏️',
    situation:'睡觉前阿姨来到你房间，帮你掖好被子，笑着说：',
    quote:'Good night!',
    note:'你正躺在床上准备睡了。',
    ask:'你该回哪一句？',
    options:[
      { text:'Good night!', note:'晚安', badge:'地道', kind:'native', ok:true,
        why:'睡前互道 Good night，原样还回去就对了。' },
      { text:'Good morning!', note:'早上好', badge:'时间错', kind:'stiff', ok:false,
        why:'Good morning 是早上起来才说的。' },
      { text:'Thank you.', note:'谢谢', badge:'答偏了', kind:'stiff', ok:false,
        why:'她是在道晚安，回一句晚安最自然。' }
    ],
    explain:'💡 睡前 Good night（晚安）↔ 早起 Good morning（早上好）。一句进被窝，一句出被窝。',
    takeaway:'Good night! → Good night!'
  }

  ]);

  /* ---------- 🎒 校园小对话（加餐） ---------- */
  EN.add('starter3', 'school', [

  {
    id:'c-21', pack:'school', level:2, type:'phrase',
    scene:'🎒 校园小对话',
    emoji:'🧑‍🤝‍🧑',
    situation:'课间新同学走过来想认识你，先问你叫什么：',
    quote:"What's your name?",
    note:'你叫 Tom。',
    ask:'该怎么回答最完整？',
    options:[
      { text:'My name is Tom.', note:'完整又标准', badge:'地道', kind:'native', ok:true,
        why:'介绍名字用 My name is + 名字，一个都不能少。' },
      { text:'My name Tom.', note:'漏了 is', badge:'漏词', kind:'stiff', ok:false,
        why:'中间必须有 is：My name is Tom.' },
      { text:"I'm fine.", note:'答成了心情', badge:'答偏了', kind:'trap', ok:false,
        why:'那是回答 How are you? 的，答非所问。' }
    ],
    explain:"💡 问名字：What's your name? → My name is …／I'm …。别漏了中间的 is。",
    takeaway:"What's your name? → My name is Tom."
  },
  {
    id:'c-22', pack:'school', level:2, type:'phrase',
    scene:'🎒 校园小对话',
    emoji:'🎈',
    situation:'新同学想知道你多大，好奇地问：',
    quote:'How old are you?',
    note:'你今年九岁。',
    ask:'该怎么回答？',
    options:[
      { text:"I'm nine.", note:'我九岁', badge:'地道', kind:'native', ok:true,
        why:'问年龄用 I\'m + 数字，nine 就是九。' },
      { text:"I'm fine.", note:'我很好', badge:'听岔了', kind:'trap', ok:false,
        why:'fine 和 nine 只差一个音，但那是回 How are you? 的。' },
      { text:"I'm Tom.", note:'说成了名字', badge:'答偏了', kind:'stiff', ok:false,
        why:'那是回答 What\'s your name? 的。' }
    ],
    explain:"💡 How old are you?（几岁）→ I'm nine.；How are you?（你好吗）→ I'm fine. fine 和 nine 别听混。",
    takeaway:"How old are you? → I'm nine."
  },
  {
    id:'c-23', pack:'school', level:3, type:'phrase',
    scene:'🎒 校园小对话',
    emoji:'🙋',
    situation:'同学搬不动一摞书，转过头问你能不能搭把手：',
    quote:'Can you help me?',
    note:'你正好有空。',
    ask:'该怎么答应？',
    options:[
      { text:'Sure, I can.', note:'用 can 回 Can', badge:'地道', kind:'native', ok:true,
        why:'Can you…? 用 can 来答，Sure 让语气更热情。' },
      { text:'Yes, I do.', note:'助动词用错了', badge:'不配对', kind:'stiff', ok:false,
        why:'do 是回答 Do you…? 的，这句是 Can 开头。' },
      { text:'Yes, I help.', note:'把动词又说了一遍', badge:'啰嗦', kind:'stiff', ok:false,
        why:'短答用 can 顶替 help：Yes, I can. 更自然。' }
    ],
    explain:'💡 答应帮忙：Can you help me? → Sure! / Yes, I can. / No problem! 都很地道。',
    takeaway:'Can you help me? → Sure, I can.'
  },
  {
    id:'c-24', pack:'school', level:2, type:'listening',
    scene:'🎒 校园小对话',
    emoji:'🚶',
    situation:'放学了，同学背起书包朝你招手：',
    quote:"Let's go!",
    note:'他已经往门口走了。',
    ask:'他在说什么？',
    options:[
      { text:'我们走吧', note:"Let's = Let us，一起做", badge:'走吧', kind:'stiff', ok:true,
        why:"Let's go! 就是招呼你一起走、一起出发。" },
      { text:'快点儿', note:'那是 Hurry up', badge:'快点', kind:'stiff', ok:false,
        why:'催你快是 Hurry up!，这句是招呼一起走。' },
      { text:'你先走', note:'那是 After you', badge:'你先', kind:'stiff', ok:false,
        why:'让你先走是 After you，这句是"一起走"。' }
    ],
    explain:"💡 Let's + 动词 = 我们一起做：Let's go!（走吧）、Let's play!（一起玩）、Let's eat!（开饭啦）。",
    takeaway:"Let's go! = 我们走吧！"
  }

  ]);

  /* ---------- 🏫 课堂小对话（加餐 2） ---------- */
  EN.add('starter3', 'class', [

  {
    id:'c-25', pack:'class', level:3, type:'phrase',
    scene:'🏫 课堂小对话',
    emoji:'🖊️🖊️',
    situation:'外教手里攥着好几支笔，举到你面前问：',
    quote:'What are these?',
    note:'不止一支，是好几支。',
    ask:'该怎么回答？',
    options:[
      { text:"They're pens.", note:'不止一个用 they', badge:'地道', kind:'native', ok:true,
        why:'问的是 these（这些，好几个），要用 They\'re + 复数来回答。' },
      { text:"It's a pen.", note:'把好几支说成了一支', badge:'单复数错', kind:'stiff', ok:false,
        why:'It\'s a pen 是“一支笔”，可现在有好几支。' },
      { text:'They pens.', note:'漏了 are', badge:'漏词', kind:'stiff', ok:false,
        why:'少了 are：They\'re (They are) pens. 才完整。' }
    ],
    explain:"💡 一个用 this → It's a pen.；好几个用 these → They're pens.。多了就加 s、用 they。",
    takeaway:"What are these? → They're pens."
  },
  {
    id:'c-26', pack:'class', level:2, type:'phrase',
    scene:'🏫 课堂小对话',
    emoji:'🍎',
    situation:'外教举起一个红苹果，明知故问地逗你：',
    quote:'Is it red?',
    note:'苹果确实是红的。',
    ask:'该怎么短答？',
    options:[
      { text:'Yes, it is.', note:'用 is 回 Is', badge:'地道', kind:'native', ok:true,
        why:'Is it…? 开头，就用 Yes, it is. 来短答。' },
      { text:'Yes, it does.', note:'助动词用错了', badge:'不配对', kind:'stiff', ok:false,
        why:'does 是回答 Does it…? 的，这句是 Is 开头。' },
      { text:'Yes, red.', note:'话没说完', badge:'不完整', kind:'stiff', ok:false,
        why:'短答要说 Yes, it is.，光一个 red 不成句。' }
    ],
    explain:'💡 Is it…? → Yes, it is. / No, it isn\'t.。Is 问就用 is 答，这也是配对短答。',
    takeaway:'Is it…? → Yes, it is.'
  },
  {
    id:'c-27', pack:'class', level:2, type:'phrase',
    scene:'🏫 课堂小对话',
    emoji:'🧽',
    situation:'你写错了字，橡皮却忘带了，想借同桌的用一下。',
    quote:'',
    note:'他的橡皮就放在桌角。',
    ask:'该怎么开口最有礼貌？',
    options:[
      { text:'Can I use your eraser, please?', note:'我能用一下你的橡皮吗', badge:'地道', kind:'native', ok:true,
        why:'借用别人的东西，用 Can I use…, please? 最客气。' },
      { text:'Give me your eraser.', note:'把橡皮给我', badge:'太冲', kind:'trap', ok:false,
        why:'这是命令的口气，像在抢，不像在借。' },
      { text:'I use eraser.', note:'我用橡皮', badge:'不通顺', kind:'stiff', ok:false,
        why:'少了 Can I 和 your，既不完整也不礼貌。' }
    ],
    explain:'💡 借东西用 Can I use…, please?；对方递给你会说 Here you are.，你回一句 Thank you。',
    takeaway:'借东西 → Can I use …, please?'
  },
  {
    id:'c-28', pack:'class', level:1, type:'listening',
    scene:'🏫 课堂小对话',
    emoji:'👋',
    situation:'外教站在讲台边，朝你招招手说：',
    quote:'Come here, please.',
    note:'她的手在往自己身前招。',
    ask:'她让你做什么？',
    options:[
      { text:'到这儿来', note:'come here = 过来', badge:'过来', kind:'stiff', ok:true,
        why:'Come here 就是让你走到她那边去。' },
      { text:'坐下', note:'那是 sit down', badge:'坐下', kind:'stiff', ok:false,
        why:'坐下是 sit down，这句是叫你过去。' },
      { text:'出去', note:'那是 go out', badge:'出去', kind:'stiff', ok:false,
        why:'出去是 go out，方向正好相反。' }
    ],
    explain:'💡 一来一去记一对：Come here.（过来）↔ Go out.（出去）。',
    takeaway:'Come here, please. = 到这儿来。'
  }

  ]);

  /* ---------- 🏠 家里小对话（加餐 2） ---------- */
  EN.add('starter3', 'home', [

  {
    id:'c-29', pack:'home', level:3, type:'phrase',
    scene:'🏠 家里小对话',
    emoji:'👨',
    situation:'同学翻你的全家福，指着照片上一个戴眼镜的男人问你：',
    quote:"Who's he?",
    note:'那是你爸爸。',
    ask:'该怎么回答？',
    options:[
      { text:"He's my dad.", note:'男的用 he', badge:'地道', kind:'native', ok:true,
        why:'照片上是男的，用 He\'s（He is）来介绍。' },
      { text:"She's my dad.", note:'男女用错了', badge:'he/she 错', kind:'trap', ok:false,
        why:'she 指女的，爸爸是男的，得用 he。' },
      { text:'He my dad.', note:'漏了 is', badge:'漏词', kind:'stiff', ok:false,
        why:'中间要有 is：He\'s my dad. 才完整。' }
    ],
    explain:"💡 男的用 he，女的用 she：He's my dad.（他是我爸爸）／She's my mom.（她是我妈妈）。",
    takeaway:"Who's he? → He's my dad."
  },
  {
    id:'c-30', pack:'home', level:2, type:'phrase',
    scene:'🏠 家里小对话',
    emoji:'🍵',
    situation:'你坐在客厅，阿姨端着茶壶走过来问你：',
    quote:'Would you like some tea?',
    note:'你正好想喝点热的。',
    ask:'该怎么答应？',
    options:[
      { text:'Yes, please.', note:'好的，谢谢', badge:'地道', kind:'native', ok:true,
        why:'想要就说 Yes, please.，又短又礼貌。' },
      { text:'Yes, I am.', note:'答非所问', badge:'不配对', kind:'stiff', ok:false,
        why:'Yes, I am 是回答 Are you…? 的，这里问的是要不要。' },
      { text:'No, thank you.', note:'不用了，谢谢', badge:'说反了', kind:'stiff', ok:false,
        why:'这是不想要时说的，意思正好相反。' }
    ],
    explain:'💡 Would you like…?（您要来点……吗）是很客气的问法。要 → Yes, please.；不要 → No, thank you.',
    takeaway:'Would you like…? → Yes, please.'
  },
  {
    id:'c-31', pack:'home', level:3, type:'phrase',
    scene:'🏠 家里小对话',
    emoji:'🧦',
    situation:'出门前你在找袜子，阿姨看到它们在床上，你想告诉她。',
    quote:'Where are my socks?',
    note:'袜子是一双，两只都在床上。',
    ask:'该怎么回答？',
    options:[
      { text:"They're on the bed.", note:'一双用 they', badge:'地道', kind:'native', ok:true,
        why:'袜子是一双（好几只），用 They\'re；on 表示在床上面。' },
      { text:"It's on the bed.", note:'一双说成了一只', badge:'单复数错', kind:'stiff', ok:false,
        why:'socks 是一双，得用 They\'re，不是 It\'s。' },
      { text:"They're in the bed.", note:'位置词用错了', badge:'in/on 错', kind:'stiff', ok:false,
        why:'in the bed 是“在被窝里”，袜子放在床面上，用 on。' }
    ],
    explain:"💡 一双、一对都是复数，用 They're：They're on the bed.。别忘了 socks 后面的 s。",
    takeaway:"Where are my socks? → They're on the bed."
  },
  {
    id:'c-32', pack:'home', level:1, type:'listening',
    scene:'🏠 家里小对话',
    emoji:'🏠',
    situation:'在公园玩了一下午，天快黑了，阿姨牵起你的手说：',
    quote:"Let's go home.",
    note:'她指了指回家的方向。',
    ask:'她在说什么？',
    options:[
      { text:'我们回家吧', note:'go home = 回家', badge:'回家', kind:'stiff', ok:true,
        why:"Let's go home. 就是招呼你一起回家。" },
      { text:'快点儿', note:'那是 Hurry up', badge:'快点', kind:'stiff', ok:false,
        why:'催你快是 Hurry up!，这句是说回家。' },
      { text:'起床啦', note:'那是 Get up', badge:'起床', kind:'stiff', ok:false,
        why:'起床是 Get up，这会儿是要回家。' }
    ],
    explain:'💡 go home 就是回家，前面不加 to：go home（回家）、go to school（去上学）。',
    takeaway:"Let's go home. = 我们回家吧。"
  }

  ]);

  /* ---------- 🎒 校园小对话（加餐 2） ---------- */
  EN.add('starter3', 'school', [

  {
    id:'c-33', pack:'school', level:3, type:'phrase',
    scene:'🎒 校园小对话',
    emoji:'👧',
    situation:'同学看见一个女生跟你打招呼，好奇地指着她问你：',
    quote:"Who's she?",
    note:'那是你的好朋友 Lily。',
    ask:'该怎么回答？',
    options:[
      { text:"She's my friend.", note:'女的用 she', badge:'地道', kind:'native', ok:true,
        why:'那是女生，用 She\'s（She is）来介绍。' },
      { text:"He's my friend.", note:'男女用错了', badge:'he/she 错', kind:'trap', ok:false,
        why:'he 指男的，她是女生，得用 she。' },
      { text:'She my friend.', note:'漏了 is', badge:'漏词', kind:'stiff', ok:false,
        why:'中间要有 is：She\'s my friend. 才完整。' }
    ],
    explain:"💡 女的用 she，男的用 he：She's my friend.（她是我朋友）／He's my friend.（他是我朋友）。",
    takeaway:"Who's she? → She's my friend."
  },
  {
    id:'c-34', pack:'school', level:3, type:'phrase',
    scene:'🎒 校园小对话',
    emoji:'🐦🐦',
    situation:'你和同学在操场上，他指着远处电线上停着的几只鸟问你：',
    quote:'What are those?',
    note:'那几只鸟离你们挺远。',
    ask:'该怎么回答？',
    options:[
      { text:"They're birds.", note:'远处好几个', badge:'地道', kind:'native', ok:true,
        why:'those（那些，远处好几个）要用 They\'re + 复数来回答。' },
      { text:"That's a bird.", note:'好几只说成了一只', badge:'单复数错', kind:'stiff', ok:false,
        why:'那儿有好几只，That\'s a bird 只说了一只。' },
      { text:'Those birds.', note:'漏了 are', badge:'漏词', kind:'stiff', ok:false,
        why:'少了 are：They\'re birds. 才成句。' }
    ],
    explain:"💡 近的这些 these、远的那些 those，回答都用 They're + 复数：They're birds.",
    takeaway:"What are those? → They're birds."
  },
  {
    id:'c-35', pack:'school', level:2, type:'phrase',
    scene:'🎒 校园小对话',
    emoji:'⚽',
    situation:'课间同学抱着足球跑过来，兴冲冲地问你：',
    quote:"Let's play football!",
    note:'你也正想活动活动。',
    ask:'想一起玩，该怎么答应？',
    options:[
      { text:"OK! Let's go!", note:'好啊，走吧', badge:'地道', kind:'native', ok:true,
        why:'想一起玩就爽快答应：OK! / Good idea! / Let\'s go!' },
      { text:'No, thank you.', note:'不用了，谢谢', badge:'太冷淡', kind:'trap', ok:false,
        why:'你明明想玩，这么回就把同学推开了。' },
      { text:'Sorry.', note:'对不起', badge:'答偏了', kind:'stiff', ok:false,
        why:'这不是道歉的场合，是约你一起玩。' }
    ],
    explain:"💡 别人约你 Let's play!，想去就说 OK! / Sure! / Good idea!；实在不想才说 No, thank you.",
    takeaway:"Let's play! → OK! Let's go!"
  },
  {
    id:'c-36', pack:'school', level:2, type:'listening',
    scene:'🎒 校园小对话',
    emoji:'🚸',
    situation:'放学要一起走出校门，老师拍拍手对大家说：',
    quote:'Line up, please.',
    note:'同学们一个跟一个站成一队。',
    ask:'老师让大家做什么？',
    options:[
      { text:'排好队', note:'line up = 排队', badge:'排队', kind:'stiff', ok:true,
        why:'Line up 就是一个跟一个排成一队。' },
      { text:'坐下', note:'那是 sit down', badge:'坐下', kind:'stiff', ok:false,
        why:'坐下是 sit down，排队是要站着排。' },
      { text:'安静', note:'那是 be quiet', badge:'安静', kind:'stiff', ok:false,
        why:'安静是 Be quiet，这句是让你们排队。' }
    ],
    explain:'💡 集体活动常听：Line up.（排队）、Come here.（过来）、Follow me.（跟我走）。',
    takeaway:'Line up, please. = 排好队。'
  }

  ]);

  /* ---------- 🏫 课堂小对话（加餐 3） ---------- */
  EN.add('starter3', 'class', [

  {
    id:'c-37', pack:'class', level:3, type:'phrase',
    scene:'🏫 课堂小对话',
    emoji:'📏',
    situation:'同桌想借尺子，问你有没有，可你今天没带。',
    quote:'Do you have a ruler?',
    note:'你笔袋里没有尺子。',
    ask:'该怎么回答？',
    options:[
      { text:"No, I don't.", note:'用 don’t 回 Do', badge:'地道', kind:'native', ok:true,
        why:"Do you…? 的否定短答是 No, I don't。" },
      { text:"No, I'm not.", note:'助动词用错了', badge:'不配对', kind:'stiff', ok:false,
        why:"I'm not 用来回答 Are you…?，这句是 Do 开头。" },
      { text:"No, I don't have.", note:'话没说完', badge:'啰嗦', kind:'stiff', ok:false,
        why:"短答说到 No, I don't 就够了，have 后面本来要跟东西。" }
    ],
    explain:"💡 Do you…? 的一对短答：Yes, I do. / No, I don't。有就 do，没有就 don't。",
    takeaway:"Do you…? → No, I don't."
  },
  {
    id:'c-38', pack:'class', level:2, type:'listening',
    scene:'🏫 课堂小对话',
    emoji:'📖',
    situation:'上课了，外教翻开课本，对全班说：',
    quote:'Turn to page ten.',
    note:'同学们哗啦啦地翻起书来。',
    ask:'她让大家做什么？',
    options:[
      { text:'翻到第十页', note:'page ten = 第十页', badge:'翻页', kind:'stiff', ok:true,
        why:'Turn to page ten 就是把书翻到第 10 页。' },
      { text:'把书合上', note:'那是 close your book', badge:'合书', kind:'stiff', ok:false,
        why:'合上书是 close your book，这句是让你翻到某一页。' },
      { text:'读第一页', note:'那是 read page one', badge:'读页', kind:'stiff', ok:false,
        why:'她说的是 page ten（第十页），不是 page one。' }
    ],
    explain:'💡 Turn to page + 数字 = 翻到第几页：Turn to page ten.（翻到第十页）。',
    takeaway:'Turn to page ten. = 翻到第十页。'
  },
  {
    id:'c-39', pack:'class', level:3, type:'phrase',
    scene:'🏫 课堂小对话',
    emoji:'✏️',
    situation:'地上捡到一支铅笔，外教举起来问是谁的，那正是你的。',
    quote:"Whose pencil is this?",
    note:'那支铅笔是你掉的。',
    ask:'该怎么回答？',
    options:[
      { text:"It's mine.", note:'我的', badge:'地道', kind:'native', ok:true,
        why:"东西是自己的，用 mine（我的）来回答，不用再说一遍 pencil。" },
      { text:"It's my.", note:'my 后面得跟东西', badge:'语法错', kind:'stiff', ok:false,
        why:"my 后面必须跟名词：It's my pencil.；单独用要说 mine。" },
      { text:"It's me.", note:'me 是“我”不是“我的”', badge:'词用错', kind:'trap', ok:false,
        why:"me 是“我”，“我的”东西要用 mine。" }
    ],
    explain:"💡 my 后面要跟东西：my pencil；单独说“我的”用 mine：It's mine. = It's my pencil.",
    takeaway:"Whose …? → It's mine."
  },
  {
    id:'c-40', pack:'class', level:1, type:'listening',
    scene:'🏫 课堂小对话',
    emoji:'🧽',
    situation:'下课了，黑板上写满了字，外教递给值日生一块板擦说：',
    quote:'Clean the blackboard, please.',
    note:'黑板得擦干净，好上下一节课。',
    ask:'她让值日生做什么？',
    options:[
      { text:'把黑板擦干净', note:'clean = 弄干净', badge:'擦黑板', kind:'stiff', ok:true,
        why:'clean the blackboard 就是把黑板擦干净。' },
      { text:'看黑板', note:'那是 look at the blackboard', badge:'看黑板', kind:'stiff', ok:false,
        why:'看黑板是 Look at the blackboard，这句是让你擦。' },
      { text:'在黑板上写字', note:'那是 write on the blackboard', badge:'写字', kind:'stiff', ok:false,
        why:'写字是 write，clean 是擦干净。' }
    ],
    explain:'💡 clean 是“弄干净”：clean the blackboard（擦黑板）、clean your desk（擦桌子）、clean your room（打扫房间）。',
    takeaway:'Clean the blackboard. = 把黑板擦干净。'
  }

  ]);

  /* ---------- 🏠 家里小对话（加餐 3） ---------- */
  EN.add('starter3', 'home', [

  {
    id:'c-41', pack:'home', level:3, type:'phrase',
    scene:'🏠 家里小对话',
    emoji:'👦',
    situation:'同学看着你的全家福，指着旁边一个大男孩问你：',
    quote:'Is he your brother?',
    note:'那正是你哥哥。',
    ask:'该怎么短答？',
    options:[
      { text:'Yes, he is.', note:'用 is 回 Is', badge:'地道', kind:'native', ok:true,
        why:'Is he…? 开头，用 Yes, he is. 来短答。' },
      { text:'Yes, he does.', note:'助动词用错了', badge:'不配对', kind:'stiff', ok:false,
        why:'does 是回答 Does he…? 的，这句是 Is 开头。' },
      { text:'Yes, he do.', note:'助动词用错了', badge:'不配对', kind:'stiff', ok:false,
        why:'he 也不能配 do，Is 问就用 is 答。' }
    ],
    explain:'💡 配对短答换成“他”：Is he…? → Yes, he is.；Does he…? → Yes, he does.',
    takeaway:'Is he…? → Yes, he is.'
  },
  {
    id:'c-42', pack:'home', level:2, type:'phrase',
    scene:'🏠 家里小对话',
    emoji:'🍚',
    situation:'阿姨做的菜太好吃了，你一碗饭很快吃光，还想再来一碗。',
    quote:'',
    note:'你的碗已经空了。',
    ask:'该怎么开口最有礼貌？',
    options:[
      { text:'Can I have some more, please?', note:'我能再来一点吗', badge:'地道', kind:'native', ok:true,
        why:'还想要就说 Can I have some more, please?，客气又清楚。' },
      { text:'More!', note:'还要！', badge:'太冲', kind:'trap', ok:false,
        why:'只喊一个 More! 像在命令，很不礼貌。' },
      { text:'I want more.', note:'我要更多', badge:'生硬', kind:'stiff', ok:false,
        why:'能听懂，但 I want 的语气比较直。' }
    ],
    explain:"💡 还想要一点用 Can I have some more, please?；够了就说 No more, thank you. I'm full.",
    takeaway:'还想要 → Can I have some more, please?'
  },
  {
    id:'c-43', pack:'home', level:2, type:'listening',
    scene:'🏠 家里小对话',
    emoji:'🛁',
    situation:'玩了一天，晚上阿姨放好了热水，对你说：',
    quote:"It's time for a bath.",
    note:'浴缸里的水正冒着热气。',
    ask:'她的意思是？',
    options:[
      { text:'该洗澡了', note:'bath = 洗澡', badge:'洗澡', kind:'stiff', ok:true,
        why:"It's time for a bath 就是该去洗澡了。" },
      { text:'该睡觉了', note:'那是 time for bed', badge:'睡觉', kind:'stiff', ok:false,
        why:'睡觉是 time for bed，这句说的是洗澡。' },
      { text:'该吃饭了', note:'那是 time for dinner', badge:'吃饭', kind:'stiff', ok:false,
        why:'吃饭是 time for dinner，这句是洗澡。' }
    ],
    explain:"💡 It's time for + 事情 = 该做某事了：time for a bath（洗澡）、time for bed（睡觉）、time for school（上学）。",
    takeaway:"It's time for a bath. = 该洗澡了。"
  },
  {
    id:'c-44', pack:'home', level:2, type:'phrase',
    scene:'🏠 家里小对话',
    emoji:'📺',
    situation:'作业写完了，你想看一会儿动画片，得先问问阿姨。',
    quote:'',
    note:'电视遥控器就在旁边。',
    ask:'该怎么问最有礼貌？',
    options:[
      { text:'Can I watch TV, please?', note:'我可以看电视吗', badge:'地道', kind:'native', ok:true,
        why:'想做某事先征得同意：Can I watch TV, please?' },
      { text:'I watch TV.', note:'我看电视', badge:'不通顺', kind:'stiff', ok:false,
        why:'少了 Can I，像是自说自话，也没在问。' },
      { text:'Open the TV!', note:'把电视打开！', badge:'词用错', kind:'trap', ok:false,
        why:'开电视是 turn on the TV，不是 open；这样说也太冲。' }
    ],
    explain:'💡 请求许可的万能句：Can I + 做的事 + , please?：Can I watch TV / play games / go out, please?',
    takeaway:'请求许可 → Can I watch TV, please?'
  }

  ]);

  /* ---------- 🎒 校园小对话（加餐 3） ---------- */
  EN.add('starter3', 'school', [

  {
    id:'c-45', pack:'school', level:2, type:'phrase',
    scene:'🎒 校园小对话',
    emoji:'🤝',
    situation:'你的好朋友带来一个新同学，向你介绍说：',
    quote:'This is Tom.',
    note:'新同学朝你笑了笑。',
    ask:'你该怎么回？',
    options:[
      { text:'Hi, Tom. Nice to meet you.', note:'你好，很高兴认识你', badge:'地道', kind:'native', ok:true,
        why:'被介绍认识新朋友，先问好再说 Nice to meet you.。' },
      { text:'Bye, Tom.', note:'再见，Tom', badge:'说反了', kind:'stiff', ok:false,
        why:'才刚认识就说再见就太奇怪了。' },
      { text:'Who is Tom?', note:'Tom 是谁', badge:'答偏了', kind:'trap', ok:false,
        why:'朋友已经告诉你他是 Tom 了，不用再问。' }
    ],
    explain:'💡 别人介绍 This is Tom.，你回 Hi, Tom. Nice to meet you.，对方会说 Nice to meet you, too.',
    takeaway:'This is Tom. → Nice to meet you.'
  },
  {
    id:'c-46', pack:'school', level:3, type:'phrase',
    scene:'🎒 校园小对话',
    emoji:'🕘',
    situation:'快上课了，同学没戴表，转头问你几点了。',
    quote:'What time is it?',
    note:'墙上的钟指着九点整。',
    ask:'该怎么回答？',
    options:[
      { text:"It's nine o'clock.", note:'九点整', badge:'地道', kind:'native', ok:true,
        why:"问几点用 It's + 时间来回答，整点后面加 o'clock。" },
      { text:"I'm nine.", note:'那是回答年龄的', badge:'答偏了', kind:'trap', ok:false,
        why:"I'm nine 是“我九岁”，问时间要用 It's。" },
      { text:"It's Monday.", note:'那是回答星期几的', badge:'答偏了', kind:'stiff', ok:false,
        why:"It's Monday 是回答 What day is it? 的。" }
    ],
    explain:"💡 问时间 What time is it? → It's nine (o'clock)。别跟 How old are you?（几岁）搞混。",
    takeaway:"What time is it? → It's nine o'clock."
  },
  {
    id:'c-47', pack:'school', level:3, type:'phrase',
    scene:'🎒 校园小对话',
    emoji:'📅',
    situation:'外教想考考大家今天星期几，指着日历问：',
    quote:'What day is it today?',
    note:'今天是星期一。',
    ask:'该怎么回答？',
    options:[
      { text:"It's Monday.", note:'星期一', badge:'地道', kind:'native', ok:true,
        why:"问星期几用 It's + 星期来回答，Monday 是星期一。" },
      { text:"It's nine.", note:'那是回答时间的', badge:'答偏了', kind:'stiff', ok:false,
        why:"It's nine 是回答 What time is it? 的。" },
      { text:"It's sunny.", note:'那是回答天气的', badge:'答偏了', kind:'stiff', ok:false,
        why:"It's sunny 是回答 How's the weather? 的。" }
    ],
    explain:"💡 一周七天：Monday、Tuesday、Wednesday、Thursday、Friday、Saturday、Sunday。问哪天用 What day…?",
    takeaway:"What day is it? → It's Monday."
  },
  {
    id:'c-48', pack:'school', level:3, type:'phrase',
    scene:'🎒 校园小对话',
    emoji:'☀️',
    situation:'课间外教望着窗外的大太阳，问大家今天天气怎么样。',
    quote:"How's the weather?",
    note:'外面阳光灿烂，一朵云都没有。',
    ask:'该怎么回答？',
    options:[
      { text:"It's sunny.", note:'晴天', badge:'地道', kind:'native', ok:true,
        why:"问天气用 It's + 天气词，sunny 是晴朗。" },
      { text:"It's Monday.", note:'那是回答星期的', badge:'答偏了', kind:'stiff', ok:false,
        why:"It's Monday 是回答 What day is it? 的。" },
      { text:"I'm fine.", note:'那是回答心情的', badge:'答偏了', kind:'trap', ok:false,
        why:"I'm fine 是回答 How are you? 的，天气要用 It's。" }
    ],
    explain:"💡 问天气 How's the weather? → It's sunny / rainy / cloudy / windy.（晴 / 雨 / 阴 / 风）。",
    takeaway:"How's the weather? → It's sunny."
  }

  ]);

  /* ---------- 🏫 课堂小对话（加餐 4） ---------- */
  EN.add('starter3', 'class', [

  {
    id:'c-49', pack:'class', level:3, type:'phrase',
    scene:'🏫 课堂小对话',
    emoji:'🪑',
    situation:'外教指着教室前排的几把椅子，问大家一共有几把：',
    quote:'How many chairs are there?',
    note:'前排摆着四把椅子。',
    ask:'该怎么回答？',
    options:[
      { text:'There are four.', note:'有几个用 there are', badge:'地道', kind:'native', ok:true, why:'问某地有几个，用 There are + 数字来回答。' },
      { text:"It's four.", note:'数量不用 it is', badge:'句型错', kind:'stiff', ok:false, why:"It's four 更像回答时间；说“有四把”要用 There are four." },
      { text:'Have four.', note:'漏了主语', badge:'不通顺', kind:'stiff', ok:false, why:'不能光说 Have four，要用 There are four.' }
    ],
    explain:"💡 说某个地方“有”几个东西，用 There is（一个）/ There are（好几个）：There are four chairs.",
    takeaway:'How many … are there? → There are four.'
  },
  {
    id:'c-50', pack:'class', level:3, type:'phrase',
    scene:'🏫 课堂小对话',
    emoji:'📚',
    situation:'讲台上放着几本书，外教举起来问是谁的，那几本都是你的。',
    quote:'Whose books are these?',
    note:'好几本都是你的。',
    ask:'该怎么回答？',
    options:[
      { text:"They're mine.", note:'好几本都是我的', badge:'地道', kind:'native', ok:true, why:"不止一本、都是自己的，用 They're mine.。" },
      { text:"It's mine.", note:'好几本说成了一本', badge:'单复数错', kind:'stiff', ok:false, why:"书不止一本，要用 They're，不是 It's。" },
      { text:"They're my.", note:'my 后面得跟东西', badge:'语法错', kind:'stiff', ok:false, why:"单独说“我的”要用 mine：They're mine." }
    ],
    explain:"💡 一本：It's mine.；好几本：They're mine.。单独说“我的”永远用 mine。",
    takeaway:"Whose … are these? → They're mine."
  },
  {
    id:'c-51', pack:'class', level:2, type:'listening',
    scene:'🏫 课堂小对话',
    emoji:'✏️',
    situation:'要写生字了，外教对大家说：',
    quote:'Take out your pencil.',
    note:'同学们都从笔袋里掏出铅笔。',
    ask:'她让大家做什么？',
    options:[
      { text:'把铅笔拿出来', note:'take out = 拿出', badge:'拿出', kind:'stiff', ok:true, why:'Take out your pencil 就是把铅笔从笔袋里拿出来。' },
      { text:'把铅笔收起来', note:'那是 put away', badge:'收起', kind:'stiff', ok:false, why:'收起来是 put away，和 take out 正好相反。' },
      { text:'把铅笔借出去', note:'那是 lend it out', badge:'借出', kind:'stiff', ok:false, why:'借出去是 lend，take out 是自己拿出来。' }
    ],
    explain:'💡 一对反义动作：take out（拿出来）↔ put away（收起来）。',
    takeaway:'Take out your pencil. = 把铅笔拿出来。'
  },
  {
    id:'c-52', pack:'class', level:2, type:'listening',
    scene:'🏫 课堂小对话',
    emoji:'📕',
    situation:'要下课了，外教看着摊了一桌的书说：',
    quote:'Put away your books.',
    note:'同学们把书一本本收进书包。',
    ask:'她让大家做什么？',
    options:[
      { text:'把书收起来', note:'put away = 收好', badge:'收起', kind:'stiff', ok:true, why:'Put away your books 就是把书收好、放回去。' },
      { text:'把书拿出来', note:'那是 take out', badge:'拿出', kind:'stiff', ok:false, why:'拿出来是 take out，和 put away 正好相反。' },
      { text:'把书翻开', note:'那是 open your book', badge:'翻开', kind:'stiff', ok:false, why:'翻开是 open，这句是让你收起来。' }
    ],
    explain:'💡 课桌整理：用 take out（拿出来），用完再 put away（收起来）。',
    takeaway:'Put away your books. = 把书收起来。'
  }

  ]);

  /* ---------- 🏠 家里小对话（加餐 4） ---------- */
  EN.add('starter3', 'home', [

  {
    id:'c-53', pack:'home', level:3, type:'phrase',
    scene:'🏠 家里小对话',
    emoji:'🍳',
    situation:'早上你闻到香味，跑进厨房问阿姨早饭吃什么。',
    quote:"What's for breakfast?",
    note:'锅里正煎着鸡蛋。',
    ask:'阿姨可能怎么回答？',
    options:[
      { text:'Eggs and milk.', note:'鸡蛋和牛奶', badge:'地道', kind:'native', ok:true, why:'问吃什么，就报食物的名字：Eggs and milk.' },
      { text:"It's Monday.", note:'那是回答星期的', badge:'答偏了', kind:'stiff', ok:false, why:'那是回答 What day is it? 的。' },
      { text:"I'm hungry.", note:'答成了“我饿了”', badge:'答偏了', kind:'trap', ok:false, why:'问的是吃什么，不是饿不饿。' }
    ],
    explain:"💡 What's for breakfast / lunch / dinner?（早/午/晚饭吃什么）→ 直接报食物名字。",
    takeaway:"What's for breakfast? → Eggs and milk."
  },
  {
    id:'c-54', pack:'home', level:2, type:'listening',
    scene:'🏠 家里小对话',
    emoji:'🧥',
    situation:'出门前外面很冷，阿姨拿起你的外套递过来说：',
    quote:'Put on your coat.',
    note:'她怕你在外面冻着。',
    ask:'她让你做什么？',
    options:[
      { text:'把外套穿上', note:'put on = 穿上', badge:'穿上', kind:'stiff', ok:true, why:'Put on your coat 就是把外套穿到身上。' },
      { text:'把外套脱下', note:'那是 take off', badge:'脱下', kind:'stiff', ok:false, why:'脱下是 take off，和 put on 正好相反。' },
      { text:'把外套挂起来', note:'那是 hang it up', badge:'挂起', kind:'stiff', ok:false, why:'挂起来是 hang up，这句是让你穿上。' }
    ],
    explain:'💡 一对反义动作：put on（穿上）↔ take off（脱下）。穿衣穿鞋戴帽都能用。',
    takeaway:'Put on your coat. = 把外套穿上。'
  },
  {
    id:'c-55', pack:'home', level:2, type:'listening',
    scene:'🏠 家里小对话',
    emoji:'👟',
    situation:'刚进家门，阿姨指了指玄关的拖鞋对你说：',
    quote:'Take off your shoes.',
    note:'屋里的地板刚擦得干干净净。',
    ask:'她让你做什么？',
    options:[
      { text:'把鞋脱下来', note:'take off = 脱下', badge:'脱鞋', kind:'stiff', ok:true, why:'Take off your shoes 就是把鞋脱掉，换上拖鞋。' },
      { text:'把鞋穿上', note:'那是 put on', badge:'穿上', kind:'stiff', ok:false, why:'穿上是 put on，和 take off 正好相反。' },
      { text:'把鞋系好', note:'那是 tie your shoes', badge:'系鞋带', kind:'stiff', ok:false, why:'系鞋带是 tie，这句是让你脱鞋。' }
    ],
    explain:'💡 进门脱鞋 take off your shoes，出门穿鞋 put on your shoes。一脱一穿记一对。',
    takeaway:'Take off your shoes. = 把鞋脱下来。'
  },
  {
    id:'c-56', pack:'home', level:1, type:'listening',
    scene:'🏠 家里小对话',
    emoji:'🛌',
    situation:'已经很晚了，阿姨关掉电视，摸摸你的头说：',
    quote:'Go to bed now.',
    note:'时钟指向了晚上九点。',
    ask:'她让你做什么？',
    options:[
      { text:'去睡觉', note:'go to bed = 上床睡觉', badge:'睡觉', kind:'stiff', ok:true, why:'Go to bed 就是上床睡觉去。' },
      { text:'起床', note:'那是 get up', badge:'起床', kind:'stiff', ok:false, why:'起床是 get up，和睡觉正好相反。' },
      { text:'去洗澡', note:'那是 take a bath', badge:'洗澡', kind:'stiff', ok:false, why:'洗澡是 take a bath，这句是让你去睡。' }
    ],
    explain:'💡 一睡一起记一对：go to bed（去睡觉）↔ get up（起床）。',
    takeaway:'Go to bed now. = 现在去睡觉。'
  }

  ]);

  /* ---------- 🎒 校园小对话（加餐 4） ---------- */
  EN.add('starter3', 'school', [

  {
    id:'c-57', pack:'school', level:2, type:'listening',
    scene:'🎒 校园小对话',
    emoji:'🚸',
    situation:'走廊里你跑得飞快，老师皱起眉头喊住你：',
    quote:"Don't run!",
    note:'走廊里跑容易撞到人。',
    ask:'老师让你做什么？',
    options:[
      { text:'别跑', note:"Don't + 动词 = 别做", badge:'别跑', kind:'stiff', ok:true, why:"Don't run! 就是叫你别跑，慢点走。" },
      { text:'快跑', note:'意思正好反了', badge:'反了', kind:'trap', ok:false, why:"Don't 是“别”，加在前面就成了“别跑”。" },
      { text:'快点儿', note:'那是 Hurry up', badge:'快点', kind:'stiff', ok:false, why:'催你快是 Hurry up!，这句是不让你跑。' }
    ],
    explain:"💡 Don't + 动词 = 别做某事：Don't run!（别跑）、Don't talk!（别说话）、Don't worry!（别担心）。",
    takeaway:"Don't run! = 别跑！"
  },
  {
    id:'c-58', pack:'school', level:2, type:'phrase',
    scene:'🎒 校园小对话',
    emoji:'🤝',
    situation:'几个同学在玩游戏，你也很想加入。',
    quote:'',
    note:'你走过去，想问问能不能一起玩。',
    ask:'该怎么问最有礼貌？',
    options:[
      { text:'Can I play with you?', note:'我能和你们一起玩吗', badge:'地道', kind:'native', ok:true, why:'想加入用 Can I play with you?，客气又清楚。' },
      { text:'I play too!', note:'我也玩！', badge:'太冲', kind:'trap', ok:false, why:'直接挤进去喊“我也玩”，不太礼貌。' },
      { text:'Play with me!', note:'跟我玩！', badge:'像命令', kind:'stiff', ok:false, why:'这是命令的口气，最好先问一句 Can I…?' }
    ],
    explain:'💡 想加入用 Can I play with you?；对方同意就回 Sure! / Of course! / Come on!',
    takeaway:'想加入 → Can I play with you?'
  },
  {
    id:'c-59', pack:'school', level:3, type:'word',
    scene:'🎒 校园小对话',
    emoji:'🚪',
    situation:'体育课要用球，同学问你球在哪儿。你看见球滚到门后面去了。',
    quote:"Where's the ball?",
    note:'球正好藏在门的后面。',
    ask:'该怎么回答？',
    options:[
      { text:"It's behind the door.", note:'在门后面', badge:'behind', kind:'stiff', ok:true, why:'behind 是“在……后面”，球滚到门背后就用它。' },
      { text:"It's on the door.", note:'在门上面', badge:'on', kind:'stiff', ok:false, why:'on 是“在……上面”，球又不能贴在门上。' },
      { text:"It's under the door.", note:'在门下面', badge:'under', kind:'stiff', ok:false, why:'under 是“在……下面”，门缝底下可藏不下一个球。' }
    ],
    explain:"💡 方位词再添一个：on 上面、in 里面、under 下面、behind 后面。behind the door = 门后面。",
    takeaway:"Where's …? → It's behind the door."
  },
  {
    id:'c-60', pack:'school', level:3, type:'phrase',
    scene:'🎒 校园小对话',
    emoji:'🍎',
    situation:'分享水果时，同学好奇你带了几个苹果，问你：',
    quote:'How many apples do you have?',
    note:'你书包里装了三个苹果。',
    ask:'该怎么回答？',
    options:[
      { text:'I have three.', note:'我有三个', badge:'地道', kind:'native', ok:true, why:'问你有几个，用 I have + 数字来回答。' },
      { text:'There are three.', note:'答偏成“那儿有三个”', badge:'不对应', kind:'stiff', ok:false, why:'他问的是“你有”几个，要用 I have，不是 There are。' },
      { text:"It's three.", note:'数量不这么说', badge:'句型错', kind:'stiff', ok:false, why:"It's three 更像说时间；说“我有三个”要用 I have three." }
    ],
    explain:'💡 How many … do you have?（你有几个）→ I have + 数字：I have three (apples).',
    takeaway:'How many … do you have? → I have three.'
  }

  ]);

  /* ---------- 🏫 课堂小对话（加餐 5） ---------- */
  EN.add('starter3', 'class', [

  { id:'c-61', pack:'class', level:3, type:'phrase', scene:'🏫 课堂小对话', emoji:'📖',
    situation:'自习课上外教走过来，看见你正低头看书，问你：', quote:'What are you doing?',
    note:'你正在读一本英语书。', ask:'该怎么回答？',
    options:[
      { text:"I'm reading.", note:'正在读书', badge:'地道', kind:'native', ok:true, why:"正在做的事用 I'm + 动词-ing：I'm reading（正在读）。" },
      { text:'I read.', note:'少了正在进行的样子', badge:'时态不对', kind:'stiff', ok:false, why:"I read 是“我平时读书”；此刻正在读要用 I'm reading." },
      { text:"I'm read.", note:'动词忘了加 -ing', badge:'语法错', kind:'stiff', ok:false, why:"be 后面的动词要加 -ing：I'm reading." }
    ],
    explain:"💡 问此刻在做什么 What are you doing? → I'm + 动词-ing：I'm reading / writing / eating.",
    takeaway:"What are you doing? → I'm reading." },

  { id:'c-62', pack:'class', level:3, type:'phrase', scene:'🏫 课堂小对话', emoji:'🖊️',
    situation:'外教捡到一支笔，举起来问是不是你的，可那支不是你的。', quote:'Is this your pen?',
    note:'你的笔好好地在笔袋里。', ask:'该怎么短答？',
    options:[
      { text:"No, it isn't.", note:'用 isn’t 回 Is', badge:'地道', kind:'native', ok:true, why:"Is this…? 的否定短答是 No, it isn't.（it is not）。" },
      { text:"No, it doesn't.", note:'助动词用错了', badge:'不配对', kind:'stiff', ok:false, why:"doesn't 是回答 Does…? 的，这句是 Is 开头。" },
      { text:'No, not mine.', note:'话没说完', badge:'不完整', kind:'stiff', ok:false, why:"短答要说 No, it isn't.，才是完整的一句。" }
    ],
    explain:"💡 Is this…? 的一对短答：Yes, it is. / No, it isn't.。Is 问就用 is 答。",
    takeaway:"Is this…? → No, it isn't." },

  { id:'c-63', pack:'class', level:2, type:'listening', scene:'🏫 课堂小对话', emoji:'🗣️',
    situation:'你脱口说了个中文词，外教笑着指指自己的嘴说：', quote:'Say it in English.',
    note:'她想让你用英语再说一遍。', ask:'她让你做什么？',
    options:[
      { text:'用英语说', note:'in English = 用英语', badge:'用英语', kind:'stiff', ok:true, why:'Say it in English 就是用英语把它说出来。' },
      { text:'大声说出来', note:'那是 say it loudly', badge:'大声说', kind:'stiff', ok:false, why:'大声说是 say it loudly，这句是让你用英语说。' },
      { text:'跟着我说', note:'那是 say after me', badge:'跟着说', kind:'stiff', ok:false, why:'跟着说是 say after me，这句是让你自己用英语说。' }
    ],
    explain:'💡 in + 语言 = 用某种语言：in English（用英语）、in Chinese（用中文）。',
    takeaway:'Say it in English. = 用英语说。' },

  { id:'c-64', pack:'class', level:1, type:'phrase', scene:'🏫 课堂小对话', emoji:'🙌',
    situation:'你把生词全念对了，外教冲你竖起大拇指说：', quote:'Good job!',
    note:'她在表扬你做得好。', ask:'你该怎么回？',
    options:[
      { text:'Thank you!', note:'谢谢', badge:'地道', kind:'native', ok:true, why:'被老师表扬，大方地说声谢谢就好。' },
      { text:'Good job!', note:'干得好', badge:'反了', kind:'trap', ok:false, why:'是老师在夸你，别把这句还回去。' },
      { text:'Sorry.', note:'对不起', badge:'用错了', kind:'stiff', ok:false, why:'被表扬是好事，用不着道歉。' }
    ],
    explain:'💡 老师夸你 Good job! / Well done! / Great!，你都回一句 Thank you! 就好。',
    takeaway:'Good job! → Thank you!' }

  ]);

  /* ---------- 🏠 家里小对话（加餐 5） ---------- */
  EN.add('starter3', 'home', [

  { id:'c-65', pack:'home', level:3, type:'phrase', scene:'🏠 家里小对话', emoji:'👧',
    situation:'同学看着你的全家福，指着一个扎马尾的女孩问你：', quote:'Is she your sister?',
    note:'那正是你妹妹。', ask:'该怎么短答？',
    options:[
      { text:'Yes, she is.', note:'用 is 回 Is', badge:'地道', kind:'native', ok:true, why:'Is she…? 开头，用 Yes, she is. 来短答。' },
      { text:'Yes, she does.', note:'助动词用错了', badge:'不配对', kind:'stiff', ok:false, why:'does 是回答 Does she…? 的，这句是 Is 开头。' },
      { text:'Yes, she do.', note:'助动词用错了', badge:'不配对', kind:'stiff', ok:false, why:'she 不能配 do，Is 问就用 is 答。' }
    ],
    explain:'💡 配对短答换成“她”：Is she…? → Yes, she is.；换成“他”：Is he…? → Yes, he is.',
    takeaway:'Is she…? → Yes, she is.' },

  { id:'c-66', pack:'home', level:3, type:'phrase', scene:'🏠 家里小对话', emoji:'🍽️',
    situation:'你放下碗筷，阿姨想知道你吃饱没有，问你：', quote:'Are you full?',
    note:'你已经吃得饱饱的了。', ask:'该怎么回答？',
    options:[
      { text:'Yes, I am.', note:'用 am 回 Are', badge:'地道', kind:'native', ok:true, why:"Are you full? 用 Yes, I am. 短答，表示吃饱了。" },
      { text:'Yes, I do.', note:'助动词用错了', badge:'不配对', kind:'stiff', ok:false, why:'do 是回答 Do you…? 的，这句是 Are 开头。' },
      { text:"I'm hungry.", note:'意思正好反了', badge:'反了', kind:'trap', ok:false, why:'hungry 是“饿”，full 才是“饱”，别说反。' }
    ],
    explain:"💡 full 是“饱”，hungry 是“饿”。Are you full? → Yes, I am. / No, I'm still hungry.",
    takeaway:'Are you full? → Yes, I am.' },

  { id:'c-67', pack:'home', level:3, type:'word', scene:'🏠 家里小对话', emoji:'🧸',
    situation:'玩具散了一地，阿姨问你玩具都放哪儿了。你把它们收进了箱子。', quote:'Where are the toys?',
    note:'玩具全都装在箱子里面。', ask:'该怎么回答？',
    options:[
      { text:"They're in the box.", note:'在箱子里', badge:'in', kind:'stiff', ok:true, why:"toys 不止一个用 They're；in 是“在……里面”。" },
      { text:"It's in the box.", note:'好几个说成了一个', badge:'单复数错', kind:'stiff', ok:false, why:"玩具不止一个，要用 They're，不是 It's。" },
      { text:"They're on the box.", note:'位置词用错了', badge:'on/in 错', kind:'stiff', ok:false, why:'on 是箱子上面，收进箱子里要用 in。' }
    ],
    explain:"💡 好几个东西用 They're；装在里面用 in：They're in the box.（都在箱子里）。",
    takeaway:"Where are …? → They're in the box." },

  { id:'c-68', pack:'home', level:1, type:'listening', scene:'🏠 家里小对话', emoji:'🎒',
    situation:'早饭吃完了，阿姨看看表，帮你背上书包说：', quote:"It's time for school.",
    note:'再不走上学要迟到了。', ask:'她的意思是？',
    options:[
      { text:'该上学了', note:'time for school = 该上学', badge:'上学', kind:'stiff', ok:true, why:"It's time for school 就是该去上学了。" },
      { text:'该睡觉了', note:'那是 time for bed', badge:'睡觉', kind:'stiff', ok:false, why:'睡觉是 time for bed，这会儿是上学。' },
      { text:'该吃饭了', note:'那是 time for dinner', badge:'吃饭', kind:'stiff', ok:false, why:'早饭已经吃完了，现在是上学。' }
    ],
    explain:"💡 It's time for + 事情 = 该做某事了：time for school（上学）、time for bed（睡觉）、time for lunch（午饭）。",
    takeaway:"It's time for school. = 该上学了。" }

  ]);

  /* ---------- 🎒 校园小对话（加餐 5） ---------- */
  EN.add('starter3', 'school', [

  { id:'c-69', pack:'school', level:2, type:'phrase', scene:'🎒 校园小对话', emoji:'🗺️',
    situation:'一个新同学找不到图书馆，问你在哪儿。图书馆就在不远的那头。', quote:"Where's the library?",
    note:'图书馆在走廊那一头，看得见。', ask:'该怎么回答？',
    options:[
      { text:"It's over there.", note:'在那边', badge:'地道', kind:'native', ok:true, why:"指着不远处的地方，说 It's over there.（在那边）。" },
      { text:'There is.', note:'话没说完', badge:'不完整', kind:'stiff', ok:false, why:"There is 后面得跟东西，指方向要说 It's over there." },
      { text:"It's there is.", note:'两个说法搅一起了', badge:'语法错', kind:'stiff', ok:false, why:"It's 和 there is 不能叠在一起，选一个：It's over there." }
    ],
    explain:"💡 指远处的地方：It's over there.（在那边）；指近处：It's here. / It's right here.",
    takeaway:"Where's …? → It's over there." },

  { id:'c-70', pack:'school', level:3, type:'phrase', scene:'🎒 校园小对话', emoji:'📚',
    situation:'新同学想多了解你，问你最喜欢哪门课：', quote:"What's your favorite subject?",
    note:'你最喜欢上英语课。', ask:'该怎么回答？',
    options:[
      { text:'I like English.', note:'我喜欢英语', badge:'地道', kind:'native', ok:true, why:'问你最喜欢哪门课，用 I like + 科目来回答。' },
      { text:"I'm English.", note:'把“喜欢”说成了“是”', badge:'差很远', kind:'trap', ok:false, why:"I'm English 是“我是英国人”，喜欢要用 I like。" },
      { text:"It's Monday.", note:'答成了星期', badge:'答偏了', kind:'stiff', ok:false, why:'那是回答 What day is it? 的。' }
    ],
    explain:"💡 favorite 是“最喜欢的”。What's your favorite subject? → I like English. / My favorite subject is English.",
    takeaway:"favorite subject? → I like English." },

  { id:'c-71', pack:'school', level:2, type:'phrase', scene:'🎒 校园小对话', emoji:'🖐️',
    situation:'跳绳比赛就要开始，老师看着你问：', quote:'Are you ready?',
    note:'你准备好了。', ask:'该怎么回答？',
    options:[
      { text:'Yes, I am.', note:'用 am 回 Are', badge:'地道', kind:'native', ok:true, why:"Are you ready? 用 Yes, I am. 短答，表示准备好了。" },
      { text:'Yes, I do.', note:'助动词用错了', badge:'不配对', kind:'stiff', ok:false, why:'do 是回答 Do you…? 的，这句是 Are 开头。' },
      { text:'Ready yes.', note:'词序乱了', badge:'语序错', kind:'stiff', ok:false, why:"要说 Yes, I am. 或 Yes, I'm ready.，别把词打乱。" }
    ],
    explain:'💡 Are you ready?（准备好了吗）→ Yes, I am. / No, not yet.（还没）。老师常喊 Ready? Go!',
    takeaway:'Are you ready? → Yes, I am.' },

  { id:'c-72', pack:'school', level:2, type:'phrase', scene:'🎒 校园小对话', emoji:'🎉',
    situation:'周五放学，外教在门口跟每个同学道别，对你说：', quote:'Have a good weekend!',
    note:'接下来是两天周末。', ask:'你该怎么回？',
    options:[
      { text:'You too!', note:'你也是', badge:'地道', kind:'native', ok:true, why:'别人祝你周末愉快，回一句 You too! 最自然。' },
      { text:'Me too.', note:'我也是', badge:'不地道', kind:'trap', ok:false, why:'这里习惯说 You too.，而不是 Me too.。' },
      { text:'Good morning!', note:'早上好', badge:'答偏了', kind:'stiff', ok:false, why:'这是放学道别，不是早上问好。' }
    ],
    explain:'💡 Have a good weekend!（周末愉快）、Have a nice day!（今天愉快）都回一句 You too!',
    takeaway:'Have a good weekend! → You too!' }

  ]);

})(window.EN);
