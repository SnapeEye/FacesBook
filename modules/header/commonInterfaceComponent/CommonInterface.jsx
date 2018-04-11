import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classname';

import './commonInterface.less';

export default class CommonInterface extends React.Component {
    static propTypes = {
        facade: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.facadeAPI = props.facade;
        this.classes = {};
        this.initClassLists();
    }

    initClassLists = () => {
        this.classes.wrapperClassList = classname({
            'auth-wrapper_common-interface': true,
            'common-interface': true,
        });
        this.classes.loginBtnClassList = classname({
            'common-interface__login-btn': true,
        });
        this.classes.regBtnClassList = classname({
            'common-interface__reg-btn': true,
        });
    };

    render() {
        return(
            <div className={this.classes.wrapperClassList}>
                <button className={this.classes.loginBtnClassList}>login</button>
                <button className={this.classes.regBtnClassList}>registration</button>
            </div>
        );
    }
}