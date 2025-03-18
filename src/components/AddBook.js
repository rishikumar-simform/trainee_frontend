import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/books";

function AddBook() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const addBook = async () => {
        if (title && author) {
            await axios.post(API_URL, { title, author });
            setTitle("");
            setAuthor("");
            alert("Book added successfully!");
        }
    };

    return (
        <div>
            <h2>Add a New Book</h2>
            <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
            <input type="text" placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)} />
            <button onClick={addBook}>Add Book</button>
        </div>
    );
}

export default AddBook;
