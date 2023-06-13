import { useState, useEffect } from 'react';

import { fetchProductsToLimit } from '../../../app/store/store';

import cls from './SelectNumber.module.scss';

export const SelectNumber = () => {
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    fetchProductsToLimit(perPage);
  }, [perPage]);

  const handlePerPageChange = (e) => {
    setPerPage(parseInt(e.target.value));
  };

  return (
    <div className={cls.selectWrapper}>  
      <select
        className={cls.selectNumber}
        value={perPage}
        onChange={handlePerPageChange}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  );
};
