
import React, { Component } from 'react';

export default class ShowSpending extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // 點記起來之後才會更新 props.price
        // right, 因為是跟 reducer 取資料, 點記起來之後才會更新到 action
        // rerender 兩次?
        console.log(this.props)
        return (
     
     
            // <div>
            // for (var i = 0; i < btns.length; i++) {
            //     btns[i].addEventListener("click", function() {
            //       var current = document.getElementsByClassName("active");
            //       current[0].className = current[0].className.replace(" active", "");
            //       this.className += " active";
            //     });
            //   }
     <tr>
                    <td>{this.props.goodsTag}</td>
                    <td>{this.props.price}</td>
                    <td></td>
                </tr>
            // </div>
        );
    }
}