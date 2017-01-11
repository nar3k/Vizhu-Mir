import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuTree from './MenuTree'
import {Button, Menu, Icon,Container} from 'semantic-ui-react'
import Link from 'react-router/Link';
import Miss from 'react-router/Miss';
import Match from 'react-router/Match'
import Redirect from 'react-router/Redirect'


const NoMatch = ({ location }) => (
  <div className='ui inverted red raised very padded text container segment'>
    <strong>Error!</strong> No route found matching:
    <div className='ui inverted black segment'>
      <code>{location.pathname}</code>
    </div>
  </div>
);


class App extends Component {
 constructor(props) {
   super(props);

   this.state = {
     activeItem: 'home',
   };

   this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
   // leanpub-start-insert
   //this.redirectPath = this.redirectPath.bind(this);
   // leanpub-end-insert
 }

 handleMenuItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    return (
      <div className="App">
        <Container fluid>
          <Menu inverted attached='top' size='large' pointing color='blue' fluid>

              {MenuTree.map((menuItem,key) => (


                  <Menu.Item as={Link} to={menuItem.to} name={menuItem.name} key={key}
                    onClick={this.handleMenuItemClick}
                    active={this.state.activeItem===menuItem.name}>
                    <Icon name={menuItem.icon} /> {menuItem.name}
                </Menu.Item>

            ))}
          </Menu>
        </Container>
        <div className='spacer row' />
        <div className='row'>
        {
          MenuTree.map((menuItem,key) => (
          <Match pattern={menuItem.to} component={menuItem.component}/>
        ))
      }
          <Match exactly pattern='/' render={() => (
            <Redirect
              to={MenuTree[0].to}
            />
          )} />
              <Miss component={NoMatch} />
          </div>
      </div>
    );
  }
}

export default App;
