import { ThemeSwitcher } from '../../ThemeSwitcher';
import { Logo } from '../../Logo/Logo';
import Container from 'react-bootstrap/Container';

import cls from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <div className={cls.Navbar}>
      <Container className={cls.navContainer}>
        <Logo />
        <ThemeSwitcher />
      </Container>
    </div>
  );
};
