USE media;

DROP TABLE IF EXISTS reviews;
drop table if exists search;
DROP TABLE IF EXISTS mdetails;
drop table if exists requests;
drop table if exists user;

Create table user (
	id bigint auto_increment primary key,
    email varchar(255),
    password varchar(255),
    username varchar(255)
    
    );
    
CREATE TABLE requests (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    media_type VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    details TEXT NOT NULL,
    user_id BIGINT,
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE SET NULL
);


CREATE TABLE mdetails (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    creator VARCHAR(255) NOT NULL,
    picture_url VARCHAR(255),
    details TEXT
);

CREATE TABLE reviews (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    review_text TEXT NOT NULL,
    rating INT NOT NULL,
    media_id BIGINT NOT NULL,
	user_id bigint ,
    FOREIGN KEY (media_id) REFERENCES mdetails(id) ON DELETE CASCADE,
	FOREIGN key (user_id) REFERENCES user(id) on Delete CASCADE
);

Create table search (
	id bigint auto_increment primary KEY,
    review_average bigint ,
    review_count bigint,
	review_id bigint, -- might want to replace this with a name that is clearer
    Title VARCHAR(255) NOT null,
    
    FOREIGN key (review_id) REFERENCES mdetails(id) ON Delete CASCADE

);


insert into user (email,password,username)
Values ('bigjogn@gmail.com','1' , 'bigjohn');


create trigger review_total 
after insert 
on reviews for each row 
 



DELIMITER $$
-- trigger that updates the review count when a review is added
CREATE TRIGGER update_review_count
AFTER INSERT
ON reviews
FOR EACH ROW
BEGIN
    DECLARE review_total INT;

    -- Count the reviews with the same media Id as the new row
    SELECT COUNT(*) INTO review_total
    FROM reviews
    WHERE media_id = NEW.media_id;

    -- Update the search table with the new review count
    UPDATE search
    SET review_count = review_total
    WHERE id = NEW.media_id;
END$$




-- trigger that updates the review average when a review is added
CREATE TRIGGER update_review_average
AFTER INSERT
ON reviews
FOR EACH ROW
BEGIN
    DECLARE review_avg INT;

    -- Count the reviews with the same media Id as the new row
    SELECT AVG(rating) INTO review_avg
    FROM reviews
    WHERE media_id = NEW.media_id;

	
    -- Update the search table with the new review count
    UPDATE search
    SET review_average = review_avg
    WHERE id = NEW.media_id;
END$$

DELIMITER ;


-- inserts for the detailed media page
INSERT INTO mdetails (title, creator, picture_url, details)
VALUES ('Minecraft', 'Microsoft', 'http://example.com/image.jpg', 'Minecraft is a 2011 sandbox game developed and published by Swedish video game developer Mojang Studios. Originally created by Markus "Notch" Persson using the Java programming language, the first public beta build was released on 17 May 2009. The game would be continuously developed from then on, receiving a full release on 18 November 2011');

INSERT INTO mdetails (title, creator, picture_url, details)
VALUES ('The Hobbit', 'J. R. R. Tolkien', 'http://example.com/image.jpg', 'When Thorin Oakenshield and his band of dwarves embark upon a dangerous quest to reclaim the hoard of gold stolen from them by the evil dragon Smaug, Gandalf the wizard suggests an unlikely accomplice: Bilbo Baggins, an unassuming Hobbit dwelling in peaceful Hobbiton.
Along the way, the company faces trolls, goblins, giant spiders, and worse. But as they journey from the wonders of Rivendell to the terrors of Mirkwood and beyond, Bilbo will find that there is more to him than anyone—himself included—ever dreamed. Unexpected qualities of courage and cunning, and a love of adventure, propel Bilbo toward his great destiny . . . a destiny that waits in the dark caverns beneath the Misty Mountains, where a twisted creature known as Gollum jealously guards a precious magic ring.');


INSERT INTO mdetails (title, creator, picture_url, details)
VALUES ('Barbie', 'Greta Gerwig', 'http://example.com/image.jpg', 'Barbie is a 2023 fantasy comedy film directed by Greta Gerwig from a screenplay she wrote with Noah Baumbach. Based on the Barbie fashion dolls by Mattel, it is the first live-action Barbie film after numerous animated films and specials. Starring Margot Robbie as the title character and Ryan Gosling as Ken, the film follows them on a journey of self-discovery through Barbieland and the real world following an existential crisis. ');


-- Review inserts 

INSERT INTO reviews (review_text, rating, media_id,user_id)
VALUES ('Minecraft is a pretty good game', 4, 1,1); -- Replace the first 1 with the id of the mdetails entry and the second with the review id

INSERT INTO reviews (review_text, rating, media_id,user_id)
VALUES ('Minecraft raised me', 5, 1,1); -- Replace the first 1 with the id of the mdetails entry and the second with the review id

INSERT INTO reviews (review_text, rating, media_id,user_id)
VALUES ('Minecraft destoryed my life', 1, 1,1); -- Replace the first 1 with the id of the mdetails entry and the second with the review id



INSERT INTO reviews (review_text, rating, media_id,user_id)
VALUES ('A real classic', 5, 2,1); -- Replace the first 1 with the id of the mdetails entry and the second with the review id

INSERT INTO reviews (review_text, rating, media_id,user_id)
VALUES ('overrated', 2, 2,1); -- Replace the first 1 with the id of the mdetails entry and the second with the review id

INSERT INTO reviews (review_text, rating, media_id,user_id)
VALUES ('an excelent fil', 5, 3,1); -- Replace the first 1 with the id of the mdetails entry and the second with the review id

INSERT INTO reviews (review_text, rating, media_id,user_id)
VALUES ('it was ok', 3, 2,1); -- Replace the first 1 with the id of the mdetails entry and the second with the review id


-- inserts for the search function
INSERT INTO search ( Title,review_id,review_average,review_count)
VALUES ('Minecraft', 1,0,0); -- replace 1 with id assosiated with details table
INSERT INTO search ( Title,review_id,review_average,review_count)
VALUES ('The Hobbit', 2,0,0); -- replace 1 with id assosiated with details table

INSERT INTO search ( Title,review_id,review_average,review_count)
VALUES ('Barbie', 3,0,0); -- replace 1 with id assosiated with details table

INSERT INTO requests (media_type, title, details) 
VALUES ('Feature', 'Add Dark Mode', 'Allow users to enable dark mode.');

SELECT * FROM mdetails;
SELECT * FROM reviews;
Select * from search; 
Select * from requests;