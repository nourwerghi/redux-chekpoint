import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import AddTask from './components/Addtask';
import ListTask from './components/ListTask';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo List</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
}

export default App;
