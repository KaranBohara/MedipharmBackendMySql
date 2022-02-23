let stockstatus = `create table if not exists StockStatus(
    Id int primary key auto_increment,
    StatusId varchar(50) not null,
    Status varchar(255) not null,
    CreatedAt datetime default CURRENT_TIMESTAMP,
    UpdatedAt datetime ON UPDATE CURRENT_TIMESTAMP
)`;
module.exports=stockstatus;