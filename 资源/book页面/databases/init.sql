-- 建表的
drop database if exists book;

create database book;

use book;

-- 类型
create table t_book_type(
	id int  primary key auto_increment,
	typeName varchar(50)
)engine=Innodb default charset=utf8;

-- 书
create table t_book(
	id int  primary key auto_increment,
	bookName varchar(50),
	price int,
	des varchar(200),
	typeId int,
	foreign key (typeId) references t_book_type(id)
)engine=Innodb default charset=utf8;

-- 评论
create table t_comment(
	id int primary key auto_increment,
	nikeName varchar(50),
	createTime dateTime,
	message varchar(200),
	level double,
	bookId int,
	foreign key (bookId) references t_book(id)
)engine=Innodb default charset=utf8;






