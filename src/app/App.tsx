import { useTheme } from '../app/providers/ThemeProvider';
import { useStore } from 'effector-react';
import { useEffect } from 'react';

import { classNames } from '../shared/lib/classNames/classNames'

import { Navbar } from '../widgets/ui/Navbar';
import { CardsGallery } from '../entities/CardsGallary/ui/CardsGallery';

import Container from 'react-bootstrap/Container';

import {
  $products,
  fetchProducts,
  $limit,
  $totalCount,
} from './store/store';
import Input from '../shared/ui/Input/Input';
import Select from '../shared/ui/Select/Select';
import SelectNumber from '../shared/ui/SelectNumber/SelectNumber';
import Pagination from '../entities/Pagination/Pagination';

function App() {
  const { theme } = useTheme();

  const limit = useStore($limit);
  const totalCount = useStore($totalCount);

  const pages = totalCount / limit;

  useEffect(() => {
    fetchProducts({limit, skip: 0});
  }, [limit]);

  const products = useStore($products);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <Container className='findBar'>
        <Input placeholder='Select'/>
        <Select />
        <SelectNumber />
      </Container>
      <Container>
        
        <CardsGallery products={products} />
        {pages > 1 && <Pagination />}
      </Container>
    </div>
  )
}

export default App;
