-- ATTN WINDOWS USERS: Some of you might have an easier time just copying and pasting the lines below in to your mysql shell

-- YOUR CODE GOES HERE
-- CREATE YOUR DATABASE
drop database if exists cowdb;
create database cowdb;
use cowdb;

-- CREATE YOUR TABLES
create table cows (
  id int primary key auto_increment not null,
  name varchar(50) not null unique,
  description varchar(200) not null
);

-- ADD RECORDS TO YOUR TABLE
insert into cows (name, description) values ('Buttercup', 'a herbaceous plant with bright yellow cup-shaped flowers, common in grassland and as a garden weed. All kinds are poisonous and generally avoided by livestock.');

insert into cows (name, description) values ('Daisy', 'a small grassland plant that has flowers with a yellow disk and white rays. It has given rise to many ornamental garden varieties.');

insert into cows (name, description) values ('Milkshake', 'a cold drink made of milk, a sweet flavoring such as fruit or chocolate, and typically ice cream, whisked until it is frothy.');

insert into cows (name, description) values ('Bessie', "a person's best or closest friend.");

insert into cows (name, description) values ('MooDonna', 'archaic : lady -- used as a form of respectful address.');

insert into cows (name, description) values ('MooLawn', 'a legendary Chinese warrior from the Northern and Southern dynasties period (420–589) of Chinese history.');