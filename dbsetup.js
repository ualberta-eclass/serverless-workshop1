let request = require("request");
var AWS = require('aws-sdk');
var _ = require('lodash');
let serviceconfig = require("./stackvariables").variables();
AWS.config.region = 'us-west-2';
const documentClient = new AWS.DynamoDB.DocumentClient();

module.exports.setupdatabase = async (event, context, callback) => {
    var mysql = require('promise-mysql');
    var connection = await mysql.createConnection({
        host: serviceconfig.mysqlhost,
        user: serviceconfig.mysqluser,
        password: serviceconfig.mysqlpassword,
        //database: "testdb",
        port: 3306,
        ssl: {
            // DO NOT DO THIS
            // set up your ca correctly to trust the connection
            rejectUnauthorized: false
        }
    });
    

    let res = await connection.query("CREATE DATABASE IF NOT EXISTS " + serviceconfig.mysqldb + " ");

    connection = await mysql.createConnection({
        host: serviceconfig.mysqlhost,
        user: serviceconfig.mysqluser,
        password: serviceconfig.mysqlpassword,
        database: serviceconfig.mysqldb,
        port: 3306,
        ssl: {
            // DO NOT DO THIS
            // set up your ca correctly to trust the connection
            rejectUnauthorized: false
        }
    });


    // Create PS_CLASS_TBL
    
    res = await connection.query('DROP TABLE IF EXISTS user')
    res = await connection.query(`
    CREATE TABLE IF NOT EXISTS user 
    ( 
       username     VARCHAR(6), 
       fullname     VARCHAR(30), 
       INDEX (username)
    ) 
    
    `);






    console.log(res);

};