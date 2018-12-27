import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize';
import React, {Component} from 'react';
import axios from 'axios';
import List from './list';
import AddItem from './add_items';
import dummyList from "../data/to_do_list"
import {randomString} from '../helpers';


const BASE_URL = 'http://api.reactprotypes.com/todos';
const API_KEY = '?key=illenium_demouser';

class App extends Component {
    state = {
        list: []
    };

    componentDidMount() {
        this.getListData();
    }
    addItem = async (item) => {
      this.getListData();


    };


    async getListData() {
       try{
           const resp = await axios.get(BASE_URL + API_KEY);

           this.setState({
               list: resp.data.todos
           });
    } catch(err) {
           console.log('something went wrong',err.message)
       }
    }

    deleteItem = async (id) => {

        await axios.delete(`${BASE_URL}/${id + API_KEY}`);
        this.getListData();
    }

    toggleComplete = async (id) => {
        await axios.put(`${BASE_URL}/${id + API_KEY}`);
        this.getListData();
    }
    render() {
        const {list} = this.state;
        return (
        <div className="container">
            <h1 className='center'> To do list </h1>
            <AddItem add={this.addItem}/>
            <List delete={this.deleteItem} toDos={list}/>
        </div>
    );
  }
}
export default App;

// axios.get(BASE_URL + API_KEY).then((resp) => {
//     console.log('get Todos response:',resp)
// }).catch((err) => {
//     console.log('error getting list data:', err.message);
// });