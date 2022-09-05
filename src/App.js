
import './App.css';
import ReactDOM from "react-dom/client";
import Main from './components/pages/Main';
import Pg1 from './components/pages/Pg1';
import Pg2 from './components/pages/Pg2';
import Pg3 from './components/pages/Pg3';
import Layout from './components/pages/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="page1" element={<Pg1 />} />
            <Route path="page2" element={<Pg2 />} />
            <Route path="page3" element={<Pg3 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}


export default App;
