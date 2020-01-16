import './index.sass';
import './index.pug';
import initMain from './main/index';
import initPortfolio from './portfolio/index';
import initAbout from './about/index';

export default () => {
  initMain();
  initPortfolio();
  initAbout();
};
