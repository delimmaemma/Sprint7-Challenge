import React, {useEffect, useState} from 'react'
import * as Yup from 'yup'
import axios from 'axios'

import {form} from '../data/data'

const Pizza = () => {
    const [formState, setFormState] = useState(form)
    const [users, setUsers] = useState([])
    const [errors, setErrors] = useState({
        name: '',
        size: '',
        sauce: ''
    })

    const setButtonDisabled = () => {
        if(formState.name && formState.name.length >= 2) return !formState.name || !formState.size || !formState.sauce
        else return true
    }
    const formSubmit = e => {
        e.preventDefault()
        console.log('Submitted!')
        axios
            .post(`https://reqres.in/api/users`, formState)
            .then(res => {
                setUsers(res.data)
                console.log('success ', res)
            })
            .catch(err => {
                console.log(err.response)
            })
        setFormState(form)
    }

    const formSchema = Yup.object().shape({
        special: Yup
            .string(),
        sauce: Yup
            .string()
            .required('Must select sauce.'),
        size: Yup
            .string()
            .required('Must select size.'),
        name: Yup
            .string()
            .min(2, 'name must be at least 2 characters')
            .required('name must be at least 2 characters'),
    })

    const onChange = evt => {
        const name = evt.target.name
        const value = evt.target.value
        Yup
                .reach(formSchema, name)
                .validate(value)
                .then(() => {
                    setErrors({
                        ...errors, [name]: ''
                    })
                })
                .catch(err => {
                    setErrors({
                        ...errors, [name]: err.errors[0]
                    })
                })
        setFormState({
            ...formState, [name]: value
        })
    }

    useEffect(() => {
        formSchema.validate(formState)
            .then((valid) => {
                console.log('Form is valid!')
                setButtonDisabled(!valid)
            })
            .catch((err) => {
                console.error(err.errors)
            })
            .finally(console.log(formState))
    }, [formState])

    return(
        <div>
            <h1>Build Your Own Pizza</h1>
            <form id='pizza-form' onSubmit={formSubmit}>
                <label htmlFor='name-input'><h2>Name</h2>Required<br/><br/>
                        <input 
                            id='name-input'
                            name="name"
                            type="text"
                            value={formState.name}
                            onChange={onChange}
                            placeholder="Name"
                        />
                    </label>
                    {errors.name.length > 0 && <p className='error'>{errors.name}</p>}
                <label htmlFor='size-dropdown'><h2>Choice of Size</h2>Required<br/><br/>
                    <select
                        id='size-dropdown'
                        onChange={event => setFormState({...formState, size: event.target.value})}
                        defaultValue={formState.size}>
                            <option>Select</option>
                            <option id='S' value='S'>Small</option>
                            <option id='M' value='M'>Medium</option>
                            <option id='L' value='L'>Large</option>
                            <option id='XL' value='XL'>Extra Large</option>
                    </select>
                </label>
                {errors.size.length > 0 && <p className='error'>{errors.size}</p>}
                <label htmlFor='sauce'><h2>Choice of Sauce</h2>Required<br/><br/>
                    <input
                        type='radio'
                        id='Red'
                        value='Classic Red'
                        onChange={event => setFormState({...formState, sauce: event.target.value})}
                    />
                    Classic Red<br/>
                    <input
                        type='radio'
                        id='Garlic'
                        value='Garlic Parmesan'
                        onChange={event => setFormState({...formState, sauce: event.target.value})}
                    />
                    Garlic Parmesan<br/>
                    <input
                        type='radio'
                        id='BBQ'
                        value='BBQ'
                        onChange={event => setFormState({...formState, sauce: event.target.value})}
                    />
                    BBQ<br/>
                    <input
                        type='radio'
                        id='Alfredo'
                        value='Creamy Alfredo'
                        onChange={event => setFormState({...formState, sauce: event.target.value})}
                    />
                    Creamy Alfredo
                </label>
                {errors.sauce > 0 && <p className='error'>{errors.sauce}</p>}
                <label htmlFor='toppings'><h2>Choice of Toppings</h2>
                <input
                        type='checkbox'
                        value='Pepperoni'
                        id='topping1'
                        onClick={() => setFormState({...formState, topping1: true})}
                    />
                    Pepperoni
                    <input
                        type='checkbox'
                        value='Tomatoes'
                        id='topping2'
                        onClick={() => setFormState({...formState, topping2: true})}
                    />
                    Tomatoes<br/>
                    <input
                        type='checkbox'
                        value='Onions'
                        id='topping3'
                        onClick={() => setFormState({...formState, topping3: true})}
                    />
                    Onions
                    <input
                        type='checkbox'
                        value='Three Cheese'
                        id='topping4'
                        onClick={() => setFormState({...formState, topping4: true})}
                    />
                    Three Cheese Blend<br/>
                    <input
                        type='checkbox'
                        value='Ham'
                        id='topping5'
                        onClick={() => setFormState({...formState, topping5: true})}
                    />
                    Ham
                    <input
                        type='checkbox'
                        value='Jalapeno'
                        id='topping6'
                        onClick={() => setFormState({...formState, topping6: true})}
                    />
                    Jalapeno
                    <input
                        type='checkbox'
                        value='Pineapple'
                        id='topping7'
                        onClick={() => setFormState({...formState, topping7: true})}
                    />
                    Pineapple
                </label>
                <label htmlFor='special-text'><h2>Special Instructions</h2>
                    <input
                        id='special-text'
                        name='special'
                        type='text'
                        placeholder='Anything else?'
                        value={formState.special}
                        onChange={onChange}
                    />
                </label>
                <label htmlFor='order-button'><br/><br/>
                    <input
                        type='submit'
                        id='submit'
                        name='submit'
                        value='Add to Order'
                        disabled={setButtonDisabled()}
                    />
                </label>
            </form>
            <pre>{JSON.stringify(users, null, 2)}</pre>
        </div>

    )
}

export default Pizza