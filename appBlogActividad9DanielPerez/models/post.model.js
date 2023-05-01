const getAll = () => {
    return db.query('select * from posts');
}



module.exports = {
    getAll
}