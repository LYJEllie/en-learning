/* ============================================================
   🐣 启蒙 L1 · 认单词（72 题 · 认物 / 颜色数字 / 动物 各 24 题）
   ------------------------------------------------------------
   最低门槛的一档：题面不需要读英文句子，只有一个大号 emoji，
   选项就是三个单词。干扰项按"形近 / 音近 / 同类混淆"设计。
   三个选项一律同色（纯认词题，颜色不该泄题）。
   只放数据。字段说明见 data/_core.js。
   ============================================================ */
(function (EN) {
  "use strict";

  /* ---------- 🍎 认物篇 ---------- */
  EN.add('starter1', 'things', [

  {
    id:'a-01', pack:'things', level:1, type:'word',
    scene:'🍎 认物篇',
    emoji:'🍎',
    situation:'外教举起一个红红圆圆的水果，指着它等你说出英语名字。',
    quote:'',
    note:'它又甜又脆，咬一口很响。',
    ask:'这个用英语怎么说？',
    options:[
      { text:'apple', note:'苹果', badge:'苹果', kind:'stiff', ok:true,
        why:'apple 就是苹果。' },
      { text:'orange', note:'橙子', badge:'橙子', kind:'stiff', ok:false,
        why:'orange 是橙子，同时也是"橙色"。' },
      { text:'banana', note:'香蕉', badge:'香蕉', kind:'stiff', ok:false,
        why:'banana 是香蕉，黄黄长长的那个。' }
    ],
    explain:'💡 三个水果一起记：apple 🍎 苹果、orange 🍊 橙子、banana 🍌 香蕉。',
    takeaway:'apple = 苹果 🍎'
  },
  {
    id:'a-02', pack:'things', level:1, type:'word',
    scene:'🍎 认物篇',
    emoji:'✏️',
    situation:'同桌指着你笔袋里那支写错了能擦掉的笔。',
    quote:'',
    note:'它后面还带着一小块橡皮。',
    ask:'这个用英语怎么说？',
    options:[
      { text:'pencil', note:'铅笔', badge:'铅笔', kind:'stiff', ok:true,
        why:'pencil 是铅笔，写错了能擦掉。' },
      { text:'pen', note:'钢笔、圆珠笔', badge:'钢笔', kind:'stiff', ok:false,
        why:'pen 写下去就擦不掉了。' },
      { text:'book', note:'书', badge:'书', kind:'stiff', ok:false,
        why:'book 是书本，不是笔。' }
    ],
    explain:'💡 能擦掉的是 pencil（铅笔），擦不掉的是 pen（笔）。这两个词最容易记混。',
    takeaway:'pencil = 铅笔 ✏️'
  },
  {
    id:'a-03', pack:'things', level:2, type:'word',
    scene:'🍎 认物篇',
    emoji:'🥚',
    situation:'早餐盘子里有个白白圆圆的东西，是母鸡生的。',
    quote:'',
    note:'煮熟了里面是黄的。',
    ask:'这个用英语怎么说？',
    options:[
      { text:'egg', note:'鸡蛋', badge:'鸡蛋', kind:'stiff', ok:true,
        why:'egg 是鸡蛋。' },
      { text:'leg', note:'腿', badge:'腿', kind:'stiff', ok:false,
        why:'leg 是腿，和 egg 只差开头一个音。' },
      { text:'eye', note:'眼睛', badge:'眼睛', kind:'stiff', ok:false,
        why:'eye 是眼睛，长在脸上的。' }
    ],
    explain:'💡 egg（鸡蛋）和 leg（腿）听起来特别像，差在最前面那个音。',
    takeaway:'egg = 鸡蛋 🥚'
  },
  {
    id:'a-04', pack:'things', level:2, type:'word',
    scene:'🍎 认物篇',
    emoji:'🎩',
    situation:'外教从袋子里拿出一个东西，戴到了自己头上。',
    quote:'',
    note:'它戴在头上，不会喵喵叫。',
    ask:'这个用英语怎么说？',
    options:[
      { text:'hat', note:'帽子', badge:'帽子', kind:'stiff', ok:true,
        why:'hat 是帽子，戴在头上。' },
      { text:'cat', note:'猫', badge:'猫', kind:'stiff', ok:false,
        why:'cat 是猫，和 hat 只差第一个字母。' },
      { text:'hand', note:'手', badge:'手', kind:'stiff', ok:false,
        why:'hand 是手，也是 h 开头，但不是这个。' }
    ],
    explain:'💡 只差一个字母的一家人：hat（帽子）／cat（猫）／bat（蝙蝠）。听清最前面那个音就不会错。',
    takeaway:'hat = 帽子 🎩'
  }

  ]);

  /* ---------- 🎨 颜色数字篇 ---------- */
  EN.add('starter1', 'color', [

  {
    id:'a-05', pack:'color', level:1, type:'word',
    scene:'🎨 颜色数字篇',
    emoji:'🍓',
    situation:'外教举起一个红红的草莓，让大家说出它的颜色。',
    quote:'',
    note:'和消防车、国旗一个颜色。',
    ask:'这个颜色用英语怎么说？',
    options:[
      { text:'red', note:'红色', badge:'红', kind:'stiff', ok:true,
        why:'red 是红色。' },
      { text:'blue', note:'蓝色', badge:'蓝', kind:'stiff', ok:false,
        why:'blue 是蓝色，像天空和大海。' },
      { text:'green', note:'绿色', badge:'绿', kind:'stiff', ok:false,
        why:'green 是绿色，像树叶和小草。' }
    ],
    explain:'💡 三个最常用的颜色：red 红、blue 蓝、green 绿。以后说颜色用 It\'s red. 这种句子。',
    takeaway:'red = 红色 🔴'
  },
  {
    id:'a-06', pack:'color', level:1, type:'word',
    scene:'🎨 颜色数字篇',
    emoji:'🌳',
    situation:'外教指着窗外那棵大树上绿油油的叶子。',
    quote:'',
    note:'小草也是这个颜色。',
    ask:'这个颜色用英语怎么说？',
    options:[
      { text:'green', note:'绿色', badge:'绿', kind:'stiff', ok:true,
        why:'green 是绿色，树叶和小草的颜色。' },
      { text:'yellow', note:'黄色', badge:'黄', kind:'stiff', ok:false,
        why:'yellow 是黄色，香蕉和太阳的颜色。' },
      { text:'black', note:'黑色', badge:'黑', kind:'stiff', ok:false,
        why:'black 是黑色，晚上天空的颜色。' }
    ],
    explain:'💡 颜色配对着记最快：tree → green、sun → yellow、sky → blue、night → black。',
    takeaway:'green = 绿色 🌳'
  },
  {
    id:'a-07', pack:'color', level:1, type:'word',
    scene:'🎨 颜色数字篇',
    emoji:'✌️',
    situation:'外教举起两根手指，让大家用英语说出这个数。',
    quote:'',
    note:'比一多一个。',
    ask:'这个数字用英语怎么说？',
    options:[
      { text:'two', note:'二', badge:'2', kind:'stiff', ok:true,
        why:'two 是二。' },
      { text:'ten', note:'十', badge:'10', kind:'stiff', ok:false,
        why:'ten 是十，要两只手全张开。' },
      { text:'twelve', note:'十二', badge:'12', kind:'stiff', ok:false,
        why:'twelve 是十二，比两个多多了。' }
    ],
    explain:'💡 先把 1 到 5 背熟：one、two、three、four、five。数东西时用手指点着数。',
    takeaway:'two = 二 ✌️'
  },
  {
    id:'a-08', pack:'color', level:2, type:'word',
    scene:'🎨 颜色数字篇',
    emoji:'🎈🎈🎈🎈🎈',
    situation:'黑板上画了一排气球，外教让大家数一数一共几个。',
    quote:'',
    note:'一只手的手指头那么多。',
    ask:'这个数字用英语怎么说？',
    options:[
      { text:'five', note:'五', badge:'5', kind:'stiff', ok:true,
        why:'five 是五，正好一只手。' },
      { text:'four', note:'四', badge:'4', kind:'stiff', ok:false,
        why:'four 是四，比五少一个。' },
      { text:'nine', note:'九', badge:'9', kind:'stiff', ok:false,
        why:'nine 是九，比五多不少。' }
    ],
    explain:'💡 four（四）和 five（五）都是 f 开头，最容易记混。记法：five 是一只手 🖐️。',
    takeaway:'five = 五 🖐️'
  }

  ]);

  /* ---------- 🐶 动物篇 ---------- */
  EN.add('starter1', 'animal', [

  {
    id:'a-09', pack:'animal', level:1, type:'word',
    scene:'🐶 动物篇',
    emoji:'🐶',
    situation:'照片上的小动物摇着尾巴，会看家。',
    quote:'',
    note:'它见到主人会汪汪叫。',
    ask:'这个动物用英语怎么说？',
    options:[
      { text:'dog', note:'狗', badge:'狗', kind:'stiff', ok:true,
        why:'dog 是狗。' },
      { text:'cat', note:'猫', badge:'猫', kind:'stiff', ok:false,
        why:'cat 是猫，会喵喵叫。' },
      { text:'pig', note:'猪', badge:'猪', kind:'stiff', ok:false,
        why:'pig 是猪，胖胖的粉色。' }
    ],
    explain:'💡 最常见的三种小动物：dog 狗、cat 猫、bird 鸟。',
    takeaway:'dog = 狗 🐶'
  },
  {
    id:'a-10', pack:'animal', level:2, type:'word',
    scene:'🐶 动物篇',
    emoji:'🐒',
    situation:'照片上的动物正抓着树枝荡来荡去，最爱吃香蕉。',
    quote:'',
    note:'它很会爬树。',
    ask:'这个动物用英语怎么说？',
    options:[
      { text:'monkey', note:'猴子', badge:'猴子', kind:'stiff', ok:true,
        why:'monkey 是猴子，会爬树。' },
      { text:'donkey', note:'驴', badge:'驴', kind:'stiff', ok:false,
        why:'donkey 是驴，不会爬树，和 monkey 只差一个字母。' },
      { text:'mouse', note:'老鼠', badge:'老鼠', kind:'stiff', ok:false,
        why:'mouse 是老鼠，小小的。' }
    ],
    explain:'💡 monkey（猴子）和 donkey（驴）长得太像了。记法：猴子的 m 就是"猛爬树"的 m。',
    takeaway:'monkey = 猴子 🐒'
  },
  {
    id:'a-11', pack:'animal', level:1, type:'word',
    scene:'🐶 动物篇',
    emoji:'🐟',
    situation:'鱼缸里有个小动物，一直在水里摆着尾巴游。',
    quote:'',
    note:'它离开水就活不了。',
    ask:'这个动物用英语怎么说？',
    options:[
      { text:'fish', note:'鱼', badge:'鱼', kind:'stiff', ok:true,
        why:'fish 是鱼，在水里游。' },
      { text:'bird', note:'鸟', badge:'鸟', kind:'stiff', ok:false,
        why:'bird 是鸟，在天上飞。' },
      { text:'frog', note:'青蛙', badge:'青蛙', kind:'stiff', ok:false,
        why:'frog 是青蛙，会跳，水里岸上都能待。' }
    ],
    explain:'💡 fish 有点特别：一条是 fish，很多条还是 fish，不用加 s。',
    takeaway:'fish = 鱼 🐟'
  },
  {
    id:'a-12', pack:'animal', level:2, type:'word',
    scene:'🐶 动物篇',
    emoji:'🐰',
    situation:'外教举起一只玩偶，它的耳朵长长的，最爱吃胡萝卜。',
    quote:'',
    note:'它一蹦一蹦地走路。',
    ask:'这个动物用英语怎么说？',
    options:[
      { text:'rabbit', note:'兔子', badge:'兔子', kind:'stiff', ok:true,
        why:'rabbit 是兔子，耳朵长长的。' },
      { text:'rat', note:'老鼠', badge:'老鼠', kind:'stiff', ok:false,
        why:'rat 是老鼠，耳朵小小的，尾巴长长的。' },
      { text:'cat', note:'猫', badge:'猫', kind:'stiff', ok:false,
        why:'cat 是猫，耳朵是尖尖的三角形。' }
    ],
    explain:'💡 两个 r 开头的小动物：rabbit（兔子，耳朵长）和 rat（老鼠，尾巴长）。',
    takeaway:'rabbit = 兔子 🐰'
  }

  ]);

  /* ---------- 🍎 认物篇（加餐） ---------- */
  EN.add('starter1', 'things', [

  {
    id:'a-13', pack:'things', level:1, type:'word',
    scene:'🍎 认物篇',
    emoji:'🚗',
    situation:'外教举起一个玩具，它有四个轮子，会在地上跑。',
    quote:'',
    note:'爸爸开的那个大的也是它。',
    ask:'这个用英语怎么说？',
    options:[
      { text:'car', note:'小汽车', badge:'汽车', kind:'stiff', ok:true,
        why:'car 是小汽车，有四个轮子。' },
      { text:'bus', note:'公交车', badge:'公交', kind:'stiff', ok:false,
        why:'bus 是公交车，大大的，能坐好多人。' },
      { text:'cat', note:'猫', badge:'猫', kind:'stiff', ok:false,
        why:'cat 是猫，会喵喵叫，和 car 只差最后一个字母。' }
    ],
    explain:'💡 会跑的三样：car 小汽车、bus 公交车、bike 自行车。car 和 cat 只差一个字母，别看错。',
    takeaway:'car = 小汽车 🚗'
  },
  {
    id:'a-14', pack:'things', level:1, type:'word',
    scene:'🍎 认物篇',
    emoji:'🎒',
    situation:'上学要背的那个东西，里面装着课本和铅笔。',
    quote:'',
    note:'背在肩膀上，有两条带子。',
    ask:'这个用英语怎么说？',
    options:[
      { text:'bag', note:'书包、包', badge:'书包', kind:'stiff', ok:true,
        why:'bag 是包，书包也用它。' },
      { text:'box', note:'盒子、箱子', badge:'盒子', kind:'stiff', ok:false,
        why:'box 是盒子，方方硬硬的。' },
      { text:'bed', note:'床', badge:'床', kind:'stiff', ok:false,
        why:'bed 是床，睡觉用的。' }
    ],
    explain:'💡 三个 b 开头的东西：bag 包、box 盒子、bed 床。开头都是 b，中间的音不一样。',
    takeaway:'bag = 书包 🎒'
  },
  {
    id:'a-15', pack:'things', level:2, type:'word',
    scene:'🍎 认物篇',
    emoji:'⚽',
    situation:'体育课上外教抱着一个圆圆的东西，能踢能拍能扔。',
    quote:'',
    note:'踢它、拍它，它会弹起来。',
    ask:'这个用英语怎么说？',
    options:[
      { text:'ball', note:'球', badge:'球', kind:'stiff', ok:true,
        why:'ball 是球，圆圆的能弹。' },
      { text:'doll', note:'洋娃娃', badge:'娃娃', kind:'stiff', ok:false,
        why:'doll 是洋娃娃，和 ball 听起来有点像。' },
      { text:'bell', note:'铃铛', badge:'铃铛', kind:'stiff', ok:false,
        why:'bell 是铃铛，会叮叮响。' }
    ],
    explain:'💡 ball（球）、doll（娃娃）、bell（铃铛）听起来像三兄弟，中间的音各不同。',
    takeaway:'ball = 球 ⚽'
  },
  {
    id:'a-16', pack:'things', level:2, type:'word',
    scene:'🍎 认物篇',
    emoji:'🥛',
    situation:'早餐桌上有一杯白白的饮料，是从奶牛那儿来的。',
    quote:'',
    note:'每天早上喝一杯，长得高。',
    ask:'这个用英语怎么说？',
    options:[
      { text:'milk', note:'牛奶', badge:'牛奶', kind:'stiff', ok:true,
        why:'milk 是牛奶，白白的。' },
      { text:'water', note:'水', badge:'水', kind:'stiff', ok:false,
        why:'water 是水，透明没颜色。' },
      { text:'juice', note:'果汁', badge:'果汁', kind:'stiff', ok:false,
        why:'juice 是果汁，用水果榨的。' }
    ],
    explain:'💡 三种喝的：milk 牛奶、water 水、juice 果汁。渴了想喝的都能用 Can I have some…?',
    takeaway:'milk = 牛奶 🥛'
  }

  ]);

  /* ---------- 🎨 颜色数字篇（加餐） ---------- */
  EN.add('starter1', 'color', [

  {
    id:'a-17', pack:'color', level:1, type:'word',
    scene:'🎨 颜色数字篇',
    emoji:'🌊',
    situation:'外教指着画上的大海和天空，让大家说出这个颜色。',
    quote:'',
    note:'晴天的天空也是它。',
    ask:'这个颜色用英语怎么说？',
    options:[
      { text:'blue', note:'蓝色', badge:'蓝', kind:'stiff', ok:true,
        why:'blue 是蓝色，天空和大海的颜色。' },
      { text:'green', note:'绿色', badge:'绿', kind:'stiff', ok:false,
        why:'green 是绿色，树叶的颜色。' },
      { text:'black', note:'黑色', badge:'黑', kind:'stiff', ok:false,
        why:'black 是黑色，晚上天空的颜色。' }
    ],
    explain:'💡 天上海里都是 blue（蓝）。配着记：sky 天空、sea 大海 → blue。',
    takeaway:'blue = 蓝色 🌊'
  },
  {
    id:'a-18', pack:'color', level:1, type:'word',
    scene:'🎨 颜色数字篇',
    emoji:'🍋',
    situation:'外教举起一个酸酸的柠檬，让大家说出它的颜色。',
    quote:'',
    note:'太阳和香蕉也是这个颜色。',
    ask:'这个颜色用英语怎么说？',
    options:[
      { text:'yellow', note:'黄色', badge:'黄', kind:'stiff', ok:true,
        why:'yellow 是黄色，柠檬和香蕉的颜色。' },
      { text:'orange', note:'橙色', badge:'橙', kind:'stiff', ok:false,
        why:'orange 是橙色，也是"橙子"，比黄色深一点。' },
      { text:'red', note:'红色', badge:'红', kind:'stiff', ok:false,
        why:'red 是红色，草莓和消防车的颜色。' }
    ],
    explain:'💡 黄和橙最容易看混：yellow（黄，像柠檬）比 orange（橙，像橙子）浅。',
    takeaway:'yellow = 黄色 🍋'
  },
  {
    id:'a-19', pack:'color', level:1, type:'word',
    scene:'🎨 颜色数字篇',
    emoji:'☝️',
    situation:'外教竖起一根手指，让大家用英语说出这个数。',
    quote:'',
    note:'最小的那个数，就一个。',
    ask:'这个数字用英语怎么说？',
    options:[
      { text:'one', note:'一', badge:'1', kind:'stiff', ok:true,
        why:'one 是一，就一个。' },
      { text:'two', note:'二', badge:'2', kind:'stiff', ok:false,
        why:'two 是二，要竖两根手指。' },
      { text:'nine', note:'九', badge:'9', kind:'stiff', ok:false,
        why:'nine 是九，比一多得多。' }
    ],
    explain:'💡 从头数起：one、two、three、four、five。伸一根手指就是 one。',
    takeaway:'one = 一 ☝️'
  },
  {
    id:'a-20', pack:'color', level:2, type:'word',
    scene:'🎨 颜色数字篇',
    emoji:'🙌',
    situation:'外教把两只手全张开，十根手指都伸出来，让大家数一数。',
    quote:'',
    note:'两只手的手指头全加起来。',
    ask:'这个数字用英语怎么说？',
    options:[
      { text:'ten', note:'十', badge:'10', kind:'stiff', ok:true,
        why:'ten 是十，正好两只手。' },
      { text:'two', note:'二', badge:'2', kind:'stiff', ok:false,
        why:'two 是二，才两根手指。' },
      { text:'three', note:'三', badge:'3', kind:'stiff', ok:false,
        why:'three 是三，还差得远。' }
    ],
    explain:'💡 一只手是 five（五），两只手是 ten（十）。凑满十根手指就是 ten。',
    takeaway:'ten = 十 🙌'
  }

  ]);

  /* ---------- 🐶 动物篇（加餐） ---------- */
  EN.add('starter1', 'animal', [

  {
    id:'a-21', pack:'animal', level:1, type:'word',
    scene:'🐶 动物篇',
    emoji:'🐱',
    situation:'照片上的小动物正在舔爪子，会喵喵叫。',
    quote:'',
    note:'它最爱抓老鼠，也爱睡觉。',
    ask:'这个动物用英语怎么说？',
    options:[
      { text:'cat', note:'猫', badge:'猫', kind:'stiff', ok:true,
        why:'cat 是猫，会喵喵叫。' },
      { text:'dog', note:'狗', badge:'狗', kind:'stiff', ok:false,
        why:'dog 是狗，会汪汪叫。' },
      { text:'rat', note:'老鼠', badge:'老鼠', kind:'stiff', ok:false,
        why:'rat 是老鼠，正是猫要抓的那个。' }
    ],
    explain:'💡 猫抓老鼠一起记：cat（猫）追 rat（老鼠）。两个词就差第一个字母。',
    takeaway:'cat = 猫 🐱'
  },
  {
    id:'a-22', pack:'animal', level:1, type:'word',
    scene:'🐶 动物篇',
    emoji:'🐷',
    situation:'照片上的动物胖胖的、粉粉的，鼻子扁扁的。',
    quote:'',
    note:'它在泥地里打滚，哼哼叫。',
    ask:'这个动物用英语怎么说？',
    options:[
      { text:'pig', note:'猪', badge:'猪', kind:'stiff', ok:true,
        why:'pig 是猪，胖胖粉粉的。' },
      { text:'cow', note:'奶牛', badge:'奶牛', kind:'stiff', ok:false,
        why:'cow 是奶牛，会产牛奶。' },
      { text:'dog', note:'狗', badge:'狗', kind:'stiff', ok:false,
        why:'dog 是狗，会看家。' }
    ],
    explain:'💡 农场三样：pig 猪、cow 奶牛、duck 鸭子。pig 最胖最粉。',
    takeaway:'pig = 猪 🐷'
  },
  {
    id:'a-23', pack:'animal', level:1, type:'word',
    scene:'🐶 动物篇',
    emoji:'🐦',
    situation:'照片上的小动物有一对翅膀，站在树枝上唱歌。',
    quote:'',
    note:'它会飞，还会下蛋。',
    ask:'这个动物用英语怎么说？',
    options:[
      { text:'bird', note:'鸟', badge:'鸟', kind:'stiff', ok:true,
        why:'bird 是鸟，有翅膀会飞。' },
      { text:'fish', note:'鱼', badge:'鱼', kind:'stiff', ok:false,
        why:'fish 是鱼，在水里游，不会飞。' },
      { text:'bee', note:'蜜蜂', badge:'蜜蜂', kind:'stiff', ok:false,
        why:'bee 是蜜蜂，也会飞，但小小的会蜇人。' }
    ],
    explain:'💡 会飞的两个 b：bird（鸟，大，会唱歌）和 bee（蜜蜂，小，嗡嗡叫）。',
    takeaway:'bird = 鸟 🐦'
  },
  {
    id:'a-24', pack:'animal', level:2, type:'word',
    scene:'🐶 动物篇',
    emoji:'🐻',
    situation:'外教举起一只毛茸茸的大玩偶，它爱吃蜂蜜，冬天会睡很久。',
    quote:'',
    note:'它站起来比人还高，力气很大。',
    ask:'这个动物用英语怎么说？',
    options:[
      { text:'bear', note:'熊', badge:'熊', kind:'stiff', ok:true,
        why:'bear 是熊，毛茸茸的爱吃蜂蜜。' },
      { text:'bird', note:'鸟', badge:'鸟', kind:'stiff', ok:false,
        why:'bird 是鸟，小小的会飞，和 bear 都是 b 开头。' },
      { text:'bee', note:'蜜蜂', badge:'蜜蜂', kind:'stiff', ok:false,
        why:'bee 是蜜蜂，蜂蜜就是它做的。' }
    ],
    explain:'💡 三个 b 开头别记混：bear 熊（大）、bird 鸟（会飞）、bee 蜜蜂（会蜇）。',
    takeaway:'bear = 熊 🐻'
  }

  ]);

  /* ---------- 🍎 认物篇（加餐 2） ---------- */
  EN.add('starter1', 'things', [

  {
    id:'a-25', pack:'things', level:1, type:'word',
    scene:'🍎 认物篇',
    emoji:'🍌',
    situation:'外教举起一根黄黄的、弯弯的水果，剥了皮就能吃。',
    quote:'',
    note:'猴子最爱吃它。',
    ask:'这个用英语怎么说？',
    options:[
      { text:'banana', note:'香蕉', badge:'香蕉', kind:'stiff', ok:true,
        why:'banana 是香蕉，黄黄弯弯的。' },
      { text:'apple', note:'苹果', badge:'苹果', kind:'stiff', ok:false,
        why:'apple 是苹果，红红圆圆的。' },
      { text:'orange', note:'橙子', badge:'橙子', kind:'stiff', ok:false,
        why:'orange 是橙子，圆圆的橙色。' }
    ],
    explain:'💡 水果三兄弟凑齐啦：apple 🍎 苹果、orange 🍊 橙子、banana 🍌 香蕉。',
    takeaway:'banana = 香蕉 🍌'
  },
  {
    id:'a-26', pack:'things', level:1, type:'word',
    scene:'🍎 认物篇',
    emoji:'👟',
    situation:'出门前妈妈让你穿上它，穿好了才能出去走路。',
    quote:'',
    note:'它成双成对，穿在脚上。',
    ask:'这个用英语怎么说？',
    options:[
      { text:'shoe', note:'鞋', badge:'鞋', kind:'stiff', ok:true,
        why:'shoe 是鞋，穿在脚上。' },
      { text:'sock', note:'袜子', badge:'袜子', kind:'stiff', ok:false,
        why:'sock 是袜子，先穿袜子再穿鞋。' },
      { text:'hat', note:'帽子', badge:'帽子', kind:'stiff', ok:false,
        why:'hat 是帽子，戴在头上，不是脚上。' }
    ],
    explain:'💡 从头到脚穿戴：hat 帽子（头）、sock 袜子（脚）、shoe 鞋（脚）。',
    takeaway:'shoe = 鞋 👟'
  },
  {
    id:'a-27', pack:'things', level:2, type:'word',
    scene:'🍎 认物篇',
    emoji:'🥤',
    situation:'口渴了，你要用它来装水喝。',
    quote:'',
    note:'喝完水放桌上的那个。',
    ask:'这个用英语怎么说？',
    options:[
      { text:'cup', note:'杯子', badge:'杯子', kind:'stiff', ok:true,
        why:'cup 是杯子，用来喝水。' },
      { text:'cap', note:'鸭舌帽', badge:'帽子', kind:'stiff', ok:false,
        why:'cap 是帽子，和 cup 只差中间一个字母。' },
      { text:'cat', note:'猫', badge:'猫', kind:'stiff', ok:false,
        why:'cat 是猫，会喵喵叫。' }
    ],
    explain:'💡 cup（杯子）和 cap（帽子）长得太像了，就差中间那个字母 u / a。',
    takeaway:'cup = 杯子 🥤'
  },
  {
    id:'a-28', pack:'things', level:2, type:'word',
    scene:'🍎 认物篇',
    emoji:'🥄',
    situation:'喝汤、吃饭的时候，你用它一口一口地舀。',
    quote:'',
    note:'圆圆的头，长长的柄。',
    ask:'这个用英语怎么说？',
    options:[
      { text:'spoon', note:'勺子', badge:'勺子', kind:'stiff', ok:true,
        why:'spoon 是勺子，用来舀汤舀饭。' },
      { text:'fork', note:'叉子', badge:'叉子', kind:'stiff', ok:false,
        why:'fork 是叉子，尖尖的用来叉东西。' },
      { text:'cup', note:'杯子', badge:'杯子', kind:'stiff', ok:false,
        why:'cup 是杯子，用来喝水的。' }
    ],
    explain:'💡 吃饭用的三样：spoon 勺子（舀）、fork 叉子（叉）、knife 刀（切）。',
    takeaway:'spoon = 勺子 🥄'
  }

  ]);

  /* ---------- 🎨 颜色数字篇（加餐 2） ---------- */
  EN.add('starter1', 'color', [

  {
    id:'a-29', pack:'color', level:1, type:'word',
    scene:'🎨 颜色数字篇',
    emoji:'⬛',
    situation:'外教指着夜里没有灯、黑漆漆的天空，让大家说出这个颜色。',
    quote:'',
    note:'和乌鸦、墨水一个颜色。',
    ask:'这个颜色用英语怎么说？',
    options:[
      { text:'black', note:'黑色', badge:'黑', kind:'stiff', ok:true,
        why:'black 是黑色，夜空的颜色。' },
      { text:'white', note:'白色', badge:'白', kind:'stiff', ok:false,
        why:'white 是白色，雪和牛奶的颜色，和黑正相反。' },
      { text:'blue', note:'蓝色', badge:'蓝', kind:'stiff', ok:false,
        why:'blue 是蓝色，白天天空的颜色。' }
    ],
    explain:'💡 一对反义色：black 黑 ↔ white 白。夜里黑，雪里白。',
    takeaway:'black = 黑色 ⬛'
  },
  {
    id:'a-30', pack:'color', level:2, type:'word',
    scene:'🎨 颜色数字篇',
    emoji:'🟠',
    situation:'外教举起一个橙子，问大家它的皮是什么颜色。',
    quote:'',
    note:'比黄色深，比红色浅。',
    ask:'这个颜色用英语怎么说？',
    options:[
      { text:'orange', note:'橙色', badge:'橙', kind:'stiff', ok:true,
        why:'orange 既是橙子，也是橙色。' },
      { text:'yellow', note:'黄色', badge:'黄', kind:'stiff', ok:false,
        why:'yellow 是黄色，比橙色浅一点。' },
      { text:'red', note:'红色', badge:'红', kind:'stiff', ok:false,
        why:'red 是红色，比橙色深一点。' }
    ],
    explain:'💡 orange 一词两用：一个橙子 an orange，橙色 orange。红黄之间就是橙。',
    takeaway:'orange = 橙色 🟠'
  },
  {
    id:'a-31', pack:'color', level:1, type:'word',
    scene:'🎨 颜色数字篇',
    emoji:'🎈🎈🎈',
    situation:'黑板上画了一排气球，外教让大家数一数一共几个。',
    quote:'',
    note:'比二多一个，比四少一个。',
    ask:'这个数字用英语怎么说？',
    options:[
      { text:'three', note:'三', badge:'3', kind:'stiff', ok:true,
        why:'three 是三。' },
      { text:'two', note:'二', badge:'2', kind:'stiff', ok:false,
        why:'two 是二，比三少一个。' },
      { text:'eight', note:'八', badge:'8', kind:'stiff', ok:false,
        why:'eight 是八，比三多好几个。' }
    ],
    explain:'💡 接着往下数：one、two、three、four、five。数到第三个就是 three。',
    takeaway:'three = 三 🎈'
  },
  {
    id:'a-32', pack:'color', level:2, type:'word',
    scene:'🎨 颜色数字篇',
    emoji:'🍎🍎🍎🍎',
    situation:'盘子里摆着一排苹果，外教让大家数一数。',
    quote:'',
    note:'比五少一个，比三多一个。',
    ask:'这个数字用英语怎么说？',
    options:[
      { text:'four', note:'四', badge:'4', kind:'stiff', ok:true,
        why:'four 是四。' },
      { text:'five', note:'五', badge:'5', kind:'stiff', ok:false,
        why:'five 是五，比四多一个，两个都是 f 开头。' },
      { text:'three', note:'三', badge:'3', kind:'stiff', ok:false,
        why:'three 是三，比四少一个。' }
    ],
    explain:'💡 four（四）和 five（五）都是 f 开头，最容易记混：four 竖四根手指，five 一整只手。',
    takeaway:'four = 四 🍎'
  }

  ]);

  /* ---------- 🐶 动物篇（加餐 2） ---------- */
  EN.add('starter1', 'animal', [

  {
    id:'a-33', pack:'animal', level:1, type:'word',
    scene:'🐶 动物篇',
    emoji:'🐮',
    situation:'照片上的大动物正在草地上吃草，我们喝的牛奶就是它产的。',
    quote:'',
    note:'它头上有两只角，哞哞叫。',
    ask:'这个动物用英语怎么说？',
    options:[
      { text:'cow', note:'奶牛', badge:'奶牛', kind:'stiff', ok:true,
        why:'cow 是奶牛，会产牛奶。' },
      { text:'horse', note:'马', badge:'马', kind:'stiff', ok:false,
        why:'horse 是马，跑得快，能骑。' },
      { text:'pig', note:'猪', badge:'猪', kind:'stiff', ok:false,
        why:'pig 是猪，胖胖粉粉的。' }
    ],
    explain:'💡 农场三样：cow 奶牛（产奶）、horse 马（会跑）、pig 猪（爱睡）。',
    takeaway:'cow = 奶牛 🐮'
  },
  {
    id:'a-34', pack:'animal', level:2, type:'word',
    scene:'🐶 动物篇',
    emoji:'🦆',
    situation:'池塘里一个小动物扁扁嘴、摇摇摆摆，会游泳也会飞。',
    quote:'',
    note:'它嘎嘎叫，脚上有蹼。',
    ask:'这个动物用英语怎么说？',
    options:[
      { text:'duck', note:'鸭子', badge:'鸭子', kind:'stiff', ok:true,
        why:'duck 是鸭子，扁嘴会游泳。' },
      { text:'dog', note:'狗', badge:'狗', kind:'stiff', ok:false,
        why:'dog 是狗，和 duck 都是 d 开头，但狗汪汪叫。' },
      { text:'frog', note:'青蛙', badge:'青蛙', kind:'stiff', ok:false,
        why:'frog 是青蛙，也爱待在水边，但它会跳。' }
    ],
    explain:'💡 两个 d 开头的动物：duck 鸭子（水里游）和 dog 狗（陆上跑）。',
    takeaway:'duck = 鸭子 🦆'
  },
  {
    id:'a-35', pack:'animal', level:2, type:'word',
    scene:'🐶 动物篇',
    emoji:'🐯',
    situation:'动物园里一只大猫身上有一条条花纹，是森林里的大王。',
    quote:'',
    note:'它身上黑黄相间，会大吼。',
    ask:'这个动物用英语怎么说？',
    options:[
      { text:'tiger', note:'老虎', badge:'老虎', kind:'stiff', ok:true,
        why:'tiger 是老虎，身上有条纹。' },
      { text:'lion', note:'狮子', badge:'狮子', kind:'stiff', ok:false,
        why:'lion 是狮子，脖子上有一圈鬃毛。' },
      { text:'cat', note:'猫', badge:'猫', kind:'stiff', ok:false,
        why:'cat 是猫，是老虎的迷你版。' }
    ],
    explain:'💡 大猫家族：tiger 老虎（有条纹）、lion 狮子（有鬃毛）、cat 猫（家里养）。',
    takeaway:'tiger = 老虎 🐯'
  },
  {
    id:'a-36', pack:'animal', level:2, type:'word',
    scene:'🐶 动物篇',
    emoji:'🐘',
    situation:'照片上的动物有长长的鼻子和两只大耳朵，是陆地上最大的动物。',
    quote:'',
    note:'它用长鼻子喝水、卷东西。',
    ask:'这个动物用英语怎么说？',
    options:[
      { text:'elephant', note:'大象', badge:'大象', kind:'stiff', ok:true,
        why:'elephant 是大象，鼻子长长的。' },
      { text:'mouse', note:'老鼠', badge:'老鼠', kind:'stiff', ok:false,
        why:'mouse 是老鼠，最小的那个，和大象正好一大一小。' },
      { text:'pig', note:'猪', badge:'猪', kind:'stiff', ok:false,
        why:'pig 是猪，也胖，但没有长鼻子。' }
    ],
    explain:'💡 一大一小对着记：elephant 大象（最大）↔ mouse 老鼠（最小）。',
    takeaway:'elephant = 大象 🐘'
  }

  ]);

  /* ---------- 🍎 认物篇（加餐 3） ---------- */
  EN.add('starter1', 'things', [

  {
    id:'a-37', pack:'things', level:1, type:'word',
    scene:'🍎 认物篇',
    emoji:'🚪',
    situation:'进出房间都要推开它，出门前要记得关好。',
    quote:'',
    note:'有把手，能开能关。',
    ask:'这个用英语怎么说？',
    options:[
      { text:'door', note:'门', badge:'门', kind:'stiff', ok:true,
        why:'door 是门，进出都从这儿走。' },
      { text:'window', note:'窗户', badge:'窗户', kind:'stiff', ok:false,
        why:'window 是窗户，用来透光看外面。' },
      { text:'wall', note:'墙', badge:'墙', kind:'stiff', ok:false,
        why:'wall 是墙，围在房间四周。' }
    ],
    explain:'💡 房间三样：door 门（进出）、window 窗（透光）、wall 墙（围挡）。',
    takeaway:'door = 门 🚪'
  },
  {
    id:'a-38', pack:'things', level:2, type:'word',
    scene:'🍎 认物篇',
    emoji:'🎂',
    situation:'过生日时端上来的那个甜甜的东西，上面还插着蜡烛。',
    quote:'',
    note:'吹了蜡烛才切开吃。',
    ask:'这个用英语怎么说？',
    options:[
      { text:'cake', note:'蛋糕', badge:'蛋糕', kind:'stiff', ok:true,
        why:'cake 是蛋糕，过生日吃的。' },
      { text:'cat', note:'猫', badge:'猫', kind:'stiff', ok:false,
        why:'cat 是猫，和 cake 都是 c 开头，但那是小动物。' },
      { text:'cap', note:'帽子', badge:'帽子', kind:'stiff', ok:false,
        why:'cap 是帽子，戴在头上。' }
    ],
    explain:'💡 三个 c 开头别记混：cake 蛋糕、cat 猫、cap 帽子。',
    takeaway:'cake = 蛋糕 🎂'
  },
  {
    id:'a-39', pack:'things', level:2, type:'word',
    scene:'🍎 认物篇',
    emoji:'🍚',
    situation:'一碗白白的、一粒一粒的主食，中国人几乎天天吃。',
    quote:'',
    note:'煮成饭，配着菜吃。',
    ask:'这个用英语怎么说？',
    options:[
      { text:'rice', note:'米饭', badge:'米饭', kind:'stiff', ok:true,
        why:'rice 是米饭，一粒一粒白白的。' },
      { text:'ice', note:'冰', badge:'冰', kind:'stiff', ok:false,
        why:'ice 是冰，凉冰冰的，比 rice 少个 r。' },
      { text:'bread', note:'面包', badge:'面包', kind:'stiff', ok:false,
        why:'bread 是面包，也是主食，但软软的。' }
    ],
    explain:'💡 rice（米饭）就是 ice（冰）前面加个 r，别看漏那个 r。',
    takeaway:'rice = 米饭 🍚'
  },
  {
    id:'a-40', pack:'things', level:1, type:'word',
    scene:'🍎 认物篇',
    emoji:'🚲',
    situation:'两个轮子的车，要用脚蹬着才会往前跑。',
    quote:'',
    note:'骑上去要自己保持平衡。',
    ask:'这个用英语怎么说？',
    options:[
      { text:'bike', note:'自行车', badge:'自行车', kind:'stiff', ok:true,
        why:'bike 是自行车，两个轮子用脚蹬。' },
      { text:'bus', note:'公交车', badge:'公交', kind:'stiff', ok:false,
        why:'bus 是公交车，大大的坐好多人。' },
      { text:'car', note:'小汽车', badge:'汽车', kind:'stiff', ok:false,
        why:'car 是小汽车，四个轮子有发动机。' }
    ],
    explain:'💡 会跑的三样凑齐：bike 自行车、bus 公交车、car 小汽车。轮子从两个到四个。',
    takeaway:'bike = 自行车 🚲'
  }

  ]);

  /* ---------- 🎨 颜色数字篇（加餐 3） ---------- */
  EN.add('starter1', 'color', [

  {
    id:'a-41', pack:'color', level:1, type:'word',
    scene:'🎨 颜色数字篇',
    emoji:'⬜',
    situation:'外教指着窗外刚下的雪，让大家说出这个颜色。',
    quote:'',
    note:'牛奶和云也是这个颜色。',
    ask:'这个颜色用英语怎么说？',
    options:[
      { text:'white', note:'白色', badge:'白', kind:'stiff', ok:true,
        why:'white 是白色，雪和牛奶的颜色。' },
      { text:'black', note:'黑色', badge:'黑', kind:'stiff', ok:false,
        why:'black 是黑色，和白正相反。' },
      { text:'blue', note:'蓝色', badge:'蓝', kind:'stiff', ok:false,
        why:'blue 是蓝色，天空的颜色。' }
    ],
    explain:'💡 一对反义色：white 白 ↔ black 黑。雪是白的，夜是黑的。',
    takeaway:'white = 白色 ⬜'
  },
  {
    id:'a-42', pack:'color', level:2, type:'word',
    scene:'🎨 颜色数字篇',
    emoji:'🌸',
    situation:'外教指着一朵桃花，让大家说出这个淡淡的颜色。',
    quote:'',
    note:'小猪和棉花糖也是这个颜色。',
    ask:'这个颜色用英语怎么说？',
    options:[
      { text:'pink', note:'粉红色', badge:'粉', kind:'stiff', ok:true,
        why:'pink 是粉红色，淡淡的红。' },
      { text:'red', note:'红色', badge:'红', kind:'stiff', ok:false,
        why:'red 是红色，比粉色深得多。' },
      { text:'white', note:'白色', badge:'白', kind:'stiff', ok:false,
        why:'white 是白色，粉色是白里透红。' }
    ],
    explain:'💡 pink（粉）就是浅浅的 red（红）：红加白就成了粉。',
    takeaway:'pink = 粉红色 🌸'
  },
  {
    id:'a-43', pack:'color', level:2, type:'word',
    scene:'🎨 颜色数字篇',
    emoji:'🥚🥚🥚🥚🥚🥚',
    situation:'篮子里摆着一排鸡蛋，外教让大家数一数。',
    quote:'',
    note:'比五多一个，比七少一个。',
    ask:'这个数字用英语怎么说？',
    options:[
      { text:'six', note:'六', badge:'6', kind:'stiff', ok:true,
        why:'six 是六。' },
      { text:'seven', note:'七', badge:'7', kind:'stiff', ok:false,
        why:'seven 是七，比六多一个，两个都是 s 开头。' },
      { text:'four', note:'四', badge:'4', kind:'stiff', ok:false,
        why:'four 是四，比六少两个。' }
    ],
    explain:'💡 六到十：six、seven、eight、nine、ten。six 和 seven 都是 s 开头，别混。',
    takeaway:'six = 六 🥚'
  },
  {
    id:'a-44', pack:'color', level:2, type:'word',
    scene:'🎨 颜色数字篇',
    emoji:'🕷️',
    situation:'外教画了一只蜘蛛，让大家数一数它有几条腿。',
    quote:'',
    note:'蜘蛛的腿正好这么多。',
    ask:'这个数字用英语怎么说？',
    options:[
      { text:'eight', note:'八', badge:'8', kind:'stiff', ok:true,
        why:'eight 是八，蜘蛛正好八条腿。' },
      { text:'six', note:'六', badge:'6', kind:'stiff', ok:false,
        why:'six 是六，比八少两个。' },
      { text:'ten', note:'十', badge:'10', kind:'stiff', ok:false,
        why:'ten 是十，比八多两个。' }
    ],
    explain:'💡 记住蜘蛛就记住了 eight（八）：它有 eight legs（八条腿）。',
    takeaway:'eight = 八 🕷️'
  }

  ]);

  /* ---------- 🐶 动物篇（加餐 3） ---------- */
  EN.add('starter1', 'animal', [

  {
    id:'a-45', pack:'animal', level:1, type:'word',
    scene:'🐶 动物篇',
    emoji:'🐴',
    situation:'照片上的大动物跑得飞快，古时候的人骑着它赶路。',
    quote:'',
    note:'它有长长的鬃毛，会嘶嘶叫。',
    ask:'这个动物用英语怎么说？',
    options:[
      { text:'horse', note:'马', badge:'马', kind:'stiff', ok:true,
        why:'horse 是马，跑得快能骑。' },
      { text:'cow', note:'奶牛', badge:'奶牛', kind:'stiff', ok:false,
        why:'cow 是奶牛，慢吞吞地吃草。' },
      { text:'dog', note:'狗', badge:'狗', kind:'stiff', ok:false,
        why:'dog 是狗，会看家。' }
    ],
    explain:'💡 农场跑得最快的是 horse（马）；产奶的是 cow（奶牛）。',
    takeaway:'horse = 马 🐴'
  },
  {
    id:'a-46', pack:'animal', level:2, type:'word',
    scene:'🐶 动物篇',
    emoji:'🐑',
    situation:'照片上的动物浑身白白的卷毛，剪下来能织毛衣。',
    quote:'',
    note:'它咩咩叫，一群一群地吃草。',
    ask:'这个动物用英语怎么说？',
    options:[
      { text:'sheep', note:'绵羊', badge:'绵羊', kind:'stiff', ok:true,
        why:'sheep 是绵羊，身上有卷卷的羊毛。' },
      { text:'goat', note:'山羊', badge:'山羊', kind:'stiff', ok:false,
        why:'goat 是山羊，有胡子和尖角，和绵羊是亲戚。' },
      { text:'cow', note:'奶牛', badge:'奶牛', kind:'stiff', ok:false,
        why:'cow 是奶牛，比羊大得多。' }
    ],
    explain:'💡 sheep 一只是 sheep，一群还是 sheep，跟 fish 一样不加 s。',
    takeaway:'sheep = 绵羊 🐑'
  },
  {
    id:'a-47', pack:'animal', level:2, type:'word',
    scene:'🐶 动物篇',
    emoji:'🐍',
    situation:'照片上的动物长长的、没有腿，在地上扭来扭去地爬。',
    quote:'',
    note:'它吐着舌头，会嘶嘶叫。',
    ask:'这个动物用英语怎么说？',
    options:[
      { text:'snake', note:'蛇', badge:'蛇', kind:'stiff', ok:true,
        why:'snake 是蛇，长长的没有腿。' },
      { text:'snail', note:'蜗牛', badge:'蜗牛', kind:'stiff', ok:false,
        why:'snail 是蜗牛，背着壳慢慢爬，和 snake 都是 sna 开头。' },
      { text:'frog', note:'青蛙', badge:'青蛙', kind:'stiff', ok:false,
        why:'frog 是青蛙，会蹦会跳。' }
    ],
    explain:'💡 sna 开头的两个：snake 蛇（长、快）和 snail 蜗牛（圆、慢）。',
    takeaway:'snake = 蛇 🐍'
  },
  {
    id:'a-48', pack:'animal', level:1, type:'word',
    scene:'🐶 动物篇',
    emoji:'🐼',
    situation:'照片上的动物黑白相间，最爱抱着竹子啃，是中国的国宝。',
    quote:'',
    note:'它眼睛周围有两个大黑圈。',
    ask:'这个动物用英语怎么说？',
    options:[
      { text:'panda', note:'熊猫', badge:'熊猫', kind:'stiff', ok:true,
        why:'panda 是熊猫，黑白的爱吃竹子。' },
      { text:'bear', note:'熊', badge:'熊', kind:'stiff', ok:false,
        why:'bear 是熊，熊猫长得像熊，但熊不是黑白的。' },
      { text:'dog', note:'狗', badge:'狗', kind:'stiff', ok:false,
        why:'dog 是狗，会汪汪叫。' }
    ],
    explain:'💡 panda（熊猫）就是黑白的“熊”，名字里藏着 bear（熊）的影子。',
    takeaway:'panda = 熊猫 🐼'
  }

  ]);

  /* ---------- 🍎 认物篇（加餐 4） ---------- */
  EN.add('starter1', 'things', [

  {
    id:'a-49', pack:'things', level:1, type:'word',
    scene:'🍎 认物篇',
    emoji:'🪑',
    situation:'累了想坐下来休息，你会坐在它上面。',
    quote:'',
    note:'有四条腿，还有靠背。',
    ask:'这个用英语怎么说？',
    options:[
      { text:'chair', note:'椅子', badge:'椅子', kind:'stiff', ok:true, why:'chair 是椅子，坐在上面的。' },
      { text:'table', note:'桌子', badge:'桌子', kind:'stiff', ok:false, why:'table 是桌子，在上面写字放东西。' },
      { text:'bed', note:'床', badge:'床', kind:'stiff', ok:false, why:'bed 是床，躺着睡觉的。' }
    ],
    explain:'💡 家具三样：chair 椅子（坐）、table 桌子（放东西）、bed 床（睡觉）。',
    takeaway:'chair = 椅子 🪑'
  },
  {
    id:'a-50', pack:'things', level:2, type:'word',
    scene:'🍎 认物篇',
    emoji:'🧸',
    situation:'小朋友最爱玩的东西，积木、小熊、小汽车都算。',
    quote:'',
    note:'玩具箱里装的全是它。',
    ask:'这个用英语怎么说？',
    options:[
      { text:'toy', note:'玩具', badge:'玩具', kind:'stiff', ok:true, why:'toy 是玩具，用来玩的。' },
      { text:'boy', note:'男孩', badge:'男孩', kind:'stiff', ok:false, why:'boy 是男孩，和 toy 只差第一个字母，读音也像。' },
      { text:'ball', note:'球', badge:'球', kind:'stiff', ok:false, why:'ball 是球，只是众多玩具里的一种。' }
    ],
    explain:'💡 toy（玩具）和 boy（男孩）读音特别像，就差开头 t / b。',
    takeaway:'toy = 玩具 🧸'
  },
  {
    id:'a-51', pack:'things', level:2, type:'word',
    scene:'🍎 认物篇',
    emoji:'🪁',
    situation:'春天有风的时候，你牵着线让它飞上天。',
    quote:'',
    note:'后面还拖着长长的尾巴。',
    ask:'这个用英语怎么说？',
    options:[
      { text:'kite', note:'风筝', badge:'风筝', kind:'stiff', ok:true, why:'kite 是风筝，牵着线在天上飞。' },
      { text:'bike', note:'自行车', badge:'自行车', kind:'stiff', ok:false, why:'bike 是自行车，和 kite 长得像，但它在地上跑。' },
      { text:'kid', note:'小孩', badge:'小孩', kind:'stiff', ok:false, why:'kid 是小孩，不是玩具。' }
    ],
    explain:'💡 kite（风筝）和 bike（自行车）长得像：都有 -ike，一个天上飞、一个地上跑。',
    takeaway:'kite = 风筝 🪁'
  },
  {
    id:'a-52', pack:'things', level:2, type:'word',
    scene:'🍎 认物篇',
    emoji:'⛵',
    situation:'在河上、海上漂着往前走的交通工具，用桨划或用帆吹。',
    quote:'',
    note:'它浮在水面上，不会沉。',
    ask:'这个用英语怎么说？',
    options:[
      { text:'boat', note:'小船', badge:'小船', kind:'stiff', ok:true, why:'boat 是小船，在水上开。' },
      { text:'coat', note:'外套', badge:'外套', kind:'stiff', ok:false, why:'coat 是外套，穿在身上，和 boat 只差第一个字母。' },
      { text:'goat', note:'山羊', badge:'山羊', kind:'stiff', ok:false, why:'goat 是山羊，一种动物，读音和 boat 也像。' }
    ],
    explain:'💡 -oat 三兄弟读音都像：boat 船、coat 外套、goat 山羊，就差开头一个字母。',
    takeaway:'boat = 小船 ⛵'
  }

  ]);

  /* ---------- 🎨 颜色数字篇（加餐 4） ---------- */
  EN.add('starter1', 'color', [

  {
    id:'a-53', pack:'color', level:2, type:'word',
    scene:'🎨 颜色数字篇',
    emoji:'🟤',
    situation:'外教举起一块巧克力，让大家说出它的颜色。',
    quote:'',
    note:'树干和泥土也是这个颜色。',
    ask:'这个颜色用英语怎么说？',
    options:[
      { text:'brown', note:'棕色', badge:'棕', kind:'stiff', ok:true, why:'brown 是棕色，巧克力的颜色。' },
      { text:'black', note:'黑色', badge:'黑', kind:'stiff', ok:false, why:'black 是黑色，比棕色更深更暗。' },
      { text:'orange', note:'橙色', badge:'橙', kind:'stiff', ok:false, why:'orange 是橙色，比棕色亮。' }
    ],
    explain:'💡 brown（棕）像巧克力、像泥土、像树干，是暖暖的深色。',
    takeaway:'brown = 棕色 🟤'
  },
  {
    id:'a-54', pack:'color', level:2, type:'word',
    scene:'🎨 颜色数字篇',
    emoji:'🟣',
    situation:'外教举起一串葡萄，让大家说出它的颜色。',
    quote:'',
    note:'茄子和薰衣草也是这个颜色。',
    ask:'这个颜色用英语怎么说？',
    options:[
      { text:'purple', note:'紫色', badge:'紫', kind:'stiff', ok:true, why:'purple 是紫色，葡萄和茄子的颜色。' },
      { text:'pink', note:'粉红色', badge:'粉', kind:'stiff', ok:false, why:'pink 是粉红色，比紫色浅得多。' },
      { text:'blue', note:'蓝色', badge:'蓝', kind:'stiff', ok:false, why:'blue 是蓝色，紫色是红加蓝调出来的。' }
    ],
    explain:'💡 purple（紫）是红和蓝混在一起的颜色，像葡萄、像茄子。',
    takeaway:'purple = 紫色 🟣'
  },
  {
    id:'a-55', pack:'color', level:2, type:'word',
    scene:'🎨 颜色数字篇',
    emoji:'🌈',
    situation:'雨后出了彩虹，外教让大家数一数彩虹有几种颜色。',
    quote:'',
    note:'比六多一个，比八少一个。',
    ask:'这个数字用英语怎么说？',
    options:[
      { text:'seven', note:'七', badge:'7', kind:'stiff', ok:true, why:'seven 是七，彩虹正好七种颜色。' },
      { text:'six', note:'六', badge:'6', kind:'stiff', ok:false, why:'six 是六，比七少一个，两个都是 s 开头。' },
      { text:'ten', note:'十', badge:'10', kind:'stiff', ok:false, why:'ten 是十，比七多好几个。' }
    ],
    explain:'💡 记住彩虹就记住了 seven（七）：彩虹有 seven colors（七种颜色）。',
    takeaway:'seven = 七 🌈'
  },
  {
    id:'a-56', pack:'color', level:2, type:'word',
    scene:'🎨 颜色数字篇',
    emoji:'9️⃣',
    situation:'外教举起一张卡片，上面写着一个数字，让大家读出来。',
    quote:'',
    note:'比八多一个，再加一个就是十。',
    ask:'这个数字用英语怎么说？',
    options:[
      { text:'nine', note:'九', badge:'9', kind:'stiff', ok:true, why:'nine 是九，再加一个就到十了。' },
      { text:'six', note:'六', badge:'6', kind:'stiff', ok:false, why:'six 是六，比九少三个。' },
      { text:'ten', note:'十', badge:'10', kind:'stiff', ok:false, why:'ten 是十，比九多一个。' }
    ],
    explain:'💡 快数到头啦：seven、eight、nine、ten。nine 之后就是 ten。',
    takeaway:'nine = 九 9️⃣'
  }

  ]);

  /* ---------- 🐶 动物篇（加餐 4） ---------- */
  EN.add('starter1', 'animal', [

  {
    id:'a-57', pack:'animal', level:2, type:'word',
    scene:'🐶 动物篇',
    emoji:'🦁',
    situation:'照片上的大动物脖子上有一圈厚厚的毛，一吼森林都发抖。',
    quote:'',
    note:'大家叫它“森林之王”。',
    ask:'这个动物用英语怎么说？',
    options:[
      { text:'lion', note:'狮子', badge:'狮子', kind:'stiff', ok:true, why:'lion 是狮子，脖子上有鬃毛。' },
      { text:'tiger', note:'老虎', badge:'老虎', kind:'stiff', ok:false, why:'tiger 是老虎，身上是条纹，没有鬃毛。' },
      { text:'cat', note:'猫', badge:'猫', kind:'stiff', ok:false, why:'cat 是猫，是狮子的迷你版。' }
    ],
    explain:'💡 大猫家族：lion 狮子（有鬃毛）、tiger 老虎（有条纹）、cat 猫（家里养）。',
    takeaway:'lion = 狮子 🦁'
  },
  {
    id:'a-58', pack:'animal', level:1, type:'word',
    scene:'🐶 动物篇',
    emoji:'🐸',
    situation:'池塘边一个绿绿的小动物，一蹦一跳，会捉虫子吃。',
    quote:'',
    note:'它呱呱叫，游泳跳跃都在行。',
    ask:'这个动物用英语怎么说？',
    options:[
      { text:'frog', note:'青蛙', badge:'青蛙', kind:'stiff', ok:true, why:'frog 是青蛙，绿绿的会跳。' },
      { text:'dog', note:'狗', badge:'狗', kind:'stiff', ok:false, why:'dog 是狗，和 frog 都以 -og 结尾，但狗汪汪叫。' },
      { text:'fish', note:'鱼', badge:'鱼', kind:'stiff', ok:false, why:'fish 是鱼，只在水里游，不会上岸跳。' }
    ],
    explain:'💡 -og 结尾押韵：frog 青蛙（会跳）和 dog 狗（会跑）。',
    takeaway:'frog = 青蛙 🐸'
  },
  {
    id:'a-59', pack:'animal', level:2, type:'word',
    scene:'🐶 动物篇',
    emoji:'🐔',
    situation:'农场里咯咯叫的家禽，早上会打鸣，还会下蛋。',
    quote:'',
    note:'我们吃的鸡蛋就是它生的。',
    ask:'这个动物用英语怎么说？',
    options:[
      { text:'chicken', note:'鸡', badge:'鸡', kind:'stiff', ok:true, why:'chicken 是鸡，会下蛋会打鸣。' },
      { text:'duck', note:'鸭子', badge:'鸭子', kind:'stiff', ok:false, why:'duck 是鸭子，扁嘴会游泳，和鸡都是家禽。' },
      { text:'bird', note:'鸟', badge:'鸟', kind:'stiff', ok:false, why:'bird 是鸟，鸡也算鸟，但专门指鸡要用 chicken。' }
    ],
    explain:'💡 农场里的家禽：chicken 鸡（下蛋）、duck 鸭（游泳）。鸡蛋是 egg。',
    takeaway:'chicken = 鸡 🐔'
  },
  {
    id:'a-60', pack:'animal', level:1, type:'word',
    scene:'🐶 动物篇',
    emoji:'🐝',
    situation:'花丛里嗡嗡飞的小昆虫，黄黑条纹，会采蜜也会蜇人。',
    quote:'',
    note:'我们吃的蜂蜜就是它做的。',
    ask:'这个动物用英语怎么说？',
    options:[
      { text:'bee', note:'蜜蜂', badge:'蜜蜂', kind:'stiff', ok:true, why:'bee 是蜜蜂，会采蜜嗡嗡叫。' },
      { text:'bird', note:'鸟', badge:'鸟', kind:'stiff', ok:false, why:'bird 是鸟，也会飞，但比蜜蜂大多了。' },
      { text:'bear', note:'熊', badge:'熊', kind:'stiff', ok:false, why:'bear 是熊，也爱吃蜂蜜，和 bee 都是 b 开头。' }
    ],
    explain:'💡 三个 b 开头凑齐：bee 蜜蜂（小）、bird 鸟（会飞）、bear 熊（大）。',
    takeaway:'bee = 蜜蜂 🐝'
  }

  ]);

  /* ---------- 🍎 认物篇（加餐 5） ---------- */
  EN.add('starter1', 'things', [

  { id:'a-61', pack:'things', level:1, type:'word', scene:'🍎 认物篇', emoji:'🪟',
    situation:'墙上那个能透光、能看见外面的地方，热了可以打开透气。', quote:'',
    note:'玻璃做的，白天光从这儿照进来。', ask:'这个用英语怎么说？',
    options:[
      { text:'window', note:'窗户', badge:'窗户', kind:'stiff', ok:true, why:'window 是窗户，用来透光看外面。' },
      { text:'door', note:'门', badge:'门', kind:'stiff', ok:false, why:'door 是门，用来进出。' },
      { text:'wall', note:'墙', badge:'墙', kind:'stiff', ok:false, why:'wall 是墙，围在房间四周，不透光。' }
    ],
    explain:'💡 房间三样：window 窗（透光）、door 门（进出）、wall 墙（围挡）。',
    takeaway:'window = 窗户 🪟' },

  { id:'a-62', pack:'things', level:1, type:'word', scene:'🍎 认物篇', emoji:'🛏️',
    situation:'晚上困了，你会躺到它上面盖好被子睡觉。', quote:'',
    note:'软软的，上面有枕头和被子。', ask:'这个用英语怎么说？',
    options:[
      { text:'bed', note:'床', badge:'床', kind:'stiff', ok:true, why:'bed 是床，躺着睡觉的。' },
      { text:'desk', note:'书桌', badge:'书桌', kind:'stiff', ok:false, why:'desk 是书桌，坐着写作业的。' },
      { text:'box', note:'盒子', badge:'盒子', kind:'stiff', ok:false, why:'box 是盒子，装东西的。' }
    ],
    explain:'💡 房间里：bed 床（睡觉）、desk 书桌（写字）、chair 椅子（坐）。',
    takeaway:'bed = 床 🛏️' },

  { id:'a-63', pack:'things', level:2, type:'word', scene:'🍎 认物篇', emoji:'🚂',
    situation:'长长的一节一节连在一起，在铁轨上呜呜地跑，能带很多人去远方。', quote:'',
    note:'它走的是铁轨，不是马路。', ask:'这个用英语怎么说？',
    options:[
      { text:'train', note:'火车', badge:'火车', kind:'stiff', ok:true, why:'train 是火车，在铁轨上跑。' },
      { text:'rain', note:'雨', badge:'雨', kind:'stiff', ok:false, why:'rain 是雨，从天上落下来，比 train 少个 t。' },
      { text:'bus', note:'公交车', badge:'公交', kind:'stiff', ok:false, why:'bus 是公交车，走马路不走铁轨。' }
    ],
    explain:'💡 train（火车）就是 rain（雨）前面加个 t，别看漏那个 t。',
    takeaway:'train = 火车 🚂' },

  { id:'a-64', pack:'things', level:2, type:'word', scene:'🍎 认物篇', emoji:'✈️',
    situation:'有两只大翅膀，在天上飞，坐着它能飞到很远的城市。', quote:'',
    note:'它飞在云朵上面。', ask:'这个用英语怎么说？',
    options:[
      { text:'plane', note:'飞机', badge:'飞机', kind:'stiff', ok:true, why:'plane 是飞机，在天上飞。' },
      { text:'plate', note:'盘子', badge:'盘子', kind:'stiff', ok:false, why:'plate 是盘子，装菜用的，和 plane 长得像。' },
      { text:'train', note:'火车', badge:'火车', kind:'stiff', ok:false, why:'train 是火车，在地上的铁轨跑。' }
    ],
    explain:'💡 交通工具：plane 飞机（天上）、train 火车（铁轨）、bus 公交（马路）。plane 和 plate 别看混。',
    takeaway:'plane = 飞机 ✈️' }

  ]);

  /* ---------- 🎨 颜色数字篇（加餐 5） ---------- */
  EN.add('starter1', 'color', [

  { id:'a-65', pack:'color', level:2, type:'word', scene:'🎨 颜色数字篇', emoji:'🩶',
    situation:'外教指着阴天灰蒙蒙的天空，让大家说出这个颜色。', quote:'',
    note:'大象和石头也是这个颜色。', ask:'这个颜色用英语怎么说？',
    options:[
      { text:'gray', note:'灰色', badge:'灰', kind:'stiff', ok:true, why:'gray 是灰色，阴天和大象的颜色。' },
      { text:'black', note:'黑色', badge:'黑', kind:'stiff', ok:false, why:'black 是黑色，比灰色更深。' },
      { text:'white', note:'白色', badge:'白', kind:'stiff', ok:false, why:'white 是白色，比灰色更浅。' }
    ],
    explain:'💡 gray（灰）正好在 black（黑）和 white（白）中间：黑加白就成了灰。',
    takeaway:'gray = 灰色 🩶' },

  { id:'a-66', pack:'color', level:3, type:'word', scene:'🎨 颜色数字篇', emoji:'👕',
    situation:'外教说一支足球队上场的球员，让大家数一数一共几个人。', quote:'',
    note:'比十多一个。', ask:'这个数字用英语怎么说？',
    options:[
      { text:'eleven', note:'十一', badge:'11', kind:'stiff', ok:true, why:'eleven 是十一，比十多一个。' },
      { text:'ten', note:'十', badge:'10', kind:'stiff', ok:false, why:'ten 是十，比十一少一个。' },
      { text:'twelve', note:'十二', badge:'12', kind:'stiff', ok:false, why:'twelve 是十二，比十一多一个。' }
    ],
    explain:'💡 过了十就是 eleven（11）、twelve（12）。一支足球队上场正好 eleven 人。',
    takeaway:'eleven = 十一 👕' },

  { id:'a-67', pack:'color', level:3, type:'word', scene:'🎨 颜色数字篇', emoji:'🕛',
    situation:'外教指着钟面，说一年有几个月，让大家用英语说出这个数。', quote:'',
    note:'一年有这么多个月，钟面上也有这么多个数。', ask:'这个数字用英语怎么说？',
    options:[
      { text:'twelve', note:'十二', badge:'12', kind:'stiff', ok:true, why:'twelve 是十二，一年十二个月。' },
      { text:'twenty', note:'二十', badge:'20', kind:'stiff', ok:false, why:'twenty 是二十，和 twelve 开头像，但大多了。' },
      { text:'ten', note:'十', badge:'10', kind:'stiff', ok:false, why:'ten 是十，比十二少两个。' }
    ],
    explain:'💡 twelve（12）和 twenty（20）都是 tw 开头，最容易记混：十二个月、二十可不一样大。',
    takeaway:'twelve = 十二 🕛' },

  { id:'a-68', pack:'color', level:2, type:'word', scene:'🎨 颜色数字篇', emoji:'0️⃣',
    situation:'篮子里的苹果被吃光了，一个都不剩，外教问现在有几个。', quote:'',
    note:'什么都没有，一个也没有。', ask:'这个数字用英语怎么说？',
    options:[
      { text:'zero', note:'零', badge:'0', kind:'stiff', ok:true, why:'zero 是零，一个都没有。' },
      { text:'one', note:'一', badge:'1', kind:'stiff', ok:false, why:'one 是一，至少还有一个。' },
      { text:'ten', note:'十', badge:'10', kind:'stiff', ok:false, why:'ten 是十，那可有不少呢。' }
    ],
    explain:'💡 一个都没有就是 zero（零）。比分 0 比 0 就是 zero-zero。',
    takeaway:'zero = 零 0️⃣' }

  ]);

  /* ---------- 🐶 动物篇（加餐 5） ---------- */
  EN.add('starter1', 'animal', [

  { id:'a-69', pack:'animal', level:2, type:'word', scene:'🐶 动物篇', emoji:'🦒',
    situation:'照片上的动物脖子特别特别长，能吃到大树最高处的叶子。', quote:'',
    note:'它是世界上最高的动物。', ask:'这个动物用英语怎么说？',
    options:[
      { text:'giraffe', note:'长颈鹿', badge:'长颈鹿', kind:'stiff', ok:true, why:'giraffe 是长颈鹿，脖子最长。' },
      { text:'elephant', note:'大象', badge:'大象', kind:'stiff', ok:false, why:'elephant 是大象，鼻子长，但脖子不长。' },
      { text:'horse', note:'马', badge:'马', kind:'stiff', ok:false, why:'horse 是马，跑得快，脖子没那么长。' }
    ],
    explain:'💡 长脖子的是 giraffe 长颈鹿；长鼻子的是 elephant 大象。',
    takeaway:'giraffe = 长颈鹿 🦒' },

  { id:'a-70', pack:'animal', level:2, type:'word', scene:'🐶 动物篇', emoji:'🐧',
    situation:'照片上的动物穿着“黑白礼服”，走路一摇一摆，住在很冷的地方。', quote:'',
    note:'它有翅膀，却不会飞，但很会游泳。', ask:'这个动物用英语怎么说？',
    options:[
      { text:'penguin', note:'企鹅', badge:'企鹅', kind:'stiff', ok:true, why:'penguin 是企鹅，会游泳不会飞。' },
      { text:'duck', note:'鸭子', badge:'鸭子', kind:'stiff', ok:false, why:'duck 是鸭子，也会游泳，但会飞，住在池塘。' },
      { text:'bird', note:'鸟', badge:'鸟', kind:'stiff', ok:false, why:'bird 是鸟，大多会飞，企鹅是特别的那种。' }
    ],
    explain:'💡 penguin（企鹅）是不会飞的鸟：有翅膀，却用来游泳。',
    takeaway:'penguin = 企鹅 🐧' },

  { id:'a-71', pack:'animal', level:1, type:'word', scene:'🐶 动物篇', emoji:'🐭',
    situation:'照片上灰灰的小动物，尖嘴巴、长尾巴，最爱偷东西吃，见了猫就跑。', quote:'',
    note:'它个头很小，吱吱叫。', ask:'这个动物用英语怎么说？',
    options:[
      { text:'mouse', note:'老鼠', badge:'老鼠', kind:'stiff', ok:true, why:'mouse 是老鼠，小小的怕猫。' },
      { text:'cat', note:'猫', badge:'猫', kind:'stiff', ok:false, why:'cat 是猫，正是老鼠最怕的那个。' },
      { text:'rabbit', note:'兔子', badge:'兔子', kind:'stiff', ok:false, why:'rabbit 是兔子，耳朵长，比老鼠大。' }
    ],
    explain:'💡 一小一天敌：mouse 老鼠（小、会跑）和 cat 猫（专抓老鼠）。',
    takeaway:'mouse = 老鼠 🐭' },

  { id:'a-72', pack:'animal', level:1, type:'word', scene:'🐶 动物篇', emoji:'🐢',
    situation:'照片上的动物背着一个硬硬的壳，走得慢吞吞，一有危险就缩进壳里。', quote:'',
    note:'龟兔赛跑里跑赢的就是它。', ask:'这个动物用英语怎么说？',
    options:[
      { text:'turtle', note:'乌龟', badge:'乌龟', kind:'stiff', ok:true, why:'turtle 是乌龟，背着壳走得慢。' },
      { text:'rabbit', note:'兔子', badge:'兔子', kind:'stiff', ok:false, why:'rabbit 是兔子，跑得快，龟兔赛跑里输了的那个。' },
      { text:'frog', note:'青蛙', badge:'青蛙', kind:'stiff', ok:false, why:'frog 是青蛙，会跳，没有壳。' }
    ],
    explain:'💡 龟兔赛跑：turtle 乌龟（慢、有壳）赢了 rabbit 兔子（快、贪睡）。',
    takeaway:'turtle = 乌龟 🐢' }

  ]);

})(window.EN);
