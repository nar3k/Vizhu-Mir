import React from 'react';
import  {Image,Container,Header,Card,Divider,Grid,List} from 'semantic-ui-react'




const lenses = [
  {
    img:'oasis_hydraluxe',
    meta:'Гипер комфортные линзы',
    header:'OASYS 1-DAY with HydraLuxe®',
    description:
      ['Силикон-гидрогелевые линзы',
      'Дневное ношение',
      'Ежедневная замена',
      'УФ-защита'],
    sizes:[30],
  },
  {
    img:'tru_eye',
    meta:'Лучшее сочетание цена/качество',
    header:'1-DAY ACUVUE® TruEye®',
    description:
      ['Силикон-гидрогелевые линзы',
      'Дневное ношение',
      'Ежедневная замена',
      'УФ-защита'],
    sizes:[30,90,180],
  },
  {
    img:'moist_vanilla',
    meta:'Однодневные линзы',
    header:'1-DAY ACUVUE® MOIST',
    description:
      ['Гидрогелевые линзы',
      'Дневное ношение: замена через 2 недели',
      'Пролонгированное ношение: замена через 1 неделю',
      'УФ-защита'],
    sizes:[30,90,180],
  },
  {
    img:'oasis_vanilla',
    meta:'Удобные двухнедельные линзы',
    header:'OASYS with HYDRACLEAR®',
    description:
      ['Силикон-гидрогелевые линзы',
      'Дневное ношение: замена через 2 недели',
      'Пролонгированное ношение: замена через 1 неделю',
      'УФ-защита'],
    sizes:[6,12,24],
  },
  {
    img:'moist_astigmatism',
    meta:'Для астигматизма',
    header:'1-DAY ACUVUE® MOIST for ASTIGMATISM',
    description:
      ['Гидрогелевые линзы',
      'Дневное ношение: замена через 2 недели',
      'Пролонгированное ношение: замена через 1 неделю',
      'УФ-защита'],
    sizes:[30,90],
  },
  {
    img:'oasis_astigmatism',
    meta:'Для астигматизма',
    header:'ACUVUE® OASYS for ASTIGMATISM',
    description:
      ['Силикон-гидрогелевые линзы',
      'Дневное ношение: замена через 2 недели',
      'Пролонгированное ношение: замена через 1 неделю',
      'УФ-защита'],
    sizes:[6],
  },
  {
    img:'acuvue_define_red',
    meta:'Бьюти линзы',
    header:'1-DAY ACUVUE® DEFINE® NATURAL SHIMMER®',
    description:
      ['Гидрогелевые линзы',
      'Дневное ношение',
      'Ежедневная замена',
      'УФ-защита'],
    sizes:[30],
  },
  {
    img:'acuvue_define_blue',
    meta:'Бьюти линзы',
    header:'1-DAY ACUVUE® DEFINE® NATURAL SPARKLE',
    description:
      ['Гидрогелевые линзы',
      'Дневное ношение',
      'Ежедневная замена',
      'УФ-защита'],
    sizes:[30],
  },
  {
    img:'acuvue2',
    meta:'Двухнедельные линзы',
    header:'ACUVUE® 2',
    description:
      ['Гидрогелевые линзы',
      'Дневное ношение: замена через 2 недели',
      'Пролонгированное ношение: замена через 1 неделю',
      'УФ-защита'],
    sizes:[30],
  },
]

const Contacts = () => (
  <div >
    <Container text>
      <Header as='h1'>Контактные линзы!</Header>
    </Container>
    <Container >
      В наших магазинах представлены контактные линзы ACUVUE прооизводства компании «Johnson & Johnson Vision Care».
      В наших магазина всегда имеется широкий выбор линз по всем параметрам.
      В в случае отсутвия нужных вам линз, мы закажем их и привезем за 3 дня.
    </Container>
    <Divider/>

    <Container text>
      <Grid columns={2} stackable centered stretched>
        {
          lenses.map((lense,key)=>(
            <Grid.Column>
            <Card fluid
              >
              <Card.Content>
                  <Image size='medium'  bordered src={"https://s3.eu-west-2.amazonaws.com/nrk-files/static/lenses/"+lense.img +".png"}/>
              <Card.Header>{lense.header}</Card.Header>
              <Card.Meta>{lense.meta}</Card.Meta>
              <Card.Description>
                <List as='ul'>
                  {
                    lense.description.map((bullet,key)=>(
                      <List.Item as='li'>{bullet}</List.Item>
                    ))
                  }
                </List>
              </Card.Description>

              </Card.Content>

              <Card.Content extra>
                {lense.sizes.join(',') + ' линз в упаковке'}
              </Card.Content>



            </Card>
            </Grid.Column>
          ))
        }
      </Grid>
    </Container>
  </div>
);

export default Contacts;
