import React from 'react';
import './App.css';

const initialProductList = [
  { id: 1, name: 'produit 1', price: 50, quantity: 1, },
  { id: 2, name: 'produit 2', price: 75, quantity: 2, },
  { id: 3, name: 'produit 3', price: 20, quantity: 5, }
];


class App extends React.Component {
  state = {
    products : []
  }

  getQuantity = (e) => {
    const products = this.state.products
    const productIndex = products.findIndex(item => item.id == e.target.name)
    products[productIndex].quantity = e.target.value
    this.setState({ products : products })
  }

  add = () => {
    let result = 0
    for (let i = 0; i < this.state.products.lenght ; i++){
      console.log(result);
      result = result + (this.state.products.quantity * this.state.products.price)
    }
    return result
  }

  componentDidMount() {
    this.setState({ products : initialProductList })
  }
  
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
                {/* {initialProductList[i].push((product.quantity * product.price))} */}
              </tr>
                )}
          </tbody>
        </table>
        <p>Total du panier : {this.add}</p>
      </div>
    );
  }
}

export default App;
