import React from 'react';
import PropTypes from 'prop-types';
import classname from "classname";
import UserInterface from '../userInterfaceComponent/UserInterface.jsx';
import CommonInterface from '../commonInterfaceComponent/CommonInterface.jsx';

import './authentificationComponent.less';

export default class AuthentificationComponent extends React.Component {
    static propTypes = {
        facade: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.facadeAPI = props.facade;
        this.classes = {};
        this.isLoggedIn = props.isLoggedIn;
        this.initClassLists();
    }

    initClassLists = () => {
        this.classes.authWrapperClassList = classname({
            'header-wrapper__auth-wrapper': true,
            'auth-wrapper': this.isLoggedIn !== undefined,
        });
    };

    render() {
        const authBody = this.isLoggedIn ? <UserInterface facade={this.facadeAPI} /> : <CommonInterface facade={this.facadeAPI} />;
        return(
            <div className={this.classes.authWrapperClassList}>
                {authBody}
            </div>
        );
    }
}