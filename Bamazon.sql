
DROP DATABASE IF EXISTS Bamazon;

CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE products (
id INTEGER(11) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(100) NOT NULL,
department VARCHAR(30) NOT NULL,
cost DECIMAL(10,2) NOT NULL,
stock INTEGER(11) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO products(product_name, department, cost, stock)

VALUES ('Spiderman: Into the Spider-Verse', 'Movies & TV', 22.50, 27),
       ('The Greatest Showman', 'Movies & TV', 14.95, 178),
       ('Fullmetal Alchemist Brotherhood: The Complete Series', 'Movies & TV', 57.40, 61),
       ('Friends the Complete Series Collection: Seasons 1-10', 'Movies & TV', 135.95, 14),
       ('The Last Airbender', 'Movies & TV', 4.45, 2172),
       ('Frigidaire 4-Piece Stainless Steel Kitchen', 'Appliances', 2179, 3),
       ('Keurig Coffee Maker', 'Appliances', 108.88, 21),
       ('iRobot Roomba', 'Indoor Vaccuum', 360.55, 89),
       ('hOmeLabs Mini Fridge', 'Appliances', 123.45, 556),
       ('$10 Playstation Gift Card', 'Video Games', 10, 99999999),
       ('Super Smash Bros. Ultimate', 'Video Games', 59.89, 110),
       ('DualShock 4 Wireless Controller Red', 'Video Games', 45.25, 36),
       ('Xbox One Console- BattleField V Bundle', 'Video Games', 255.98, 4002),
       ('iBUYPOWER Pro Gaming PC', 'Video Games', 1500, 5),
       ('JAMES EARL JONES Signed Darth Vader Helmet', 'Collectables', 9777.77, 1),
       ('200pc Toploader Card Sleeves', 'Collectables', 14.99, 2169),
       ('Advanced Graphics Bob Ross & Friends Cardboard Cutout', 'Collectables', 44.99, 147),
       ('Bounty Quick Size Paper Towels', 'Grocery', 28.20, 12702),
       ('24pk Fiji Natural Artisan Water', 'Grocery', 15, 6242),
       ('Arm and Hammer Baking Soda, 5 Pounds', 'Grocery', 10.66, 808),
       ('Clorox ToiletWand', 'Grocery', 10.49, 1006),
       ('Poptarts Variety Pack 36ct', 'Grocery', 6.77, 938),
       ('SAM BAT CD1 Maple Wood Baseball Bat', 'Sports & Outdoors', 155.59, 73),
       ('Callaway Mens Strata Tour Complete Golf Set', 'Sports & Outdoors', 660.67, 24),
       ('Franklin Sports Bocce Ball Set ', 'Sports & Outdoors', 39.99, 100),
       ('NTK Sporting 12 Person Tent', 'Sports & Outdoors', 438.80, 86),
       ('Pacific Play Tents Playchute 10 Foot Parachute', 'Sports & Outdoors', 24.98, 187)

       SELECT * FROM Bamazon.products
