import { Box, Checkbox, TextField, Button, ButtonProps, makeStyles, Theme } from '@material-ui/core';
import { FC } from 'react';

const useStyles = makeStyles((theme: Theme) => {
  return {
    submit: {
      margin: theme.spacing(1),
    },
  };
});

export const Form: FC = () => {
  const classes = useStyles();
  const buttonProps: ButtonProps = {
    className: classes.submit,
    variant: "contained",
    color: "primary",
    type: "submit"
  }

  return (
    <form>
      <TextField
        name="name"
        label="Nome"
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <TextField
        name="description"
        label="Descrição"
        fullWidth
        margin="normal"
        variant="outlined"
        multiline
      />
      <Checkbox
        name="is_active"
      />
      Ativo?
      <Box dir="rtl">
        <Button
          {...buttonProps}
        >
          Salvar e voltar
        </Button>
        <Button {...buttonProps} type="submit">
          Salvar e continuar editando
        </Button>
      </Box>
    </form>
  )
}