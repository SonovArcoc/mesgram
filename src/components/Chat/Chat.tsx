import React, { useState } from 'react';
import './Chat.css';

interface Message {
    id: number;
    sender: string;
    content: string;
    timestamp: string;
}

const Chat: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState<string>('');

    const handleSend = () => {
        if (newMessage.trim() === '') return;
        const message: Message = {
            id: messages.length + 1,
            sender: 'Вы',
            content: newMessage,
            timestamp: new Date().toLocaleTimeString(),
        };
        setMessages([...messages, message]);
        setNewMessage('');
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <main className="chat">
            <div className="messages">
                {messages.map(msg => (
                    <div key={msg.id} className="message">
                        <div className="message-header">
                            <span className="sender">{msg.sender}</span>
                            <span className="timestamp">{msg.timestamp}</span>
                        </div>
                        <div className="content">{msg.content}</div>
                    </div>
                ))}
            </div>
            <div className="input-area">
                <input
                    type="text"
                    value={newMessage}
                    onChange={e => setNewMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Введите сообщение..."
                />
                <button onClick={handleSend}>Отправить</button>
            </div>
        </main>
    );
};

export default Chat;
