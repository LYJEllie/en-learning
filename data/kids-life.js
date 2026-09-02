/* ============================================================
   🧒 小学生入门 · 🏠 生活篇（35 题）
   只放数据。字段说明见 data/_core.js，加题直接往数组里追加对象。
   ============================================================ */
(function (EN) {
  "use strict";

  EN.add('kids', 'life', [

  {
    id:'kl-01', pack:'life', level:1, type:'word',
    scene:'🏠 认物品和颜色',
    situation:'外教举起一根香蕉，指了指它的皮，问全班：',
    quote:'What color is it?',
    note:'她等着有人举手回答。',
    ask:'你要怎么回答？',
    options:[
      { text:'Banana.', note:'这是名字，不是颜色', badge:'名字', kind:'stiff', ok:false,
        why:'回答名字用在 What is it? 上面：It\'s a banana.' },
      { text:'Yellow.', note:'香蕉是黄色的', badge:'颜色', kind:'stiff', ok:true,
        why:'What color…? 问的就是颜色，回一个颜色词即可，说完整一点是 It\'s yellow.' },
      { text:'Sweet.', note:'这是味道', badge:'味道', kind:'stiff', ok:false,
        why:'sweet 是"甜的"，回答的是 How does it taste?（尝起来怎么样）。' }
    ],
    explain:'💡 问句开头那个词决定你该回答什么：What color…? 回颜色，What…? 回名字，How many…? 回数字。先听清开头，再张嘴。',
    takeaway:'What color is it? → 回颜色：It\'s yellow.'
  },
  {
    id:'kl-02', pack:'life', level:2, type:'listening',
    scene:'🏠 生日会上',
    situation:'在同学的生日会上，他妈妈端着一盘果汁走过来问你：',
    quote:'Would you like some juice?',
    note:'你正好口渴，想要一杯。',
    ask:'最自然的回答是？',
    options:[
      { text:'Yes, please.', note:'又短又礼貌', badge:'地道', kind:'native', ok:true,
        why:'Would you like…? 的标准回答就是 Yes, please.（要）或 No, thank you.（不要）。' },
      { text:'I like juice.', note:'答成了"我喜欢果汁"', badge:'答偏了', kind:'stiff', ok:false,
        why:'这句没有回答"要不要"，阿姨还得再问你一次。' },
      { text:'Of course I want.', note:'典型的直译腔', badge:'中式', kind:'trap', ok:false,
        why:'把"当然想要"逐词翻译过来的，英语里没人这么说，语气还有点冲。' }
    ],
    explain:'💡 Would you like…? = 要不要…？要就 Yes, please.，不要就 No, thank you.。这两句在国外一天能用十次，比背多少单词都实用。',
    takeaway:'要 → Yes, please. 不要 → No, thank you.'
  },
  {
    id:'kl-03', pack:'life', level:3, type:'manners',
    scene:'🏠 被外教夸奖',
    situation:'你鼓起勇气用英语做了自我介绍，外教眼睛一亮，对你说：',
    quote:'Wow! Your English is very good!',
    note:'全班都看过来了，你有点不好意思。',
    ask:'这时候最好的回答是？',
    options:[
      { text:'No, no. My English is bad.', note:'中文式谦虚，英语里会让人尴尬', badge:'别否认', kind:'trap', ok:false,
        why:'一直否认等于说对方看走了眼，夸你的人反而不知道怎么接话。' },
      { text:"Thank you! I'm still learning.", note:'大方接受，还很谦虚', badge:'地道', kind:'native', ok:true,
        why:'先道谢，再加一句"我还在学"，既不失礼也不显得自满。' },
      { text:'I know.', note:'有点太自信了', badge:'小骄傲', kind:'stiff', ok:false,
        why:'意思是"我知道（我很棒）"，听起来有些自满。' }
    ],
    explain:'💡 中文习惯说"哪里哪里"，英语里被夸就大方说 Thank you!。想谦虚一点，可以接一句 I\'m still learning.（我还在学）或 Thanks, I practice every day.',
    takeaway:'被夸就说 Thank you!，别急着否认。'
  },
  {
    id:'kl-04', pack:'life', level:1, type:'listening',
    scene:'🏠 邻居阿姨问你',
    situation:'在小区里遇到外国邻居，她蹲下来笑着问你：',
    quote:'How old are you?',
    note:'你今年九岁。',
    ask:'她在问什么？该怎么答？',
    options:[
      { text:"I'm fine, thank you.", note:'听成了 How are you', badge:'听岔了', kind:'stiff', ok:false,
        why:'fine 和 nine 听起来很像，但人家问的是年龄，不是心情。' },
      { text:"I'm nine.", note:'问年龄，就回数字', badge:'答年龄', kind:'stiff', ok:true,
        why:'完整说法是 I\'m nine years old.，日常里说 I\'m nine. 就够了。' },
      { text:"It's nine o'clock.", note:'答成了时间', badge:'答时间', kind:'stiff', ok:false,
        why:'问时间要说 What time is it?，和年龄是两回事。' }
    ],
    explain:'💡 三句话长得像，别搞混：How are you?（你好吗）→ I\'m fine.；How old are you?（你几岁）→ I\'m nine.；What time is it?（几点了）→ It\'s nine o\'clock.',
    takeaway:"How old are you? → I'm nine."
  },
  {
    id:'kl-05', pack:'life', level:3, type:'listening',
    scene:'🏠 在同学家做客',
    situation:'同学的妈妈端上一盘饼干放在你面前，笑着说了一句：',
    quote:'Help yourself!',
    note:'说完她就去厨房了，桌上只剩你和饼干。',
    ask:'她的意思是？',
    options:[
      { text:'你自己随便吃，别客气', note:'招待客人的固定说法', badge:'请随意', kind:'stiff', ok:true,
        why:'Help yourself 就是"自己动手拿"，主人用它表示不用等我给你端。' },
      { text:'你要帮助你自己', note:'逐词直译，读不通', badge:'直译', kind:'stiff', ok:false,
        why:'help 在这句里不是"帮助"，整句是固定说法，不能一个词一个词地翻。' },
      { text:'你来帮我端一下', note:'主语反了', badge:'弄反了', kind:'stiff', ok:false,
        why:'让你帮忙会说 Can you help me?，主语完全不一样。' }
    ],
    explain:'💡 去外国人家里做客常听到三句：Help yourself!（随便吃）、Make yourself at home.（别拘束，当自己家）、Would you like some more?（再来点吗）。听懂了就不会僵在那儿。',
    takeaway:'Help yourself! = 别客气，自己拿。'
  },
  {
    id:'kl-06', pack:'life', level:2, type:'culture',
    scene:'🏠 打了个大喷嚏',
    situation:'上课时你没忍住打了个响亮的喷嚏，外教立刻转过头对你说：',
    quote:'Bless you!',
    note:'全班都笑了，你有点懵。',
    ask:'你应该怎么回应？',
    options:[
      { text:'Thank you.', note:'一句话就接住了', badge:'地道', kind:'native', ok:true,
        why:'Bless you 是别人打喷嚏时送出的祝福，收到祝福说声谢谢就对了。' },
      { text:'Sorry.', note:'不用道歉', badge:'没必要', kind:'stiff', ok:false,
        why:'打喷嚏不是做错事。真想客气可以说 Excuse me.，但老师这句显然在等一句 Thank you。' },
      { text:'Bless you!', note:'原句还回去，这次不行', badge:'不能照抄', kind:'trap', ok:false,
        why:'这句是说给打喷嚏的人听的，还回去等于祝老师也打个喷嚏。' }
    ],
    explain:'💡 英语国家的人听到别人打喷嚏，几乎会条件反射地说一句 Bless you!（保佑你）。不用觉得奇怪，回一句 Thank you. 就好。',
    takeaway:'别人说 Bless you! → 你说 Thank you.'
  },
  {
    id:'kl-07', pack:'life', level:3, type:'listening',
    scene:'🏠 在国外的快餐店',
    situation:'跟爸爸妈妈在国外点汉堡，店员敲完单子，抬头问了一句：',
    quote:'For here or to go?',
    note:'你们打算带回酒店吃。',
    ask:'她在问什么？',
    options:[
      { text:'在店里吃，还是打包带走', note:'快餐店的固定问句', badge:'堂食/打包', kind:'stiff', ok:true,
        why:'for here 是在店里吃，to go 是带走。要带走就回一句 To go, please.' },
      { text:'你们要去哪里吃', note:'店员不会关心你去哪儿', badge:'去哪儿', kind:'stiff', ok:false,
        why:'她问的是订单怎么装，不是问你们的行程。' },
      { text:'要不要现在就走', note:'把 go 理解成了"走人"', badge:'催你走', kind:'stiff', ok:false,
        why:'to go 在这里指"带走的食物"，不是在催顾客离开。' }
    ],
    explain:'💡 快餐店三连问听懂就不慌：What would you like?（要点什么）、For here or to go?（堂食还是带走）、Anything else?（还要别的吗）。带走就说 To go, please.',
    takeaway:'For here or to go? → 带走就说 To go, please.'
  },
  {
    id:'kl-08', pack:'life', level:1, type:'word',
    scene:'🏠 聊今天的天气',
    situation:'外教拉开窗帘，指着外面的大太阳问全班：',
    quote:"How's the weather today?",
    note:'今天是个大晴天。',
    ask:'你该怎么回答？',
    options:[
      { text:"It's Monday.", note:'答成了星期', badge:'星期', kind:'stiff', ok:false,
        why:'问星期是 What day is it today?，和天气不是一回事。' },
      { text:"It's sunny.", note:'天气就用 It\'s + 天气词', badge:'天气', kind:'stiff', ok:true,
        why:'说天气固定用 It\'s 开头：sunny（晴）、rainy（雨）、windy（风大）、cloudy（多云）。' },
      { text:"I'm fine.", note:'答成了心情', badge:'心情', kind:'stiff', ok:false,
        why:'这句是回答 How are you? 的，老师问的是外面的天气。' }
    ],
    explain:'💡 说天气永远用 It\'s 开头，主语不是"我"也不是"今天"：It\'s sunny / rainy / windy / cloudy / hot / cold。',
    takeaway:"How's the weather? → It's sunny."
  },
  {
    id:'kl-09', pack:'life', level:2, type:'phrase',
    scene:'🏠 跟老师说不舒服',
    situation:'上课上到一半你头很痛，举手告诉外教。她走过来关切地问：',
    quote:"What's wrong?",
    note:'你想说"我头疼"。',
    ask:'该怎么说？',
    options:[
      { text:'I have a headache.', note:'身体不舒服用 have', badge:'地道', kind:'native', ok:true,
        why:'英语里说生病用 have：have a headache（头疼）、have a cold（感冒）、have a fever（发烧）。' },
      { text:'I am headache.', note:'把自己说成了"头疼"本身', badge:'语法错', kind:'stiff', ok:false,
        why:'headache 是一种病，不是形容你的词，不能用 I am。' },
      { text:'My head is broken.', note:'听起来像脑袋碎了', badge:'吓人', kind:'trap', ok:false,
        why:'broken 用在东西坏掉上面，用在脑袋上会把老师吓一跳。' }
    ],
    explain:'💡 生病三句：I have a headache.（头疼）、I have a stomachache.（肚子疼）、I don\'t feel well.（我不舒服）。最后一句最万能，说不清哪儿难受时就用它。',
    takeaway:'不舒服 → I have a headache. / I don\'t feel well.'
  },
  {
    id:'kl-10', pack:'life', level:3, type:'listening',
    scene:'🏠 自己去买冰淇淋',
    situation:'你递过去一张十块的钞票，店员收好钱，把几个硬币放到你手上说：',
    quote:"Here's your change.",
    note:'她笑着等你拿好。',
    ask:'她给你的是什么？',
    options:[
      { text:'找给你的零钱', note:'change 在这里是"零钱"', badge:'零钱', kind:'stiff', ok:true,
        why:'买东西时的 change 就是找零，Keep the change. 则是"零钱不用找了"。' },
      { text:'你的变化', note:'把 change 直译成了"改变"', badge:'改变', kind:'stiff', ok:false,
        why:'change 确实有"改变"的意思，但在收银台它永远是"零钱"。' },
      { text:'让你换一个', note:'换东西要说 change it', badge:'换货', kind:'stiff', ok:false,
        why:'想换商品会说 Can I change it?，句子结构完全不一样。' }
    ],
    explain:'💡 一个词有好几个意思，要靠场景判断：收银台的 change 是零钱，天气预报的 change 是变化，换衣服的 change 是更换。先看在哪儿，再猜意思。',
    takeaway:"Here's your change. = 这是找你的零钱。"
  },
  {
    id:'kl-11', pack:'life', level:1, type:'listening',
    scene:'🏠 在国外的寄宿家庭',
    situation:'你在楼上写作业，楼下的阿姨朝楼梯口喊了一声：',
    quote:'Dinner is ready!',
    note:'厨房那边飘来了香味。',
    ask:'她在喊什么？',
    options:[
      { text:'开饭啦，快下来吃', note:'ready = 准备好了', badge:'开饭', kind:'stiff', ok:true,
        why:'饭做好了就是喊你下楼吃饭，听到这句赶紧应一声 Coming!' },
      { text:'晚饭还要再等一会儿', note:'意思正好相反', badge:'再等等', kind:'stiff', ok:false,
        why:'还没好会说 Dinner isn\'t ready yet.' },
      { text:'问你晚饭想吃什么', note:'不是在征求意见', badge:'问你', kind:'stiff', ok:false,
        why:'问你想吃什么是 What do you want for dinner?' }
    ],
    explain:'💡 家里常听到的三句：Dinner is ready!（开饭了）、Wash your hands.（去洗手）、Help yourself.（自己拿着吃）。听到第一句就该下楼了。',
    takeaway:'Dinner is ready! = 开饭啦，答一句 Coming!'
  },
  {
    id:'kl-12', pack:'life', level:2, type:'phrase',
    scene:'🏠 在同学家吃饭',
    situation:'你已经吃得饱饱的，同学的妈妈又端着盘子过来问：',
    quote:'Would you like some more?',
    note:'盘子都伸到你面前了。',
    ask:'想礼貌地说"我吃饱了"，该说？',
    options:[
      { text:"No, thank you. I'm full.", note:'先谢，再说吃饱了', badge:'地道', kind:'native', ok:true,
        why:'full 就是"饱了"。前面加一句 No, thank you.，才不会显得嫌弃人家的菜。' },
      { text:"No, I don't want.", note:'又硬又不完整', badge:'生硬', kind:'stiff', ok:false,
        why:'want 后面缺东西，语气也像在拒人千里之外。' },
      { text:"I'm very fat.", note:'把"饱"说成了"胖"', badge:'说错词', kind:'trap', ok:false,
        why:'full 是饱，fat 是胖。一词之差，说出口全桌都会愣住。' }
    ],
    explain:'💡 吃饱了说 I\'m full.；还想要就说 Yes, please.。想夸菜好吃再加一句 It\'s delicious!，主人会特别开心。',
    takeaway:"吃饱了 → No, thank you. I'm full."
  },
  {
    id:'kl-13', pack:'life', level:2, type:'listening',
    scene:'🏠 生日会切蛋糕',
    situation:'蛋糕上的蜡烛点好了，大家唱完生日歌，同学的妈妈笑着对你说：',
    quote:'Make a wish!',
    note:'所有人都看着你，等你吹蜡烛。',
    ask:'她让你做什么？',
    options:[
      { text:'许个愿', note:'wish = 愿望', badge:'许愿', kind:'stiff', ok:true,
        why:'make a wish 就是吹蜡烛之前先许个愿。' },
      { text:'做一个蛋糕', note:'做蛋糕是 make a cake', badge:'做蛋糕', kind:'stiff', ok:false,
        why:'蛋糕已经在桌上了，而且 wish 和 cake 差得远。' },
      { text:'去洗一下手', note:'wish 和 wash 看混了', badge:'洗手', kind:'stiff', ok:false,
        why:'wish（愿望）和 wash（洗）长得像，但不是一个词。' }
    ],
    explain:'💡 生日现场三句：Happy birthday!（生日快乐）、Make a wish!（许个愿）、Blow out the candles!（吹蜡烛）。注意 wish 和 wash 别看混。',
    takeaway:'Make a wish! = 许个愿吧。'
  },
  {
    id:'kl-14', pack:'life', level:3, type:'listening',
    scene:'🏠 下地铁的时候',
    situation:'跟着家人下地铁，站台边的工作人员看见你，提醒了一句：',
    quote:'Watch your step!',
    note:'车厢和站台之间有一道缝。',
    ask:'他在提醒你什么？',
    options:[
      { text:'当心脚下，小心台阶', note:'watch = 当心', badge:'小心', kind:'stiff', ok:true,
        why:'watch 在这里是"注意、当心"，不是"看"。' },
      { text:'看看你的鞋子', note:'step 不是鞋子', badge:'看鞋', kind:'stiff', ok:false,
        why:'step 是脚步、台阶，鞋子是 shoes。' },
      { text:'数一数走了几步', note:'和数数没关系', badge:'数步数', kind:'stiff', ok:false,
        why:'数步数会说 count your steps，那是完全不同的句子。' }
    ],
    explain:'💡 watch 常用来提醒危险：Watch your step!（当心脚下）、Watch out!（小心）、Watch your head!（当心碰头）。听到 watch 开头，先停一下准没错。',
    takeaway:'Watch your step! = 当心脚下。'
  },
  {
    id:'kl-15', pack:'life', level:1, type:'word',
    scene:'🏠 数一数有几个',
    situation:'外教把三个苹果摆在讲台上，指着它们问全班：',
    quote:'How many apples are there?',
    note:'桌上一共三个。',
    ask:'该怎么回答？',
    options:[
      { text:'Three.', note:'问数量，就回数字', badge:'数字', kind:'stiff', ok:true,
        why:'How many 问的是数量，回一个数字就够，说完整是 There are three.' },
      { text:'Apples.', note:'答成了名字', badge:'名字', kind:'stiff', ok:false,
        why:'回答名字用在 What are they? 上面。' },
      { text:"They're red.", note:'答成了颜色', badge:'颜色', kind:'stiff', ok:false,
        why:'这是回答 What color are they? 的。' }
    ],
    explain:'💡 又一次考"听问句开头"：How many…? 回数字，What…? 回名字，What color…? 回颜色。这三个问句练熟，回答就不会跑偏。',
    takeaway:'How many…? → 回数字：Three.'
  }

  ]);

  /* ---------- 🏠 生活篇（加餐） ---------- */
  EN.add('kids', 'life', [

  {
    id:'kl-16', pack:'life', level:1, type:'listening',
    scene:'🏠 有人敲门',
    situation:'你一个人在寄宿家庭的房间里写作业，忽然有人敲门，门外问了一句：',
    quote:'Who is it?',
    note:'看不见门外是谁，声音听着像阿姨。',
    ask:'这句 Who is it? 是在问什么？',
    options:[
      { text:'里面是谁 / 是谁在里面', note:'隔着门确认身份', badge:'地道', kind:'native', ok:true,
        why:'看不见人时问"是谁"用 Who is it?，你可以回 It\'s me, Lily.' },
      { text:'这是什么东西', note:'那是 What is it?', badge:'听岔了', kind:'trap', ok:false,
        why:'问"这是什么"是 What is it?；问"是谁"才是 Who is it?，一词之差。' },
      { text:'它在哪儿', note:'那是 Where is it?', badge:'听岔了', kind:'stiff', ok:false,
        why:'Where is it? 是问"在哪儿"，跟敲门认人无关。' }
    ],
    explain:'💡 隔着门、隔着电话看不见人时，问"是谁"用 Who is it?，回答用 It\'s me. / It\'s Lily.，而不是 I am Lily.',
    takeaway:'Who is it? = 是谁呀？回 It\'s me.'
  },
  {
    id:'kl-17', pack:'life', level:2, type:'social',
    scene:'🏠 看见阿姨在忙',
    situation:'寄宿家庭的阿姨一个人在厨房里摆碗筷、端菜，忙得团团转。',
    quote:'',
    note:'你想搭把手，又不知道能干点啥。',
    ask:'开口帮忙，哪句最自然？',
    options:[
      { text:'Can I help you?', note:'主动提出帮忙', badge:'地道', kind:'native', ok:true,
        why:'看到别人忙，主动问一句 Can I help you?（要我帮忙吗），既懂事又礼貌。' },
      { text:'You are tired.', note:'只是评论，没帮上忙', badge:'没接住', kind:'stiff', ok:false,
        why:'说"你累了"是关心，但没提出实际帮助，不如直接问 Can I help you?' },
      { text:'I help! I help!', note:'热情但不通顺', badge:'不地道', kind:'trap', ok:false,
        why:'光喊 I help 不成句，主动帮忙说 Can I help you? 或 Let me help you.' }
    ],
    explain:'💡 主动帮忙用 Can I help you? / Let me help you.；对方要是说 It\'s OK, thanks. 也别硬帮，笑一笑就好。',
    takeaway:'想搭把手 → Can I help you?'
  },
  {
    id:'kl-18', pack:'life', level:3, type:'social',
    scene:'🏠 遇到不爱吃的菜',
    situation:'寄宿家庭的阿姨端上一道你不太吃得惯的菜，笑眯眯地问你好不好吃。',
    quote:'Do you like it?',
    note:'你不太喜欢，但不想让她伤心。',
    ask:'怎么回答最得体？',
    options:[
      { text:"It's interesting. Thank you.", note:'委婉又不失礼貌', badge:'地道', kind:'native', ok:true,
        why:'不喜欢也别直说难吃，一句 It\'s interesting（挺特别的）加谢谢，既诚实又给对方留面子。' },
      { text:"I don't like it. It's bad.", note:'太直，会让人难堪', badge:'太冲', kind:'trap', ok:false,
        why:'当面说"难吃"很伤人，阿姨是专门为你做的，再不喜欢也要委婉。' },
      { text:'（皱眉不说话，把盘子推开）', note:'比说错话还失礼', badge:'没礼貌', kind:'stiff', ok:false,
        why:'一句不说还推开盘子，比说错话更让主人尴尬。' }
    ],
    explain:'💡 不喜欢的东西委婉说：It\'s interesting.（挺特别）、It\'s not really my favorite.（不太合我口味），再加句 Thank you。诚实和礼貌可以两全。',
    takeaway:'不爱吃 → It\'s interesting. Thank you.（委婉）'
  },
  {
    id:'kl-19', pack:'life', level:2, type:'listening',
    scene:'🏠 阿姨请你帮个忙',
    situation:'饭后阿姨指了指门口鼓鼓的垃圾袋，对你说：',
    quote:'Can you take out the trash?',
    note:'垃圾袋就在门边，装得满满的。',
    ask:'她在请你做什么？',
    options:[
      { text:'把垃圾拿出去扔掉', note:'take out the trash = 倒垃圾', badge:'地道', kind:'native', ok:true,
        why:'take out the trash 是"把垃圾拿出去扔"，你回一句 Sure! / OK! 再去做就好。' },
      { text:'把垃圾桶搬进来', note:'方向反了', badge:'听反了', kind:'trap', ok:false,
        why:'take out 是"拿出去"，不是搬进来。' },
      { text:'把东西从垃圾里翻出来', note:'想歪了', badge:'想多了', kind:'stiff', ok:false,
        why:'take out the trash 是固定说法"倒垃圾"，不是去翻找东西。' }
    ],
    explain:'💡 家务常用语：take out the trash（倒垃圾）、set the table（摆餐具）、wash the dishes（洗碗）。答应帮忙说 Sure! / No problem!',
    takeaway:'Can you take out the trash? = 帮忙倒个垃圾。'
  },
  {
    id:'kl-20', pack:'life', level:1, type:'phrase',
    scene:'🏠 想知道几点了',
    situation:'在同学家玩得正开心，你想知道几点了，好赶回家吃饭。',
    quote:'',
    note:'墙上没有钟，得开口问。',
    ask:'该怎么问时间？',
    options:[
      { text:'What time is it?', note:'问几点的固定说法', badge:'地道', kind:'native', ok:true,
        why:'问几点用 What time is it?，对方会回 It\'s six.（六点）之类。' },
      { text:'How much time?', note:'像在问"要多久"', badge:'问错了', kind:'trap', ok:false,
        why:'How much…? 是问数量或价钱，问几点要用 What time…?' },
      { text:'What is the clock?', note:'钟不是这么问的', badge:'中式', kind:'stiff', ok:false,
        why:'不能直译成"钟是什么"，问时间就是固定的 What time is it?' }
    ],
    explain:'💡 问时间：What time is it?（几点了）→ It\'s seven o\'clock.（七点）。别跟 How old are you?（几岁）搞混，一个问钟点一个问年龄。',
    takeaway:'问几点 → What time is it?'
  }

  ]);

  /* ---------- 🏠 生活篇（加餐 2） ---------- */
  EN.add('kids', 'life', [

  {
    id:'kl-21', pack:'life', level:2, type:'phrase',
    scene:'🏠 去看医生',
    situation:'你头疼得厉害，妈妈带你去看外国医生，医生问你哪里不舒服。',
    quote:"What's wrong?",
    note:'你想说"我头疼"。',
    ask:'该怎么说？',
    options:[
      { text:'I have a headache.', note:'说症状的固定句', badge:'地道', kind:'native', ok:true,
        why:'头疼就说 I have a headache；肚子疼是 I have a stomachache，都用 I have a …。' },
      { text:'My head is broken.', note:'吓人，还说错了', badge:'中式', kind:'trap', ok:false,
        why:'broken 是"摔坏了"，头疼要说 I have a headache 或 My head hurts.' },
      { text:'I am headache.', note:'把"疼"当成了"是"', badge:'语法错', kind:'stiff', ok:false,
        why:'不能说 I am headache，要用 I have a headache（我有个头疼）。' }
    ],
    explain:'💡 说不舒服用 I have a …：a headache（头疼）、a stomachache（肚子疼）、a cold（感冒）、a fever（发烧）。',
    takeaway:'头疼 → I have a headache.'
  },
  {
    id:'kl-22', pack:'life', level:2, type:'phrase',
    scene:'🏠 帮忙接电话',
    situation:'家里电话响了，大人都不在，你拿起听筒，对面找的是爸爸。',
    quote:'Hello, is your dad there?',
    note:'爸爸这会儿正好不在家。',
    ask:'该怎么礼貌地回？',
    options:[
      { text:"Sorry, he's not here now. Can I take a message?", note:'告知不在＋帮忙带话', badge:'地道', kind:'native', ok:true,
        why:'先说人不在 He\'s not here，再问 Can I take a message?（要留言吗），特别得体。' },
      { text:'No! Bye!', note:'直接挂断太冲', badge:'没礼貌', kind:'trap', ok:false,
        why:'一句 No 就挂太失礼，应该说明情况、问要不要留言。' },
      { text:'My dad is disappear.', note:'用词吓人还不对', badge:'中式', kind:'stiff', ok:false,
        why:'"不在家"是 not here / not in，不是 disappear（消失）。' }
    ],
    explain:'💡 接电话找的人不在：He\'s not here right now.（他现在不在）、Can I take a message?（要我带个话吗）。',
    takeaway:"人不在 → He's not here. Can I take a message?"
  },
  {
    id:'kl-23', pack:'life', level:2, type:'phrase',
    scene:'🏠 想借同学的东西',
    situation:'在同学家写作业，你的笔没墨了，想借他一支用。',
    quote:'',
    note:'他的笔筒里插着好几支。',
    ask:'该怎么开口最自然？',
    options:[
      { text:'Can I borrow your pen?', note:'我来借，用 borrow', badge:'地道', kind:'native', ok:true,
        why:'从别人那儿借进来用 borrow：Can I borrow your pen?（能借我用一下你的笔吗）。' },
      { text:'Can you borrow me your pen?', note:'borrow / lend 用反了', badge:'用反了', kind:'trap', ok:false,
        why:'别人借给你要用 lend：Can you lend me your pen? 自己借进来才用 borrow。' },
      { text:'Give me your pen.', note:'像在要，不像在借', badge:'太冲', kind:'stiff', ok:false,
        why:'Give me 像直接要走，借用要说 Can I borrow …?' }
    ],
    explain:'💡 一对容易反的词：borrow 是"借进来"（Can I borrow…?），lend 是"借出去"（Can you lend me…?）。用完记得还并说 Thank you。',
    takeaway:'借东西 → Can I borrow your pen?'
  },
  {
    id:'kl-24', pack:'life', level:1, type:'phrase',
    scene:'🏠 在同学家想上厕所',
    situation:'在外国同学家做客，你想上厕所，可不知道在哪儿。',
    quote:'',
    note:'总不好意思自己乱推门找。',
    ask:'该怎么问最有礼貌？',
    options:[
      { text:"Excuse me, where's the bathroom?", note:'问洗手间的地道说法', badge:'地道', kind:'native', ok:true,
        why:'在别人家问厕所，礼貌又常用的是 Where\'s the bathroom? 或 the restroom?' },
      { text:'Where is the WC?', note:'老外很少这么说', badge:'过时', kind:'stiff', ok:false,
        why:'WC 是老式说法，英美家里一般说 bathroom / restroom / toilet。' },
      { text:'I want pee!', note:'太直白了', badge:'不得体', kind:'trap', ok:false,
        why:'这么说太直白，礼貌的问法是 Where\'s the bathroom, please?' }
    ],
    explain:'💡 问厕所用 bathroom / restroom / toilet：Excuse me, where\'s the bathroom?。在别人家先说 Excuse me 更礼貌。',
    takeaway:"找厕所 → Excuse me, where's the bathroom?"
  },
  {
    id:'kl-25', pack:'life', level:2, type:'manners',
    scene:'🏠 离开寄宿家庭',
    situation:'夏令营结束，你要离开住了半个月的寄宿家庭，阿姨一家都来送你。',
    quote:'',
    note:'他们照顾了你这么久，你想好好道个谢。',
    ask:'临别道谢，哪句最真诚得体？',
    options:[
      { text:'Thank you for everything!', note:'一句话谢尽所有照顾', badge:'地道', kind:'native', ok:true,
        why:'Thank you for everything!（谢谢你们所做的一切）是最暖心的告别谢词。' },
      { text:'Bye.', note:'太轻描淡写', badge:'太冷淡', kind:'stiff', ok:false,
        why:'人家照顾了你半个月，只说一个 Bye 太单薄，先好好道谢。' },
      { text:'Thank you for everything money.', note:'多了个词还别扭', badge:'中式', kind:'trap', ok:false,
        why:'everything 后面不用加 money，直接 Thank you for everything! 就完整了。' }
    ],
    explain:'💡 深深道谢：Thank you for everything!（谢谢所有）、Thank you for having me.（谢谢招待）、I had a great time.（我过得很开心）。',
    takeaway:'临别道谢 → Thank you for everything!'
  }

  ]);

  /* ---------- 🏠 生活篇（加餐 3） ---------- */
  EN.add('kids', 'life', [

  {
    id:'kl-26', pack:'life', level:2, type:'phrase',
    scene:'🏠 寄宿家庭的早晨',
    situation:'在寄宿家庭住的第一晚过后，早上下楼吃早饭，阿姨笑着问你：',
    quote:'Did you sleep well?',
    note:'你昨晚睡得挺香。',
    ask:'最自然的回答是？',
    options:[
      { text:'Yes, I did. Thank you!', note:'过去式短答＋道谢', badge:'地道', kind:'native', ok:true,
        why:'Did you…? 的短答用 Yes, I did.，再谢一句，特别暖。' },
      { text:'Yes, I do.', note:'时态用错了', badge:'时态错', kind:'stiff', ok:false,
        why:'她问的是昨晚（过去），要用 did：Yes, I did.，不是 do。' },
      { text:'I sleep good.', note:'又直译又不对', badge:'中式', kind:'trap', ok:false,
        why:'"睡得好"是 I slept well.，good 要改成 well，动词也要过去式。' }
    ],
    explain:'💡 问昨天的事用 Did you…?：Did you sleep well?（睡得好吗）→ Yes, I did. / I slept well, thanks.',
    takeaway:'Did you sleep well? → Yes, I did. Thank you!'
  },
  {
    id:'kl-27', pack:'life', level:2, type:'listening',
    scene:'🏠 帮忙准备晚饭',
    situation:'快开饭了，寄宿家庭的阿姨端着菜从厨房出来，对你说：',
    quote:'Can you set the table?',
    note:'碗筷、盘子还都在柜子里。',
    ask:'她请你做什么？',
    options:[
      { text:'把碗筷、盘子摆到桌上', note:'set the table = 摆餐具', badge:'地道', kind:'native', ok:true,
        why:'set the table 是"摆好餐具"，把碗、盘、刀叉摆到桌上准备开饭。' },
      { text:'把桌子搬走', note:'想歪了', badge:'理解偏', kind:'trap', ok:false,
        why:'set the table 不是搬桌子，是把吃饭的家伙摆好。' },
      { text:'坐到桌子边去', note:'那是 sit at the table', badge:'听岔了', kind:'stiff', ok:false,
        why:'坐到桌边是 sit at the table，摆餐具是 set the table。' }
    ],
    explain:'💡 饭前家务：set the table（摆餐具）；饭后 clear the table（收桌子）、wash the dishes（洗碗）。答应就说 Sure!',
    takeaway:'Can you set the table? = 帮忙摆餐具。'
  },
  {
    id:'kl-28', pack:'life', level:2, type:'social',
    scene:'🏠 打翻了牛奶',
    situation:'吃早饭时你胳膊一碰，一整杯牛奶洒了一桌子。',
    quote:'',
    note:'牛奶正顺着桌沿往下滴。',
    ask:'该怎么说、怎么做最得体？',
    options:[
      { text:"I'm sorry! I'll clean it up.", note:'道歉＋主动收拾', badge:'地道', kind:'native', ok:true,
        why:'先 I\'m sorry! 道个歉，再 I\'ll clean it up.（我来擦干净），主动担当最好。' },
      { text:"It's not me!", note:'桌上就你一个还抵赖', badge:'不诚实', kind:'trap', ok:false,
        why:'明明是自己碰洒的，抵赖只会更尴尬，认了并收拾才对。' },
      { text:'（假装没看见，继续吃）', note:'装看不见更糟', badge:'没礼貌', kind:'stiff', ok:false,
        why:'洒了不管，牛奶会流得到处都是，主动说一声、擦一擦才懂事。' }
    ],
    explain:'💡 闯了小祸别慌：I\'m sorry!（对不起）、I\'ll clean it up.（我来收拾）、Where\'s the towel?（抹布在哪）。主动收拾比什么都强。',
    takeaway:"打翻东西 → I'm sorry! I'll clean it up."
  },
  {
    id:'kl-29', pack:'life', level:1, type:'manners',
    scene:'🏠 实在吃不下了',
    situation:'饭菜太香你吃了好多，阿姨又要给你添一勺，可你真的饱了。',
    quote:'Do you want some more?',
    note:'你一口都吃不下了。',
    ask:'该怎么礼貌地拒绝？',
    options:[
      { text:"I'm full, thank you. It was delicious!", note:'说饱了＋夸好吃', badge:'地道', kind:'native', ok:true,
        why:'I\'m full（我饱了）说清情况，再夸一句 It was delicious!，拒绝也让人开心。' },
      { text:'No! No more!', note:'又急又冲', badge:'太冲', kind:'trap', ok:false,
        why:'连声喊 No 会让阿姨以为你不爱吃，加 thank you 才柔和。' },
      { text:'My stomach is full water.', note:'逐字硬翻', badge:'中式', kind:'stiff', ok:false,
        why:'"我饱了"就是 I\'m full.，别一个字一个字地翻。' }
    ],
    explain:'💡 吃饱委婉拒绝：I\'m full, thank you.（我饱了）、No more, thanks.（不添了），再夸一句 It was delicious! 最贴心。',
    takeaway:"吃饱了 → I'm full, thank you. It was delicious!"
  },
  {
    id:'kl-30', pack:'life', level:1, type:'phrase',
    scene:'🏠 房间有点闷热',
    situation:'在同学家玩，屋里有点闷热，你想开窗透透气，但这是别人家。',
    quote:'',
    note:'开别人家的窗户，得先问一声。',
    ask:'该怎么问最有礼貌？',
    options:[
      { text:"It's hot. Can I open the window?", note:'说明原因＋请求', badge:'地道', kind:'native', ok:true,
        why:'先说 It\'s hot（有点热），再问 Can I open the window?（我能开窗吗），在别人家先问准没错。' },
      { text:'（自己走过去把窗户拉开）', note:'没打招呼就动手', badge:'不礼貌', kind:'trap', ok:false,
        why:'在别人家动东西前要先问一声，不然显得没礼貌。' },
      { text:'Open window!', note:'像在命令主人', badge:'太冲', kind:'stiff', ok:false,
        why:'光喊 Open window 像下令，要说 Can I open the window?' }
    ],
    explain:'💡 在别人家想做什么先问 Can I…?：Can I open the window?（开窗）、Can I sit here?（坐这儿）、Can I use the bathroom?（用洗手间）。',
    takeaway:"想开窗 → It's hot. Can I open the window?"
  }

  ]);

  /* ---------- 🏠 生活篇（加餐 4） ---------- */
  EN.add('kids', 'life', [

  {
    id:'kl-31', pack:'life', level:2, type:'phrase',
    scene:'🏠 想洗个澡',
    situation:'在寄宿家庭玩了一天，你出了一身汗，想去洗个澡。',
    quote:'',
    note:'用别人家的浴室，先问一声更礼貌。',
    ask:'该怎么问阿姨？',
    options:[
      { text:'Can I take a shower?', note:'洗澡的固定说法', badge:'地道', kind:'native', ok:true,
        why:'冲淋浴用 take a shower：Can I take a shower?（我能洗个澡吗），先问一声最有礼貌。' },
      { text:'Can I wash my body?', note:'逐字硬翻', badge:'中式', kind:'stiff', ok:false,
        why:'"洗澡"是 take a shower / take a bath，别一个字一个字地翻成 wash my body。' },
      { text:'I want water on me.', note:'谁也听不懂', badge:'不通顺', kind:'trap', ok:false,
        why:'这句读不通，洗澡就说 take a shower。' }
    ],
    explain:'💡 洗漱相关：take a shower（冲淋浴）、take a bath（泡澡）、brush my teeth（刷牙）、wash my hands（洗手）。',
    takeaway:'想洗澡 → Can I take a shower?'
  },
  {
    id:'kl-32', pack:'life', level:2, type:'listening',
    scene:'🏠 阿姨请你跑个腿',
    situation:'做饭做到一半，阿姨发现面包没了，掏出钱递给你说：',
    quote:'Can you go and get some bread?',
    note:'楼下就有家小超市。',
    ask:'她请你做什么？',
    options:[
      { text:'去买点面包回来', note:'go and get = 去买/去拿', badge:'地道', kind:'native', ok:true,
        why:'go and get some bread 就是"去买点面包"，你回一句 Sure! 再下楼就好。' },
      { text:'去把面包做出来', note:'不是让你做面包', badge:'理解偏', kind:'trap', ok:false,
        why:'get 是"去拿/去买"，不是让你自己烤面包。' },
      { text:'把面包扔掉', note:'想歪了', badge:'想歪了', kind:'stiff', ok:false,
        why:'get some bread 是买面包回来，不是扔面包。' }
    ],
    explain:'💡 跑腿常听：Can you go and get some…?（去买点…）、Can you bring me…?（帮我拿…）。答应就说 Sure! / No problem!',
    takeaway:'Can you go and get some bread? = 去买点面包。'
  },
  {
    id:'kl-33', pack:'life', level:1, type:'phrase',
    scene:'🏠 找不到鞋子了',
    situation:'早上要出门了，你却怎么也找不到自己的另一只鞋。',
    quote:'',
    note:'时间快来不及了，得赶紧问阿姨。',
    ask:'该怎么求助最清楚？',
    options:[
      { text:"I can't find my shoe. Have you seen it?", note:'说明情况＋求助', badge:'地道', kind:'native', ok:true,
        why:'I can\'t find …（我找不到…）说清了问题，再问 Have you seen it?（你看见了吗），阿姨就能帮你找。' },
      { text:'My shoe is lost forever!', note:'太夸张', badge:'太夸张', kind:'stiff', ok:false,
        why:'只是暂时找不到，说 lost forever（永远丢了）太夸张，用 I can\'t find it.' },
      { text:'Shoe? Shoe?', note:'光念名词', badge:'说不清', kind:'trap', ok:false,
        why:'光念 shoe 别人不知道你要干嘛，要说 I can\'t find my shoe.' }
    ],
    explain:'💡 找不到东西：I can\'t find my …（我找不到我的…）、Where is my …?（我的…在哪）、Have you seen it?（你看见了吗）。',
    takeaway:"找不到 → I can't find my shoe."
  },
  {
    id:'kl-34', pack:'life', level:2, type:'phrase',
    scene:'🏠 早餐想吃什么',
    situation:'寄宿家庭的早晨，阿姨打开冰箱，回头问你：',
    quote:'What would you like for breakfast?',
    note:'冰箱里有鸡蛋、面包和牛奶。',
    ask:'该怎么回答最自然礼貌？',
    options:[
      { text:'Bread and milk, please.', note:'说出想吃的＋please', badge:'地道', kind:'native', ok:true,
        why:'点吃的用"东西 + please"：Bread and milk, please.，又清楚又客气。' },
      { text:'I want eat egg.', note:'两个动词还漏词', badge:'语法错', kind:'stiff', ok:false,
        why:'want 后面要加 to：I want to eat…；更简单的是直接说 An egg, please.' },
      { text:'Anything is anything.', note:'谁也听不懂', badge:'不通顺', kind:'trap', ok:false,
        why:'想说"随便"可以讲 Anything is fine.，别硬拼词。' }
    ],
    explain:'💡 在家点餐：… , please.（要什么就说什么）、Anything is fine.（都行）、I\'m not hungry, thanks.（我不饿）。',
    takeaway:'早餐想吃 → Bread and milk, please.'
  },
  {
    id:'kl-35', pack:'life', level:1, type:'manners',
    scene:'🏠 寄宿家庭的睡前',
    situation:'在寄宿家庭住的晚上，睡觉前阿姨来到你房间，帮你关好灯。',
    quote:'Good night! Sleep well.',
    note:'她笑着轻轻带上门。',
    ask:'你该回哪一句最暖？',
    options:[
      { text:'Good night! You too.', note:'道晚安＋回祝', badge:'地道', kind:'native', ok:true,
        why:'互道 Good night!，再加句 You too.（你也是），温馨又礼貌。' },
      { text:'Good morning!', note:'时间说反了', badge:'说反了', kind:'trap', ok:false,
        why:'这会儿是睡前，要说 Good night，不是 Good morning。' },
      { text:'OK.', note:'太冷淡', badge:'冷场', kind:'stiff', ok:false,
        why:'人家来道晚安，只回一个 OK 有点冷，回 Good night! 才暖。' }
    ],
    explain:'💡 睡前互道：Good night!（晚安）、Sleep well.（睡个好觉）、Sweet dreams.（做个好梦）。回一句 You too. 就很贴心。',
    takeaway:'睡前 → Good night! You too.'
  }

  ]);

})(window.EN);
