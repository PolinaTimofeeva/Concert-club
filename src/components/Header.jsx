import React from 'react';
import '../App.css';
import logo from '../logo.svg';

export const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
            <div className='header__body'>
                <a href="/" className='header__logo'><img src={logo} alt='Логотип компании' /></a>

                <div className='header__buttons'>
                <button className='btn__white'>Версия для слабовидящих</button>
                <button className='btn__white'>Мой профиль</button>
                </div>
            </div>
            </div>
        </header>
    )
}