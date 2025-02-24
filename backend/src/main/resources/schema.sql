DROP TABLE  IF EXISTS account;

CREATE TABLE account (
                         id INT AUTO_INCREMENT PRIMARY KEY,
                         first_name VARCHAR(50) NOT NULL,
                         last_name VARCHAR(50) NOT NULL,
                         email VARCHAR(100) NOT NULL
);