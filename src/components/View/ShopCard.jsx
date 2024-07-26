import React from 'react';
import './ViewCss/ShopCart.css';

const ShopCard = (props) => {
  return (
    <div className='shopcard__cart'>
      <div className="shooes__name__cart">{ props.name }</div>
      <div className="color__cart">{ props.color }</div>
      <div className="image__cart">
        <img className='img__cart' src={ props.img } alt={ props.name } />
        <span className="info__cart">
          <span className="price__cart">${ props.price }</span>
          <button className='add__cart'>ADD TO CART</button>
        </span>
      </div>
    </div>
  )
};

export default ShopCard;