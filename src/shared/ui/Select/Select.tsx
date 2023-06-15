import { useEffect, memo } from 'react';
import { useStore } from 'effector-react';

import {
  $categories,
  fetchCategories,
  fetchProductsToCategory,
} from '../../../app/store/store';

import cls from './Select.module.scss';

const Select = () => {
  const categories = useStore($categories);

  const handleChange = (e) => {
    fetchProductsToCategory(e.target.value);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className={cls.selectWrapper}>
      <select className={cls.Select} onChange={handleChange}>
        <option value="">Category</option>
        {categories.map((category) => (
          <option className={cls.option} key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default memo(Select);
