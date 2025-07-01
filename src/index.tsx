import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.scss';

const root = ReactDOM.createRoot(
  document.getElementById(`root`) as HTMLElement
);
root.render(	
	// TODO: Address https://github.com/videojs/video.js/issues/7746 without disabling strict mode during development
	// <React.StrictMode>
	<App />
	// </React.StrictMode>
);
