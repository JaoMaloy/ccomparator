import React from 'react';
import ReactCompareImage from 'react-compare-image';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { styled } from '@material-ui/core/styles';
import ImagePalette from '../ImagePalette/ImagePalette';
import './ImageComparison.css';
import { FormHelperText, Icon } from '@material-ui/core';

const TitleTypography = styled(Typography)({
    color: 'white',
    fontWeight: 100,
});

const ButtonOverlay = styled(IconButton)({
    position: 'absolute',
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

    onPressPrevious = () => {
        const { route, imageSources } = this.props;
        let { imageViewCount } = this.state;

        if (this.state.imageViewCount > 1)
        {
            if (route === '1vsMany')
            {
                this.setState({
                    rightImage: imageSources[--imageViewCount],
                    imageViewCount: imageViewCount
                })
            }
            else if (route === 'royalRumble')
            {
                this.setState({
                    leftImage: imageSources[imageViewCount-2],
                    rightImage: imageSources[--imageViewCount],
                    imageViewCount: imageViewCount
                })
            }
        }
    }

    render() {
        const { leftImage, rightImage } = this.state;

        if (this.props.route === '1vs1') {
            return (
                <div className='base'>
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
                </div>
            );
        }
        else if (this.props.route === '1vsMany') {
             return(
                 <div className='base'>
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
                            <ButtonOverlay className='previous-button'>
                                <NavigateBeforeIcon fontSize='large' style={{ color: 'white' }} onClick={this.onPressPrevious} />
                            </ButtonOverlay>
                            <ButtonOverlay className='next-button'>
                                <NavigateNextIcon fontSize='large' style={{ color: 'white' }} onClick={this.onPressNext} />
                            </ButtonOverlay>
                        </div>
                        <div>
                            <ImagePalette imageSource={rightImage} />
                        </div>
                     </div>
                 </div>
             );
        }
        else if (this.props.route === 'royalRumble') {
            return (
                <div className='base'>
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
                            <ButtonOverlay className='previous-button'>
                                <NavigateBeforeIcon fontSize='large' style={{ color: 'white' }} onClick={this.onPressPrevious} />
                            </ButtonOverlay>
                            <ButtonOverlay className='next-button'>
                                <NavigateNextIcon fontSize='large' style={{ color: 'white' }} onClick={this.onPressNext} />
                            </ButtonOverlay>
                        </div>
                        <div>
                            <ImagePalette imageSource={rightImage} />
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default ImageComparison;