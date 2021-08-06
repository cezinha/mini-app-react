import Cards from '../screens/Cards';
import Home from '../screens/Home';
import Statement from '../screens/Statement';

export default [
  {
    path: '/',
    name: 'Home',
    Component: Home,
    className: 'home'
  },
  {
    path: '/transaction',
    name: 'Transações',
    Component: Statement,
    className: 'transaction'
  },
  {
    path: '/cards',
    name: 'Cartões',
    Component: Cards,
    className: 'cards'
  }
];
