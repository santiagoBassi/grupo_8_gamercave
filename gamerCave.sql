CREATE DATABASE  IF NOT EXISTS `grupo_8_gamercave` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `grupo_8_gamercave`;
-- MySQL dump 10.13  Distrib 8.0.27, for Linux (x86_64)
--
-- Host: localhost    Database: grupo_8_gamercave
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Procesador'),(2,'Disco RIgido'),(3,'Auricular'),(4,'Mouse'),(5,'Teclado'),(6,'Memoria Ram'),(7,'Monitor'),(8,'Cooler'),(9,'Fuente'),(10,'Mother'),(11,'Placa de Video');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `characteristic`
--

DROP TABLE IF EXISTS `characteristic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `characteristic` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `value` varchar(45) NOT NULL,
  `product_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_caracter_product1_idx` (`product_id`),
  CONSTRAINT `fk_caracter_product1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=189 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `characteristic`
--

LOCK TABLES `characteristic` WRITE;
/*!40000 ALTER TABLE `characteristic` DISABLE KEYS */;
INSERT INTO `characteristic` VALUES (120,'Frecuencia máxima de reloj','4.6 GHz',57),(121,'Frecuencia mínima de reloj','3.7 GHz',57),(122,'Tipos de memoria RAM soportadas','DDR4',57),(123,'Tamaño máximo de memoria RAM soportada','128 GB',57),(124,'Arquitectura','x86-64',57),(125,'Caché','32 MB',57),(126,'Cantidad de núcleos de CPU','12',57),(127,'Potencia de diseño térmico','65 W',57),(128,'Idioma','Español España',58),(129,'Es resistente a salpicaduras','Sí',58),(130,'Con pad numérico','Sí',58),(131,'Largo del cable','1.5m',58),(132,'Arquitectura','Membrana',58),(133,'Con retroiluminación','No',58),(134,'Tipo de conector','USB',58),(135,'Idioma','Español España',10),(136,'Es resistente a salpicaduras','No',10),(137,'Con pad numérico','No',10),(138,'Largo del cable','1.2 m',10),(139,'Arquitectura','Mecánico',10),(140,'Con retroiluminación','Sí',10),(141,'Tipo de conector','USB',10),(142,'Velocidad de rotación','5400 rpm',59),(143,'Aplicaciones','PC, Notebook',59),(144,'Capacidad','1 TB',59),(145,'Tecnología de almacenamiento','HDD',59),(146,'Caché de datos','128 MB',59),(147,'Consumo energético','1.65 W',59),(148,'Aplicaciones','Servidor',60),(149,'Velocidad de rotación','5900 rpm',60),(150,'Capacidad','1 TB',60),(151,'Tecnología de almacenamiento','HDD',60),(152,'Caché de datos','64 MB',60),(153,'Consumo energético','3.6 W',60),(172,'Es gamer','Sí',61),(173,'Conexiones del monitor','VGA/D-Sub,HDMI,Jack 3.5 mm',61),(174,'Altura con soporte','366.5 mm',61),(175,'Largo con soporte','181.9 mm',61),(176,'Es curvo','No',61),(177,'Ancho con soporte','463.8 mm',61),(178,'Tipo de pantalla','LED',61),(179,'Peso con soporte','2.3 kg',61),(180,'Tamaño de la pantalla','20 \"',61),(181,'Frecuencia mínima de reloj','3.8 GHz',9),(182,'Frecuencia máxima de reloj','5.1 GHz',9),(183,'Tipos de memoria RAM soportadas','DDR4',9),(184,'Tamaño máximo de memoria RAM soportada','128 GB',9),(185,'Arquitectura','x86-64',9),(186,'Caché','16 MB',9),(187,'Cantidad de núcleos de CPU','8',9),(188,'Potencia de diseño térmico','125 W',9);
/*!40000 ALTER TABLE `characteristic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `product_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_images_product1_idx` (`product_id`),
  CONSTRAINT `fk_images_product1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=186 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
INSERT INTO `image` VALUES (27,'producto-1634520735185.jpg',9),(28,'producto-1634520735187.png',9),(29,'producto-1634520735195.jpg',9),(30,'producto-1634161879562.png',10),(31,'producto-1634161879565.png',10),(32,'producto-1634161879567.png',10),(171,'producto-1634923917596.jpg',57),(172,'producto-1634923917598.jpg',57),(173,'producto-1634923917598.jpg',57),(174,'producto-1634924631577.jpg',58),(175,'producto-1634924631579.jpg',58),(176,'producto-1634924631580.jpg',58),(177,'producto-1634930854137.jpg',59),(178,'producto-1634930854137.jpg',59),(179,'producto-1634930854138.jpg',59),(180,'producto-1634931066973.jpg',60),(181,'producto-1634931066974.jpg',60),(182,'producto-1634931066974.jpg',60),(183,'producto-1634931713657.jpg',61),(184,'producto-1634931713660.jpg',61),(185,'producto-1634931713661.jpg',61);
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoice`
--

DROP TABLE IF EXISTS `invoice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `invoice` (
  `id` int NOT NULL AUTO_INCREMENT,
  `price` decimal(10,0) NOT NULL,
  `date` datetime NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_sale_user1_idx` (`user_id`),
  CONSTRAINT `fk_sale_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoice`
--

LOCK TABLES `invoice` WRITE;
/*!40000 ALTER TABLE `invoice` DISABLE KEYS */;
/*!40000 ALTER TABLE `invoice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoice_has_product`
--

DROP TABLE IF EXISTS `invoice_has_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `invoice_has_product` (
  `invoice_id` int NOT NULL,
  `product_id` int NOT NULL,
  KEY `fk_invoice_has_product_product1_idx` (`product_id`),
  KEY `fk_invoice_has_product_invoice1_idx` (`invoice_id`),
  CONSTRAINT `fk_invoice_has_product_invoice1` FOREIGN KEY (`invoice_id`) REFERENCES `invoice` (`id`),
  CONSTRAINT `fk_invoice_has_product_product1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoice_has_product`
--

LOCK TABLES `invoice_has_product` WRITE;
/*!40000 ALTER TABLE `invoice_has_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `invoice_has_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `discount` decimal(10,0) NOT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_product_categoty_idx` (`category_id`),
  CONSTRAINT `fk_product_categoty` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (9,'Procesador Intel Core i7',47997,4,1),(10,'Teclado gamer Nisuta NSKBGZ61 QWERTY Outemu',6401,0,5),(57,'Procesador gamer AMD Ryzen 5',41999,4,1),(58,'Teclado Logitech K120 QWERTY',759,0,5),(59,'Disco duro interno Toshiba MQ04ABF',4799,5,2),(60,'Disco duro interno Seagate IronWolf',6099,0,2),(61,'Monitor Led LG 20 Mk400h-b Hdmi   ',21284,10,7);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rol` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` VALUES (1,'admin'),(2,'user');
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(100) DEFAULT NULL,
  `image` varchar(45) DEFAULT NULL,
  `rol_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_rol1_idx` (`rol_id`),
  CONSTRAINT `fk_user_rol1` FOREIGN KEY (`rol_id`) REFERENCES `rol` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (24,'Profesor','Digita House','+54 9 11 455445','profeAdmin@digitalhouse.com','$2a$10$HuYYWcSfuxEjAyifHl8y5.Gvm/D7oxzxskLokIm5xb8PwxG3b2K2O','image-default.png',1),(25,'Profesor','Digita House','+54 9 11 323232','profeUser@digitalhouse.com','$2a$10$v8UFSzuwrrmlQFZj3uG88OYtpwWZCaC3pOwsRRWLdy4vlI1Vp5EIe','image-default.png',2);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `user_id` int NOT NULL,
  `product_id` int NOT NULL,
  KEY `fk_user_has_product_product1_idx` (`product_id`),
  KEY `fk_user_has_product_user1_idx` (`user_id`),
  CONSTRAINT `fk_user_has_product_product1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  CONSTRAINT `fk_user_has_product_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;


/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-25 16:52:03
