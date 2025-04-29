CREATE table IF NOT EXISTS memo (
    id integer primary key autoincrement,
    title text not null,
    text text not null
);
