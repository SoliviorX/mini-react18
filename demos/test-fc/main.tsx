import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
	return (
		<div>
			<span>helloWorld</span>
		</div>
	);
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<App />
);
