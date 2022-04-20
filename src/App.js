import { Component } from 'react';
import Productos from './components/Productos.js';
import Layout from './components/Layout.js';
import Title from './components/Title.js';
import NavBar from  './components/NavBar.js'

class App extends Component {
  state = {
    productos: [
      { name: 'Tomate', price: 1500, img: 'products/tomato.jpg' },
      { name: 'Arbejas', price: 2500, img: 'products/peas.jpg' },
      { name: 'Lechuga', price: 500, img: 'products/lettuce.jpg' }
    ],
    carro: [],
    esCarroVisible: false,
  }


  agregarAlCarro = (producto) => {
    const { carro } = this.state;
    if(carro.find(x => x.name === producto.name)){
      const newCarro = carro.map(x => x.name === producto.name 
        ? ({
          ...x,
          quantity: x.quantity + 1
        })
        : x)
        return this.setState({carro : newCarro})
    }
    return this.setState({
      carro : this.state.carro.concat({
        ...producto,
        quantity:1
      })
    })
  }

  mostrarCarro = () => {
    if(!this.state.carro.length) {
      return 
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible })
  }
  
  render() {
    const { esCarroVisible } = this.state
    return (
      <div>
        <NavBar carro={this.state.carro} esCarroVisible={esCarroVisible} mostrarCarro={this.mostrarCarro}/>
        <Layout>
          <Title/>
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
