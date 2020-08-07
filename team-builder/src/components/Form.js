import React, {useState} from 'react'
import { Jumbotron, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css'

function Form(props) {

    const [formData, setFormData] = useState(); 
    
    const onInputChange = event => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
    
    
        });
      };

    const handleSubmit = event => {
        event.preventDefault();
        props.setTeamMember([
            ...props.teamMember, formData
        ])
        console.log(formData);
    }

    return (
        <div className="container" >
            <Jumbotron>
            <h1 className="display-3">Welcome to Team Sith Lord, join the team below!</h1>
        <p className="lead">By adding yourself you will be submitting to the teachings of the Dark Side</p>
        <form onSubmit={handleSubmit}>
                    <lable>
                    Name:
                    <input onChange={onInputChange} type="text"  name="name" />
                    </lable>
                    <lable>
                    Email:
                    <input onChange={onInputChange}  type="text" name="email" />
                    </lable>
                    <lable>
                    Role:
                    <select onChange={onInputChange}  name="role">
                        <option>Choose an option below</option>
                        <option value="Back-End Engineer">Back-End Engineer</option>
                        <option value="Front-End Engineer">Front-End Engineer</option>
                        <option value="Data Scientist">Data Scientist</option>
                    </select>
                    </lable>
                    <input  type="submit" value="Add Team Member"/> 
                </form>
        <hr className="my-2" />
                <h2>Team Members</h2>
                {props.teamMember.map(member => (
                    <div key={member.id}>
                        <ul>
                            <li>Name: {member.name}</li>
                            <li>Email: {member.email}</li>
                            <li>Role: {member.role}</li>
                        </ul>
                    </div>

                ))}

            </Jumbotron> 
        </div>
    )
}

export default Form
