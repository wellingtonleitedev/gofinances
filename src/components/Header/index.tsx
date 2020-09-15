import React, { CSSProperties } from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from './styles';
import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const style: CSSProperties = {
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
    borderBottomColor: '#FF872C',
    paddingBottom: 10,
  };

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <NavLink exact to="/" activeStyle={style}>
            Listagem
          </NavLink>
          <NavLink to="/import" activeStyle={style}>
            Importar
          </NavLink>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
