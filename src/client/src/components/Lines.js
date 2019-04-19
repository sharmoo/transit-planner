import React from 'react';

class Lines extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lines: {"": []},
            currentLine: "",
        }
        this.setCurrentLine = this.setCurrentLine.bind(this);
    }

    componentDidMount() {
        fetch("/api/v1/lines")
        .then(res => {
            return res.json();
        })
        .then(json => {
            this.setState({lines: json, currentLine: Object.keys(json)[0]})
        }).catch(err => {
            console.error(err);
        })
    }

    setCurrentLine(line) {
        this.setState({currentLine: line});
    }

    render() {
        return (
            <div className="lines-view">
              <div className="selections">
                Choose a line:
                <select onChange={(event) => this.setCurrentLine(event.target.value)}>
                  {Object.keys(this.state.lines).map((line, index) => <option key={index}>{`${line}`}</option>)}
                </select>
              </div>
              <div className="lines-stop-list">
                <ul>
                  {this.state.lines[this.state.currentLine].map((stop, index) => <li key={index}>{`${stop}`}</li>)}
                </ul>
              </div>
            </div>
        );
    }
}

export default Lines;