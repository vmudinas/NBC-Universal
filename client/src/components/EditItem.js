import React, { Component } from 'react';
import axios from 'axios';
import ItemService from './ItemService';


class EditItem extends Component {

    constructor(props) {
        super(props);
        this.addItemService = new ItemService();
        this.state = {
            employee_name: '',
            employee_salary: '',
            employee_age: ''
        }
    }

    componentDidMount = () => {
        axios.get('http://dummy.restapiexample.com/api/v1/employee/'+this.props.match.params.id)
            .then((response) => {

            this.setState({
                employee_name: response.data.employee_name,
                employee_salary: response.data.employee_salary,
                employee_age: response.data.employee_age
            })
             
        })
        .catch((error) => {
            console.log(error);
        })
    }

    handleNameChange = e => this.setState({ employee_name: e.target.value })
    handleAgeChange = e => this.setState({ employee_age: e.target.value })
    handleSalaryChange = e => this.setState({ employee_salary: e.target.value })

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
       this.addItemService.update(this.state, this.props.match.params.id);
       this.props.history.push('/index');
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
                        value="Update"
                        className="btn btn-primary"
                    />
                </form>
            </div>
        );
    }
}

export default EditItem;
