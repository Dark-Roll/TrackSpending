import React, { Component } from 'react';

export default class TrackSpendingForm extends Component {
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
                    style={{
                        'height': '2500px'
                    }}
                    onClick={() => {
                        console.log(this.props)
                        
                    }}
                >get Prop Value
                </button>

                <button
                    onClick={()=>{
                        
                    }}
                >
                    sum 
                </button>


                <div className="showTotal">
                    {/* {let tr3s=document.querySelectorAll('')} */}
                </div>
            </div>
        );
    }

}
