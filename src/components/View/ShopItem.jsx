import React from 'react';
import './ViewCss/ShopItem.css';

const ShopItem = (props) => {
  return (
    <div className='shopitem__item'>
      <div className="image__item">
        <img className='img__item' src={ props.img } alt={ props.name } />
      </div>
      <div className="shooes__name__item">{ props.name }</div>
      <div className="color__item">{ props.color }</div>
      <div className="info__item">
        <div className="price__item">${ props.price }</div>
        <button className='add__item'>ADD TO CART</button>
      </div>
    </div>
  )
};

export default ShopItem;