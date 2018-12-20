import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize';
import React, {Component} from 'react';
import List from './list';
import AddItem from './add_items';
import dummyList from "../data/to_do_list"

class App extends Component {
    state = {
        list: []
    };

    componentDidMount() {
        this.getListData();
    }
    addItem(item) => {
        const {list} = this.state;

        listCopy.push(item);

        this.setState ({
            list: listCopy;
        })

    }


    getListData() {
        this.setState({
            list: dummyList
        })
    }

    render() {
        const {list} = this.state;
        return (
        <div className="container">
            <h1 className='center'> To do list </h1>
            <AddItem add={this.addItem}/>
            <List toDos={list}/>
        </div>
    );
  }
}
export default App;