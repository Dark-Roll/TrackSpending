
import React, { Component } from 'react';

export default class ShowSpending extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // 點記起來之後才會更新 props.price
        // right, 因為是跟 reducer 取資料, 點記起來之後才會更新到 action
        console.log(this.props)
        return (
            // <div>
                <tr>
                    <td>{this.props.goodsTag}</td>
                    <td>{this.props.price}</td>
                    <td></td>
                </tr>
            // </div>
        );
    }
}