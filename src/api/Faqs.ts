import faqsController from "../controller/faqsController";
import { Router } from "express";

const router = Router();

router.get("/", faqsController.getall);
router.get("/:id", faqsController.getOne);
router.post("/", faqsController.postFaq);
router.put("/:id", faqsController.update);
router.delete("/:id", faqsController.remove);

export default router;