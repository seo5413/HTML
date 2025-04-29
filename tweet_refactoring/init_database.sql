CREATE TABLE USER(
    id integer primary key autoincrement,
    username text unique not null,
    email text not null,
    password text not null
);

CREATE TABLE IF NOT EXISTS tweet (
    id integer primary key autoincrement,
    content text not null,
    user_id integer not null,       -- user table
    likes_count integer default 0,  -- 3정규화에 의해 like테이블을 항상 참조하지 않도록 여기에 합산 포함
    FOREIGN KEY(user_id) references user(id)
);


CREATE table if not exists like(
    id integer primary key autoincrement,
    user_id integer not null,
    tweet_id integer not null,
    foreign key(user_id) references user(id),
    foreign key(tweet_id) references tweet(id)
);

-- 샘플 데이터
insert into user(username, email, password) values
('user1','user1@example.com','password1'),
('user2','user2@example.com','password2'),
('user3','user2@example.com','password3');

insert into tweet(content, user_id, likes_count) values
('안녕하세요, 첫번째 줄입니다',1,2),
('두번째 글 작성입니다',2,0);