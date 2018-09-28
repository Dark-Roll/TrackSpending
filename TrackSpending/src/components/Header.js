import React, { Component } from 'react';

export default class TrackSpendingForm extends Component {
    constructor(props) {
        super(props);
    }

    // shouldComponentUpdate(nextProps, nextState){

    // }


    // function _createHeader(props,props2) {
    _createHeader = (isSlideUp, lastScrollY) => {
        console.log(isSlideUp, lastScrollY)
        if(lastScrollY===0){
            return (
                <header className="header animated headroom--top headroom--not-bottom slideUp">
                    <a href="#" className="logo"> </a>
                </header>
            )
        }

        if (isSlideUp) {
            // rerender 時機
            // 有更改才傳值
            return (
                <header className="header animated headroom--not-top headroom--not-bottom slideUp">
                    <a href="#" className="logo"> </a>
                </header>
            );
        } else {

            return (
                <header className="header animated headroom--not-top headroom--not-bottom slideDown">
                    <a href="#" className="logo"> </a>
                </header>
            )
        }

        // this.props.
    }

    render() {
        return (
            <div>

                {this._createHeader(this.props.isSlideUp, this.props.lastScrollY)}
            </div>
        );
    }


}


