import * as React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Toolbar from '@mui/material/Toolbar'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import AccountCircle from '@mui/icons-material/AccountCircle'
import ProTip from './ProTip'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  )
}

export default function App() {
  const [auth, setAuth] = React.useState(true)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked)
  }

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }}
              // sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              LOGO
            </Typography>
            {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}></Box> */}
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          </Toolbar>
          {/* <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Create React App example with TypeScript
          </Typography>
          <ProTip />
          <Copyright />
        </Box> */}
        </Container>
      </AppBar>
      <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', minHeight: '95vh' }}>
        <Typography variant="h4" component="div" sx={{ flexGlow: 1 }}>
          Create React App example with TypeScript
        </Typography>
      </Container>
      <Copyright />
    </div>
  )
}
