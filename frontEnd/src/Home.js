import React from 'react';
import {Button, Menu, Image,Container,Header,Card,Divider,Grid} from 'semantic-ui-react'
import Link from 'react-router/Link';


const cardContent = [
  {header:'Купить контактные линзы',to:'/lenses',img:'static/linzi.jpg',comment:'В наших салонах представлены линзы для зрения Johnson & Johnson ACUVUE, и другие. Также у нас вы найдете цветные контактные линзы!'},
  {header:'Купить очки',to:'/contacts',img:'static/o4ki.jpg',comment:'В наших салонах представлен широкий выбор очков для зрения, а также солнцезащитных очков'},
  {header:'Проверить зрение',to:'/contacts',img:'static/proverka.png',comment:'У нас вы можете проверить свое зрение для подбора очков или контактных линз'},
  {header:'Починить очки',to:'/contacts',img:'static/remont.jpg',comment:'Сломались очки? Не беда! Наша мастерская в быстрые сроки починит ваши очки'},
]


const Home = () => (
  <div >
  <Container text>
    <Header as='h1'>Добро пожаловать!</Header>
  </Container>
  <Container >
    Сеть салонов оптики «ВИЖУ МИР» - это динамично развивающаяся компания основанная в 2010 году. Тысячи людей доверяют нам самое ценное – свое зрение. Наша задача помочь вам лучше видеть и лучше выглядеть. Мы гарантируем высокое качество ассортимента и профессионализм наших сотрудников. Мы сделали выбор очков и контактных линз простым и удобным.
 В салонах оптики «ВИЖУ МИР» вы можете получить полный комплекс офтальмологических услуг:
  </Container>
  <Divider/>
  <Container text>
    <Grid columns={2} stackable centered stretched>
      {
        cardContent.map((card,key)=>(
          <Grid.Column>
          <Card as={Link} fluid
            to={card.to} >
            <Card.Content>
                <Image size='medium' shape='circular' bordered src={"https://s3.eu-west-2.amazonaws.com/nrk-files/"+card.img}/>
            <Card.Header>{card.header}</Card.Header>
            <Card.Description>{card.comment}</Card.Description>

            </Card.Content>
          </Card>
          </Grid.Column>
        ))
      }
    </Grid>
  </Container>
  </div>
);

export default Home;
