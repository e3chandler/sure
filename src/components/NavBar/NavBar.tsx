import { Link, Box, Button } from '@mui/material';
import { Link as RouterLink, NavLink } from 'react-router-dom';
type TNavBar = {
  links: {
    text: string;
    href: string;
    'data-testid'?: string;
  }[];
};

function NavBar({ links }: TNavBar) {
  return (
    <Box
      component="aside"
      sx={{
        background: '#0c2975',
        padding: '16px',
        width: '200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Link
        component={RouterLink}
        to="/"
        sx={{ cursor: 'pointer', marginBottom: '80px', marginTop: '40px' }}
      >
        <img src="/surelogo.svg" alt="logo"></img>
      </Link>

      {/* Use NavLink for the built in active class handling and accessibility */}
      {links.map(({ text, href, 'data-testid': dataTestId }) => (
        <Button
          component={NavLink}
          key={href}
          to={href}
          sx={{
            color: '#fff',  
            '&.active': {
              backgroundColor: '#0070ff'
            }
          }}
          data-testid={dataTestId}
        >
          {text}
        </Button>
      ))}
    </Box>
  );
}

export default NavBar;
