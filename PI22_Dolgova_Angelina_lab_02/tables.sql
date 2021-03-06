CREATE TABLE topic(
id SERIAL PRIMARY KEY,
is_deleted bool DEFAULT false,
name varchar(50) NOT NULL);

CREATE TABLE book(
id SERIAL PRIMARY KEY,
title varchar(150) NOT NULL,
author varchar(50) NOT NULL,
publication_date varchar(30) NOT NULL,
copies_number INTEGER,
is_deleted bool DEFAULT false,
topic_id INT REFERENCES topic(id) ON DELETE CASCADE ON UPDATE CASCADE);