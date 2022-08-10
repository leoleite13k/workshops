import React from 'react';
import Helper from '../../../helper';

export default function ListText({ text, count, slow }) {
  Helper.applySlowPerformance(slow);

  let displayCount = <strong>{count}</strong>;

  if (!text) {
    return <p>Mostrando {displayCount} itens</p>;
  }

  return (
    <>
      <p>
        {!count ? `Nenhum item encontrado ` : <>Mostrando {displayCount} resultado(s) </>}
        para <strong>"{text}"</strong>:
      </p>
    </>
  );
}
