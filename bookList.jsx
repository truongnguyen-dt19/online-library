import React, { useState } from 'react';
import firebase from 'firebase';

const BookList = () => {
    const [books, setBooks] = useState([]);

    return (
        <div>
            <h1>Book List</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Author</th>
                        <th scope="col">Publisher</th>
                    </tr>
                </thead>
                <tbody>
                    { this.books.map(book => <tr>
                        <td>{book.id}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.publisher}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>    
    );
}

export default BookList;