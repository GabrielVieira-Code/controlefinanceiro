import * as C from "./stiled";
import { Item } from '../../Types/item';
import { TableItem } from "../lineComponent/index";
import { formatDate } from "../../helpers/getmounth";

type Props = {
    list: Item[]
}


export const TableArea = ({list}:Props) => {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.ColumTable width={100}>Data</C.ColumTable>

                    <C.ColumTable width={130}>Categoria</C.ColumTable>
                    <C.ColumTable>Título</C.ColumTable>
                    <C.ColumTable width={150}>Valor</C.ColumTable>
                </tr>
            </thead>
            <tbody>
            {list.map((item, index)=>(
                    <TableItem key={index} item={item} />
                ))}
           

            </tbody>
        </C.Table>
    );
}