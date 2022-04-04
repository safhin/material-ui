import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { makeStyles } from '@material-ui/core';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';


export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 2  }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const Input = styled('input')({
  display: 'none',
});

const linkStyles = makeStyles({
  style: {
    textDecoration: 'none !important',
    color: 'rgb(11, 118, 192) !important',
    fontSize: '17px',
    display: 'block'
  }
});

const sidearHeader = makeStyles({
  root: {
    color: 'rgb(31, 34, 120)',
    fontSize: '18px'
  },
});


const imgStyle = makeStyles({
  root: {
    maxWidth: 100,
    display: 'flex'
  }
})

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];


export default function MediaUpload() {

  const [value, setValue] = React.useState(0);
  const linkStyle = linkStyles();
  const sidebarHeaderClass = sidearHeader();
  const [age, setAge] = React.useState('');
  const imgClass = imgStyle();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSelect = (event) => {
    setAge(event.target.value);
  };

  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Uplaod File" {...a11yProps(0)} />
              <Tab label="Media Libray" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Grid container>
              <Grid item xs={4} md={4}>
                <Card sx={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#f6f7f9'
                }} variant="outlined">
                  <CardContent xs={{ height: '100%' }}>
                    <h5 className={sidebarHeaderClass.root}>Insert Media</h5>
                    <Link to='#' className={linkStyle.style}>Create Gallery</Link>
                    <Link to='#' sx={{
                      borderBottom: 1,
                      borderColor: 'divider',
                    }} className={linkStyle.style} paddingBottom={2}>Set Featured Image</Link>
                    <Link to='#' className={linkStyle.style} marginTop={2}>
                      Create Gallery
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={8} md={8}>
                <CardContent
                  sx={{
                    width: '100%',
                    height: '60vh',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    borderBottom: 1,
                    borderColor: 'divider'
                  }}
                >
                  <div className='parentCard'>
                    <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
                      Drop files anywhere to upload
                    </Typography>
                    <label htmlFor="contained-button-file">
                      <Input accept="image/*" id="contained-button-file" multiple type="file" />
                      <Button variant="outlined" component="span">
                        Select Files
                      </Button>
                    </label>
                    <Typography sx={{ fontSize: 15, mt: '10px' }} color="text.secondary" gutterBottom>
                      Maximum upload file size 30 mb
                    </Typography>
                  </div>
                </CardContent>
                <CardActions sx={{ justifyContent: "right" }}>
                  <Button size="small" variant='contained'>insert into post</Button>
                </CardActions>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid container>
              <Grid item xs={8} md={8} pr={2}>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                  <FormControl sx={{ width: '200px' }}>
                    <InputLabel id="demo-simple-select-label">All Dates</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="All Dates"
                      onChange={handleSelect}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                  <Box
                    component="form"
                    sx={{
                      '& .MuiTextField-root': { width: '30ch', pt: '10px', paddingTop: '0px', display: 'flex', justifyContent: 'end' },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        required
                        id="outlined-required"
                        label="Search"
                      />
                    </div>
                  </Box>
                </Box>
                <ImageList sx={{ width: '100%', height: 'auto' }} cols={5} rowHeight={164}>
                  {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                      <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Grid>
              <Grid item xs={4} md={4} p={2} sx={{ backgroundColor: '#f6f7f9' }}>
                <Card sx={{ minWidth: 275, borderLeft: 3, borderColor: 'error.main' }}>
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      uploading
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      capture.jpg
                    </Typography>
                    <Typography variant="body2">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                </Card>

                <Card sx={{ mt: '30px' }}>
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Attachment Details
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      capture.jpg
                    </Typography>
                    <Typography variant="body2">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                </Card>

                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '37ch', pt: '10px' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField
                      required
                      id="outlined-required"
                      label="URL"
                    />
                  </div>
                  <div>
                    <TextField
                      required
                      id="outlined-required"
                      label="URL"
                    />
                  </div>
                  <div>
                    <TextField
                      required
                      id="outlined-required"
                      label="URL"
                    />
                  </div>
                </Box>
              </Grid>
            </Grid>
          </TabPanel>
        </Box>
      </Grid>
    </Grid>
  );
}