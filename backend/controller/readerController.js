import db from "../db.js"
class ReaderController{
    async create(req, res){
        const {fio, address, series_number, phone} = req.body
        const result = await db.query("INSERT INTO readers(FIO, address, series_number, phone) VALUES ($1, $2, $3, $4) RETURNING *", [fio, address, series_number, phone])
        res.json(result)
    }
    async get(req, res){
        const result = await db.query("SELECT * FROM readers")
        res.json(result)
    }
    async getOne(req, res){
        const {id} = req.params
        const result = await db.query("SELECT * FROM readers where id_readers = $1", [id])
        res.json(result)
    }
    async update(req, res){
        const {id, fio, address, series_number, phone} = req.body
        const result = await db.query("UPDATE readers SET FIO = $2, address = $3, series_number = $4, phone = $5 where id_reader = $1 RETURNING *", [id, fio, address, series_number, phone]) 
        res.json(result)
    }
    async delete(req, res){
        const {id} = req.params
        const result = await db.query("DELETE FROM readers where id_readers = $1", [id])
        res.json(result)    
    }
    async createProc(req, res){
        const {fio, address, series_number, phone} = req.body
        const result = await db.query("call insert_readers($1, $2, $3, $4)", [fio, address, series_number, phone])
    }
}

export default new ReaderController()