# 📝 ZenNote – MERN-Based Note-Taking App

A sleek, full-stack note-taking application built with MongoDB, Express, React, and Node.js. ZenNote offers a friendly interface for creating, reading, updating, and deleting notes seamlessly.

---

## 📋 Table of Contents

- [Overview](#-overview)  
- [Features](#-features)  
- [Technologies](#-technologies)  
- [Installation](#-installation)  
- [Project Structure](#-project-structure)  
- [Frontend Usage](#-frontend-usage)  
- [API Usage](#-api-usage)  
- [Contact](#-contact)  
- [Credits](#-credits)  

---

## 📖 Overview

ZenNote is a responsive web app enabling CRUD (Create, Read, Update, Delete) for notes. It combines:

- **Express.js** backend with MongoDB via Mongoose  
- **React** frontend styled with Tailwind CSS (DaisyUI)  
- Full RESTful API with rate-limiting and toast notifications  

---

## ✨ Features

- ✅ **Full CRUD**: Create, read, update, and delete notes  
- ⚡️ **Rate Limiter**: Prevents excessive API calls  
- 🧩 **Loading & Empty States**: Graceful UI for data fetching and no-data scenarios  
- 🏗 **Complete UI/UX**: React, Tailwind CSS, DaisyUI, Toasts  
- 🔁 **SPA Navigation**: React Router powered pages (Home, Create, Detail)  
- 🔧 **Development & Production**: Dev mode with hot reload; Prod mode serves frontend via Express  

---

## 🛠 Technologies

- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js)  
- ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express)  
- ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb)  
- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)  
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css)  
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router)  
- ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios)  
- ![react‑hot‑toast](https://img.shields.io/badge/react--hot--toast-FF6F61?style=for-the-badge)  
- ![DaisyUI](https://img.shields.io/badge/DaisyUI-F6D860?style=for-the-badge)  

---

## ⚙️ Installation

### 1. Clone the Repository  
### 1. Clone the Repository
   ```sh
   git clone https://github.com/amrashraf15/MERN-ZenNote.git
   cd MERN-ZenNote
   ```
2. Backend Setup
   ```sh
     cd server
    npm install
   ```
3. Create a .env file
  ```sh
     PORT=3001
    MONGO_URI=your_mongodb_connection_string
    NODE_ENV=development
   ```
4. Start Backend
  ```sh
        npm run dev
   ```
5. Frontend Setup
   ```sh
        cd ../frontend
      npm install
      npm run dev
   ```
---
## 🧭 Project Structure

```C++
MERN-ZenNote/
│
├─ server/
│ ├─ config/db.js # MongoDB connection setup
│ ├─ controllers/notesController.js # Note CRUD logic
│ ├─ middleware/rateLimiter.js # API rate limiter middleware
│ ├─ models/note.js # Note schema/model definition
│ ├─ routes/notesRoutes.js # RESTful routes for notes
│ ├─ server.js # Main Express server entry
│ └─ .env # Environment variables
│
└─ frontend/
├─ src/
│ ├─ components/ # Reusable UI components (NoteCard, Navbar, etc.)
│ ├─ pages/ # Views like HomePage, CreatePage, NoteDetailPage
│ └─ lib/axios.js # Axios configuration for API requests
├─ public/ # Static assets
├─ vite.config.js # Vite config
└─ package.json # Frontend dependencies
```
---
## 🔧 Frontend Usage
  
- 🏠 Home Page: View all notes with loading, empty, and rate-limit states  
- ➕ Create Note: Form with validation; toast feedback; redirects on success
- 🏗 **Complete UI/UX**: React, Tailwind CSS, DaisyUI, Toasts  
- 🔍 Note Detail: View/edit/delete a note; confirmation prompt; save with toast feedback 
- ✨ Components include <Navbar />, <NoteCard />, <Loading />, <RateLimitedUI />, <NotesNotFound />

---

## 💻 API Usage

**Base API Endpoint**: `http://localhost:3001/api/notes`  
(*You can customize this in your `.env` file*)

| Method | Endpoint       | Description                             |
|--------|----------------|-----------------------------------------|
| GET    | `/notes`       | Retrieve all notes                      |
| GET    | `/notes/:id`   | Retrieve a specific note by ID          |
| POST   | `/notes`       | Create a new note (requires title/content) |
| PUT    | `/notes/:id`   | Update an existing note                 |
| DELETE | `/notes/:id`   | Delete a note by its ID                 |

---
## Contact
- Developer: Amr Ashraf
-Email: amrashraf1592@gmail.com
-GitHub: amrashraf15
---





















   
