const getAll = () => {
    return db.query('select * from autores');
}

const getById = (autorId) => {
    return db.query('select * from autores where idautor = ?', [autorId]);
}

const create = ({ nombre, email, imagen }) => {
    return db.query(
        'insert into autores (nombre, email, imagen) values (?,?,?)', [nombre, email, imagen]
    );
}

const update = (autorId, { nombre, email, imagen }) => {
    return db.query(
        'update autores set nombre = ?, email = ?, imagen = ? where idautor = ?',
        [nombre, email, imagen, autorId]
    )
}

const deleteById = (autorId) => {
    return db.query('delete from autores where idautor = ?', [autorId]);
}


module.exports = {
    getAll,
    create,
    getById,
    update,
    deleteById
}