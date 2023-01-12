import React, { Component } from 'react'
import './index.css';
import NavBar from './components/navBar';
import Items from './components/items';

class App extends Component {
  state = { 
    items: [
      {
        id: 0,
        value: 1,
        name: "Google Pixel 7",
        price: 210000,
        url: "https://lifemobile.lk/wp-content/uploads/2022/10/Google-Pixel-7.png"
      },
      {
        id: 1,
        value: 1,
        name: "Apple iPhone 12 Mini",
        price: 180000,
        url: "https://lifemobile.lk/wp-content/uploads/2020/10/Apple-iPhone-12-Blue.jpg"
      },
      {
        id: 2,
        value: 1,
        name: "Apple iPhone SE 2020",
        price: 19000,
        url: "https://lifemobile.lk/wp-content/uploads/2020/11/Apple-iPhone-SE-2020.png"
      },
      {
        id: 3,
        value: 1,
        name: "Apple iPhone X 64GB",
        price: 200000,
        url: "https://lifemobile.lk/wp-content/uploads/2019/04/iphone20x.jpg"
      },
      {
        id: 4,
        value: 1,
        name: "Huawei Y5 Lite",
        price: 19000,
        url: "https://lifemobile.lk/wp-content/uploads/2019/10/y5-lite-1.jpg"
      },
      {
        id: 5,
        value: 1,
        name: "Nokia C01 Plus",
        price: 25000,
        url: "https://lifemobile.lk/wp-content/uploads/2021/08/Nokia-C01-Plus-2GB-RAM-16GB.jpg"
      },
    ],

    cartItems: [

    ]
   } 
  render() { 
    return (
      <React.Fragment>
        <NavBar totalNumber={this.state.cartItems.length}/>
        <Items 
          items={this.state.items}
          onIncrement={this.increment}
          onDecrement={this.decrement}
          toCart={this.addToCart}
        />
      </React.Fragment>
    );
  }

  increment = (id) => {
    const items = this.state.items.map(item => {
      if (item.id === id) 
        item.value++;
      return item;
    });
    this.setState({ items });
  }

  decrement = (id) => {
    const items = this.state.items.map(item => {
      if ( item.id === id && item.value !== 1 ) 
        item.value--;
      return item;
    });
    this.setState({ items });
  }

  addToCart = (id) => {
    const item = this.state.items.filter(it => it.id === id);
    const cartItems = [...this.state.cartItems, item[0]];
    this.setState({cartItems});
  }
}

export default App;