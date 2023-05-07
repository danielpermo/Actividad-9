const getByAutorId = (autorId) => {
    return db.query('select * from posts where autor_idautor = ?', [autorId]);
}


module.exports = {
    getByAutorId
}