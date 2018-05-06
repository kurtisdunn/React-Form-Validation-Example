# React-Form-Validation-Example
Quick react form validation example with error handling.


### Build it

```bash
webpack
```

### Develop it

```bash
npm run dev

```

### Validating a component

```js
<Form method={ ContactPost }>
  <Input title={'First Name'} name={'firstName'} validator={'required'} />
  <Input title={'Last Name'} name={'lastName'} validator={'required'}/>
  <Input title={'Email'} name={'email'} type={'email'} validator={'required, email'} />
  <Textarea rows={'10'} title={'Message'} name={'message'} validator={'required'} />
  <Button value={'Send!'} class={'btn-submit'} type={'submit'} />
</Form>

```
