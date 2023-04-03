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

 Date: 03/04/2023 16:57:32
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `userId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `nickname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `userpic` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`userId`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('0201', '13980808080', '123456', '小徐', '1070447668@qq.com', 'https://api.r10086.com/%E5%9B%BE%E5%8C%85/%E5%8A%A8%E6%BC%AB%E7%BB%BC%E5%90%886/9bd9b167gy1g4lhiletmbj21hc0xcndu.jpg');
INSERT INTO `user` VALUES ('0209', '13982828282', '123456', '大黄', '1070447668@qq.com', 'https://api.r10086.com/%E5%9B%BE%E5%8C%85/%E5%8A%A8%E6%BC%AB%E7%BB%BC%E5%90%886/9bd9b167gy1g4lhiletmbj21hc0xcndu.jpg');

SET FOREIGN_KEY_CHECKS = 1;
