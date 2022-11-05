import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer/Footer.js'
import Header from './components/header/Header.js'
import PageSwitch from './components/app-router/index.js'
import style from './style.module.scss';

function App() {
  return (
    <BrowserRouter>
          <Header />
    <div className={style.page}>
          <PageSwitch />
    </div>
          <Footer />
        </BrowserRouter>

  );
}

export default App;
