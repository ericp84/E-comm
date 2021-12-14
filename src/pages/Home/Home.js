import React from 'react'
import './Home.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";



const Home = () => {
  return (
    <div className="container">
      <label htmlFor="search"> Recherche </label>
        <div className="search-bar">
        <input type="text" name="search" placeholder='que cherchez vous ?'/> 
        <i onClick={()=> console.log('search ok')}><FontAwesomeIcon className="icon-search" icon={faSearch} color="indianred"/></i>
      </div>
      <div className="row justify-content-center">
        <div class="col-md6 col-lg-4 mb-5 card">
          <img src="..." class="card-img-top" alt="..." width={150} height={150}/>
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-5 card">
          <img src="..." class="card-img-top" alt="..." width={150} height={150}/>
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-5 card">
          <img src="..." class="card-img-top" alt="..." width={150} height={150}/>
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-5 card">
          <img src="..." class="card-img-top" alt="..." width={150} height={150}/>
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        
      </div>
    </div>





  )
}
export default Home;