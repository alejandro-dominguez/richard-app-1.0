import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import ProductsContextProvider from './contexts/productsContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ProductsContextProvider>
            <App />
        </ProductsContextProvider>
    </React.StrictMode>
);
