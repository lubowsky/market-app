
import { memo } from 'react';

import { setLimit, $limit } from '../../../app/store/store';

import cls from './SelectNumber.module.scss';
import { useStore } from 'effector-react';

const SelectNumber = () => {
 
  const handlePerPageChange = (e) => {
    setLimit(parseInt(e.target.value));
  };

  const limit = useStore($limit);

  return (
    <div className={cls.selectWrapper}>
      <select
        className={cls.selectNumber}
        value={limit}
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

export default memo(SelectNumber);
