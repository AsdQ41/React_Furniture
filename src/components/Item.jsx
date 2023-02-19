import React, { Component } from 'react'
import ShowItem from './ShowItem';



export class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      mitem: {}
    };
    this.onShowItem = this.onShowItem.bind(this)
    this.closeItem = this.closeItem.bind(this)
  }

  onShowItem(item) {
    this.setState({mitem: item})
    this.setState({ open: !this.state.open })
  }

  closeItem(item) {
    this.setState({mitem: item})
    this.setState({ open: false })
  }

  render() {
    return (
      <>
      <div className='item'>
        <img src={"./img/" + this.props.item.img} alt="" onClick={() => this.onShowItem(this.props.item)}  />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price}$</b>
        <div className='add-to-card' onClick={() => this.props.onAdd(this.props.item)}>+</div>
      </div>
      <div>
      
      {this.state.open && <ShowItem item={this.state.mitem} closeItem={this.closeItem} onAdd={this.props.onAdd} />}
      </div>
      </>
    );
  }
}

export default Item;