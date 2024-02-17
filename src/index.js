import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoItem from './TodoItem';



function App(){
  return (
    <>
      <TodoItem/>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


