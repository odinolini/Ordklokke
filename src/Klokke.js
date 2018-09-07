import React, { Component } from 'react';
import './Klokke.css';

export default class Klokke extends Component {
    constructor(props) {
        super(props);
        this.state = {time: new Date()}
    }

    componentDidMount() {
        let interval = setInterval(() => {this.setState({time: new Date()})}, 1000);
    }

    padNumber(number) {
        return (number < 10 ? '0' : '') + number;
    }

    render() {
       let h = this.state.time.getHours();
       let m = this.state.time.getMinutes();
       let s = this.state.time.getSeconds();

       let dateString;

       switch(this.state.time.getDay()) {
           case 0: dateString = "søndag";
           break;
           case 1: dateString = "mandag";
           break;
           case 2: dateString = "tirsdag";
           break;
           case 3: dateString = "onsdag";
           break;
           case 4: dateString = "torsdag";
           break;
           case 5: dateString = "fredag";
           break;
           case 6: dateString = "lørdag";
           break;
       }

       let monthString;

       switch(this.state.time.getMonth()) {
           case 0: monthString = "januar";
           break;
           case 1: monthString = "februar";
           break;
           case 2: monthString = "mars";
           break;
           case 3: monthString = "april";
           break;
           case 4: monthString = "mars";
           break;
           case 5: monthString = "april";
           break;
           case 6: monthString = "mai";
           break;
           case 7: monthString = "juni";
           break;
           case 8: monthString = "juli";
           break;
           case 9: monthString = "august";
           break;
           case 10: monthString = "september";
           break;
           case 11: monthString = "desember";
       }
       

        return (
            <div className="klokke">
            <p>I dag er det en {dateString} i {monthString}, og klokken er:</p>
               {h}:{this.padNumber(m)}:{this.padNumber(s)}
            </div>
        );
    }
}