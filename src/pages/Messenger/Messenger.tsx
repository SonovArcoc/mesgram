import React from 'react';
import Header from '../../components/Header/Header';
import Contacts from '../../components/Contacts/Contacts';
import Chat from '../../components/Chat/Chat';
import './Messenger.css';

const Messenger: React.FC = () => {
    return (
        <div className="messenger-app">
            <Header />
            <div className="messenger-container">
                <Contacts />
                <Chat />
            </div>
        </div>
    );
};

export default Messenger;