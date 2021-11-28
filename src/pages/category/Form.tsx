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
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import categoryHttp from "../../util/http/category-http";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "../../util/vendor/yup";
import { useHistory, useParams } from "react-router";
import { useSnackbar } from "notistack";

const useStyles = makeStyles((theme: Theme) => {
  return {
    submit: {
      margin: theme.spacing(1),
    },
  };
});

const validationSchema = yup.object().shape({
  name: yup.string().label("Nome").required().max(255),
  description: yup.string().label("Descrição").required().max(255),
});

export const Form: FC = () => {
  const [labelShrink, setLabelShrink] = useState(false);
  const [checkedDefault, setCheckedDefault] = useState(true);
  const [category, setCategory] = useState<{
    _id: string;
    is_active: boolean;
  } | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams<{ id: string }>();
  const snackbar = useSnackbar();
  const buttonProps: ButtonProps = {
    className: classes.submit,
    variant: "outlined",
    color: "primary",
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    categoryHttp
      .get(id)
      .then((response) => {
        setCategory(response.data);
        reset(response.data);
        setCheckedDefault(response.data.is_active);
        setLabelShrink(true);
      })
      .finally(() => setLoading(false));
  }, []);

  const onSubmit = (formData, event) => {
    console.log(formData);
    setLoading(true);
    const http = !id
      ? categoryHttp.create(formData)
      : categoryHttp.update(id, formData);
    http
      .then((response) => {        
        snackbar.enqueueSnackbar("Categoria salva com sucesso!", {
          variant: "success",
        });
        setTimeout(() => {
          if (event) {
            id
              ? history.replace(`/categories/${id}/edit`)
              : history.replace(`/categories/${response.data._id}/edit`);
          } else {
            history.push("/categories");
          }
        });
      })
      .finally(() => setLoading(false))
      .catch((error) => {
        console.error(error);
        snackbar.enqueueSnackbar("Não foi possível salvar a categoria!", {
          variant: "error",
        });
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
        disabled={loading}
        error={errors.name ? true : false}
        helperText={errors.name?.message}
        onChange={() => setLabelShrink(true)}
        InputLabelProps={{ shrink: labelShrink }}
      />
      <TextField
        label="Descrição"
        fullWidth
        margin="normal"
        variant="outlined"
        multiline
        rows={4}
        {...register("description")}
        disabled={loading}
        error={errors.description ? true : false}
        helperText={errors.description?.message}
        onChange={() => setLabelShrink(true)}
        InputLabelProps={{ shrink: labelShrink }}
      />
      <FormControlLabel
        control={
          <Checkbox
            color="primary"
            {...register("is_active")}
            onChange={() => setCheckedDefault(!checkedDefault)}
            checked={checkedDefault}
          />
        }
        disabled={loading}
        label="Ativo?"
        labelPlacement="end"
      />
      <Box dir="rtl">
        <Button
          {...buttonProps}
          onClick={() => onSubmit(watch(), null)}
          disabled={loading}
        >
          Salvar e voltar
        </Button>
        <Button {...buttonProps} type="submit" disabled={loading}>
          Salvar e continuar editando
        </Button>
      </Box>
    </form>
  );
};
