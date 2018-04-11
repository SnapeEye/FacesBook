import React from 'react';
import PropTypes from 'prop-types';
import classname from "classname";

import './userInterface.less';

export default class UserInterface extends React.Component {
    static propTypes = {
        facadeAPI: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.facadeAPI = props.facade;
        this.classes = {};
        this.initClassLists();
    }

    initClassLists = () => {
        this.classes.usernameClassList = classname({
            'auth-wrapper_username': true,
        });
        this.classes.logOutClassList = classname({
            'auth-wrapper_logout-btn': true,
        });
    };

    render() {
        return(
            <div>
                <span className={this.classes.usernameClassList}></span>
                <button className={this.classes.logOutClassList}></button>
            </div>
        );
    }
}