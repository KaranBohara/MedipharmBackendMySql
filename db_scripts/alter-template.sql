create table if not exists Products(
    Id int primary key auto_increment,
    PId varchar(50) unique not null,
    ProductName varchar(255) not null,
    Description varchar(255) null,
    Image varchar(255) not null,
    CId varchar(50) FOREIGN KEY REFERENCES Category(CId),
    Manufacturer varchar(100) not null,
    Quantity bigint not null,
    Price bigint not null,
    Discount int not null,
    StatusId varchar(50) FOREIGN KEY REFERENCES StockStatus(StatusId),
    CreatedAt datetime default CURRENT_TIMESTAMP,
    UpdatedAt datetime ON UPDATE CURRENT_TIMESTAMP
)
