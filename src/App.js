
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import './Sidebar.css';
import './RecommendedVideos.css';
import SearchPage from './SearchPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

y

function App() {
  return (
    <div className="App">

      <Router>
      <Header />
        <Switch>
          <Route path="/search/:searchTerm">
          
          <div className="App-page">
                   <Sidebar className="sidebar" />
                   <SearchPage />
                   </div>
          </Route>
          <Route path="/">
               
                   <div className="App-page">
                   <Sidebar className="sidebar" />
                   <RecommendedVideos className="recommendedvideos" />
                   </div>
          </Route>
        </Switch>
      </Router>
      

    </div>
    
  );
}

export default App;
