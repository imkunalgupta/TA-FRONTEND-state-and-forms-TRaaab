// import React from 'react';
// import { render } from 'react-dom';
// import App from './components/App';
// import './style/style.css';

// render(<App />, document.getElementById('root'));

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './style/style.css';

createRoot(document.getElementById('root')).render(<App />);
