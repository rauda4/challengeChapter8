import { Button, FormControl, InputGroup, Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Player from "./Player";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Home (){

     const handleEdit = (id, username, email, password, experience) => {
        // get harus sama dengan getItem di folder
       localStorage.setItem('Username', username)
       localStorage.setItem('Email', email)
       localStorage.setItem('Password', password)
       localStorage.setItem('Experience', experience)
       localStorage.setItem('Id', id)
      
}


    const history = useNavigate();
    
    const handleDelete = (id) => {
        const index = Player.map((e)=>{
            return e.id
        }).indexOf(id);
        // splice adalah fungsi delete
        Player.splice(index,1);

        history('/');
    }

    const [search, setSearch] = useState('')
    console.log(search);

    return(
        <>
            <div style={{margin:"10rem"}}>
            
                <InputGroup>
                    <FormControl 
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search Data"/>
                </InputGroup>
                <br />
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
                        {/* player.filter = fitur search */}
                        {/* player.map = fitur getuser */}
                    {Player.filter((item)=> {
                        return search.toLowerCase() === '' ? item : item.username.toLowerCase().includes(search)
                    }).map((item) => {
                        return(
                            <tr key={item.id}>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>******</td>
                                <td>{item.experience}</td>
                                <td> 
                                    <Link to={'/edit'}>
                                        <Button 
                                            onClick={()=> handleEdit(
                                            item.id, 
                                            item.username, 
                                            item.email, 
                                            item.password, 
                                            item.experience)} 
                                            style={{marginRight:"2px"}}>Edit
                                        </Button>
                                    </Link>
                                    <Button onClick={() => handleDelete(item.id)} > DELETE</Button>
                                </td>
                            </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                    <br>
                    </br>
                    <Link className="d-grid gap-2" to="/create">
                        <Button size="lg">Create</Button>
                    </Link>
            </div>
        </>
    )
}