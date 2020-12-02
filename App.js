import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = { images: [] }; 

     onSearchSumit = async term => {
        // Este bloque de codigo es el api o funcionalidad que me permite hacer request a un servidor externo para extraer imagenes
       const response = await unsplash.get('/search/photos', {
           params: { query: term },
            
            }); /*.then(response => {
                console.log(response.data.results);
                }); */
        this.setState({ images: response.data.results });
    }

    render() {
    return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSumit} />
                found: {this.state.images.length} images
            </div>
        )
    } 
};

export default App;