import React, { useState } from 'react';
import { Button, FormControl } from 'react-bootstrap';


const AddContact = (props) => {
    let [name, setName] = useState('')
    let [phone, setPhone] = useState('')
    let [image, setImage] = useState('')

    function handleClick() {
        let newContact = {
            name,
            phone,
            image,
            id: Date.now()
        }
        props.handleNewContact(newContact)
        setName('')
        setPhone('')
        setImage('')
    }

    return (
        <div>
            <FormControl style={{ width: '25rem' }}
                value={name} onChange={(e) => setName(e.target.value)}
                type="text" placeholder="Name" />
            <br />
            <FormControl style={{ width: '25rem' }}
                value={phone} onChange={(e) => setPhone(e.target.value)}
                type="text" placeholder="Phone" />
            <br />
            <FormControl style={{ width: '25rem' }}
                value={image} onChange={(e) => setImage(e.target.value)}
                type="text" placeholder="Image URL" />
            <br />
            <Button variant="secondary" className='btn-1' onClick={handleClick}>Add Contact</Button>
        </div >
    );
};

export default AddContact;
