CREATE DATABASE recipe_list;

USE recipe_list;

CREATE TABLE recipes (
    Recipe_FK integer PRIMARY KEY AUTO_INCREMENT,
    Meal VARCHAR(255) NOT NULL,
    Items VARCHAR(255) NOT NULL,
    Directions VARCHAR(255) NOT NULL
);

CREATE TABLE foods (
    Food_id integer PRIMARY KEY AUTO_INCREMENT,
    Product VARCHAR(255) NOT NULL,
    Protein VARCHAR(255) NOT NULL,
    Recipe_FK integer,
    Img VARCHAR(255) NOT NULL,
    Img_alt VARCHAR(255) NOT NULL,
    FOREIGN KEY (Recipe_FK) REFERENCES recipes (Recipe_FK)
);


INSERT INTO recipes (Meal, Items, Directions)
VALUES
('Peanut Butter and Jelly', 'Two Slices of Bread, Peanut Butter, Jelly', 'Spread Peanut Butter on One slice and Jelly on the other then smoosh.'),
('Beef Stroganoff', 'Hamburger and Pasta', 'Cook pasta'),
('Hamburger', 'Hamburger, Bun, Onion, Cheese', 'Cook Meat put on bun'),
('Chicken Fried Rice', 'Chicken and Rice', 'Cook Chicken, Fry Rice, Smoosh'),
('Spicy Chicken and Peanut Noodles', 'Chicken, Pasta, Sriracha', 'You know');

INSERT INTO foods (Recipe_FK, Food_id, Product, Protein, Img, Img_alt)
VALUES
((SELECT Recipe_FK FROM recipes WHERE Meal = 'Peanut Butter and Jelly'), 'Peanut Butter and Jelly', 'Grain', 'imgs/pb&j.jpg', 'Image of Peanut Butter Jelly'),
((SELECT Recipe_FK FROM recipes WHERE Meal = 'Beef Stroganoff'), 'Beef Stroganoff', 'Beef', 'imgs/beef_stroganoff.jpg', 'Image of Beef Stroganoff'),
((SELECT Recipe_FK FROM recipes WHERE Meal = 'Hamburger'), 'Hamburger', 'Beef', 'imgs/hamburger.jpg', 'Image of a Hamburger'),
((SELECT Recipe_FK FROM recipes WHERE Meal = 'Chicken Fried Rice'), 'Chicken Fried Rice', 'Chicken', 'imgs/chicken_fried_rice.jpg', 'Image of Chicken Fried Rice'),
((SELECT Recipe_FK FROM recipes WHERE Meal = 'Spicy Chicken and Peanut Noodles'), 'Spicy Chicken and Peanut Noodles', 'Chicken', 'imgs/Chicken_peanut_noodles.png', 'Image of Chicken and Peanut Noodles');
