import React, {Component} from 'react';
import {Platform, Text, View, FlatList, TouchableOpacity} from 'react-native';
import api from './src/services/api';

export default class App extends Component{
  static navigationOptions = {
    title: 'HOME'
  };

  state = {
    docs:[]
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get('/products');

    const { docs } = response.data;

    this.setState({ docs });

    console.log(docs);

  }

  renderItem = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
    <TouchableOpacity onPress={() => {}}>
      <Text>Acessar</Text>
    </TouchableOpacity>

    </View>
  )
  render() {
    return (
      <View >
        <Text>Página principal:</Text>
        <FlatList
          data={this.state.docs}
          keyExtractor={item => item._image}
          renderItem={this.renderItem}
          />
      </View>
    );
  }
}
