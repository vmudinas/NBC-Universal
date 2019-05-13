import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ItemService from './ItemService';


class TableRow extends Component {

    constructor(props) {
        super(props);
        this.addItemService = new ItemService();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.addItemService.delete(this.props.obj.id);
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.employee_name}
                </td>
                <td>
                    {this.props.obj.employee_salary}
                </td>
                <td>
                    {this.props.obj.employee_age}
                </td>
                <td>
                    {this.props.obj.profile_image}
                </td>
                <td>
                    <Link to={"edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="submit"
                            value="Delete"
                            className="btn btn-danger"
                         />
                    </form>
                </td>
            </tr>
        );
    }
}

export default TableRow;
