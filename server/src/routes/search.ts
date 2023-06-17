import { Router } from "express";
import searchController from "../controller/search";

const router = Router();

router.get("/", searchController.searchController);

export default router;
