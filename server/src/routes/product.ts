import { Router } from "express";
import multer from "multer";
import productController from "../controller/product";
import path from "path";

const router = Router();

router.get("/", productController.raedProductsController);

router.post("/", productController.createProductController);

router.get("/:productId", productController.raedProductController);

router.patch("/:productId", productController.updateProductController);

router.delete("/:productId", productController.deleteProductController);

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "thumbnails/");
  },
  filename: (req, file, cb) => {
    const extName = path.extname(file.originalname);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}${extName}`);
  },
});

const upload = multer({
  storage,
});

router.patch(
  "/thumbnail/:productId",
  upload.single("thumbnail"),
  productController.updateThumbnailController
);

export default router;
