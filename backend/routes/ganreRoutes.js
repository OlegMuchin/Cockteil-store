import express from 'express';
import ganreController from "../controller/ganreController.js"
const router = new express.Router()

router.route("/:id")
    .get(ganreController.getOne)
    .delete(ganreController.delete)

router.post("/Proc", ganreController.createProc)

router.route("/")
    .post(ganreController.create)
    .get(ganreController.get)
    .put(ganreController.update)

export default router