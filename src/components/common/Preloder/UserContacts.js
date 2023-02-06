import React from "react"
import sd from '../../Profile/Profile.module.css';


let UserContacts = (props) => {
    return (
        <div className={sd.Contacts}>
            <div>
                <div>
                    
                </div>
            </div>
            contacts
            <div className={sd.Data}>
                <a>{props.userContacts.contacts.facebook}</a>
                <a>{props.userContacts.contacts.vk}</a>
                <a>{props.userContacts.contacts.twitter}</a>
                <a>{props.userContacts.contacts.instagram}</a>
                <a>{props.userContacts.contacts.github}</a>
            </div>
        </div>
    )
}

export default UserContacts;