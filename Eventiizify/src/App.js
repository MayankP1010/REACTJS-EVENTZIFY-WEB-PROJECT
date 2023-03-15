import React from 'react';
import './style.css';
import { Route, Switch, Link } from 'react-router-dom';
import Reactweb from './Reactweb';
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/:id" component={ProductList} />
        </Switch>
      </div>
    );
  }
}
const ProductList = props => {
    console.log("hello niha",props.match.params.id)
  return <Reactweb uId={props.match.params.id}/>;
};

// https://react-route-match-nested-8my9uz.stackblitz.io/13
