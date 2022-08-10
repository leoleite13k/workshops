import React, { useState, Suspense, useDeferredValue } from 'react';
import List from './list';
import Helper from './../helper';
import Loader from '../loader';

import './input-list.css';

const earlyFetchedData = Helper.fetchAllProductsWithSuspense();

function InputList({ slow }) {
  const [text, setText] = useState('');
  function handleChange(e) {
    setText(e.target.value);
  }

  const deferredText = useDeferredValue(text, {
    timeoutMs: 800
  });

  return (
    <div>
      <input
        className="search__input"
        value={text}
        autoFocus
        placeholder="Buscar..."
        onChange={handleChange}
      />
      <Suspense fallback={<Loader />}>
        <List searchText={deferredText} data={earlyFetchedData} slow={slow} />
      </Suspense>
    </div>
  );
}

export default InputList;
