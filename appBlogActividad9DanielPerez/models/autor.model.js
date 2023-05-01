const getAll = () => {
    return db.query('select * from autor');
}

const getById = (autorId) => {
    return db.query('select * from autor where idautor = ?', [autorId]);
}

const create = ({ nombre, email, imagen }) => {
    return db.query(
        'insert into autor (nombre, email, imagen) values (?,?,?)', [nombre, email, imagen]
    );
}


module.exports = {
    getAll,
    create,
    getById
}