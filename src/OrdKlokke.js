import React, { Component } from "react";
import RenderText from "./RenderText";

export default class OrdKlokke extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
            h: 0,
            m: 0,
            s: 0,
            preWord: "",
            hourWord: ""
        };
    }

    componentDidMount() {
        this.updateTime();

        let interval = setInterval(() => {
            this.getHourWord(), this.getPreWord(), this.updateTime();
        }, 1000);

        this.getPreWord();
        this.getHourWord();
    }

    updateTime() {
        let time = new Date();

        this.setState({
            h: time.getHours(),
            m: time.getMinutes(),
            s: time.getSeconds()
        });
    }

    getPreWord() {
        let m = this.state.m;

        switch (true) {
            case m >= 5 && m < 10:
                this.setState({ preWord: "FEM OVER" });
                break;
            case m >= 10 && m < 15:
                this.setState({ preWord: "TI OVER" });
                break;
            case m >= 15 && m < 20:
                this.setState({ preWord: "KVART OVER" });
                break;
            case m >= 20 && m < 25:
                this.setState({ preWord: "TI PÅ HALV" });
                break;
            case m >= 25 && m < 30:
                this.setState({ preWord: "FEM PÅ HALV" });
                break;
            case m >= 30 && m < 35:
                this.setState({ preWord: "HALV" });
                break;
            case m >= 35 && m <= 40:
                this.setState({ preWord: "FEM OVER HALV" });
                break;
            case m >= 40 && m < 45:
                this.setState({ preWord: "TI OVER HALV" });
                break;
            case m >= 45 && m < 50:
                this.setState({ preWord: "KVART PÅ" });
                break;
            case m >= 50 && m < 55:
                this.setState({ preWord: "TI PÅ" });
                break;
            case m >= 55:
                this.setState({ preWord: "FEM PÅ" });
                break;
        }
    }

    getHourWord() {
        let h = this.state.h;

        if (this.state.m >= 20) {
            h += 1;
        }

        if (h >= 12) {
            h -= 12;
        }

  

        let hourWords = [
            "TOLV",
            "ETT",
            "TO",
            "TRE",
            "FIRE",
            "FEM",
            "SEKS",
            "SYV",
            "ÅTTE",
            "NI",
            "TI",
            "ELLEVE"
        ];

        this.setState({ hourWord: hourWords[h] });
    }


    render() {
        let text =
            "TIKLOKKAMERE KVARTATIFEMN OVERPÅDHALVD TOLVETTTOTRE AFIREFEMSEKS SYVTÅTTENITI ELLEVEETIMEA";

        let text2 = 
            "TKLOKKAIERME KVARTATIFEMN OVERPÅDHALVD TOLVETTTOTRE FIREAFEMSEKS SYVTÅTTENITI ELLEVEETIMEA";

        let string = "KLOKKA ER " + this.state.preWord + " " + this.state.hourWord;
        

        return (
            <div>
                <RenderText text={text2} timeString={string} />
            </div>
        );
    }
}
