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
        <h1 className="mb3">React Form Valdation Example</h1>
        <Form method={ ContactPost }>
          {/* <Select title={'Title'} onChange={ someFunction } name={'title'} validator={'required'} options={[{name:'Mr', option:'mr'}, {name:'Mrs', option:'mrs'}] }/> */}
          {/* <div className="row"> */}
            {/* <div className="col-md-6 mb-3"> */}
              <Input title={'First Name'} name={'firstName'} validator={'required'} />
            {/* </div> */}
            {/* <div className="col-md-6 mb-3"> */}
              <Input title={'Last Name'} name={'lastName'} validator={'required'}/>
            {/* </div> */}
          {/* </div> */}
          {/* <div className="mb-3"> */}
            <Input title={'Email'} name={'email'} type={'email'} validator={'required, email'} />
          {/* </div> */}
          {/* <div className="mb-3"> */}
            <Input title={'Address'} name={'address'} validator={'required'} />
          {/* </div> */}
          {/* <div className="mb-3"> */}
            <Input title={'Address 2'} name={'address2'} />
          {/* </div> */}
          {/* <div className="mb-3"> */}
            <Input title={'Email'} name={'email'} type={'email'} validator={'required, email'} />
          {/* </div> */}
          {/* <div className="mb-3"> */}
            <Textarea rows={'10'} title={'Message'} name={'message'} validator={'required'} />
          {/* </div> */}

            <Button value={'Send!'} class={'btn-submit'} type={'submit'} />

        </Form>
      </div>
    );
  }
}
