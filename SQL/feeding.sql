/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50710
 Source Host           : localhost:3306
 Source Schema         : health

 Target Server Type    : MySQL
 Target Server Version : 50710
 File Encoding         : 65001

 Date: 03/04/2023 16:56:38
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for feeding
-- ----------------------------
DROP TABLE IF EXISTS `feeding`;
CREATE TABLE `feeding`  (
  `FeedingId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `main` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `subhead` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `ageGroup` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `imgurl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `updateTime` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`FeedingId`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of feeding
-- ----------------------------
INSERT INTO `feeding` VALUES ('0b36dc01-6fc3-40f6-9d41-cbc089a12e75', '继续母乳喂养，满6月龄起添加辅食', '为7 ~ 24月龄婴幼儿选择乳制品', '普通鲜奶、酸奶、奶酪等的蛋白质和矿物质含量远高于母乳，增加婴幼儿肾脏负担，故不宜喂给7 ~ 12月龄婴儿，对于13 ~ 24月龄幼儿可以将其作为食物多样化的一部分而逐渐尝试，但建议少量进食为宜，不能以此完全替代母乳和/或配方奶。普通豆奶粉、蛋白粉的营养成分不同于配方奶，也与鲜奶等奶制品有较大差异，不建议作为婴幼儿食品。无乳糖大豆基配方奶可作为婴幼儿慢性迁延性腹泻时的治疗饮食，但应在医师指导下应用。', '6', NULL, '2023-04-01 00:00:00');
INSERT INTO `feeding` VALUES ('1b9de0d6-58fd-4925-95ee-cd625d90e7eb', '辅食不加调味品，尽量减少糖和盐的摄入', '婴幼儿应少喝果汁', '鲜榨果汁、100%纯果汁中的果糖、蔗糖等糖含量过高，纤维素含量少，其营养价值不如整个水果。为减少婴幼儿糖的摄入量，目前推荐6月龄前婴儿不额外添加纯果汁或稀释果汁；7 ~ 12月龄的婴儿最好食用果泥和小果粒，可少量饮用纯果汁但应稀释；13 ~ 24月龄幼儿每天纯果汁的饮用量不超过120 mL，并且最好限制在进餐时或点心时饮用。', '7~24', NULL, '2023-04-01 00:00:00');
INSERT INTO `feeding` VALUES ('1d33909f-8069-4224-b047-cc9a6e9713b2', '从富铁泥糊状食物开始，逐步添加达到食物多样', '哪些是含铁丰富的食物', '含铁丰富的食物包括，瘦猪肉、牛肉、动物肝脏、动物血等。这些食物的含铁量高且含血红素铁较多，容易被人体吸收利用，是人体铁的重要食物来源，也是最佳来源。蛋黄中也有较高的铁，但其吸收率不如肉类。婴儿配方奶、强化铁的婴儿米粉等额外添加铁等营养素，其铁含量也高，但均为非血红素铁，吸收率相对较低。绿叶蔬菜的铁含量在蔬菜中相对较高，同时富含维生素C，有促进非血红素铁吸收的作用。', '7~24', NULL, '2023-04-01 00:00:00');
INSERT INTO `feeding` VALUES ('1f1974bc-1d6c-4d84-897d-76bfd8a682aa', '从富铁泥糊状食物开始，逐步添加达到食物多样', '7 ~ 9月龄婴儿添加辅食', '7 ~ 9 月龄属于辅食添加开始阶段，主要是让婴儿适应新的食物并逐渐增加进食量。添加辅食应在婴儿健康且情绪良好时开始，遵照辅食添加原则，循序渐进。为了保证母乳喂养，建议刚开始添加辅食时，先母乳喂养，婴儿半饱时再喂辅食，然后再根据需要哺乳。随着婴儿辅食量增加，满7月龄时，多数婴儿的辅食喂养可以成为单独一餐，随后过渡到辅食喂养与哺乳间隔的模式。每天母乳喂养4 ~ 6次，辅食喂养2 ~ 3次。不能母乳喂养或母乳不足时应选择合适的较大婴儿配方奶作为补充。合理安排婴儿的作息时间，包括睡眠、进食和活动时间等，尽量将辅食喂养安排在与家人进食时间相近或相同时，以便以后婴儿能与家人共同进餐。\r\n刚开始添加辅食时，可选择强化铁的婴儿米粉，用母乳、配方奶或水冲调成稍稀的泥糊状（能用小勺舀起不会很快滴落）。婴儿刚开始学习接受小勺喂养时，由于进食技能不足，只会舔吮，甚至将食物推出、吐出，需要慢慢练习。可以用小勺舀起少量米糊放婴儿一侧嘴角让其吮舔。切忌将小勺直接塞进婴儿嘴里，令其有窒息感，产生不良的进食体验。第1次只需尝试1小勺，第1天可以尝试1~2次。第 2天视婴儿情况增加进食量或进食次数。观察2 ~ 3 d，如婴儿适应良好就可再引入一种新的食物，如蛋黄泥、肉泥等富铁食物。在婴儿适应多种食物后可混合喂养，如米粉拌蛋黄、肉泥蛋羹等。\r\n在给7 ~ 9月龄婴儿引入新的食物时应特别注意观察是否有食物过敏现象。如在尝试某种新的食物的1 ~ 2 d内出现呕吐、腹泻、湿疹等不良反应，须及时停止喂养，待症状消失后再从小量开始尝试，如仍然出现同样的不良反应，应尽快咨询医师，确认是否食物过敏。对于婴儿偶尔出现的呕吐、腹泻、湿疹等不良反\r\n', '7~9', NULL, '2023-04-01 00:00:00');
INSERT INTO `feeding` VALUES ('26bf8d5e-8efe-4949-853d-063efe4baac5', '注重饮食卫生和进食安全', '如何保证婴幼儿进食安全', '可能会发生的意外有筷子、汤匙等餐具插进咽喉、眼眶；舌头、咽喉被烫伤，甚至弄翻火锅、汤、粥而造成大面积烫伤；误食农药、化学品等意外，在婴幼儿中时有发生。这些与进食相关的意外事件与婴幼儿进食时随意走动，家属看护不严有密切的关系。为保证进食安全，婴幼儿进食时应固定位置，必须有成人的看护，并注意进食场所的安全。', '7~24', NULL, '2023-04-01 00:00:00');
INSERT INTO `feeding` VALUES ('4419cc84-f835-4be5-bef3-3954803b1f54', '辅食不加调味品，尽量减少糖和盐的摄入', '关键推荐', '辅食应保持原味，不加盐、糖以及刺激性调味品，保持淡口味。淡口味食物有利于提高婴幼儿对不同天然食物口味的接受度，减少偏食挑食的风险。淡口味食物也可减少婴幼儿盐和糖的摄入量，降低儿童期及成人期肥胖、糖尿病、高血压、心血管疾病的风险。\r\n强调婴幼儿辅食不额外添加盐、糖及刺激性调味品，也是为了提醒父母在准备家庭食物时也应保持淡口味，即为适应婴幼儿需要，也为保护全家人健康。\r\n①婴幼儿辅食应单独制作；②保持食物原味，不需要额外加糖、盐及各种调味品；③1岁以后逐渐尝试淡口味的家庭膳食', '7~24', NULL, '2023-04-01 00:00:00');
INSERT INTO `feeding` VALUES ('512040c0-290e-478c-a5b6-7b7d369cb38b', '注重饮食卫生和进食安全', '家庭中自制婴幼儿辅食的卫生要求', '家庭中自制婴幼儿辅食时要做到以下几点：①准备辅食所用的案板、锅铲、碗勺等炊具均应清洗干净；②选择优质的原材料，应尽可能新鲜，并仔细择选和清洗；③避免油炸、烧烤等烹饪方法，减少营养素的流失；④单独制作，或在家庭烹饪食物投放调味品之前，\r\n选出部分适合婴幼儿的食物；⑤现做现吃，没有吃完\r\n的辅食不宜再次喂给婴幼儿。', '7~24', NULL, '2023-04-01 00:00:00');
INSERT INTO `feeding` VALUES ('51df92e3-beb5-49c0-92a3-011f2231d4e9', '继续母乳喂养，满6月龄起添加辅食', '关键推荐', '①婴儿满6月龄后仍需继续母乳喂养，并逐渐引入各种食物；\r\n②辅食是指除母乳和/或配方奶以外的其他各种性状的食物；\r\n③有特殊需要时须在医师的指导下调整辅食添加时间；\r\n④不能母乳喂养或母乳不足的婴幼儿，应选择配方奶作为母乳的补充。', '6', NULL, '2023-04-01 00:00:00');
INSERT INTO `feeding` VALUES ('52cc9b9a-ceb8-4f46-b383-9eee59260828', '继续母乳喂养，满6月龄起添加辅食', '辅食的定义', '本指南定义辅食为：除母乳和/或配方奶以外的其他各种性状的食物，包括各种天然的固体、液体食物，以及商品化食物。目前WHO对辅食的定义：除母乳以外任何的食物和/或饮料（包括婴儿配方奶、较大婴儿配方奶和水）。美国儿科学会（American Academy of Pediatrics）认为：除母乳以外任何含有营养素的食物和/或饮料（包括婴儿配方奶、较大婴儿配方奶，但不包括水）。欧洲儿科胃肠肝病和营养学会（European Society for Pediatric Gastroenterology Hepatology and Nutrition）认为：除母乳和母乳替代品外所有的固体和/或液体食物（不包括婴儿配方奶和较大婴儿配方奶）。为倡导母乳喂养，减少大众对婴儿配方奶的误解，本指南强调配方奶是母乳替代品，不是辅食。如母乳充足，婴儿满6月龄后不应该添加配方奶，而是必须引入其他各种有营养的食物作为辅食。', '6', NULL, '2023-04-01 00:00:00');
INSERT INTO `feeding` VALUES ('61bc67be-154c-4b61-810c-8b2857240746', '从富铁泥糊状食物开始，逐步添加达到食物多样', '10 ~ 12月龄婴儿添加辅食', '10 ~ 12月龄婴儿已经尝试并适应多种种类的食物，这一阶段应在继续扩大婴儿食物种类的同时，关注增加食物的稠厚度和粗糙度，并注重培养婴儿对食物和进食的兴趣。\r\n10 ~ 12月龄婴儿的辅食质地应该比前期加厚、加粗，带有一定的小颗粒，并可尝试块状的食物。绝大多数婴儿在12月龄前萌出第1颗乳牙，可以帮助婴儿啃\r\n咬食物。此时婴儿的乳磨牙均未萌出，但婴儿牙床可以磨碎较软的小颗粒食物。尝试颗粒状食物可促使婴儿多咀嚼，有利于牙齿的萌出。\r\n合理安排10 ~ 12月龄婴儿的睡眠、进食和活动时间，每天哺乳3 ~ 4次，辅食喂养2 ~ 3次。辅食喂养时间安排在家人进餐的同时或在相近时。逐渐达到与家人同时进食一日三餐，并在早餐和午餐、午餐和晚餐之间，以及临睡前各加餐1次。\r\n10 ~ 12月龄婴儿应保持每天600 mL的奶量；保证摄入足量的动物性食物，每天1个鸡蛋加50 g肉禽鱼；一定量的谷物类；蔬菜、水果的量以婴儿需要而定。继续引入新食物，特别是不同种类的蔬菜、水果等，增加婴儿对不同食物口味和质地的体会，减少将来挑食、偏食的风险。不能母乳喂养或母乳不足的婴儿仍应选择合适的较大婴儿配方奶作为补充。\r\n特别建议为婴儿准备一些便于用手抓捏的“手抓食物”，鼓励婴儿尝试自喂，如香蕉块、煮熟的土豆块和胡萝卜块、馒头、面包片、切片的水果和蔬菜以及撕碎的鸡肉等。一般在10月龄试香蕉、土豆等比较软的手抓食物，12月龄时可以尝试黄瓜条、苹果片等较硬的块状食物。', '10~12', NULL, '2023-04-01 00:00:00');
INSERT INTO `feeding` VALUES ('64f809eb-96ce-4c44-94e0-f0a915a18b11', '辅食不加调味品，尽量减少糖和盐的摄入', '哪些家庭食物适合13 ~ 24月龄幼儿', '添加辅食的最终目的是逐渐转变为成人的饮食模式，因此鼓励13 ~ 24月龄幼儿尝试家庭食物，并在满24月龄后与家人一起进食。当然，并不是所有的家庭食物都适合13 ~ 24月龄的幼儿，如经过腌、熏、卤制，重油、甜腻，以及辛辣刺激的高盐、高糖、刺激性的重口味食物均不适合。适合13 ~ 24月龄幼儿的家庭食物应该是少盐、少糖、少刺激的淡口味食物，并且最好是家庭自制的食物。', '13~24', NULL, '2023-04-01 00:00:00');
INSERT INTO `feeding` VALUES ('6567cef7-c039-4442-adec-c9f96b572953', ' 提倡顺应喂养，鼓励但不强迫进食', '怎样合理安排婴幼儿的餐次和进餐时间', '为培养婴幼儿良好的作息习惯，方便家庭生活，从开始起就应将辅食喂养安排在家人进餐的同时或相近时。婴幼儿的进餐时间应逐渐与家人一日三餐的进餐时间一致，并在两餐之间，即早餐和午餐、午餐和晚餐之间，以及睡前额外增加1次喂养。婴儿满6月龄后应尽量减少夜间喂养。一般7 ~ 9月龄婴儿每天辅食喂养2次，母乳喂养4 ~ 6次；10 ~ 12月龄婴儿每天辅食喂养2 ~ 3次，母乳喂养4次；13 ~ 24月龄幼儿每天辅食喂养3次，母乳喂养3次。\r\n婴幼儿注意力持续时间较短，一次进餐时间宜控制在20 min以内。进餐过程中应鼓励婴幼儿手抓食物自喂，或学习使用餐具，以增加婴幼儿对食物和进食的兴趣。进餐时看电视、玩玩具等会分散婴幼儿对进食和食物的兴趣，必须加以禁止。', '7~24', NULL, '2023-04-01 00:00:00');
INSERT INTO `feeding` VALUES ('67c034c3-2632-4184-89f6-b3974cd997d4', ' 提倡顺应喂养，鼓励但不强迫进食', '辅食添加中婴幼儿出现不适反应的应对', '辅食添加中婴幼儿出现不适反应的应对添加辅食过程中，婴幼儿难免会有恶心、哽噎、呕吐，甚至拒绝进食的表现，但不能因此而只给稀糊状的辅食，甚至放弃添加辅食。辅食需要咀嚼、吞咽，而不只是吸吮；辅食也有不同于母乳的口味，这些都需要婴幼儿慢慢熟悉和练习。因此，添加辅食时父母及喂养者应保持耐心，积极鼓励，反复尝试。此外，父母及喂养者也要掌握一些喂养技巧，如喂养辅食的小勺应大小合适；每次喂养时先让婴儿尝试新的食物；或将新添加的辅食与婴儿熟悉的食物混合，如用母乳来调制米粉，在婴儿熟悉的米粉中加入少量蛋黄等；注意食物温度合适，不能太烫或太冷等。少数婴幼儿可能因疾病原因而造成辅食添加延迟，或者因发育迟缓、心理因素等致使添加固体食物困难，对于这些特殊情况，需要在专科医师的指导下逐步干预、改进。', '7~24', NULL, '2023-04-01 00:00:00');
INSERT INTO `feeding` VALUES ('6de99c46-1fa0-4c85-b84d-48c69857a582', '注重饮食卫生和进食安全', '如何保证食物安全', '保证食物安全最基本的做法是将食物煮熟。经过高温烧煮后，绝大多数的病原微生物均可被杀灭。但煮熟后的食物仍有再次被污染的可能，因此准备好的食物应尽快食用。生吃的水果和蔬菜必须用清洁水彻底洗净，而给予婴幼儿食用的水果和蔬菜应去掉外皮及内核和籽，以保证食用时的安全。', '7~24', NULL, '2023-04-01 00:00:00');
INSERT INTO `feeding` VALUES ('7071f58b-9222-48c5-8d06-e0fd7187278b', '注重饮食卫生和进食安全', '容易导致进食意外的食物', '鱼刺等卡在喉咙是最常见的进食意外。当婴幼儿开始尝试家庭食物时，由大块食物哽噎而导致的意外会有所增加。整粒花生、腰果等坚果，婴幼儿无法咬碎且容易呛入气管，禁止食用。果冻等胶状食物不慎吸入气管后，不易取出，也不适合2岁以下婴幼儿。', '7~24', NULL, '2023-04-01 00:00:00');
INSERT INTO `feeding` VALUES ('75c2df67-4317-4494-829d-1f9f823bd8d3', '定期监测体格指标，追求健康生长', ' 关键推荐', '①体质量、身长是反映婴幼儿营养状况的直观指标；②每３个月1次，定期测量身长、体质量、头围等体格生长指标；③平稳生长是最佳的生长模式。\r\n每3个月1次定期监测并评估7 ~ 24月龄婴幼儿的体格生长指标有助于判断其营养状况，并可根据体格生长指标的变化，及时调整营养和喂养。对于生长不良、超重肥胖，以及处于急慢性疾病期间的婴幼儿应增加监测次数。', '7~24', NULL, '2023-04-01 00:00:00');
INSERT INTO `feeding` VALUES ('7946108d-2fb8-4edd-8135-a123dd633e63', '定期监测体格指标，追求健康生长', '绘制和评估婴幼儿的生长曲线', '从婴儿出生起，就将其每次健康体检时所测得的身长、体质量、头围等数据，按月龄标点在相应的WHO儿童生长标准上，如按年龄身长、按年龄体质量、按年龄头围，并将各个数据点连接成线，就是每个婴幼儿个体化的生长曲线。相比单次测量的体格生长指标，定期连续测量体格生长指标并绘制成生长曲线，可以更直观地反映婴幼儿的生长状况，也可以更及时地反映营养和喂养情况\r\n大多数婴儿在满6个月后，其生长曲线会处于相对平稳的水平，与WHO儿童生长标准的中位线平行。当婴幼儿的生长曲线在WHO儿童生长标准的第3和第97百分位之间（P3~ P97）或 在 Z评分－2至+2之间，并与儿童生长标准的中位线平行时，均为正常。而当婴幼儿生长曲线有明显下降或上升时，应及时了解其喂养和疾病情况，并作出合理调整。如当体质量生长曲线从P50快速下降到P15，说明近期体质量增长缓慢，可能存在营养摄入不足，应进一步了解近期是否有疾病，喂养不良等；而当体质量生长曲线从P50飙升到P85，说明体质量增长过快，同样需要寻找原因，减少过度喂养等不良喂养行为。', '7~24', NULL, '2023-04-01 00:00:00');
INSERT INTO `feeding` VALUES ('a36e5228-e456-47fa-9638-85119f23930f', '辅食不加调味品，尽量减少糖和盐的摄入', '天然食物中所含的钠能满足婴幼儿的需求吗', '母乳钠含量可以满足6月龄内婴儿的需要，配方\r\n奶的钠含量高于母乳。7 ~ 12月龄婴儿可以从天然食\r\n物中，主要是动物性食物中获得钠，如1个鸡蛋含钠\r\n71 mg，100 g新鲜瘦猪肉含钠65 mg，100 g新鲜海虾\r\n含钠119 mg，加上从母乳中获得的钠，可以达到7 ~ 12\r\n月龄婴儿钠的适宜摄入量（AI）350 mg/d。13 ~ 24月龄\r\n幼儿开始少量尝试家庭食物，钠的摄入量将明显增\r\n加。', '7~24', NULL, '2023-04-01 00:00:00');
INSERT INTO `feeding` VALUES ('a5fef35b-bd43-474d-8d99-1600e307a843', '辅食不加调味品，尽量减少糖和盐的摄入', '怎样避免高糖、高盐的加工食品', '经过加工后的食品，其中的钠含量大大提高，并大多额外添加糖。如新鲜番茄几乎不含钠，100 mL市售无添加番茄汁含钠20 mg，而 10 g番茄沙司含钠量高达115 mg，并已加入玉米糖浆、白砂糖等。100 g新鲜猪肉含钠70 mg，而市售100 g香肠中含钠量超过2 500 mg。即使是婴儿肉松、肉酥等加工肉制品，100 g含钠量仍高达1 100 mg。学会查看阅读食品标签，可识别高糖、高盐的加工食品。按照我国的食品标签法，食品标签上需要标示每100 g食物中的能量及各种营养素的含量，并标示其占全天营养素参考值的百分比（NRV%）。如钠的NRV%比较高，特别是远高于能量NRV%时，说明这种食物的钠含量较高，最好少吃或避免。从食品标签上的配料表上则可查到额外添加的糖。要注意的是，额外添加的糖除了标示为蔗糖（白砂糖）外，还有其他各种名称，如麦芽糖、果葡糖浆、浓缩果汁、葡萄糖、蜂蜜等', '13~24', NULL, '2023-04-01 00:00:00');
INSERT INTO `feeding` VALUES ('a70526b4-d24c-4598-84da-a96112f0f90e', '从富铁泥糊状食物开始，逐步添加达到食物多样', '什么样的食物适合作为婴儿辅食', '适合婴幼儿的辅食应该满足以下条件：富含能量，以及蛋白质、铁、锌、钙、维生素A等各种营养素；未添加盐、糖，以及其他刺激性调味品；质地适合不同年龄的婴幼儿；婴幼儿喜欢；当地生产且价格合理，家庭可负担。如本地生产的肉、鱼、禽、蛋类、新鲜蔬菜和水果等。作为婴幼儿辅食的食物应保证安全、优质、新鲜，但不必追求高价、稀有。', '7~24', NULL, '2023-04-01 00:00:00');
INSERT INTO `feeding` VALUES ('a9bc69b6-3670-495e-a4bc-6ebc6d96813f', '继续母乳喂养，满6月龄起添加辅食', '7 ~ 24月龄婴幼儿的母乳喂养量', '为了保证能量及蛋白质、钙等重要营养素的供给，7 ~ 9月龄婴儿每天的母乳量应不低于600 mL，每天应保证母乳喂养不少于4次；10 ~ 12月龄婴儿每天母乳量约600 mL，每天应母乳喂养4次 ；而 13 ~ 24月龄幼儿每天母乳量约500 mL，每天母乳喂养不超过4次。对于母乳不足或不能母乳喂养的婴幼儿，满6月龄后需要继续以配方奶作为母乳的补充。', '6', NULL, '2023-04-01 00:00:00');
INSERT INTO `feeding` VALUES ('ac4ed70d-9ff9-4380-b555-6ecb796226f1', ' 提倡顺应喂养，鼓励但不强迫进食', ' 如何进行顺应喂养', '父母需要根据婴幼儿的年龄准备好合适的辅食，并按婴幼儿的生活习惯决定辅食喂养的适宜时间。从开始添加辅食起就应为婴幼儿安排固定的座位和餐具，营造安静、轻松的进餐环境，杜绝电视、玩具、手机等的干扰。喂养时父母应与婴幼儿保持面对面，以便于交流。', '7~24', NULL, '2023-04-01 00:00:00');
INSERT INTO `feeding` VALUES ('b03a30ec-ab2b-415c-ab70-fa737785e5ee', ' 提倡顺应喂养，鼓励但不强迫进食', '什么是顺应喂养', '顺应喂养（responsive feeding）是在顺应养育（responsive parenting）模式框架下发展起来的婴幼儿喂养模式。顺应喂养要求：父母应负责准备安全、有营养的食物，并根据婴幼儿需要及时提供；父母应负责创造良好的进食环境；而具体吃什么、吃多少，则应由婴幼儿自主决定。在婴幼儿喂养过程中，父母应及时感知婴幼儿发出的饥饿或饱足的信号，充分尊重婴幼儿的意愿，耐心鼓励，但决不能强迫喂养。', '7~24', NULL, '2023-04-01 00:00:00');
INSERT INTO `feeding` VALUES ('b08ccafb-326d-4a7e-b2f7-547d1561c5b8', '定期监测体格指标，追求健康生长', '婴幼儿需要运动吗', '自新生儿起，不同个体的活动水平就有明显差异。婴幼儿期不同的活动水平也意味着其能量的摄入和消耗会有所不同。提高婴幼儿的活动水平可能也是减少婴幼儿超重以及将来肥胖的有效措施之一。', '7~24', NULL, '2023-04-01 00:00:00');
INSERT INTO `feeding` VALUES ('c2306258-4bbf-4ac3-9832-1620edfd000b', ' 提倡顺应喂养，鼓励但不强迫进食', '如何培养婴幼儿自主进食', '婴幼儿学会自主进食是其成长过程中的重要一步，需要反复尝试和练习。父母应有意识地利用婴幼儿感知觉，以及认知、行为和运动能力的发展，逐步训练和培养婴幼儿的自主进食能力。7 ~ 9月龄婴儿喜欢抓握，喂养时可以让其抓握、玩弄小勺等餐具；10 ~ 12月龄婴儿已经能捡起较小的物体，手眼协调熟练，可以尝试让其自己抓着香蕉、煮熟的土豆块或胡萝卜等自喂；13月龄幼儿愿意尝试抓握小勺自喂，但大多洒落；18月龄幼儿可以用小勺自喂，但仍有较多洒落；24月龄幼儿能用小勺自主进食并较少洒落。在婴幼儿学习自主进食的过程中，父母应给与充分的鼓励，并保持耐心。', '7~24', NULL, '2023-04-01 00:00:00');
INSERT INTO `feeding` VALUES ('c2f235c0-f6db-43e4-8ae1-415625b47981', ' 提倡顺应喂养，鼓励但不强迫进食', '10 ~ 12月龄婴儿一日膳食安排', '10 ~ 12月龄婴儿每天添加2 ~ 3次辅食，母乳喂养3 ~ 4次。停止夜间喂养，一日三餐时间与家人大致相同，并在早餐至午餐、午餐至晚餐、临睡前各安排1次点心。大致可安排如下，早上7点：母乳和/或配方奶，加婴儿米粉或其他辅食。以喂奶为主，需要时再加辅食 ；早 上 10点：母乳和/或配方奶；中午12点 ：各 种厚糊状或小颗粒状辅食，可以尝试软饭、肉末、碎菜等 ；下 午 3点：母乳和/或配方奶，加水果泥或其他辅食。以喂奶为主，需要时再加辅食；下午6点：各种厚糊状或小颗粒状辅食；晚上9点：母乳和/或配方奶。10 ~ 12月龄婴儿每天奶量约600 mL；鸡 蛋 1个，肉禽鱼50 g；适量的强化铁的婴儿米粉、稠厚的粥、软饭、馒头等谷物类；继续尝试不同种类的蔬菜和水果，并根据婴儿需要增加进食量，可以尝试碎菜或自己啃咬香蕉、煮熟的土豆和胡萝卜等。', '10~12', NULL, '2023-04-01 00:00:00');
INSERT INTO `feeding` VALUES ('c9891108-710f-46b2-a579-5c77d42ecd69', '继续母乳喂养，满6月龄起添加辅食', '为什么强调在6月龄时添加辅食', '婴儿满6月龄时是添加辅食的最佳时机。婴儿满6月龄后，纯母乳喂养已无法再提供足够的能量，还有铁、锌、维生素A等关键营养素，因而必须在继续母乳喂养的基础上引入各种营养丰富的食物。在这一时期添加辅食也与婴儿的口腔运动能力，及其对不同口味、不同质地食物的接受能力相一致。\r\n过早添加辅食，容易因婴儿消化系统不成熟而引发胃肠不适，进而导致喂养困难或增加感染、过敏等风险。过早添加辅食也是母乳喂养提前终止的重要原因，并且是儿童和成人期肥胖的重要风险因素。过早添加辅食还可能因进食时的不愉快经历，影响婴幼儿长期的进食行为。\r\n过晚添加辅食，则增加婴幼儿蛋白质、铁、锌、碘、维生素A等缺乏的风险，进而导致营养不良以及缺铁性贫血等各种营养缺乏性疾病，并造成长期不可逆的不良影响。过晚添加辅食也可能造成喂养困难，增加食物过敏风险等。\r\n少数婴儿可能由于疾病等各种特殊情况而需要提前或推迟添加辅食。这些婴儿必须在医师的指导下选择辅食添加时间，但一定不能早于满4月龄前，并在满6月龄后尽快添加。', '6', NULL, '2023-04-01 00:00:00');
INSERT INTO `feeding` VALUES ('cdb46922-9b1f-4d28-9993-63e720d0acc5', ' 提倡顺应喂养，鼓励但不强迫进食', '13 ~ 24月龄幼儿一日膳食安排', '13 ~ 24月龄幼儿应与家人一起进食一日三餐，并在早餐和午餐、午餐和晚餐之间，以及临睡前各安排一次点心。大致可安排如下，早上7点：母乳和/或配方奶，加婴儿米粉或其他辅食，尝试家庭早餐；早上10点：母乳和/或配方奶，加水果或其他点心；中午12点：各种辅食，鼓励幼儿尝试成人的饭菜，鼓励幼儿自己进食；下午3点：母乳和/或配方奶，加水果或其他点心；下午6点：各种辅食，鼓励幼儿尝试成人的饭菜，鼓励幼儿自己进食；晚上9点：母乳和/或配方奶。13 ~ 24月龄幼儿每天仍保持约500 mL的奶量；鸡蛋1个，肉禽鱼50 ~ 75 g；软饭、面条、馒头、强化铁的婴儿米粉等谷物类约50 ~ 100 g；继续尝试不同种类的蔬菜和水果，尝试啃咬水果片或煮熟的大块蔬菜，增加进食量。', '13~24', NULL, '2023-04-01 00:00:00');
INSERT INTO `feeding` VALUES ('d0d2cedf-1bd9-4f75-b0aa-cbd8d636b8be', '辅食不加调味品，尽量减少糖和盐的摄入', '适合的辅食烹饪方法有哪些', '辅食烹饪最重要的是要将食物煮熟、煮透，同时尽量保持食物中的营养成分和原有口味，并使食物质地能适合婴幼儿的进食能力。辅食烹饪方法宜多采用蒸、煮，不用煎、炸。\r\n婴幼儿的味觉、嗅觉还在形成过程中，父母及喂养者不应以自己的口味来评判。在制作辅食时可以通过不同食物的搭配来增进口味，如番茄蒸肉末、土豆牛奶泥等，其中天然的奶味和酸甜味是婴幼儿最熟悉和喜爱的口味', '7~24', NULL, '2023-04-01 00:00:00');
INSERT INTO `feeding` VALUES ('d737a4fd-8614-4eb0-8690-0a48e2eee666', '从富铁泥糊状食物开始，逐步添加达到食物多样', '13 ~ 24月龄幼儿喂养', '13 ~ 24月龄幼儿已经大致尝试过各种家庭日常食物，这一阶段主要是学习自主进食，也就是学会自己吃饭，并逐渐适应家庭的日常饮食。幼儿在满12月龄后应与家人一起进餐，在继续提供辅食的同时，鼓励尝试家庭食物，并逐渐过渡到与家人一起进食家庭食物。随着幼儿自我意识的增强，应鼓励幼儿自主进食。满12月龄幼儿能用小勺舀起，但大多散落，18月龄时能吃到大约一半的食物，而到24月龄时能比较熟练地用小勺自喂，少有散落。\r\n13 ~ 24月龄幼儿的奶量应维持约500 mL，每 天 1个鸡蛋加50 ~ 75 g肉禽鱼，每天50 ~ 100 g的谷物类，蔬菜、水果的量仍然以幼儿需要而定。不能母乳喂养或母乳不足时，仍然建议以合适的幼儿配方奶作为补充，可引入少量鲜牛奶、酸奶、奶酪等，作为幼儿辅食的一部分。', '13~24', NULL, '2023-04-01 00:00:00');
INSERT INTO `feeding` VALUES ('e8d73e6a-3160-48e7-b83b-a5bed5a891a1', '继续母乳喂养，满6月龄起添加辅食', '7 ~ 24月龄婴幼儿继续母乳喂养的益处', '婴儿满6月龄后仍然可以从继续母乳喂养中获得能量以及各种重要营养素，还有抗体、母乳低聚糖等各种免疫保护因子。7 ~ 24月龄婴幼儿继续母乳喂养可显著减少腹泻、中耳炎、肺炎等感染性疾病；继续母乳喂养还可减少婴幼儿食物过敏、特应性皮炎等过敏性疾病；此外，母乳喂养婴儿到成人期时，身高更高、肥胖及各种代谢性疾病明显减少。与此同时，继续母乳喂养还可增进母子间的情感连接，促进婴幼儿神经、心理发育，母乳喂养时间越长，母婴双方的获益越多。因此7 ~ 24月龄婴儿应继续母乳喂养，并可持续到2岁\r\n或以上。', '6', NULL, '2023-04-01 00:00:00');
INSERT INTO `feeding` VALUES ('eb0e31fe-4abe-4a7b-b7a5-45ee56f66918', '注重饮食卫生和进食安全', '如何保持家庭自制婴幼儿辅食的安全卫生', '家庭自制婴幼儿辅食时，应选择新鲜、优质、安全的原材料。辅食制作过程中必须注意清洁、卫生，如制作前洗手、保证制作场所及厨房用品清洁。必须注意生熟分开，以免交叉污染。按照需要制作辅食，做好的辅食应及时食用，未吃完的辅食应丢弃。多余的原料或制成的半成品，应及时放入冰箱冷藏或冷冻保存。', '7~24', NULL, '2023-04-01 00:00:00');
INSERT INTO `feeding` VALUES ('f055705f-9c30-4fc7-92be-7d28169a32ed', ' 提倡顺应喂养，鼓励但不强迫进食', '7 ~ 9月龄婴儿一天膳食安排', '7 ~ 9月龄婴儿可尝试不同种类的食物，每天辅食喂养2次，母乳喂养4 ~ 6次。7 ~ 9月龄婴儿应逐渐停止夜间喂养，白天的进餐时间逐渐与家人一致。大致可安排如下：早上7点：母乳和/或配方奶；早上10点：母乳和/或配方奶；中午12点：各种泥糊状的辅食，如婴儿米粉、稠厚的肉末粥、菜泥、果泥、蛋黄等；下午3点：母乳和/或配方奶；下午6点：各种泥糊状的辅食；晚上9点：母乳和/或配方奶。夜间可能还需要母乳和/ 或配方奶喂养1次。\r\n7 ~ 9月龄婴儿每天奶量至少600 mL；逐渐达到蛋黄和/或鸡蛋1个，肉禽鱼50 g；适量的强化铁的婴儿米粉、厚粥、烂面等谷物类；蔬菜和水果以尝试为主。少数确认鸡蛋过敏的婴儿应回避鸡蛋，相应增加约30 g肉类。', '7~9', NULL, '2023-04-01 00:00:00');
INSERT INTO `feeding` VALUES ('f8bbb71c-02ae-4ab8-bcf8-268cea67f8e1', '注重饮食卫生和进食安全', '关键推荐', '①选择安全、优质、新鲜的食材；②制作过程始终保持清洁卫生，生熟分开；③不吃剩饭，妥善保存和处理剩余食物；④饭前洗手，进食时应有成人看护，并注意进食环境安全。', '7~24', NULL, '2023-04-01 00:00:00');

SET FOREIGN_KEY_CHECKS = 1;