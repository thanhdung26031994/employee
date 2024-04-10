import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
function Read() {
    const [list, setList] = useState([]);

    const {id} = useParams();
    useEffect(() => {
        axios.get('http://localhost:8080/employee/' + id)
            .then(res => (
                setList(res.data)
            ))
            .catch(err => console.log(err));
    }, []);
    return(
        <div className={'d-flex w-100 vh-100 justify-content-center align-items-center bg-light'}>
            <div className={'w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'}>
                <h3>Detail of User</h3>
                <div className={'mb-2'}>
                    <strong>Name: {list.name}</strong>
                </div>
                <div className={'mb-2'}>
                    <strong>Email: {list.email}</strong>
                </div>
                <div className={'mb-2'}>
                    <strong>Phone: {list.phone}</strong>
                </div>
                <Link to={`/update/${id}`} className={'btn btn-success'}>Edit</Link>
                <Link to={'/'} className={'btn btn-primary m-3'}>Black</Link>
            </div>
        </div>
    )
}

export default Read;