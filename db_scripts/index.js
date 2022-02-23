let productTable=require('./Products/dbo.product.table');
let manufacturerTable=require('./Manufacturer/dbo.manufacturer.table');
let categoryTable=require('./Category/dbo.category.table');
let stockStatusTable=require('./StockStatus/dbo.stockstatus.table')
let medpharmacyproducts=require('./MedpharmacyProducts/dbo.medpharmacyproducts.table');

module.exports= {
    productTable,
    manufacturerTable,
    categoryTable,
    stockStatusTable,
    medpharmacyproducts
}