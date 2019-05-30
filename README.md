# Bamazon
---
### Who Made This and When
---
* **Developer:** Eric Carlson
* **Date Published:**5/11/19
* **Tools Used:** MySQL and Node.js
* **NPM Packages:**MySQL, Inquirer

### The Concept of Bamazon
---
*Bamazon* is an application similar to Amazon but the app uses primarily Node.js and MySQL to run the program.  The user gets asked for a couple responses using the *inquirer npm package*.  The questions that inquirer asks is what item number you are interested in, and how many do you want to buy.  The connection then ends once this task is completed.

### Required NPM Packages
---
**MySQL:***npm install mysql*  This is a node.js driver for mysql. It is written in JavaScript, does not require compiling, and is 100% MIT licensed.
**Inquirer:***npm install inquirer* A collection of common interactive command line user interfaces.

### How to Use Bamazon
---
1.  The first thing you want to do is to make sure you download the npm packages stated above otherwise your program will **not** run! Once you finish downloading those packages you will run the command by typing the following code *below*

![Screenshot (12)](https://user-images.githubusercontent.com/46227451/58612069-275a1180-8266-11e9-9e2e-5c20c81a6d54.png)

2.  Once you run the package you should get a response with the current inventory in Bamazon.  It will also begin asking some things out of the user using the *inquirer* package.  It should look like the following example at the bottom.

![Screenshot (14)](https://user-images.githubusercontent.com/46227451/58612295-e4e50480-8266-11e9-837e-9303dfa61f70.png)

3.  When you get the inventory, the application will then ask the user to respond to the inquirer's requests by referencing the inventory of bamazon.  The first part is asking the user which item do you want to buy, and the user would type a number in the command line.  If there is no existing number in the inventory the app will not allow you to continue.  **This is validating to make sure that there is no negative number or zero being put into the command line and working.**  For this example I will use the 10th thing in the inventory and purchase 5 of them.

![Screenshot (15)](https://user-images.githubusercontent.com/46227451/58612673-3a6de100-8268-11e9-8ac1-1216e56424c6.png)

![Screenshot (16)](https://user-images.githubusercontent.com/46227451/58612691-4ce81a80-8268-11e9-8d3d-b81178eb7aa0.png)

4.  Assuming there is no error Bamazon should respond by grabbing the results and purchasing the product.  It should also tell the user how much the total price is going to be and then ends the connection. It will also subtract the amount bought from Bamazon once a purchase has been completed.

![Screenshot (17)](https://user-images.githubusercontent.com/46227451/58612793-a2242c00-8268-11e9-8916-060707ad3535.png)

*Another thing to note is that the amount of stuff that you bought would subtract from the Bamazon server*

![Final-Step](https://user-images.githubusercontent.com/46227451/58612950-28407280-8269-11e9-93af-28d9bd0f09ff.png)


### Later Features
---
* **Cleaner Code:**  The code felt a little sloppy to me and would like to iron out the small bugs like the Id responding as the Id number instead of the item name. **Line 78**
* **A Manager Form of Bamazon for Selling Stuff:**  While this would have been an exiting feature but ran out of time, but plan to come back for this at a future date.


