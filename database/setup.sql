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
("Peanut Butter and Jelly", 'Grain', 