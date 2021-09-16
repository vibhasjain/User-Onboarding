import React, {useState, useEffect} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import schema from './validation/FormSchema';
import * as yup from 'yup';
import User from './components/User';
import { ValidationError } from 'yup';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  tos: false
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  tos: ''
}

const initialUsers = [];
const initialDisabled = true;

function App() {

  const [users,setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
    .then(res => {
      setUsers(res.data.data)
      // console.log(users[0].email);
    })
  }

  const validate = (name,value) => {
    yup.reach(schema,name)
      .validate(value)
      .then(() => setFormErrors({...formErrors,[name]:''}))
      .catch(err => setFormErrors({...formErrors, [name]:err.errors[0]}))
  }

  const inputChange = (name,value) => {
    validate(name,value)
    setFormValues({...formValues, [name]:value})
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim()
    }
    postNewUser(newUser)
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then( res => {
      setUsers([res.data,...users])
    })
    .catch(err => console.error(err))
    console.log('hello');
    setFormValues(initialFormValues);
    document.getElementById("formy").reset();
    formValues.tos='';
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <br></br>
      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      {users.map( user => {
        // console.log(user.email);
        return (
        <User key={user.id} props={user}/>
        )
      })}
    </div>
  );
}

export default App;
