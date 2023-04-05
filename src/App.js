import './App.css'
import {BrowserRouter} from 'react-router-dom';
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import Student from './Components/Student';
import ContactUs from './Components/ContactUs';
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <>
    <div className='app'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Student" element={<Student/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        <Route path="/*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
