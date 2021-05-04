import axios from 'axios';
import React, { Component } from 'react';

import { Link } from 'react-router-dom';
export class Detail extends Component {
  state = {
    see: [],
  };
  componentWillMount = () => {
    const login = this.props.match.params.login;
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${login}`)
      .then((res) => {
        this.setState({
          see: res.data.meals,
        });
      });
  };

  render() {
    return (
      <div>
        {this.state.see.map((gitDATA) => (
          <div className="row text-center">
            <div className="col-lg-6">
              <img className="card-img-top" src={gitDATA.strMealThumb} alt="" />
            </div>
            <div className="col-lg-6">
              <h4 className="">
                {gitDATA.strMeal}
                <Link className="m-5 for" onClick={this.props.ajouter}>
                  
                </Link>
                <i className="fas fa-heart text-danger favo"></i>
              </h4>
              <h2>Their compon ents</h2>
              <h3>
                {gitDATA.strIngredient1} ,{gitDATA.strIngredient2},
                {gitDATA.strIngredient3} ,{gitDATA.strIngredient4},
                {gitDATA.strIngredient9} ,{gitDATA.strIngredient5},
                {gitDATA.strIngredient6},{gitDATA.strIngredient7},
                {gitDATA.strIngredient8},{gitDATA.strIngredient10},
              </h3>
              <h2>Preparation method</h2>

              <h6> {gitDATA.strInstructions}</h6>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Detail;