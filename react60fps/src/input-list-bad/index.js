import React, { useState, Suspense, useDeferredValue } from 'react';
import List from './list';
import Helper from '../helper';
import './input-list.css';
import Loader from '../loader';

//TODO: early data fetch
const earlyFetchedData = Helper.fetchAllProductsWithSuspense();

function InputList({ slow }) {
  const [text, setText] = useState('');
  const [products, setProducts] = useState([]);
  React.useEffect(() => {
    Helper.fetchAllProductsWithoutSuspense().then(({ data }) => setProducts(data));
  }, []);

  function handleChange(e) {
    setText(e.target.value);
  }

  //TODO: use deferred value
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
      {/* TODO: Adicionar Suspense */}
      <Suspense fallback={<Loader />}>
        <List searchText={deferredText} data={earlyFetchedData} slow={slow} />
      </Suspense>
    </div>
  );
}

export default InputList;
