let express = require("express");
let router = express.Router();
const product = require("../../controllers/product/product.controller");
const authenticateJWT = require("../../middleware/auth.js");
/** 
*@swagger
*   components:
*    schemas:
*      Product:
*        type: object
*        required:
*          - PId
*          - ProductName
*          - Description
*          - Image
*          - Category
*          - Manufacturer
*          - Quantity
*          - Price
*          - Discount
*          - Status
*        properties:
*          PId:
*              type: integer
*          ProductName:
*              type: string
*          Description:
*              type: string
*          Image:
*              type: string
*          CId:
*              type: integer
*          Manufacturer :
*              type: string
*          Quantity:
*              type: integer
*          Price:
*              type: integer
*          Discount: 
*              type: integer
*          StatusId: 
*              type: integer
*          CreatedAt:
*              type: string
*          UpdatedAt:
*                type: string
*        example:
*          PId: 1,
*          ProductName: Face Mask,
*          Description: Reusable and Washable Masks,
*          Image: https://www.netmeds.com/images/product-v1/150x150/909963/wildcraft_hypashield_w95_reusable_outdoor_protection_face_mask_0_0.jpg,
*          CId: 1,
*          Manufacturer: Novartis AG,
*          Quantity: 5,
*          Price: 399,
*          Discount: 5,
*          StatusId: 1,
*          CreatedAt: 26-02-22 05:15:12 AM
*          UpdatedAt: 26-02-22 05:15:12 AM
*/

/** 
* @swagger
* /api/v1/product:
*            get:
*              summary: Lists all the products
*              tags: [Products]
*              responses:
*                "200":
*                  description: The list of products.
*                  content:
*                    application/json:
*                      schema:
*                        $ref: '#/components/schemas/Product'
*            post:
*              summary: Creates a new Product
*              tags: [Products]
*              requestBody:
*                required: true
*                content:
*                  application/json:
*                    schema:
*                      $ref: '#/components/schemas/Product'
*              responses:
*                "200":
*                  description: The created product.
*                  content:
*                    application/json:
*                      schema:
*                        $ref: '#/components/schemas/Product'
* /api/v1/product/{id}:
*            get:
*              summary: Gets a product by id
*              tags: [Products]
*              parameters:
*                - in: path
*                  name: id
*                  schema:
*                    type: integer
*                  required: true
*                  description: The product id
*              responses:
*                "200":
*                  description: The list of products.
*                  content:
*                    application/json:
*                      schema:
*                        $ref: '#/components/schemas/Product'
*                "404":
*                  description: Product not found.
*            put:
*              summary: Updates a product
*              tags: [Products]
*              parameters:
*                - in: path
*                  name: id
*                  schema:
*                    type: integer
*                  required: true
*                  description: The product id
*              requestBody:
*                required: true
*                content:
*                  application/json:
*                    schema:
*                      $ref: '#/components/schemas/Product'
*              responses:
*                "204":
*                  description: Update was successful.
*                "404":
*                  description: Product not found.
*            delete:
*              summary: Deletes a product by id
*              tags: [Products]
*              parameters:
*                - in: path
*                  name: id
*                  schema:
*                    type: integer
*                  required: true
*                  description: The product id
*              responses:
*                "204":
*                  description: Delete was successful.
*                "404":
*                  description: Product not found.
*/

router.get('/',product.getProducts);
router.get('/:id',product.getProduct);
router.post("/", product.addProduct);
router.put('/:id',product.updateProduct);
router.delete('/:id', product.deleteProduct);
module.exports = router;