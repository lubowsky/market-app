import ReactDOM from 'react-dom/client';
import { attachLogger } from 'effector-logger';

import { ThemeProvider } from '../src/app/providers/ThemeProvider';
import App from '../src/app/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/app/styles/index.scss';

attachLogger();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
)
