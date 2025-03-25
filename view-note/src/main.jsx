import React from 'react';
import ReactDOM from 'react-dom/client';
import ViewNote from './ViewNote';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(<ViewNote note={{ title: '', content: '' }} onClose={() => {}}/>);