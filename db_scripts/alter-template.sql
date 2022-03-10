-- create table if not exists Products(
--     Id int primary key auto_increment,
--     PId varchar(50) unique not null,
--     ProductName varchar(255) not null,
--     Description varchar(255) null,
--     Image varchar(255) not null,
--     CId varchar(50) FOREIGN KEY REFERENCES Category(CId),
--     Manufacturer varchar(100) not null,
--     Quantity bigint not null,
--     Price bigint not null,
--     Discount int not null,
--     StatusId varchar(50) FOREIGN KEY REFERENCES StockStatus(StatusId),
--     CreatedAt datetime default CURRENT_TIMESTAMP,
--     UpdatedAt datetime ON UPDATE CURRENT_TIMESTAMP
-- )

-- Alter table Category
-- Drop column Id
-- create table if not exists Products(
--     PId int AUTO_INCREMENT PRIMARY KEY not null ,
--     ProductName varchar(255) not null,
--     Description varchar(255) null,
--     Image varchar(255) not null,
--     CId int, CONSTRAINT fk_Category FOREIGN KEY(CId) REFERENCES Category(CId) ON UPDATE CASCADE ON DELETE CASCADE,
--     Manufacturer varchar(100) not null,
--     Quantity bigint not null,
--     Price bigint not null,
--     Discount int not null,
--     StatusId int,CONSTRAINT fk_Status FOREIGN KEY(StatusId) REFERENCES StockStatus(StatusId) ON UPDATE CASCADE ON DELETE CASCADE,
--     CreatedAt datetime default CURRENT_TIMESTAMP,
--     UpdatedAt datetime ON UPDATE CURRENT_TIMESTAMP
-- )

-- create table if not exists Category(
--     CId int PRIMARY KEY AUTO_INCREMENT,
--     Category varchar(100) not null,
--     CreatedAt datetime default CURRENT_TIMESTAMP,
--     UpdatedAt datetime ON UPDATE CURRENT_TIMESTAMP
-- )
-- insert into Category(CId,Category,CreatedAt,UpdatedAt) values('1','Covid Essentials','2022-02-25 07:25:21',null);
-- insert into Category(CId,Category,CreatedAt,UpdatedAt) values('2','Eye Wear','2022-02-25 07:25:21',null);
-- insert into Category(CId,Category,CreatedAt,UpdatedAt) values('3','Fitness','2022-02-25 07:25:21',null);
-- insert into Category(CId,Category,CreatedAt,UpdatedAt) values('4','Treatment','2022-02-25 07:25:21',null);
-- insert into Category(CId,Category,CreatedAt,UpdatedAt) values('5','Surgicals','2022-02-25 07:25:21',null);
-- insert into Category(CId,Category,CreatedAt,UpdatedAt) values('6','Ayush','2022-02-25 07:25:21',null);
-- insert into Category(CId,Category,CreatedAt,UpdatedAt) values('7','Mom & Baby','2022-02-25 07:25:21',null);

-- DROP PROCEDURE IF EXISTS sp_InsertProducts;
-- CREATE DEFINER=`ufmmjvetsmyjgpur`@`%` PROCEDURE `sp_InsertProducts`(IN ProductName VARCHAR(255) ,IN Description varchar(255),
-- IN Image varchar(255),IN Category VARCHAR(100),IN Manufacturer VARCHAR(255),
-- IN Quantity bigint,IN Price bigint,IN Discount int,IN Status VARCHAR(255))
-- INSERT INTO Products (ProductName,Description,Image,CId,Manufacturer,Quantity,Price,Discount,StatusId) VALUES (ProductName,Description,Image,
-- (Select CId from Category where Category=Category),Manufacturer,Quantity,Price,Discount,
-- (Select StatusId from StockStatus where Status=Status))
create table if not exists Users(
    id varchar(255) PRIMARY KEY not null,
    name varchar(100) not null,
    email varchar(100) unique not null,
    password varchar(255) not null,
    active bool DEFAULT false,
    refreshToken varchar(255) NULL,
    CreatedAt datetime default CURRENT_TIMESTAMP,
    UpdatedAt datetime ON UPDATE CURRENT_TIMESTAMP
)
-- DROP PROCEDURE IF EXISTS sp_InsertProducts;
-- CREATE PROCEDURE sp_InsertProducts(IN PId varchar(255),IN ProductName VARCHAR(255) ,IN Description VARCHAR(255),IN Image VARCHAR(255),
-- IN Category VARCHAR(100),IN Manufacturer VARCHAR(100),IN Quantity bigint,IN Price bigint,IN Discount int,IN Status VARCHAR(255))
-- BEGIN
-- INSERT INTO Products (PId,ProductName,Description,Image,CId,Manufacturer,Quantity,Price,Discount,StatusId) VALUES (PId,ProductName,Description,Image,
-- (SELECT CId from Category where Category = "Covid Essentials" ),Manufacturer,Quantity,Price,Discount,(Select StatusId from StockStatus where Status ="Yes"));
-- END
-- CALL sp_InsertProducts ('112','Face Mask','Reusable and Washable Masks','https://www.netmeds.com/images/product-v1/150x150/909963/wildcraft_hypashield_w95_reusable_outdoor_protection_face_mask_0_0.jpg',
--    'Covid Essentials',
--     'Novartis AG',
--     5,
--      399,
--      5,
--      'Yes');

CREATE TABLE `Products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `PId` VARCHAR(255) NOT NULL,
  `ProductName` varchar(255) NOT NULL,
  `Description` LONGTEXT NOT NULL,
  `Image` varchar(255) NOT NULL,
  `CId` int DEFAULT NULL,
  `Manufacturer` varchar(100) NOT NULL,
  `Quantity` bigint NOT NULL,
  `Price` bigint NOT NULL,
  `Discount` int NOT NULL,
  `StatusId` int DEFAULT NULL,
  `CreatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `UpdatedAt` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_Category` (`CId`),
  KEY `fk_Status` (`StatusId`),
  CONSTRAINT `fk_Category` FOREIGN KEY (`CId`) REFERENCES `Category` (`CId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Status` FOREIGN KEY (`StatusId`) REFERENCES `StockStatus` (`StatusId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- insert into StockStatus(Status) VALUES("Yes"),("No")

-- create table if not exists StockStatus(
--     StatusId int PRIMARY KEY AUTO_INCREMENT not null,
--     Status varchar(50) UNIQUE not null,
--     CreatedAt datetime default CURRENT_TIMESTAMP,
--     UpdatedAt datetime ON UPDATE CURRENT_TIMESTAMP
-- )

CREATE view vw_Product
AS 
SELECT DATE_FORMAT(A.CreatedAt,'%d-%m-%y %r') as Date,A.PId,A.ProductName,A.Description,A.Image,B.Category,A.Manufacturer,A.Quantity,A.Price,A.Discount,C.Status
FROM Products A INNER JOIN Category B
ON A.CId= B.CId
INNER JOIN StockStatus C 
ON A.StatusId= C.StatusId;

{ 
    "ProductName": "Face Mask",
"Description": "HDFK Disposable Face Mask for Adults - with the inner non-woven fabric is as soft as intimate clothing, light and breathable, protect you against dust, PM 2.5, haze, smoke, automobile exhaust, etc
3D Face Mask Design",
"Image": "https://www.netmeds.com/images/product-v1/150x150/909963/wildcraft_hypashield_w95_reusable_outdoor_protection_face_mask_0_0.jpg",
"CId": 1,
"Manufacturer": "Novartis AG",
"Quantity": 5,
"Price": 399,
"Discount": 5,
"StatusId": 1 
}
{ 
    "ProductName": "Pulse Oximeter",
"Description": "The newly upgraded SantaMedical Generation 2 Finger Pulse Oximeter is a quick and precise way to check pulse rates and blood oxygen saturation levels. Self-adjusting finger clamp plus simple one-button design allows for easy operation.",
"Image": "https://www.netmeds.com/images/product-v1/150x150/915643/zebronics_fingertip_pulse_oximeter_zeb_fpo500_0_0.jpg",
"CId": 8,
"Manufacturer": "10 DRUG MART",
"Quantity": 15,
"Price": 894,
"Discount": 7,
"StatusId": 1 
}
{ 
"ProductName": "Moisturising Cream",
"Description": "Perfect gift for yourself or a loved one this Valentine’s Day. Dull skin? Brighten up, babe! Our Olay Regenerist Vitamin C + Peptide 24 Face Cream delivers 2X Brighter Skin* in just 28 days. And we didn’t stop there - it also hydrates better than the $400 cream! What’s not to love about glowing and radiant skin? Citrus-scented, silky, and lightweight, our cream formula melts into your skin without any sticky or greasy residue. ",
"Image": "https://www.netmeds.com/images/product-v1/150x150/824268/sri_sri_tattva_moisturising_cream_100_gm_0.jpg",
"CId": 7,
"Manufacturer": "Procter & Gamble",
"Quantity": 5,
"Price": 250,
"Discount": 10,
"StatusId": 2 
}
