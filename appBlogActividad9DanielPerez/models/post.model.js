const getAll = () => {
    return db.query('select * from posts');
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