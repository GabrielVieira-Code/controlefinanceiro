import * as C from "./stile";
import { Item } from '../../Types/item';
import { categorias } from '../../Data/categoria';
import { formatDate } from "../../helpers/getmounth";

type Props={
item:Item
}

export const TableItem = ({ item }: Props) => {
    return (
      <C.Tableline>
      <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
      <C.TableColumn>
          <C.Category color={categorias[item.category].color}>
              {categorias[item.category].title}
          </C.Category>
      </C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>
          <C.Value color={categorias[item.category].expense ? 'red' : 'green'}>
              R$ {item.value}
          </C.Value>
      </C.TableColumn>
  </C.Tableline>
    );
}