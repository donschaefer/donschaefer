import React from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './themes/dark';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './fonts/goodtime.css';
import { navRoutes } from './data/navRoutes';
import NotFound from './pages/NotFound';

// TODO: Optimize performance (particularly on Gallery page) for lighthouse test
function App() {
	const currentTheme = createTheme(darkTheme);

	return (	
		<ThemeProvider theme={currentTheme}>
			<BrowserRouter>
				<CssBaseline />
				<Layout>
					<Routes>
						<Route path="*" element={<NotFound />} />
						{navRoutes.filter(r => r.pageComponent).map(r => 
							<Route 
								key={r.key}
								path={r.path} 
								element={r.pageComponent}
							/>
						)}
					</Routes>
				</Layout>	
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
