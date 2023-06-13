import _times from 'lodash/times';

import { Product } from '../model/types/types';

import CardItem from '../../../../entities/ui/Card/Card';

import cls from './CardsGallery.module.scss';

interface CardsGalleryProps {
  products?: Product[];
}

export const CardsGallery = ({ products }: CardsGalleryProps) => {
  const dumbCount = 40;
  
  return (
    <ul className={cls.CardsGallery}>
      {products && products.map((item) => {
        return (
          <li className={cls.gallery__item} key={item.id}>
            <CardItem item={item} />
          </li>
        )
      })}

      {/* Generate dumb elements to keep real elements left-aligned */}
      {_times(dumbCount, i => (
        <li className={cls.gallery__dumb} key={i} />
      ))}
    </ul>
  );
};
