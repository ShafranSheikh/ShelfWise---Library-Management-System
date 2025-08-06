import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/App.css'
import HomePage from './pages/HomePage';
import AddBookPage from './pages/AddBookPage';
import BookDetailsPage from './pages/BookDetailsPage';
import NavBar from './components/NavBar';
function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/addbook' element={<AddBookPage />} />
        <Route path='/bookdetails:bookId' element={<BookDetailsPage />} />
      </Routes>
    </Router>
  )
}

export default App
