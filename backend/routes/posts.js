const express = require('express');
const marked = require('marked');
const router = express.Router();

// Mock data for now
const posts = [
    {
        id: 1,
        title: "Introduction to Generative AI",
        content: "# This is a markdown header\n\nThis is some markdown content.",
        // ... other fields
    },
    // ... other posts
];

router.get('/posts', (req, res) => {
    res.json(posts);
});

router.get('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).send('Post not found');
    const htmlContent = marked.marked(post.content);
    res.json({ ...post, content: htmlContent });    
});

module.exports = router;