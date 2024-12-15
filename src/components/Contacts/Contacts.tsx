import React from 'react';
import './Contacts.css';

interface Contact {
    id: number;
    name: string;
    avatar: string;
}

const Contacts: React.FC = () => {
    const contacts: Contact[] = [
        { id: 1, name: 'Сонав Арсос', avatar: 'https://i.pravatar.cc/150?img=1' },
        { id: 2, name: 'Асхаб Тамаев', avatar: 'https://i.pravatar.cc/150?img=2' },
        { id: 3, name: 'Макс Максбетов', avatar: 'https://i.pravatar.cc/150?img=3' },
    ];

    return (
        <aside className="contacts">
            <h2>Контакты</h2>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id} className="contact-item">
                        <img src={contact.avatar} alt={contact.name} className="contact-avatar" />
                        <span className="contact-name">{contact.name}</span>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Contacts;
