import React, { Component } from 'react'

export class ShowItem extends Component {
  render() {
    return (
      <div className='modalitem'>
        <div>
            <img src={"./img/" + this.props.item.img} alt="" onClick={() => this.props.closeItem(this.item)}  />
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.desc}</p>
            <b>{this.props.item.price}$</b>
            <div className='add-to-card' onClick={() => this.props.onAdd(this.props.item)}>+</div>
        </div>
      </div>
    )
  }
}

export default ShowItem