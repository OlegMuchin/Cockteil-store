import db from "../db.js"
class AuthorController{
    async create(req, res){
        const {fio, birthday} = req.body
        const result = db.query("INSERT INTO author(FIO, birthday) VALUES ($1, $2) RETURNING *",[fio, birthday])
        res.json(result)
    }
    async get(req, res){
        const result = await db.query("SELECT * FROM author")
        res.json(result)
    }
    async getOne(req, res){
        const {id} = req.params
        const result = await db.query("SELECT * FROM author where id_author = $1", [id])
        res.json(result)
    }
    async update(req, res){
        const {id, fio, birthday} = req.body
        const result = await db.query("UPDATE author SET FIO = $2, birthday = $3 where id_author = $1 RETURNING *", [id, fio, birthday]) 
        res.json(result)
    }
    async delete(req, res){
        const {id} = req.params
        const result = await db.query("DELETE FROM author where id_author = $1", [id])
        res.json(result)    
    }
    async createProc(req, res){
        const {fio, birthday} = req.body
        const result = await db.query("call insert_author($1, $2)", [fio, birthday])
    }
}

export default new AuthorController()