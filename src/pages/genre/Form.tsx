import {
  Box,
  Checkbox,
  TextField,
  Button,
  ButtonProps,
  makeStyles,
  Theme,
  Typography,
  FormControlLabel,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { FC, Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import categoryHttp from "../../util/http/category-http";
import genreHttp from "../../util/http/genre-http";

const useStyles = makeStyles((theme: Theme) => {
  return {
    submit: {
      margin: theme.spacing(1),
    },
  };
});

export const Form: FC = () => {
  const { register, handleSubmit, watch, setValue } = useForm();
  const classes = useStyles();
  const [categories, setCategories] = useState<any[]>([]);
  const buttonProps: ButtonProps = {
    className: classes.submit,
    variant: "contained",
    color: "primary",
  };

  useEffect(() => {
    categoryHttp.list().then((response) => {
      setCategories(response.data);
    });
  }, []);

  const onSubmit = (formData) => {
    genreHttp.create(formData).then(() => {
      alert("Gênero criada com sucesso!");
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Nome"
        fullWidth
        margin="normal"
        variant="outlined"
        {...register("name")}
      />
      <Autocomplete
        multiple
        {...register("categoriesId")}
        options={categories}
        disableCloseOnSelect
        getOptionLabel={(option) => option.name}
        renderOption={(option, { selected }) => (
          <Fragment>
            <Checkbox style={{ marginRight: 8 }} checked={selected} />
            {option.name}
          </Fragment>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Categorias"
            variant="outlined"
            fullWidth
          />
        )}
        onChange={(event, value) =>
          setValue(
            "categoriesId",
            value.map((category) => category._id)
          )
        }
      />
      <FormControlLabel
          control={
              <Checkbox
                  color="primary"
                  {...register('is_active')}
                  checked={watch('is_active')}
              />
          }
          label='Ativo?'
          labelPlacement='end'
      />
      <Box dir="rtl">
        <Button
          {...buttonProps}
          onClick={() => console.log(watch("categoriesId"))}
        >
          Salvar e voltar
        </Button>
        <Button {...buttonProps} type="submit">
          Salvar e continuar editando
        </Button>
      </Box>
    </form>
  );
};
