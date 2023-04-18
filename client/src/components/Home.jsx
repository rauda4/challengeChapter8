import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Player from "./Player";
import { Link, useNavigate } from "react-router-dom";

export default function Home (){

    const history = useNavigate();

    const handleEdit = (id, username, email, password, experience) => {
        localStorage.setItem('username', username)
        localStorage.setItem('email', email)
        localStorage.setItem('password', password)
        localStorage.setItem('experience', experience)
        localStorage.setItem('Id', id)
    }

    const handleDelete = (id) => {
        const index = Player.map((e)=>{
            return e.id
        }).indexOf(id);

        Player.splice(index,1);

        history('/');
    }

    return(
        <Fragment>
            <div style={{margin:"10rem"}}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Experience</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Player && Player.length > 0 ? Player.map((item) => {
                                return(
                                    <tr>
                                        <td>{item.username}</td>
                                        <td>{item.email}</td>
                                        <td>{item.password}</td>
                                        <td>{item.experience}</td>
                                        <td> 
                                            <Link to={'/update'}>
                                            <Button onClick={()=> handleEdit(item.id, item.username, item.email, item.password, item.experience)} style={{marginRight:"2px"}}>Edit</Button>
                                            </Link>
                                            <Button onClick={() => handleDelete(item.id)} > DELETE</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No data available"
                        }
                    </tbody>
                </Table>
                    <br>
                    </br>
                    <Link className="d-grid gap-2" to="/create">
                        <Button size="lg">Create</Button>
                    </Link>
            </div>
        </Fragment>
    )
}