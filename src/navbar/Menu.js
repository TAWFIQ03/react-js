import React, { Component } from 'react'
import axios from 'axios';
import {add_Reminder} from '../actions/index'
import{ connect} from 'react-redux'
import { Link } from 'react-router-dom';

export class Menu extends Component {
    state = {
        liste: []
      }
      componentDidMount() {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
          .then(res => {
          
            this.setState({
              liste: res.data.meals
            })
    
          })
      }
    render() {
        return (
   
    <div  >
               <div className="lescarts">
          <div className="row ">
            {this.state.liste.map(weed => (
              <div className="col-md-3">

                <div className="card  holly  mb-3" >
                  <img className="card-img-top" src={weed.strMealThumb} alt="" />
                  <div className="card-body">
                    <h4 className="card-title">{weed.strMeal}</h4>
                    <p className="card-text">
                      <a href={'/Detail/' + weed.idMeal} className="btn btn-warning">Detail</a>
                      <Link to="" className="btn btn-warning"><i onClick={() => this.props.add_reminder(weed)} className="fas fa-heart "></i></Link>
                      <a > </a>
          
                    </p>
                   
                  </div>
                </div>

              </div>

            ))}

          </div>
          
        </div> 
            </div>
        )
    }
}


export default connect(null, { add_Reminder })(Menu)
