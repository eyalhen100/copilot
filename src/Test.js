// src/Test.js
import React , { useState} from 'react';
import AddContact from './AddContact';

function Test({ contacts, addContact }) {

  

  return (
    <div className="test">
      
      <h2>Test Page</h2>
      <p>Welcome to the Test page.</p>      

      <h2>Contact List</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name} - {contact.email} - {contact.phone}
          </li>
        ))}
      </ul>

           
      <AddContact onAdd={addContact} />
      


    </div>
  );
}

export default Test;

