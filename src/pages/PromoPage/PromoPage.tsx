import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PromoPage.css';
import promoImage from '../../assets/images/promo-image.png'; // Убедитесь, что изображение существует

const PromoPage: React.FC = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/messenger');
    };

    return (
        <div className="promo-container">
            <header className="promo-header">
                <h1>Добро пожаловать в MesGram</h1>
                <p>Ваше новое решение для общения с друзьями и коллегами.</p>
                <button className="get-started-button" onClick={handleGetStarted}>
                    Начать пользоваться
                </button>
            </header>
            {/* Убедитесь, что путь к изображению корректен */}
            <img src={promoImage} alt="MesGram Illustration" className="promo-image" />
            <section className="promo-features">
                <div className="feature">
                    <h2>Быстрый обмен сообщениями</h2>
                    <p>Обменивайтесь сообщениями мгновенно с любым пользователем.</p>
                </div>
                <div className="feature">
                    <h2>Безопасность и приватность</h2>
                    <p>Ваши сообщения защищены и остаются только между вами и получателем.</p>
                </div>
                <div className="feature">
                    <h2>Многофункциональность</h2>
                    <p>Поддержка текстовых, голосовых и видео сообщений.</p>
                </div>
            </section>
            <footer className="promo-footer">
                <p>&copy; 2023 SonovArcoc. Все права защищены.</p>
            </footer>
        </div>
    );
};

export default PromoPage;