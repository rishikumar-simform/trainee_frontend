import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/books";

function GetBooks() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        const response = await axios.get(API_URL);
        setBooks(response.data);
    };

    return (
        <div>
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

export default GetBooks;
