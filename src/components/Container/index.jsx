import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

const Container = ({ title, children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h2" gutterBottom component="h2">
        {title}
      </Typography>
      {children}
    </Box>
  );
};

Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export { Container };
