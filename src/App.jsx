
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPages from './pages/AboutPages'
import SingleMealPage from './pages/SingleMealPage'
import ErrorPage from './pages/ErrorPage'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/'element = {<HomePage/>}/>
          <Route path='/about' element={<AboutPages/>}/>
          <Route path='/meal/:mealId'element={<SingleMealPage/>}/>
          <Route path='*'element={<ErrorPage/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
