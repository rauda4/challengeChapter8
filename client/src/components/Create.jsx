import React, {Fragment, useState} from "react";
import { Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Player from "./Player";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

export default function Create (){

        const [username,setUsername] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [experience, setExperience] = useState("");

        let history = useNavigate();

        const handleSubmit = (e) => {
            e.preventDefault();

            const ids = uuid();
            let uniqueId = ids.slice(0,0);

            const un = username;
            const em = email;
            const ps = password;
            const ex = experience;

            Player.push({id: uniqueId, username : un, email : em, password : ps, experience : ex});

            history("/");
        }

    return(
        <Fragment>
        <Form className="d-grid gap-2" style={{margin:"15rem"}}>
            <h1>Create Player</h1>
            <Form.Group className="mb-3" controlId="forUsername">
                <Form.Control type="text" placeholder="Enter Username" required onChange={(e) => setUsername(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="forEmail">
                <Form.Control type="text" placeholder="Enter Email" required onChange={(e) => setEmail(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="forPassword">
                <Form.Control type="text" placeholder="Enter Password" required onChange={(e) => setPassword(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="forExperience">
                <Form.Control type="text" placeholder="Enter Experience" required onChange={(e) => setExperience(e.target.value)}>
                </Form.Control>
            </Form.Group>

            <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
        </Form>
        </Fragment>

    )

}
