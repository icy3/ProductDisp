DROP DATABASE IF EXISTS product_display;
CREATE DATABASE product_display;
USE product_display;
CREATE TABLE listings (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  listing_id INT NOT NULL,
  title VARCHAR(255),
  creation_tsz INT
);