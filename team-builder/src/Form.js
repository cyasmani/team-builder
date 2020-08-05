import React, {useState} from 'react'

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: ''
      }); 
    
    const onInputChange = event => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
    
    
        });
      };

    const handleSubmit = event => {
        event.preventDefault();
        setFormData({ name: '', email: '', role: '' });
      };
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
            <ul>
                <li>Name: {formData["name"]}</li>
                <li>Email: {formData["email"]}</li>
                <li>Role: {formData["role"]}</li>
            </ul>

            
        </div>
    )
}

export default Form
