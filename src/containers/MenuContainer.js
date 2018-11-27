import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  View} from 'react-native';

import { connect } from 'react-redux';
import MenuHeaderComponent from '../components/MenuHeaderComponent';
import MenuCardComponent from '../components/MenuCardComponent';
import CategoryCardComponent from '../components/CategoryCardComponent';
import axios from '../axios'; 

import style from '../styles/MenuStyles';

import * as  actions from '../store/actions';
import * as routes from '../constants/routes';
import * as url from '../constants/urls';


class MenuContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      menu: [],
      categories: [], 
      has_error: false,
      error_message: ''
    }
  }
  componentDidMount() {
    this.retrieveCategories();
  }

  back = () => {
    this.props.history.push(routes.SPLASHPAGE);
  }
  retrieveMenu = (id) => {
    const post_data = {id: id}
    axios.post(this.props.main_url + url.RETRIEVE_MENU, post_data)
      .then(response => {
        console.log(response.data);
        this.setState({
          menu: response.data
        })
      })
      .catch(error => {
        console.log(error.message);
          this.setState({
            has_error: true,
            error_message: 'Something went wrong...' + '\n'+error.error_message
          })
      });
  }
  retrieveCategories = () => {
    axios.post(this.props.main_url + url.RETRIEVE_ALL_CATEGORY_PROFILE)
      .then(response => {
        const cat = response.data;
        this.setState({
          categories: cat,
        },() => this.retrieveMenu(cat[0].id))
      })
      .catch(error => {
        console.log(error);
      });
  }
  loadPage = (menu) => {
    const {filter} = this.state;
    if (filter === 'none') {
      this.setState({
        menu: menu,
        displayed_menu: menu
      });
    }
    else {
      this.setState({
        menu: menu
      });
    }
  }
  render() {
    const {
      menu,
      categories,
      has_error,
      error_message
    } = this.state;

    const back = this.back;
    const retrieveMenu = this.retrieveMenu;
    const menu_cards = menu[0] ? menu.map(m => <MenuCardComponent key={m.id} menu={m}/>): null;
    const cat_card = categories[0] ? categories.map(c => <CategoryCardComponent key={c.id} category={c} retrieveMenu={retrieveMenu}/>): null;

    return (
      <View style={style.container}>
      <View style={style.body}>
        <MenuHeaderComponent
          back={back}/>
        <View style={style.content}>
          <ScrollView 
          style={style.categories_container}>
            {cat_card}
          </ScrollView>
          <View style={style.menu_container}>
            {menu_cards}
          </View>
        </View>
        </View>
      </View>
    );
  }
}
mapStateToProps = state => {
  return {
      main_url: state.main_url
  };
};

export default connect(mapStateToProps)(MenuContainer);
