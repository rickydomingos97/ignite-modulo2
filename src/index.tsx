import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs'
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api'; //todas as chamadas estarao disponiveis a partir daqui //

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction',
          amount: 400,
          category: 'Food',
          createdAt: new Date()
,        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);