CREATE DATABASE [IF NOT EXISTS] nodejs_db;


USE nodejs_db;
create table nodejs_db.MyGuests
(
    id        int unsigned auto_increment
        primary key,
    firstname varchar(30)                         not null,
    lastname  varchar(30)                         not null,
    email     varchar(50)                         null,
    reg_date  timestamp default CURRENT_TIMESTAMP null on update CURRENT_TIMESTAMP
);

create table nodejs_db.Roles
(
    id        int auto_increment
        primary key,
    nameRole  varchar(255) not null,
    createdAt datetime     not null,
    updatedAt datetime     not null,
    codeRole  int          not null
);

create table nodejs_db.Users
(
    id        int auto_increment
        primary key,
    firstName varchar(255) not null,
    lastName  varchar(255) null,
    createdAt datetime     not null,
    updatedAt datetime     not null
);

