import {useState} from 'react';
import {data} from "./data";
import './App.css'; 

function TravellWishList(){
   const[places, setPlaces] = useState(data);


const removePlaces = (id) =>{
   let newPlaces = places.filter(place => place.id !==id);
   setPlaces(newPlaces)
}

   return(
      <div className='container' >
         <div >
            <h1 className='title' >My Travel Wish List</h1>
         </div>

         <div className='parent'>
         {places.map((item =>{
            const{id,image, name} = item;
            return(
               <div key={id} className="parentTwo" >
                  <div>
                     <h2 className='text' >{name}</h2>
                  </div>
                  <div>
                     <img src={image} width = "200px" height="100px" alt ="park"/>
                  </div>
                  <div>
                     <button className='smallButton'  onClick={() => removePlaces(id)}  >Remove</button>
                  </div>
               </div>
            )
         }))
         }
         </div>

      <div >
         <button  className='removeButton'  onClick={() => setPlaces([])} >Remove ALL</button>
      </div>

      </div>
   )


}
export default TravellWishList;
