import { FC } from 'react';
import { Page } from '../../components/Page';
import { Form } from './Form';

const PageForm: FC = () => {
  return (
    <Page title="Criar categoria">
      <Form />
    </Page>
  );
};

export default PageForm;