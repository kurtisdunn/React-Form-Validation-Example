import React from 'react';
import styles from './index.scss';

import ContactPost from '../../api/contact/post';

import Button from '../../components/button';
import Form from '../../components/form';
import Input from '../../components/input';
import Select from '../../components/select';
import Textarea from '../../components/textarea';

// onChange function etc
function someFunction(){
  return null;
}

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log('Home extends React.Component: ', props);
  }
  render() {
    return (
      <div className="home">
        <h1>React Form Valdation Example</h1>
        <Form method={ ContactPost }>
          <Select title={'Title'} onChange={ someFunction } name={'title'} validator={'required'} options={[{name:'Mr', option:'mr'}, {name:'Mrs', option:'mrs'}] }/>
          <Input title={'First Name'} name={'firstName'} validator={'required'} />
          <Input title={'Last Name'} name={'lastName'} validator={'required'}/>
          <Input title={'Email'} name={'email'} type={'email'} validator={'required, email'} />

          <Textarea rows={'10'} title={'Message'} name={'message'} validator={'required'} />

          <Button value={'Send!'} class={'btn-submit'} type={'submit'} />
        </Form>
      </div>
    );
  }
}
