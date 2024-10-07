// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import About from './About';
import AddContact from './AddContact';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [services] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/contacts');
        setContacts(response.data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  const addContact = async (newContact) => {
    try {
      const response = await axios.post('http://localhost:5000/contacts', newContact);
      setContacts([...contacts, response.data]);
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  return (
    <div className="App">
      <Router>
        <Menu />
        <Container sx={{ mt: 8 }}>
          <Routes>
            <Route
              path="/"
              element={
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom>
                      Contacts
                    </Typography>
                  </Grid>

                  {/* Contacts list displayed as Material-UI cards */}
                  {contacts.map((contact) => (
                    <Grid item xs={12} sm={6} md={4} key={contact.id}>
                      <Card>
                        <CardContent>
                          <Typography variant="h6">{contact.name}</Typography>
                          <Typography variant="body2" color="textSecondary">
                            Email: {contact.email}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            Phone: {contact.phone}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}

                  <Grid item xs={12}>
                    <AddContact onAdd={addContact} />
                  </Grid>
                </Grid>
              }
            />
            <Route
              path="/about"
              element={<About contacts={contacts} addContact={addContact} />}
            />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;





/*

// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';  // Import axios
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import About from './About';
import Test from './Test';
import AddContact from './AddContact';
//import TopBar from './TopBar';
import './App.css';

// Import initial data from data.js
//import { initialContacts, initialServices } from './Data';

 

function App() {
*/
/*
   // State to manage contacts and services
   const [contacts, setContacts] = useState(initialContacts);
   
   // Example of adding a contact (this could be from a form or API in a real-world app)
   const addContact = (newContact) => {
     setContacts([...contacts, { id: contacts.length + 1, ...newContact }]);
   };

*/

/*
const [contacts, setContacts] = useState([]);
  //const [services] = useState([]);  // Assuming services data is also from backend

  // Fetch contacts from the backend API when the component mounts
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/contacts');
        setContacts(response.data);  // Set the contacts state to the response data
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  const addContact = async (newContact) => {
    try {
      const response = await axios.post('http://localhost:5000/contacts', newContact);
      setContacts([...contacts, response.data]);  // Update the state with the new contact
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };


  return (
    <div className="App">
      <Router>
      
        <Menu />
        <Routes>
          <Route path="/" element={
           
           <div>
           <h1>Hello, World!</h1>
           <h2>Contacts</h2>
           <ul>
             {contacts.map(contact => (
               <li key={contact.id}>
                 {contact.name} - {contact.email} - {contact.phone}
               </li>
             ))}
           </ul>

         

           <AddContact onAdd={addContact} />

         </div>
            
            
            } />
          <Route path="/about" element={<About />} />
          <Route path="/test" element={<Test contacts={contacts} addContact={addContact} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
*/