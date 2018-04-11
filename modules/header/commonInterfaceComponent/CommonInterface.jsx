import React from 'react';
import PropTypes from 'prop-types';
import classname from "classname";

import './commonInterface.less';

export default class CommonInterface extends React.Component {
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
        this.classes.authWrapperClassList = classname({
            'header-wrapper__auth-wrapper': true,
            'auth-wrapper': this.isLoggedIn !== undefined,
        });
    };

    render() {
        return(
            <div>

            </div>
        );
    }
}