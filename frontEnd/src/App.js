import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuTree from './MenuTree'
import {Button, Menu, Icon,Container,Divider,Image,Header,Grid,Segment} from 'semantic-ui-react'
import Link from 'react-router/Link';
import Miss from 'react-router/Miss';
import Match from 'react-router/Match'
import Redirect from 'react-router/Redirect'


const NoMatch = ({ location }) => (
  <div className='ui inverted red raised very padded text container segment'>
    <strong>Ошибка</strong> К сожалению, у нас нет такой страницы:(
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
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column>
            <Image size='small' shape='rounded' floated='left'  src={"https://s3.eu-west-2.amazonaws.com/nrk-files/"+'static/logo.png'}/>
           </Grid.Column>
           <Grid.Column only='computer'>
                <Header size='large' color='red'>
                  Сеть Салонов оптики <br/>
                    «Вижу Мир» <br/>
                Очки и контактные линзы</Header>
            </Grid.Column>
            <Grid.Column floated='right'>
              <Header size='tiny' color='black' floated='right'>
                <a href="tel:+7(926)100-15-12">+7(926)100-15-12</a> <br/>
                <a href="tel:+7(905)550-02-55">+7(926)550-02-55</a> <br/>
                <a href="tel:+7(926)317-31-13">+7(926)317-31-13</a><br/>
              </Header>
          </Grid.Column>
          </Grid.Row>
            </Grid>
        <Container fluid>
          <Menu inverted size='large' pointing  fluid compact stackable>

              {MenuTree.map((menuItem,key) => (


                  <Menu.Item as={Link} to={menuItem.to} name={menuItem.name} key={key}
                    onClick={this.handleMenuItemClick}
                    active={this.state.activeItem===menuItem.name}>
                    <Icon name={menuItem.icon} /> {menuItem.name}
                </Menu.Item>

            ))}
          </Menu>
        </Container>
        <Divider/>
        {
          MenuTree.map((menuItem) => (
          <Match pattern={menuItem.to} component={menuItem.component}/>
        ))
      }
          <Match exactly pattern='/' render={() => (
            <Redirect
              to={MenuTree[0].to}
            />
          )} />
              <Miss component={NoMatch} />
            <Divider/>
            <Segment.Group horizontal>
              <Segment>2010-2016</Segment>
              <Segment></Segment>
              <Segment>ООО "Вижу мир"</Segment>
            </Segment.Group>
    </div>
    );
  }
}

export default App;
