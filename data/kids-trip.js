/* ============================================================
   🧒 小学生入门 · 🧳 出门在外篇（25 题）
   出国旅行、坐飞机、问路、买票、走散求助这些真会用上的场面。
   只放数据。字段说明见 data/_core.js，加题直接往数组里追加对象。
   ============================================================ */
(function (EN) {
  "use strict";

  EN.add('kids', 'trip', [

  {
    id:'kt-01', pack:'trip', level:1, type:'phrase',
    scene:'🧳 在国外的商场里',
    situation:'跟妈妈逛商场，你想找洗手间，看见前面站着一位工作人员。',
    quote:'',
    note:'她正背对着你整理货架。',
    ask:'走过去该先说哪一句？',
    options:[
      { text:'Excuse me, where is the restroom?', note:'先打招呼，再问路', badge:'地道', kind:'native', ok:true,
        why:'Excuse me 是"打扰一下"，用来礼貌地开启对话，问路、叫人、借过全靠它。' },
      { text:'Hey! Where is the restroom?', note:'像在街上喊人', badge:'太随便', kind:'trap', ok:false,
        why:'Hey! 只在熟人之间用，对陌生人这么喊会让人皱眉。' },
      { text:'Where is the restroom?', note:'不算错，但太突然', badge:'莽撞', kind:'stiff', ok:false,
        why:'一上来就抛问题会显得冒失，前面加一句 Excuse me 才完整。' }
    ],
    explain:'💡 在外面找人帮忙，第一句永远是 Excuse me.（打扰一下）。它不是道歉，而是"我要跟你说话啦"的信号，说完再问就自然多了。',
    takeaway:'问路先说 Excuse me，再问 Where is…?'
  },
  {
    id:'kt-02', pack:'trip', level:1, type:'phrase',
    scene:'🧳 纪念品商店',
    situation:'你在货架上看中了一个小挂件，想问问多少钱。',
    quote:'',
    note:'店员就站在旁边。',
    ask:'该怎么问？',
    options:[
      { text:'How many money?', note:'many 和 much 用反了', badge:'语法错', kind:'stiff', ok:false,
        why:'钱不能一个一个数，要用 much：How much…?' },
      { text:'How much is it?', note:'问价格的标准句', badge:'地道', kind:'native', ok:true,
        why:'指着东西说 How much is it?，最简单直接，店员一听就懂。' },
      { text:'Give me the price.', note:'像在下命令', badge:'太冲', kind:'trap', ok:false,
        why:'祈使句听起来是在要求对方交代，不像在问价。' }
    ],
    explain:'💡 how much 问价钱和不能数的东西，how many 问能数的数量：How much is it?（多少钱）／How many apples?（几个苹果）。',
    takeaway:'问价 → How much is it?'
  },
  {
    id:'kt-03', pack:'trip', level:1, type:'listening',
    scene:'🧳 游乐园排队',
    situation:'你想快点玩上过山车，往前挤了两步，工作人员看见了，对你说：',
    quote:'Wait in line, please.',
    note:'旁边的人都站成了长长的一条。',
    ask:'他让你做什么？',
    options:[
      { text:'请排队等着', note:'in line = 在队伍里', badge:'排队', kind:'stiff', ok:true,
        why:'这句是提醒你别插队，回到队伍里等。' },
      { text:'在网上等消息', note:'和上网没关系', badge:'上网', kind:'stiff', ok:false,
        why:'online（在线）是一个词，in line（排队）是两个词，别看混。' },
      { text:'沿着线走', note:'那是 follow the line', badge:'走线', kind:'stiff', ok:false,
        why:'line 在这里指人排成的队伍，不是地上的线。' }
    ],
    explain:'💡 排队相关：Wait in line.（排队等）、The line is long.（队很长）、Are you in line?（你在排队吗）。英式英语里排队还常说 queue。',
    takeaway:'Wait in line. = 请排队。'
  },
  {
    id:'kt-04', pack:'trip', level:2, type:'listening',
    scene:'🧳 问完路之后',
    situation:'你问了路人洗手间在哪，他抬手往前一指，说了一句：',
    quote:'Go straight and turn left.',
    note:'前面有两个路口。',
    ask:'他让你怎么走？',
    options:[
      { text:'一直往前走，然后左转', note:'问路回答的经典组合', badge:'方向', kind:'stiff', ok:true,
        why:'go straight 是一直往前，turn left 是左转，合起来就是完整的路线。' },
      { text:'走直线，别绕远路', note:'把 straight 当成了走法', badge:'走法', kind:'stiff', ok:false,
        why:'straight 在这里指方向"笔直往前"，不是在教你怎么走路。' },
      { text:'往前走，然后往右转', note:'left 和 right 记反了', badge:'反了', kind:'stiff', ok:false,
        why:'left 是左，right 是右。这两个词记反，路就走反了。' }
    ],
    explain:'💡 问路必听的几个词：go straight（直走）、turn left / right（左转 / 右转）、next to（挨着）、across from（在对面）。听懂这几个就不会走丢。',
    takeaway:'Go straight and turn left. = 直走然后左转。'
  },
  {
    id:'kt-05', pack:'trip', level:1, type:'listening',
    scene:'🧳 飞机上发餐',
    situation:'飞了两个小时，空乘推着餐车走到你这一排，弯下腰问：',
    quote:'Chicken or beef?',
    note:'她手里端着两个不一样的餐盒。',
    ask:'她在问什么？',
    options:[
      { text:'要鸡肉还是牛肉', note:'飞机餐最经典的问句', badge:'选餐', kind:'stiff', ok:true,
        why:'想要哪个就说 Chicken, please. 或 Beef, please.' },
      { text:'这是鸡肉和牛肉做的', note:'当成了介绍菜品', badge:'介绍', kind:'stiff', ok:false,
        why:'介绍菜品会说 It\'s chicken and beef.，这句是在让你二选一。' },
      { text:'你会做鸡肉和牛肉吗', note:'和会不会做饭没关系', badge:'问会不会', kind:'stiff', ok:false,
        why:'那要说 Can you cook…?，跟这句差得远。' }
    ],
    explain:'💡 飞机上的三句：Chicken or beef?（鸡肉还是牛肉）、Something to drink?（喝点什么）、Coffee or tea?（咖啡还是茶）。回答统一是 …, please.',
    takeaway:'Chicken or beef? → Chicken, please.'
  },
  {
    id:'kt-06', pack:'trip', level:2, type:'listening',
    scene:'🧳 飞机要起飞了',
    situation:'飞机开始滑行，广播里传来一句提醒，空乘也在挨个检查：',
    quote:'Please fasten your seat belt.',
    note:'你的安全带还搭在腿上没扣。',
    ask:'她提醒你做什么？',
    options:[
      { text:'请系好安全带', note:'fasten = 扣紧、系上', badge:'系安全带', kind:'stiff', ok:true,
        why:'起飞和降落时都必须系好，这是飞机上听到次数最多的一句。' },
      { text:'请把椅背调直', note:'那是另一句提醒', badge:'收椅背', kind:'stiff', ok:false,
        why:'椅背调直会说 Put your seat back up.' },
      { text:'请快一点坐下', note:'fasten 和 fast 看混了', badge:'催你', kind:'stiff', ok:false,
        why:'fasten（系上）和 fast（快）长得像，却是两个词。' }
    ],
    explain:'💡 起飞前的四句：Please fasten your seat belt.（系安全带）、Put your seat back up.（椅背调直）、Close the window shade.（关遮光板）、Turn off your phone.（关手机）。',
    takeaway:'fasten your seat belt = 系好安全带。'
  },
  {
    id:'kt-07', pack:'trip', level:2, type:'phrase',
    scene:'🧳 买博物馆门票',
    situation:'博物馆售票窗口前，你想给自己买一张儿童票。',
    quote:'',
    note:'售票员抬起头看着你。',
    ask:'该怎么说？',
    options:[
      { text:'One child ticket, please.', note:'数量＋种类＋please', badge:'地道', kind:'native', ok:true,
        why:'买票的固定格式，简单又清楚，售票员一听就明白。' },
      { text:'I want one child ticket.', note:'像在陈述需求', badge:'生硬', kind:'stiff', ok:false,
        why:'能听懂，但少了 please，语气比较硬。' },
      { text:'Give me a child ticket.', note:'像在命令售票员', badge:'太冲', kind:'trap', ok:false,
        why:'祈使句又没有 please，听起来很不客气。' }
    ],
    explain:'💡 买东西的万能格式：数量 + 东西 + please。One coffee, please.／Two tickets, please.。加上 please，礼貌就到位了。',
    takeaway:'买票 → One child ticket, please.'
  },
  {
    id:'kt-08', pack:'trip', level:2, type:'phrase',
    scene:'🧳 想拍张全家福',
    situation:'一家人站在喷泉前想拍合影，旁边正好有位游客闲着。',
    quote:'',
    note:'你手里举着手机。',
    ask:'该怎么请他帮忙？',
    options:[
      { text:'Excuse me, can you take a picture of us?', note:'先打招呼，再请求', badge:'地道', kind:'native', ok:true,
        why:'take a picture of us 是"给我们拍张照"，of 后面跟的是被拍的人。' },
      { text:'Can you take a picture with us?', note:'with 变成了"跟我们一起拍"', badge:'差一个词', kind:'stiff', ok:false,
        why:'with us 是请对方入镜合影，一个介词差出十万八千里。' },
      { text:'You take picture.', note:'句子不完整，像命令', badge:'太冲', kind:'trap', ok:false,
        why:'既没有请求的语气，也漏了冠词，听起来很生硬。' }
    ],
    explain:'💡 请人帮拍：Can you take a picture of us, please?，拍完记得说 Thank you!。想跟别人合影才用 with：Can I take a picture with you?',
    takeaway:'请人帮拍用 of us；合影才是 with。'
  },
  {
    id:'kt-09', pack:'trip', level:2, type:'manners',
    scene:'🧳 地铁上遇到老奶奶',
    situation:'地铁很挤，一位拄着拐杖的老奶奶上了车，你正好有座位。',
    quote:'',
    note:'你想把座位让给她。',
    ask:'该怎么开口？',
    options:[
      { text:'You are old. Take my seat.', note:'当面说人老，很失礼', badge:'踩雷', kind:'trap', ok:false,
        why:'英语国家很忌讳说别人 old，好心也会办成坏事。' },
      { text:'Would you like my seat?', note:'先问一句再让', badge:'地道', kind:'native', ok:true,
        why:'用问句既尊重对方，也不会让她觉得被当成"需要照顾的老人"。' },
      { text:'Sit here.', note:'像在指挥别人', badge:'生硬', kind:'stiff', ok:false,
        why:'心意是好的，但祈使句听起来像命令。' }
    ],
    explain:'💡 让座的地道说法：Would you like my seat? 或 Please, take my seat.。对方要是说 No, thank you.，也别在意，心意到了就好。',
    takeaway:'让座 → Would you like my seat?'
  },
  {
    id:'kt-10', pack:'trip', level:3, type:'listening',
    scene:'🧳 快餐店找位子',
    situation:'你在快餐店占了张四人桌，旁边的椅子空着。一位客人端着餐盘走过来问：',
    quote:'Is this seat taken?',
    note:'他指了指你旁边那把空椅子。',
    ask:'他在问什么？',
    options:[
      { text:'这个位子有人坐吗', note:'taken = 被占了', badge:'问空位', kind:'stiff', ok:true,
        why:'这是很客气地问能不能坐这儿。没人坐就回一句 No, go ahead.' },
      { text:'这把椅子是你搬来的吗', note:'把 taken 当成了"拿"', badge:'问来历', kind:'stiff', ok:false,
        why:'take 确实有"拿"的意思，但在座位场景里它指"被占用"。' },
      { text:'这个位子要收钱吗', note:'和收费没关系', badge:'问收费', kind:'stiff', ok:false,
        why:'问收不收费会说 Is it free?，那是另一句话。' }
    ],
    explain:'💡 找座位的两句：Is this seat taken?（这儿有人吗）／Is this seat free?（这儿空着吗）。没人坐就回 No, go ahead.（没人，你坐吧）。',
    takeaway:'Is this seat taken? = 这儿有人坐吗？'
  },
  {
    id:'kt-11', pack:'trip', level:3, type:'listening',
    scene:'🧳 机场过安检',
    situation:'排到你了，安检员指了指你的鞋，说了一句：',
    quote:'Take off your shoes, please.',
    note:'前面的人都把鞋放进了篮子里。',
    ask:'他让你做什么？',
    options:[
      { text:'请把鞋脱下来', note:'take off = 脱下', badge:'脱鞋', kind:'stiff', ok:true,
        why:'过安检时经常要脱鞋、脱外套，放进篮子过机器。' },
      { text:'请把鞋带系好', note:'那是 tie your shoes', badge:'系鞋带', kind:'stiff', ok:false,
        why:'系鞋带和脱鞋是两个完全不同的动作。' },
      { text:'请把鞋擦干净', note:'那是 clean your shoes', badge:'擦鞋', kind:'stiff', ok:false,
        why:'安检员不管鞋干不干净，他只要你把鞋脱下来。' }
    ],
    explain:'💡 take off 有两个常见意思：脱下（Take off your coat.）和飞机起飞（The plane takes off at six.）。在安检口听到的永远是第一个。',
    takeaway:'Take off your shoes. = 请脱鞋。'
  },
  {
    id:'kt-12', pack:'trip', level:2, type:'phrase',
    scene:'🧳 跟家人走散了',
    situation:'在商场回头一看，爸爸妈妈都不见了。你走到服务台，工作人员蹲下来问你：',
    quote:'Are you OK?',
    note:'你有点紧张，但得把话说清楚。',
    ask:'该怎么说明情况？',
    options:[
      { text:"I'm lost. Can you help me?", note:'一句话说清处境', badge:'地道', kind:'native', ok:true,
        why:'lost 是"迷路了、走散了"，再加一句 Can you help me?，对方立刻知道该怎么帮你。' },
      { text:"I can't find my parents' place.", note:'绕了一大圈', badge:'啰嗦', kind:'stiff', ok:false,
        why:'意思勉强能懂，但越紧张越要说短句。' },
      { text:'I lost.', note:'少了 am，还容易被听成"我输了"', badge:'语法错', kind:'trap', ok:false,
        why:'I lost 是"我输了"；迷路要说 I\'m lost.' }
    ],
    explain:'💡 走散了最该会的三句：I\'m lost.（我迷路了）、Can you help me?（能帮帮我吗）、Can you call my mom?（能帮我打给妈妈吗）。再背熟爸妈的手机号就更稳了。',
    takeaway:"走散了 → I'm lost. Can you help me?"
  },
  {
    id:'kt-13', pack:'trip', level:3, type:'phrase',
    scene:'🧳 买纪念 T 恤',
    situation:'你在店里挑中一件 T 恤，想先穿上看看合不合身。',
    quote:'',
    note:'试衣间就在旁边。',
    ask:'该怎么问店员？',
    options:[
      { text:'Can I try it on?', note:'试穿的固定说法', badge:'地道', kind:'native', ok:true,
        why:'try on 是"试穿"，中间可以夹代词：try it on。' },
      { text:'Can I try it?', note:'少了 on，更像"尝一尝"', badge:'差一个词', kind:'stiff', ok:false,
        why:'try it 常用在尝东西、试试看上面，试衣服要用 try on。' },
      { text:'Can I wear it?', note:'像是问能不能直接穿走', badge:'会误会', kind:'trap', ok:false,
        why:'wear 说的是"穿着"这个状态，店员会以为你想穿着它出门。' }
    ],
    explain:'💡 买衣服三句：Can I try it on?（能试穿吗）、Do you have a bigger one?（有大一号的吗）、It doesn\'t fit.（不合身）。',
    takeaway:'试穿 → Can I try it on?'
  },
  {
    id:'kt-14', pack:'trip', level:2, type:'listening',
    scene:'🧳 参观博物馆',
    situation:'你正举起手机想拍一幅名画，工作人员快步走过来，指了指墙上的牌子：',
    quote:'No photos, please.',
    note:'牌子上画着一个相机，被打了叉。',
    ask:'他的意思是？',
    options:[
      { text:'这里禁止拍照', note:'No + 名词 = 禁止', badge:'禁拍', kind:'stiff', ok:true,
        why:'公共场所的禁止牌几乎都是这个句式，看见 No 开头就先停手。' },
      { text:'这里不卖照片', note:'当成了商店告示', badge:'没有卖', kind:'stiff', ok:false,
        why:'那要说 We don\'t sell photos.，是完全不同的句子。' },
      { text:'你照片拍得不好', note:'不是在点评你', badge:'评价', kind:'stiff', ok:false,
        why:'评价照片会说 The photo isn\'t good.，工作人员没空管这个。' }
    ],
    explain:'💡 公共场所的禁止牌都是 No + 名词：No photos（禁止拍照）、No food（禁止饮食）、No running（禁止奔跑）、No pets（宠物勿入）。',
    takeaway:'No photos, please. = 请勿拍照。'
  },
  {
    id:'kt-15', pack:'trip', level:2, type:'phrase',
    scene:'🧳 街边小吃摊',
    situation:'小吃摊的热狗看起来很香，你想买一个。',
    quote:'',
    note:'老板正等着你开口。',
    ask:'该怎么点？',
    options:[
      { text:'Hot dog!', note:'只喊菜名，像在下命令', badge:'太冲', kind:'trap', ok:false,
        why:'单蹦一个名词听起来很急躁，前面加半句话就完全不一样了。' },
      { text:'I want a hot dog.', note:'像在提要求', badge:'生硬', kind:'stiff', ok:false,
        why:'能听懂，但 I want 的语气比较直，至少要补一个 please。' },
      { text:'Can I have a hot dog, please?', note:'点餐的万能句型', badge:'地道', kind:'native', ok:true,
        why:'Can I have…? 是点餐、要东西时最常用的说法，礼貌又自然。' }
    ],
    explain:'💡 点餐要东西的万能句：Can I have a hot dog, please? / Can I get a Coke, please?。想问有没有就说 Do you have…?',
    takeaway:'点餐 → Can I have …, please?'
  }

  ]);

  /* ---------- 🧳 出门在外篇（加餐） ---------- */
  EN.add('kids', 'trip', [

  {
    id:'kt-16', pack:'trip', level:2, type:'phrase',
    scene:'🧳 快餐店点餐',
    situation:'在国外的汉堡店，轮到你点餐，店员笑着问：',
    quote:'What would you like?',
    note:'你想要一个汉堡。',
    ask:'该怎么点最地道？',
    options:[
      { text:'Can I have a hamburger, please?', note:'点餐的万能句', badge:'地道', kind:'native', ok:true,
        why:'点餐用 Can I have…, please? 或 I\'d like…，客气又清楚。' },
      { text:'I want hamburger.', note:'语气直，还漏了 a', badge:'生硬', kind:'stiff', ok:false,
        why:'I want 的语气比较冲，而且 hamburger 前面要有 a。' },
      { text:'Give me hamburger!', note:'像在命令', badge:'太冲', kind:'trap', ok:false,
        why:'Give me 像下令，点餐要用 Can I have…, please?' }
    ],
    explain:'💡 点餐两大句：Can I have a …, please? / I\'d like a …。店员会问 Anything else?（还要别的吗），不要就说 No, thanks.',
    takeaway:'点餐 → Can I have a hamburger, please?'
  },
  {
    id:'kt-17', pack:'trip', level:2, type:'phrase',
    scene:'🧳 想请路人拍合影',
    situation:'一家人站在景点前想拍张合影，可没人帮忙按快门，你想请旁边的路人搭把手。',
    quote:'',
    note:'你举着相机，走向一位友好的路人。',
    ask:'该怎么开口最有礼貌？',
    options:[
      { text:'Excuse me, could you take a photo for us?', note:'先打扰一下再请求', badge:'地道', kind:'native', ok:true,
        why:'先说 Excuse me 叫住对方，再用 could you…? 客气地请他帮忙拍照。' },
      { text:'You! Take photo!', note:'指着人下命令', badge:'太没礼貌', kind:'trap', ok:false,
        why:'指着陌生人喊"你！拍照！"非常失礼，要用 Excuse me, could you…?' },
      { text:'I want a photo.', note:'没说清要人家帮忙', badge:'没到点', kind:'stiff', ok:false,
        why:'只说"我想要张照片"，对方不知道你是要他帮忙拍。' }
    ],
    explain:'💡 请人帮忙拍照：Excuse me, could you take a photo for us, please?。拍完别忘了说 Thank you!',
    takeaway:'请人拍照 → Could you take a photo for us?'
  },
  {
    id:'kt-18', pack:'trip', level:2, type:'phrase',
    scene:'🧳 在街上问路',
    situation:'你和家人找不到地铁站，想拦住一位路人打听一下。',
    quote:'',
    note:'对方脚步匆匆，你得先叫住他。',
    ask:'该怎么开口最自然？',
    options:[
      { text:'Excuse me, how do I get to the station?', note:'问路的固定句式', badge:'地道', kind:'native', ok:true,
        why:'先 Excuse me，再用 How do I get to…?（怎么去…）问路，最标准。' },
      { text:'Station where?', note:'蹦词，不礼貌', badge:'不通顺', kind:'stiff', ok:false,
        why:'只蹦 Station where 既不完整也不礼貌，要用 How do I get to…?' },
      { text:'Where you go?', note:'问反了，成了问对方', badge:'问错了', kind:'trap', ok:false,
        why:'Where you go 是在问对方去哪儿，而且语法也不对。' }
    ],
    explain:'💡 问路三句：Excuse me（打扰一下）、How do I get to…?（怎么去…）、Is it far?（远吗）。听不懂就说 Sorry?，请对方再说一遍。',
    takeaway:'问路 → Excuse me, how do I get to…?'
  },
  {
    id:'kt-19', pack:'trip', level:1, type:'phrase',
    scene:'🧳 想买个纪念品',
    situation:'纪念品店里你看中一个小挂件，想知道多少钱。',
    quote:'',
    note:'价签被别的东西挡住了。',
    ask:'该怎么问价钱？',
    options:[
      { text:'How much is it?', note:'问价的固定说法', badge:'地道', kind:'native', ok:true,
        why:'问多少钱用 How much is it?，店员会告诉你价格，比如 It\'s five dollars.' },
      { text:'How many is it?', note:'many 是问数量的', badge:'用错词', kind:'trap', ok:false,
        why:'How many 问"有几个"，问价钱要用 How much。' },
      { text:'What is the money?', note:'钱不是这么问的', badge:'中式', kind:'stiff', ok:false,
        why:'不能直译成"钱是什么"，问价就是固定的 How much is it?' }
    ],
    explain:'💡 购物必备：How much is it?（多少钱）→ It\'s ten dollars.；付钱时递上钱说 Here you are.；找零说 Thank you.',
    takeaway:'问价 → How much is it?'
  },
  {
    id:'kt-20', pack:'trip', level:3, type:'phrase',
    scene:'🧳 怕博物馆要关门',
    situation:'快到傍晚了，你担心博物馆要关门，想问问工作人员几点关。',
    quote:'',
    note:'门口站着一位工作人员。',
    ask:'该怎么问最清楚？',
    options:[
      { text:'Excuse me, what time do you close?', note:'直接问关门时间', badge:'地道', kind:'native', ok:true,
        why:'问几点关门用 What time do you close?；问几点开门就是 What time do you open?' },
      { text:'When you go home?', note:'问成了对方几点下班', badge:'问偏了', kind:'trap', ok:false,
        why:'你想知道的是博物馆几点关，不是工作人员几点回家。' },
      { text:'Museum close?', note:'蹦词，说不清', badge:'不通顺', kind:'stiff', ok:false,
        why:'只蹦两个词对方要猜，要说完整的 What time do you close?' }
    ],
    explain:'💡 一对常用问句：What time do you open?（几点开门）、What time do you close?（几点关门）。逛景点、逛店都用得上。',
    takeaway:'问关门 → What time do you close?'
  }

  ]);

  /* ---------- 🧳 出门在外篇（加餐 2） ---------- */
  EN.add('kids', 'trip', [

  {
    id:'kt-21', pack:'trip', level:2, type:'listening',
    scene:'🧳 快餐店点完餐',
    situation:'在国外的快餐店点完汉堡，店员抬头问了一句：',
    quote:'For here or to go?',
    note:'你打算坐下来慢慢吃。',
    ask:'她在问什么？',
    options:[
      { text:'在店里吃还是打包带走', note:'for here / to go', badge:'地道', kind:'native', ok:true,
        why:'For here or to go? 是问你堂食还是外带，堂食回 For here.，带走回 To go.' },
      { text:'问你从哪儿来', note:'那是 Where are you from?', badge:'听岔了', kind:'trap', ok:false,
        why:'这句跟你来自哪儿无关，是问在店里吃还是带走。' },
      { text:'问你要去哪儿', note:'想歪了', badge:'理解偏', kind:'stiff', ok:false,
        why:'to go 在这里指"带走的食物"，不是问你去哪儿。' }
    ],
    explain:'💡 快餐店必听：For here or to go?（堂食还是外带）。堂食 For here.；带走 To go.；英式店常说 Eat in or take away?',
    takeaway:'For here or to go? = 店里吃还是带走？'
  },
  {
    id:'kt-22', pack:'trip', level:1, type:'phrase',
    scene:'🧳 买两张票',
    situation:'在游乐园售票窗口，你和妹妹要进去玩，需要买两张票。',
    quote:'',
    note:'售票员正等你开口。',
    ask:'该怎么买最简单地道？',
    options:[
      { text:'Two tickets, please.', note:'数量＋东西＋please', badge:'地道', kind:'native', ok:true,
        why:'买东西最简说法：数量 + 东西 + please。两张票就是 Two tickets, please.' },
      { text:'I want two ticket.', note:'ticket 忘了加 s', badge:'语法错', kind:'stiff', ok:false,
        why:'两张要用复数 tickets；更自然的是 Two tickets, please.' },
      { text:'Give me ticket ticket.', note:'重复凑数', badge:'不通顺', kind:'trap', ok:false,
        why:'重复说 ticket 很奇怪，两张就说 two tickets。' }
    ],
    explain:'💡 买东西的万能公式：数字 + 复数 + please：Two tickets, please. / Three ice creams, please.',
    takeaway:'买两张票 → Two tickets, please.'
  },
  {
    id:'kt-23', pack:'trip', level:2, type:'phrase',
    scene:'🧳 机场找登机口',
    situation:'过完安检，你们要找 5 号登机口，可绕来绕去找不到。',
    quote:'',
    note:'旁边站着一位机场工作人员。',
    ask:'该怎么问路最清楚？',
    options:[
      { text:'Excuse me, where is Gate 5?', note:'先打扰再问位置', badge:'地道', kind:'native', ok:true,
        why:'先 Excuse me，再问 Where is Gate 5?（5 号登机口在哪儿），简单又清楚。' },
      { text:'Gate 5 go where?', note:'语序乱了', badge:'语法错', kind:'stiff', ok:false,
        why:'语序不对，要问 Where is Gate 5?' },
      { text:'I find Gate 5!', note:'像在自言自语', badge:'没在问', kind:'trap', ok:false,
        why:'这是在说"我找 5 号口"，没有在问人，应该问 Where is Gate 5?' }
    ],
    explain:'💡 机场常用：Where is Gate 5?（登机口在哪）、Where is the check-in?（值机在哪）、Is this the way to …?（这是去…的路吗）。',
    takeaway:'找登机口 → Excuse me, where is Gate 5?'
  },
  {
    id:'kt-24', pack:'trip', level:3, type:'phrase',
    scene:'🧳 想连店里的 Wi-Fi',
    situation:'在国外的咖啡店，你想连店里的无线网，得问一下密码。',
    quote:'',
    note:'店员就在柜台后面。',
    ask:'该怎么问最有礼貌？',
    options:[
      { text:"Excuse me, what's the Wi-Fi password?", note:'礼貌问密码', badge:'地道', kind:'native', ok:true,
        why:'先 Excuse me，再问 What\'s the Wi-Fi password?（无线网密码是多少），最自然。' },
      { text:'Give me Wi-Fi!', note:'像在命令', badge:'太冲', kind:'trap', ok:false,
        why:'Wi-Fi 不能"给"，而且语气太冲，要问密码 What\'s the password?' },
      { text:'Where is Wi-Fi?', note:'问错了，网看不见', badge:'问偏了', kind:'stiff', ok:false,
        why:'你要的是密码，不是问 Wi-Fi 在哪儿，问 What\'s the password?' }
    ],
    explain:'💡 想上网就问：What\'s the Wi-Fi password?（密码是多少）。连不上可以说 It\'s not working.（连不上）。',
    takeaway:"连网 → What's the Wi-Fi password?"
  },
  {
    id:'kt-25', pack:'trip', level:2, type:'phrase',
    scene:'🧳 想试穿一件衣服',
    situation:'在服装店你看中一件外套，想穿上试试合不合身。',
    quote:'',
    note:'店员就在旁边整理衣架。',
    ask:'该怎么问最地道？',
    options:[
      { text:'Can I try it on?', note:'试穿的固定说法', badge:'地道', kind:'native', ok:true,
        why:'试穿衣服用 try … on：Can I try it on?（我能试穿一下吗），店员会带你去试衣间。' },
      { text:'Can I wear it?', note:'wear 是"穿着"，不是"试穿"', badge:'用错词', kind:'stiff', ok:false,
        why:'wear 指平时穿着，商店里"试穿"要用 try it on。' },
      { text:'I put on now?', note:'不通顺，也不礼貌', badge:'中式', kind:'trap', ok:false,
        why:'试穿别直译，用 Can I try it on? 才地道。' }
    ],
    explain:'💡 买衣服常用：Can I try it on?（能试穿吗）、Where\'s the fitting room?（试衣间在哪）、It\'s too big / small.（太大/太小）。',
    takeaway:'试穿 → Can I try it on?'
  }

  ]);

})(window.EN);
