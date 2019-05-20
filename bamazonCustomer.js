//These are our required dependencies 
var inquirer = require('inquirer');
var mySQL = require('mysql');
//This is creating the connection to mysql
var connection = mySQL.createConnection({
  host: 'Local Connection',
  
  port: 3306,
  
  user: 'root',

  password: '',

  database: 'Bamazon'
});
inquirePurchase();
//This function checks the inputed data to make sure that the numbers inputed are not negative and greater than 0
function ChkInput(value) {
    var number = Number.isInteger(parseFloat(value));

    var sign = Math.sign(value);

    if(number && (sign === 1)) {
        return true 
    }
    else {
        return 'The number you entered is insufficent, please enter a non-zero positive number'
    }
}
//This function is for the inquirer prompt
function inquirePurchase() {
    //This is the prompt itself, asking questions about what Item Im interested in and how many
    inquirer.prompt([
        {
            Type: 'input',
            name: 'id',
            message: 'Please enter an item ID to the item you are interested in',
            validate: ChkInput,
            filter: Number
        },
        {
            type: 'input',
            name: 'quantity',
            message: 'How many of those do you want?',
            validate: ChkInput,
            filter: Number
        }
    ]).then(function(input) {
        //Got the inquirer to return the needed values
        console.log(`You have selected id = ${input.id} Quantity: ${input.quantity}`)
        //connection.end()
    });

}