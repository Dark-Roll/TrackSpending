//  socket.io connection on the render is a seriously bad idea
//  nginx ??
import React, { Component } from 'react';
import socketIO from 'socket.io-client';
import TrackSpendingForm from './TrackSpendingForm';
import '../css/animation.css';
import Header from './Header';
// import '../scss/animation.css';
// import '../scss/index.css';

class TrackSpendingRecord extends Component {
  state = {
    buyingItem: "",
    price: "",
    lastScrollY: 0,
    isSlideDown:false,
    endpoint: "http://192.168.59.130:5000"
  };

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

    console.log(window.scrollY)
    if (window.scrollY <= this.state.lastScrollY) {
      // console.log("true")
      this.setState({ isSlideDown: true})

      // class + slideDown
    } else {
      this.setState({ isSlideDown: false})
      // console.log(window.scrollY,this.state.lastScrollY,"fua")
    }
    this.setState({ lastScrollY: window.scrollY });
  }

  render() {


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
        

        <Header isSlideDown={this.state.isSlideDown}    lastScrollY={this.state.lastScrollY} />

        {/* <header
          className="header animated headroom--not-top headroom--not-bottom slideDown"
          // style={{ width: '100%', height: '200px', backgroundColor: 'black', position: 'fixed' }}
        // onScroll={(e) => { this.toggleShow(e) }}
        // ref={this.toggleShow}
        >
          <a href="#" className="logo"></a>

        </header> */}
          {/* <img src={ReactLogo} alt="logo" /> */}



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
    );
  }
}

export default TrackSpendingRecord;
