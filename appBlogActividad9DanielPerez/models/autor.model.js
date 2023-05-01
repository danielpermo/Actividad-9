const getAll = () => {
    return db.query('select * from autor');
}


module.exports = {
    getAll
}