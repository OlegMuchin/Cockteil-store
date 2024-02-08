import db from "../db.js"
class GanreController{
    async create(req, res){
        const {name, specification} = req.body
        const result = await db.query("INSERT INTO ganre(name, specification) VALUES ($1, $2) RETURNING *", [name, specification])
        res.json(result)
    }
    async get(req, res){
        const result = await db.query("SELECT * FROM ganre")
        res.json(result)
    }
    async getOne(req, res){
        const {id} = req.params
        const result = await db.query("SELECT * FROM ganre where id_ganre = $1", [id])
        res.json(result)
    }
    async update(req, res){
        const {id, name, specification} = req.body
        const result = await db.query("UPDATE ganre SET name = $2, specification = $3 where id_ganre = $1 RETURNING *", [id, name, specification]) 
        res.json(result)
    }
    async delete(req, res){
        const {id} = req.params
        const reader = await db.query("DELETE FROM ganre where id_ganre = $1", [id])
        res.json(reader)    
    }
    async createProc(req, res){
        const {name, specification} = req.body
        const result = await db.query("call insert_ganre($1, $2)", [name, specification])
    }
}

export default new GanreController()