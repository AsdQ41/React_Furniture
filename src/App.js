import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Chair gray',
          img: 'chair-grey.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Table',
          img: 'table.webp',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'tables',
          price: '149.00'
        },
        {
          id: 3,
          title: 'Sofa',
          img: 'sofa.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'sofa',
          price: '549.99'
        },
        {
          id: 4,
          title: 'lamp',
          img: 'wall-light.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'light',
          price: '25.00'
        },
        {
          id: 5,
          title: 'Chair white',
          img: 'chair-white.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 6,
          title: 'Bed',
          img: 'shs.webp',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'bed',
          price: '49.99'
        }
      ],
      
    }
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Items items={this.state.items} onAdd={this.addToOrder}/>

        
        <Footer />
      </div>
    );
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

 

  addToOrder(item) {
    let isintArray = false;
    this.state.orders.forEach(el => {
      if(el.id === item.id) 
        isintArray = true;
    })
    if(!isintArray) 
        this.setState({orders: [...this.state.orders, item]});
  }
}

export default App;
