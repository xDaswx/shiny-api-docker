const db = require('./dbconnection')

const getAllAnimes = async () => {
    try{
        const result = await db.execute('SELECT * FROM assistidos')
        return result
    }
    catch (err){
        return {message:'DASW DEU ERRO NO SERVIDOR PELO AMOR DE DEUS', log:err}
    }
    
}

const newAnime = async (anime) => {
    try{
        const date = new Date(Date.now()).toUTCString()
        const {title, nota, quando} = anime
        const result = await db.execute('INSERT INTO assistidos (title,nota,quando,adicionado_dia) VALUE (?,?,?,?)', [title,nota,quando,date])
        return result
    }
    catch (err){
        return {message:'DASW DEU ERRO NO SERVIDOR PELO AMOR DE DEUS', log:err}
    }
}

const deleteAnime = async (id) => {
    try{
        const result = await db.execute('DELETE FROM assistidos WHERE id = ?', [id])
        return result
    }
    catch (err){
        return {message:'DASW DEU ERRO NO SERVIDOR PELO AMOR DE DEUS', log:err}
    }
}

const editAnime = async (id,json_data) => {
    try{
        const {title, nota, quando} = json_data
        const result = await db.execute('UPDATE assistidos SET title = ?, nota = ?, quando = ? WHERE id = ?', [title,nota,quando,id])
        return result
    }
    catch (err){
        return {message:'DASW DEU ERRO NO SERVIDOR PELO AMOR DE DEUS', log:err}
    }
}


module.exports = {
    getAllAnimes,
    newAnime,
    deleteAnime,
    editAnime
}