//These are our required dependencies 
var inquirer = require('inquirer');
var mySQL = require('mysql');
//This is creating the connection to mysql
var connection = mySQL.createConnection({
  host: 'localhost',
  
  port: 3306,
  
  user: 'root',

  password:'',

  database: 'bamazon'
});
//inquirePurchase();
//This function is to simply start up the code
function start() {
    displayInv();
}

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
        var quantity = input.quantity;
        //Required query to select our items from our SQL database
        var querySQL = 'SELECT * FROM products WHERE ?';
        //This connection query is for grabbing our data from our database or throw an error
        connection.query(querySQL, {id: item}, function(error, data) {

            if(error) throw error
            //This part of the connection.query is if there is no error but the id number inputed did not exist
            if(data.length === 0) {
                console.log('##########################################\n')
                console.log('Hmm...Seems like I cant find the item number you are looking for...\n')
                console.log('##########################################');
            }
            //If there is no error and the item exists in the database it will display data
            else {
                var product = data[0];

                //console.log(`Product: ${JSON.stringify(product)}`)
                //If there is enough stock it will give the user the option to buy it
                if(quantity <= product.stock) {
                    console.log(`Ooh, you have chosen wisely, I like ${item} as well!`)
                    //This is to update mySQL's values
                    var updateSQL = `UPDATE products SET stock = ${product.stock - quantity} WHERE id = ${item}`;
                    //Connection query to confirm our order in mysql and changes the values based on how much we order
                    connection.query(updateSQL, function(error, data) {
                        if(error) throw error

                        console.log('###################################\n');
                        console.log(`Your order has been placed! Your total comes to $${product.cost * quantity}\n`);
                        console.log('Thank you for shopping at Bamazon, we hope to see you again!\n');
                        console.log('###################################\n');

                        connection.end();
                    });
                }
                //If the user tries to order more than what product is left in the inventory it will not allow the user to purchase the item
                else {
                    console.log('##################################\n');
                    console.log(`\nUnfortunately, there is not enough product to buy ${quantity} of the ${item}, please update your order and try again!\n`);
                    console.log('##################################\n');

                    displayInv();
                }
            }

        });
    });

}
//This function grabs our data from mySQL and displays the information on the console.log
function displayInv() {
    //Make a database query selector for mySQL
    querySQL = 'SELECT * FROM products'
    //Makes a mySQL query on the server
    connection.query(querySQL, function(error, data) {
        if(error) throw error;

        console.log('################################');
        console.log('\nCurrent Inventory In Bamazon...\n')
        //This logs all of our values from mySQL and puts them in an organized table
        for(i = 0; i < data.length; i++) {
            console.log(`ID: ${data[i].id} | Product: ${data[i].product_name} | Department: ${data[i].department} | Price: ${data[i].cost} | Quantity: ${data[i].stock}`);
            
        }
        console.log('\n---------------------------------------------------------------------\n')
        //calls the inquire purchase function
        inquirePurchase();
    });
}
//callback to start the whole code
start();