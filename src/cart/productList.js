import React, { Component } from "react";
import "../style-general.css";
import { connect } from "react-redux";
import { displayCart } from "../store/cart/selectors";
import { displayProduct } from "../store/product/selectors";
import { cartAction } from "../store/cart/actions.js";
import { productAction } from "../store/product/actions.js";


class ProductList extends Component {
  render() {
    console.log(this.props.cart.productList);
    return (
      <div>
        {this.props.cart.productList.map(product => {
          console.log(product.iteminfo.id);
          return (
          <div className="cart-content" key={product.iteminfo.id}>
            <div className="picture-item">
              <img
                src={
                  "https://www.decathlon.fr/media/" +
                  product.iteminfo.image_path
                }
                alt={product.iteminfo.description}
              />
            </div>
            <div className="name-item">
              <p> {product.iteminfo.title} </p>
            </div>
            <div className="quantity-item">
              <p>
                <button onClick={this.props.decrement}> - </button>
                <span>{product.quantity}</span>
                <button onClick={this.props.increment}> + </button>
              </p>
            </div>
            <div className="delete-item">
              <p>
                {" "}
                <button onClick={this.props.delete}> Delete </button>
                <span>{product.quantity}</span>{" "}
              </p>
            </div>
            <div className="price-by-item">
              <p> {product.iteminfo.min_price} </p>
            </div>
            <div className="total-price">
              <p> {product.quantity * product.iteminfo.min_price} </p>
            </div>
          </div>
        )
        }
      )}
        <div className="Cart-Total">Total de la commande : 99Fr</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: {
      productList: state.cartReducer.productList
    },
    product: {
      product: state.productReducer.product
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      productAction: productAction(dispatch),
      cartAction: cartAction(dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
