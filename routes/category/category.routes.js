let express = require("express");
let router = express.Router();
const category = require("../../controllers/category/category.controller");
router.get('/', category.getCategories);
router.get('/:id',category.getCategory);
router.post("/", category.addCategory);
router.put('/:id',category.updateCategory);
router.delete('/:id', category.deleteCategory);
module.exports = router;