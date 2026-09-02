/* ============================================================
   🧒 小学生入门 · 👋 打招呼篇（35 题）
   只放数据。字段说明见 data/_core.js，加题直接往数组里追加对象。
   ============================================================ */
(function (EN) {
  "use strict";

  EN.add('kids', 'hello', [

  {
    id:'kh-01', pack:'hello', level:1, type:'listening',
    scene:'👋 早上进教室',
    situation:'早读课刚开始，外教老师走进教室，笑着对全班说了一句：',
    quote:'Good morning!',
    note:'她正看着你，等你回一句。',
    ask:'这时候你应该说？',
    options:[
      { text:'Good morning!', note:'把同一句还回去，最自然', badge:'地道', kind:'native', ok:true,
        why:'打招呼就是"你说什么，我回什么"，早上互道 Good morning 最标准。' },
      { text:'Good night!', note:'这是睡觉前说的', badge:'说反了', kind:'trap', ok:false,
        why:'Good night 是晚上道别、上床睡觉前才说的，早上说会闹笑话。' },
      { text:'I am fine, thank you.', note:'答非所问', badge:'背串了', kind:'stiff', ok:false,
        why:'这句是回答 How are you? 的，老师并没有问你好不好。' }
    ],
    explain:'💡 打招呼三件套：早上 Good morning，中午 Good afternoon，傍晚 Good evening。别人怎么说，你就怎么还回去，这是最不会出错的办法。',
    takeaway:'别人说 Good morning，你也说 Good morning。'
  },
  {
    id:'kh-02', pack:'hello', level:1, type:'phrase',
    scene:'👋 认识新同学',
    situation:'开学第一天，新同桌是个外国小朋友，老师让你们互相认识一下。',
    quote:'',
    note:'他伸出手，正等你先开口。',
    ask:'想说"很高兴认识你"，该说哪句？',
    options:[
      { text:'How old are you?', note:'一上来就问年龄，有点唐突', badge:'太直接', kind:'stiff', ok:false,
        why:'不是不能问，但把它当开场白会让对方愣一下，先打招呼再聊别的。' },
      { text:'Nice to meet you!', note:'第一次见面的万能句', badge:'地道', kind:'native', ok:true,
        why:'初次见面的标准问候，对方通常会回一句 Nice to meet you, too!' },
      { text:'Hello, teacher!', note:'人家不是老师', badge:'叫错了', kind:'trap', ok:false,
        why:'teacher 只用来称呼老师。同学之间直接说 Hi / Hello 加名字就好。' }
    ],
    explain:'💡 第一次见面用 Nice to meet you!（很高兴认识你）；以后再碰到要改成 Nice to see you!（很高兴见到你）。一个 meet 一个 see，别用反。',
    takeaway:'初次见面 Nice to meet you，再次见面 Nice to see you。'
  },
  {
    id:'kh-03', pack:'hello', level:2, type:'listening',
    scene:'👋 放学道别',
    situation:'放学铃响了，外教站在门口跟每个同学挥手，轮到你时她说：',
    quote:'See you tomorrow!',
    note:'你也想说一句"明天见"。',
    ask:'最自然的回答是？',
    options:[
      { text:'Good night!', note:'现在还没到晚上', badge:'说反了', kind:'trap', ok:false,
        why:'Good night 是晚上睡前才说的，下午放学说不合适。' },
      { text:'Nice to meet you!', note:'这是初次见面说的', badge:'背串了', kind:'stiff', ok:false,
        why:'见面句用在了道别上，方向正好反过来。' },
      { text:'See you tomorrow!', note:'原句还回去，最自然', badge:'地道', kind:'native', ok:true,
        why:'道别同样是"你说什么我回什么"，只说 See you! 或 Bye! 也完全可以。' }
    ],
    explain:'💡 See you 就是"回头见"，后面能接不同的时间：See you later（待会儿见）、See you tomorrow（明天见）、See you next week（下周见）。',
    takeaway:'See you tomorrow! → 把原句还回去就对了。'
  },
  {
    id:'kh-04', pack:'hello', level:1, type:'listening',
    scene:'👋 老师问你好',
    situation:'外教走到你桌子旁边，弯下腰笑着问：',
    quote:'How are you?',
    note:'你今天心情不错。',
    ask:'该怎么回答？',
    options:[
      { text:'Fine, thank you. And you?', note:'最稳的标准答法', badge:'地道', kind:'native', ok:true,
        why:'先说自己的状态，再把问题抛回去，一来一回，对话就接上了。' },
      { text:"I'm nine years old.", note:'听成了"你几岁"', badge:'听岔了', kind:'trap', ok:false,
        why:'How are you?（你好吗）和 How old are you?（你几岁）只差一个词，别听混。' },
      { text:'How are you?', note:'原句还回去，这次不行', badge:'不能照抄', kind:'stiff', ok:false,
        why:'Good morning 可以原句还回去，但被问"你好吗"要先回答，再反问才礼貌。' }
    ],
    explain:'💡 How are you? 的回答有好几种：Fine, thank you. / Good, thanks. / I\'m OK.。后面加一句 And you?（你呢），对话才能继续下去。',
    takeaway:'How are you? → 先答状态，再问 And you?'
  },
  {
    id:'kh-05', pack:'hello', level:1, type:'phrase',
    scene:'👋 自我介绍',
    situation:'第一节英语课，外教指着你，问全班同学：',
    quote:"What's your name?",
    note:'她正等你说出自己的名字。',
    ask:'该怎么回答？',
    options:[
      { text:'This is Lily.', note:'这是介绍别人时说的', badge:'用错了', kind:'trap', ok:false,
        why:'This is… 用来把别人介绍给大家，或者打电话时说"我是…"，当面介绍自己不用它。' },
      { text:"My name is Lily. / I'm Lily.", note:'两种都行，后一种更口语', badge:'地道', kind:'native', ok:true,
        why:'My name is… 是标准说法，日常里大家更爱说短的 I\'m Lily.' },
      { text:'I am nine.', note:'答成了年龄', badge:'答偏了', kind:'stiff', ok:false,
        why:'这句是回答 How old are you? 的，老师问的是名字。' }
    ],
    explain:'💡 记住这一组配对：What\'s your name?（你叫什么）→ I\'m Lily.；How old are you?（你几岁）→ I\'m nine.；Where are you from?（你从哪儿来）→ I\'m from China.',
    takeaway:"What's your name? → I'm Lily."
  },
  {
    id:'kh-06', pack:'hello', level:3, type:'listening',
    scene:'👋 店员跟你道别',
    situation:'跟妈妈在国外超市买完东西，收银员把小票递给你，笑着说：',
    quote:'Have a nice day!',
    note:'她在等你回一句。',
    ask:'最自然的回答是？',
    options:[
      { text:'Thanks, you too!', note:'接住祝福，再还回去', badge:'地道', kind:'native', ok:true,
        why:'先道谢，再把同一句祝福送回去，三个词就完成了一次漂亮的对话。' },
      { text:'I have a nice day.', note:'把祝福说成了陈述句', badge:'直译', kind:'stiff', ok:false,
        why:'Have a nice day 是"祝你今天愉快"，不是在陈述你今天过得怎么样。' },
      { text:'OK.', note:'太冷淡了', badge:'冷场', kind:'trap', ok:false,
        why:'别人送你一句祝福，只回一个 OK 会显得不太领情。' }
    ],
    explain:'💡 You too! 是英语里的偷懒神器：别人说 Have a nice day / Have a good weekend / Enjoy your meal，你一律可以回 Thanks, you too!',
    takeaway:'Have a nice day! → Thanks, you too!'
  },
  {
    id:'kh-07', pack:'hello', level:1, type:'phrase',
    scene:'👋 外教问你是哪国人',
    situation:'外教在班里挨个聊天，走到你面前问：',
    quote:'Where are you from?',
    note:'你想说"我来自中国"。',
    ask:'该怎么回答？',
    options:[
      { text:"I'm from China.", note:'from 不能丢', badge:'地道', kind:'native', ok:true,
        why:'from 是"来自"，这是回答国籍、家乡的固定说法。' },
      { text:"I'm China.", note:'漏了 from，句子就散了', badge:'语法错', kind:'stiff', ok:false,
        why:'少了 from 就成了"我是中国"，人不能等于国家。' },
      { text:"I'm from home.", note:'把问题理解成了"你刚从哪儿来"', badge:'理解偏', kind:'trap', ok:false,
        why:'Where are you from? 问的是你来自哪个国家或城市，不是问你刚才在哪儿。' }
    ],
    explain:'💡 这三句常一起出现：What\'s your name? → I\'m Lily.；How old are you? → I\'m nine.；Where are you from? → I\'m from China.。最后一句千万别把 from 丢掉。',
    takeaway:"Where are you from? → I'm from China."
  },
  {
    id:'kh-08', pack:'hello', level:2, type:'phrase',
    scene:'👋 把朋友介绍给妈妈',
    situation:'放学时你带同学回家，妈妈开门看见了你身边的外国小朋友。',
    quote:'',
    note:'你得把他介绍给妈妈。',
    ask:'该怎么说？',
    options:[
      { text:'Mom, this is my friend Tom.', note:'介绍别人的固定说法', badge:'地道', kind:'native', ok:true,
        why:'This is… 就是用来把别人介绍给大家的，介绍完对方会说 Nice to meet you.' },
      { text:'Mom, my friend name is Tom.', note:'少了一个所有格', badge:'语法错', kind:'stiff', ok:false,
        why:'要说 my friend\'s name（我朋友的名字），friend 后面得加 \'s。' },
      { text:'Mom, here is Tom.', note:'像在说"东西在这儿"', badge:'不自然', kind:'trap', ok:false,
        why:'Here is… 一般用来递东西或指位置，用在人身上会很奇怪。' }
    ],
    explain:'💡 介绍别人用 This is…，介绍自己用 I\'m…。注意"我朋友的名字"是 my friend\'s name，那个 \'s 中国小朋友最容易漏。',
    takeaway:'介绍别人 → This is my friend Tom.'
  },
  {
    id:'kh-09', pack:'hello', level:3, type:'phrase',
    scene:'👋 接外国朋友的电话',
    situation:'家里电话响了，你接起来，对面是同学的妈妈，她问：',
    quote:"Hello, who's that?",
    note:'她想知道接电话的是谁。',
    ask:'你要怎么说"我是莉莉"？',
    options:[
      { text:'This is Lily.', note:'电话里说"我是"的固定说法', badge:'地道', kind:'native', ok:true,
        why:'打电话时不用 I am，英语习惯说 This is + 名字，或者 Lily speaking.' },
      { text:'I am Lily.', note:'当面可以，电话里老外不这么说', badge:'场合不对', kind:'stiff', ok:false,
        why:'对方能听懂，但电话里几乎没人这么讲，一开口就听出是外国人。' },
      { text:'My name is calling Lily.', note:'把两种说法拼在了一起', badge:'语法错', kind:'trap', ok:false,
        why:'My name is Lily 和 Lily speaking 是两句话，不能混着用。' }
    ],
    explain:'💡 电话英语有自己的一套：问对方是谁 Who\'s that?；说自己是谁 This is Lily. / Lily speaking.；找人 May I speak to Tom?',
    takeaway:'电话里说"我是" → This is Lily.'
  },
  {
    id:'kh-10', pack:'hello', level:2, type:'culture',
    scene:'👋 走廊碰见老师',
    situation:'早上在走廊碰见英语老师，她姓王（Wang），你想跟她打个招呼。',
    quote:'',
    note:'她也看见你了，笑着停下脚步。',
    ask:'该怎么称呼她？',
    options:[
      { text:'Good morning, teacher!', note:'中国小朋友最常见的说法', badge:'中式', kind:'trap', ok:false,
        why:'teacher 是职业名，不能拿来当称呼，就像英语里不会喊别人"司机""医生"。' },
      { text:'Good morning, Miss Wang!', note:'姓氏前面加称谓', badge:'地道', kind:'native', ok:true,
        why:'英语里称呼老师用 Mr. / Miss / Mrs. / Ms. 加姓氏，这才是正确叫法。' },
      { text:'Good morning, teacher Wang!', note:'把 teacher 当成了姓氏前缀', badge:'半中半英', kind:'stiff', ok:false,
        why:'"王老师"不能直译成 teacher Wang，得换成 Miss Wang 或 Mr. Wang。' }
    ],
    explain:'💡 这是中国学生最经典的一个坑：老师不叫 teacher，要叫 Mr. / Miss / Mrs. + 姓。不知道对方姓什么时，只说 Good morning! 也完全可以。',
    takeaway:'王老师 = Miss Wang，不是 teacher Wang。'
  },
  {
    id:'kh-11', pack:'hello', level:1, type:'listening',
    scene:'👋 校门口的招呼',
    situation:'早上进校门，外国同学远远看见你，挥着手喊了一声：',
    quote:'Morning!',
    note:'他只喊了一个词就跑过来了。',
    ask:'他在说什么？',
    options:[
      { text:'就是 Good morning，省掉了前面那个词', note:'熟人之间的轻松版', badge:'省略', kind:'stiff', ok:true,
        why:'熟人之间常把 Good morning 缩成 Morning!，听起来更随意。' },
      { text:'在问现在是不是早上', note:'当成了问句', badge:'问时间', kind:'stiff', ok:false,
        why:'问时间要说 Is it morning? 或 What time is it?，单蹦一个 Morning! 只是打招呼。' },
      { text:'在催你早点到', note:'和守时没关系', badge:'催你', kind:'stiff', ok:false,
        why:'催人早到会说 Come early.，和这句完全无关。' }
    ],
    explain:'💡 熟人打招呼爱省略：Morning!（＝Good morning）、Afternoon!、Evening!。你也可以同样回一句 Morning!',
    takeaway:'Morning! = Good morning! 的轻松版。'
  },
  {
    id:'kh-12', pack:'hello', level:2, type:'culture',
    scene:'👋 跟外教说再见',
    situation:'下课了，你想跟外教道个别。班里同学习惯挥着手喊 bye-bye。',
    quote:'',
    note:'她正在收课本，笑着看你。',
    ask:'哪种说法最自然？',
    options:[
      { text:'Bye! / See you!', note:'日常最常用', badge:'地道', kind:'native', ok:true,
        why:'又短又自然，同学、老师、朋友之间基本都用它。' },
      { text:'Bye-bye!', note:'主要是哄小宝宝时说的', badge:'偏幼', kind:'stiff', ok:false,
        why:'不算错，但在英语国家更多是大人对小小孩说的，同龄人之间说会显得有点幼。' },
      { text:'Goodbye.', note:'太正式，有点郑重', badge:'太正式', kind:'stiff', ok:false,
        why:'Goodbye 偏正式，日常道别用它会显得生分，像很久见不到了。' }
    ],
    explain:'💡 道别的随意程度：Bye! / See you!（日常）→ Bye-bye!（哄小孩）→ Goodbye.（正式）。跟老师同学说 Bye! 或 See you tomorrow! 最合适。',
    takeaway:'日常道别 → Bye! / See you!'
  },
  {
    id:'kh-13', pack:'hello', level:3, type:'listening',
    scene:'👋 同学突然问了一句',
    situation:'课间你趴在桌上画画，外国同学走过来拍拍你的肩膀：',
    quote:"What's up?",
    note:'他一脸轻松，好像只是随口一问。',
    ask:'他在问什么？',
    options:[
      { text:'最近怎么样、有什么事吗', note:'其实就是一句招呼', badge:'打招呼', kind:'stiff', ok:true,
        why:'What\'s up? 多半只是熟人之间的问候，回一句 Not much. 就行。' },
      { text:'上面有什么东西', note:'把 up 当成了"上面"', badge:'看上面', kind:'stiff', ok:false,
        why:'up 在这里没有方向的意思，整句是固定的口语打招呼。' },
      { text:'你站起来干什么', note:'和起立没关系', badge:'起立', kind:'stiff', ok:false,
        why:'让人起立是 Stand up.，和这句差得远。' }
    ],
    explain:'💡 What\'s up? 听着像问题，其实约等于 Hi。标准回答是 Not much. / Nothing much. / Hey!，然后可以反问一句 You?',
    takeaway:"What's up? ≈ 嗨，最近怎么样。回 Not much. 就行。"
  },
  {
    id:'kh-14', pack:'hello', level:2, type:'culture',
    scene:'👋 外教让你叫她名字',
    situation:'新来的外教做完自我介绍，笑着补了一句：',
    quote:'Please call me Anna.',
    note:'Anna 是她的名字，不是姓。',
    ask:'她的意思是？',
    options:[
      { text:'以后直接叫她 Anna 就好', note:'外教常这么说', badge:'地道', kind:'native', ok:true,
        why:'英语国家的老师常让学生直呼其名，这是拉近距离的方式，照做就好。' },
      { text:'要叫她 Miss Anna', note:'称谓要配姓，不配名', badge:'半中半英', kind:'trap', ok:false,
        why:'Miss / Mr. 后面跟的是姓，不是名，Miss Anna 是中式说法。' },
      { text:'她在问你叫什么名字', note:'方向听反了', badge:'听反了', kind:'stiff', ok:false,
        why:'call me… 是"叫我…"；问你名字要说 What should I call you?' }
    ],
    explain:'💡 老师主动说 Please call me Anna. 就是允许你直呼其名，不用再加 Miss。她要是没说，就还用 Miss / Mr. + 姓。',
    takeaway:'Please call me Anna. = 以后叫我 Anna 就行。'
  },
  {
    id:'kh-15', pack:'hello', level:1, type:'culture',
    scene:'👋 见到朋友的妈妈',
    situation:'你去外国同学家玩，开门的是他妈妈，姓 Smith。',
    quote:'',
    note:'你想像在国内一样喊一声"阿姨"。',
    ask:'该怎么称呼她？',
    options:[
      { text:'Hello, aunt!', note:'aunt 只用来叫亲姑姑、姨妈', badge:'中式', kind:'trap', ok:false,
        why:'英语里 aunt 是亲戚称呼，对同学的妈妈这么叫，对方会愣一下。' },
      { text:'Hello, Mrs. Smith!', note:'称谓加姓，最稳妥', badge:'地道', kind:'native', ok:true,
        why:'对朋友的妈妈用 Mrs. / Ms. + 姓，礼貌又得体。' },
      { text:"Hello, Tom's mother!", note:'像在介绍她的身份', badge:'不自然', kind:'stiff', ok:false,
        why:'能听懂，但当面这么叫很奇怪，就像喊别人"小明他妈"。' }
    ],
    explain:'💡 中文里"阿姨""叔叔"可以随便叫，英语里 aunt / uncle 只留给亲戚。对长辈用 Mr. / Mrs. / Ms. + 姓；不知道姓就说 Hello! 或 Excuse me.',
    takeaway:'同学的妈妈叫 Mrs. Smith，不叫 aunt。'
  }

  ]);

  /* ---------- 👋 打招呼篇（加餐） ---------- */
  EN.add('kids', 'hello', [

  {
    id:'kh-16', pack:'hello', level:2, type:'culture',
    scene:'👋 帮忙转达问候',
    situation:'放学时外国同学要回家了，临走前笑着对你说了一句：',
    quote:'Say hi to your mom for me!',
    note:'他并没有看见你妈妈，你妈妈也不在场。',
    ask:'他的意思是？',
    options:[
      { text:'让你替他向你妈妈问个好', note:'一句托你带的问候', badge:'地道', kind:'native', ok:true,
        why:'Say hi to… for me 就是"替我向…问好"，你回一句 OK, I will! 就好。' },
      { text:'让你现在马上跟妈妈打招呼', note:'你妈妈又不在这儿', badge:'理解偏', kind:'trap', ok:false,
        why:'妈妈根本不在场，他是让你回家后带句话，不是现在。' },
      { text:'在问你妈妈好不好', note:'那要说 How is your mom?', badge:'听岔了', kind:'stiff', ok:false,
        why:'问候近况是 How is your mom?，这句是托你带个好。' }
    ],
    explain:'💡 Say hi to … for me. / Give my best to … 都是"替我问好"。回一句 OK, I will!（好的，我会的）就接住了。',
    takeaway:'Say hi to your mom for me! = 替我向你妈妈问好。'
  },
  {
    id:'kh-17', pack:'hello', level:2, type:'listening',
    scene:'👋 好久没见的朋友',
    situation:'放暑假两个月没见，开学第一天外国同学一见你就张开手臂喊：',
    quote:'Long time no see!',
    note:'这句听起来"不太合语法"，却是地道说法。',
    ask:'他在说什么？',
    options:[
      { text:'好久不见！', note:'老朋友重逢的常用语', badge:'地道', kind:'native', ok:true,
        why:'Long time no see 虽然像蹦单词，却是英语里公认的固定说法，就是"好久不见"。' },
      { text:'这句话说错了，没有意义', note:'它其实是固定短语', badge:'想多了', kind:'stiff', ok:false,
        why:'别看它不像标准句子，这是约定俗成的地道口语，人人都懂。' },
      { text:'在说他很久没看见东西了', note:'不是字面意思', badge:'太字面', kind:'trap', ok:false,
        why:'see 在这儿是"见面"，整句是"我们好久没见面了"。' }
    ],
    explain:'💡 Long time no see! 是最出名的一句"像中式却地道"的英语，重逢时用。可以接 How have you been?（你最近怎么样）。',
    takeaway:'Long time no see! = 好久不见！'
  },
  {
    id:'kh-18', pack:'hello', level:3, type:'culture',
    scene:'👋 擦身而过的问候',
    situation:'课间同学从你身边快步走过，边走边随口抛来一句：',
    quote:'Hey, how are you?',
    note:'他脚步没停，看样子只是打个招呼。',
    ask:'最合适的回应是？',
    options:[
      { text:'Good, you?', note:'轻轻一句就够', badge:'地道', kind:'native', ok:true,
        why:'路过式的 How are you? 只是招呼，回一句 Good, you? 或 Fine, thanks! 就完美了。' },
      { text:'把今天不开心的事一五一十讲给他', note:'他只是随口一问', badge:'会错意', kind:'trap', ok:false,
        why:'这种场合的 How are you? 不是真在问你的近况，长篇大论会让人尴尬。' },
      { text:'不理他，继续走', note:'太冷淡', badge:'冷场', kind:'stiff', ok:false,
        why:'哪怕只回一个 Good! 也比装没听见好，不然显得不友好。' }
    ],
    explain:'💡 英语里的 How are you? 很多时候只是"嗨"的加长版，尤其擦身而过时。轻松回一句、再抛回去就行，不用真汇报心情。',
    takeaway:'路过式 How are you? → Good, you? 就够。'
  },
  {
    id:'kh-19', pack:'hello', level:2, type:'social',
    scene:'👋 没记住对方名字',
    situation:'刚认识的外国同学做过自我介绍，可一转身你就把名字忘了，又得叫他。',
    quote:'',
    note:'总不能一直用"喂"来叫人。',
    ask:'该怎么礼貌地再问一次？',
    options:[
      { text:"Sorry, what's your name again?", note:'加个 again 很自然', badge:'地道', kind:'native', ok:true,
        why:'开头说声 Sorry，句末加 again，等于"不好意思，你名字是……来着"，一点都不失礼。' },
      { text:'Who are you?', note:'像在盘问陌生人', badge:'太冲', kind:'trap', ok:false,
        why:'Who are you? 语气很重，像质问，刚认识的人这么问会很尴尬。' },
      { text:'What is you name?', note:'your 写错了', badge:'语法错', kind:'stiff', ok:false,
        why:'是 your name（你的名字），不是 you name。' }
    ],
    explain:'💡 忘了名字别硬撑，一句 Sorry, what\'s your name again? 最自然。那个 again 是关键，暗示"你之前说过，我一时想不起"。',
    takeaway:"忘了名字 → Sorry, what's your name again?"
  },
  {
    id:'kh-20', pack:'hello', level:2, type:'listening',
    scene:'👋 又见到老朋友',
    situation:'去年一起参加夏令营的外国朋友又来了，一见你就笑着说：',
    quote:'Nice to see you again!',
    note:'你们不是第一次见面了。',
    ask:'最自然的回答是？',
    options:[
      { text:'Nice to see you, too!', note:'重逢用 see', badge:'地道', kind:'native', ok:true,
        why:'老朋友再见面用 see，你加个 too 还回去就对了。' },
      { text:'Nice to meet you!', note:'meet 只留给第一次', badge:'用错了', kind:'trap', ok:false,
        why:'meet 是"初次认识"，你们早认识了，重逢要用 see。' },
      { text:'See you!', note:'那是道别时说的', badge:'说反了', kind:'stiff', ok:false,
        why:'See you! 是"回头见"，这会儿刚见面，不是要走。' }
    ],
    explain:'💡 一对最容易混的：初次认识 Nice to meet you.；再次见面 Nice to see you.。一个 meet 一个 see，方向别搞反。',
    takeaway:'重逢 → Nice to see you, too!'
  }

  ]);

  /* ---------- 👋 打招呼篇（加餐 2） ---------- */
  EN.add('kids', 'hello', [

  {
    id:'kh-21', pack:'hello', level:3, type:'phrase',
    scene:'👋 打电话找同学',
    situation:'你打电话到同学家，接电话的是他爸爸，你想找 Tom。',
    quote:'',
    note:'你得说清楚要找谁。',
    ask:'该怎么说最有礼貌？',
    options:[
      { text:'Hello, may I speak to Tom, please?', note:'电话找人的固定句', badge:'地道', kind:'native', ok:true,
        why:'打电话找人用 May I speak to …, please?，客气又清楚。' },
      { text:'Where is Tom?', note:'像在追问人在哪', badge:'太直接', kind:'stiff', ok:false,
        why:'电话里这么问有点冲，应该说 May I speak to Tom?' },
      { text:'I want Tom.', note:'像在要东西', badge:'不礼貌', kind:'trap', ok:false,
        why:'I want Tom 听起来怪怪的，找人要说 May I speak to Tom?' }
    ],
    explain:'💡 打电话三句：说自己是谁 This is Lily.；找人 May I speak to Tom?；请对方等 Hold on, please.',
    takeaway:'电话找人 → May I speak to Tom, please?'
  },
  {
    id:'kh-22', pack:'hello', level:2, type:'culture',
    scene:'👋 在朋友家玩到要走',
    situation:'在外国同学家玩了一下午，临走时他妈妈笑着对你说：',
    quote:'Thanks for coming!',
    note:'她很高兴你来做客。',
    ask:'你该怎么回最得体？',
    options:[
      { text:'Thanks for having me!', note:'谢谢招待，礼尚往来', badge:'地道', kind:'native', ok:true,
        why:'主人谢你来，你回 Thanks for having me!（谢谢招待），一来一回特别得体。' },
      { text:'You too!', note:'这里 you too 不合适', badge:'用错了', kind:'trap', ok:false,
        why:'You too 用在祝福场合，对方谢你来做客，要回 Thanks for having me.' },
      { text:'No, I come myself.', note:'把客套当真话答了', badge:'会错意', kind:'stiff', ok:false,
        why:'Thanks for coming 是客套感谢，不是问你怎么来的。' }
    ],
    explain:'💡 做客的一对客套话：主人说 Thanks for coming!（谢谢你来），客人回 Thanks for having me!（谢谢招待）。',
    takeaway:'Thanks for coming! → Thanks for having me!'
  },
  {
    id:'kh-23', pack:'hello', level:2, type:'phrase',
    scene:'👋 老友问候近况',
    situation:'很久没见的外国朋友寒暄时，关心地问了一句：',
    quote:"How's your family?",
    note:'他在问你家里人都好吗。',
    ask:'最自然的回答是？',
    options:[
      { text:"They're great, thanks!", note:'家人用 they', badge:'地道', kind:'native', ok:true,
        why:'家里人不止一个，用 They\'re；再加 thanks 就很自然。' },
      { text:"He's fine.", note:'家人不止一个', badge:'单复数错', kind:'stiff', ok:false,
        why:'family 指全家人，要用 They\'re，不是 He\'s。' },
      { text:'I have a family.', note:'答非所问', badge:'没接住', kind:'trap', ok:false,
        why:'他问的是家人好不好，不是问你有没有家。' }
    ],
    explain:'💡 寒暄常用：How\'s your family?（家人好吗）→ They\'re great, thanks.；How\'s school?（学习怎么样）→ It\'s good.',
    takeaway:"How's your family? → They're great, thanks!"
  },
  {
    id:'kh-24', pack:'hello', level:1, type:'listening',
    scene:'👋 视频通话开头',
    situation:'跟国外的朋友视频，画面刚连上，对方皱着眉凑近屏幕问：',
    quote:'Can you hear me?',
    note:'他好像担心你听不到声音。',
    ask:'他在问什么？',
    options:[
      { text:'你能听见我说话吗', note:'hear = 听见', badge:'地道', kind:'native', ok:true,
        why:'Can you hear me? 是问"你听得见我吗"，听得见就回 Yes, I can. / Loud and clear!' },
      { text:'你能看见我吗', note:'那是 Can you see me?', badge:'看错动词', kind:'trap', ok:false,
        why:'看见是 see，听见是 hear，这句问的是声音。' },
      { text:'你在这儿吗', note:'想歪了', badge:'理解偏', kind:'stiff', ok:false,
        why:'Can you hear me? 只关心你听不听得清，不是问你在不在。' }
    ],
    explain:'💡 视频、打电话常用：Can you hear me?（听得见吗）、Can you see me?（看得见吗）。听得清回 Loud and clear!',
    takeaway:'Can you hear me? = 你听得见我吗？'
  },
  {
    id:'kh-25', pack:'hello', level:2, type:'listening',
    scene:'👋 送朋友去远行',
    situation:'外国朋友一家明天要坐飞机回国，临别时他笑着对你说：',
    quote:'Have a safe trip!',
    note:'要坐飞机出远门的是他。',
    ask:'这句是什么意思？',
    options:[
      { text:'祝旅途平安（＝一路平安）', note:'送别的祝福', badge:'地道', kind:'native', ok:true,
        why:'Have a safe trip! 是祝人一路平安，收到就回 Thank you!' },
      { text:'在说你要出远门', note:'要走的其实是他', badge:'会错意', kind:'stiff', ok:false,
        why:'这是他在跟你道别祝福，重点是"旅途平安"，不是谁要走。' },
      { text:'祝你今晚睡个好觉', note:'那是 Good night', badge:'答偏了', kind:'trap', ok:false,
        why:'trip 是旅行，跟睡觉无关，这是旅途祝福。' }
    ],
    explain:'💡 送人出远门说 Have a safe trip! / Have a good trip!（一路平安）。听到就回 Thank you!',
    takeaway:'Have a safe trip! = 一路平安！'
  }

  ]);

  /* ---------- 👋 打招呼篇（加餐 3） ---------- */
  EN.add('kids', 'hello', [

  {
    id:'kh-26', pack:'hello', level:2, type:'phrase',
    scene:'👋 介绍两个朋友认识',
    situation:'你的朋友 Anna 和外国朋友 Tom 都在你身边，可他俩还不认识。',
    quote:'',
    note:'你想把他们介绍给彼此。',
    ask:'该怎么开口最自然？',
    options:[
      { text:'Tom, this is Anna. Anna, this is Tom.', note:'把两人互相引荐', badge:'地道', kind:'native', ok:true,
        why:'介绍两个人认识就用 This is …，一人报一次名，他们就能接上 Nice to meet you.' },
      { text:'You two know each other!', note:'像在下命令', badge:'太冲', kind:'stiff', ok:false,
        why:'这是在命令他们"认识一下"，不是把人介绍给对方。' },
      { text:'This is my two friends.', note:'没说出名字', badge:'没到点', kind:'trap', ok:false,
        why:'介绍要说出名字，光说"这是我两个朋友"对方还是不知道叫什么。' }
    ],
    explain:'💡 给两个人牵线：Tom, this is Anna.（报一次），再 Anna, this is Tom.。介绍完他们会互道 Nice to meet you.',
    takeaway:'牵线搭桥 → Tom, this is Anna.'
  },
  {
    id:'kh-27', pack:'hello', level:1, type:'culture',
    scene:'👋 别人一直谢你',
    situation:'你帮外国同学捡了笔、又借他橡皮，他连声说 Thank you。',
    quote:'Thank you so much!',
    note:'你想回应得自然点，别老是重复。',
    ask:'哪句回应最合适？',
    options:[
      { text:"You're welcome! / No problem!", note:'两种都地道，换着用', badge:'地道', kind:'native', ok:true,
        why:'别人道谢，回 You\'re welcome. / No problem. / Anytime. 都行，换着说更自然。' },
      { text:'Thank you too.', note:'又谢回去，绕圈了', badge:'绕圈', kind:'stiff', ok:false,
        why:'他谢的是你，你再谢回去就绕住了，回 You\'re welcome 才对。' },
      { text:'No thanks.', note:'意思变成了"不用了"', badge:'用错了', kind:'trap', ok:false,
        why:'No thanks 是"不用了、我不要"，不是"不客气"，别搞混。' }
    ],
    explain:'💡 回应道谢有一串：You\'re welcome.（最标准）、No problem. / No worries.（轻松）、Anytime.（随时乐意）、My pleasure.（很荣幸）。',
    takeaway:"别人道谢 → You're welcome! / No problem!"
  },
  {
    id:'kh-28', pack:'hello', level:3, type:'phrase',
    scene:'👋 周一见到同学',
    situation:'周一早上见到外国同学，你想找个话题聊两句。',
    quote:'',
    note:'刚过完周末，聊这个最自然。',
    ask:'开个话头，哪句最地道？',
    options:[
      { text:'How was your weekend?', note:'周一寒暄的经典问句', badge:'地道', kind:'native', ok:true,
        why:'How was …? 是问"…怎么样"，聊过去的事用过去式 was。周末过得如何一问就热络了。' },
      { text:'How is your weekend?', note:'周末已经过完了', badge:'时态错', kind:'stiff', ok:false,
        why:'周末已经结束，要用过去式 How was your weekend?，不是 is。' },
      { text:'Your weekend good?', note:'蹦词，不成句', badge:'不通顺', kind:'trap', ok:false,
        why:'缺了动词，完整问句是 How was your weekend?' }
    ],
    explain:'💡 聊过去用 How was …?：How was your weekend?（周末怎么样）、How was your trip?（旅行怎么样）。回答 It was great! / Not bad.',
    takeaway:'周一寒暄 → How was your weekend?'
  },
  {
    id:'kh-29', pack:'hello', level:2, type:'social',
    scene:'👋 得先走一步',
    situation:'你和外国同学聊得正起劲，可上课铃快响了，你得赶去教室。',
    quote:'',
    note:'总不能话说一半扭头就走。',
    ask:'该怎么礼貌地结束聊天？',
    options:[
      { text:'Sorry, I have to go now. See you!', note:'先致歉再道别', badge:'地道', kind:'native', ok:true,
        why:'先说 I have to go now（我得走了），再 See you!，走得干脆又不失礼。' },
      { text:'（话说一半突然扭头走开）', note:'太突兀', badge:'没礼貌', kind:'trap', ok:false,
        why:'一句招呼都不打就走，会让对方莫名其妙，还以为自己说错了话。' },
      { text:'Stop talking. I go.', note:'像在嫌人啰嗦', badge:'太冲', kind:'stiff', ok:false,
        why:'叫人"别说了"很伤人，要说 Sorry, I have to go now.' }
    ],
    explain:'💡 礼貌抽身：Sorry, I have to go now.（我得走了）、Talk to you later!（回头聊）、See you!。先打个招呼再走最得体。',
    takeaway:'先走一步 → Sorry, I have to go now. See you!'
  },
  {
    id:'kh-30', pack:'hello', level:2, type:'social',
    scene:'👋 认错了人',
    situation:'你看见一个背影很像同学 Tom，拍了下肩膀喊他，结果转过来是个陌生人。',
    quote:'',
    note:'对方一脸疑惑地看着你。',
    ask:'这时候该怎么说？',
    options:[
      { text:'Oh, sorry! I thought you were someone else.', note:'道歉＋解释', badge:'地道', kind:'native', ok:true,
        why:'先 Sorry，再说 I thought you were someone else（我以为你是别人），误会一下就解开了。' },
      { text:'（红着脸一句话不说就跑开）', note:'留下对方一脸懵', badge:'没礼貌', kind:'stiff', ok:false,
        why:'拍了人家又一声不吭跑掉，会让对方莫名其妙，一句 Sorry 就能化解。' },
      { text:'You are not Tom!', note:'像在怪对方', badge:'太冲', kind:'trap', ok:false,
        why:'认错人是你的事，怪对方"你不是 Tom"很没道理，应该道歉。' }
    ],
    explain:'💡 认错人别慌，一句 Sorry, I thought you were someone else. 就化解了。日常小尴尬，Sorry 是万能钥匙。',
    takeaway:'认错人 → Sorry, I thought you were someone else.'
  }

  ]);

  /* ---------- 👋 打招呼篇（加餐 4） ---------- */
  EN.add('kids', 'hello', [

  {
    id:'kh-31', pack:'hello', level:2, type:'culture',
    scene:'👋 外国朋友张开了手臂',
    situation:'久别重逢，外国好朋友一见你就张开双臂朝你走来。',
    quote:'',
    note:'在他们那儿，好朋友见面常常抱一下。',
    ask:'这时候最自然的反应是？',
    options:[
      { text:'笑着回抱一下，说 Good to see you!', note:'入乡随俗', badge:'地道', kind:'native', ok:true,
        why:'西方好友重逢常拥抱（a hug），大方回抱、说句 Good to see you! 最自然。' },
      { text:'赶紧后退一步躲开', note:'会让对方很尴尬', badge:'太见外', kind:'trap', ok:false,
        why:'一下子躲开会让热情的朋友愣住，以为你不高兴见他。' },
      { text:'伸手要跟他握手鞠躬', note:'场合不太搭', badge:'太生分', kind:'stiff', ok:false,
        why:'握手偏正式，好朋友之间抱一下或击个掌更亲切。' }
    ],
    explain:'💡 西方打招呼的身体语言：初次见面多是握手（handshake），好朋友之间常拥抱（hug）或击掌（high five）。不习惯拥抱，笑着挥挥手也行。',
    takeaway:'好友重逢 → 回抱一下，Good to see you!'
  },
  {
    id:'kh-32', pack:'hello', level:3, type:'phrase',
    scene:'👋 用天气开场聊天',
    situation:'排队时旁边的外国老爷爷望着大晴天，笑着对你说：',
    quote:"Nice day, isn't it?",
    note:'他只是想友好地搭句话。',
    ask:'最自然的回应是？',
    options:[
      { text:'Yes, it is! Beautiful!', note:'顺着话头接下去', badge:'地道', kind:'native', ok:true,
        why:'这是句"闲聊开场白"，顺着说 Yes, it is! 再夸一句，气氛一下就轻松了。' },
      { text:'（愣住，不知道说啥）', note:'冷场了', badge:'冷场', kind:'stiff', ok:false,
        why:'他只是随口聊天，回一句 Yes, it is! 就好，不用紧张。' },
      { text:'Why do you ask?', note:'把闲聊当成了盘问', badge:'会错意', kind:'trap', ok:false,
        why:'Nice day, isn\'t it? 不是真在问问题，是想跟你聊两句。' }
    ],
    explain:'💡 老外爱用天气开启闲聊：Nice day, isn\'t it?（天气真好，是吧）、It\'s cold today.（今天真冷）。顺着接一句 Yes, it is! 就很友好。',
    takeaway:"Nice day, isn't it? → Yes, it is!"
  },
  {
    id:'kh-33', pack:'hello', level:2, type:'phrase',
    scene:'👋 电话打错了',
    situation:'你拨了个号码，对面是个陌生的外国人，你这才发现号码按错了。',
    quote:'',
    note:'总不能一句话不说就挂掉。',
    ask:'该怎么礼貌地收场？',
    options:[
      { text:'Sorry, wrong number.', note:'打错电话的固定说法', badge:'地道', kind:'native', ok:true,
        why:'号码拨错了，说一句 Sorry, wrong number.（抱歉，打错了）再挂，礼貌又干脆。' },
      { text:'（一句不说直接挂断）', note:'有点没礼貌', badge:'太冷', kind:'stiff', ok:false,
        why:'哪怕打错了，说声 Sorry 也比闷不吭声挂掉体面。' },
      { text:'Who are you?', note:'像在盘问对方', badge:'太冲', kind:'trap', ok:false,
        why:'是你打错了，还反问人家是谁很没道理，应该道歉。' }
    ],
    explain:'💡 电话打错了：Sorry, wrong number.（抱歉打错了）。接到打错的电话，你也可以回 That\'s OK. / No problem.',
    takeaway:'打错电话 → Sorry, wrong number.'
  },
  {
    id:'kh-34', pack:'hello', level:3, type:'phrase',
    scene:'👋 别人问你喜不喜欢这儿',
    situation:'你来到国外的新学校，外教关心地问你适应得怎么样：',
    quote:'How do you like it here?',
    note:'她想知道你喜不喜欢这里。',
    ask:'最自然的回答是？',
    options:[
      { text:'I like it a lot!', note:'直接说出感受', badge:'地道', kind:'native', ok:true,
        why:'How do you like…? 是问"你觉得…怎么样、喜不喜欢"，回 I like it a lot! 又热情又清楚。' },
      { text:'How do I like it?', note:'把问题重复了一遍', badge:'没接住', kind:'stiff', ok:false,
        why:'她是在问你的感受，把问题原样念回去等于没回答。' },
      { text:'Yes, I like.', note:'like 后面缺了东西', badge:'语法错', kind:'trap', ok:false,
        why:'like 后面要跟 it：I like it (a lot).，不能光说 I like。' }
    ],
    explain:'💡 How do you like …? 是问喜不喜欢、觉得怎么样：How do you like China?（喜欢中国吗）→ I like it a lot! / It\'s great!',
    takeaway:'How do you like it? → I like it a lot!'
  },
  {
    id:'kh-35', pack:'hello', level:1, type:'phrase',
    scene:'👋 主动认识新朋友',
    situation:'夏令营里你看见一个外国小朋友一个人坐着，你想过去主动认识他。',
    quote:'',
    note:'先迈出第一步，往往就交到朋友了。',
    ask:'开口第一句怎么说最好？',
    options:[
      { text:"Hi, I'm Lily. What's your name?", note:'先报名，再问对方', badge:'地道', kind:'native', ok:true,
        why:'先自我介绍 I\'m Lily.，再问 What\'s your name?，一来一回就聊上了。' },
      { text:'What are you doing here alone?', note:'像在盘问', badge:'太直接', kind:'stiff', ok:false,
        why:'一上来就问"你怎么一个人在这"有点冒失，先友好地报个名。' },
      { text:'（站旁边看着，不说话）', note:'错过了机会', badge:'太腼腆', kind:'trap', ok:false,
        why:'光站着不开口，友谊就没法开始，勇敢说句 Hi 吧。' }
    ],
    explain:'💡 主动交朋友的黄金开场：Hi, I\'m Lily. What\'s your name?。报名字＋问名字，简单一句就破了冰。',
    takeaway:"主动认识 → Hi, I'm Lily. What's your name?"
  }

  ]);

})(window.EN);
