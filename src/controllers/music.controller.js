const musicModel = require('../models/music.models');
const {uploadFile} = require('../services/storage.service');
const albumModel = require('../models/album.model');
const jwt = require('jsonwebtoken');

async function createMusic(req,res) {

    const {title} = req.body;
    const file = req.file;

    const result = await uploadFile(file.buffer.toString('base64'))

    const music = await musicModel.create({
        uri:result.url,
        title,
        artist:req.user.id,

    })

    return res.status(201).json({
        massage:'Music created succesfully',
        music:{
            id:music._id,
            uri:music.uri,
            title:music.title,
            artist:music.artist,
        }
    })

    }


async function createAlbum(req,res) {
    const {title,musicIds} = req.body


    const album = await albumModel.create({
        title,
        artist:req.user.id,
        music:musicIds

    })

    return res.status(201).json({
        massage:'Album created succesfully',
        album:{
            id:album._id,
            title:album.title,
            artist:album.artist,
            musicIds:album.music
        }
    })

    }

    async function getAllMusic(req,res) {

        const musics  = await musicModel.find()

        res.status(200).json({
            message:'message fetch succesfuly',
            musics:musics
        })
        
    }

    
    async function getAllAlbum(req,res) {

        const albums  = await albumModel.find()

        res.status(200).json({
            message:'message fetch succesfuly',
            albums:albums
        })
        
    }
   
   


module.exports = {createMusic,createAlbum,getAllMusic,getAllAlbum};