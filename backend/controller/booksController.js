import db from "../db.js"
class BooksController{
    async create(req, res){
        const {name, id_ganre, id_author, amount} = req.body
        const result = await db.query("INSERT INTO books(title, id_ganre, id_author, amount) VALUES ($1, $2, $3, $4) RETURNING *", [name, id_ganre, id_author, amount])
        res.json(result)
    }
    async get(req, res){
        const result = await db.query("SELECT * FROM books")
        res.json(result)
    }
    async getOne(req, res){
        const {id} = req.params
        const result = await db.query("SELECT * FROM books where id_books = $1", [id])
        res.json(result)
    }
    async update(req, res){
        const {id, name, id_ganre, id_author, amount} = req.body
        const result = await db.query("UPDATE books SET title = $2, id_ganre = $3, id_author = $4, amount = $5 where id_books = $1 RETURNING *", [id, name, id_ganre, id_author, amount]) 
        res.json(result)
    }
    async delete(req, res){
        const {id} = req.params
        const result = await db.query("DELETE FROM books where id_books = $1", [id])
        res.json(result)    
    }
    async createProc(req, res){
        const {name, id_ganre, id_author, amount} = req.body
        const result = await db.query("call insert_books($1, $2, $3, $4)", [name, id_ganre, id_author, amount])
    }
}

export default new BooksController()