import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/App.css'
import HomePage from './pages/HomePage';
import AddBookPage from './pages/AddBookPage';
import BookDetailsPage from './pages/BookDetailsPage';
import NavBar from './components/NavBar';
import LoginPage from './auth/LoginPage';
import SignupPage from './auth/SignupPage';
import ProtectedRoute from './components/ProtectedRoute';
import ErrorFile from './components/ErrorFile';
function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={
          <HomePage />
        } />
        <Route path='/addbook' element={
          <ProtectedRoute><AddBookPage /></ProtectedRoute>
        } />
        <Route path='/bookdetails/:id' element={
          <ProtectedRoute><BookDetailsPage /></ProtectedRoute>
        } />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/error' element={<ErrorFile />} /> 
      </Routes>
    </Router>
  )
}

export default App
