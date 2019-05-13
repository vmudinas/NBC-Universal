import React, { Component } from 'react';
import ItemService from './ItemService';


class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee_name: '',
            employee_salary: '',
            employee_age: ''
        }
        this.addItemService = new ItemService();
    }

    handleNameChange = e => this.setState({ employee_name: e.target.value })
    handleAgeChange = e => this.setState({ employee_age: e.target.value })
    handleSalaryChange = e => this.setState({ employee_salary: e.target.value })

    handleSubmit = (event) => {
        //alert(this.state.value);
        event.preventDefault();
        this.addItemService.create(this.state);
        this.props.history.push('/');
    }

    render() {
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Edit Employe Name
                        <input
                            type="text"
                            value={this.state.employee_name}
                            onChange={this.handleNameChange}
                            className="form-control"
                        />

                    </label>
                    <br />
                    <label>
                        Edit Employe Salary:
                        <input
                            type="text"
                            value={this.state.employee_salary}
                            onChange={this.handleSalaryChange}
                            className="form-control"
                        />
                    </label>
                    <br />
                    <label>
                        Edit Employe Age:
                        <input
                            type="text"
                            value={this.state.employee_age}
                            onChange={this.handleAgeChange}
                            className="form-control"
                        />
                    </label>
                    <br />
                    <input
                        type="submit"
                        value="submit"
                        className="btn btn-primary"
                    />
                </form>
            </div>
        );
    }
}

export default AddItem;
