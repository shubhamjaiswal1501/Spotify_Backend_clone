const express = require('express');

const musicController = require('../controllers/music.controller');
const authAlbum = require('../middlewares/auth.middleere');

const multer = require('multer');


const upload  = multer({
    storage: multer.memoryStorage()
})




const router = express.Router();

router.post('/upload', authAlbum.authArtist,upload.single("music"), musicController.createMusic);

router.post('/album',  authAlbum.authArtist, musicController.createAlbum)

router.get('/', authAlbum.authUser,   musicController.getAllMusic)
router.get('/albums', authAlbum.authUser,   musicController.getAllAlbum)

module.exports = router;
