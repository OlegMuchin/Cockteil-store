import express from 'express';
import authorController from "../controller/authorController.js"
const router = new express.Router()

router.route("/:id")
    .get(authorController.getOne)
    .delete(authorController.delete)

router.post("/Proc", authorController.createProc)

router.route("/")
    .post(authorController.create)
    .get(authorController.get)
    .put(authorController.update)

export default router