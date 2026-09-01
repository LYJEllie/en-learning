/* ============================================================
   🐣 启蒙 L1 · 认单词（12 题 · 认物 / 颜色数字 / 动物 各 4 题）
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

})(window.EN);
