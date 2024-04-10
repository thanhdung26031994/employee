import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
function Create() {
    const [value, setValue] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/employee', value)
            .then(res => {
                navigate('/');
            })
            .catch(err => {
                console.log(err)
            })
    }

    return(
        <div className={'d-flex w-100 justify-content-center align-items-center bg-light'}>
            <div className={'w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'}>
                <h1>Add a User</h1>
                <form onSubmit={handleSubmit}>
                    <div className={'mb-2'}>
                        <label htmlFor={'name'}>Name</label>
                        <input type={'text'} name={'name'} className={'form-control'} placeholder={'Enter Name'}
                                onChange={event => setValue({...value, name: event.target.value})}/>
                    </div>
                    <div className={'mb-2'}>
                        <label htmlFor={'name'}>Email</label>
                        <input type={'email'} name={'email'} className={'form-control'} placeholder={'Enter Email'}
                               onChange={event => setValue({...value, email: event.target.value})}/>
                    </div>
                    <div className={'mb-2'}>
                        <label htmlFor={'name'}>Phone</label>
                        <input type={'text'} name={'phone'} className={'form-control'} placeholder={'Enter Phone'}
                               onChange={event => setValue({...value, phone: event.target.value})}/>
                    </div>
                    <button className={'btn btn-success'}>Submit</button>
                    <Link to={'/'} className={'btn btn-primary m-3'}>Black</Link>
                </form>
            </div>
        </div>
    )
}

export default Create;