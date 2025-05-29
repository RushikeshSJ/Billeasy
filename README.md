📚 Book Review REST API
A fully functional RESTful API built with Node.js, Express, MongoDB Atlas, and JWT authentication. This project enables users to sign up, log in, add books, post reviews, and more — following clean MVC architecture.

🚀 Tech Stack
1. Node.js + Express.js
2. MongoDB Atlas with Mongoose
3. JWT Authentication
4. Axios (for internal/external requests)
5. MVC Architecture
6. Dotenv for secure environment variables

📁 Project Structure

![Screenshot_28-5-2025_1906_chatgpt com](https://github.com/user-attachments/assets/c854c648-8320-4d8f-9d55-4d4bd567887b)

📦 Features
✅ Authentication
1. POST /api/auth/signup — Register new user
2. POST /api/auth/login — Login and receive JWT token

📚 Books
1. POST /api/books — Add a book (Auth required)
2. GET /api/books — Get all books (with pagination, filter by author/genre)
3. GET /api/books/:id — Get book details (with average rating + reviews)

📝 Reviews
1. POST /api/books/:id/reviews — Add review (Auth required, one per book)
2. PUT /api/reviews/:id — Update own review
3. DELETE /api/reviews/:id — Delete own review

🔍 Search
GET /api/books/search?query=titleOrAuthor — Search books by title/author (partial & case-insensitive)

🔐 Environment Variables
Create a .env file in the root with:
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret

🛠️ Setup & Run
# 1. Install dependencies
npm install
# 2. Start server in dev mode
npm run dev

Server runs at:
http://localhost:5000/

🧪 API Testing
1. Use the included Postman collection or any API testing tool.
2. Postman Variables:
   {{base_url}} = http://localhost:5000
   {{token}} = JWT from login=
   {{bookId}} & {{reviewId}} = Fill after getting response IDs

🙌 Contribution
This is a mini-assignment project, but PRs and improvements are always welcome!

📄 License
This project is open-sourced and free to use.
