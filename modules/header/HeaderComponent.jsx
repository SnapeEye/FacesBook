import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classname';
import AuthentificationComponent from './authentificationComponent/AuthentificationComponent.jsx';

import './header.less';

export default class HeaderComponent extends React.Component {
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
        this.classes.headerWrapperClassList = classname({
            'header-wrapper': true,
        });
        this.classes.logoWrapperClassList = classname({
            'header-wrapper__logo-wrapper': true,
        });
    };

    render() {
        return(
            <div className={this.classes.headerWrapperClassList}>
                <div className={this.classes.logoWrapperClassList}>
                </div>

                <AuthentificationComponent facade={this.facadeAPI}/>
            </div>
        );
    }
}