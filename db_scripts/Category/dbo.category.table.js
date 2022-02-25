let category = `create table if not exists Category(
    Id int primary key auto_increment,
    CId varchar(50) unique not null,
    Category varchar(255) not null,
    CreatedAt datetime default CURRENT_TIMESTAMP,
    UpdatedAt datetime ON UPDATE CURRENT_TIMESTAMP
)`;
module.exports=category;