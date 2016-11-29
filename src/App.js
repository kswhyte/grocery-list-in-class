import React, { Component } from 'react';
import './App.css';

import Grocery from './Grocery'

class App extends Component {
  constructor() {
    super();
    this.state = {
      groceries: [
        { name: 'Bananas',
          quantity: 7,
          notes: 'very ripe',
          starred: false,
          purchased: false,
          id: 1 },
        { name: 'Tacos',
          quantity: 10,
          notes: 'nice n spicy!',
          starred: false,
          purchased: false,
          id: 2 },
        { name: 'Mangoes',
          quantity: 11,
          notes: 'very juicy',
          starred: false,
          purchased: false,
          id: 3 }
      ]
    };
  };
  onPurchase(id) {
    let currentGrocery = this.state.groceries.filter((grocery) => {
      return grocery.id === id;
    });
    currentGrocery.purchased = true;
  }
  onStar(id) {
    let currentGrocery = this.state.groceries.filter((grocery) => {
      return grocery.id === id;
    });
    currentGrocery.starred = true;
  }
  onDelete(id) {
    let currentGrocery = this.state.groceries.filter((grocery) => {
      return grocery.id === id;
    });
    currentGrocery = {};
  }
  onClearGroceries() {
    this.state.groceries = '';
  }
  render() {
    const { groceries } = this.state
    let toggleDisabled = false;
    if (groceries.length < 1) {
      toggleDisabled = true;
    }
      return (
        <div>
          <button
            className='Clear-groceries'
            disabled={toggleDisabled}
            onClick={this.onClearGroceries.bind(this)}
          >
            Clear Groceries
          </button>

          { groceries.map((grocery, i) => {
            return (
              <Grocery
                key={i}
                name={grocery.name}
                quantity={grocery.quantity}
                notes={grocery.notes}
                purchased={grocery.purchased}
                starred={grocery.starred}
                id={i}
                onPurchase={this.onPurchase.bind(this)}
                onStar={this.onStar.bind(this)}
                onDelete={this.onDelete.bind(this)}
              />
            ) }
          )};
        </div>
      );
    };
};

export default App;
