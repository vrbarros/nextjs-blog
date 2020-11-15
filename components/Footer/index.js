import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto'
  }
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Box mb={4}>
          <Divider />
        </Box>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="/">
            Victor Barros
          </Link>{' '}
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;
