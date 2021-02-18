import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  IconButton,
  Tooltip,
  Container,
  Box,
  Divider,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import Image from 'next/image';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import BookIcon from '@material-ui/icons/Book';
import TwitterIcon from '@material-ui/icons/Twitter';
import RedditIcon from '@material-ui/icons/Reddit';
import GitHubIcon from '@material-ui/icons/GitHub';

import { Link } from '@/components';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(4),
  },
}));

function Footer() {
  const classes = useStyles();

  const socials = [
    { title: 'Facebook', Icon: FacebookIcon, href: '#' },
    { title: 'Instagram', Icon: InstagramIcon, href: '#' },
    { title: 'LinkedIn', Icon: LinkedInIcon, href: '#' },
    { title: 'Medium', Icon: BookIcon, href: '#' },
    { title: 'Twitter', Icon: TwitterIcon, href: '#' },
    { title: 'Reddit', Icon: RedditIcon, href: '#' },
    { title: 'GitHub', Icon: GitHubIcon, href: '#' },
  ];

  const technology = [
    { label: 'JavaScript', href: '#', tag: null },
    { label: 'React', href: '#', tag: null },
    { label: 'Python', href: '#', tag: null },
    { label: 'Django', href: '#', tag: null },
    { label: 'AWS', href: '#', tag: null },
    { label: 'Machine Learning', href: '#', tag: null },
  ];

  const education = [
    { label: 'Inovação', href: '#', tag: null },
    { label: 'Ensino Híbrido', href: '#', tag: null },
    { label: 'Ensino à Distância', href: '#', tag: null },
    { label: 'Startups', href: '#', tag: null },
  ];

  const entrepreneurship = [
    { label: 'Ideação', href: '#', tag: null },
    { label: 'Pitch Deck', href: '#', tag: null },
    { label: 'Angel Investments', href: '#', tag: null },
    { label: 'Venture Capital', href: '#', tag: null },
    { label: 'Startups', href: '#', tag: null },
  ];

  const renderLinks = link => (
    <Box key={link.label} sx={{ mb: 1 }}>
      <Link variant="body2" color="textPrimary" href={link.href}>
        {link.label}
      </Link>
    </Box>
  );

  return (
    <footer className={classes.footer}>
      <Divider />
      <Container maxWidth="lg">
        <Box sx={{ m: 4 }}>
          <Grid container spacing={2}>
            <Grid item md={2} sm={6} xs={12}>
              <Image src="/logo.png" width="100%" height="100%" />
            </Grid>
            <Grid item md={2} sm={6} xs={12}>
              <Typography variant="overline" color="textSecondary">
                Tecnologia
              </Typography>
              {technology.map(renderLinks)}
            </Grid>
            <Grid item md={2} sm={6} xs={12}>
              <Typography variant="overline" color="textSecondary">
                Educação
              </Typography>
              {education.map(renderLinks)}
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <Typography variant="overline" color="textSecondary">
                Empreendedorismo
              </Typography>
              {entrepreneurship.map(renderLinks)}
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box sx={{ mr: 1 }}>
                  <MailOutlineIcon />
                </Box>
                <Typography variant="subtitle2" color="textPrimary">
                  Quer receber conteúdos interessantes por e-mail?
                </Typography>
              </Box>
              <TextField label="E-mail" variant="standard" fullWidth />
              <Box sx={{ mt: 2 }}>
                <Button variant="contained" size="large">
                  Inscrever-se
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={0}>
                {socials.map(({ Icon: SocialIcon, ...social }) => (
                  <Grid item key={social.title}>
                    <Tooltip title={social.title}>
                      <IconButton component="a" href={social.href} target="_blank" color="primary">
                        <SocialIcon />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;
