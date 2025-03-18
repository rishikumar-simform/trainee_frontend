

import React, { useState,useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/books";

function UpdateBook() {
    const [updateId, setUpdateId] = useState("");
    const [updateTitle, setUpdateTitle] = useState("");

    const updateBook = async () => {
        if (updateId && updateTitle) {
            await axios.put(`${API_URL}/${updateId}`, { title: updateTitle, author: "Updated Author" });
            setUpdateId("");
            setUpdateTitle("");
            alert("Book updated successfully!");
        }
    };

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        const response = await axios.get(API_URL);
        setBooks(response.data);
    };
     useEffect(() => {
        fetchBooks();
    }, [updateTitle]);
    
    return (
        
        <div>
            <h2>Update Book</h2>
            <input type="text" placeholder="Book ID" value={updateId} onChange={e => setUpdateId(e.target.value)} />
            <input type="text" placeholder="New Title" value={updateTitle} onChange={e => setUpdateTitle(e.target.value)} />
            <button onClick={updateBook}>Update Book</button>

            <h2>Books List</h2>
            <button onClick={fetchBooks}>Refresh Books</button>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        {book.id}. {book.title} by {book.author}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UpdateBook;
