//  socket.io connection on the render is a seriously bad idea
//  nginx ??
import React, { Component } from 'react';
import socketIO from 'socket.io-client';
import TrackSpendingForm from './TrackSpendingForm';

class TrackSpendingRecord extends Component {
  state = {
    buyingItem: "",
    price: "",
    endpoint: "http://192.168.59.130:5000"
  };


  send() {
    // 連線位置 
    // console.log('before send');
    const socket = socketIO(this.state.endpoint)
    // console.log(socket);

    socket.emit('save', 'red')
    // console.log("work ?");
  }

  render() {
    // Artwork
    // .find()
    // .exec(function(err, result){
    //   console.log(result)
    // })

    // reset css
    return (
      <div>
        <header style={{ width: '100%', height: '200px', backgroundColor: 'black', position: 'fixed' }}>

        </header>
        <br />
        <div style={{marginTop:'200px'}}>
          
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
