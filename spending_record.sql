-- MySQL dump 10.13  Distrib 5.5.57, for debian-linux-gnu (x86_64)
--
-- Host: 0.0.0.0    Database: spending_record
-- ------------------------------------------------------
-- Server version	5.5.57-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `spending_record`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `spending_record` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `spending_record`;

--
-- Table structure for table `daily_spending`
--

DROP TABLE IF EXISTS `daily_spending`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `daily_spending` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL,
  `spending_out` float NOT NULL DEFAULT '0',
  `type` int(11) DEFAULT NULL,
  `date` datetime NOT NULL,
  `created_date` datetime NOT NULL,
  `modified_date` datetime NOT NULL,
  `remark` varchar(100) DEFAULT NULL,
  `active` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `daily_spending`
--

LOCK TABLES `daily_spending` WRITE;
/*!40000 ALTER TABLE `daily_spending` DISABLE KEYS */;
INSERT INTO `daily_spending` VALUES (12,1,80,7,'2017-09-26 20:15:00','2017-09-29 14:55:46','2017-09-29 16:33:57','吉豚屋',1),(21,1,20,5,'2017-09-26 09:00:00','2017-09-29 15:20:32','2017-09-29 16:21:11','大家樂',1),(43,1,60,6,'2017-09-23 02:35:00','2017-09-29 16:36:33','2017-09-29 16:36:33','',1),(44,1,19,2,'2017-09-25 18:00:00','2017-09-29 16:41:10','2017-09-29 17:07:11','村巴',1),(45,1,93,6,'2017-09-29 12:45:00','2017-09-29 17:05:19','2017-09-29 17:05:19','添好運',1),(46,1,40,7,'2017-09-29 20:30:00','2017-09-29 17:05:54','2017-09-29 17:05:54','寶島',1),(47,1,18.8,2,'2017-09-29 19:15:00','2017-09-29 17:06:35','2017-09-29 17:06:35','962X',1),(48,1,11.9,2,'2017-09-26 18:30:00','2017-09-29 17:08:09','2017-09-29 17:08:09','MTR',1),(49,1,12.8,2,'2017-09-26 23:00:00','2017-09-29 17:09:04','2017-09-29 17:09:04','59X',1),(50,1,110,7,'2017-09-23 20:35:00','2017-09-29 17:11:06','2017-09-29 17:11:06','euro go go',1),(51,1,17,8,'2017-09-27 19:30:00','2017-09-29 17:14:07','2017-09-29 17:14:07','',1),(52,1,19,2,'2017-09-27 18:00:00','2017-09-29 17:14:29','2017-09-29 17:14:29','村巴',1),(53,1,30,5,'2017-09-28 09:00:00','2017-09-29 17:15:08','2017-09-29 17:15:08','大家樂',1),(54,1,11.9,2,'2017-09-28 18:00:00','2017-09-29 17:15:28','2017-09-29 17:15:28','MTR',1),(55,1,12.8,2,'2017-09-28 23:00:00','2017-09-29 17:15:43','2017-09-29 17:15:43','59X',1),(56,1,37,6,'2017-09-30 13:33:00','2017-09-30 16:34:23','2017-09-30 16:34:23','寶利堡',1),(58,2,12,2,'2017-10-02 03:44:00','2017-09-30 19:44:59','2017-09-30 19:44:59','test',0),(59,1,123,2,'2017-10-01 03:47:00','2017-09-30 19:47:36','2017-09-30 19:47:36','test',0);
/*!40000 ALTER TABLE `daily_spending` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rolename` varchar(20) NOT NULL,
  `permission` varchar(20) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `spending_type`
--

DROP TABLE IF EXISTS `spending_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `spending_type` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `type_name` varchar(30) NOT NULL,
  `color` varchar(20) DEFAULT NULL,
  `text_color` varchar(20) NOT NULL DEFAULT 'White',
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `spending_type`
--

LOCK TABLES `spending_type` WRITE;
/*!40000 ALTER TABLE `spending_type` DISABLE KEYS */;
INSERT INTO `spending_type` VALUES (2,'搭車','Orange','White','2017-09-22 08:42:19'),(3,'買野','pink','White','2017-09-25 09:38:17'),(4,'睇戲','Yellow ','White','2017-09-29 15:18:18'),(5,'早餐','LightCyan','Black','2017-09-29 15:18:18'),(6,'午餐','LightSkyBlue','White','2017-09-22 08:41:48'),(7,'晚餐','MediumBlue','White','2017-09-29 15:19:55'),(8,'游水','Olive','White','2017-09-29 17:13:13'),(9,'買game','Orchid','White','2017-09-29 17:13:39');
/*!40000 ALTER TABLE `spending_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(30) CHARACTER SET latin1 NOT NULL,
  `password` varchar(100) CHARACTER SET latin1 NOT NULL,
  `role` int(11) NOT NULL,
  `email` varchar(100) CHARACTER SET latin1 DEFAULT NULL,
  `active` int(1) NOT NULL DEFAULT '1',
  `created_date` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'nick','$2a$10$HSDutgnSfOaIsaErXPJB5.YXjsLaac.NBye0ftZpN15ylfZlnJdF2',0,NULL,1,'2017-09-30 00:00:00'),(2,'test','$2a$10$nyWQ0y5U/shpbhN7xBcDlOG9fekihPSsJX0Wwo1tlFko3iGU8yhR2',1,NULL,1,'2017-09-30 14:22:03');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-10-01 14:46:57
