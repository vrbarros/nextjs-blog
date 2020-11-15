import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { Link } from '@app/components';
import { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  avatar: {
    marginRight: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.main
  },
  title: {
    flexGrow: 1,
    color: theme.palette.primary.contrastText
  },
  button: {
    marginRight: theme.spacing(1)
  }
}));

function Navigation() {
  // Hooks
  const classes = useStyles();
  const { locale, locales } = useRouter();

  // States
  const [anchorEl, setAnchorEl] = useState(null);

  // Actions
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Constants
  const localesOptions = {
    en: {
      label: 'English'
    },
    'pt-br': {
      label: 'Português'
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link href="/" locale={locale} underline="none">
            <Avatar className={classes.avatar}>
              <Icon>public</Icon>
            </Avatar>
          </Link>
          <Typography variant="h6" className={classes.title}>
            Victor Barros
          </Typography>
          <Button
            className={classes.button}
            startIcon={<Icon>home</Icon>}
            color="inherit"
            component={Link}
            href="/"
            locale={locale}
            naked>
            Home
          </Button>
          <Button
            className={classes.button}
            startIcon={<Icon>book</Icon>}
            color="inherit"
            component={Link}
            href="/blog"
            locale={locale}
            naked>
            Blog
          </Button>
          <Button
            color="inherit"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            startIcon={<Icon>translate</Icon>}>
            {localesOptions[locale]?.label}
          </Button>
        </Toolbar>
      </AppBar>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        {locales.map((key) => (
          <MenuItem key={key} component="a" href={`/${key}`}>
            {localesOptions[key]?.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

Navigation.propTypes = {};

export default Navigation;
