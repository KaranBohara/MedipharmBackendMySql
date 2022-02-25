let express = require("express");
let router = express.Router();
const product = require("../../controllers/product/product.controller");
router.get('/', product.getProducts);
router.get('/:id',product.getProduct);
router.post("/", product.addProduct);
router.put('/:id',product.updateProduct);
router.delete('/:id', product.deleteProduct);
module.exports = router;