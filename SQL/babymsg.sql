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

 Date: 03/04/2023 16:55:56
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for babymsg
-- ----------------------------
DROP TABLE IF EXISTS `babymsg`;
CREATE TABLE `babymsg`  (
  `babyid` int(11) NOT NULL AUTO_INCREMENT,
  `nickname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `height` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `weight` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `birth` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `userId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `pic_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`babyid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of babymsg
-- ----------------------------
INSERT INTO `babymsg` VALUES (2, '花花', '50cm', '50kg', '2022-07-18', '0209', 'https://ts1.cn.mm.bing.net/th/id/R-C.563c9f960edf22705ea93c167e4255a8?rik=%2bYpBnGhohbm%2bzg&riu=http%3a%2f%2fpic2.sc.chinaz.com%2ffiles%2fpic%2fpic9%2f201304%2fxpic10790.jpg&ehk=y9TAvAF39zGonkVvTRmrzGNn80WggvPIyc92f8N%2fuZQ%3d&risl=&pid=ImgRaw&r=0');
INSERT INTO `babymsg` VALUES (5, '徐大只', '60cm', '20kg', '2022-02-23', '0201', 'https://img.zcool.cn/community/01d62c5548a8ae0000019ae9b204cc.jpg@1280w_1l_2o_100sh.jpg');
INSERT INTO `babymsg` VALUES (7, '徐小只', '40cm', '10kg', '2022-02-23', '0201', 'https://img.zcool.cn/community/01d62c5548a8ae0000019ae9b204cc.jpg@1280w_1l_2o_100sh.jpg');
INSERT INTO `babymsg` VALUES (8, '徐一一', '60cm', '20kg', '2022-02-23', '0201', 'https://img.zcool.cn/community/0196d8554b05ff00000115a8f645a0.jpg@1280w_1l_2o_100sh.jpg');

SET FOREIGN_KEY_CHECKS = 1;
