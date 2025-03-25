import React from 'react';
import ReactDOM from 'react-dom/client';
import ListNotes from './ListNotes';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(<ListNotes notes={[]} onSelect={() => {}} />);