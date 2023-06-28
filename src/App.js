import './App.css';
import { Routes, Route } from "react-router-dom";
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
