import React from 'react';
import './tip.css';


class TipClass extends React.Component {
    state = {
        brutto: 0,
        netto: 0,
        tip: 0.05,
        tax: 0.08,
        isCalculated: false,
    }
    handleSumbit = (e) => {
        e.preventDefault();
        const priceNetto = this.state.netto;
        const taxAmount = this.state.netto * this.state.tax;
        const tipAmount = this.state.netto * this.state.tip;
        this.setState({ brutto: priceNetto + taxAmount + tipAmount });
        this.setState({ isCalculated: (e) => !e });
    }
    handleChange = (e) => {
        console.log('input value: ', e.target.value);
        this.setState({ [e.target.name]: Number(e.target.value) });
    }
    render () {
        const showBrutto = (
            <div>
                <h5>Total amount to pay: {this.state.brutto}€</h5>
            </div>
        );

        return (
            <>
                <h4>Class Component</h4>
                {this.state.isCalculated ? showBrutto :
                    <form onSubmit={this.handleSumbit}>
                        <input type='number' placeholder='Net Amount' name='netto' onChange={this.handleChange}></input>
                        <select name='tip' onChange={this.handleChange}>
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
    }
}

export default TipClass;