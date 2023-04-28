const db = require('./dbconnection')

const getAllAnimes = async () => {
    const result = await db.query('SELECT * FROM ANIMES')
    return result
}

const newAnime = () => {
    return 0
}

module.exports = {
    getAllAnimes,
    newAnime
}