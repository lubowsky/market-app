import { classNames } from '../../shared/lib/classNames/classNames';
import { useState, memo } from 'react';
import { useStore } from 'effector-react';

import { createPages } from './model/lib/createPages/createPages';

import { $totalCount, fetchProductsToLimit, $limit } from '../../app/store/store';

import cls from './Pagination.module.scss';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalCount = useStore($totalCount);

  const perPage = useStore($limit);

  const pagesCount = Math.ceil(totalCount / perPage);
  const pages = []
  createPages(pages, pagesCount, currentPage);

  const handlerClickPage = (page) => {
    setCurrentPage(page);
    const skip = (page - 1)* perPage;
    fetchProductsToLimit({perPage, skip});
  };
  
  return (
    <div className={cls.pages}>
      {pages.map((page, index) => <span
        key={index}
        className={classNames(cls.page, {[cls.currentPage]: page === currentPage}, [])}
        onClick={() => handlerClickPage(page)}>{page}</span>)}
    </div>
  );
};

export default memo(Pagination);
