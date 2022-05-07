import './App.css';
import Header from './Header';
import Main from './Main';
import Main2 from './Main2';
import Footer from './Footer';
import {BrowserRouter, Routes, Route} from "react-router-dom"; 

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        
        <div className='app-cont'>  
         <Routes>
                 <Route path="/Main2" element= {<Main2/>}/>
                 <Route path="" element= {<Main/>}/>
             </Routes>
      </div>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;