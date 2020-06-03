import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ShowSpending from './ShowSpending';
// import uuidv1 from 'uuid/v1';

export default class TrackSpendingForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)


        let breakfastDetail
        let spendingDetail
        // 這什麼時候更新 scroll makes the update, why?
        // avoid 0, but can it work?
        // no but it still has a default run the map function
        // comment out the reducer, it successes
        // 早餐午餐照順序排 但是不知道是哪個
        // goodsTag 不是固定值 合併就要多紀錄 type值
        if (this.props.breakfastList.length > 0 || this.props.lunchList.length > 0) {


            let spendingList = this.props.breakfastList.concat(this.props.lunchList)


            console.log(spendingList)
            // amazing object sort function
            spendingList=spendingList.sort(function(a, b){
                return a.createTime > b.createTime ? 1:-1;
            })
            spendingDetail= spendingList.map((e) => {
                return (
                    // <div key={e.id}>
                        
                        <ShowSpending
                            key ={e.id}
                            goodsTag={e.type}
                            price={e.price}
                        />
                        
                    // </div>
                );
            })
        }
        // 重複會 把舊的更新調
        let lunchDetail
        if (this.props.lunchList.length > 0) {
            lunchDetail = this.props.lunchList.map((e) => {
                return (
                    // <div key={e.id}>
                        
                        <ShowSpending
                            key ={e.id}
                            goodsTag={this.props.goodsTag}
                            price={e.price}
                        />
                        
                    // </div>
                );
            })
        }



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
                            <td>{this.props.goodsTag}</td>
                            <td>{this.props.price}</td>
                            <td></td>
                        </tr>

                        {/* <tr> */}
                            {/* <td>{this.props.goodsTag}</td>
                            <td>{this.props.price}</td>
                            <td></td> */}
                            {/* click 早餐就會 show 東西出來 */}
                            {/* 點價錢要在按記起來才會跑 row */}
                        {/* </tr> */}
                        {/* {breakfastDetail}
                        {lunchDetail} */}
                        {spendingDetail}

                    </tbody>
                </table>

                <button
                    style={{ 'height': '2500px' }}
                    onClick={() => {  console.log(this.props) }}
                >get Prop Value
                </button>

                <button
                    onClick={() => {

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


// const mapStateToProps = state => {
//     return {
//       // breakfastID: state.breakfast.id,
//       breakfastList: state.breakfast,
//       // agendaList: state.agenda
//       // roomID: state.room.roomID,
//       // roomOwner: state.room.roomOwner,
//       // topic: state.room.topic,
//       // stickyArray: state.stickyNote
//     }
//   }
//   export default withRouter(connect(mapStateToProps)(TrackSpendingForm));
