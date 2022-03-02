const express = require("express");
const app = express();
var cors = require('cors');
const swaggerUI=require('swagger-ui-express');
const swaggerJsDoc=require('swagger-jsdoc');
let categoryRoutes=require('./routes/category/category.routes');
let stockstatusRoutes=require('./routes/stockstatus/stockstatus.routes');
let productRoutes=require('./routes/product/product.routes');
let userRoutes=require('./routes/user/user.routes');
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors({origin:"*"}));
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "LogRocket Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./routes/product/*.js"],
};

const specs = swaggerJsDoc(options);
app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(specs, { explorer: true })
);
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/stockstatus',stockstatusRoutes);
app.use('/api/v1/product',productRoutes);
app.use('/api/v1/user',userRoutes);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
