import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Header from '../Header';

describe("Header render test", ()=> {
    // Header componentini temsil edecek değişken:
    let headerComp;

    // Her aşamadan önce,
    beforeEach(()=>{
        // Header componentini renderla.
        render(<Header/>);

        // headerComp değişkenini sayfada "Emoji Search" texti ile var olan elementine ata.
        headerComp = screen.getByText("Emoji Search");
    });

    test('Did the header component rendered correctly ?', () => {
        // headerComp'un sayfada var olmasını bekle.
        expect(headerComp).toBeInTheDocument();
    });
});