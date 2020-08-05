import React, {useState} from 'react'

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
        <div>
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
                    <option value="Back-End Engineer">Back-End Engineer</option>
                    <option value="Back-End Engineer">Front-End Engineer</option>
                    <option value="Back-End Engineer">Data Scientist</option>
                </select>
                </lable>
                <input type="submit" value="Add Team Member"/>
            </form>
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

            
        </div>
    )
}

export default Form
