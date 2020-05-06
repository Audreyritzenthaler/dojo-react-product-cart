import React from 'react';
import './App.css';

const initialProductList = [
  { id: 1, name: 'produit 1', price: 50, quantity: 1, },
  { id: 2, name: 'produit 2', price: 75, quantity: 2, },
  { id: 3, name: 'produit 3', price: 20, quantity: 5, },
];

class App extends React.Component {
  state = {
    products : [...initialProductList]
  }

  getQuantity = (e) => {
    const products = this.state.products
    const productIndex = products.findIndex(item => item.id == e.target.name)
    if (e.target.value == 0){
      const dial = window.confirm( "Do you want delete this item ?" )
      if (dial == true) {
        products.splice(productIndex, 1)
      }
    } else {
        products[productIndex].quantity = Number(e.target.value)
    }
    this.setState({ products : products })
  }

  total = (reste, courant) => {
    const  sum = (reste.price * reste.quantity) + (courant.price * courant.quantity)
    return {price: sum, quantity: 1}
  }

  // componentDidMount() {
  //   this.setState({ products : initialProductList })
  // }
  
  render() {
    return (
      <div className='App'>
        <h1>Ma commande</h1>
        <table>
          <tbody>
            <tr>
              <th>Produit</th>
              <th>Prix unitaire</th>
              <th>Quantité</th>
              <th>Prix Total</th>
            </tr>
              {this.state.products.map((product, i) =>
              <tr key={i}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><input name={product.id} value={product.quantity} onChange={this.getQuantity} type="number"/></td>
                <td>{product.quantity * product.price}</td>
              </tr>
                )}
          </tbody>
        </table>
        <p>Total du panier : {this.state.products.reduce(this.total).price} </p>
          
          <form>
          <h2>Ajouter un produit</h2>
            <div className="field">
              <label htmlFor="name">Nom</label>
              <input name="name" type="text" required/> 
            </div>

            <div className="field">
              <label htmlFor="price">Prix</label>
              <input name="price" type="number" required/>
            </div>
            <button>Ajouter</button>
          </form>
        </div>
    );
  }
}

export default App;
