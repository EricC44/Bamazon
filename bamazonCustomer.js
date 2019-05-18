//These are our required dependencies 
var inquirer = require('inquire');
var mySQL = require('mysql');
//This is creating the connection to mysql
var connection = mysql.createConnection({
  host: 'Local Connection',
  
  port: 3306,
  
  user: 'root',

  password: '',

  database: 'Bamazon'
});