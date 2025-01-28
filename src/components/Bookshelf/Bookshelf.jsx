import { useState } from 'react';

function Bookshelf() {

    const initialState = {
        title: "",
        author: "",
    }

    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);

    const [newBook, setNewBook] = useState(initialState)

    function handleInputChange(event) {
        const book = {...newBook, [event.target.name]: event.target.value }
        setNewBook(book)
    }

    function handleSubmit(event) {
        event.preventDefault();
        setBooks([...books, newBook]);
        setNewBook(initialState);
    }

    return (
        <>
            <div className="bookshelfDiv">
                <div className="formDiv">
                    <h3>Add a Book</h3>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="">Title</label> <br />
                        <input type="text" onChange={handleInputChange} value={newBook.title} name='title'/> <br />
                        <label htmlFor="">Author</label> <br />
                        <input type="text" onChange={handleInputChange} value={newBook.author} name="author"/> <br />
                        <button type='submit'>Add Book</button>
                    </form>
                </div>
                <div className="bookCardsDiv">
                    {books.map((book, index) => (
                        <div className='bookCard' key={index}>
                            <h2>{book.title}</h2>
                            <p>{book.author}</p>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Bookshelf;