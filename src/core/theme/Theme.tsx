import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
    palette: {
        primary: { main: '#4acc4a', contrastText: '#fff', },
        secondary: {main: '#ffffff'}
    },
});

export { customTheme };
