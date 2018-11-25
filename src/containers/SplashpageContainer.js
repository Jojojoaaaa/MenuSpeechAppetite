import React, {Component} from 'react';
import {View} from 'react-native';

import { connect } from 'react-redux';


import * as  actions from '../store/actions';
import * as routes from '../constants/routes';
import SplashPageComponent from '../components/SplashPageComponent';

class SplashPageContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          modal_visible: false,
          ip_address: "",
        }
      }
    
      
    openModal = () => {
        this.setState({modal_visible:true});
    }

    closeModal = () => {
        this.setState({modal_visible:false});
    }
    onIPAddressChange = (ip_address) => {
        this.setState({ip_address: ip_address});
    }
    handleSetIPAddress = () => {
        const {ip_address} = this.state;
        this.props.onSetIpAddress(ip_address);
        this.setState({modal_visible:false});
    }
    handleOpenMenu = () => {
        this.props.history.push(routes.MENU);
    }
    render() {
        const {
            modal_visible
        } = this.state;

        const openModal = this.openModal;
        const closeModal =this.closeModal;
        const onIPAddressChange = this.onIPAddressChange;
        const handleSetIPAddress = this.handleSetIPAddress;
        const handleOpenMenu = this.handleOpenMenu;
        return (
            <SplashPageComponent
                modal_visible={modal_visible}
                openModal={openModal}
                closeModal={closeModal}
                onIPAddressChange={onIPAddressChange}
                handleSetIPAddress={handleSetIPAddress}
                handleOpenMenu={handleOpenMenu}/>
        );
    }
}
    mapStateToProps = state => {
    return {
        main_url: state.main_url
    };
    };

    mapDispatchToProps = dispatch => {
    return {
        onSetIpAddress: (ip_address) => dispatch(actions.setIpAddress(ip_address))
    }
    }

  export default connect(mapStateToProps, mapDispatchToProps)(SplashPageContainer);
