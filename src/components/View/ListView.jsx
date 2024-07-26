import React from 'react';
import './ViewCss/ShopItem.css';
import ShopItem from './ShopItem';

const ListView = (props) => {
  const items = props.items.products
  const newShopList = items.map((item) => {
    return (<ShopItem
      name={item.name}
      color={item.color}
      img={item.img}
      price={item.price}
    />)
  });
  return (
    <div className='new__shop__list__item'>{newShopList}</div>
  )
};

export default ListView;
