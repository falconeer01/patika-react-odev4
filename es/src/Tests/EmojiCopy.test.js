import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe("Emoji copy test.", () =>{
    // Kullanıcının kopyalayacağı emojiyi temsil eden değişken:
    let copiedEmoji;

    // Her aşamadan önce,
    beforeEach(()=>{
        //App componentini renderla.
        render(<App/>);

        // Kopyalanan emojiyi sayfada 'Blush' text'i ile var olan elemente ata.
        copiedEmoji = screen.getByText("Blush");
    });

    test("Did the copied emoji matched ?", ()=>{
        // Kullanıcıyı kopyalanacak elemente tıklattır.
        userEvent.click(copiedEmoji);

        // Kopyalanan emojiyi clipboard'a yapıştır ve kopyalanan ile yapıştırılan emojinin aynı olmasını bekle.
        expect(copiedEmoji.parentElement.getAttribute("data-clipboard-text")).toMatch("😊");
    });
});