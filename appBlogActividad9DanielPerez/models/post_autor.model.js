const getByAutorId = (autorId) => {
    return db.query('select posts.*, a.nombre, a.email, a.imagen from posts, autores as a where autor_idautor = ? and autor_idautor = idautor', [autorId]);
}


module.exports = {
    getByAutorId
}