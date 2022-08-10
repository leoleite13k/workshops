import productList from './../product-list-1.json';

const MOCK_LAG = 2000; //ms

const promiseWrapper = promise => {
  let status = 'pending';
  let result;
  let suspender = promise.then(
    r => {
      status = 'success';
      result = r;
    },
    e => {
      status = 'error';
      result = e;
    }
  );
  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    }
  };
};

const callPromiseWithTimeout = (data, log, usePromise) => {
  const promise = new Promise(resolve => {
    setTimeout(() => {
      if (log) console.log(log);
      resolve(data);
    }, MOCK_LAG * Math.random());
  });

  return usePromise ? promise : promiseWrapper(promise);
};

export default {
  applySlowPerformance(slow) {
    if (slow) {
      //simulation of a complex component
      let now = performance.now();
      while (performance.now() - now < 3) {}
    }
  },
  fetchAllProductsWithSuspense() {
    return callPromiseWithTimeout(
      { data: productList.data.slice(0, 1000) },
      `fetched all products`,
      false
    );
  },
  fetchAllProductsWithoutSuspense() {
    return callPromiseWithTimeout(productList, `fetched all products`, true);
  },
  callPromiseWithTimeout
};
