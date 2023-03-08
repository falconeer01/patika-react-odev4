import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import emojiList from '../emojiList.json';

describe('Emoji List render test.', () => {
    // Emoji listesinden sayfada görünecek ilk 20 emojiyi seç.
    let emojis = emojiList.slice(0, 20);

    // Her aşamadan önce,
    beforeEach(() => {
        //App componentini renderla.
        render(<App/>);
    });

    test('Does emojis include in the list ?', () => {
        // İlk 20 emojinin içinde dolaş ve her emojinin title özelliğinin sayfada var olmasını bekle.
        emojis.map((emoji) => {
            expect(screen.getByText(emoji.title)).toBeInTheDocument();
        });
    });
});