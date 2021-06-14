import './App.css';
import Navbar from './component/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "./component/slider"
import Cards from './component/cards'
import React from 'react';
import Ad from './component/ad';
import FilterCategory from "./component/filterCategory"
import Megadealbar from './component/megadealbar';
import Footer from './component/footer';


function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <FilterCategory />
      <Cards />
      <Ad />
      <Megadealbar />
      <Footer />
      
      
     </div>
  );
}

export default App;
