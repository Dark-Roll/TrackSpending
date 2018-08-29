import React, { Component } from 'react';
import socketIO from 'socket.io';
{/* <script src="/socket.io/socket.io.js"></script> */ }

export default class TrackMySpendingForm extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                {/* td[rowspan=2 colspan=3 title] */}
                <table>
                    <tbody>
                        <tr>
                            <th>商品名稱</th>
                            {/* th h for header */}
                            <th>價錢</th>
                            <th>數量</th>
                        </tr>
                        <tr>
                            <td>早餐</td>
                            <td>50</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>午餐</td>
                            <td>90</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>悠遊卡</td>
                            <td>100</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>show value1</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <button
                    onClick={() => {
                        console.log(this.props)

                    }}
                >get Prop Value
                </button>


                <div className="showTotal">
                    {/* {let tr3s=document.querySelectorAll('')} */}
                </div>
            </div>
        );
    }

}
