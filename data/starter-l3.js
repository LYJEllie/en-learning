/* ============================================================
   🐥 启蒙 L3 · 小对话（36 题 · 课堂 / 家里 / 校园 各 12 题）
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

})(window.EN);
