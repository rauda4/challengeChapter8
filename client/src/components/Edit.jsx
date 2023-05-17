import React, {Fragment, useEffect, useState} from "react";
import { Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Player from "./Player";
import { useNavigate } from "react-router-dom";


export default function Edit(){
    
        const [username, setUsername] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [experience, setExperience] = useState("");
        const [id, setId] = useState("");

        let history = useNavigate();

        const index = Player.map((e)=>{
            return e.id
        }).indexOf(id);

        const handleSubmit = (e) => {
            e.preventDefault();

            let a = Player[index];
             a.username = username;
             a.email = email;
             a.password = password;
             a.experience = experience;

            history("/");
        }

        useEffect(() =>{
            setUsername(localStorage.getItem('Username'))
            setEmail(localStorage.getItem('Email'))
            setPassword(localStorage.getItem('Password'))
            setExperience(localStorage.getItem('Experience'))
            setId(localStorage.getItem('Id'))
        },[])

    
    
        return(
            <Fragment>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                <h1>Update Player</h1>
                <Form.Group className="mb-3" controlId="forUsername">
                    <Form.Control type="text" placeholder="Enter Username" value={username} required onChange={(e) => setUsername(e.target.value)}>
                    </Form.Control>
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="forEmail">
                    <Form.Control type="text" placeholder="Enter Email" value={email} required onChange={(e) => setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="forPassword">
                    <Form.Control type="text" placeholder="Enter Password" value={password} required onChange={(e) => setPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="forExperience">
                    <Form.Control type="text" placeholder="Enter Experience" value={experience} required onChange={(e) => setExperience(e.target.value)}>
                    </Form.Control>
                </Form.Group>
    
                <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
            </Form>
            </Fragment>
    
        )
}