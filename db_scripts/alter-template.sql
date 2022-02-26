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
    verifyToken varchar(255) NOT NULL,
    accessToken varchar(255) NULL,
    refreshToken varchar(255) NULL,
    CreatedAt datetime default CURRENT_TIMESTAMP,
    UpdatedAt datetime ON UPDATE CURRENT_TIMESTAMP
)