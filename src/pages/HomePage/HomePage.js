import React from 'react';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import Button from '@material-ui/core/Button';
import InfoCard from '../../components/InfoCard/InfoCard';
import './HomePage.css';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onRouteChange: this.props.onRouteChange,
    };

    this.cardsContainer = React.createRef();
  }

  handleGetStarted = () => {
    if (this.cardsContainer.current) {
      this.cardsContainer.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  };

  render() {
    return (
      <div>
        <div className="splash-page">
          <HomeHeader />
          <div className="center shadow-5">
            <Button
              className="styledButton"
              component="span"
              variant="contained"
              size="large"
              color="inherit"
              onClick={this.handleGetStarted}
            >
              {' '}
              Get Started{' '}
            </Button>
          </div>
        </div>
        <div id="cards-container" ref={this.cardsContainer}>
          <InfoCard
            title={'Casual'}
            description={
              'An image gallery to watch all of your selected images'
            }
            onRouteChange={this.state.onRouteChange}
          />
          <InfoCard
            title={'One vs One'}
            description={
              'Compare two images by moving the slider in the center'
            }
            onRouteChange={this.state.onRouteChange}
          />
          <InfoCard
            title={'One vs Many'}
            description={
              'Compare multiple images with a base image as a reference'
            }
            onRouteChange={this.state.onRouteChange}
          />
          <InfoCard
            title={'Royal Rumble'}
            description={'Compare all the images you select sequentially'}
            onRouteChange={this.state.onRouteChange}
          />
        </div>
      </div>
    );
  }
}

export default HomePage;
