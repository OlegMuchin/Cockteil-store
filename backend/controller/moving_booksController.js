import db from "../db.js"
class Moving_booksController{
    async create(req, res){
        const {id_books, id_readers, amount} = req.body
        const result = await db.query("INSERT INTO moving_books(id_books, id_readers, amount) VALUES ($1, $2, $3) RETURNING *", [id_books, id_readers, amount])
        res.json(result)
    }
    async get(req, res){
        const result = await db.query("SELECT * FROM moving_books")
        res.json(result)
    }
    async getOne(req, res){
        const {id} = req.params
        const result = await db.query("SELECT * FROM moving_books where id_moving_books = $1", [id])
        res.json(result)
    }
    async createProc(req, res){
        const {ids_books, id_readers, amounts} = req.body
        const result = await db.query("call insert_moving_books($1, $2, $3)", [ids_books, id_readers, amounts])
        // res.json(amounts)
    }
    async closedProc(req, res){
        const {id_moving_books} = req.body
        const result = await db.query("call closed_moving_books($1)", [id_moving_books])
    }
}

export default new Moving_booksController()