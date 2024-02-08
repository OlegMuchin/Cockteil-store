import express from 'express';
import booksController from "../controller/booksController.js"
const router = new express.Router()

router.route("/:id")
    .get(booksController.getOne)
    .delete(booksController.delete)

router.post("/Proc", booksController.createProc)

router.route("/")
    .post(booksController.create)
    .get(booksController.get)
    .put(booksController.update)

export default router