import React, { Component } from 'react'
import "./Product.css"

 class Product extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <article>
                <figure className="Product">
                  <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"/>
                  <figcaption>
                  <h3>Price $: {this.props.Price} </h3>
                  <button>Buy Now</button>
                  </figcaption>
                </figure>
            </article>
        )
    }
}

export default Product
