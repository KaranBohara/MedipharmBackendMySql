const express = require("express");
const app = express();
var cors = require('cors');
let categoryRoutes=require('./routes/category/category.routes');
let stockstatusRoutes=require('./routes/stockstatus/stockstatus.routes');
let productRoutes=require('./routes/product/product.routes');
const port = 5000;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors({origin:"*"}));
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/stockstatus',stockstatusRoutes);
app.use('/api/v1/product',productRoutes);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
