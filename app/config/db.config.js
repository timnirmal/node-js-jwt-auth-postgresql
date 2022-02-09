module.exports = {
    HOST: 'localhost',
    USER: 'postgres',
    PASSWORD: '0714408821',
    DB: 'NodejsCRUD',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}