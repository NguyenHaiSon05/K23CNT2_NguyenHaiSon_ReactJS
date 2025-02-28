import React, { Component } from "react";

class NhsEventForm4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nhsSelectCheckBox: ["Apple"],
        }
    }

    // Hàm xử lý khi chọn checkbox
    nhsHandleCheckboxChange = (event)=>{
        const { value, checked } = event.target;
        let selected = [...this.state.nhsSelectCheckBox];
        const selectedOptions = checked ? [...selected, value]: selected.filter(option => option !== value);

        console.log("selected:", selected, "selectedOptions:", selectedOptions);
        
        this.setState({
            nhsSelectCheckBox: selectedOptions
        });
    }

    // Submit form
    nhsHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert("Select:" + this.state.nhsSelectCheckBox);
    }

    render() {
        return (
            <div className="alert alert-success">
                <h2> Form input - checkbox</h2>
                <form>
                    <h3>Select your favorite fruits</h3>
                    <div>
                        <input
                            type="checkbox"
                            id="apple"
                            value="Apple"
                            checked={this.state.nhsSelectCheckBox.includes("Apple")}
                            onChange={this.nhsHandleCheckboxChange}
                        />
                        <label htmlFor="apple">Apple</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="banana"
                            value="Banana"
                            checked={this.state.nhsSelectCheckBox.includes("Banana")}
                            onChange={this.nhsHandleCheckboxChange}
                        />
                        <label htmlFor="banana">Banana</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="orange"
                            value="Orange"
                            checked={this.state.nhsSelectCheckBox.includes("Orange")}
                            onChange={this.nhsHandleCheckboxChange}
                        />
                        <label htmlFor="orange">Orange</label>
                    </div>
                    <button type="submit" onClick={this.nhsHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default NhsEventForm4;
