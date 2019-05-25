import React, { Component } from 'react';
import 'typeface-roboto';
import Layout from './Main/Layout'
import BurgerBuilder from './Main/BurgerBuilder/BurgerBuilder'

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Layout >
            <BurgerBuilder />
          </Layout>
      </React.Fragment>
    );
  }
}

export default App;
