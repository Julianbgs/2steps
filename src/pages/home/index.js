import './index.sass';
import './index.pug';
import initMain from './main/index';
import initPortfolio from './portfolio/index';

export default () => {
  initMain();
  initPortfolio();
};
