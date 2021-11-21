import { Box, Fab } from '@material-ui/core';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../../components/Page';
import AddIcon from '@material-ui/icons/Add';
import Table from './Table';

const PageList: FC = () => {
  return (
    <Page title="Listagem de categoria">
      <Box dir="rtl">
        <Fab
          title="Adicionar categoria"
          size="small"
          component={Link}
          to="/categories/create"
        >
          <AddIcon />
        </Fab>
      </Box>
      <Box>
        <Table/>
      </Box>
    </Page>
  );
};

export default PageList;