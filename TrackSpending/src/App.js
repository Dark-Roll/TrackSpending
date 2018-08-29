//  socket.io connection on the render is a seriously bad idea
//  nginx ??
import React, { Component } from 'react';
import socketIO from 'socket.io-client';
import TrackSpending from './components/TrackSpending';

class App extends Component {
  state = {
    spending: "",
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

    return (
      <div>
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
        <TrackSpending
          // spending={this.state.spending} 
          price={this.state.price} />


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

export default App;
