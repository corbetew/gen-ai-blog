const admin = require('firebase-admin');
const crypto = require('crypto');
const slugify = require('slugify');

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "http://firestore:8080", // point to the emulator
});

const db = admin.firestore();

function generateId(title) {
    const slug = slugify(title, { lower: true, strict: true });
    const hash = crypto.createHash('md5').update(slug).digest('hex');
    return hash;
}

const posts = [
    {
        title: "Introduction to Generative AI",
        content: "# This is a markdown header\n\nThis is some markdown content.",
        author: "Ed Corbett",
        date: '2023-10-02',
    },
    {
        title: "Introduction to Generative AI2",
        content: "# This is a markdown header\n\nThis is some markdown content.",
        author: "Ed Corbett",
        date: '2023-10-02',
    },
];

// Add mock data to Firestore
async function seedData() {
    for (let post of posts) {
        const id = generateId(post.title);
        await db.collection('posts').doc(id).set({ ...post, id, slug: slugify(post.title, { lower: true, strict: true }) });
    }
    console.log('Data seeded!');
    process.exit(0);
}

seedData();