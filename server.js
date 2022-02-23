const express = require("express");
const app = express();
let categoryRoutes=require('./routes/category/category.routes')
const port = 5000;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.use('/api/v1/category',categoryRoutes);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
