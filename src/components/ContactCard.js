import React, { useState } from 'react';
import { FormControl, Button } from 'react-bootstrap';

const ContactCard = (props) => {

    let [name, setName] = useState(props.editContact.name)
    let [phone, setPhone] = useState(props.editContact.phone)
    let [image, setImage] = useState(props.editContact.image)


    function handleSaveClick() {
        let contact = { ...props.editContact }
        contact.name = name
        contact.phone = phone
        contact.image = image

        props.handleSaveEditedContact(contact)
        setName('')
        setPhone('')
        setImage('')

    };
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
            <Button variant="secondary" className='btn-1' onClick={handleSaveClick}>Save Contact</Button>
        </div>
    )
}

export default ContactCard;