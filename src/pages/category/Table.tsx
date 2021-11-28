import MUIDataTable, { MUIDataTableColumn } from "mui-datatables";
import { FC, useEffect, useState } from "react";
import categoryHttp from "../../util/http/category-http";
import {BadgeNo, BadgeYes} from "../../components/Badge";

const columnsDefinitions: MUIDataTableColumn[] = [
  {
    name: "name",
    label: "Name",
  },
  {
    name: "description",
    label: "Descrição",
  },
  {
    name: "is_active",
    label: "Ativo",
    options: {
      customBodyRender: (value) => {
        return value ? <BadgeYes/> : <BadgeNo/>;
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

  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    categoryHttp.list().then((response) => {
      setCategories(response.data);
    });
  }, []);
  
  useEffect(() => {
    console.log(categories);
  }, [categories]);

  return (
    <MUIDataTable title="Categorias" columns={columnsDefinitions} data={categories} />
  );
};

export default Table;
