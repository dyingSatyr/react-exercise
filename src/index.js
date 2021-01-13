import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';

let books = [
    { id: 1, title: 'Besnilo', author: 'B. Pekic', cover: 'hgtg.jpg' },
    { id: 2, title: 'Slepilo', author: 'K. Saramago', cover: 'hgtg.jpg' },
    { id: 3, title: "Dallas 63'", author: 'S. King', cover: 'hgtg.jpg' },
];

function App() {
    return (
        <section className="booklist">
            {books.map((book) => {
                return <Book key={book.id} {...book} />; //Spread book object to individual props
            })}
        </section>
    );
}

const Book = (props) => {
    const { cover, title, author } = props; //Destructure props
    let coverPath = 'assets/' + cover;
    return (
        <article className="book">
            <img src={coverPath} alt={title} />
            <h1 style={styles.title}>{title || 'No title'}</h1>
            <h4 style={styles.author}>{author}</h4>
            <button onClick={() => getTitle(title)}>Add</button>
        </article>
    );
};

const getTitle = (title) => {
    console.log(title)
}

// const BookTitle = () => <h1 style={styles.title}>Book title</h1>;
// const BookAuthor = () => <h4 style={styles.author}>Douglas Adams</h4>;
// const BookCover = () => <img src="assets/hgtg.jpg" alt="HGTG" />;

// To inject html elements in each other via arrow functions you must use createElement
// in the innertext argument, which gets messy really fast
// const App = () => React.createElement('h1', {}, 'Inner text');

const styles = {
    title: {
        color: '#333333',
        marginTop: '15px',
    },
    author: {
        color: '#777',
        marginTop: '5px',
        fontSize: '13px',
    },
};

ReactDOM.render(<App />, document.getElementById('root'));
