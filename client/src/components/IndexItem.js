import React, { Component } from 'react';
import ItemService from './ItemService';
import axios from 'axios';
import TableRow from './TableRow';


class IndexItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            items: ''
        }
    }

    componentDidMount = () => {
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
        .then((response) => {
            this.setState({
                items: response.data
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }

    tabRow = () => {
        if(this.state.items instanceof Array) {
            return this.state.items.map((object, i) => {
                return <TableRow obj={object} key={i} />
            })
        }
    }

    render() {
        return (
            <div className="container">
                <h1 className='text-center'>Employee Manager</h1>
                <br />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>
                                Employee Id
                            </td>
                            <td>
                                Name
                            </td>
                            <td>
                                Salary
                            </td>
                            <td>
                                Age
                            </td>
                            <td>
                               Profile Image
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default IndexItem;
