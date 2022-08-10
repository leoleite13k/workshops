import React, { useEffect, useState, Suspense } from 'react';
import Helper from '../../../helper';
import CommentsLength from './comments-length';
import './list-item.css';

export default function ListItem({ item, slow }) {
  Helper.applySlowPerformance(slow);
  const [commentResponse, setCommentResponse] = useState([]);
  const getFormattedPrice = (number, currencyRaw) => {
    let currency = currencyRaw.split(' ')[0];
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency
    }).format(number);
  };

  useEffect(() => {
    //TODO: Remover parâmetro "true" - irá transformar a promise na interface que utilizamos no suspense
    setCommentResponse(Helper.callPromiseWithTimeout(item.comments));
  }, [item.comments]);

  return (
    <li className="list-item">
      <span className="list-item__content">
        <div className="list-item__img-container">
          <img
            className="list-item__img"
            src={`${item.image}?text=${item.category}`}
            alt={item.category}
          />
        </div>
        <div className="list-item__text">
          <span className="list-item__hat">{item.category}</span>
          <h3 className="list-item__head">{item.name}</h3>
          <Suspense
            fallback={
              <span className="comment-length loading-pulse">Carregando avaliaçōes...</span>
            }>
            <CommentsLength comments={commentResponse} slow={slow} />
          </Suspense>
          <div className="list-item__sub">{getFormattedPrice(item.price, item.currency)}</div>
        </div>
      </span>
    </li>
  );
}
