import { StrictMode, Component } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { DataProvider } from './context/DataContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <DataProvider>
          <App />
        </DataProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);

//JS => javscript

//jsx =>

//Index.html => html runs in the browser

//main.jsx => main file through which all the files are connected with index.html

//App.jsx => root component

//root  =>

//component  =>  class components and functional components ;

// what you want to show on screen

//Button => button ka ui show karna
//Card => car show krna screen par
//Drawer => drawer show karna
