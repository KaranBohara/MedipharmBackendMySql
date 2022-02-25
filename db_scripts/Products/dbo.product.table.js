let product = `create table if not exists Products(
    Id int primary key auto_increment,
    PId varchar(50) unique not null,
    ProductName varchar(255) not null,
    Description varchar(255) not null,
    ProductImage varchar(255) null,
    CreatedAt datetime default CURRENT_TIMESTAMP,
    UpdatedAt datetime ON UPDATE CURRENT_TIMESTAMP
)`;
module.exports=product;