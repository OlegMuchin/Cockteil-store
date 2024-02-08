import express from 'express';
import readerController from "../controller/readerController.js"
const router = new express.Router()

router.route("/:id")
    .get(readerController.getOne)
    .delete(readerController.delete)

router.post("/Proc", readerController.createProc)

router.route("/")
    .post(readerController.create)
    .get(readerController.get)
    .put(readerController.update)

export default router