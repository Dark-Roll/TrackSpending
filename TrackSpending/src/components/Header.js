import React, { Component } from 'react';

export default class TrackSpendingForm extends Component {
    constructor(props){
        super(props);
    }

    // shouldComponentUpdate(nextProps, nextState){

    // }


    function Header(props) {
    console.log(props)
    if (props) {
        console.log("slideDown")
        // rerender 時機
        // 有更改才傳值
        return (
            <header className="header animated headroom--not-top headroom--not-bottom slideDown">
                <a href="#" className="logo"> </a>
            </header>
        );
    } else {
        console.log("slideup")

        return (
            <header className="header animated headroom--not-top headroom--not-bottom slideUp">
                <a href="#" className="logo"> </a>
            </header>
        )
    }
    // this.props.

    render(){
        return (
            <div>

                {this.Header()}  
            </div>
        );
    }


}


