import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './plugin-app';

import '../shared/style.css';

const container = document.getElementById('App');
const root = createRoot(container);

root.render(<App stats={window.stats} />);
