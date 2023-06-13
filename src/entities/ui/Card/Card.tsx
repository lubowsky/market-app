import { Product } from '../CardsGallary/model/types/types';

import cls from './Card.module.scss';

interface CardProps {
  item?: Product;
}
const CardItem = (props: CardProps) => {
  const { item } = props;

  return (
    <div className={cls.Card}>
      <img src={item.thumbnail} className={cls.thumbGood} />
      <div className={cls.title}>{item.title}</div>
      <div className={cls.price}>{`$ ${item.price}`}</div>
    </div>
  );
};

export default CardItem;
