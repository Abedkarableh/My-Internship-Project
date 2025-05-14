// const express = require('express');
// const multer = require('multer');
// const cors = require('cors');

// const app = express();

// // Middleware
// app.use(cors()); // Enable CORS
// app.use(express.json()); // For JSON bodies
// app.use(cors({ origin: '*' })); // Allow all origins (adjust for production)

// // Configure Multer for file uploads
// const upload = multer({ dest: 'uploads/' }); // Creates an 'uploads' directory

// // File upload endpoint
// app.post('/api/upload', upload.single('image'), (req, res) => {
//     // 'image' matches the field name in your form
//     if (!req.file) {
//         return res.status(400).json({ error: 'No file uploaded' });
//     }
//     res.json({
//         path: req.file.path,
//         filename: req.file.filename
//     });
// });

// // Mock database
// const galleryData = [
//     { id: 1, title: "Project 1", imageUrl: "/project1.jpg" },
//     { id: 2, title: "Project 2", imageUrl: "/project2.jpg" },
// ];

// app.get('/api/gallery', (req, res) => {
//     res.json(galleryData);
// });

// // Start server
// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


import express from "express"
import users from "./user.js"

const app = express()

app.get("/", (req, res) => {
    res.send("Server is ready")
})

app.get("/api/user", (req, res) => {
    res.send(users)
})

const port = process.env.PORT || 5600

app.listen(port, () => {
    console.log(`Server at http://localhost:${[port]}`)
})