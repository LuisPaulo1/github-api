import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import GithubSearch from 'pages/GithubSearch';
import Navbar from 'components/Navbar';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/githubsearch">
        <GithubSearch />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;