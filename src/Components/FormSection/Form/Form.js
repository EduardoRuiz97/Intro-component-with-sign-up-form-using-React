import React, { useReducer, useState } from "react";
import Button from '../../UI/Button';
import alert from '../../../images/icon-error.svg';

import classes from './Form.module.css';

const inputNameReducer = (state, action) => {
  if (action.type === 'INPUT_USER') {
    return {value: action.val, isValid: action.val.trim().length > 0}
  }
  if (action.type === 'INPUT_BLUR') {
    return {value: state.value, isValid: state.value.trim().length > 0}
  }
  return {value: '', isValid: false}
}

const lastNameReducer = (state, action) => {
  if (action.type === 'INPUT_USER') {
    return {value: action.val, isValid: action.val.trim().length > 0}
  }
  if (action.type === 'INPUT_BLUR') {
    return {value: state.value, isValid: state.value.trim().length > 0}
  }
  return {value: '', isValid: false}
}

const emailReducer = (state, action) => {
  if (action.type === 'INPUT_USER') {
    return {value: action.val, isValid: action.val.includes('@')}
  }
  if (action.type === 'INPUT_BLUR') {
    return {value: state.value, isValid: state.value.includes('@')}
  }
  return {value: '', isValid: false}
}

const passwordReducer = (state, action) => {
  if (action.type === 'INPUT_USER') {
    return {value: action.val, isValid: action.val.trim().length > 6}
  }
  if (action.type === 'INPUT_BLUR') {
    return {value: state.value, isValid: state.value.trim().length > 6}
  }
  return {value: '', isValid: false}
}

const Form = () => {

  const [formIsValid, setFormIsValid] = useState();

  const [name, dispatchName] = useReducer(inputNameReducer, {
    value: '',
    isValid: null,
  })

  const [lastName, dispatchLastName] = useReducer(lastNameReducer, {
    value: '',
    isValid: null,
  })

  const [emailState, dispatchEmailState] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  })

  const [passwordState, dispatchPasswordState] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  })


  const nameInputHandler = (event) => {
    dispatchName({type: 'INPUT_USER', val: event.target.value});
  }

  const nameBlurHandler = () => {
    dispatchName({type: 'INPUT_BLUR'});
  }

  const lastNameInputHandler = (event) => {
    dispatchLastName({type: 'INPUT_USER', val: event.target.value});
  }

  const lastNameBlurHandler = () => {
    dispatchEmailState({type: 'INPUT_BLUR'});
  }

  const emailInputHandler = (event) => {
    dispatchEmailState({type: 'INPUT_USER', val: event.target.value});
  }

  const emailBlurHandler = () => {
    dispatchEmailState({type: 'INPUT_BLUR'});
  }

  const passwordInputHandler = (event) => {
    dispatchPasswordState({type: 'INPUT_USER', val: event.target.value});
  }

  const passwordBlurHandler = () => {
    dispatchPasswordState({type: 'INPUT_BLUR'});
  }



  const submitHandler = (event) => {
    event.preventDefault();
    setFormIsValid(name.value.trim().length > 0 && lastName.value.trim().length > 0 && emailState.value.includes('@') && passwordState.value.trim().length > 6);

    const userData = {
      name: name.value,
      lastName: lastName.value,
      email: emailState.value,
      password: passwordState.value,
    }

    console.log(userData)

    name.value = '';
    lastName.value = '';
    emailState.value = '';
    passwordState.value = '';
  }


  return (
    <div className={classes['form-container']}>
      
      <form className={classes['form-container__form']} onSubmit={submitHandler}>
          <div className={`${classes['form-container__form__item']} ${formIsValid === false ? classes['wrong-input']:''}`}>
            <input type='text' placeholder="First Name" onChange={nameInputHandler} onBlur={nameBlurHandler} value={name.value}></input>
            {name.isValid === false ? <img src={alert} alt='error'></img>  : ''}
          </div>

          <div className={`${classes['form-container__form__item']} ${formIsValid === false ? classes['wrong-input']:''}`}>
            <input type='text' placeholder="Last Name" onChange={lastNameInputHandler} onBlur={lastNameBlurHandler} value={lastName.value}></input>
            {lastName.isValid === false ? <img src={alert} alt='error'></img>  : ''}
          </div>

          <div className={`${classes['form-container__form__item']} ${formIsValid === false ? classes['wrong-input']:''}`}>
            <input type='email' placeholder="Email Address" onChange={emailInputHandler} onBlur={emailBlurHandler} value={emailState.value}></input>
            {emailState.isValid === false ? <img src={alert} alt='error'></img>  : ''}
          </div>

          <div className={`${classes['form-container__form__item']} ${formIsValid === false ? classes['wrong-input']:''}`}>
            <input type='password' placeholder="Password" onChange={passwordInputHandler} onBlur={passwordBlurHandler} value={passwordState.value}></input>
            {passwordState.isValid === false ? <img src={alert} alt='error'></img>  : ''}
          </div>

          <Button className={classes['form-container__form__btn']}>Claim your free trial</Button>
      </form>

      <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>

    </div>
  )
}


export default Form;