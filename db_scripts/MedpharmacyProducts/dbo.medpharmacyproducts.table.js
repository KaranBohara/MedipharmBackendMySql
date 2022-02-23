let medpharmacyproducts = `create table if not exists Medpharmacyproducts(
    Id int primary key auto_increment,
    PId varchar(50) not null,
    CId varchar(50) not null,
    MId varchar(50) not null,
    Price bigint not null,
    Discount int not null,
    CreatedAt datetime default CURRENT_TIMESTAMP,
    UpdatedAt datetime ON UPDATE CURRENT_TIMESTAMP
)`;
module.exports=medpharmacyproducts;