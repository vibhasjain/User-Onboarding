import React from 'react';

export default function Form(props) {

    const { values,submit,change,disabled,errors } = props

    const onSubmit = event => {
        event.preventDefault();
        submit()
    }

    const onChange = event => {
        const { name, value, checked, type } = event.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change (name, valueToUse)
    }

    return (

        <form onSubmit={onSubmit} id="formy">
        <label> First name
        <input
            type="text"
            name="name"
            value={values.name}
            onChange={onChange}
            />
        </label>

        <label> Email
        <input
            type="text"
            name="email"
            value={values.email}
            onChange={onChange}
            />
        </label>

        <label> Password
        <input
            type="password"
            name="password"
            value={values.password}
            onChange={onChange}
            />
        </label>

        <label> Terms of Service
        <input
            type="checkbox"
            name="tos"
            value={values.tos}
            onChange={onChange}
            />
        </label>
        <button disabled={disabled} id="submit">Submit</button>
        <div style={{color: "red"}}>
        <p>{errors.name}</p>
        <p>{errors.email}</p>
        <p>{errors.password}</p>
        <p>{errors.tos}</p>
        </div>
        </form>
        
    )

}