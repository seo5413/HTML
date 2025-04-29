create table if not exists users(
    id integer primary key autoincrement,
    username text unique not null,
    password text not null
);

create table if not exists products(
    id integer primary key autoincrement,
    name text not null,
    price integer not null
);

insert into users (username,password) values ('user1','password1')
insert into users (username,password) values ('user2','password2')

insert into products (name, price) values ('product1', 2000)
insert into products (name, price) values ('product2', 2000)
insert into products (name, price) values ('product3', 2000)