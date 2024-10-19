DROP DATABASE IF EXISTS sports;
CREATE DATABASE sports;
USE sports;

CREATE TABLE athletes (
  athleteId MEDIUMINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  firstName CHAR(30) NOT NULL,
  lastName CHAR(30) NOT NULL,
  nickName CHAR(30) NOT NULL,
  birthDate DATE NOT NULL,
  weight DECIMAL NOT NULL,
  imageLink TEXT NOT NULL,
  sport CHAR(15) NOT NULL,
  awards CHAR(50) NOT NULL
);

INSERT INTO athletes (firstName, lastName, nickName, birthDate, weight, imageLink, sport, awards) VALUES
('Michael', 'Jordan', 'MJ', '1963-02-17', 98.0, 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Michael_Jordan_in_2014.jpg', 'Basketball', '6x NBA Champion');

INSERT INTO athletes (firstName, lastName, nickName, birthDate, weight, imageLink, sport, awards) VALUES
('Serena', 'Williams', 'Serena', '1981-09-26', 70.0, 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Serena_Williams_at_2013_US_Open.jpg/300px-Serena_Williams_at_2013_US_Open.jpg', 'Tennis', '23x Grand Slam Champion');

INSERT INTO athletes (firstName, lastName, nickName, birthDate, weight, imageLink, sport, awards) VALUES
('Usain', 'Bolt', 'Lightning Bolt', '1986-08-21', 94.0, 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Usain_Bolt_after_4_%C3%97_100_m_Rio_2016.jpg/330px-Usain_Bolt_after_4_%C3%97_100_m_Rio_2016.jpg', 'Athletics', '8x Olympic Gold Medalist');