DROP DATABASE IF EXISTS grocery_store;
CREATE DATABASE grocery_store;

\c grocery_store

DROP TABLE IF EXISTS shoppers;
CREATE TABLE shoppers(
	shopper_id INT PRIMARY KEY NOT NULL,
	shopper_name VARCHAR(40) NOT NULL
);

DROP TABLE IF EXISTS grocery_items;
CREATE TABLE grocery_items(
	product_id SERIAL PRIMARY KEY NOT NULL,
	product_name VARCHAR(40) NOT NULL,
	price DECIMAL NOT NULL,
	section VARCHAR(40) NOT NULL
);

DROP TABLE IF EXISTS orders;
CREATE TABLE orders(
	order_id INT NOT NULL,
	shopper_id INT NOT NULL,
	product_id INT NOT NULL,
	order_date DATE DEFAULT CURRENT_DATE,
	FOREIGN KEY (shopper_id) REFERENCES shoppers (shopper_id),
	FOREIGN KEY (product_id) REFERENCES grocery_items (product_id)
);