import React, { Component } from 'react'
import axios from 'axios'
import Search from './search';

export class Home extends Component {
    state = {
        list: []
      }
      Gitdatasearch = (data) =>{
        if ( data != ''){
          axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`).then((Response)=> {
            this.setState({
              list: Response.data.meals,
            });
          })
        }
      }




      // componentDidMount() {
      //   axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      //     .then(res => {
      //       let table = [];
      //       for (let i = 0; i < 6; i++) {
      //         table.push(res.data.meals[i]);
      //       }
      //       this.setState({
      //         list: table
      //       })
    
      //     })
      // }
    
    render() {
        return (
            <div>
                <div className="navb">
      
      <br></br>
      <br></br>

      <div className="theOne">
      <div className="row ">
        <div className="col-lg hollyy ml-lg-5"><h1><p>Meet, Eat &</p>
          <p>Enjoy The true</p>
              taste</h1>
              <br></br>
              <br></br>
              <div className="row">
                <div className="col-lg ml-lg-6"><button type="button" class="btn btn-dark ">Learn More<i class="fad fa-arrow-right text-dark  " ></i></button></div>
              </div>
          
        
        <div className="iconsH">
         <a href="www.facebook.com"><i className="fab fa-facebook-f text-dark  mr-4"></i></a>
         <a><i className="fab fa-instagram text-dark  mr-4"></i></a>
         <a><i className="fab fa-twitter text-dark  mr-4"></i></a>
         <a><i className="fab fa-whatsapp text-dark   mr-4"></i></a>
   </div>
   </div>
        <div className="col-lg- ml-lg-0"><img src="./photo1.png" alt="" /></div>
      
      </div>
      <br></br>
      <br></br>
      </div>
      </div>
      <br></br>
      <br></br>
      {/* search */}

      <div className="text-center p-3">
        <h1>On Our Menu We offer people <br></br> best way to eat healthy food</h1>
      </div>
      <br></br>
      <br></br>
      

      <div className=" ">
        <Search getSearch={this.Gitdatasearch} />
        


         <div className="row mt-4 ml-3">
          {this.state.list.map(hhh => (
            <div className="col-md-4">

              <div className="card text-dark holly mb-3">
                <img className="card-img-top" src={hhh.strMealThumb} alt="" />
                <div className="card-body">
                  <h4 className="card-title">{hhh.strMeal}</h4>
                  <p className="card-text">
                    <a href={'/Detail/' + hhh.idMeal} className="btn btn-warning ">Detail</a>

                  </p>
                </div>
              </div>

            </div>

          ))}

        </div> 
         
      </div>


      {/* discover */}
<div className="cool">
      <div className="bg-dark hi">
        <div className="row">
          
          <div className="col-lg-6">
            <h1 className="p-3 text-white">Discover Resturants
             Near From you</h1>
             <button type="button"  class="btn btnh text-white ml-5 "> Find resturantes</button>
             <button type="button" class="btn btnn text-white ml-4 ">Favorite</button>
          </div>
          
          <div className="col-lg-6 justify-content-center ">
           <img src="./discor.png" alt="" id="log" />
          </div>
        </div>


      </div>
</div>


        

        


            </div>
        )
    }
}

export default Home
