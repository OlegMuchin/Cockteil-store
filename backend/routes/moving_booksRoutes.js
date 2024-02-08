import express from 'express';
import moving_booksController from "../controller/moving_booksController.js"
const router = new express.Router()

router.route("/:id")
    .get(moving_booksController.getOne)

router.route("/Proc")
    .post(moving_booksController.createProc)
    .put(moving_booksController.closedProc)

router.route("/")
    .post(moving_booksController.create)
    .get(moving_booksController.get)

export default router