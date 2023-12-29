import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App/App';
import './common.css';

const domNode = document.getElementById('root');
if (domNode) {
  const root = createRoot(domNode);
  root.render(<App />);
}
