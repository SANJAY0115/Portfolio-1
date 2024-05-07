// import './App.css'
import About from './Components/Section_two/About'
import Navbar from './Components/navbar/Navbar'
import Sectionone from './Components/Section_one/Sectionone'
import Title from './Components/title/Title'
import Projucts from './Components/Projects/Projucts'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {


  return (
    <>

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='Sectionone' element={<Sectionone/>}/>
          <Route path='About' element={<About/>}/>
          <Route path='Projucts' element={<Projucts/>}/>
          <Route path='Contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>

      <Sectionone/>
      <Title title='About' />
      <About/>
      <Title title='Projects' />
      <Projucts/>
      <Title title='Get In Touch' />
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
