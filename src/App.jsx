import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Main, BlogPage, ProjectPage } from './pages'
import ShouldscrollToTop from './components/BackToTop/ShouldscrollToTop';
import ScrollToTop from './utils/ScrollToTop'

import './App.css'

function App() {
  return (
    <div className="app">
      <Router>
        <ScrollToTop/>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/blog" exact component={BlogPage} />
          <Route path="/projects" exact component={ProjectPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
      <ShouldscrollToTop/>
    </div>
  );
}

export default App;
