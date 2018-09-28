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

class TrackSpendingRecord extends Component {
  constructor(props) {
    super(props);
    this.breakfastListCounter = 0;
    this.state = {
      // buyingItem: "",
      price: "",
      lastScrollY: 0,
      isSlideUp: false,

      goodsTags: {
        早餐: [],
        午餐: [],
        晚餐: [],
        宵夜: [],
        // 
      },

      endpoint: "http://192.168.59.130:5000"
    };
  }

  componentDidMount() {
    // console.log(this.refs.wrapper.addEventListener('scroll', this.toggleShow, true))
    // this.refs.wrapper.addEventListener('scroll', (e)=>{console.log(e)}, true)
    // 一定要抓window的 不然沒有scroll條
    window.addEventListener('scroll', this.toggleShow, true);
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


  onClickNewBreakfast(e) {
    const ID = this.breakfastListCounter += 1;
    this.props.dispatch(newBreakfast(ID));
  }



  render() {
    console.log(this.props)
    // let breakfastDetail = this.props.breakfastList.map((item)=>{
    //   return (<div style={{backgroundColor:'red'}}>
    //     item
    //   </div>)
    // })

    // let styles = { }
    //   container: {
    //     'animation-name': 'slideDown',
    //     .header.dark, :not(.headroom--top).slideDown:{



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
      <Wrapper>
        <Dropdown
          placeholder="請選擇課程"
          fluid
          search
          selection
          options={options}
          value={value}
          onChange={onChange}
        />
      </Wrapper>
    ); */}

          {/*
        // onScroll={(e) => { this.toggleShow(e) }}
        // ref={this.toggleShow}
        >
        </header> */}

          <br />
          <div style={{ marginTop: '200px' }}>

          </div>
          項目:

        <input className="spendingItem"
            onChange={e => {
              this.setState({
                spending: e.target.value
              });
            }}
          />

          <button
            onClick={e => {
              this.onClickNewBreakfast(e)
            }}
          >早餐</button>
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
            onClick={() => {
              // 捲軸是不是在最頂
              // console.log(this.toggleShow)
              console.log(window.scrollY)
              console.log(this.state.spending, this.state.price);
            }}
          >
            記起來
          </button>

          {/*   */}
          <TrackSpendingForm
            // spending={this.state.spending} 
            item={this.state.buyingItem}
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
    breakfastID: state.breakfast.id
    // roomID: state.room.roomID,
    // roomOwner: state.room.roomOwner,
    // topic: state.room.topic,
    // stickyArray: state.stickyNote
  }
}
export default withRouter(connect(mapStateToProps)(TrackSpendingRecord));

// export default TrackSpendingRecord;
