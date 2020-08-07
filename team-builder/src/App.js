import React, {useState} from 'react';
import Form from './components/Form';



function App() {

  const [teamMember, setTeamMember] = useState([{
    name: 'Yasmani Castaneda',
    email: 'yasmanicastaneda@yahoo.com',
    role:'Front-End Engineer'
  }])

 

  return (
    <div>
      <Form teamMember={teamMember} setTeamMember={setTeamMember}/>
      
    

    </div>
  );
}

export default App;
