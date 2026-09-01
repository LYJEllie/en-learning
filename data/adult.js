/* ============================================================
   🧑‍💼 成人地道题库（4 题 · 四大类各 1 题）
   四个大类都放在这一个文件里；题变多时可以照小学生那样一类一个文件。
   ============================================================ */
(function (EN) {
  "use strict";

  EN.add('adult', null, [

  {
    id:'o-01', pack:'order', level:1, type:'listening',
    scene:'🏪 赛百味点餐篇',
    situation:'在 Subway 点三明治，面包、肉、蔬菜都选完了，店员最后把它拿起来，转头问你一句：',
    quote:'Toasted?',
    note:'她的手已经伸向烤箱了，就等你一个字。你想要加热。',
    ask:'你想要加热，最自然的回答是？',
    options:[
      { text:'Yes, heat it please.', note:'字面直译，略显生硬', badge:'直译', kind:'stiff', ok:false,
        why:'语法没错，但 heat 在英语里更偏"把东西弄热"的动作描述，用在这里像在给店员下工序说明，一听就是翻译腔。' },
      { text:'Yes, please.', note:'标准且礼貌', badge:'地道', kind:'native', ok:true,
        why:'对方已经把问题说完整了，你只需要接住那个"yes"，加上 please 就是完整、礼貌又自然的回答。' },
      { text:'Yes, microwave.', note:'粗鲁，像在命令', badge:'踩雷', kind:'trap', ok:false,
        why:'不但指定了工具，而且 Subway 用的是烤箱不是微波炉。蹦出一个名词当命令，听感非常冲。' }
    ],
    explain:'💡 听力避坑：老外问"Toasted?"就是问你要不要烤/加热，最地道自然的回答就是"Yes, please."。千万别大喊"Microwave（微波炉）"哦！',
    takeaway:'店员把问题问完整了，你只要接一句 Yes, please. / No, thanks.'
  },
  {
    id:'t-01', pack:'travel', level:1, type:'listening',
    scene:'☕ 机场咖啡厅篇',
    situation:'在国外机场咖啡厅点餐，服务员把咖啡递给你，顺便问了一句：',
    quote:'Room for milk?',
    note:'你脑子里第一反应是"room = 房间"，然后彻底卡住了。',
    ask:'她其实是想问什么？',
    options:[
      { text:'你的酒店房间里有牛奶吗？', note:'直译误区', badge:'踩雷', kind:'trap', ok:false,
        why:'把 room 当成"房间"就掉进坑了。咖啡师不会关心你住哪儿，这句话的场景永远发生在杯子上。' },
      { text:'咖啡杯里需要留点空间加牛奶吗？', note:'高频地道口语', badge:'地道', kind:'native', ok:true,
        why:'完整说法是 "Do you want room for milk?"——要不要少倒一点，给牛奶留出空间。' },
      { text:'牛奶需要放进冰箱吗？', note:'离谱翻译', badge:'离谱', kind:'trap', ok:false,
        why:'和冰箱毫无关系，纯属把陌生短语硬凑成一个能理解的句子。' }
    ],
    explain:'💡 地道口语：Room 在这里不是房间，而是空间（Space）。服务员是在问你要不要倒太满，方便你呆会儿自己加奶或加糖。',
    takeaway:'Room for milk? = 要不要留空间加奶；要就 Yes, please，不要就 No, fill it up.'
  },
  {
    id:'w-01', pack:'office', level:3, type:'social',
    scene:'💼 外企职场社交篇',
    situation:'外企开会，老板兴致勃勃提了一个方案，你一听就知道落地不了，但当着全组的面得给足面子。',
    quote:'',
    note:'所有人都在等你表态，包括老板。',
    ask:'你想委婉拒绝，作为优雅的职场人应该说？',
    options:[
      { text:"I don't agree with you.", note:'太耿直，空气瞬间凝固', badge:'耿直', kind:'trap', ok:false,
        why:'语法完全正确，但在英语会议里这是把话说死的说法，等于当众否定对方本人而不是方案。' },
      { text:'Your idea is bad.', note:'职场自杀式发言', badge:'踩雷', kind:'trap', ok:false,
        why:'直接给对方的想法定性为 bad，没有任何缓冲，中文里也不会这么说话。' },
      { text:'I see your point, but built on that, what if we...', note:'既给面子又提出修正', badge:'高情商', kind:'native', ok:true,
        why:'先确认对方（I see your point），再顺着往上加（built on that），最后用假设句抛出自己的方案，把否定包装成推进。' }
    ],
    explain:'💡 职场情商：在外企直接说"I don\'t agree"是非常粗鲁的。用 C 选项的"Yes, and..."法则，先肯定对方，再用"what if we..."引导出自己的方案，才是高管话术。',
    takeaway:'反对不说 No，说 "I see your point, but what if we..."'
  },
  {
    id:'l-01', pack:'life', level:2, type:'culture',
    scene:'🛒 超市结账篇',
    situation:'在北美超市结账，东西刚扫完，收银员看着你那堆东西问了一句：',
    quote:'Paper or plastic?',
    note:'两个词你都认识，连起来却完全不知道在问什么。',
    ask:'他其实是在问你？',
    options:[
      { text:'要纸张还是塑料玩具？', note:'完全想偏', badge:'离谱', kind:'trap', ok:false,
        why:'超市收银台不卖纸也不卖玩具，这句话的对象永远是"装东西的袋子"。' },
      { text:'要用纸袋装还是塑料袋装？', note:'环保高频问句', badge:'地道', kind:'native', ok:true,
        why:'完整说法是 "Paper or plastic bags?"，问的是购物袋材质，日常被缩成两个词。' },
      { text:'要用纸币付还是刷卡？', note:'误当成支付方式', badge:'踩雷', kind:'trap', ok:false,
        why:'付款方式的问法是 "Cash or card?"，和 paper/plastic 完全是两句话。' }
    ],
    explain:'💡 生活常识：这是国外超市最经典的环保问句，用来询问你使用哪种购物袋。如果是自己带了环保袋，直接回答"I brought my own"即可。',
    takeaway:'Paper or plastic? 问的是袋子；自带袋就说 I brought my own.'
  }

  ]);

})(window.EN);
