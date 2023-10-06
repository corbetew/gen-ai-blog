const express = require('express');
const marked = require('marked');
const crypto = require('crypto');
const admin = require('firebase-admin');
const router = express.Router();

// Mock data for now
admin.initializeApp();
  
const db = admin.firestore();

router.get('/posts', async (req, res) => {
    const snapshot = await db.collection('posts').get();
    const posts = [];
    console.log(snapshot)
    snapshot.forEach(doc => {
        posts.push(doc.data());
    });
    res.json(posts);
});

router.get('/posts/:slug', async (req, res) => {
    const hashedSlug = crypto.createHash('md5').update(req.params.slug).digest('hex');
    const postDoc = await db.collection('posts').doc(hashedSlug).get();
    if (!postDoc.exists) return res.status(404).send('Post not found');
    const post = postDoc.data();
    const htmlContent = marked.marked(post.content);
    res.json({ ...post, content: htmlContent });
});

module.exports = router;