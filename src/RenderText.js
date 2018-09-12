import React, { Component } from "react";
import "./RenderText.css";

export default class RenderText extends Component {
    insert(string, insert, pos) {
        return string.slice(0, pos) + insert + string.slice(pos);
    }

    render() {
        let text = this.props.text;
        let timeArr = this.props.timeString.split(" ");

        let lastindex = 0;

        for (let i = 0; i < timeArr.length; i++) {
            let y = false;

            if (timeArr[i] !== "") {
                y = text.indexOf(timeArr[i], lastindex);
            }

            if (y) {
                lastindex = y;
                text = this.insert(text, "</span>", y + timeArr[i].length);
                text = this.insert(text, "<span class='markedWord'>", y);
            }
        }

        return (
            <div className="aligner">
                <div className="background-text">
                    <p
                        className="maxCharLength"
                        dangerouslySetInnerHTML={{__html: text}}
                    />
                </div>
            </div>
        );
    }
}
