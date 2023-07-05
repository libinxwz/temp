/*
云南活动
 */
const $ = new Env('分类');
// index.js
const fs = require('fs');
var request = require('request')
 
let options = {
 flags: 'a', // 
 encoding: 'utf8', // utf8编码
}
let stderr = fs.createWriteStream('./question.log', options);
// 创建logger
let logger = new console.Console(stderr);
const JD_API_HOST = 'https://webapp.yunnan.cn/new/index.php';

var userInfos=[

	{
		"name":"李斌",//leebear
		"phone":"18651306657",
	},

	
	
	
]
let zhong=false;
let iswait=true;
let m=59;//设置
let s=55;
var count=0;
let isAnswer=false;
var i=0;
let proIp="127.0.0.1:8888";
let isGetDL=false;
var xunghuan=0;
var time=40
//目前620条
var QuestionAll=[{id:193,question:"下列不应投放到红色垃圾桶的是（ ）。",questionType:"单选题",ans:"牙膏皮"},{id:216,question:"分类投放的生活垃圾应当分类收集，禁止将已分类的生活垃圾（ ）。",questionType:"单选题",ans:"混合收集"},{id:113,question:"下面属于可回收物的是（）。",questionType:"单选题",ans:"玻璃瓶"},{id:47,question:"书架上的旧书旧杂志属于（    ）。",questionType:"单选题",ans:" 可回收物"},{id:211,question:"废弃的鼠标垫属于（）。",questionType:"单选题",ans:"其他垃圾"},{id:219,question:"用完的灭蚊剂容器属于（）。",questionType:"单选题",ans:"有害垃圾  "},{id:245,question:"其他垃圾可进行(    )处理。",questionType:"单选题",ans:" 焚烧填埋"},{id:3,question:"变质的香肠属于哪一类垃圾？（  ）",questionType:"单选题",ans:" 厨余垃圾"},{id:18,question:"刚吃完的外卖该怎么分类投放？（ ）",questionType:"单选题",ans:" 分别处理A和B"},{id:189,question:"小娟请同学到家里喝茶，为了保护环境，最好用（ ）",questionType:"单选题",ans:"玻璃杯  "},{id:597,question:"有害垃圾应该投入黑色的垃圾分类桶。",questionType:"判断题",ans:"否"},{id:537,question:"没喝完的饮料瓶，可以直接投入可回收物收集容器。",questionType:"判断题",ans:"否"},{id:604,question:"草稿纸应放入蓝色垃圾桶。",questionType:"判断题",ans:"是"},{id:617,question:"平常喝茶的茶叶渣应扔进绿色垃圾桶中。",questionType:"判断题",ans:"是"},{id:392,question:"受污染卫生纸是纸张的一种，所以属于可回收物。",questionType:"判断题",ans:"否"},{id:291,question:"以下哪些是可回收物？",questionType:"多选题",ans:" 旧书、 旧报纸、 扳手、 金属保温杯"},{id:314,question:"大力开展生活垃圾分类示范区（县）等创建，建立各类(   )的示范模式。",questionType:"多选题",ans:" 可推广、 可复制"},{id:346,question:"下列废弃的瓶罐，哪种不属于可回收物（     ）。",questionType:"多选题",ans:" 陶瓷瓶罐、胶水"},{id:348,question:"推动垃圾分类是为了提高生活垃圾中哪些材料的回收利用率（      ）。",questionType:"多选题",ans:" 废纸、 废塑料、 废金属"},{id:294,question:"哪些不能丢进蓝色垃圾桶?",questionType:"多选题",ans:" 用完的杀虫剂瓶子、 橘子皮、 用过的湿巾"},{id:98,question:"洗甲水是（  ）。",questionType:"单选题",ans:" 有害垃圾"},{id:269,question:"健身用的金属杠铃是（）。",questionType:"单选题",ans:" 可回收物"},{id:223,question:"生活垃圾以（ ）、（ ）、有害垃圾、其他垃圾为基本分类标准。",questionType:"单选题",ans:" 厨余垃圾、可回收物"},{id:181,question:"受污染的纸类物质属于（ ）。",questionType:"单选题",ans:"其他垃圾"},{id:70,question:"已经过期的炒菜用的香料是（  ）。",questionType:"单选题",ans:" 厨余垃圾"},{id:239,question:"吃剩的糖果属于（   ）。",questionType:"单选题",ans:" 厨余垃圾"},{id:258,question:"与其他垃圾相比,（ ）含有丰富营养元素和有机质，具有很大回收利用价值。",questionType:"单选题",ans:"厨余垃圾"},{id:265,question:"出门买菜用（    ），是相对环保的。",questionType:"单选题",ans:"帆布袋"},{id:511,question:"淘汰的旧羽绒服属于可回收物。",questionType:"判断题",ans:"是"},{id:452,question:"发霉的腊肉要丢进绿色垃圾桶。",questionType:"判断题",ans:"是"},{id:564,question:"国家鼓励产品的生产者开展生态设计，促进资源回收利用。",questionType:"判断题",ans:"是"},{id:622,question:"外出野餐，自带食物，结束后把垃圾带走，这样很环保。",questionType:"判断题",ans:"是"},{id:299,question:"下面哪类生活垃圾可回收利用?",questionType:"多选题",ans:" 纸板箱、 旧书"},{id:353,question:"县级以上地方人民政府环境卫生主管部门负责组织开展厨余垃圾（）处理工作。",questionType:"多选题",ans:" 资源化、 无害化"},{id:293,question:"哪些不能丢进绿色垃圾桶?",questionType:"多选题",ans:" 废水银血压计、 废旧衣物"},{id:349,question:"下列哪些是生活中的有害垃圾（     ）。",questionType:"多选题",ans:" 含汞荧光灯、 水银温度计、 过期药品"},{id:306,question:"下列购物行为，哪些有利于节能环保？",questionType:"多选题",ans:"自带环保袋、尽量不买一次性用品、购买简易包装的商品"},{id:139,question:"用过的胶水应投入（ ）。",questionType:"单选题",ans:"黑色垃圾桶"},{id:174,question:"其他垃圾应投入（  ）颜色的垃圾分类桶。",questionType:"单选题",ans:"黑色"},{id:64,question:"扎紧粽叶的绑绳是（   ）。",questionType:"单选题",ans:" 其他垃圾"},{id:190,question:"下列不属于可回收物的是（  ）。",questionType:"单选题",ans:"用过的餐巾纸"},{id:37,question:"锻炼用的金属哑铃废弃后可以丢入（   ）桶。",questionType:"单选题",ans:" 可回收物"},{id:145,question:"用过的一次性面巾纸属于（ ）。",questionType:"单选题",ans:"其他垃圾"},{id:4,question:"槟榔渣属于哪类垃圾？（ ）",questionType:"单选题",ans:" 厨余垃圾"},{id:137,question:"饼干屑属于（ ）。",questionType:"单选题",ans:"厨余垃圾"},{id:128,question:"金属花架属于（  ）。",questionType:"单选题",ans:"可回收物"},{id:264,question:"下列不属于厨余垃圾的是（    ）。",questionType:"单选题",ans:" 洗干净的牛奶盒"},{id:513,question:"只要将垃圾投放到垃圾桶中就可以了，无需对垃圾进行分类处理。",questionType:"判断题",ans:"否"},{id:391,question:"面膜是厨余垃圾。",questionType:"判断题",ans:"否"},{id:417,question:"过期药品及其包装物归属有害垃圾。",questionType:"判断题",ans:"是"},{id:457,question:"动物内脏可以用来做环保酵素。",questionType:"判断题",ans:"否"},{id:467,question:"阳台上放花的金属花架是可回收物。",questionType:"判断题",ans:"是"},{id:355,question:"厨余垃圾也称有机垃圾，具体是指（      ）。",questionType:"多选题",ans:" 厨余果皮、 凋败花草、 动物内脏果核籽"},{id:370,question:"哪些垃圾放置在有害垃圾桶内（ ）、（ ）、（ ）。",questionType:"多选题",ans:" 水银温度计、 废血压计、 废相纸"},{id:284,question:"以下哪些要丢进厨余垃圾桶?",questionType:"多选题",ans:" 腐肉、 鸭蛋壳、 烂菜根"},{id:371,question:"投放可回收物时，应遵守以下哪些要求？",questionType:"多选题",ans:"废纸类应保持清洁干燥、有外包装物的纸箱应清空后压扁、玻璃等尖锐利器物品应包装牢固、纺织物应清洗折好后打包投放"},{id:325,question:"任何个人及单位不得擅自(    )垃圾站等环境卫生设施或改变其用途。",questionType:"多选题",ans:" 拆除、 占用、 关闭"},{id:118,question:"废旧荧光灯管属于（ ）。",questionType:"单选题",ans:"有害垃圾"},{id:125,question:"火柴属于（  ）。",questionType:"单选题",ans:"其他垃圾"},{id:49,question:"馊掉的鸡胸肉要丢进（     ）桶。",questionType:"单选题",ans:" 厨余垃圾"},{id:96,question:"废弃的染发剂是（  ）。",questionType:"单选题",ans:" 有害垃圾"},{id:25,question:"坏掉的电脑属于哪类垃圾？（ ）",questionType:"单选题",ans:" 可回收物"},{id:203,question:"下列哪个不是有害垃圾（ ）？",questionType:"单选题",ans:"废塑料"},{id:108,question:"使用之后的猫砂是（  ）。",questionType:"单选题",ans:" 其他垃圾"},{id:26,question:"破洞了的受污染的塑料袋属于哪类垃圾？（ ）",questionType:"单选题",ans:" 其他垃圾"},{id:566,question:"破了的塑料盆属于可回收物。",questionType:"判断题",ans:"是"},{id:593,question:"城市生活垃圾从人类活动中产生。",questionType:"判断题",ans:"是"},{id:525,question:"废弃电子产品可直接放入生活垃圾中丢弃，不必送回厂家或专门回收机构处理。",questionType:"判断题",ans:"否"},{id:441,question:"用完的笔芯是可回收物。",questionType:"判断题",ans:"否"},{id:385,question:"发霉的奶酪直接倒进厨余垃圾桶。",questionType:"判断题",ans:"是"},{id:361,question:"下列属于其他垃圾的是（     )。",questionType:"多选题",ans:" 脏污的卫生巾  、 自行车轮胎"},{id:372,question:"城市生活垃圾分类工作应当遵循（  ）的原则。",questionType:"多选题",ans:" 先易后难、 循序渐进、 分步实施"},{id:316,question:"产品包装优先选择采用(    )或者低毒低害的材料。",questionType:"多选题",ans:" 易回收、 易拆解、 易降解、 无毒无害"},{id:340,question:"下列垃圾中，适合用堆肥等处理方法处理的是(   )。",questionType:"多选题",ans:"鸡蛋壳、水果皮、烂菜叶"},{id:243,question:"“世界上没有垃圾，只有放错了地方的宝藏”这句话是(    )说的。",questionType:"单选题",ans:" 但丁"},{id:5,question:"立夏蛋的蛋壳属于哪一类垃圾?（ ）",questionType:"单选题",ans:" 厨余垃圾"},{id:213,question:"咖啡渣属于（）。",questionType:"单选题",ans:"厨余垃圾"},{id:244,question:"依层级管理职责建立市、区县、街镇(    )生活垃圾全程分类监管系统。",questionType:"单选题",ans:" 三级"},{id:15,question:"苹果皮属于？（ ）",questionType:"单选题",ans:" 厨余垃圾"},{id:30,question:"胶卷属于哪类垃圾？（ ）",questionType:"单选题",ans:" 有害垃圾"},{id:157,question:"鱼的内脏属于（  ）。",questionType:"单选题",ans:"厨余垃圾"},{id:183,question:"旧毛巾应投入（  ）。",questionType:"单选题",ans:"黑色垃圾桶"},{id:77,question:"吃剩的螺蛳粉是（  ）。",questionType:"单选题",ans:" 厨余垃圾"},{id:498,question:"宠物毛发是其他垃圾。",questionType:"判断题",ans:"是"},{id:493,question:"未被染污的塑料餐盒属于可回收物。",questionType:"判断题",ans:"是"},{id:466,question:"冬天装热水的金属保温杯是其他垃圾。",questionType:"判断题",ans:"否"},{id:446,question:"食物残渣是厨余垃圾。",questionType:"判断题",ans:"是"},{id:315,question:"积极推广(    )代替产品，规范塑料废弃物回收利用。",questionType:"多选题",ans:" 可循环、 易回收、 可降解"},{id:377,question:"以下（）不是正确的环保节能习惯。",questionType:"多选题",ans:"使用塑料袋用品、用含苯的胶水、修正液"},{id:339,question:"下列家庭垃圾中适合于用堆肥法处理的是（  ）。",questionType:"多选题",ans:"瓜果壳、剩余饭菜"},{id:362,question:"透明胶属于（   ），金属烧烤架属于（    ）。",questionType:"多选题",ans:" 其他垃圾、 可回收物"},{id:347,question:"鸡骨头和金属衣架属于什么垃圾（     ）。",questionType:"多选题",ans:" 厨余垃圾、 可回收物"},{id:278,question:"生活垃圾分类的方法，能放置在红色垃圾桶的废弃垃圾有哪些（    ）。",questionType:"单选题",ans:" 过期药品、油漆桶"},{id:79,question:"泡过的枸杞是（  ）。",questionType:"单选题",ans:" 厨余垃圾"},{id:127,question:"鱼骨头属于（ ）。",questionType:"单选题",ans:"厨余垃圾"},{id:39,question:"废弃的杀虫剂要投入（  ）垃圾桶。",questionType:"单选题",ans:"红色"},{id:165,question:"在自然环境中，以下哪类垃圾袋最易降解？（ ）",questionType:"单选题",ans:"纯淀粉基垃圾袋"},{id:178,question:"废报纸属于（  ）。",questionType:"单选题",ans:"可回收物"},{id:54,question:"灰土是(   )。",questionType:"单选题",ans:" 其他垃圾"},{id:175,question:"有害垃圾应投入（  ）颜色的垃圾分类桶。  ",questionType:"单选题",ans:"红色"},{id:217,question:"运送至垃圾焚烧发电厂的生活垃圾是（）。",questionType:"单选题",ans:"其他垃圾"},{id:78,question:"废弃的假发是（   ）。",questionType:"单选题",ans:" 其他垃圾"},{id:497,question:"所有电池都是有害垃圾。",questionType:"判断题",ans:"否"},{id:471,question:"吃剩的鲫鱼是厨余垃圾。",questionType:"判断题",ans:"是"},{id:463,question:"钉钉子用的铁榔头是其他垃圾。",questionType:"判断题",ans:"否"},{id:540,question:"生活污水和生活垃圾处理不当会对地下水造成严重污染。",questionType:"判断题",ans:"是"},{id:333,question:"下列哪些电池属于有害垃圾：（  ）。",questionType:"多选题",ans:"纽扣电池、手机电池、锂离子电池、氧化汞电池"},{id:326,question:"以下（   ）是正确的环保节能习惯。",questionType:"多选题",ans:"用电子邮件代替纸质信函、纸张双面打印、复印"},{id:301,question:"旧电影杂志应该放在（）的（）垃圾桶里。",questionType:"多选题",ans:"  蓝色、 可回收物"},{id:317,question:"县级以上地方人民政府应当加快建立(    )的生活垃圾管理系统。",questionType:"多选题",ans:" 分类投放、 分类收集、 分类运输、 分类处理"},{id:42,question:"打印机用的废硒鼓墨盒是（   ）。",questionType:"单选题",ans:" 有害垃圾"},{id:87,question:"污损的破纱线手套是（  ）。",questionType:"单选题",ans:" 其他垃圾"},{id:215,question:"用过的牙签、牙线属于（ ）。",questionType:"单选题",ans:"其他垃圾"},{id:48,question:"掉地上碎裂的陶瓷摆件是（     ）。",questionType:"单选题",ans:" 其他垃圾"},{id:112,question:"以下生活垃圾中属于厨余垃圾的是（  ）。",questionType:"单选题",ans:"西瓜皮"},{id:101,question:"吃剩的披萨是（  ）。",questionType:"单选题",ans:" 厨余垃圾"},{id:234,question:"收集容器的颜色、图文标识应当统一规范、清晰醒目、(    )",questionType:"单选题",ans:" 易于辨识"},{id:248,question:"生锈的锁属于（）。",questionType:"单选题",ans:" 可回收物"},{id:557,question:"生活垃圾应当做到日集日清，车辆保持容貌整洁密闭运输，不得暴露散落滴漏。",questionType:"判断题",ans:"是"},{id:615,question:"今天我们举办活动时张贴的漂亮喷绘画布，属于可回收物。",questionType:"判断题",ans:"否"},{id:469,question:"过保质期的肉松面包要丢进黑色垃圾桶。",questionType:"判断题",ans:"否"},{id:489,question:"废纸箱作为可回收物处理时，先清空，后将封箱胶带去除并压扁再投放。",questionType:"判断题",ans:"是"},{id:524,question:"宠物饲料属于其他垃圾。",questionType:"判断题",ans:"否"},{id:365,question:"以下哪些垃圾不属于其他垃圾。（       )。",questionType:"多选题",ans:" 剩饭、剩菜、 盆栽落叶"},{id:351,question:"以下哪些垃圾属于有害垃圾（    ）。",questionType:"多选题",ans:" 纽扣电池、 废药品、 水银温度计"},{id:262,question:"过期的猫粮属于(      )。",questionType:"单选题",ans:" 厨余垃圾"},{id:199,question:"下面不属于厨余垃圾的是（  ）。",questionType:"单选题",ans:"使用过的一次性纸杯"},{id:92,question:"葡萄皮是（  ）。",questionType:"单选题",ans:" 厨余垃圾"},{id:194,question:"下面属于其他垃圾的是（  ）。",questionType:"单选题",ans:"毛发    "},{id:134,question:"生活垃圾分类后，（  ），可进行降解堆肥处理。",questionType:"单选题",ans:"厨余垃圾"},{id:9,question:"厨余垃圾应该投进什么颜色的垃圾桶内？（ ）",questionType:"单选题",ans:" 绿色"},{id:7,question:"吃剩的饼干渣是什么垃圾？（ ）",questionType:"单选题",ans:" 厨余垃圾"},{id:184,question:"下列不属于厨余垃圾特点是（ ）。",questionType:"单选题",ans:"无机质含量高"},{id:106,question:"用完的记号笔是（  ）。",questionType:"单选题",ans:" 其他垃圾"},{id:428,question:"移动电源是有害垃圾。",questionType:"判断题",ans:"是"},{id:521,question:"农村地区由于垃圾数量少，不存在垃圾分类的必要性。",questionType:"判断题",ans:"否"},{id:492,question:"碎掉的窗户玻璃是其他垃圾。",questionType:"判断题",ans:"否"},{id:518,question:"废胶片及废像纸是有害垃圾。",questionType:"判断题",ans:"是"},{id:429,question:"废弃的铅蓄电池是其他垃圾。",questionType:"判断题",ans:"否"},{id:296,question:"以下属于其他垃圾的是?",questionType:"多选题",ans:"被可乐污染的纸、 烟头、 装过披萨的塑料袋、 摔碎的陶瓷碗"},{id:328,question:"盛装过农药或其他毒害品的包装废弃物，在未作无害处理的条件下，应（ ）。",questionType:"多选题",ans:" 安全贮存、 放在指定归集点"},{id:73,question:"金属挖耳勺是（  ）。",questionType:"单选题",ans:" 可回收物"},{id:146,question:"有害垃圾应投入（  ）颜色的垃圾分类桶。",questionType:"单选题",ans:"红色"},{id:230,question:"(    )收集、运输、集中转运和处置单位，不得擅自停止相关活动。",questionType:"单选题",ans:" 生活垃圾"},{id:95,question:"过期的维C银翘片是（  ）。",questionType:"单选题",ans:" 有害垃圾"},{id:81,question:"过期的布洛芬胶囊是（  ）。",questionType:"单选题",ans:" 有害垃圾"},{id:126,question:"过期的阿莫西林属于（ ）。",questionType:"单选题",ans:"有害垃圾"},{id:142,question:"用完的消毒剂属于（  ）。",questionType:"单选题",ans:"有害垃圾"},{id:389,question:"家庭日常生活中打碎的陶瓷碗碟属于可回收物。",questionType:"判断题",ans:"否"},{id:464,question:"种花用的铁铲子是可回收物。",questionType:"判断题",ans:"是"},{id:536,question:"鸡蛋壳是厨余垃圾。",questionType:"判断题",ans:"是"},{id:444,question:"用过的电蚊香片属于其他垃圾。",questionType:"判断题",ans:"是"},{id:544,question:"孩子上学用的教辅书是属于可回收物。",questionType:"判断题",ans:"是"},{id:352,question:"以下哪些垃圾属于厨余垃圾（     ）。",questionType:"多选题",ans:" 蕃茄酱、 瓜果皮"},{id:345,question:"以下生活垃圾中可以回收利用的有几种（      ）。",questionType:"多选题",ans:" 金属、 塑料、 玻璃"},{id:286,question:"以下（ ）丢进黑色垃圾桶是正确的。",questionType:"多选题",ans:" 用过的面膜、 被污染的海绵"},{id:289,question:"以下哪些是有害垃圾？",questionType:"多选题",ans:" 过期的降压药、 破碎的水银温度计"},{id:246,question:"有害垃圾包括灯管、家用化学品和(    )等。",questionType:"单选题",ans:" 充电电池"},{id:86,question:"剪掉的染色头发是（   ）。",questionType:"单选题",ans:" 其他垃圾"},{id:214,question:"家庭日常打碎的陶瓷碗碟属于（ ）。",questionType:"单选题",ans:"其他垃圾"},{id:268,question:"鸡鸭的内脏属于（）垃圾。",questionType:"单选题",ans:" 厨余垃圾"},{id:93,question:"吃剩的油条是（  ）。",questionType:"单选题",ans:" 厨余垃圾"},{id:36,question:"露营后破损金属烧烤架属于（   ）。",questionType:"单选题",ans:" 可回收物"},{id:131,question:"破碎的陶瓷砖属于（  ）。",questionType:"单选题",ans:"其他垃圾"},{id:602,question:"厨余垃圾可以作为肥料滋养土壤、庄稼。",questionType:"判断题",ans:"是"},{id:607,question:"家庭中有清香味道的杀虫剂不属于有害垃圾。",questionType:"判断题",ans:"否"},{id:455,question:"用果皮做的拼盘不属于厨余垃圾。",questionType:"判断题",ans:"否"},{id:568,question:"要加快以资源化利用为主的厨余垃圾处置设施建设。",questionType:"判断题",ans:"是"},{id:321,question:"电子商务、快递、外卖等行业应当优先采用(    )包装物。",questionType:"多选题",ans:" 可重复使用的、 易回收利用的"},{id:379,question:"分类投放的生活垃圾应当（  ）。",questionType:"多选题",ans:" 分类运输、 分类收集"},{id:288,question:"以下哪些不属于可回收物？",questionType:"多选题",ans:"  餐巾纸、  口香糖、  马桶刷"},{id:227,question:"肉碎骨属于（）。",questionType:"单选题",ans:" 厨余垃圾"},{id:241,question:"广泛开展垃圾分类宣传活动，促进形成(    )的良好习惯。",questionType:"单选题",ans:" 生活垃圾分类"},{id:6,question:"白茶茶叶渣应扔进哪个垃圾桶？（ ）",questionType:"单选题",ans:" 厨余垃圾"},{id:206,question:"使用过的塑料袋属于（ ）。",questionType:"单选题",ans:"其他垃圾"},{id:236,question:"商品（ ）和( )应严格执行国家和本市对限制产品过度包装的标准和要求。",questionType:"单选题",ans:"生产者，消费者"},{id:220,question:"使用过的隐形眼镜（美瞳）属于（）。",questionType:"单选题",ans:"其他垃圾"},{id:614,question:"用完的杀虫喷雾瓶清洁干净是可以投入蓝色垃圾桶中。",questionType:"判断题",ans:"否"},{id:550,question:"家庭盆栽废弃的树叶属于其他垃圾，应投入其他垃圾桶。",questionType:"判断题",ans:"否"},{id:594,question:"我国城市人均日产垃圾量是10公斤。",questionType:"判断题",ans:"否"},{id:619,question:"破掉的毛巾、有破洞的T恤衫是有害垃圾。",questionType:"判断题",ans:"否"},{id:336,question:"垃圾处理必须遵循“（  ）”的原则。",questionType:"多选题",ans:" 减量化、 无害化、 资源化"},{id:375,question:"哪些垃圾放置在蓝色垃圾桶内？",questionType:"多选题",ans:"废金属、玻璃瓶、纸板箱"},{id:356,question:"哪些垃圾放置在红色垃圾桶内（      )。",questionType:"多选题",ans:" 水银温度计、 过期药品、 废旧灯管灯泡"},{id:363,question:"下列属于可回收物的是(        )。",questionType:"多选题",ans:" 干净的牛奶盒、 旧报纸"},{id:283,question:"以下有哪些是可回收物？",questionType:"多选题",ans:" 生锈的钥匙、 废金属罐"},{id:43,question:"家用的牙线属于（  ）。",questionType:"单选题",ans:" 其他垃圾"},{id:171,question:"日光灯管属于（  ）。",questionType:"单选题",ans:"有害垃圾"},{id:91,question:"受污染的明信片是（  ）。",questionType:"单选题",ans:" 其他垃圾"},{id:201,question:"下面属于可回收物的是（  ）。",questionType:"单选题",ans:"帆布包"},{id:68,question:"家养的猫咪喜欢吃的猫草是（  ）。",questionType:"单选题",ans:" 厨余垃圾"},{id:271,question:"(      )是国内第一个进入垃圾强制分类的城市。",questionType:"单选题",ans:" 上海"},{id:207,question:"洗干净的罐头盒属于（ ）",questionType:"单选题",ans:"可回收物"},{id:279,question:"下列哪组均属于其他垃圾（    ）。",questionType:"单选题",ans:" 一次性饭盒、用过的餐巾纸"},{id:430,question:"旧拖把是其他垃圾。",questionType:"判断题",ans:"是"},{id:427,question:"空调清洗剂是其他垃圾。",questionType:"判断题",ans:"否"},{id:533,question:"家庭的枯萎鲜花属于厨余垃圾。",questionType:"判断题",ans:"是"},{id:412,question:"婴儿喝的奶粉过期了，这个奶粉是厨余垃圾。",questionType:"判断题",ans:"是"},{id:480,question:"家庭枯萎的植物与鲜花属于其他垃圾。",questionType:"判断题",ans:"否"},{id:367,question:"下列属于有害垃圾的是（       ）。",questionType:"多选题",ans:" 废铅蓄电池 、 过期药品、 废水银温度计  "},{id:344,question:"下列关于铝罐垃圾处理的说法正确的是（   ）。",questionType:"多选题",ans:"铝罐是可以回收的、应将铝罐中的液体清除、把铝罐压平，减少其体积、不应将垃圾塞入罐中"},{id:224,question:"可回收物是指生活中产生的（）的可资源化利用的废弃物。",questionType:"单选题",ans:" 未污染的适宜回收的"},{id:130,question:"废相纸底片属于（ ）。",questionType:"单选题",ans:"有害垃圾"},{id:202,question:"垃圾分类可以减少排碳量吗（  ）？",questionType:"单选题",ans:"可以  "},{id:132,question:"通过分类收集、分类运输和分类处理，实现垃圾减量化、资源化、（  ）。",questionType:"单选题",ans:"无害化处理"},{id:231,question:"可回收物交由资源化利用企业进行(    )。",questionType:"单选题",ans:" 回收利用"},{id:420,question:"废旧的拳击手套是可回收物。",questionType:"判断题",ans:"否"},{id:576,question:"农业固体废物，是指在农业生产活动中产生的固体废物。",questionType:"判断题",ans:"是"},{id:454,question:"金桔柠檬水里的金桔要丢进绿色垃圾桶。",questionType:"判断题",ans:"是"},{id:499,question:"小明把废玻璃和废荧光灯管都扔在有害垃圾桶里。",questionType:"判断题",ans:"否"},{id:302,question:"下列关于厨余垃圾的说法正确的是（）。",questionType:"多选题",ans:"通过堆肥处理后成为有机肥料、 果皮蔬菜制作成环保酵素"},{id:162,question:"CT光片属于（  ）。",questionType:"单选题",ans:"有害垃圾"},{id:102,question:"破损的树脂镜片是（  ）。",questionType:"单选题",ans:" 其他垃圾"},{id:168,question:"下面属于其他垃圾的是（  ）。",questionType:"单选题",ans:"用过的面膜    "},{id:84,question:"污损的窗帘是（  ）。",questionType:"单选题",ans:" 其他垃圾"},{id:186,question:"废手机电池属于（  ）。",questionType:"单选题",ans:"有害垃圾"},{id:198,question:"下面不属于可回收物的是（  ）。",questionType:"单选题",ans:"烟蒂"},{id:225,question:"其他垃圾是指除厨余垃圾、（）、有害垃圾以外的生活垃圾。",questionType:"单选题",ans:" 可回收物"},{id:501,question:"有害垃圾可以直接扔到普通垃圾桶里",questionType:"判断题",ans:"否"},{id:548,question:"有害垃圾应当单独存放，存放时间不得超过2年。",questionType:"判断题",ans:"否"},{id:555,question:"杨梅属于厨余垃圾。",questionType:"判断题",ans:"是"},{id:507,question:"过期的感冒药属于有害垃圾。",questionType:"判断题",ans:"是"},{id:282,question:"下面不属于垃圾分类的四个垃圾桶的颜色的是（）？",questionType:"多选题",ans:" 白色、 紫色"},{id:364,question:"垃圾分类桶与之相对应正确的是（        )。",questionType:"多选题",ans:"可回收物-蓝色、有害垃圾-红色、其他垃圾-黑色、厨余垃圾-绿色"},{id:310,question:"《生活垃圾分类标准》包括以下哪些：(    )  。",questionType:"多选题",ans:"设置统一规范、清晰醒目的生活垃圾分类标志、编制生活垃圾分类收集设施的配置规范、制定垃圾分类厢房、环卫接驳点等建设标准、规划收运车辆路线"},{id:266,question:"下列不属于可回收物的是（    ）。",questionType:"单选题",ans:" 陶瓷制品"},{id:104,question:"旧袜子是(   ).",questionType:"单选题",ans:" 其他垃圾"},{id:558,question:"鼓励志愿服务组织开展生活垃圾源头减量、分类投放的宣传、示范和监督活动。",questionType:"判断题",ans:"是"},{id:438,question:"家里养的猫掉的猫毛属于其他垃圾。",questionType:"判断题",ans:"是"},{id:578,question:"随意倾倒抛撒堆放或者焚烧生活垃圾的，处五万元以上五十万元以下的罚款。",questionType:"判断题",ans:"是"},{id:462,question:"爸爸的工具箱里的螺丝、螺帽是其他垃圾。",questionType:"判断题",ans:"否"},{id:290,question:"以下哪些是厨余垃圾?",questionType:"多选题",ans:"  食品残渣、 菜叶子、 鱼骨头"},{id:331,question:"生活垃圾分类制度实施方案基本原则(    )。",questionType:"多选题",ans:"政府推动，全民参与、因地制宜，循序渐进、完善机制，创新发展、协同推进，有效衔接"},{id:368,question:"从事公共交通运输的经营单位，应当及时（）运输过程中产生的生活垃圾。",questionType:"多选题",ans:"清扫、收集"},{id:122,question:"生活垃圾分类的意义是（  ）。",questionType:"单选题",ans:"以上都是"},{id:158,question:"废弃的地毯应投入（）。",questionType:"单选题",ans:"黑色垃圾桶"},{id:140,question:"用过的湿纸巾属于（  ）。",questionType:"单选题",ans:"其他垃圾"},{id:62,question:"吃剩的蓝莓酱是（    ）。",questionType:"单选题",ans:" 厨余垃圾"},{id:250,question:"餐饮经营者、外卖平台应以（）方式提示消费者适量点餐。",questionType:"单选题",ans:" 显著"},{id:150,question:"用过的牙签属于（  ）。",questionType:"单选题",ans:"其他垃圾"},{id:559,question:"目前暂未禁止中华人民共和国境外的固体废物进境倾倒、堆放、处置。",questionType:"判断题",ans:"否"},{id:600,question:"蓄电池/纽扣电池属于有害垃圾。",questionType:"判断题",ans:"是"},{id:551,question:"挂盐水用的玻璃瓶属于生活垃圾中的可回收物，应投放到蓝色垃圾桶。",questionType:"判断题",ans:"否"},{id:320,question:"生活垃圾处理费应当专项用于生活垃圾的(    )等，不得挪作他用。",questionType:"多选题",ans:" 收集、 运输、 处理"},{id:185,question:"沙袋属于（ ）。",questionType:"单选题",ans:"其他垃圾"},{id:274,question:"下列不属于可回收物的是（   ）。",questionType:"单选题",ans:" 废弃的海绵"},{id:259,question:"小朋友学习用的参考书是（  ）。",questionType:"单选题",ans:" 可回收物"},{id:380,question:"被油污污染了的旧报纸是可回收物。",questionType:"判断题",ans:"否"},{id:398,question:"化妆刷属于可回收物。",questionType:"判断题",ans:"否"},{id:523,question:"陶瓷是其他垃圾。",questionType:"判断题",ans:"是"},{id:397,question:"沙袋属于其他垃圾。",questionType:"判断题",ans:"是"},{id:359,question:"下列哪些行为是绿色环保的（      )。",questionType:"多选题",ans:" 用布袋子购物、 乘坐公共交通出行、 电器不用时保持关机状态"},{id:149,question:"在郊外玩的时候，如果没有找到垃圾桶，你应该怎样处理手里的垃圾？（  ）",questionType:"单选题",ans:"放在自己的背包里直到找到垃圾桶"},{id:19,question:"破掉的野餐垫属于（   ）。",questionType:"单选题",ans:" 其他垃圾"},{id:152,question:"裂开的雨鞋是（  ）",questionType:"单选题",ans:"其他垃圾"},{id:76,question:"蚊香灰是（  ）。",questionType:"单选题",ans:" 其他垃圾"},{id:167,question:"消毒剂及其内包装物属于（ ）。",questionType:"单选题",ans:"有害垃圾"},{id:27,question:"坏掉的橡皮鸭属于哪一类垃圾？（ ）",questionType:"单选题",ans:" 其他垃圾"},{id:221,question:"自行车轮胎是（ ）",questionType:"单选题",ans:"其他垃圾"},{id:123,question:"水银温度计属于（ ）。",questionType:"单选题",ans:"有害垃圾"},{id:531,question:"鸡翅是厨余垃圾。",questionType:"判断题",ans:"是"},{id:433,question:"一次性纸杯是纸做的，可以回收利用。",questionType:"判断题",ans:"否"},{id:552,question:"废旧充电电池是有害垃圾，应投放到蓝色垃圾桶。",questionType:"判断题",ans:"否"},{id:281,question:"下列哪些属于可回收物？（  ）",questionType:"多选题",ans:" 快递纸箱、 写完的草稿纸"},{id:309,question:"生活垃圾处理费应当专项用于生活垃圾的（）等，不得挪作他用。",questionType:"多选题",ans:"收集、运输、处理"},{id:197,question:"指甲油属于（ ）。",questionType:"单选题",ans:"有害垃圾"},{id:242,question:"盛装过农药或其他毒害品的包装废弃物，在未作无害处理的条件下，应( )。",questionType:"单选题",ans:" 安全贮存"},{id:160,question:"塑料在自然界可停留（  ）。",questionType:"单选题",ans:"100—200年"},{id:273,question:"有害垃圾应当投放至（    ）。",questionType:"单选题",ans:" 红色垃圾桶"},{id:14,question:"下列材质塑料瓶中哪个才能制成服装。（ ）",questionType:"单选题",ans:" PET塑料瓶"},{id:2,question:"用过的保鲜膜属于哪类垃圾？（  ）",questionType:"单选题",ans:" 其他垃圾"},{id:22,question:"过期药品属于（  ）,需要特殊安全处理。",questionType:"单选题",ans:" 有害垃圾"},{id:307,question:"党政机关应按(    )进行分类。",questionType:"多选题",ans:" 有害垃圾、   可回收物、   厨余垃圾、   其他垃圾"},{id:297,question:"下面哪个不能放进黑色垃圾桶?",questionType:"多选题",ans:" 柚子皮、 旧杂志、 废油漆罐"},{id:72,question:"旧陶瓷浴缸是（  ）。",questionType:"单选题",ans:" 其他垃圾"},{id:229,question:"在文明城区、绿色社区等创建活动中，将(    )作为重要评价指标。",questionType:"单选题",ans:" 垃圾分类"},{id:218,question:"下列废品中，如果没有分类回收，对环境危害最大的是（）。",questionType:"单选题",ans:"纽扣电池"},{id:115,question:"平常喝茶的茶叶渣属于（ ）。",questionType:"单选题",ans:"厨余垃圾"},{id:252,question:"旅游、住宿、餐饮经营者应当按照国家有关规定推行（）一次性用品。",questionType:"单选题",ans:" 不主动提供"},{id:448,question:"黄桃罐头里的黄桃是其他垃圾。",questionType:"判断题",ans:"否"},{id:411,question:"金属园艺工具是可回收物，直接丢进黑色垃圾桶。",questionType:"判断题",ans:"否"},{id:601,question:"烟头属于厨余垃圾。",questionType:"判断题",ans:"否"},{id:538,question:"面膜是厨余垃圾。",questionType:"判断题",ans:"否"},{id:298,question:"垃圾分类的四个分类类别不包括以下哪个?",questionType:"多选题",ans:" 海洋垃圾、 危险废物"},{id:319,question:"农贸市场、农产品批发市场等对所产生的垃圾及时(    ) 。",questionType:"多选题",ans:" 清扫、 分类收集、 妥善处理"},{id:29,question:"鸡毛掸子属于哪类垃圾？（ ）",questionType:"单选题",ans:" 其他垃圾"},{id:80,question:"废弃的围巾是（   ）。",questionType:"单选题",ans:" 可回收物"},{id:12,question:"含镉废电池乱丢对人体可能造成____?（ ）",questionType:"单选题",ans:" 镉中毒"},{id:34,question:"基围虾的虾壳属于（  ）？",questionType:"单选题",ans:" 厨余垃圾"},{id:228,question:"废油漆属于（   ）。",questionType:"单选题",ans:" 有害垃圾"},{id:226,question:"洗干净的废金属易拉罐属于（）。",questionType:"单选题",ans:" 可回收物"},{id:50,question:"被颜料弄脏的旧T恤属于（   ）。",questionType:"单选题",ans:" 其他垃圾"},{id:554,question:"放置于单元楼下的蓝色垃圾桶是放置其他垃圾的，应将剩菜剩饭等放置到桶里。",questionType:"判断题",ans:"否"},{id:406,question:"废弃的传单要丢进黑色垃圾桶。",questionType:"判断题",ans:"否"},{id:603,question:"擦鼻涕的纸巾应放入蓝色垃圾桶。",questionType:"判断题",ans:"否"},{id:366,question:"已经分类投放的生活垃圾，应当按照规定(       )分类处理。",questionType:"多选题",ans:" 分类收集、 分类运输"},{id:285,question:"家里的（ ）是有害垃圾?",questionType:"多选题",ans:" 废杀虫剂、 过期的阿莫西林、 废血压计、 废X光片"},{id:343,question:"城市生活垃圾分类，实施 （  ）。",questionType:"多选题",ans:"分类投放、分类收集、分类运输、分类处置"},{id:161,question:"用过的牙刷属于（  ）。",questionType:"单选题",ans:"其他垃圾"},{id:82,question:"玉米外皮是（  ）。",questionType:"单选题",ans:" 厨余垃圾"},{id:90,question:"过期的花生酱是（  ）。",questionType:"单选题",ans:" 厨余垃圾"},{id:232,question:"收集、运输单位应当对厨余垃圾实行每日(    )、运输。",questionType:"单选题",ans:" 定时收集"},{id:105,question:"用完的杀虫喷雾器是（  ）。",questionType:"单选题",ans:" 有害垃圾"},{id:222,question:"含汞废血压计属于（   ）。",questionType:"单选题",ans:"有害垃圾"},{id:577,question:"进行无害化处置是控制固体废弃物污染的唯一途径。",questionType:"判断题",ans:"否"},{id:382,question:"瓜果皮核、菜根菜头属于厨余垃圾。",questionType:"判断题",ans:"是"},{id:580,question:"禁止随意倾倒、抛撒、堆放或者焚烧生活垃圾。",questionType:"判断题",ans:"是"},{id:341,question:"为保护环境，从源头上减少垃圾数量，我们应该(   )。",questionType:"多选题",ans:"购买大包装的商品、尽量少用或不用一次性用品、在外就餐，剩菜要打包带走"},{id:338,question:"厨余垃圾包括下列哪些选项（  ）。",questionType:"多选题",ans:"动物内脏、碎骨头、瓜果皮"},{id:17,question:"甘蔗渣是什么垃圾？（  ）",questionType:"单选题",ans:" 厨余垃圾"},{id:20,question:"过期的猫粮属于哪一类垃圾？（ ）",questionType:"单选题",ans:" 厨余垃圾"},{id:41,question:"空调清洗剂是（   ）。",questionType:"单选题",ans:" 有害垃圾"},{id:561,question:"看完的杂志属于可回收物。",questionType:"判断题",ans:"是"},{id:402,question:"过期的小柴胡颗粒属于其他垃圾。",questionType:"判断题",ans:"否"},{id:530,question:"吃完的玉米芯可以扔进厨余垃圾桶。",questionType:"判断题",ans:"是"},{id:451,question:"香菇是其他垃圾。",questionType:"判断题",ans:"否"},{id:517,question:"垃圾分类是一项个人行为，与整个社会无关。",questionType:"判断题",ans:"否"},{id:357,question:"放置在红色垃圾桶内的废弃垃圾有（      ）。",questionType:"多选题",ans:" 水银温度计、 空调清洁剂、 废油漆"},{id:374,question:"垃圾的卫生填埋可以有效减少对（）的污染。",questionType:"多选题",ans:"地表水、地下水、土壤、空气"},{id:114,question:"下面应放到黑色垃圾桶的是（  ）。",questionType:"单选题",ans:"用过的纸巾"},{id:45,question:"夏天用完的电蚊香片属于（   ）。",questionType:"单选题",ans:" 其他垃圾"},{id:66,question:"用完的牙膏皮是（   ）。",questionType:"单选题",ans:" 其他垃圾"},{id:8,question:"抽完烟的烟蒂是什么垃圾？（ ）",questionType:"单选题",ans:" 其他垃圾"},{id:155,question:"学生用过的作业本属于（  ）。",questionType:"单选题",ans:"可回收物"},{id:549,question:"看完的旧报纸属于可回收物。",questionType:"判断题",ans:"是"},{id:535,question:"可回收物,包括生活垃圾中未污染的适宜回收和资源利用的垃圾。",questionType:"判断题",ans:"是"},{id:439,question:"双面胶属于其他垃圾。",questionType:"判断题",ans:"是"},{id:388,question:"家庭的枯萎鲜花属于厨余垃圾。",questionType:"判断题",ans:"是"},{id:395,question:"帆布袋属于其他垃圾。",questionType:"判断题",ans:"否"},{id:287,question:"垃圾分类的主要目的是什么？",questionType:"多选题",ans:" 减少垃圾数量、 降低环境污染、 节约资源"},{id:303,question:"下列关于分类垃圾桶的说法，正确的是（）。",questionType:"多选题",ans:"  厨余垃圾桶是绿色的、 其他垃圾桶是黑色的、 有害垃圾桶是红色的、 可回收物桶是蓝色的"},{id:311,question:"鼓励农村家庭厨余垃圾采用就地(    )等方式处理。",questionType:"多选题",ans:"堆肥、沤肥"},{id:337,question:"餐厨垃圾资源化处理技术有哪些（  ）。",questionType:"多选题",ans:"堆肥处理、生物处理、油水分离处理"},{id:121,question:"生活垃圾分类后，（  ）垃圾，主要进行卫生填埋或焚烧处理。",questionType:"单选题",ans:"其他垃圾"},{id:69,question:"猪油渣是（  ）。",questionType:"单选题",ans:" 厨余垃圾"},{id:35,question:"土豆皮要投入（  ）桶。",questionType:"单选题",ans:" 厨余垃圾"},{id:421,question:"洗澡用的浴球是其他垃圾，要投入绿色垃圾桶。",questionType:"判断题",ans:"否"},{id:394,question:"杀虫剂及其包装物属于有害垃圾。",questionType:"判断题",ans:"是"},{id:354,question:"下列属于可回收物的有（     ）。",questionType:"多选题",ans:" 报纸、 塑料玩具、 平板玻璃"},{id:212,question:"甘蔗渣属于（）。",questionType:"单选题",ans:"厨余垃圾"},{id:147,question:"鸡蛋壳属于（  ）。",questionType:"单选题",ans:"厨余垃圾"},{id:170,question:"过期食品属于（  ）。",questionType:"单选题",ans:"厨余垃圾"},{id:410,question:"牙刷、牙线是其他垃圾，要投入蓝色垃圾桶。",questionType:"判断题",ans:"否"},{id:425,question:"搓澡巾是其他垃圾。",questionType:"判断题",ans:"是"},{id:407,question:"露营时烧烤用的金属烧烤架属于可回收物。",questionType:"判断题",ans:"是"},{id:416,question:"废弃充电宝属于有害垃圾。",questionType:"判断题",ans:"是"},{id:565,question:"生活垃圾就是生活中产生的废物。",questionType:"判断题",ans:"否"},{id:350,question:"可回收物包括下列哪些（      ）。",questionType:"多选题",ans:" 废金属、 纸板箱、 玻璃"},{id:376,question:"下列哪些属于可回收物？",questionType:"多选题",ans:"快递纸箱、写完的草稿纸"},{id:32,question:"书架上爷爷的旧书属于哪类垃圾？（ ）",questionType:"单选题",ans:" 可回收物"},{id:57,question:"吃剩的酸豆角是（   ）。",questionType:"单选题",ans:" 厨余垃圾"},{id:605,question:"还剩半瓶的塑料瓶可以扔进蓝色垃圾桶。",questionType:"判断题",ans:"否"},{id:465,question:"切菜用的金属菜刀是可回收物。",questionType:"判断题",ans:"是"},{id:387,question:"鸡鸭内脏是其他垃圾。",questionType:"判断题",ans:"否"},{id:74,question:"烂掉的圣女果是（  ）。",questionType:"单选题",ans:" 厨余垃圾"},{id:40,question:"封快递箱的透明胶带属于（   ）。",questionType:"单选题",ans:" 其他垃圾"},{id:526,question:"瓜果皮核、菜根菜头属于厨余垃圾。",questionType:"判断题",ans:"是"},{id:546,question:"用过的牙刷是可回收物。",questionType:"判断题",ans:"否"},{id:485,question:"充电电池属于有害垃圾。",questionType:"判断题",ans:"是"},{id:300,question:"垃圾分类后可回收物、厨余垃圾、其他垃圾、有害垃圾分别放置于（）?",questionType:"多选题",ans:"  蓝色垃圾桶、 绿色垃圾桶、 黑色垃圾桶、 红色垃圾桶"},{id:373,question:"下列生活垃圾中厨余厨余垃圾的是？",questionType:"多选题",ans:" 厨余果皮、 腐败的蔬菜、 动物内脏"},{id:23,question:"喝茶剩下的茶叶渣是什么垃圾？（ ）",questionType:"单选题",ans:" 厨余垃圾"},{id:55,question:"吃剩的蛋糕是（    ）。",questionType:"单选题",ans:" 厨余垃圾"},{id:16,question:"废弃的钥匙属于哪类垃圾？（  ）",questionType:"单选题",ans:" 可回收物"},{id:172,question:"下面属于其他垃圾的是（  ）。",questionType:"单选题",ans:"陶瓷"},{id:129,question:"生活垃圾分类四色垃圾桶对应的颜色有（  ）。",questionType:"单选题",ans:"绿、蓝、红、黑"},{id:192,question:"螃蟹壳属于（  ），应放入（  ）。",questionType:"单选题",ans:"厨余垃圾，绿色垃圾桶"},{id:99,question:"家庭坏死的水养植物是（  ）。",questionType:"单选题",ans:" 厨余垃圾"},{id:542,question:"卫生纸是纸张的一种，所以属于可回收物。",questionType:"判断题",ans:"否"},{id:431,question:"竹扫把是可回收物。",questionType:"判断题",ans:"否"},{id:332,question:"哪些垃圾放置在红色垃圾桶内？（        ）。",questionType:"多选题",ans:" 水银温度计、 过期药品、 废旧荧光灯管"},{id:308,question:"处置，是指将固体废物焚烧和用其他改变固体废物的(    )特性的方法。",questionType:"多选题",ans:" 物理、 化学、 生物"},{id:318,question:"任何单位和个人禁止随意(    )或者焚烧生活垃圾。",questionType:"多选题",ans:"  倾倒、 抛撒、 堆放"},{id:237,question:"教育部门负责组织开展和监督指导(  )及其他教育机构生活垃圾分类工作。",questionType:"单选题",ans:" 学校、幼儿园"},{id:67,question:"吃完的泡面桶是（  ）。",questionType:"单选题",ans:" 其他垃圾"},{id:256,question:"废弃的救援绳要丢进（   ）桶。",questionType:"单选题",ans:" 其他垃圾"},{id:85,question:"未吃完的巧克力是（   ）。",questionType:"单选题",ans:" 厨余垃圾"},{id:408,question:"自行车的金属车篮可以进行回收利用。",questionType:"判断题",ans:"是"},{id:468,question:"坚果是厨余垃圾。",questionType:"判断题",ans:"是"},{id:323,question:"废品收购、堆放场所不得在居民社区、公共场所(    )，污染周围环境。",questionType:"多选题",ans:" 填埋、 晾晒、 焚烧、 堆放"},{id:240,question:"在餐厨垃圾产生后(    )内将其交给收运单位运输。",questionType:"单选题",ans:" 24小时"},{id:61,question:"未脏污的复印纸是（   ）。",questionType:"单选题",ans:" 可回收物"},{id:151,question:"废弃的雨衣是（  ）",questionType:"单选题",ans:"其他垃圾"},{id:119,question:"断掉的自行车铰链属于（   ）。",questionType:"单选题",ans:"可回收物"},{id:473,question:"妈妈买来吃的河虾属于厨余垃圾。",questionType:"判断题",ans:"是"},{id:453,question:"长霉斑的香肠是厨余垃圾。",questionType:"判断题",ans:"是"},{id:386,question:"鸡翅是厨余垃圾。",questionType:"判断题",ans:"是"},{id:418,question:"废墨盒不是有害垃圾。",questionType:"判断题",ans:"否"},{id:378,question:"关于垃圾分类，以下哪种说法是正确的?",questionType:"多选题",ans:"  回收利用垃圾应尽量清洁干燥、 垃圾分类宣传应从幼儿园开始、 应该鼓励垃圾减量"},{id:334,question:"生活垃圾分类办法是根据（  ）来制定的。",questionType:"多选题",ans:" 垃圾特性、 处理方式、 管理水平"},{id:360,question:"有害垃圾主要包括哪些物品？",questionType:"多选题",ans:"   过期药品  、 废荧光灯管 、  废水银温度计"},{id:124,question:"用过的尿不湿属于（  ）。",questionType:"单选题",ans:"其他垃圾"},{id:111,question:"受污染的一次性餐盒是（  ）。",questionType:"单选题",ans:" 其他垃圾"},{id:459,question:"喝完的可乐罐可以直接丢进蓝色垃圾桶。",questionType:"判断题",ans:"否"},{id:312,question:"依据层级管理职责建立(    )三级生活垃圾全程分类监管系统。",questionType:"多选题",ans:" 市、 区县、 街镇"},{id:369,question:"下列说法正确的是？",questionType:"多选题",ans:"报纸、纸皮属于可回收物、海绵属于其他垃圾"},{id:327,question:"禁止擅自（  ）、（  ）或者（  ）生活垃圾处理设施、场所。",questionType:"多选题",ans:"关闭、闲置、拆除"},{id:156,question:"一次性水笔的笔芯属于（  ）。",questionType:"单选题",ans:"其他垃圾"},{id:249,question:"企业对产品的包装应当合理，防止（  ）包装造成资源浪费。",questionType:"单选题",ans:" 过度"},{id:177,question:"洗干净的塑料瓶属于（  ）。",questionType:"单选题",ans:"可回收物"},{id:164,question:"下面属于可回收物的有（）。",questionType:"单选题",ans:"金属保温杯"},{id:52,question:"挂毛巾的金属毛巾架是（   ）。",questionType:"单选题",ans:" 可回收物"},{id:479,question:"X光片、CT片等属于有害垃圾。",questionType:"判断题",ans:"是"},{id:527,question:"瓜子壳是厨余垃圾。",questionType:"判断题",ans:"是"},{id:472,question:"挂毛巾的金属毛巾架是不可回收物。",questionType:"判断题",ans:"否"},{id:532,question:"鸡鸭内脏是其他垃圾。",questionType:"判断题",ans:"否"},{id:342,question:"垃圾分类的意义有哪些（  ）?",questionType:"多选题",ans:"减少废弃污染，保护环境、有效利用资源，变废为宝、垃圾减量处置，降低成本、减少垃圾收运费用"},{id:272,question:"下列不属于有害垃圾的是（    ）。",questionType:"单选题",ans:"废金属"},{id:275,question:"用过的绳子属于（    ）。",questionType:"单选题",ans:" 其他垃圾"},{id:235,question:"鼓励寄件人使用可降解、(    )使用的环保包装。",questionType:"单选题",ans:" 可循环"},{id:166,question:"纸质的牛奶箱属于（  ）。",questionType:"单选题",ans:"可回收物"},{id:599,question:"洗干净后的牛奶盒等利乐包装属于可回收物。",questionType:"判断题",ans:"是"},{id:496,question:"卫生纸与破陶瓷碗属于同一类垃圾。",questionType:"判断题",ans:"是"},{id:24,question:"花生壳属于哪一类垃圾？（ ）",questionType:"单选题",ans:" 厨余垃圾"},{id:191,question:"目前城市垃圾处理主要方式不包括哪种（  ）？",questionType:"单选题",ans:"简单堆积"},{id:100,question:"食品专用发热包是（  ）。",questionType:"单选题",ans:" 其他垃圾"},{id:399,question:"小孩子喜欢的木头积木属于其他垃圾。",questionType:"判断题",ans:"是"},{id:515,question:"食品残渣应该投放到厨余垃圾桶中。",questionType:"判断题",ans:"是"},{id:582,question:"管理责任人应当开展生活垃圾分类知识宣传普及，引导、监督单位和个人。",questionType:"判断题",ans:"是"},{id:330,question:"生活垃圾分类坚持政府推动、（    ）。",questionType:"多选题",ans:" 全民参与、 城乡统筹、 因地制宜、 简便易行"},{id:295,question:"生活垃圾可以分为（）、（）、（）、（）。",questionType:"多选题",ans:" 有害垃圾、   可回收物、   厨余垃圾、   其他垃圾"},{id:13,question:"废旧的荧光灯管应扔进哪个垃圾桶？（ ）",questionType:"单选题",ans:" 有害垃圾"},{id:148,question:"吃完的橘子皮属于（  ）。",questionType:"单选题",ans:"厨余垃圾"},{id:94,question:"过期冻品是（  ）。",questionType:"单选题",ans:" 厨余垃圾"},{id:401,question:"橡胶篮球属于可回收物。",questionType:"判断题",ans:"否"},{id:545,question:"消毒剂及其包装物属于有害垃圾。",questionType:"判断题",ans:"是"},{id:329,question:"深入推进“光盘行动”，推广( )等，引导餐饮企业免费提供剩菜打包服务。",questionType:"多选题",ans:" 小份菜、 分餐制"},{id:238,question:"从生活垃圾中回收的物质不得用于生产可能危害(    )的产品。",questionType:"单选题",ans:" 人体健康"},{id:276,question:"下列不属于其他垃圾的是(      )。",questionType:"单选题",ans:" 鱼皮"},{id:208,question:"我国城市人均生活垃圾日产量是多少（ ）？",questionType:"单选题",ans:"1.0-1.2公斤"},{id:10,question:"断掉的美工刀刀片属于哪类垃圾？（ ）",questionType:"单选题",ans:" 可回收物"},{id:89,question:"过期大米是（  ）。",questionType:"单选题",ans:" 厨余垃圾"},{id:56,question:"用过的竹签子是（   ）。",questionType:"单选题",ans:" 其他垃圾"},{id:280,question:"哪些垃圾放置在红色垃圾桶内？（ ）",questionType:"多选题",ans:" 水银温度计、 过期药品、 废旧荧光灯管"},{id:11,question:"烂掉的橙子是什么垃圾？（ ）",questionType:"单选题",ans:" 厨余垃圾"},{id:509,question:"从家里垃圾桶里拿出饮料瓶和饮料罐，应放到可回收垃圾分类投放口。",questionType:"判断题",ans:"是"},{id:609,question:"垃圾分类可以减少碳排放量。",questionType:"判断题",ans:"是"},{id:556,question:"单位和个人应当积极参与绿色生活行动，必须遵守生活垃圾分类与减量的规定。",questionType:"判断题",ans:"是"},{id:305,question:"外出旅行、就餐（），可以使垃圾减量。",questionType:"多选题",ans:"自带保温杯、洗漱用品、剩菜打包带走、过程中不随意丢弃垃圾"},{id:322,question:"生活垃圾应当做到日集日清，车辆机具保持容貌整洁，密闭运输，不得( )。",questionType:"多选题",ans:" 暴露、 散落、 滴漏"},{id:324,question:"生活垃圾清扫、收集、运输单位应合理配置符合标准的(    )。",questionType:"多选题",ans:" 收集工具、 运输车辆、 确定收运频次"},{id:581,question:"管理责任人应当建立生活垃圾分类日常管理制度。",questionType:"判断题",ans:"是"},{id:503,question:"厨余垃圾可以用来做堆肥。",questionType:"判断题",ans:"是"},{id:116,question:"洗干净的利乐包盒应该投入（  ）的垃圾分类桶内。",questionType:"单选题",ans:"蓝色"},{id:267,question:"日常垃圾实行每日（    ）、运输。",questionType:"单选题",ans:" 定时收集"},{id:414,question:"部分厨余垃圾可以制作成环保酵素。",questionType:"判断题",ans:"是"},{id:400,question:"烧过的蜡烛要丢进黑色垃圾桶。",questionType:"判断题",ans:"是"},{id:384,question:"过期止咳药水的塑料药瓶，能直接放进可回收物收集容器中。",questionType:"判断题",ans:"否"},{id:58,question:"狗狗饲料是（    ）。",questionType:"单选题",ans:" 厨余垃圾"},{id:233,question:"乡镇人民政府应当逐步建立农村地区生活垃圾定时定点(    )制度。",questionType:"单选题",ans:" 分类投放"},{id:474,question:"蘸薯条吃的番茄酱不是厨余垃圾。",questionType:"判断题",ans:"否"},{id:505,question:"纸盒、污染的塑料袋和塑料玩具是可回收的。",questionType:"判断题",ans:"否"},{id:519,question:"对垃圾进行分类处理，可以实现垃圾的最大化利用。",questionType:"判断题",ans:"是"},{id:442,question:"木制七巧板是可回收物。",questionType:"判断题",ans:"否"},{id:358,question:"下列属于其他垃圾的是（      )。",questionType:"多选题",ans:" 灰土、 卫生间废纸"},{id:59,question:"已除去电池的废旧遥控器是（    ）。",questionType:"单选题",ans:" 可回收物"},{id:75,question:"过期的蟑螂药是（  ）。",questionType:"单选题",ans:" 有害垃圾"},{id:620,question:"家里吃剩下的饭菜要倒进黑色垃圾桶。",questionType:"判断题",ans:"否"},{id:405,question:"快递驿站里的快递纸箱属于可回收物。",questionType:"判断题",ans:"是"},{id:458,question:"其他垃圾可以进行堆肥。",questionType:"判断题",ans:"否"},{id:133,question:"海绵属于（  ）。",questionType:"单选题",ans:"其他垃圾"},{id:200,question:"含水银的白炽灯是属于（  ）。",questionType:"单选题",ans:"有害垃圾"},{id:21,question:"包装药片的铝箔属于哪类垃圾？（ ）",questionType:"单选题",ans:" 有害垃圾"},{id:579,question:"禁止未采取密闭措施的车辆在城市道路上运输砂石、垃圾等易撒漏物质。",questionType:"判断题",ans:"是"},{id:516,question:"用过的餐巾纸和卫生纸属于其他垃圾。",questionType:"判断题",ans:"是"},{id:595,question:"过期药品属于有害垃圾，需要特殊安全处理。",questionType:"判断题",ans:"是"},{id:292,question:"哪些不能丢进红色垃圾桶?",questionType:"多选题",ans:" 剩菜剩饭、 塑料瓶、 用过的餐巾纸"},{id:53,question:"测量用的卷尺是（   ）。",questionType:"单选题",ans:" 可回收物"},{id:120,question:"芹菜叶属于（  ）。",questionType:"单选题",ans:"厨余垃圾"},{id:270,question:"下列哪组均属于厨余垃圾（    ）。",questionType:"单选题",ans:" 香蕉皮、鸡蛋壳"},{id:583,question:"选择破碎方法时，不需视固体废物的机械强度，特别是废物的硬度而定。",questionType:"判断题",ans:"否"},{id:621,question:"办公室打印文件的时候单面打印是节约能源的行为。",questionType:"判断题",ans:"否"},{id:456,question:"夏天吃剩下的西瓜皮可以用来做环保酵素。",questionType:"判断题",ans:"是"},{id:138,question:"干净的废旧床单属于（ ）。",questionType:"单选题",ans:"可回收物"},{id:159,question:"用过的一次性纸杯属于（  ）。",questionType:"单选题",ans:"其他垃圾"},{id:110,question:"清洗青菜时摘下的菜叶、菜根是（  ）。",questionType:"单选题",ans:" 厨余垃圾"},{id:254,question:"目前餐厨垃圾处理方式主要以(   )为导向",questionType:"单选题",ans:" 资源化"},{id:450,question:"做面包的面包粉属于厨余垃圾。",questionType:"判断题",ans:"是"},{id:476,question:"陶瓷咖啡杯属于可回收物。",questionType:"判断题",ans:"否"},{id:500,question:"不管是什么垃圾，都应该扔进海里。",questionType:"判断题",ans:"否"},{id:260,question:"国家依法禁止、限制（）不可降解塑料袋等一次性塑料制品",questionType:"单选题",ans:" 生产、销售、使用"},{id:182,question:"废旧的化妆刷应扔进（  ）垃圾桶内？",questionType:"单选题",ans:"其他垃圾"},{id:109,question:"污损严重的海绵、旅行袋、织物是（  ）。",questionType:"单选题",ans:" 其他垃圾"},{id:598,question:"报纸/传单/杂志/旧书/纸板箱属于可回收物。",questionType:"判断题",ans:"是"},{id:460,question:"上班族中午装午饭的金属饭盒属于可回收物。",questionType:"判断题",ans:"是"},{id:477,question:"用完的洗发水等塑料容器若洗净属于可回收物。",questionType:"判断题",ans:"是"},{id:484,question:"一次性纸杯属于可回收物。",questionType:"判断题",ans:"否"},{id:88,question:"吃剩的鱼蛋是（  ）。",questionType:"单选题",ans:" 厨余垃圾"},{id:422,question:"印泥是其他垃圾。",questionType:"判断题",ans:"是"},{id:512,question:"实行垃圾分类可以减少垃圾对环境的污染。",questionType:"判断题",ans:"是"},{id:169,question:"一次性桌布属于（  ），应放入（  ）。",questionType:"单选题",ans:"其他垃圾，黑色垃圾桶"},{id:176,question:"厨余垃圾应投入（ ）颜色的垃圾分类桶。",questionType:"单选题",ans:"绿色"},{id:483,question:"用过的纸巾属于厨余垃圾。",questionType:"判断题",ans:"否"},{id:571,question:"家庭盆栽废弃的树叶属于其他垃圾。",questionType:"判断题",ans:"否"},{id:623,question:"点外卖时主动要求商家提供一次性餐具，这样不环保。",questionType:"判断题",ans:"是"},{id:117,question:"家里的剩菜剩饭属于（  ）。",questionType:"单选题",ans:"厨余垃圾"},{id:263,question:"禁止向生活垃圾收集设施中投放（    ）废物。",questionType:"单选题",ans:" 工业固体"},{id:508,question:"厨余垃圾可以作为生物质资源，通过发酵后可生成沼气。",questionType:"判断题",ans:"是"},{id:179,question:"农贸市场垃圾主要成分属于（  ）。",questionType:"单选题",ans:"厨余垃圾"},{id:495,question:"实行生活分类处置的区域，垃圾分类投放后，由专用垃圾车分类收运。",questionType:"判断题",ans:"是"},{id:529,question:"用过的海绵是可回收物。",questionType:"判断题",ans:"否"},{id:573,question:"废胶片及废相纸不属于有害垃圾。",questionType:"判断题",ans:"否"},{id:481,question:"吃完的口香糖是其他垃圾。",questionType:"判断题",ans:"是"},{id:83,question:"未脏污的宣传单是（  ）。",questionType:"单选题",ans:" 可回收物"},{id:38,question:"废弃的充电宝属于（   ）。",questionType:"单选题",ans:" 有害垃圾"},{id:187,question:"旧手机属于（  ）。",questionType:"单选题",ans:"可回收物"},{id:587,question:"已经分类投放的生活垃圾，可以混合收集运输。",questionType:"判断题",ans:"否"},{id:304,question:"在学习、办公中，（）可以使垃圾减量。",questionType:"多选题",ans:"纸张双面打印、尽量不用一次性签字笔、开展无纸化办公、不使用一次性杯子"},{id:570,question:"加快推进危险废物利用处置能力建设，完善有害垃圾处置体系。",questionType:"判断题",ans:"是"},{id:143,question:"香蕉皮属于（ ）。",questionType:"单选题",ans:"厨余垃圾"},{id:251,question:"鼓励餐厨垃圾产生单位利用新技术新设备对餐厨垃圾进行油水分离，促进（）。",questionType:"单选题",ans:" 源头减量"},{id:588,question:"被油污染了的旧手套是可回收物。",questionType:"判断题",ans:"否"},{id:589,question:"厨余垃圾包括家庭厨余垃圾、餐厨垃圾和其他厨余垃圾等。",questionType:"判断题",ans:"是"},{id:426,question:"百洁布是其他垃圾。",questionType:"判断题",ans:"是"},{id:610,question:"生活垃圾收集容器应按照国标对标识、规格、形状、颜色等四项要素配备。",questionType:"判断题",ans:"是"},{id:313,question:"城市生活垃圾的治理，实行减量化、资源化、无害化和（ ）负责的原则。",questionType:"多选题",ans:"谁产生、谁依法负责"},{id:180,question:"红酒瓶塞属于（  ）。",questionType:"单选题",ans:"其他垃圾"},{id:443,question:"玻璃弹珠是其他垃圾。",questionType:"判断题",ans:"否"},{id:31,question:"旧凉席属于哪类垃圾？（ ）",questionType:"单选题",ans:" 其他垃圾"},{id:255,question:"食品干燥剂是（   ）。",questionType:"单选题",ans:" 其他垃圾"},{id:486,question:"用完的电热蚊香片是其他垃圾。",questionType:"判断题",ans:"是"},{id:28,question:"吃完剩下的鸭脖骨属于哪类垃圾？（ ）",questionType:"单选题",ans:" 厨余垃圾"},{id:277,question:"推动宾馆、酒店、餐饮、娱乐场所不主动提供（  ）。",questionType:"单选题",ans:" 一次性塑料用品"},{id:569,question:"废旧荧光灯管应投入红色垃圾桶中。",questionType:"判断题",ans:"是"},{id:204,question:"被污染的食品包装袋属于哪种垃圾（ ）？",questionType:"单选题",ans:"其他垃圾"},{id:188,question:"下列不属于可回收物的是（  ）。",questionType:"单选题",ans:"用过的牙刷"},{id:490,question:"平时，我们提倡使用一次性筷子。",questionType:"判断题",ans:"否"},{id:563,question:"畜禽养殖场、养殖小区可以利用未经无害化处理的厨余垃圾饲喂畜禽。",questionType:"判断题",ans:"否"},{id:612,question:"其他垃圾表示除可回收物、有害垃圾、厨余垃圾外的生活垃圾。",questionType:"判断题",ans:"是"},{id:247,question:"厨余垃圾和其他垃圾应当密闭存放，存放时间不得超过(    )小时。",questionType:"单选题",ans:" 二十四"},{id:440,question:"红酒瓶塞属于可回收物。",questionType:"判断题",ans:"否"},{id:153,question:"家庭废弃的陶瓷花盆是（  ）",questionType:"单选题",ans:"其他垃圾"},{id:261,question:"其他垃圾可采用(      )方式进行资源化利用。",questionType:"单选题",ans:" 焚烧"},{id:482,question:"过期食品属于其他垃圾。",questionType:"判断题",ans:"否"},{id:514,question:"充电电池、荧光灯管等属于有害垃圾，应该单独封装后再投入到有害垃圾桶中。",questionType:"判断题",ans:"是"},{id:491,question:"用过保鲜膜属于其他垃圾。",questionType:"判断题",ans:"是"},{id:195,question:"用过的面膜属于（  ）。",questionType:"单选题",ans:"其他垃圾"},{id:141,question:"下面应放到红色垃圾桶的是（ ）。",questionType:"单选题",ans:"油漆桶"},{id:210,question:"下列废弃的瓶罐，（ ）不属于可回收物。",questionType:"单选题",ans:"陶瓷瓶罐"},{id:335,question:"我国城市生活垃圾末端处理方式主要采用哪几种（  ）。",questionType:"多选题",ans:"填埋、焚烧、堆肥、资源再利用"},{id:393,question:"我们每天都要消耗食物和各种各样的生活用品,与此同时,也产生了许多垃圾。",questionType:"判断题",ans:"是"},{id:154,question:"鸡骨头属于（  ）。",questionType:"单选题",ans:"厨余垃圾"},{id:560,question:"可以将医疗垃圾、工业垃圾混入生活垃圾。",questionType:"判断题",ans:"否"},{id:504,question:"可口可乐易拉罐需要洗净后再丢进可回收物垃圾桶。",questionType:"判断题",ans:"是"},{id:136,question:"旧杂志属于（）。",questionType:"单选题",ans:"可回收物"},{id:209,question:"商品生产者、（ ）和物流经营者等应严格执行国家限制产品过度包装的规定。",questionType:"单选题",ans:"销售者"},{id:432,question:"浴帽是其他垃圾，随便丢哪个垃圾桶都可以。",questionType:"判断题",ans:"否"},{id:253,question:"可用磁选方法回收的垃圾组分为（ ）。",questionType:"单选题",ans:" 钢铁"},{id:205,question:"家庭丢弃的纸板箱应投入（ ）。",questionType:"单选题",ans:"蓝色垃圾桶"},{id:196,question:"习近平总书记在中央财经领导小组第（）次会议上提出“普遍推行垃圾分类制度”。",questionType:"单选题",ans:"14"},{id:60,question:"用过的粘蝇纸是（    ）。",questionType:"单选题",ans:" 其他垃圾"},{id:103,question:"废弃的纸质挂历是（   ）。",questionType:"单选题",ans:" 可回收物"},{id:71,question:"金属耳钉是（  ）。",questionType:"单选题",ans:" 可回收物"},{id:586,question:"吃完的鱼骨头属于厨余垃圾。",questionType:"判断题",ans:"是"},{id:590,question:"其他垃圾可运至生活垃圾填埋场进行卫生填埋处理。",questionType:"判断题",ans:"是"},{id:33,question:"用完的抽纸纸盒属于（  ）。",questionType:"单选题",ans:" 可回收物"},{id:543,question:"我们每天都要消耗食物和各种各样的生活用品,也产生了许多生活垃圾。",questionType:"判断题",ans:"是"},{id:547,question:"鸡蛋壳、菜叶、果皮等属于厨余垃圾，应该放到厨余垃圾桶中。",questionType:"判断题",ans:"是"},{id:596,question:"“世界环境日”是每年的6月5日。",questionType:"判断题",ans:"是"},{id:163,question:"吃过的口香糖属于（  ）。",questionType:"单选题",ans:"其他垃圾"},{id:46,question:"破裂的陶瓷花盆是（    ）。",questionType:"单选题",ans:" 其他垃圾"},{id:135,question:"木制玩具属于（  ）。",questionType:"单选题",ans:"其他垃圾"},{id:144,question:"过期的降压药属于（ ）。",questionType:"单选题",ans:"有害垃圾"},{id:567,question:"厨余垃圾是易腐烂的、含有机质的生活垃圾。",questionType:"判断题",ans:"是"},{id:478,question:"烟蒂属于有害垃圾。",questionType:"判断题",ans:"否"},{id:257,question:"餐厨垃圾集中处置时，需将餐厨垃圾进行（  ）、油水分离。",questionType:"单选题",ans:" 破碎"},{id:65,question:"过期的红霉素眼膏是（   ）。",questionType:"单选题",ans:" 有害垃圾"},{id:423,question:"木制或陶瓷筷子是可回收物。",questionType:"判断题",ans:"否"},{id:434,question:"乒乓球拍是其他垃圾。",questionType:"判断题",ans:"是"},{id:539,question:"人们在生活中会产生大量成分复杂的垃圾，不分类处理的垃圾会危害环境。",questionType:"判断题",ans:"是"},{id:506,question:"当外出在公共场合丢垃圾时，可以把不同种类垃圾掺在一起扔进垃圾桶。",questionType:"判断题",ans:"否"},{id:51,question:"破损的婴儿奶嘴可以投进（    ）桶。",questionType:"单选题",ans:" 其他垃圾"},{id:63,question:"包粽子用的糯米是（  ）。",questionType:"单选题",ans:" 厨余垃圾"},{id:502,question:"生活垃圾不需要分类，直接扔到垃圾桶里就可以了。",questionType:"判断题",ans:"否"},{id:1,question:"包了口香糖的纸巾属于哪一类垃圾？（  ）",questionType:"单选题",ans:" 其他垃圾"},{id:522,question:"被油污污染了的旧报纸是可回收物。",questionType:"判断题",ans:"否"},{id:436,question:"破了的爬行垫是其他垃圾。",questionType:"判断题",ans:"是"},{id:534,question:"家庭日常生活中打碎的陶瓷碗碟属于可回收物。",questionType:"判断题",ans:"否"},{id:494,question:"用过的面膜属于其他垃圾。",questionType:"判断题",ans:"是"},{id:415,question:"食品包装袋属于厨余垃圾。",questionType:"判断题",ans:"否"},{id:97,question:"使用过的创口贴是（  ）。",questionType:"单选题",ans:" 其他垃圾"},{id:404,question:"登山用的金属登山杖是可回收物。",questionType:"判断题",ans:"是"},{id:461,question:"用过的一次性棉签属于可回收物。",questionType:"判断题",ans:"否"},{id:613,question:"被油污染的垃圾袋可以顺便投入绿色垃圾桶中。",questionType:"判断题",ans:"否"},{id:553,question:"折断的木头筷子属于可回收物，应放置到蓝色垃圾桶。",questionType:"判断题",ans:"否"},{id:403,question:"纽扣电池是其他垃圾。",questionType:"判断题",ans:"否"},{id:44,question:"废旧的瑜伽垫要丢入（    ）桶。",questionType:"单选题",ans:" 其他垃圾"},{id:616,question:"其他垃圾可以进行填埋处理和焚烧。",questionType:"判断题",ans:"是"},{id:592,question:"可回收物表示适宜回收利用的生活垃圾。",questionType:"判断题",ans:"是"},{id:606,question:"鸡鸭鱼的废弃内脏属于可回收物。",questionType:"判断题",ans:"否"},{id:107,question:"损坏的木菜板是（  )。",questionType:"单选题",ans:" 其他垃圾"},{id:608,question:"生活垃圾如不及时处理，长期暴露在外，蚊蝇滋生，老鼠乱窜，易成为污染源。",questionType:"判断题",ans:"是"},{id:383,question:"瓜子壳是厨余垃圾。",questionType:"判断题",ans:"是"},{id:488,question:"用过的尿不湿属于可回收物。",questionType:"判断题",ans:"否"},{id:396,question:"废弃的X光片属于有害垃圾。",questionType:"判断题",ans:"是"},{id:541,question:"吃完的薯片包装袋可回收。",questionType:"判断题",ans:"否"},{id:575,question:"生活垃圾处理收费标准由县级以上地方人民政府制定。",questionType:"判断题",ans:"是"},{id:173,question:"可回收物应投入（  ）颜色的垃圾分类桶。",questionType:"单选题",ans:"蓝色"},{id:572,question:"易燃易爆性是生活垃圾的显著特征。",questionType:"判断题",ans:"否"},{id:470,question:"鱿鱼是厨余垃圾。",questionType:"判断题",ans:"是"},{id:520,question:"龙眼核应投入其他垃圾桶。",questionType:"判断题",ans:"否"},{id:591,question:"废旧的收音机属于有害垃圾。",questionType:"判断题",ans:"否"},{id:437,question:"橡皮筋断了要丢进白色的其他垃圾桶。",questionType:"判断题",ans:"否"},{id:611,question:"被污染的塑料袋属于有害垃圾。",questionType:"判断题",ans:"否"},{id:585,question:"国家对固体废物污染环境的防治原则就是焚烧和填埋。",questionType:"判断题",ans:"否"},{id:409,question:"废弃的纸质拼图要投放到蓝色垃圾桶。",questionType:"判断题",ans:"是"},{id:618,question:"生锈的锁是其他垃圾。",questionType:"判断题",ans:"否"},{id:487,question:"弟弟的塑料变形金刚属于可回收物。",questionType:"判断题",ans:"是"},{id:413,question:"卤蛋是厨余垃圾。",questionType:"判断题",ans:"是"},{id:574,question:"生活垃圾分类投放和收集实行管理责任人制度。",questionType:"判断题",ans:"是"},{id:381,question:"废指甲油及其内包装物属于其他垃圾。",questionType:"判断题",ans:"否"},{id:390,question:"没喝完的饮料瓶，可以直接投入可回收物收集容器。",questionType:"判断题",ans:"否"},{id:445,question:"大闸蟹的壳是其他垃圾。",questionType:"判断题",ans:"否"},{id:435,question:"小孩子玩的橡皮泥硬化了丢进黑色垃圾桶。",questionType:"判断题",ans:"是"},{id:419,question:"破碎的水银温度计是有害垃圾。",questionType:"判断题",ans:"是"},{id:528,question:"过期止咳药水的塑料药瓶，能放到可回收物收集容器中。",questionType:"判断题",ans:"否"},{id:449,question:"柚子柠檬茶里的柠檬是其他垃圾。",questionType:"判断题",ans:"否"},{id:475,question:"废荧光灯管是有害垃圾。",questionType:"判断题",ans:"是"},{id:510,question:"可回收物包括纸类、塑料、金属、玻璃、织物等。",questionType:"判断题",ans:"是"},{id:584,question:"危险固体废物是指具有易燃性、腐蚀性、毒害性、反应性和感染性的固体废物。",questionType:"判断题",ans:"是"},{id:424,question:"破旧的乳胶枕头要丢入黑色垃圾桶。",questionType:"判断题",ans:"是"},{id:447,question:"吃完葡萄剩下的葡萄枝是厨余垃圾。",questionType:"判断题",ans:"是"},{id:562,question:"国家鼓励农村生活垃圾源头减量。\t",questionType:"判断题",ans:"是"},{id:624,question:"塑料瓶可以不用清洗干净就投入到蓝色垃圾桶中。",questionType:"判断题",ans:"否"}];



let nick="";
let nickList=[
	"oYv_F5WYayOr173-x0R-6ssxMZrA",//ren 18068603568
	"oYv_F5Xq0DsbEh4E8n70AsvpA0IA",//leebear 18651306657 
	"oYv_F5UQXurLuTK4jnpGRIXItI58",//bona  13382348802
	"oYv_F5Uxfa0KZ2o_ZnM86HDTyOR4",//001 1801225989
	//"oYv_F5dWl_pYoFrpzwQGxcJXWgm0",//小白131...82
	"oYv_F5YtgSvfdppnd9xdbinswcxw",//明涛 13584640176
	"oYv_F5QnXW_L3MhGy_9I72vPtKMo",//梦想上岸17802595869
	"oYv_F5Smkz5eNn66Ve55mH-yV7sE",//刘淑芳 13382341414
]
!(async () => {
	$.Answer=false;
	for(var aa=0;aa<nickList.length;aa++){
		nick=nickList[aa];
		time=40+Math.floor(Math.random()*5);

		console.log("答题"+time+"秒")
		//await getQuestion();	
		//await $.wait(10000);
		//await answerQuestion();

		await getQuestion2();
		await $.wait(time*1000-1000);
		if($.question.status=200){
			await answerQuestion2();
		}else{
			console.log("获取题目失败或者机会用完")
		}
	}

	
	




})().catch((e) => {
    $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
}).finally(() => {
	$.done();
})
  



function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}


async function choujiangDl(){//抽奖
	//console.log("抽奖");
	var data=$.data;
	//var data={"name":"张三","age":23};
	var dataStr = "";
    for (var i in data) {
    //i就是key data[key]就是他的值
        var tmpData=data[i]?data[i]:"";
        dataStr += i + "=" + tmpData+ "&";
    }

	var options = {
	  'method': 'POST',
	  'url': 'https://webapp.yunnan.cn/new/index.php?nova_p2=WL7c-1VazsFAZGfQRYiq55YRgNp9m4zVHxQtCc-vCvQ@',
	  //'proxy': 'http://'+proIp, // 格式为：http://username:password@hotname:port
	  'headers': {
		'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
		'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
		'Connection': 'keep-alive',
		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.102 Safari/537.36 Edg/104.0.1293.70'
	  },
	  "timeout": 2000,
	  json: true,
	  strictSSL: false,
	  'body':dataStr
	};
	try{
		request(options, function (error, response) {
			if (error) {
				//异常重新获取代理
				//getDL();
				if(xunghuan>0){
					isGetDL=false;
				}
				
			} else {
			  console.log(response.body)
			  if(response.body.status=="success"){
					//成功
					logger.log(response.body);
					//刷新代理
					//getDL();
					if(xunghuan>0){
						isGetDL=false;
					}
			  }else if(response.body.status=="failure"){
				  
			  }else{
				if(xunghuan>0){
					isGetDL=false;
				}
			  }
			}
		});
	}catch(e){
		console.log(e);
	}
	
}


async function getDL(){
	const options = {
		//星空代理
      "url": `http://pandavip.xiongmaodaili.com/xiongmao-web/apiPlus/vgb?secret=3f2238b23bc67753025d0a71137f9cab&orderNo=VGB20230630085848rXCRkz8z&count=1&isTxt=1&proxyType=1&validTime=0&removal=0&cityIds=`,
      "headers": {
		  "Host": "pandavip.xiongmaodaili.com",
		  'User-Agent': 'Mozilla/5.0 (Linux; Android 10; YAL-AL10 Build/HUAWEIYAL-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/3211 MMWEBSDK/20220303 Mobile Safari/537.36 MMWEBID/916 MicroMessenger/8.0.21.2120(0x2800153F) Process/toolsmp WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64',
		},
	  "timeout": 3000,
    }
	//console.log(options);
    $.get(options, (err, resp, data) => {
      try {
        console.log("获取代理成功："+data)
		isGetDL=true;
		proIp=data;
      } catch (e) {
        $.logErr(e, resp)
      } finally {

      }
    })
	
}


async function choujiang(){//抽奖
	//console.log("抽奖");
	
	return new Promise(async resolve => {
	
	var now=new Date()
	console.log(now.toLocaleTimeString());
	var data=$.data;
	//var data={"name":"张三","age":23};
	var dataStr = "";
    for (var i in data) {
    //i就是key data[key]就是他的值
        var tmpData=data[i]?data[i]:"";
        dataStr += i + "=" + tmpData+ "&";
    }
    

	const options = {
      "url": `https://webapp.yunnan.cn/new/index.php?nova_p2=WL7c-1VazsFAZGfQRYiq55YRgNp9m4zVHxQtCc-vCvQ@`,
      "headers": {
		  'Host': 'webapp.yunnan.cn',
		  'Connection': 'keep-alive',
		  'Referer': 'https://webapp-ali.ynurl.cn/s/2023/dqq/pfqjhddt2/index.html?c=1&wx_tk='+$.wx_tk,
		  'User-Agent': 'Mozilla/5.0 (Linux; Android 10; YAL-AL10 Build/HUAWEIYAL-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/3211 MMWEBSDK/20220303 Mobile Safari/537.36 MMWEBID/916 MicroMessenger/8.0.21.2120(0x2800153F) Process/toolsmp WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64',
		  'Accept':'application/json, text/javascript, */*; q=0.01',
		  'Accept-Encoding':'gzip, deflate',
		  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
		  'Cookie':$.data.cookie,
		},
	  "timeout": 3000,
	  'body':dataStr
    }
	//console.log(options);
    $.post(options, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (data) {
			//count++;
			//console.log(count);
			data=JSON.parse(data);
			//logger.log("中奖："+new Date());
			console.log(data);
			if(data.status!='failure'){
				logger.log(data);
			}
			
          } else {
            console.log(`服务器返回空数据`)
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve();
      }
    })
  })
}

function getQuestion(){

	var data={
		"jsonrpc":"2.0",
		"method":"/dm/front/prod/Garbage/questionList",
		"params":{
			"admJson":{
				"pushWay":"wechat",
				"actId":"laijifenlei",
				"userId":"446338500",
				"buyerNick":nick,
				"method":"/dm/front/prod/Garbage/questionList"
			},
			"commonParameter":{
				"appkey":"21699045",
				"m":"POST",
				"sign":"680cc3697cfda98698aa71bcdf85e6a7",
				"timestamp":new Date().getTime(),
				"pushWay":"wechat"
			}
		}
	}

	var options = {
	  'method': 'POST',
	  'url': 'https://wx-api.nbycgj.com/dm/front/prod/Garbage/questionList?mix_nick='+nick,
	  //'proxy': 'http://'+proIp, // 格式为：http://username:password@hotname:port
	  'headers': {
		'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
		'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
		'Connection': 'keep-alive',
		'Content-Type': 'application/json',
		'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.102 Safari/537.36 Edg/104.0.1293.70'
	  },
	  "timeout": 2000,
	  json: true,
	  strictSSL: false,
	  'body':data
	};
	try{
		request(options, function (error, response) {
			if (error) {
				//异常重新获取代理
				
			} else {
			 console.log(response.body)
			  $.question=response.body.data.data;
			  console.log("获取题目成功")

			}
		});
	}catch(e){
		console.log(e);
	}
}

function getQuestion2(){
	//答题
	var data={
		"jsonrpc":"2.0",
		"method":"/dm/front/prod/secondGarbage/questionList",
		"params":{
			"admJson":{
				"pushWay":"wechat",
				"actId":"laijifenlei",
				"userId":"446338500",
				"buyerNick":nick,
				"method":"/dm/front/prod/secondGarbage/questionList",
				"type":"0"
			},
			"commonParameter":{
				"appkey":"21699045",
				"m":"POST",
				"sign":"2d38ccdfbba018e666e07a882a2b91f2",
				"timestamp":new Date().getTime(),
				"pushWay":"wechat"
			}
		}
	}

	var options = {
	  'method': 'POST',
	  'url': 'https://wx-api.nbycgj.com/dm/front/prod/secondGarbage/questionList?mix_nick='+nick,
	  //'proxy': 'http://'+proIp, // 格式为：http://username:password@hotname:port
	  'headers': {
		'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
		'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
		'Connection': 'keep-alive',
		'Content-Type': 'application/json',
		'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.102 Safari/537.36 Edg/104.0.1293.70'
	  },
	  "timeout": 2000,
	  json: true,
	  strictSSL: false,
	  'body':data
	};
	try{
		request(options, function (error, response) {
			if (error) {
				//异常重新获取代理
				
			} else {
			 console.log(response.body)
			  $.question=response.body.data.data;
			  console.log("获取题目成功")

			}
		});
	}catch(e){
		console.log(e);
	}
}

function answerQuestion(){
	var answerList=[];
	for(var i=0;i<$.question.list.length;i++){
		var anObj;
		var anser=""
		//console.log($.question.list[i])
		if(!$.Answer){
			//不显示答案的
			for(var h=0;h<QuestionAll.length;h++){
				if($.question.list[i].id==QuestionAll[h].id){
					//console.log(QuestionAll[h])
					anObj=QuestionAll[h].ans
					break;
				}
			}
			//console.log(anObj);
			var anser=""
			if($.question.list[i].questionType=="多选题"){
				//var ansList=anObj.split("、");
				for(var c=0;c<$.question.list[i].choicesList.length;c++){
					//console.log($.question.list[i].choicesList[c].name)
					var name=$.question.list[i].choicesList[c].name;
					var op=name.substring(2);
					if(anObj.trim().indexOf(op.trim())!=-1){
						anser=anser+$.question.list[i].choicesList[c].answer;
						anser=anser+",";
					}
				}
				anser=anser.substring(0,anser.length-1);
			}else{
				//console.log($.question.list[i].choicesList)
				for(var c=0;c<$.question.list[i].choicesList.length;c++){
					var name=$.question.list[i].choicesList[c].name;
					var op=name.substring(2);
					if(op.trim()==anObj.trim()){
						anser=anser+$.question.list[i].choicesList[c].answer;
					}
				}
			}
			console.log(anser)
		}else{
			//显示答案的
			for(var c=0;c<$.question.list[i].choicesList.length;c++){
				if($.question.list[i].choicesList[c].name.indexOf("==========")!=-1){
					anser=anser+$.question.list[i].choicesList[c].answer;
					anser=anser+",";
				
				}
			}
			anser=anser.substring(0,anser.length-1);
			console.log(anser);
		}
		

		
		var temp={
			"id":$.question.list[i].id,
			"value":anser
		}
		answerList.push(temp);
	}

	var data={
		"jsonrpc":"2.0",
		"method":"/dm/front/prod/Garbage/doingExercise",
		"params":{
			"admJson":{
				"pushWay":"wechat",
				"actId":"laijifenlei",
				"userId":"446338500",
				"buyerNick":nick,
				"method":"/dm/front/prod/Garbage/doingExercise",
				"time":time,
				"question":answerList,
				"sign":$.question.key
			},
			"commonParameter":{
				"appkey":"21699045",
				"m":"POST",
				"sign":"334c6d525a9f4e4b24b673e295c4b5ac",
				"timestamp":new Date().getTime(),
				"pushWay":"wechat"
			}
		}
	}

	var options = {
	  'method': 'POST',
	  'url': 'https://wx-api.nbycgj.com/dm/front/prod/Garbage/doingExercise?mix_nick='+nick,
	  //'proxy': 'http://'+proIp, // 格式为：http://username:password@hotname:port
	  'headers': {
		'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
		'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
		'Connection': 'keep-alive',
		'Content-Type': 'application/json',
		'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.102 Safari/537.36 Edg/104.0.1293.70'
	  },
	  "timeout": 2000,
	  json: true,
	  strictSSL: false,
	  'body':data
	};
	try{
		request(options, function (error, response) {
			if (error) {
				//异常重新获取代理
				
			} else {
			  console.log("答题成功");
			  //返回结果把问题答案补充上去。
			  $.answer=response.body.data.data;
			  console.log(JSON.stringify($.answer));
			 

			}
		});
	}catch(e){
		console.log(e);
	}
}



function answerQuestion2(){
	//正式答题
	var answerList=[];
	for(var i=0;i<$.question.list.length;i++){
		var anObj;
		var anser=""
		if(!$.Answer){
			//不显示答案的
			for(var h=0;h<QuestionAll.length;h++){
				if($.question.list[i].id==QuestionAll[h].id){
					//console.log(QuestionAll[h])
					anObj=QuestionAll[h].ans
					break;
				}
			}
			//console.log(anObj);
			var anser=""
			if($.question.list[i].questionType=="多选题"){
				//var ansList=anObj.split("、");
				for(var c=0;c<$.question.list[i].choicesList.length;c++){
					//console.log($.question.list[i].choicesList[c].name)
					var name=$.question.list[i].choicesList[c].name;
					var op=name.substring(2);
					if(anObj.trim().indexOf(op.trim())!=-1){
						anser=anser+$.question.list[i].choicesList[c].answer;
						anser=anser+",";
					}
				}
				anser=anser.substring(0,anser.length-1);
			}else{
				//console.log($.question.list[i].choicesList)
				for(var c=0;c<$.question.list[i].choicesList.length;c++){
					var name=$.question.list[i].choicesList[c].name;
					var op=name.substring(2);
					if(op.trim()==anObj.trim()){
						anser=anser+$.question.list[i].choicesList[c].answer;
					}
				}
			}
			console.log(anser)
		}else{
			//显示答案的
			for(var c=0;c<$.question.list[i].choicesList.length;c++){
				if($.question.list[i].choicesList[c].name.indexOf("==========")!=-1){
					anser=anser+$.question.list[i].choicesList[c].answer;
					anser=anser+",";
				
				}
			}
			anser=anser.substring(0,anser.length-1);
			console.log(anser)
		}
		
		var temp={
			"id":$.question.list[i].id,
			"value":anser
		}
		answerList.push(temp);
	}

	var data={
		"jsonrpc":"2.0",
		"method":"/dm/front/prod/secondGarbage/competing",
		"params":{
			"admJson":{
				"pushWay":"wechat",
				"actId":"laijifenlei",
				"userId":"446338500",
				"buyerNick":nick,
				"method":"/dm/front/prod/secondGarbage/competing",
				"time":time,
				"type":"0",
				"logId":$.question.logId,
				"question":answerList,
				"sign":$.question.key
			},
			"commonParameter":{
				"appkey":"21699045",
				"m":"POST",
				"sign":"334c6d525a9f4e4b24b673e295c4b5ac",
				"timestamp":new Date().getTime(),
				"pushWay":"wechat"
			}
		}
	}

	var options = {
	  'method': 'POST',
	  'url': 'https://wx-api.nbycgj.com/dm/front/prod/secondGarbage/competing?mix_nick='+nick,
	  //'proxy': 'http://'+proIp, // 格式为：http://username:password@hotname:port
	  'headers': {
		'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
		'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
		'Connection': 'keep-alive',
		'Content-Type': 'application/json',
		'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.102 Safari/537.36 Edg/104.0.1293.70'
	  },
	  "timeout": 2000,
	  json: true,
	  strictSSL: false,
	  'body':data
	};
	//console.log(JSON.stringify(data))
	try{
		request(options, function (error, response) {
			if (error) {
				//异常重新获取代理
				
			} else {
			  console.log("答题成功");
			  //返回结果把问题答案补充上去。
			  $.answer=response.body.data.data;
			  console.log(JSON.stringify($.answer));
			 

			}
		});
	}catch(e){
		console.log(e);
	}
}

function addQuestion(list){
	var temp = {};   //用于name判断重复
	var result = [];  //最后的新数组
	var tempAll=QuestionAll;
	//list,ans为空跳过
	for(var ll=0;ll<list.length;ll++){
		//
		if(list[ll].ans!=null){
			tempAll.push(list[ll]);
		}
	}
	//合并，再去重
	//var tempAll=QuestionAll.concat(list);
	console.log("合并后数量："+tempAll.length)
	tempAll.map(function (item, index) {
		if(!temp[item.id]){
			result.push(item);
			temp[item.id] = true;
		}
	})
	console.log("去重后数量："+result.length)
	QuestionAll=result;
}



function addQuestion2(list){
	//
	console.log("检查是否录入题库")
	for(var ll=0;ll<list.length;ll++){
		//
		if(list[ll].ans!=null){//有答案的开始判断。循环
			var isCunzai=false;
			for(var aa=0;aa<QuestionAll.length;aa++){
				//循环比较判断是否存在
				if(QuestionAll[aa].id==list[ll].id){
					isCunzai=true;
					break;
				}
			}
			if(!isCunzai){
				//
				console.log("未录入题目"+list[ll])
				QuestionAll.push(list[ll]);
				logger.log(list[ll]);
			}
		}
	}
}

// 生成随机姓名
function getName(){
	var familyNames = new Array(
		"赵",  "钱",  "孙",  "李",  "周",  "吴",  "郑",  "王",  "冯",  "陈",  
		"褚",  "卫",  "蒋",  "沈",  "韩",  "杨",  "朱",  "秦",  "尤",  "许",
		"何",  "吕",  "施",  "张",  "孔",  "曹",  "严",  "华",  "金",  "魏",  
		"陶",  "姜",  "戚",  "谢",  "邹",  "喻",  "柏",  "水",  "窦",  "章",
		"云",  "苏",  "潘",  "葛",  "奚",  "范",  "彭",  "郎",  "鲁",  "韦",  
		"昌",  "马",  "苗",  "凤",  "花",  "方",  "俞",  "任",  "袁",  "柳",
		"酆",  "鲍",  "史",  "唐",  "费",  "廉",  "岑",  "薛",  "雷",  "贺",  
		"倪",  "汤",  "滕",  "殷",  "罗",  "毕",  "郝",  "邬",  "安",  "常",
		"乐",  "于",  "时",  "傅",  "皮",  "卞",  "齐",  "康",  "伍",  "余",  
		"元",  "卜",  "顾",  "孟",  "平",  "黄",  "和",  "穆",  "萧",  "尹",
		"欧阳","太史","端木","上官","司马","东方","独孤","南宫","万俟","闻人",
		"夏侯","诸葛","尉迟","公羊","赫连","澹台","皇甫","宗政","濮阳","公冶",
		"太叔","申屠","公孙","慕容","仲孙","钟离","长孙","宇文","司徒","鲜于",
		"司空","闾丘","子车","亓官","司寇","巫马","公西","颛孙","壤驷","公良",
		"漆雕","乐正","宰父","谷梁","拓跋","夹谷","轩辕","令狐","段干","百里",
		"呼延","东郭","南门","羊舌","微生","公户","公玉","公仪","梁丘","公仲",
		"公上","公门","公山","公坚","左丘","公伯","西门","公祖","第五","公乘",
		"贯丘","公皙","南荣","东里","东宫","仲长","子书","子桑","即墨","达奚",
		"褚师"
		);
	var givenNames = new Array(
		"杰", "兵", "斌", "建", "峰", "刚", "田", "一", "晶", "近平", "明涛", 
		"子璇", "淼", "国栋", "夫子", "瑞堂", "甜", "敏", "尚", "国贤", "贺祥", "晨涛", 
		"昊轩", "易轩", "益辰", "益帆", "益冉", "瑾春", "瑾昆", "春齐", "杨", "文昊", 
		"东东", "雄霖", "浩晨", "熙涵", "溶溶", "冰枫", "欣欣", "宜豪", "欣慧", "建政", 
		"美欣", "淑慧", "文轩", "文杰", "欣源", "忠林", "榕润", "欣汝", "慧嘉", "新建", 
		"建林", "亦菲", "林", "冰洁", "佳欣", "涵涵", "禹辰", "淳美", "泽惠", "伟洋", 
		"涵越", "润丽", "翔", "淑华", "晶莹", "凌晶", "苒溪", "雨涵", "嘉怡", "佳毅", 
		"子辰", "佳琪", "紫轩", "瑞辰", "昕蕊", "萌", "明远", "欣宜", "泽远", "欣怡", 
		"佳怡", "佳惠", "晨茜", "晨璐", "运昊", "汝鑫", "淑君", "晶滢", "润莎", "榕汕", 
		"佳钰", "佳玉", "晓庆", "一鸣", "语晨", "添池", "添昊", "雨泽", "雅晗", "雅涵", 
		"清妍", "诗悦", "嘉乐", "晨涵", "天赫", "玥傲", "佳昊", "天昊", "萌萌", "若萌",
		"亚友","杰","飞","森林","学峰","兴强","友超","旭亮","景云","亚文","满亮","立富",
		"绍宇","碧波","金青","柏霖","长伟","耀明","奎仁","金益","绍忠","新竣","帅武",
		"志平","旭烈","平川","真丰","江波","立江","世昭","钧瑞","岩岩","海钰","浩剑",
		"武平","发凯","跃国","德勇","佩艺","纤妃","寐薇","姳姈","婧颍","莺苇","宕妮",
		"圆轻","金彩","团芷","芙蝶","苏末","虔澜","茂火","芸棠","秘蔷","菌彨","菡肤",
		"夜倩","娅聪","恣霭","茜莱","绢妙","娴莎","闵馝","绮澜","茉裳","妖苑","挽月",
		"纽聆","槐欢","姬銮","芬琼","蜜谣","蕊壁","渗莎","桃基","姹榛","眈菱","婵惠",
		"音袁","梅琳","苹冰","漪眠","琴嫦","如亩","任锦","湘菌","秘娃","浆影"
		);

	var i = parseInt(10 * Math.random())*10 + parseInt(10 * Math.random());
	var familyName = familyNames[i];

	var j = parseInt(10 * Math.random())*10 + parseInt(10 * Math.random());
	var givenName = givenNames[i];

	var name = familyName + givenName;
	return name;

}

function getMoble() {
	var prefixArray = new Array("130", "131", "132", "133", "135", "137", "138", "139", "147", "153", "158", "159", "170", "178", "182", "183","180", "187", "189");
	var i = parseInt(10 * Math.random());
	var prefix = prefixArray[i];
	for (var j = 0; j < 8; j++) {
	prefix = prefix + Math.floor(Math.random() * 10);
	}
	return prefix;
}


function taskUrl(body) {
  return {
    url: `${JD_API_HOST}?${body}`,
    headers: {
      'Host': 'webapp.yunnan.cn',
	  'Cookie':'',
      'Connection': 'keep-alive',
	  'Accept':'application/json, text/javascript, */*; q=0.01',
	  'X-Requested-With':'XMLHttpRequest',
      'Content-Type': 'application/json',
      'Referer': 'https://webapp.yunnan.cn/new/s/2021/ztf/nyncwd/index.html',
      'User-Agent': $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_2 like Mac OS X) AppleWebKit/603.2.4 (KHTML, like Gecko) Mobile/14F89 MicroMessenger/7.0.17(0x1700112a) NetType/WIFI Language/zh_CN") : ($.getdata('JDUA') ? $.getdata('JDUA') : "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_2 like Mac OS X) AppleWebKit/603.2.4 (KHTML, like Gecko) Mobile/14F89 MicroMessenger/7.0.17(0x1700112a) NetType/WIFI Language/zh_CN"),
      'Accept-Language': 'zh-CN,zh;q=0.9',
      'Accept-Encoding': 'gzip, deflate, br',
    }
  }
}

function getPostRequest(type, body) {
  const url = `https://webapp.yunnan.cn/new/index.php?${type}`;
  const method = `POST`;
  const headers = {
    		  'Host': 'webapp.yunnan.cn',
		  'Connection': 'keep-alive',
		  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		  'Referer': 'https://webapp.yunnan.cn/new/s/2022/wsp/aqrdt/index.html',
		  'User-Agent': 'Mozilla/5.0 (Linux; Android 10; YAL-AL10 Build/HUAWEIYAL-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/3211 MMWEBSDK/20220303 Mobile Safari/537.36 MMWEBID/916 MicroMessenger/8.0.21.2120(0x2800153F) Process/toolsmp WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64',
		  'Accept':'application/json, text/javascript, */*; q=0.01',
		  'Accept-Encoding':'gzip, deflate',
		  'X-Requested-With':'XMLHttpRequest',
		  'Sec-Fetch-Site':'same-origin',
		  'Sec-Fetch-Mode':'cors',
		  'Sec-Fetch-Dest':'empty',
		  'Origin':'https://webapp.yunnan.cn',
		  'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
		  'Cookie':'',
  };
  return {url: url, method: method, headers: headers, body: body};
}

function safeGet(data) {
  try {
    if (typeof JSON.parse(data) == "object") {
      return true;
    }
  } catch (e) {
    console.log(e);
    console.log(`京东服务器访问数据为空，请检查自身设备网络情况`);
    return false;
  }
}

function jsonParse(str) {
  if (typeof str == "string") {
    try {
      return JSON.parse(str);
    } catch (e) {
      console.log(e);
      $.msg($.name, '', '不要在BoxJS手动复制粘贴修改cookie')
      return [];
    }
  }
}

var questions=[
    
];
// prettier-ignore
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
