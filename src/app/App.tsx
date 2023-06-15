import { useTheme } from '../app/providers/ThemeProvider';
import { useStore } from 'effector-react';
import { useEffect, useState } from 'react';

import { classNames } from '../shared/lib/classNames/classNames'

import { Navbar } from '../widgets/ui/Navbar';
import { CardsGallery } from '../entities/ui/CardsGallary/ui/CardsGallery';

import Container from 'react-bootstrap/Container';

import { $products, fetchProducts } from './store/store';
import Input from '../shared/ui/Input/Input';
import Select from '../shared/ui/Select/Select';
import SelectNumber from '../shared/ui/SelectNumber/SelectNumber';

function App() {
  const { theme } = useTheme();

  const [skip, setSkip ] = useState(0);

  const [limit, setLimit] = useState(10);

  useEffect(() => {
    fetchProducts({limit, skip});
  }, [limit, skip]);

  const products = useStore($products);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <Container className='FindBar'>
        <Input placeholder='Select'/>
        <Select />
        <SelectNumber />
      </Container>
      <Container>
        <CardsGallery products={products} />
      </Container>
    </div>
  )
}

export default App;
