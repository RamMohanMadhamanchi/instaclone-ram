const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Post = require('./model/post');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        const fileNameArr = file.originalname.split('.');
        cb(null, file.fieldname + '-' + Date.now() + '.' + fileNameArr[fileNameArr.length - 1]);
    }
});

const upload = multer({ storage: storage});

async function connectDB() {
    try {
        return await mongoose.connect('MOngoDB Link Here');
    } catch(e) {
        console.log(e);
        throw error('DB connection failed');
    }
}

async function main() {
    await connectDB();

    app.use(cors());
    app.use('/uploads', express.static('uploads'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.get('/', function(req, res) {
        res.send({ message: 'Welcome to Instaclone api service' });
    });

    app.get('/api/v1/posts', async function(req, res) {
        const posts = await Post.find();
        res.send({
            posts
        });
    });

    app.post('/api/v1/posts', upload.single('image'), async function(req, res) {
        const { author, location, description } = req.body;
        const image = req.file.path;
        const post = await Post.create({
            author, location, description, image
        });
        res.send({
            post
        });
    });

    app.listen(process.env.PORT || 9000, () => console.log('Server started on port 9000'));
}

main()