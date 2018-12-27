import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize';
import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import axios from 'axios';
import List from './list';
import AddItem from './add_items';


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
        await axios.post(BASE_URL + API_KEY, item);
        await  this.getListData();


    };


    async getListData() {
        try {
            const resp = await axios.get(BASE_URL + API_KEY);

            this.setState({
                list: resp.data.todos
            });
        } catch (err) {
            console.log('something went wrong', err.message)
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

                <Route path='/' exact render={(props) => {
                    return <List {...props}delete={this.deleteItem} toDos={list}/>;
                }}/>

                <Route path='/add-item' render{(props) => {
                    return <AddItem {...props} add={this.addItem}/>;
                }}/>

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