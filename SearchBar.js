import React from 'react';


class SearchBar extends React.Component {
    /*
    onInputChange(event){ // Creating event handlers
        console.log(event.target.value);
    }
    <input type="text" onChange={this.onInputChange}/>  Este es el input cuando se utiliza el evento
    */

    state = { term: ''};

    onFormSubmit = event => { // usando el err function resolvemos el error --> Cannot read property 'state' of undefined
        event.preventDefault();

       this.props.onSubmit(this.state.term);
    }

    // <input type="text" onChange={e =>  console.log(e.target.value)}/> otra forma de llamar el metodo onChance
    // <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form"> con esta linea de codigo resolvemos este error --> Cannot read property 'state' of undefined
    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image search</label>
                        <input type="text" 
                        value={this.state.term}
                        onChange={e => this.setState({term: e.target.value})}/> 
                    </div>
                </form>
            </div>
        ) 
    }
};

export default SearchBar;