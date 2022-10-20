import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch } from "react-redux";
import st from './SignUp.module.css';
import {postUser} from '../../actions/index';




export default function SignUp(){

    const history = useNavigate();
    const dispatch = useDispatch();

    function validate (state){
        let errors = {};
    
        if(!state.name){
            errors.name = undefined
        } else if(!state.email){
            errors.email = undefined
        } else if(!state.password){
            errors.password = undefined
        } 
        return errors;
    };
    const [errors, setErrors] = React.useState({});
    const [state, setState] = React.useState({
        name: '',
        email: '',
        role: 'User',
        password: '',
        img: '',
        isVerified: false
    });

    const handleChanges = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...state,
            [e.target.name]: e.target.value
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postUser(state));
        alert('¡El Usuario fue creado con exito!');
        setState({name: '', email: '', password: '', img: ''});
        history('/');
    };

    return(
        <div className={st.base} >
            <form onSubmit={handleSubmit} >
                <Link className={null} to={'/'}>Volver</Link>
                <label for='name' >Full Name:
                    <input id='name' type="text" name="name" value={state.name} onChange={handleChanges}/>
                </label>

                <label for='email' >e-mail:
                    <input id='email' type="text" name="email" value={state.email} onChange={handleChanges}/>
                </label>

                <label for='password' >Password:
                    <input id='password' type="text" name="password" value={state.password} onChange={handleChanges}/>
                </label>
                <button type="submit">¡Crear Usuario!</button>
            </form>
        </div>
    );
};
