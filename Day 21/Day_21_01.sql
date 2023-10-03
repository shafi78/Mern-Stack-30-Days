-- Databases

-- Sql v/s NoSql

-- SQL

-- Tables in SQL

-- Commands


CREATE DATABASE college ;

USE college ;

CREATE TABLE student(
roll_no int,
name varchar(20),
age int
);

INSERT INTO student values 
(101,"shafi",39),
(102,"sameer",33);

SELECT * from student ;


create database if not exists college ;

drop database college ;



create database if not exists instagram ;

use instagram ;


-- creating table user

create table user (
id int PRIMARY key,
name varchar(50),
email varchar(50),
followers int,
following int
);

select * from user ;



-- Contraints

NOT NULL

UNIQUE

DEFAULT

CHECK  - It can limit the values allowed in a column

-- EX : CONSTRAINT CHECK (age >= 18)


PRIMARY KEY : unique & not null

FOREIGN KEY 

create table post (
id int,
content varchar(100),
user_id int,
foreign key (user_id) references user(id)
);


-- inserting values

insert into user(id,name,email,followers,following) values (1,"shafi","shafi@gmail.com",123,786);

insert into post values(101,"Hello shafi",1);


-- select command

select * from user;

select name from user;

select * from post ;



-- where clause

select * from user where followers >= 100;

select name from user where id>50 & followers >=100 ;

select name from user where id between 1 and 5;

select name from user where email in ("shafi@gmail.com");

select * from user where followers >= 100 limit 1;

select * from user where followers >= 100 order by followers desc;




-- Aggregate Functions

select max(followers) from user ;

select min(followers) from user ;

select count(followers) from user where followers >= 100 ;

select avg(followers) ;

select sum(followers) from user ;




select followers , count(id) from user group by followers ;

select age , max(followers) from user group by age having max(followers) > 200 ;

update user set followers = 786 where id = 1;

delete from user where id = 5 ;



alter table user add column city varchar(25) Default "Delhi";

alter table user drop column city ;

alter table user change column followers subs int default 0 ;

alter table user rename to instaUser ;

alter table user modify subs int default 5 ;

truncate table post ;



-- Practise Questions :

-- Q 1. Create a database for your college . create a table named teacher to store (id,name,subject,salary)
-- insert the following data in the table.

create database college ;

use college ;

create table Teacher(
id int PRIMARY,
name varchar(50),
subject varchar(50),
salary int
);

insert into Teacher values(23,"ajay","math",50000);
insert into Teacher values(47,"bharat","english",60000);
insert into Teacher values(18,"chetan","chemistry",45000);
insert into Teacher values(9,"divya","physics",75000);

select * from Teacher ;


-- select the teacher whose salary is more than 55,000

select * from Teacher where salary > 55000;


-- rename the salary column of teacher table to ctc.

alter table Teacher change salary ctc int ;


-- update salary of all teachers by giving them an increment of 25%

update Teacher set ctc = ctc + ctc * 0.25 ;


-- add a new column for teachers called city. The default city should be "Dharwad"

alter table Teacher add city varchar(50) default "Dharwad" ;


-- delete the salary column from the teacher table

alter table Teacher drop ctc ;





-- Q 2. Create a table to store student info (roll_no,name,city,marks)
-- insert the following data in the table :

create table student(
roll_no int primary key,
name varchar(50),
city varchar(50),
marks int
);

insert into student values(110,"shafi","Saundatti",95);
insert into student values(108,"sameer","malapur",85);
insert into student values(124,"yusuf","dharwad",96);
insert into student values(112,"sohail","dharwad",90);


-- select all the students who scored 75+

select * from student where marks > 75 ;


-- find names of all cities where students are from

select distinct city from student ;


-- find the maximum marks of students from each city

select city , max(marks) from student group by city ;


-- find the average of the class

select avg(marks) from student ;


-- add a new column grade , assign grade such that:

-- marks> 80 , grade = O 
-- marks 70-80 , grade = A
-- marks 60-70 , grade = B

alter table student add column grade varchar(2) ;

update student set grade = "O" where marks >= 80 ;

update student set grade = "A" where marks >= 70 and marks < 80 ;

update student set grade = "B" where marks >= 60 and marks < 70 ;