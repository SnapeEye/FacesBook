import React from 'react';
import { render } from 'react-dom';
import HeaderComponent from './HeaderComponent.jsx';

export default class Header {
    constructor(props) {
        this.props = props;
        this.initBlock();
    }

    initBlock() {
        render(<HeaderComponent facade={this.props.facade} />, document.getElementById('headerContainer'));
    }
}