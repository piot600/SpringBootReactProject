DROP TABLE  IF EXISTS note;

CREATE TABLE note (
                         note_id INT AUTO_INCREMENT PRIMARY KEY,
                         note_title VARCHAR(50) NOT NULL,
                         note_description VARCHAR(500),
                         note_created DATE NOT NULL
);