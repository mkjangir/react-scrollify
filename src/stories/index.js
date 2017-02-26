import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Container from '../components/Container';
import Button from '../index';

storiesOf('Container', module)
  .add('default view', () => (
    <Container width="100px"><div style={{width: '300px', height: '500px'}}>Manish Jangir Manish Jangir Manish JangirManish JangirManish Jangir Manish JangirManish Jangir</div></Container>
  ))
  .add('some emojies as the text', () => (
    <Button>😀 😎 👍 💯</Button>
  ))
  .add('custom styles', () => {
    const style = {
      fontSize: 20,
      textTransform: 'uppercase',
      color: '#FF8833',
    };
    return (
      <Button style={ style }>Hello</Button>
    );
  });
