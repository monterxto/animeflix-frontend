import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import { FC } from 'react';

const useStyles = makeStyles((theme) => ({
  title: {
    color: '#f8f8f2'
  }
}));

type PageProps = {
  title: string;
};

export const Page: FC<PageProps> = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Typography className={classes.title} component="h1" variant="h5">
          {props.title}
        </Typography>
        <Box paddingTop={1}>
          {props.children}
        </Box>
      </Container>
    </div>
  );
};