import React from 'react';
import ReactDOM from 'react-dom/client';
import AddNote from './AddNote';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(<AddNote onAdd={() => {}}/>);