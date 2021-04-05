import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './components/NotFound';
import Layout from './components/Layout';
import { Provider } from 'react-redux';
import store from './redux/store';
// import { initial, intitialType, intitialColor } from './redux/actions/ShopAction';

// store.dispatch(intitialColor());
// store.dispatch(intitialType());
// store.dispatch(initial());

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route component={NotFound} />
           </Switch>
          </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
