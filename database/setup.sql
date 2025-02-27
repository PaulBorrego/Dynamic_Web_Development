CREATE DATABASE recipe_list;

USE recipe_list;

CREATE Table recipes (
    id integer PRIMARY KEY AUTO_INCREMENT,
    product VARCHAR(255) NOT NULL,
    protein VARCHAR(255) NOT NULL,
    img VARCHAR(255) NOT NULL,
    img_alt VARCHAR(255) NOT NULL,
);

INSERT INTO recipes (product, protein, img, img_alt)
VALUES
("Peanut Butter and Jelly", 'Grain', 'imgs/pb&j.jpg', 'Image of Peanut Butter Jelly')
("Beef Stroganoff", 'Beef', 'imgs/beef_stroganoff.jpg', 'Image of Beef Stroganoff')
("Hamburger", 'Beef', 'imgs/hamburger.jpg', 'Image of a Hamburger')
("Chicken Fried Rice", 'Chicken', 'imgs/chicken_fried_rice.jpg', 'Image of Chicken Fried Rice')
("Spicy Chicken and Peanut Noodles", 'Chicken', 'imgs/Chicken_peanut_noodles.png', 'Image of Chicken and Peanut Noodles')