import MUIDataTable, { MUIDataTableColumn } from "mui-datatables";
import { FC, useEffect, useState } from "react";
import genreHttp from "../../util/http/genre-http";
const columnsDefinitions: MUIDataTableColumn[] = [
  {
    name: "name",
    label: "Name",
  },
  {
    name: "categoriesId",
    label: "Categorias",
    options: {
      customBodyRender: (value) => {
        console.log(value);
        return value.map((category) => category.name).join(", ");
      }
    }
  },
  {
    name: "is_active",
    label: "Ativo",
    options: {
      customBodyRender: (value) => {
        return value ? "Sim" : "Não";
      }
    }
  },
  {
    name: "createdAt",
    label: "Criado em",
    options: {
      customBodyRender: (value) => {
        return new Date(value).toLocaleString("pt-BR");
      }
    }
  },
];
const Table: FC = () => {

  const [genres, setGenres] = useState<any[]>([]);

  useEffect(() => {
    genreHttp.listWithCategories().then((response) => {
      setGenres(response.data);
    });
  }, []);
  
  useEffect(() => {
    console.log(genres);
  }, [genres]);

  return (
    <MUIDataTable title="Gêneros" columns={columnsDefinitions} data={genres} />
  );
};

export default Table;
