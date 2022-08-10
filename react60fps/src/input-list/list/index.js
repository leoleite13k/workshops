import React, { memo } from 'react';
import ListItem from './list-item';
import ListText from './list-text';
import './list.css';

export default memo(function List({ searchText, data, slow }) {
  const response = data.read();
  const searchTextLower = searchText.toLowerCase();
  const items = response.data
    .filter(item => item.name.toLowerCase().includes(searchTextLower))
    .map((item, index) => <ListItem key={index} item={item} productIndex={index} />);

  return (
    <>
      <div className="media-list__status">
        <ListText text={searchText} count={items.length} slow={slow} />
      </div>
      <ul className="media-list">{items}</ul>
    </>
  );
});
