let express = require("express");
let router = express.Router();
const category = require("../../controllers/category/category.controller");
router.get("/", category.getCategories);
router.post("/", category.addCategory);
// router.delete("/:id", category.deleteCategory);
module.exports = router;