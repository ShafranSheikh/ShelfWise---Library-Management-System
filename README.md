# Library Management System

A full-stack Library Management System developed as part of the Software Engineering Internship assignment.  
The backend is built with **C# .NET** and **SQLite** using **Entity Framework**, while the frontend is developed with **React** and **TypeScript**.  
The project includes **JWT-based authentication** for user login and signup, with protected routes for authorized actions.

---

## Features
- Create, Read, Update, and Delete (CRUD) book records
- JWT authentication (Login & Signup)
- Protected routes for authenticated users
- Responsive and user-friendly interface
- Backend: C# .NET + SQLite + Entity Framework
- Frontend: React + TypeScript

---

## 🛠 Technologies Used
**Backend**
- C# .NET 6+
- SQLite
- Entity Framework Core
- JWT Authentication

**Frontend**
- React
- TypeScript
- Axios
- React Router
- Tailwind CSS

---

## 📂 Project Structure
```
/backend   -> .NET API with SQLite database
/frontend  -> React + TypeScript client
```

---

## ⚙️ Prerequisites
Make sure you have installed:
- [.NET 6 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/6.0)
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)
- [Visual Studio](https://visualstudio.microsoft.com/) (for backend)
- [Visual Studio Code](https://code.visualstudio.com/) (for frontend)

---

## 📥 How to Run the Project Locally

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/ShafranSheikh/ShelfWise---Library-Management-System.git
```

---

### 2️⃣ Backend Setup (Visual Studio – Package Manager Console)
1. Open the **backend** folder in **Visual Studio**.
2. Open **Package Manager Console** (Tools → NuGet Package Manager → Package Manager Console).
3. Ensure the **Default Project** in the Package Manager Console is set to your backend project.
4. Update the database:
   ```
   Update-Database
   ```
5. Run the backend API by pressing **F5** or **Ctrl + F5** in Visual Studio.
6. The API will be available at:
   ```
   http://localhost:5008
   ```

---

### 3️⃣ Frontend Setup (Visual Studio Code)
1. Open the **frontend** folder in **Visual Studio Code**.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. The frontend will be available at:
   ```
   http://localhost:5173
   ```

---

## 🔑 Authentication Notes
- Create a new account using the **Signup** page.
- Login to get a JWT token — this token is automatically stored in the browser and used for authenticated requests.
- Protected routes like **Add Book**, **View Book Details**,**Edit Book**, and **Delete Book** require authentication.

---

## 🔗 API Endpoints
**Auth**
- `POST /api/user/register` → Register user
- `POST /api/user/login` → Login user & get JWT token

**Books**
- `GET /api/book` → Get all books
- `GET /api/book/{id}` → Get a specific book by Id
- `POST /api/book` → Create new book (Auth required)
- `PUT /api/book/{id}` → Update book (Auth required)
- `DELETE /api/book/{id}` → Delete book (Auth required)

---

## 📜 License
This project was developed for internship evaluation purposes only.

