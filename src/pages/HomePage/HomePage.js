import React from 'react';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import Button from '@material-ui/core/Button';
import InfoCard from '../../components/InfoCard/InfoCard';
import './HomePage.css'

class HomePage extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      onRouteChange: this.props.onRouteChange
    }

    this.cardsContainer = React.createRef();
  }

  handleGetStarted = () => {
    if(this.cardsContainer.current){
        this.cardsContainer.current.scrollIntoView({ 
            behavior: "smooth", 
            block: "nearest"
        })
    }
  }

  render() {
    return (
      <div>
        <div className='splash-page'>
          <HomeHeader />
          <div className='center shadow-5'>
            <Button className='styledButton' component='span' variant='contained' size='large' color='inherit' onClick={this.handleGetStarted}> Get Started </Button>
          </div>
        </div>
        <div id='cards-container' ref={this.cardsContainer}>
          <InfoCard title={'Casual'} description={'Casual'} onRouteChange={this.state.onRouteChange} />
          <InfoCard title={'One vs One'} description={'1v1'} onRouteChange={this.state.onRouteChange} />
          <InfoCard title={'One vs Many'} description={'1vMany'} onRouteChange={this.state.onRouteChange} />
          <InfoCard title={'Royal Rumble'} description={'Royal Rumble'} onRouteChange={this.state.onRouteChange} />
        </div>
      </div>
    );
  }
}

export default HomePage;