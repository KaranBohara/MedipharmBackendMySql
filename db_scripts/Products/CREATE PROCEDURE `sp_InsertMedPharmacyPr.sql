-- CREATE PROCEDURE `sp_InsertProducts`(IN PId varchar(255),IN ProductName VARCHAR(255) ,IN Description VARCHAR(255),IN Image VARCHAR(255),
-- IN Category VARCHAR(255),IN Manufacturer VARCHAR(100),IN Quantity bigint,IN Price bigint,IN Discount int,IN Status VARCHAR(255))
-- INSERT INTO Products (PId,ProductName,Description,Image,CId,Manufacturer,Quantity,Price,Discount,StatusId) VALUES (PId,ProductName,Description,Image,
-- (Select CId from Category where Category=Category),Manufacturer,Quantity,Price,Discount,(Select StatusId from StockStatus where Status=Status))
-- DROP PROCEDURE IF EXISTS sp_Products;
-- CREATE DEFINER=`ufmmjvetsmyjgpur`@`%` PROCEDURE `sp_InsertProducts`(IN PId int,IN ProductName VARCHAR(255) ,IN Description varchar(255),
-- IN Image varchar(255),IN Category VARCHAR(255),IN Manufacturer VARCHAR(255),
-- IN Quantity bigint,IN Price bigint,IN Discount int,IN Status VARCHAR(255))
-- INSERT INTO Products (PId,ProductName,Description,Image,CId,Manufacturer,Quantity,Price,Discount,StatusId) VALUES (PId,ProductName,Description,Image,
-- (Select CId from Category where Category=Category),Manufacturer,Quantity,Price,Discount,
-- (Select StatusId from StockStatus where Status=Status))
-- CALL sp_InsertProducts(1,"Face Mask","Washable Face Mask","https://www.netmeds.com/images/product-v1/150x150/909963/wildcraft_hypashield_w95_reusable_outdoor_protection_face_mask_0_0.jpg",
-- "Covid Essentials","BodyCare",100,399,5,"Yes")
-- Insert into Products(PId,ProductName,Description,Image,CId,Manufacturer,Quantity,Price,Discount,StatusId) values(1,"Face Mask","Washable Face Mask","https://www.netmeds.com/images/product-v1/150x150/909963/wildcraft_hypashield_w95_reusable_outdoor_protection_face_mask_0_0.jpg",
-- 1,"BodyCare",100,399,5,1)
-- SELECT PId,ProductName,Description,Image,
-- CREATE VIEW vw_Product AS
-- SELECT
--     PId,ProductName,Description,Image,Category,Manufacturer,Quantity,Price,Discount,Status
-- FROM
--     Products
-- INNER JOIN Products USING (PId)
-- INNER JOIN Category USING (CId)
-- GROUP BY PId;

CREATE view vw_Product
AS 
SELECT DATE_FORMAT(A.CreatedAt,'%d-%m-%y %r') as Date,A.PId,A.ProductName,A.Description,A.Image,B.Category,A.Manufacturer,A.Quantity,A.Price,A.Discount,C.Status
FROM Products A INNER JOIN Category B
ON A.CId= B.CId
INNER JOIN StockStatus C 
ON A.StatusId= C.StatusId