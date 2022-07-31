import React, { useState } from "react";
import './tip.css';

function TipFunction() {
    const [brutto, setBrutto] = useState(0);
    const [netto, setNetto] = useState(0);
    const [tip, setTip] = useState(0.05);
    const [tax] = useState(0.08);
    const [isCalculated, setIsCalculated] = useState(false);

    const handleSumbit = (e) => {
        e.preventDefault();
        const priceNetto = Number(netto);
        const taxAmount = netto * tax;
        const tipAmount = netto * tip;
        const brutto = priceNetto + taxAmount + tipAmount;
        setBrutto(brutto);
        setIsCalculated((e) => !e);
    };

    const inputHandler = (e) => {
        setNetto(e.target.value);
    };

        const selectHandler = (e) => {
        setTip(e.target.value);
    };

    const showBrutto = (
        <div>
            <h5>Total amount to pay: {brutto}€</h5>
        </div>
    );

    return (
        <>
            <h4>Function Component</h4>
            {isCalculated ? showBrutto :
                <form onSubmit={handleSumbit}>
                    <input type='number' placeholder='Net Amount' name='netto' onChange={inputHandler}></input>
                    <select name='tip' onChange={selectHandler}>
                        <option value={0.05}>5% tip</option>
                        <option value={0.10}>10% tip</option>
                        <option value={0.15}>15% tip</option>
                        <option value={0.20}>20% tip</option>
                    </select>
                    <button type='submit'>Calculate</button>
                </form>
            }
        </>
    );
};

export default TipFunction;

/*
Napisz formularz, który będzie składał się z pól:

pole input typu number, gdzie podamy kwotę netto do zapłaty
pole select, gdzie wprowadzimy wielkość napiwku np.: 5, 10, 15, 20%
przycisk "Przelicz"
Po kliknięciu w "Przelicz" aplikacja obliczy nam cenę brutto gdzie VAT ustalimy sobie na poziomie 5, 8 lub 25% (Twój wybór ;).

Po wysłaniu wynik niech wyświetli się zamiast formularza.
*/