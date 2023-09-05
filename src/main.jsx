import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ThemeContextProvider from './contexts/ThemeContext'


ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>,
  document.getElementById('root')
);


