import {useState} from 'react';
import {data} from "./data";
import './App.css'; 
import TravellWishList from './TravellWishList';

function App() {
  const [park, setPark] = useState (0);
  const {id, name, image, description} = data[park];


  const previous = () =>{
    setPark((park) =>{
      park --;
      if(park < 0){
        return data.length-1;
      }
      return park;
    })
  }

  const next = () =>{
    setPark((park) =>{
      park++;
      if(park > data.length-1){
      park = 0;
      }
      return park;
    })
  }
  
  return(
    <div className='main' >
      <div className='container'>
        <div>
          <h1 className='title'>Great National Parks of USA</h1>
        </div>
        <div>
          <h2>{id}.  {name}</h2>
        </div>
        <div>
          <img src = {image} width= "350px" height="200px" alt="park"/>
        </div>
        <div>
          <h3 className='text' >{description}</h3>
        </div>
      </div>
      <div className='buttons'>
          <button className='btn' onClick={previous} ><i className="arrow left"></i> Previous</button>
          <button  className='btn' onClick={next}>Next <i className="arrow right"></i></button>
      </div>
      <TravellWishList/>
    </div>
    )
}

export default App;
