import React from 'react';

class Lines extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lines: {
                "A": ["Nob Hill", "Japan Town"],
                "B": ["Protrero Hill", "Financial District"],
                "C": ["Beacon Hill", "Twin Peaks"]
            },
            current_line: "A",
        }

        this.setCurrentLine = this.setCurrentLine.bind(this);
    }

    setCurrentLine(line) {
        this.setState({current_line: line});
    }

    render() {
        return (
            <div className="lines-view">
              <div className="selections">
                Choose a line:
                <select onChange={(event) => this.setCurrentLine(event.target.value)}>
                  {Object.keys(this.state.lines).map(line => <option>{`${line}`}</option>)}
                </select>
              </div>
              <div className="lines-stop-list">
                <ul>
                  {this.state.lines[this.state.current_line].map(stop => <li>{`${stop}`}</li>)}
                </ul>
              </div>
            </div>
        );
    }
}

export default Lines;