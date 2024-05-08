import React, { useState, useEffect } from "react";
import Booklist from "./components/Booklist";
import RecomBook from "./components/RecomBook";
import PostForm from "./components/BookForm";
import SelectGroupBooks from "./components/UI/SelectGroupBooks/SelectGroupBooks";
import './firebaseConfig';
import { getFirestore, getDocs, collection } from "firebase/firestore";
import './styles/App.scss'


function App() {
  const [books, setBooks] = useState([]);

  const fetchDataFromFirestore = async () => {
    const firestore = getFirestore();
    const querySnapshot = await getDocs(collection(firestore, 'books'));
    const temporaryArr = [];
    querySnapshot.forEach((doc) => {
      temporaryArr.push({ ...doc.data(), id: doc.id });
    });
    setBooks(temporaryArr);
  };
  useEffect(() => {
    fetchDataFromFirestore();
  }, []);
  const createBook = (newBook) => {
    setBooks([...books, newBook])
  };

  const removeBook = (book) => {
    setBooks(books.filter(p => p.id !== book.id))
  };
  const [group, setGroup] = useState('year');

  return (
    <div className="App">
      <PostForm create={createBook} />
      {books.length !== 0 ?
        <>
          < RecomBook books={books} />
          <SelectGroupBooks group={group} setGroup={setGroup} />
          <Booklist books={books} group={group} remove={removeBook} />
        </>
        : <h1>Посты не найдены</h1>}
    </div >
  );
}

export default App;
