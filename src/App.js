import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import ImageUpload from './components/ImageUpload/ImageUpload';
import ImageComparison from './components/ImageComparison/ImageComparison';
import ImageGallery from './components/ImageGallery/ImageGallery';
import HomeDescriptions from './components/HomeDescriptions/HomeDescriptions';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import 'tachyons';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            route: 'home',
            imageSources: [],
            openSnackbar: false,
        }
    }

    onInputChange = ( event ) => {
        event.preventDefault();
        const files = event.target.files;
        console.log(files);

        Array.prototype.forEach.call(files, file => {
             let reader = new FileReader();

             reader.onloadend = () => {
                 this.setState({ imageSources: this.state.imageSources.concat(reader.result), openSnackbar: true });
                 console.log('log', this.state.openSnackbar);
             }

             reader.readAsDataURL(file);
        });
    }

    onRouteChange = ( route ) => {
        this.state.imageSources.length = 0;
        this.setState( {route: route} );
    }

    handleClose = (reason) => {
        if (reason === 'clickaway'){
            return;
        }
        this.setState({ openSnackbar: false })
    }

    render(){
        const { route, imageSources } = this.state;

        console.log('route', route);

        if (route === 'home') {
            return (
                <div id='app' className='App'>
                    <header>
                        <Navigation onRouteChange={this.onRouteChange} />
                    </header>
                    <main className='body'>
                        <HomeDescriptions />
                    </main>
                </div>
            );
        }
        else if (route === 'casual'){
            return (
                <div className='App'>
                        <Navigation onRouteChange={this.onRouteChange} />
                        { (imageSources.length === 0)
                        ?
                        <div className='body'>
                            <ImageUpload route={route} onInputChange={(event) => this.onInputChange(event)} imageCount={imageSources.length}/>
                        </div>
                        :
                        <div className='body'>
                            <ImageGallery imageSources={imageSources} />
                        </div>
                        }
                        <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} open={this.state.openSnackbar} autoHideDuration={6000} onClose={this.handleClose} message="Image Uploaded"
                        action={
                            <React.Fragment>
                                <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleClose}>
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            </React.Fragment>
                        }
                        />
                </div>
            );
        }
        else{
            return (
                <div className='App'>
                    <Navigation onRouteChange={this.onRouteChange} />
                    { (imageSources.length > 1)
                      ?
                      <div className='body'>
                        <ImageComparison route={route} imageSources={imageSources} />
                      </div>
                      :
                      <div className='body'>
                        <ImageUpload route={route} onInputChange={(event) => this.onInputChange(event) } />
                      </div>
                    }
                    <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} open={this.state.openSnackbar} autoHideDuration={6000} onClose={this.handleClose} message="Image Uploaded"
                    action={
                        <React.Fragment>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleClose}>
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </React.Fragment>
                    }
                    />
            </div>
            );
        }
    }
}

export default App;
