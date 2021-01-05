import React from 'react'
import { Button, Card } from 'semantic-ui-react'


const CardExampleGroups = (props) => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>    {props.opening_hours} , {props.rating} </Card.Meta>
        <Card.Description>
    {props.formatted_address}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui button'>
          <Favourite/>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
    )
