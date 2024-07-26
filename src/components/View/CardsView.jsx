import React from 'react';
import ShopCard from './ShopCard';
import './ViewCss/ShopCart.css';

const CardsView = (props) => {
  const items = props.cards.products
  const newShopList = items.map((card) => {
    return (<ShopCard
      name={card.name}
      color={card.color}
      img={card.img}
      price={card.price}
    />)
  });
  return (
    <div className='new__shop__list__cart'>{newShopList}</div>
  )
};

export default CardsView;