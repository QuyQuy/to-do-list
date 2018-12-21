import React, {Component} from 'react';

class AddItem extends Component {

    state = {
        title: '',
        details: ''
    };
    handleSaveItem = (e) => {
        e.preventDefault();
        console.log('newitem', this.state);

        this.props.add(this.state);
        this.reset();
    };
    reset = () => {
        this.setState({
            title: '',
            details: ''
        })
    };
    render() {
        const {title, details} = this.state;
        return (
            <form onSubmit={this.handleSaveItem}>
                <div className='row'>
                    <div className='input-field col s8 offset-s2'>
                        <input onChange={(e) => this.setState({title: e.target.value})} value={title} id='title' type='text' name='title'/>
                        <label htmlFor='title'>Title</label>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field col s8 offset-s2'>
                        <input onChange={(e) => this.setState({details: e.target.value})} value={details} id='title' type='text' name='title'/>
                        <label htmlFor='title'>Title</label>
                    </div>
                </div>
                <div className='row'>
                    <div className=" col s6 center">
                        <button onClick={this.reset} className='btn red waves-effect'>Cancel Item</button>
                    </div>
                    <div className=" col s6 center">
                        <button className='btn green waves-effect'>Add Item</button>
                    </div>
                </div>

            </form>
        )
    }
}

export default AddItem;