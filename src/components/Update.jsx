import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
function Update() {
    const [value, setValue] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const navigate = useNavigate();

    const {id} = useParams();
    useEffect(() => {
        axios.get('http://localhost:8080/employee/' + id)
            .then(res => (
                setValue(res.data)
            ))
            .catch(err => console.log(err));
    }, []);

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8080/employee/' + id, value)
            .then(res => {
                navigate('/');
            }).catch(err => {
            console.log(err)
        })
    };

    return(
        <div className={'d-flex w-100 justify-content-center align-items-center bg-light'}>
            <div className={'w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'}>
                <h1>Update User</h1>
                <form onSubmit={handleUpdate}>
                    <div className={'mb-2'}>
                        <label htmlFor={'name'}>Name</label>
                        <input type={'text'} name={'name'}
                               className={'form-control'}
                               placeholder={'Enter Name'}
                               value={value.name}
                               onChange={event => setValue({...value, name: event.target.value})}/>
                    </div>
                    <div className={'mb-2'}>
                        <label htmlFor={'name'}>Email</label>
                        <input type={'email'} name={'email'}
                               className={'form-control'}
                               placeholder={'Enter Email'}
                               value={value.email}
                               onChange={event => setValue({...value, email: event.target.value})}/>
                    </div>
                    <div className={'mb-2'}>
                        <label htmlFor={'name'}>Phone</label>
                        <input type={'text'} name={'phone'}
                               className={'form-control'}
                               placeholder={'Enter Phone'}
                               value={value.phone}
                               onChange={event => setValue({...value, phone: event.target.value})}/>
                    </div>
                    <button className={'btn btn-success'}>Update</button>
                    <Link to={'/'} className={'btn btn-primary m-3'}>Black</Link>
                </form>
            </div>
        </div>
    )
}

export default Update;