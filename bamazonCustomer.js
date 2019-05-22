//These are our required dependencies 
var inquirer = require('inquirer');
var mySQL = require('mysql');
//This is creating the connection to mysql
var connection = mySQL.createConnection({
  host: 'localhost',
  
  port: 3306,
  
  user: 'root',

  password: '',

  database: 'bamazon'
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
        
        var item = input.id;
        //var quantity = input.quantity;

        var querySQL = 'SELECT * FROM products WHERE ?';

        connection.query(querySQL, {id: item}, function(error, data) {

            if(error) throw error

            if(data.length === 0) {
                console.log('##########################################\n')
                console.log('Hmm...Seems like I cant find the item number you are looking for...\n')
                console.log('##########################################');
            }
            else {
                var product = data[0];

                console.log(`Product: ${JSON.stringify(product)}`)
                
                if(quantity <= product.stock) {
                    console.log(`Ooh, you have chosen wisely, I like ${item} as well!`)
                }
            }

        });
    });

}