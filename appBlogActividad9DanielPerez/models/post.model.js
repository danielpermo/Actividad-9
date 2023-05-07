const getAll = () => {
    return db.query('select p.*, a.nombre, a.email, a.imagen from posts as p, autores as a where autor_idautor = idautor order by idposts asc');
}

const getById = (postId) => {
    return db.query('select * from posts where idposts = ?', [postId]);
}

const create = ({ titulo, descripcion, categoria, autor_idautor }) => {
    return db.query('insert into posts (titulo, descripcion, categoria, autor_idautor) values (?,?,?,?)', [titulo, descripcion, categoria, autor_idautor]);
}



module.exports = {
    getAll,
    getById,
    create
}