/* ============================================================
   🧒 小学生入门 · 🎈 交朋友篇（31 题）
   只放数据。字段说明见 data/_core.js，加题直接往数组里追加对象。
   ============================================================ */
(function (EN) {
  "use strict";

  EN.add('kids', 'friend', [

  {
    id:'kf-01', pack:'friend', level:1, type:'phrase',
    scene:'🎈 想一起玩',
    situation:'课间，几个外国小朋友在操场上踢球，你也很想加入。',
    quote:'',
    note:'你走过去，他们停下来看着你。',
    ask:'该怎么开口？',
    options:[
      { text:'Give me the ball.', note:'像在命令别人', badge:'太冲', kind:'trap', ok:false,
        why:'没有 please 的祈使句听起来是在抢球，而不是想一起玩。' },
      { text:'I play with you.', note:'变成了通知，不是请求', badge:'生硬', kind:'stiff', ok:false,
        why:'陈述句听起来像"我要跟你玩"，少了商量的语气。' },
      { text:'Can I play with you?', note:'一句话就交到朋友', badge:'地道', kind:'native', ok:true,
        why:'Can I…? 是最简单的请求句，对方一般会说 Sure! 或 Of course!' }
    ],
    explain:'💡 想加入别人说 Can I join you? / Can I play with you?；想邀请别人就反过来说 Do you want to play with us?（要不要跟我们一起玩）。',
    takeaway:'想一起玩 → Can I play with you?'
  },
  {
    id:'kf-02', pack:'friend', level:2, type:'manners',
    scene:'🎈 撞到同学了',
    situation:'走廊上你跑得太快，一不小心撞到了迎面走来的同学。',
    quote:'',
    note:'他手里的书掉了一地。',
    ask:'这时候该说哪一句？',
    options:[
      { text:"I'm sorry!", note:'做错事要道歉', badge:'道歉', kind:'stiff', ok:true,
        why:'Sorry 用在自己做错了、给别人添了麻烦的时候，撞到人正是它。' },
      { text:'Excuse me.', note:'这是"劳驾、借过"', badge:'借过', kind:'stiff', ok:false,
        why:'Excuse me 用在想从别人身边过去、想打断别人说话之前，是提前打招呼，不是道歉。' },
      { text:'Never mind.', note:'这是别人道歉后你说的', badge:'回应', kind:'stiff', ok:false,
        why:'Never mind 意思是"没关系"，是用来回应道歉的，说反了角色。' }
    ],
    explain:'💡 三句话别搞混：做错事说 Sorry；想借过、想打断说 Excuse me；别人跟你道歉，你回 That\'s OK. 或 Never mind.',
    takeaway:'撞到人说 Sorry，想借过说 Excuse me。'
  },
  {
    id:'kf-03', pack:'friend', level:3, type:'listening',
    scene:'🎈 同学借你铅笔',
    situation:'你的铅笔断了，同桌从文具盒里抽出一支递给你，说了一句：',
    quote:'Here you are.',
    note:'笔已经递到你手上了。',
    ask:'你接过笔，应该说？',
    options:[
      { text:'Here you are.', note:'这是给东西的人说的', badge:'给出', kind:'stiff', ok:false,
        why:'Here you are 意思是"给你"，你是接的那一方，说这句就反了。' },
      { text:'Thank you!', note:'收到东西先道谢', badge:'道谢', kind:'stiff', ok:true,
        why:'拿到别人递来的东西，第一反应就是 Thank you.（或 Thanks!）' },
      { text:"You're welcome.", note:'这是别人谢你之后才说的', badge:'回应', kind:'stiff', ok:false,
        why:'You\'re welcome 是"不客气"，要等对方先说 Thank you 才轮到你说。' }
    ],
    explain:'💡 记住这条链：给东西的人说 Here you are.（给你）→ 收的人说 Thank you.（谢谢）→ 给的人再回 You\'re welcome.（不客气）。三句话一环扣一环，别插错位置。',
    takeaway:'Here you are → Thank you → You\'re welcome，顺序别搞反。'
  },
  {
    id:'kf-04', pack:'friend', level:2, type:'manners',
    scene:'🎈 同学摔倒了',
    situation:'课间同学在走廊上跑，一下子摔倒了，书本撒了一地。',
    quote:'',
    note:'你第一个跑过去。',
    ask:'想问一句"你还好吗"，该说？',
    options:[
      { text:"What's wrong with you?", note:'听起来像在责怪对方', badge:'伤人', kind:'trap', ok:false,
        why:'这句常带着"你有毛病吧"的语气，关心人千万别用它。' },
      { text:'Are you OK?', note:'关心人的第一句话', badge:'地道', kind:'native', ok:true,
        why:'又短又暖。摔倒了、生病了、看起来不开心，都能用这一句。' },
      { text:'You are OK?', note:'语序错了', badge:'语法错', kind:'stiff', ok:false,
        why:'问句要把 are 提到最前面：Are you OK?' }
    ],
    explain:'💡 关心别人的三句话：Are you OK?（你还好吗）、Does it hurt?（疼吗）、Let me help you.（我来帮你）。注意 What\'s wrong with you? 语气很重，想问"怎么了"说 What\'s wrong? 就够。',
    takeaway:'关心人 → Are you OK?'
  },
  {
    id:'kf-05', pack:'friend', level:2, type:'phrase',
    scene:'🎈 想分享零食',
    situation:'课间你打开一包饼干，同桌的外国小朋友看了一眼又转开了。',
    quote:'',
    note:'你想请他吃一块。',
    ask:'该怎么开口？',
    options:[
      { text:'Would you like some?', note:'请人吃东西的固定说法', badge:'地道', kind:'native', ok:true,
        why:'不用说完整的句子，一句 Would you like some? 递过去，对方就懂了。' },
      { text:'Do you want eat?', note:'两个动词挤在一起', badge:'语法错', kind:'stiff', ok:false,
        why:'want 后面要加 to：Do you want to eat some?，不过还是没有 Would you like 客气。' },
      { text:'Eat it.', note:'像在命令别人', badge:'太冲', kind:'trap', ok:false,
        why:'祈使句听起来像"给我吃了它"，请客变成了下命令。' }
    ],
    explain:'💡 Would you like…? 是英语里最客气的邀请句：Would you like some water?（喝点水吗）、Would you like to play with us?（要一起玩吗）。对方要就说 Yes, please.，不要就说 No, thank you.',
    takeaway:'请人吃东西 → Would you like some?'
  },
  {
    id:'kf-06', pack:'friend', level:3, type:'listening',
    scene:'🎈 轮流玩滑板',
    situation:'你和几个外国小朋友排队玩滑板，前面那个同学玩完了，把滑板推给你说：',
    quote:'Your turn!',
    note:'大家都看着你。',
    ask:'他的意思是？',
    options:[
      { text:'轮到你了', note:'turn = 轮次', badge:'轮流', kind:'stiff', ok:true,
        why:'turn 在这里是"轮到谁"的意思，完整说法是 It\'s your turn.' },
      { text:'你转个身', note:'把 turn 当成了"转身"', badge:'转身', kind:'stiff', ok:false,
        why:'turn 确实有"转"的意思，但让人转身会说 Turn around.' },
      { text:'你赢了', note:'和输赢没关系', badge:'输赢', kind:'stiff', ok:false,
        why:'赢了会说 You win! 或 You won!，跟 turn 无关。' }
    ],
    explain:'💡 排队和轮流的高频句：It\'s your turn.（轮到你了）、It\'s my turn.（轮到我了）、Wait your turn.（排队等着）。听懂 turn，玩游戏就不会插错队。',
    takeaway:'Your turn! = 轮到你了。'
  },
  {
    id:'kf-07', pack:'friend', level:3, type:'manners',
    scene:'🎈 门口撞上了',
    situation:'你和一个外国同学同时走到门口，两个人都停下来，谁也没先进去。',
    quote:'',
    note:'你想让他先走。',
    ask:'这时候该说？',
    options:[
      { text:'After you.', note:'两个词的绅士句', badge:'地道', kind:'native', ok:true,
        why:'意思是"你先请"。进门、上楼梯、排队时都能用，对方会回一句 Thank you.' },
      { text:'You first.', note:'能听懂，但有点生硬', badge:'生硬', kind:'stiff', ok:false,
        why:'像在下指令"你先"，礼貌程度差了一截。' },
      { text:'Go!', note:'像在发号施令', badge:'太冲', kind:'trap', ok:false,
        why:'单说一个 Go 是催人快走，用在这儿会显得很凶。' }
    ],
    explain:'💡 After you. 只有两个词，却能立刻显出教养，是英语里非常好用的礼貌句。别人对你说了 After you，记得回一句 Thank you. 再走。',
    takeaway:'让别人先走 → After you.'
  },
  {
    id:'kf-08', pack:'friend', level:2, type:'manners',
    scene:'🎈 收到生日礼物',
    situation:'生日会上，外国同学把包好的礼物递给你，还站在旁边等着看你拆。',
    quote:'',
    note:'你拆开一看，正是你想要的那本书。',
    ask:'这时候该说什么？',
    options:[
      { text:'How much is it?', note:'当面问价格很失礼', badge:'踩雷', kind:'trap', ok:false,
        why:'在英语国家问礼物多少钱是很不礼貌的，会让送礼的人非常尴尬。' },
      { text:'Thank you! I love it!', note:'道谢＋说出你的喜欢', badge:'地道', kind:'native', ok:true,
        why:'当面拆礼物、当面说喜欢，是英语国家的礼貌，对方会特别开心。' },
      { text:'I have this one.', note:'等于说"我已经有了"', badge:'扫兴', kind:'stiff', ok:false,
        why:'就算真的有了，也要先谢过再说，否则对方的心意就落空了。' }
    ],
    explain:'💡 收礼物的完整反应：当着对方的面拆开 → Thank you! I love it!（或 It\'s so nice!）。中国习惯是收下先放着，英语国家反而觉得当场拆开、当场夸才是尊重。',
    takeaway:'收到礼物 → Thank you! I love it!'
  },
  {
    id:'kf-09', pack:'friend', level:3, type:'listening',
    scene:'🎈 同学帮你捡起了书',
    situation:'你的书掉了一地，外国同学蹲下来帮你一起捡。你连忙说 Thank you，他摆摆手说：',
    quote:'No problem.',
    note:'说完他就笑着走开了。',
    ask:'他的意思是？',
    options:[
      { text:'不客气，小事一桩', note:'和 You\'re welcome 一个意思', badge:'不客气', kind:'stiff', ok:true,
        why:'No problem 是很随意的"不用谢"，同学、朋友之间用得最多。' },
      { text:'这件事没问题，我能做到', note:'把它当成了在打包票', badge:'保证', kind:'stiff', ok:false,
        why:'那种意思要看场景。这里你刚说完 Thank you，它只能是"不客气"。' },
      { text:'你没有问题要问吧', note:'和提问没关系', badge:'提问', kind:'stiff', ok:false,
        why:'问你有没有问题会说 Any questions?，句子完全不一样。' }
    ],
    explain:'💡 "不客气"有好几种说法，随意程度从高到低：No problem. / Sure. / You\'re welcome. / My pleasure.。听到哪一句，都表示对方不介意。',
    takeaway:'No problem. = 不客气（朋友之间最常用）。'
  },
  {
    id:'kf-10', pack:'friend', level:2, type:'manners',
    scene:'🎈 被邀请但去不了',
    situation:'外国同学兴冲冲跑来问你周末去不去他家玩，可你那天要上钢琴课。',
    quote:'Can you come to my house on Sunday?',
    note:'他眼睛亮亮地等你回答。',
    ask:'想拒绝又不想让他难过，该说？',
    options:[
      { text:'No.', note:'太硬了，像当面关门', badge:'冷硬', kind:'trap', ok:false,
        why:'一个 No 没有任何解释，对方会以为你不想跟他玩。' },
      { text:"Sorry, I can't. I have a piano lesson. Maybe next time!", note:'道歉＋原因＋下次', badge:'地道', kind:'native', ok:true,
        why:'三步走：先说抱歉，再给个理由，最后留一句 Maybe next time，友谊就保住了。' },
      { text:"I don't want.", note:'听起来像"我不想跟你玩"', badge:'伤人', kind:'stiff', ok:false,
        why:'句子本身也不完整（want 后面得跟东西），而且这个说法很伤人。' }
    ],
    explain:'💡 拒绝邀请有个万能公式：Sorry, I can\'t.（抱歉去不了）+ 一个理由 + Maybe next time!（下次吧）。有理由、有下次，对方就不会觉得被嫌弃。',
    takeaway:"拒绝邀请 → Sorry, I can't … Maybe next time!"
  },
  {
    id:'kf-11', pack:'friend', level:1, type:'phrase',
    scene:'🎈 书包拉链卡住了',
    situation:'书包拉链卡死了，你自己怎么弄都弄不开，旁边坐着外国同学。',
    quote:'',
    note:'你想请他搭把手。',
    ask:'该怎么开口？',
    options:[
      { text:'Can you help me, please?', note:'请人帮忙的万能句', badge:'地道', kind:'native', ok:true,
        why:'Can you…? 加上 please，礼貌又清楚，对方一般会说 Sure!' },
      { text:'Help me.', note:'像在喊救命', badge:'太急', kind:'stiff', ok:false,
        why:'单说 Help me 语气很急，容易把人吓一跳。' },
      { text:'You help me.', note:'像在指派任务', badge:'命令', kind:'trap', ok:false,
        why:'陈述句听起来是"你来帮我"，不是在请求别人。' }
    ],
    explain:'💡 请人帮忙：Can you help me, please? / Could you help me?；帮完记得说 Thank you.，对方会回一句 No problem.',
    takeaway:'请人帮忙 → Can you help me, please?'
  },
  {
    id:'kf-12', pack:'friend', level:2, type:'manners',
    scene:'🎈 同学穿了双新鞋',
    situation:'外国同学今天穿了双很酷的球鞋，一进教室就有人围过去看。',
    quote:'',
    note:'你也觉得挺好看，想说点什么。',
    ask:'想夸他一句，该说？',
    options:[
      { text:'I like your shoes!', note:'英语里最常见的夸人方式', badge:'地道', kind:'native', ok:true,
        why:'夸对方身上的东西是英语社交的日常，对方会笑着回一句 Thank you!' },
      { text:'How much are they?', note:'当面问价格很失礼', badge:'踩雷', kind:'trap', ok:false,
        why:'和问礼物多少钱一样，英语国家很忌讳当面聊价钱。' },
      { text:'Your shoes are very expensive.', note:'评论价钱，不算夸人', badge:'不合适', kind:'stiff', ok:false,
        why:'就算是好话，一扯到贵不贵也会让对方不自在。' }
    ],
    explain:'💡 夸人公式：I like your + 东西（I like your bag / your hair / your drawing）。被夸就回 Thank you!。记住一条：夸东西可以，问价钱不行。',
    takeaway:'夸人 → I like your shoes! 别问 How much.'
  },
  {
    id:'kf-13', pack:'friend', level:1, type:'listening',
    scene:'🎈 给同学看你的画',
    situation:'你把刚画完的画拿给外国同学看，他眼睛一亮，只说了一个词：',
    quote:'Cool!',
    note:'教室里挺暖和的，不冷。',
    ask:'他是什么意思？',
    options:[
      { text:'太酷了、真棒', note:'小朋友之间最常用的夸奖', badge:'夸你', kind:'stiff', ok:true,
        why:'cool 在口语里是"厉害、真棒"，跟温度没关系。' },
      { text:'有点冷', note:'当成了说天气', badge:'说天气', kind:'stiff', ok:false,
        why:'说冷会用 It\'s cold.，单蹦一个 Cool! 是在夸你。' },
      { text:'让你凉快一下', note:'那是 Cool down.', badge:'降温', kind:'stiff', ok:false,
        why:'多一个 down，意思就变成"冷静一下、凉快一下"了。' }
    ],
    explain:'💡 小朋友之间的夸奖词：Cool!（真酷）、Awesome!（太棒了）、Nice!（不错）、Well done!（做得好）。听到这些，大方回一句 Thanks! 就行。',
    takeaway:'Cool! = 真棒！回一句 Thanks!'
  },
  {
    id:'kf-14', pack:'friend', level:2, type:'manners',
    scene:'🎈 比赛输给了对手',
    situation:'班级足球赛你们队输了。对方队员跑过来伸出手，你心里还有点不甘心。',
    quote:'',
    note:'队友们都在看着你。',
    ask:'这时候最好的一句话是？',
    options:[
      { text:'You are lucky.', note:'等于说对方赢得侥幸', badge:'不服气', kind:'trap', ok:false,
        why:'把别人的胜利说成运气，听起来很没风度。' },
      { text:'Good game!', note:'赛后握手的固定说法', badge:'地道', kind:'native', ok:true,
        why:'不管输赢都说一句 Good game!，这是英语国家最基本的体育礼貌。' },
      { text:'I am not happy.', note:'把情绪甩给对方', badge:'尴尬', kind:'stiff', ok:false,
        why:'心情可以回家跟爸妈说，当场说出来只会让气氛僵住。' }
    ],
    explain:'💡 比赛结束的三句：Good game!（打得好）、Well played!（表现不错）、Congratulations!（恭喜你们）。输了也能大方说出口，才是真正的赢家。',
    takeaway:'比赛结束握手说 Good game!'
  },
  {
    id:'kf-15', pack:'friend', level:3, type:'listening',
    scene:'🎈 聊到都爱吃的东西',
    situation:'午饭时你说自己最喜欢吃披萨，对面的外国同学放下叉子，点着头说：',
    quote:'Same here.',
    note:'他说完还冲你笑了一下。',
    ask:'他的意思是？',
    options:[
      { text:'我也一样', note:'就是 Me too 的另一种说法', badge:'我也是', kind:'stiff', ok:true,
        why:'Same here 表示"我跟你一样"，朋友聊天时用得非常多。' },
      { text:'这里的东西都一样', note:'当成了在说食堂', badge:'说食物', kind:'stiff', ok:false,
        why:'说东西都一样会用 They\'re all the same.，句子结构完全不同。' },
      { text:'我们坐同一个位置', note:'把 here 当成了位置', badge:'说位置', kind:'stiff', ok:false,
        why:'here 在这句里没有实际的位置含义，它只是固定说法的一部分。' }
    ],
    explain:'💡 "我也是"有好几种说法：Me too. / Same here. / So do I.。但要注意：上课点名答"到"可不能用它们，那时候要说 Here!',
    takeaway:'Same here. = 我也一样（＝ Me too）。'
  },
  {
    id:'kf-16', pack:'friend', level:3, type:'listening',
    scene:'🛹 街头社交篇',
    heat:'🔥 10个做题家9个都翻车的地道俚语',
    situation:'放学后你在滑板公园玩，一个外国小朋友滑过来，盯着你的滑板喊了一句：',
    quote:"That's sick!",
    note:'他一脸兴奋，还冲你竖了个大拇指。',
    ask:'他其实是在说什么？',
    options:[
      { text:'你的滑板生病了', note:'中式直译', badge:'直译', kind:'trap', ok:false,
        why:'sick 在课本里是"生病的"，可滑板不会生病——一看就知道这里另有意思。' },
      { text:'你的滑板太恶心了', note:'字面误区', badge:'误会', kind:'trap', ok:false,
        why:'sick 确实有"恶心、想吐"的意思，但配上他兴奋的表情和大拇指，方向明显反了。' },
      { text:'你的滑板太酷炫了！', note:'地道美式街头俚语', badge:'地道', kind:'native', ok:true,
        why:'在美式口语里 sick 是高频夸奖词，等于 cool / awesome，滑板、球鞋、技术都能这么夸。' }
    ],
    explain:'💡 避坑：‘Sick’除了生病，在美式俚语里高频表示‘Cool / Awesome’（酷毙了）。千万别回‘It is healthy’哦！',
    takeaway:"That's sick! = 太酷了！回一句 Thanks! 就行。"
  }

  ]);

  /* ---------- 🎈 交朋友篇（加餐） ---------- */
  EN.add('kids', 'friend', [

  {
    id:'kf-17', pack:'friend', level:1, type:'social',
    scene:'🎈 朋友看起来不开心',
    situation:'课间你发现平时爱笑的外国同学一个人趴在桌上，闷闷不乐。',
    quote:'',
    note:'你想过去关心他一下。',
    ask:'第一句该怎么说？',
    options:[
      { text:'Are you OK?', note:'最自然的关心', badge:'地道', kind:'native', ok:true,
        why:'看到朋友不对劲，一句 Are you OK?（你还好吗）就是最贴心的开场。' },
      { text:'Why are you so sad?', note:'一上来就追问原因', badge:'太直接', kind:'stiff', ok:false,
        why:'不算错，但劈头就问"为什么难过"有点突兀，先问 Are you OK? 更柔和。' },
      { text:'Stop crying!', note:'像在命令', badge:'太冲', kind:'trap', ok:false,
        why:'叫人"别哭了"听起来像嫌弃，安慰人要先关心，不是下命令。' }
    ],
    explain:'💡 关心朋友的三句：Are you OK?（还好吗）、What\'s wrong?（怎么了）、Don\'t worry.（别担心）。先问一句，再慢慢听他说。',
    takeaway:'朋友不开心 → Are you OK?'
  },
  {
    id:'kf-18', pack:'friend', level:2, type:'culture',
    scene:'🎈 被同学夸奖',
    situation:'你跳绳跳得特别好，外国同学看得一愣一愣，冲你竖起大拇指：',
    quote:"Wow, you're so good!",
    note:'你有点不好意思。',
    ask:'该怎么回最自然？',
    options:[
      { text:'Thank you!', note:'大方接受夸奖', badge:'地道', kind:'native', ok:true,
        why:'英语里被夸就大方说 Thank you!，这不是骄傲，而是对对方好意的礼貌回应。' },
      { text:"No, no, I'm not good.", note:'中式谦虚，反而尴尬', badge:'中式', kind:'trap', ok:false,
        why:'连连否认"我不行"在英语里会让夸你的人不知所措，好像他看走了眼。' },
      { text:"Yes! I'm the best!", note:'又太自满了', badge:'太得意', kind:'stiff', ok:false,
        why:'大大方方谢一句就好，拍胸脯说"我最棒"又显得太得意。' }
    ],
    explain:'💡 中文习惯谦虚说"哪里哪里"，英语里被夸直接 Thank you! 就对了。想更谦虚可以加一句 I practice a lot.（我练了很久）。',
    takeaway:'被夸 → Thank you!（别一个劲否认）'
  },
  {
    id:'kf-19', pack:'friend', level:1, type:'phrase',
    scene:'🎈 被约一起玩',
    situation:'外国同学兴冲冲跑过来，抱着篮球问你：',
    quote:'Do you want to play basketball?',
    note:'你也正想活动活动。',
    ask:'想答应，哪句最热情自然？',
    options:[
      { text:'Sure! Sounds fun!', note:'爽快又带点期待', badge:'地道', kind:'native', ok:true,
        why:'Sure! 表示乐意，Sounds fun!（听起来很好玩）让对方感到你很期待。' },
      { text:'Yes.', note:'答应了，但太干', badge:'太冷淡', kind:'stiff', ok:false,
        why:'光一个 Yes 有点冷，加一句 Sounds fun! / Let\'s go! 才热情。' },
      { text:'Why not you play?', note:'把邀请顶了回去', badge:'不通顺', kind:'trap', ok:false,
        why:'这句又不通顺又像在推开对方，想去就直接 Sure! 答应。' }
    ],
    explain:'💡 答应邀请的热情说法：Sure! / OK! / Sounds fun! / Sounds good! / Let\'s go!。不想去就委婉说 Maybe next time.',
    takeaway:'想去 → Sure! Sounds fun!'
  },
  {
    id:'kf-20', pack:'friend', level:2, type:'social',
    scene:'🎈 弄坏了同学的东西',
    situation:'你借玩同学的玩具车，一不小心把轮子弄掉了。',
    quote:'',
    note:'同学看见了，脸色有点不好。',
    ask:'该怎么处理最得体？',
    options:[
      { text:"I'm so sorry. I'll fix it.", note:'先道歉再想办法', badge:'地道', kind:'native', ok:true,
        why:'先诚恳道歉 I\'m so sorry.，再主动提出补救 I\'ll fix it.（我来修好），最能让人消气。' },
      { text:"It's not my fault.", note:'急着撇清', badge:'太推卸', kind:'trap', ok:false,
        why:'明明是自己弄坏的，一句"不怪我"只会让同学更生气。' },
      { text:'（悄悄放回去，装作没事）', note:'比弄坏更糟', badge:'不诚实', kind:'stiff', ok:false,
        why:'偷偷藏起来被发现更伤感情，主动认错反而显得可靠。' }
    ],
    explain:'💡 弄坏别人东西：先 I\'m so sorry.（真对不起），再 I\'ll fix it. / I\'ll get you a new one.（我赔你一个）。担当比借口更让人信任。',
    takeaway:"弄坏东西 → I'm so sorry. I'll fix it."
  },
  {
    id:'kf-21', pack:'friend', level:1, type:'manners',
    scene:'🎈 同学请你吃东西',
    situation:'外国同学掰了一半巧克力，递到你面前：',
    quote:'Here, this is for you!',
    note:'他是真心想分你一块。',
    ask:'该怎么回最合适？',
    options:[
      { text:"Thanks! That's so nice of you.", note:'道谢＋夸对方好', badge:'地道', kind:'native', ok:true,
        why:'先谢一句，再夸 That\'s so nice of you（你人真好），对方听了会很开心。' },
      { text:"No, no, I can't take it.", note:'一味推辞反而扫兴', badge:'太见外', kind:'trap', ok:false,
        why:'朋友真心分享，老推辞会让人觉得见外，大方收下并道谢就好。' },
      { text:'Give me more!', note:'得寸进尺', badge:'太贪', kind:'stiff', ok:false,
        why:'人家分你一块已是好意，张口要更多就不礼貌了。' }
    ],
    explain:'💡 收下朋友的好意大方一点：Thanks! / That\'s so nice of you! / You\'re so kind!。收下不是贪心，是接住对方的心意。',
    takeaway:"被分享 → Thanks! That's so nice of you."
  }

  ]);

  /* ---------- 🎈 交朋友篇（加餐 2） ---------- */
  EN.add('kids', 'friend', [

  {
    id:'kf-22', pack:'friend', level:1, type:'phrase',
    scene:'🎈 想邀朋友来家里',
    situation:'周末快到了，你想请要好的外国同学来家里一起玩。',
    quote:'',
    note:'你想开口邀请他。',
    ask:'该怎么邀请最自然？',
    options:[
      { text:'Do you want to come to my house?', note:'邀请的常用句', badge:'地道', kind:'native', ok:true,
        why:'邀请别人用 Do you want to …? / Would you like to …?：来我家玩就是 come to my house.' },
      { text:'You come my house!', note:'像命令，还漏词', badge:'不通顺', kind:'stiff', ok:false,
        why:'漏了 to，语气也像命令，应该说 Do you want to come to my house?' },
      { text:'Come or not?', note:'太生硬，有点凶', badge:'太冲', kind:'trap', ok:false,
        why:'这么问像在逼人表态，邀请要客气：Do you want to come over?' }
    ],
    explain:'💡 邀请朋友：Do you want to come over?（来我家玩吗）、Let\'s hang out.（一起玩）。对方答应会说 Sure! / I\'d love to!',
    takeaway:'邀请 → Do you want to come to my house?'
  },
  {
    id:'kf-23', pack:'friend', level:1, type:'social',
    scene:'🎈 同学背了个新书包',
    situation:'外国同学今天背了个很酷的新书包，你很喜欢，想夸他一句。',
    quote:'',
    note:'一句真诚的夸奖能拉近距离。',
    ask:'该怎么夸最自然？',
    options:[
      { text:"I like your schoolbag! It's cool!", note:'夸具体的东西', badge:'地道', kind:'native', ok:true,
        why:'夸别人的东西用 I like your …！再加句 It\'s cool! / It\'s nice! 更真诚。' },
      { text:'Your schoolbag give me.', note:'夸着夸着变要东西了', badge:'不合适', kind:'trap', ok:false,
        why:'喜欢不等于要人家的东西，夸一句就好，别开口要。' },
      { text:'Schoolbag good.', note:'蹦词，不像句子', badge:'不通顺', kind:'stiff', ok:false,
        why:'蹦两个词不自然，完整说 I like your schoolbag.' }
    ],
    explain:'💡 夸人小公式：I like your …！（我喜欢你的…）、It\'s cool / nice / beautiful!。对方会开心地回 Thank you!',
    takeaway:"夸东西 → I like your schoolbag! It's cool!"
  },
  {
    id:'kf-24', pack:'friend', level:2, type:'phrase',
    scene:'🎈 有道题不会做',
    situation:'一道数学题你怎么都想不通，想请旁边的好朋友教你。',
    quote:'',
    note:'他这题刚好会。',
    ask:'该怎么请他帮忙？',
    options:[
      { text:'Can you help me with this?', note:'请人帮忙的固定句', badge:'地道', kind:'native', ok:true,
        why:'请人帮忙做某事用 help me with …：Can you help me with this?（能帮我看看这个吗）。' },
      { text:'You do it for me.', note:'像让人替你做', badge:'太冲', kind:'stiff', ok:false,
        why:'这是让他替你做，而不是请他帮你，语气也生硬。' },
      { text:'Help! Help!', note:'像出了大事', badge:'夸张', kind:'trap', ok:false,
        why:'光喊 Help! 像遇到危险，请人帮忙说 Can you help me with this?' }
    ],
    explain:'💡 请人帮忙：Can you help me?、Can you help me with my homework?（帮我看看作业）。别人帮了记得说 Thank you!',
    takeaway:'请人帮忙 → Can you help me with this?'
  },
  {
    id:'kf-25', pack:'friend', level:2, type:'social',
    scene:'🎈 朋友比赛输了',
    situation:'外国同学参加跑步比赛没拿到名次，垂头丧气地走回来。',
    quote:'',
    note:'他看起来很失落。',
    ask:'该怎么安慰他？',
    options:[
      { text:"It's OK. You did great! Maybe next time.", note:'先安慰再鼓励', badge:'地道', kind:'native', ok:true,
        why:'It\'s OK 让他别自责，You did great 肯定他，Maybe next time 给希望，特别暖。' },
      { text:'You are too slow.', note:'哪壶不开提哪壶', badge:'扎心', kind:'trap', ok:false,
        why:'他正难过，说"你太慢了"是往伤口上撒盐。' },
      { text:'Winning is everything.', note:'火上浇油', badge:'太冷酷', kind:'stiff', ok:false,
        why:'说"赢才是一切"会让他更难受，安慰要往宽处说。' }
    ],
    explain:'💡 安慰失利的朋友：It\'s OK.（没关系）、You did your best.（你尽力了）、Maybe next time.（下次再来）。',
    takeaway:"朋友输了 → It's OK. Maybe next time."
  },
  {
    id:'kf-26', pack:'friend', level:2, type:'social',
    scene:'🎈 想跟朋友和好',
    situation:'昨天你和好朋友闹了别扭，一整天没说话，今天你想主动和好。',
    quote:'',
    note:'其实你俩都有点后悔。',
    ask:'主动和好，哪句最合适？',
    options:[
      { text:"I'm sorry about yesterday. Are we still friends?", note:'先道歉再和好', badge:'地道', kind:'native', ok:true,
        why:'先为昨天道个歉，再问 Are we still friends?（我们还是朋友吧），最容易破冰。' },
      { text:'It was all your fault.', note:'一开口就翻旧账', badge:'太冲', kind:'trap', ok:false,
        why:'想和好却先怪对方，只会又吵起来。' },
      { text:'（继续假装没看见他）', note:'冷战下去更糟', badge:'太别扭', kind:'stiff', ok:false,
        why:'谁都不开口，别扭会一直僵着，主动一点反而轻松。' }
    ],
    explain:'💡 和好三句：I\'m sorry.（对不起）、Let\'s forget it.（算了吧）、Are we still friends?（还是朋友吧）。先低头的人更勇敢。',
    takeaway:"想和好 → I'm sorry. Are we still friends?"
  }

  ]);

  /* ---------- 🎈 交朋友篇（加餐 3） ---------- */
  EN.add('kids', 'friend', [

  {
    id:'kf-27', pack:'friend', level:2, type:'culture',
    scene:'🎈 夏令营要结束了',
    situation:'夏令营最后一天，要跟认识的外国朋友分别了，你想以后还能联系。',
    quote:'',
    note:'你有点舍不得。',
    ask:'临别想约定"保持联系"，该怎么说？',
    options:[
      { text:"Let's keep in touch!", note:'保持联系的固定说法', badge:'地道', kind:'native', ok:true,
        why:'keep in touch 就是"保持联系"，临别说 Let\'s keep in touch! 又暖又自然。' },
      { text:'Keep touching me.', note:'意思跑偏了', badge:'中式', kind:'trap', ok:false,
        why:'keep in touch 是固定短语，少了 in 意思就全变了，别拆开。' },
      { text:"Don't forget me.", note:'不算错，但有点伤感', badge:'偏消极', kind:'stiff', ok:false,
        why:'能听懂，但 Let\'s keep in touch! 更积极，是在约定继续联系。' }
    ],
    explain:'💡 道别想继续联系：Let\'s keep in touch!（保持联系）、Text me!（给我发消息）、See you online!（网上见）。',
    takeaway:"保持联系 → Let's keep in touch!"
  },
  {
    id:'kf-28', pack:'friend', level:2, type:'phrase',
    scene:'🎈 约好一起去玩',
    situation:'你和朋友约好放学去公园，得说清楚在哪儿、几点碰头。',
    quote:'',
    note:'不定清楚，容易等错地方。',
    ask:'该怎么把时间地点说清楚？',
    options:[
      { text:"Let's meet at the gate at three.", note:'地点＋时间都交代了', badge:'地道', kind:'native', ok:true,
        why:'meet at the gate（在校门口碰头）、at three（三点），地点和时间都用 at，一句说清。' },
      { text:'We go park.', note:'又漏词又没说清', badge:'不通顺', kind:'stiff', ok:false,
        why:'漏了 to，也没说几点在哪儿见，应该说 Let\'s meet at … at …。' },
      { text:'Meet you sometime.', note:'含糊，等于没约', badge:'太模糊', kind:'trap', ok:false,
        why:'sometime（某个时候）太含糊，约会要说清具体时间地点。' }
    ],
    explain:'💡 约见面说清两点：地点 meet at the gate / the park，时间 at three / after school。合起来 Let\'s meet at the gate at three.',
    takeaway:"约见面 → Let's meet at the gate at three."
  },
  {
    id:'kf-29', pack:'friend', level:1, type:'manners',
    scene:'🎈 朋友生病请假了',
    situation:'好朋友感冒发烧，在家休息好几天没来上学。你想给他捎句话。',
    quote:'',
    note:'你希望他快点好起来。',
    ask:'该说哪句最贴心？',
    options:[
      { text:'Get well soon!', note:'祝早日康复的固定说法', badge:'地道', kind:'native', ok:true,
        why:'祝生病的人快点好就说 Get well soon!（早日康复），简单又暖心。' },
      { text:'You are sick.', note:'只是陈述，没送祝福', badge:'没心意', kind:'stiff', ok:false,
        why:'说"你病了"是废话，要送祝福 Get well soon!' },
      { text:'Happy birthday!', note:'场合完全不对', badge:'用错了', kind:'trap', ok:false,
        why:'人家生病不是过生日，祝福要用 Get well soon!' }
    ],
    explain:'💡 关心生病的朋友：Get well soon!（早日康复）、Take care!（多保重）、I hope you feel better.（希望你好起来）。',
    takeaway:'朋友生病 → Get well soon!'
  },
  {
    id:'kf-30', pack:'friend', level:1, type:'phrase',
    scene:'🎈 分队做游戏',
    situation:'体育课分组比赛，你想拉外国同学到自己这队。',
    quote:'',
    note:'他还没被别的队选走。',
    ask:'该怎么邀请他最自然？',
    options:[
      { text:'Do you want to be on my team?', note:'邀请入队的常用句', badge:'地道', kind:'native', ok:true,
        why:'在……队里用 on my team：Do you want to be on my team?（想不想跟我一队）。' },
      { text:'You in my team!', note:'像命令，介词也不对', badge:'太冲', kind:'stiff', ok:false,
        why:'既像下令，介词也该用 on（on my team），要问 Do you want to be on my team?' },
      { text:'Come my team fast!', note:'又急又不通顺', badge:'不通顺', kind:'trap', ok:false,
        why:'催得又急句子又不对，邀请要客气：Do you want to be on my team?' }
    ],
    explain:'💡 邀人入队：Do you want to be on my team?、Let\'s be a team!。注意是 on a team（在队里），介词别用错。',
    takeaway:'拉人入队 → Do you want to be on my team?'
  },
  {
    id:'kf-31', pack:'friend', level:2, type:'social',
    scene:'🎈 朋友要跟你说悄悄话',
    situation:'外国同学神秘兮兮地凑过来，说有件事只告诉你，先问了一句：',
    quote:'Can you keep a secret?',
    note:'他想确认你不会说出去。',
    ask:'该怎么回让他放心？',
    options:[
      { text:"Sure! I won't tell anyone.", note:'答应＋保证', badge:'地道', kind:'native', ok:true,
        why:'keep a secret 是"保守秘密"，回 I won\'t tell anyone.（我不会告诉别人）让他放心。' },
      { text:'Tell me! Tell me!', note:'只顾着催，没做保证', badge:'太心急', kind:'stiff', ok:false,
        why:'他是在问你能不能保密，光催他说没回答他的问题。' },
      { text:'I tell everyone!', note:'开玩笑也别这么说', badge:'踩雷', kind:'trap', ok:false,
        why:'说"我要告诉所有人"，谁还敢跟你说秘密。' }
    ],
    explain:'💡 答应保密：Can you keep a secret? → Sure!、I won\'t tell anyone.（我谁都不告诉）、Your secret is safe with me.（放心，我不说）。',
    takeaway:"保守秘密 → Sure! I won't tell anyone."
  }

  ]);

})(window.EN);
