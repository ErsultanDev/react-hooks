import { BrowserRouter as Router } from "react-router-dom";
import Routes from "routes";
import TopBar from "components/topbar";
import { CurrentUserProvider } from "contexts/currentUser";

import CurrentUserChecker from "components/currentUserChecker";

function App() {
  return (
    <div className="App">
      <CurrentUserProvider>
        <CurrentUserChecker>
          <Router>
            <TopBar />
            <Routes />
          </Router>
        </CurrentUserChecker>
      </CurrentUserProvider>
    </div>
  );
}

export default App;
