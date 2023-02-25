const {Pool} = require('pg')
const pool = new Pool ({
    user: 'postgres',
    host: ' localhost',
    database: 'dvdrental',
    password: '123456',
    port: 5432,
})

const Sequelize = require('sequelize');
const sequelize = new Sequelize('dvdrental','postgres','123456',{
    host : 'localhost',
    dialeg: 'postgres'
});

module.exports = sequelize;
module.exports = pool;