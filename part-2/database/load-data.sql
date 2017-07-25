\c grocery_store

-- IMPORTANT!!! Once you clone repo, the csv path needs to be your direct path. I wasn't able to figure out a way to get around this. --

COPY grocery_items (product_name, price, section) FROM '/Users/michaelmasterson/Desktop/LearnersGuild/phase-3-challenge/part-2/database/grocery.csv' DELIMITER ',' HEADER CSV;

INSERT INTO shoppers (shopper_id, shopper_name)
VALUES ('1', 'Michael'),
    ('2', 'Rai'),
    ('3', 'Derik'),
    ('4', 'Kathleen'),
    ('5', 'Luis');

INSERT INTO orders (order_id, shopper_id, product_id, order_date)
VALUES ('1', '2', '4', '6/19/2017'),
    ('1', '2', '3', '6/18/2017'),
    ('3', '4', '11', '6/17/2017'),
    ('4', '3', '5', '6/16/2017'),
    ('5', '1', '9', '6/16/2017');