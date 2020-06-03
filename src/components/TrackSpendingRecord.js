//  socket.io connection on the render is a seriously bad idea
//  nginx ??
import React, { Component } from 'react';
import socketIO from 'socket.io-client';
import TrackSpendingForm from './TrackSpendingForm';
import '../css/animation.css';
import Header from './Header';
import { newBreakfast, deleteBreakfast } from '../actions/breakfastAction';
// import '../scss/animation.css';
// import '../scss/index.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import uuidv1 from 'uuid/v1';

import ShowSpending from './ShowSpending';
import { newLunch } from '../actions/lunchAction';

class TrackSpendingRecord extends Component {
	constructor(props) {
		super(props);
		this.breakfastListCounter = -1;
		this.lunchListCounter = -1;
		this.state = {
			goodsTag: "",
			price: "",
			lastScrollY: 0,
			isSlideUp: false,



			// endpoint: "http://192.168.59.130:5000"
			endpoint: "http://192.168.1.131:5000"
		};
	}

	componentDidMount() {
		// console.log(this.refs.wrapper.addEventListener('scroll', this.toggleShow, true))
		// this.refs.wrapper.addEventListener('scroll', (e)=>{console.log(e)}, true)
		// 一定要抓window的 不然沒有scroll條
		window.addEventListener('scroll', this.toggleShow, true);
		const date = new Date()
		console.log()
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.toggleShow);
	}

	// componentDidMount() {
	//   this.refs.wrapper.getDOMNode().addEventListener('scroll', (e) => console.log(e.target));
	// }

	// render() {
	//   return <div className='page-wrapper' ref='wrapper'>
	//     {...my page content ...}
	//  </div>;
	// }

	send() {
		// 連線位置 
		// console.log('before send');
		const socket = socketIO(this.state.endpoint)
		// console.log(socket);

		socket.emit('save', 'red')
		// console.log("work ?");
	}

	toggleShow = (e) => {

		// console.log(window.scrollY)
		if (window.scrollY <= this.state.lastScrollY) {
			// console.log("true")
			this.setState({ isSlideUp: true })

			// class + slideDown
		} else {
			this.setState({ isSlideUp: false })
			// console.log(window.scrollY,this.state.lastScrollY,"fua")
		}
		this.setState({ lastScrollY: window.scrollY });
	}

	onClickNewLunch(e) {
		// 寫成 utility
		const date = new Date()
		const formattedTime = `${date.getFullYear()}${date.getMonth() + 1 + (date.getDate() < 10 ? '0' + date.getDate() : '' + date.getDate())}
    ${date.getHours()}:
      ${(date.getMinutes() < 10 ? '0' : '')}${date.getMinutes()}:
      ${date.getSeconds()}`;

		// should modify
		// const ID = this.lunchListCounter += 1;

		let uuid = uuidv1().substring(0, 6)

		console.log(formattedTime)
		this.props.dispatch(
			newLunch({
				id: uuid,
				type: 'lunch',
				price: this.state.price,
				time: formattedTime,
			}));
	}

	onClickNewBreakfast(e) {
		const date = new Date()
		const formattedTime = `${date.getHours()}:
		${(date.getMinutes() < 10 ? '0' : '')}${date.getMinutes()}:
		${date.getSeconds()}`;

		// socket emit
		// const ID = this.breakfastListCounter += 1;
		let uuid = uuidv1().substring(0, 6)

		this.props.dispatch(newBreakfast({
			id: uuid,
			type: 'breakfast',
			price: this.state.price,
			time: formattedTime,
		}));
		// 印不到最後一筆
		// 船過去 show spending 會有 值，會傳兩次 why?
		console.log(this.props)
	}



	render() {
		// let breakfastDetail = this.props.breakfastList.map((item)=>{
		//   return (<div style={{backgroundColor:'red'}}>
		//     item
		//   </div>)
		// })


		// let breakfastDetail
		// // 這什麼時候更新 scroll makes the update, why?
		// if (this.props.breakfastList.length > 0) {
		//   breakfastDetail = this.props.breakfastList.map((e) => {
		//     return (
		//       <div key={e.id}>
		//         <TrackSpendingForm
		//           goodsTag={this.state.goodsTag}
		//           price={e.price}
		//         />
		//       </div>
		//     );
		//   })
		// }



		// Artwork
		// .find()
		// .exec(function(err, result){
		//   console.log(result)
		// })

		// reset css
		return (
			<div>

				<Header isSlideUp={this.state.isSlideUp} lastScrollY={this.state.lastScrollY} />
				<div id="globalContainer">


					{/* <breakfastDetail/> */}

					{/* return (

						<Dropdown
						placeholder="請選擇課程"
						fluid
						search
						selection
						options={options}
						value={value}
						onChange={onChange}
						/>

					); */}

					{/*
					// onScroll={(e) => { this.toggleShow(e) }}
					// ref={this.toggleShow}
					>
					</header> */}

					<br />
					<div style={{ marginTop: '200px' }}>

						{/* {breakfastDetail} */}

					</div>
					項目:
		  
		  
		  
      			    {/* 每案一次就會新增一次 */}
					<button
						onClick={() => {
							this.setState({
								goodsTag: "breakfast"
							})
						}}
					>早餐</button>
					<button
						onClick={() => {
							this.setState({
								goodsTag: "lunch"
							})
						}}
					>午餐</button>
					{/* 午餐 晚餐 宵夜 活動(社交、娛樂) 活動(學習) 飲料(咖啡廳 下午茶))  */}
					{/* (衣服 住 看電影 買書 悠遊卡 加油) */}


					價錢:
        			<input className="priceItem"
						onChange={e => {
							this.setState({
								price: e.target.value
							});
						}}
					/>

					<button
						onClick={e => {

							if (!this.state.goodsTag) return
							switch (this.state.goodsTag) {
								case "breakfast":
									this.onClickNewBreakfast(e)
									break;
								case "lunch":
									this.onClickNewLunch(e)
									break;
								default:
									return;
							}

							// 捲軸是不是在最頂
							// console.log(this.toggleShow)
							// console.log(window.scrollY)
							// console.log(this.state.spending, this.state.price);
						}}
					>
						記起來
       			    </button>

					{/* {breakfastDetail} */}
					{/*  做個新增 */}
					<TrackSpendingForm
						// spending={this.state.spending}
						breakfastList={this.props.breakfastList}
						lunchList={this.props.lunchList}
						goodsTag={this.state.goodsTag}
						price={this.state.price}
					/>


					<button
						onClick={() => {
							// console.log(this);
							// this.printSocketTest(this.state.price)
							this.send()
						}}
					>Test
        			</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		// breakfastID: state.breakfast.id,
		breakfastList: state.breakfast,
		lunchList: state.lunch
		// agendaList: state.agenda
		// roomID: state.room.roomID,
		// roomOwner: state.room.roomOwner,
		// topic: state.room.topic,
		// stickyArray: state.stickyNote
	}
}
export default withRouter(connect(mapStateToProps)(TrackSpendingRecord));

// export default TrackSpendingRecord;
