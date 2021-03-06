import { FC } from 'react';
import { useParams } from 'react-router';
import { Page } from '../../components/Page';
import { Form } from './Form';

const PageForm: FC = () => {
  const { id } = useParams<{id: string}>();
  return (
    <Page title={!id ? "Criar categoria" : "Editar categoria"}>
      <Form />
    </Page>
  );
};

export default PageForm;