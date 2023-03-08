import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Emoji search test.', () => { 
    // Arama inputunu temsil edecek değişken:
    let searchInput;

    // Her aşamadan önce,
    beforeEach(()=>{
        //App componentini renderla.
        render(<App/>);

        // searchInput değişkenini sayfada 'Skull' placeholder'ı ile var olan elemente ata.
        searchInput = screen.getByPlaceholderText("Skull");
    });

    test("Did the searched emoji appeared ?",() =>{
        // Kullanıcının arayacağı emojiyi temsil eden değişken:
        const searchedEmoji = "Joy";

        // Kullanıcıya inputa aranan emojiyi yazdır.
        userEvent.type(searchInput, searchedEmoji);

        // Aranan emojinin sayfada gözükmesini bekle.
        expect(screen.getByText(searchedEmoji)).toBeInTheDocument();
    });
});
