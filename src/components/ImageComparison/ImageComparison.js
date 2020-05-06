import React from 'react';
import ReactCompareImage from 'react-compare-image';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import ImagePalette from '../ImagePalette/ImagePalette';
import './ImageComparison.css';
import { FormHelperText } from '@material-ui/core';

const TitleTypography = styled(Typography)({
    color: 'white',
    fontWeight: 100,
});

class ImageComparison extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentSliderPosition: 0,
            leftImage: props.imageSources[0],
            rightImage: props.imageSources[1],
            imageViewCount: 1,
            onHover: false
        }
    }

    setPosition = (position) => {
        console.log(this.state.currentSliderPosition, position);
        this.setState({currentSliderPosition: position});
    }

    onPressPlay = () => {
        console.log(document.getElementsByClassName("image-container")[0].childNode.children[1]);
        console.log(this.state.onHover);
        this.setState({onHover: !this.state.onHover});
    }

    onPressNext = () => {
        const { route, imageSources } = this.props;
        let { imageViewCount } = this.state;

        if (this.state.imageViewCount < (imageSources.length-1))
        {
            if (route === '1vsMany')
            {
                this.setState({
                    rightImage: imageSources[++imageViewCount],
                    imageViewCount: imageViewCount
                })
            }
            else if (route === 'royalRumble')
            {
                this.setState({
                    leftImage: imageSources[imageViewCount],
                    rightImage: imageSources[++imageViewCount],
                    imageViewCount: imageViewCount
                })
            }
        }
    }

    render() {
        const { leftImage, rightImage } = this.state;

        if (this.props.route === '1vs1') {
            return (
                <div className='white'>
                    <TitleTypography variant='h4' gutterBottom> {'One vs One'} </TitleTypography>
                    <div className='container'>
                        <div>
                            <ImagePalette imageSource={leftImage} />
                        </div>
                        <div className='image-container'>
                            <ReactCompareImage
                                leftImage={leftImage}
                                rightImage={rightImage}
                                onSliderPositionChange={this.setPosition}
                            />
                        </div>
                        <div>
                            <ImagePalette imageSource={rightImage} />
                        </div>
                    </div>
                    <input style={{display: 'none'}} id="play-button"/>
                    <label htmlFor="play-button">
                        <Button component='span' variant='outlined' color='inherit' onClick={this.onPressPlay}> Play </Button>
                    </label>
                </div>
            );
        }
        else if (this.props.route === '1vsMany') {
             return(
                 <div className='white'>
                     <TitleTypography variant='h4' gutterBottom> {'One vs Many'} </TitleTypography>
                     <div className='container'>
                        <div>
                            <ImagePalette imageSource={leftImage} />
                        </div>
                        <div className='image-container'>
                            <ReactCompareImage
                                leftImage={leftImage}
                                rightImage={rightImage}
                                handle={<React.Fragment />}
                                onSliderPositionChange={this.setPosition}
                            />
                        </div>
                        <div>
                            <ImagePalette imageSource={rightImage} />
                        </div>
                     </div>
                     <input style={{display: 'none'}} id="next-button"/>
                     <label htmlFor="next-button">
                         <Button component='span' variant='outlined' color='inherit' onClick={this.onPressNext}> Next </Button>
                     </label>
                 </div>
             );
        }
        else if (this.props.route === 'royalRumble') {
            return (
                <div className='white'>
                    <TitleTypography variant='h4' gutterBottom> {'Royal Rumble'} </TitleTypography>
                    <div className='container'>
                        <div>
                            <ImagePalette imageSource={leftImage} />
                        </div>
                        <div className='image-container'>
                            <ReactCompareImage
                                leftImage={leftImage}
                                rightImage={rightImage}
                                handle={<React.Fragment />}
                                onSliderPositionChange={this.setPosition}
                            />
                        </div>
                        <div>
                            <ImagePalette imageSource={rightImage} />
                        </div>
                    </div>
                     <input style={{display: 'none'}} id="next-button"/>
                     <label htmlFor="next-button">
                         <Button component='span' variant='outlined' color='inherit' onClick={this.onPressNext}> Next </Button>
                     </label>
                </div>
            );
        }
    }
}

export default ImageComparison;