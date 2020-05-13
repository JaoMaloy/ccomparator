import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    jumbotron: {
        paddingBottom: 100
    },
    typography: {
        color: 'white',
        fontWeight: 100
    },
    button: {
        backgroundColor: '#1F7A8C',
        color: 'white',

        '&:hover': {
            backgroundColor: '#022B3A',
            cursor: 'pointer',
        },
            '&:before': {
                transform: 'translateX(300px)  skewX(-15deg)',
                opacity: '0.6',
                transition: '.7s',
            },
            '&:after': {
                transform: 'translateX(300) skewX(15)',
                opacity: '1',
                transition: '.7s',
            }
    },
    badge: {
        backgroundColor: '#022B3A',
        color: 'white'
    }
}));

const ImageUpload = ({ route, onInputChange }) => {
    const classes = useStyles();

    if (route === '1vs1')
    {
         return (
             <div>
                 <div className={classes.jumbotron}>
                     <Typography className={classes.typography} variant='h2' gutterBottom> {'One vs One'} </Typography>
                     <Typography className={classes.typography} variant='h5' gutterBottom> {'Compare two images by moving the slider in the center'} </Typography>
                 </div>

                 <div className='white center flex justify-center'>
                    <div className='center shadow-5'>
                        <input style={{ display: 'none' }} accept='image/*' id="browse-button" type='file' onChange={onInputChange}/>
                        <label htmlFor="browse-button">
                            <Button className={classes.button} component='span' variant='contained' size='large' color='inherit'> Upload Image </Button>
                        </label>
                    </div>
                    <div className='center shadow-5'>
                         <label htmlFor="browse-button">
                            <Button className={classes.button} component='span' variant='contained' size='large' color='inherit'> Upload Image </Button>
                         </label>
                    </div>
                 </div>
             </div>
         );
    }
    else if (route === '1vsMany')
    {
        return (
            <div>
                <div className={classes.jumbotron}>
                    <Typography className={classes.typography} variant='h2' gutterBottom> {'One vs Many'} </Typography>
                    <Typography className={classes.typography} variant='h5' gutterBottom> {'Compare multiple images with a base image as a reference'} </Typography>
                </div>

                <div className='center flex flex-wrap justify-center white'>
                    <div className='center shadow-5'>
                        <input style={{ display: 'none' }} accept='image/*' id="browse-button" type='file' onChange={onInputChange}/>
                        <label htmlFor="browse-button">
                            <Button className={classes.button} component='span' variant='contained' size='large' color='inherit'> Upload Image </Button>
                        </label>
                    </div>
                    <div className='center shadow-5'>
                         <input style={{ display: 'none' }} accept='image/*' id="browse-multiple-button" type='file' onChange={onInputChange} multiple/>
                         <label htmlFor="browse-multiple-button">
                            <Button className={classes.button} component='span' variant='contained' size='large' color='inherit'> Upload Images </Button>
                         </label>
                    </div>
                </div>
            </div>
        );
    }
    else
    {
        if (route === 'casual')
        {
             return (
                 <div>
                     <div className={classes.jumbotron}>
                         <Typography className={classes.typography} variant='h2' gutterBottom> {'Casual Mode'} </Typography>
                         <Typography className={classes.typography} variant='h5' gutterBottom> {'Just an image gallery to watch all of your selected images'} </Typography>
                     </div>

                     <div className='white center flex flex-wrap justify-center'>
                         <div className='center shadow-5'>
                             <input style={{ display: 'none' }} accept='image/*' id="browse-multiple-button" type='file' multiple onChange={onInputChange}/>
                             <label htmlFor="browse-multiple-button">
                                <Button className={classes.button} component='span' variant='contained' size='large'> Upload Images </Button>
                             </label>
                         </div>
                     </div>
                 </div>
             );
        }
        else
        {
             return (
                 <div>
                     <div className={classes.jumbotron}>
                         <Typography className={classes.typography} variant='h2' gutterBottom> {'Royal Rumble'} </Typography>
                         <Typography className={classes.typography} variant='h5' gutterBottom> {'Compare all the images you select sequentially'} </Typography>
                     </div>

                     <div className='white center flex flex-wrap justify-center'>
                         <div className='center shadow-5 '>
                              <input style={{ display: 'none' }} accept='image/*' id="browse-button" type='file' multiple onChange={onInputChange}/>
                              <label htmlFor="browse-button">
                                  <Button className={classes.button} component='span' variant='contained' size='large' color='inherit'> Upload Images</Button>
                              </label>
                         </div>
                     </div>
                 </div>
             );
        }

    }

}

export default ImageUpload;