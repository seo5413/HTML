const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const sqlite3 = require('sqlite3');
const path = require('path');

const app = express();

app.use(morgan('dev'));

app.use(express.static('public'));
app.use(express.json()); //req.body 안에 프런트에서 보낸 json 이 담긴다다
app.use(session({
    secret : 'this-is-my-password',
    resave : false,
    saveUninitialized : false
}))

function loginRequired(req, res, next){
    if(!req.session || !req.session.user){
        return res.status(401).json({error : '로그인이 필요합니다'})
    };
    next();
}

const db = new sqlite3.Database('database.db', (err) => {
    if(err){
        console.error('DB연결 실패');
    }else{
        console.log('DB연결 성공');
        
        db.run('PRAGMA foreign_keys = ON');
    }
});

app.post('/api/login', (req, res) => {
    const {email, password} = req.body;

    const query = 'SELECT * FROM user WHERE email=?'
    db.get(query, [email], (err,user) => {
        if(err || !user || user.password !== password){
                return res.status(401).json({'error' : '로그인에 실패하였습니다'});
        }

        req.session.user={
            id: user.id,
            username: user.username,
            email:user.email
        };

        res.json({message : '로그인 성공' });
    });
}); 

app.get('/api/logout', loginRequired, (req, res) => {
    req.session.distory(() => {
        res.json({ message : '로그아웃 성공!'});
    });
});

app.get('/api/tweets', (req, res) => {
    const query = `
        SELECT tweet.*, user.username
        FROM tweet 
        JOIN user ON tweet.user_id = user.id
        ORDER BY tweet.id DESC
    `;

    // 아래 내용을 줄때ㅡ 같이 줄 수 없을까까
    db.all(query, [], (err, tweets) => {
        if(req.session.user){
            const userId = req.session.user.id;
            const queryLike = 'SELECT tweet_id FROM like WHERE user_id=?'
            db.all(queryLike, [userId], (err,likes) => {
                const likedTweetIds = likes.map(like =>like.tweet_id);
                const result = tweets.map(tweet => ({
                    ...tweet,
                    liked_by_current_user : likedTweetIds.include(tweet.id)
                }));
                res.json(result);
            });
        }else{
            res.json(tweets.map(tweet => ({...tweet, liked_by_current_user : false})));
        }
    })
});


app.post('/api/tweet', (req,res) => {
    const {content} = req.body;

    const query = 'INSERT INTO tweet (content, user_id) values(?,?)';
    db.run(query, [content,req.session.user.id], (err) => {
        if(err) {
            console.log(err.message);
            return res.status(500).json({error:'트윗 작성 실패'})
        }else{
            res.json({message:'트윗 작성 완료'});
        }
    });
});

app.post('/api/like/:tweet_id', loginRequired, (req, res) => {
    const tweetId = req.params.tweet_id;

    //db에 쓴다 like
    const query = 'INSERT INTO like(user_id, tweet_id) values(?,?)';
    db.run(query, [req.session.user.id, tweetId]);

    const query2 = 'UPDATE tweet SET likes_count = like_count + 1 WHERE id =?'
    db.run(query, [tweetId]);

    res.json({message : '성공'});
});

const port = 3000;
app.listen(port, () => {
    console.log('서버');
})