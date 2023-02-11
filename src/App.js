import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'routes';
import TopBar from 'components/topbar';
import { CurrentUserProvider } from 'contexts/currentUser';

function App() {
	return (
		<div className="App">
			<CurrentUserProvider>
				<Router>
					<TopBar />
					<Routes />
				</Router>
			</CurrentUserProvider> 
		</div>
	);
}

export default App;
