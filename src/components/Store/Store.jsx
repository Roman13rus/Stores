import { React, useState } from 'react';
import products from './products ';
import CardsView from '../View/CardsView';
import ListView from '../View/ListView';
import IconSwitch from '../IconSwitch/IconSwitch';

const Store = () => {
  const cards = { products }
  const [viewSelected, setViewSelected] = useState('view_module');
  const state = 'list';
  if (viewSelected === 'view_list') {
    return (
    <>
      <IconSwitch
      icon={'view_module'}
      onSwitch={() => {setViewSelected('view_module')}}/>
      <ListView
       items={cards}/>
    </>)
  } else if (viewSelected === 'view_module') {
    return (
    <>
      <IconSwitch
      icon={'view_list'}
      onSwitch={() => { setViewSelected('view_list')}}/>
      <CardsView
      cards={cards}/>
    </>
  )};
};
 export default Store;
 