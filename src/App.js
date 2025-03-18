import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AddBook from "./components/AddBook";
import GetBooks from "./components/GetBooks";
import UpdateBook from "./components/UpdateBook";
// import AddBook from "./components/AddBook";

function App() {
    return (
        <Router>
            <div className="App">
                <h1>Book CRUD App</h1>
                
                <nav>
                    <Link to="/">Home</Link> | 
                    <Link to="/add">Add Book</Link> | 
                    <Link to="/update">Update Book</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<GetBooks />} />
                    <Route path="/add" element={<AddBook />} />
                    <Route path="/update" element={<UpdateBook />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const API_URL = "http://localhost:5000/books";

// function App() {
//     const [books, setBooks] = useState([]);
//     const [title, setTitle] = useState("");
//     const [author, setAuthor] = useState("");
//     const [updateTitle, setUpdateTitle] = useState("");
//     const [updateId, setUpdateId] = useState("");

//     // Fetch Books
//     const fetchBooks = async () => {
//         const response = await axios.get(API_URL);
//         setBooks(response.data);
//     };

//     // Add Book
//     const addBook = async () => {
//         if (title && author) {
//             await axios.post(API_URL, { title, author });
//             setTitle("");
//             setAuthor("");
//             fetchBooks();
//         }
//     };

//     // Update Book (Full update)
//     const updateBook = async () => {
//         if (updateId && updateTitle) {
//             await axios.put(`${API_URL}/${updateId}`, { title: updateTitle, author: "Updated Author" });
//             setUpdateId("");
//             setUpdateTitle("");
//             fetchBooks();
//         }
//     };

 

//     useEffect(() => {
//         fetchBooks();
//     }, []);

//     return (
//         <div className="App">
//             <h1>Book CRUD App</h1>

//             <h2>Add a New Book</h2>
//             <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
//             <input type="text" placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)} />
//             <button onClick={addBook}>Add Book</button>

//             <h2>Update Book</h2>
//             <input type="text" placeholder="Book ID" value={updateId} onChange={e => setUpdateId(e.target.value)} />
//             <input type="text" placeholder="New Title" value={updateTitle} onChange={e => setUpdateTitle(e.target.value)} />
//             <button onClick={updateBook}>Update Book</button>


//             <h2>Books List</h2>
//            <button onClick={fetchBooks}>Get Books</button>
//            <ul>
//                 {books.map(book => (
//                    <li key={book.id}>
//                         {book.id}. {book.title} by {book.author}
//                     </li>
//                 ))}
//            </ul>
//        </div>
//    );
// }

// export default App;

