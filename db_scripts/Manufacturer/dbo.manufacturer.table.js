let manufacturer = `create table if not exists Manufacturer(
    Id int primary key auto_increment,
    MId varchar(50) not null,
    Manufacturer varchar(255) not null,
    CreatedAt datetime default CURRENT_TIMESTAMP,
    UpdatedAt datetime ON UPDATE CURRENT_TIMESTAMP
)`;
module.exports=manufacturer;