import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import ImageUpload from './components/ImageUpload/ImageUpload';
import ImageComparison from './components/ImageComparison/ImageComparison';
import ImageGallery from './components/ImageGallery/ImageGallery';
import HomeDescriptions from './components/HomeDescriptions/HomeDescriptions';
import 'tachyons';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            route: 'home',
            imageSources: []
        }
    }

    onInputChange = ( event ) => {
        event.preventDefault();
        const files = event.target.files;
        console.log(files);

        Array.prototype.forEach.call(files, file => {
             let reader = new FileReader();

             reader.onloadend = () => {
                 this.setState( {imageSources: this.state.imageSources.concat(reader.result)} );
             }

             reader.readAsDataURL(file);
        });
    }

    onRouteChange = ( route ) => {
        this.state.imageSources.length = 0;
        this.setState( {route: route} );
    }

    render(){
        const { route, imageSources } = this.state;

        console.log('route', route);

        if (route === 'home') {
            return (
                <div className='App'>
                    <div>
                        <Navigation onRouteChange={this.onRouteChange} />
                        <HomeDescriptions />
                    </div>
                </div>
            );
        }
        else if (route === 'casual'){
             return (
                 <div className='App'>
                     <div>
                         <Navigation onRouteChange={this.onRouteChange} />
                         { (imageSources.length === 0)
                           ?
                           <ImageUpload route={route} onInputChange={(event) => this.onInputChange(event) } />
                           :
                           <ImageGallery imageSources={imageSources} />
                         }
                     </div>
                 </div>
             );
        }
        else{
            return (
                <div className='App'>
                    <Navigation onRouteChange={this.onRouteChange} />
                    { (imageSources.length > 1)
                      ?
                      <ImageComparison route={route} imageSources={imageSources} />
                      :
                      <ImageUpload route={route} onInputChange={(event) => this.onInputChange(event) } />
                    }
                </div>
            );
        }
    }
}

export default App;
