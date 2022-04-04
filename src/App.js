import logo from './logo.svg';
import MediaUpload from './components/MediaUpload';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'roboto',
    },
  },
});


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ThemeProvider theme={theme}>
          <Container maxWidth="lg">
            <MediaUpload />
          </Container>
      </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
