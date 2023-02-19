import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'

export class Orders extends Component {
  render() {
    return (
      <div className="items">
        <img src={"./img/" + this.props.item.img} alt="" />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.price}$</p>
        <FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)} />
      </div>
    )
  }
}

export default Orders;