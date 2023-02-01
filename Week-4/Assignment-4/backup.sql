-- MySQL dump 10.13  Distrib 8.0.32, for macos13 (x86_64)
--
-- Host: localhost    Database: assignment
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article` (
  `articleID` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `authorID` int DEFAULT NULL,
  PRIMARY KEY (`articleID`),
  KEY `authorID` (`authorID`),
  CONSTRAINT `article_ibfk_1` FOREIGN KEY (`authorID`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (1,'Hello world!','Yeah yeah! Happy coding',1),(2,'Hello world!','Yeah yeah! Happy coding',2),(3,'Querying Relational Databases','## 1. ****Database Normalization****\n\n### **Why We Make Databases**',2),(4,'1yeah','1There are 3 types of Database Keys\n    - Unique Keys: No value can be repeated, enforce uniqueness among the column\n    - Can be null\n    - Multiple unique keys per table\n    - Can be modified to a new value',2),(5,'Yeah~~~','Yooooooooo',1),(6,'2yeah','2There are 3 types of Database Keys\n    - Unique Keys: No value can be repeated, enforce uniqueness among the column\n    - Can be null\n    - Multiple unique keys per table\n    - Can be modified to a new value',2),(7,'3yeah','3There are 3 types of Database Keys\n    - Unique Keys: No value can be repeated, enforce uniqueness among the column\n    - Can be null\n    - Multiple unique keys per table\n    - Can be modified to a new value',1),(8,'4yeah','4There are 3 types of Database Keys\n    - Unique Keys: No value can be repeated, enforce uniqueness among the column\n    - Can be null\n    - Multiple unique keys per table\n    - Can be modified to a new value',2),(9,'2yeah','2There are 3 types of Database Keys\n    - Unique Keys: No value can be repeated, enforce uniqueness among the column\n    - Can be null\n    - Multiple unique keys per table\n    - Can be modified to a new value',2),(10,'1yeah','1There are 3 types of Database Keys\n    - Unique Keys: No value can be repeated, enforce uniqueness among the column\n    - Can be null\n    - Multiple unique keys per table\n    - Can be modified to a new value',2),(11,'3yeah','3There are 3 types of Database Keys\n    - Unique Keys: No value can be repeated, enforce uniqueness among the column\n    - Can be null\n    - Multiple unique keys per table\n    - Can be modified to a new value',1),(12,'4yeah','4There are 3 types of Database Keys\n    - Unique Keys: No value can be repeated, enforce uniqueness among the column\n    - Can be null\n    - Multiple unique keys per table\n    - Can be modified to a new value',2),(13,'0yeah','0There are 3 types of Database Keys\n    - Unique Keys: No value can be repeated, enforce uniqueness among the column\n    - Can be null\n    - Multiple unique keys per table\n    - Can be modified to a new value',1),(14,'yo5','5There are 3 types of Database Keys',2),(15,'yo10','10There are 3 types of Database Keys',1),(16,'yo13','13There are 3 types of Database Keys',1),(17,'yo9','9There are 3 types of Database Keys',2),(18,'yo8','8There are 3 types of Database Keys',1),(19,'yo12','12There are 3 types of Database Keys',1),(20,'yo7','7There are 3 types of Database Keys',1),(21,'yo6','6There are 3 types of Database Keys',2),(22,'yo15','15There are 3 types of Database Keys',1),(23,'yo14','14There are 3 types of Database Keys',1),(24,'yo16','16There are 3 types of Database Keys',2),(25,'yo18','18There are 3 types of Database Keys',1),(26,'yo17','17There are 3 types of Database Keys',1),(27,'yo19','19There are 3 types of Database Keys',1),(28,'yo20','20There are 3 types of Database Keys',2),(29,'yo21','21There are 3 types of Database Keys',2),(30,'yo23','23There are 3 types of Database Keys',2),(31,'yo24','24There are 3 types of Database Keys',1),(32,'yo22','22There are 3 types of Database Keys',2),(33,'yo25','25There are 3 types of Database Keys',1),(34,'yo27','27There are 3 types of Database Keys',2),(35,'yo28','28There are 3 types of Database Keys',2),(36,'yo26','26There are 3 types of Database Keys',1),(37,'yo29','29There are 3 types of Database Keys',2),(38,'yo11','11There are 3 types of Database Keys',2),(39,'2023-01-30','Today is a good day!',4);
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-01 19:58:40
