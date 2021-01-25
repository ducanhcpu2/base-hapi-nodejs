-- MySQL dump 10.13  Distrib 8.0.22, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: QLNV
-- ------------------------------------------------------
-- Server version	8.0.22-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `reportDetail`
--

DROP TABLE IF EXISTS `reportDetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reportDetail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `date` timestamp NULL DEFAULT NULL,
  `hospital` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `doctor` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `location` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `note` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `idReport` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `reportDetail_id_uindex` (`id`),
  KEY `reportDetail_reports_id_fk` (`idReport`),
  CONSTRAINT `reportDetail_reports_id_fk` FOREIGN KEY (`idReport`) REFERENCES `reports` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reportDetail`
--

LOCK TABLES `reportDetail` WRITE;
/*!40000 ALTER TABLE `reportDetail` DISABLE KEYS */;
INSERT INTO `reportDetail` VALUES (1,'Bác sỹ trưởng khoa răng hàm mặt hôm nay không đi làm','2011-11-10 17:00:00','Bạch Mai','BS Hùng',NULL,'Hẹn hôm sau gặp lại',NULL,1);
/*!40000 ALTER TABLE `reportDetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reports`
--

DROP TABLE IF EXISTS `reports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reports` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `idUser` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `reports_id_uindex` (`id`),
  KEY `Reports_users_id_fk` (`idUser`),
  CONSTRAINT `Reports_users_id_fk` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reports`
--

LOCK TABLES `reports` WRITE;
/*!40000 ALTER TABLE `reports` DISABLE KEYS */;
INSERT INTO `reports` VALUES (1,'Báo cáo tiến độ làm việc với bệnh viện Bạch Mai',2),(2,'Báo cáo tiến độ làm việc với bệnh viện Hữu Nghị',2);
/*!40000 ALTER TABLE `reports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roleDetail`
--

DROP TABLE IF EXISTS `roleDetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roleDetail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `subRoleName` varchar(50) DEFAULT NULL,
  `idRole` int NOT NULL,
  `idSubRole` int NOT NULL,
  `RoleCode` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `roleDetail_id_uindex` (`id`),
  KEY `roleDetail_roles_id_fk` (`idRole`),
  KEY `roleDetail_subRoles_id_fk` (`idSubRole`),
  CONSTRAINT `roleDetail_roles_id_fk` FOREIGN KEY (`idRole`) REFERENCES `roles` (`id`),
  CONSTRAINT `roleDetail_subRoles_id_fk` FOREIGN KEY (`idSubRole`) REFERENCES `subRoles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roleDetail`
--

LOCK TABLES `roleDetail` WRITE;
/*!40000 ALTER TABLE `roleDetail` DISABLE KEYS */;
INSERT INTO `roleDetail` VALUES (1,'Xem user',1,2,'VIEW_USER'),(2,'Thêm user',1,1,'ADD_USER'),(3,'Sửa user',2,3,'EDIT_USER');
/*!40000 ALTER TABLE `roleDetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `roleName` varchar(50) DEFAULT NULL,
  `idUser` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `roles_id_uindex` (`id`),
  KEY `roles_users_id_fk` (`idUser`),
  CONSTRAINT `roles_users_id_fk` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Admin',1),(2,'Employees',2),(3,'Employees',3),(4,'Employees',4);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subRoles`
--

DROP TABLE IF EXISTS `subRoles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subRoles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `subRoleName` varchar(50) DEFAULT NULL,
  `RoleCode` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `subRoles_id_uindex` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subRoles`
--

LOCK TABLES `subRoles` WRITE;
/*!40000 ALTER TABLE `subRoles` DISABLE KEYS */;
INSERT INTO `subRoles` VALUES (1,'Thêm user','ADD_USER'),(2,'Xem user','VIEW_USER'),(3,'Sửa user','EDIT_USER'),(4,'Xóa user','DELETE_USER');
/*!40000 ALTER TABLE `subRoles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fullName` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `phoneNumber` varchar(13) DEFAULT NULL,
  `gender` int DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_id_uindex` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Nguyen Duc Anh','anhnd151@viettelpost.com.vn','0984819160',1,'',NULL,NULL),(2,'Nguyen Duc Hau','haund1@viettelpost.com.vn','0912313218',1,'',NULL,NULL),(3,'Nguyen Quang Vinh','vinhnq123@viettelpost.com.vn','0912312312',1,'',NULL,NULL),(4,'Pham Kim Anh','anhkm22@viettelpost.com.vn','0912381239',0,'',NULL,NULL);
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

-- Dump completed on 2021-01-25 16:57:23
