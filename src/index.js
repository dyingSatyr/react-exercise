import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';

function App() {
    return (
        <section className="booklist">
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
}

const Book = () => {
    return (
        <article className="book">
            <BookCover />
            <BookTitle />
            <BookAuthor />
        </article>
    );
};

const BookTitle = () => <h1 style={styles.title}>Book title</h1>;
const BookAuthor = () => <h4 style={styles.author}>Douglas Adams</h4>;
const BookCover = () => <img src="assets/hgtg.jpg" alt="HGTG" />;

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
