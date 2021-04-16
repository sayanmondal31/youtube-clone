import "./App.css";
import Header from "./components/header/Header";
import RecommendedVideo from "./components/RecommendedVideo/RecommendedVideo";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage/SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTearm">
            <div className="app__page">
              .{/* Sidebar --> <Sidebar />*/}
              <SideBar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              .{/* Sidebar --> <Sidebar />*/}
              <SideBar />
              {/* Recommended videos */}
              <RecommendedVideo />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
