import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import { connect } from "react-redux";
import { categoryAction } from "../store/category/actions.js";
import { displayProductsList } from "../store/category/selectors.js";


class Category extends Component {

  componentDidMount() {
    this.props.getProducts(this.props.match.params.idCategory);
  }

  render() {
    return (
      <div className="Categories">
        <div>
          <ul>
            {this.props.category.productList.map(products => (
              <li>
              <NavLink
                key={products.id}
                to={`/product/${products.id}`}
              >
                {products.title}
              </NavLink>
            <img  src={"https://www.decathlon.fr/media/" + products.image_path}/></li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(displayProductsList, categoryAction)(Category);