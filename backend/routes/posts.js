const express = require('express');
const marked = require('marked');
const admin = require('firebase-admin');
const router = express.Router();

// Mock data for now
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: "http://firestore-emulator:8080", // point to the emulator
  });
  
const db = admin.firestore();

router.get('/posts', async (req, res) => {
    const snapshot = await db.collection('posts').get();
    const posts = [];
    snapshot.forEach(doc => {
        posts.push(doc.data());
    });
    res.json(posts);
});

router.get('/posts/:id', async (req, res) => {
    const postDoc = await db.collection('posts').doc(req.params.id).get();
    if (!postDoc.exists) return res.status(404).send('Post not found');
    const post = postDoc.data();
    const htmlContent = marked(post.content);
    res.json({ ...post, content: htmlContent });   
});

module.exports = router;