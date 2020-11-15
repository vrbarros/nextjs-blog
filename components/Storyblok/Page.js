import { Storyblok } from '@app/components';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import SbEditable from 'storyblok-react';

const Page = ({ content }) => (
  <SbEditable content={content}>
    <Container maxWidth="lg">
      {content.body.map((blok) => (
        <Storyblok.DynamicComponent blok={blok} key={blok._uid} />
      ))}
    </Container>
  </SbEditable>
);

Page.propTypes = {
  content: PropTypes.object
};

export default Page;
