import { useState, useEffect } from 'react';
import * as C from './appstiles';
import { TableArea } from './components/TableComponent/table';
import { items } from "../src/Data/items";
import { Item } from "../src/Types/item";
import { obterNomeMesAtual, listFilter } from '../src/helpers/getmounth';
import { InfoArea } from "../src/components/infoArea";
import { categorias } from './Data/categoria';
import { Inputdados } from "./components/IpuntData/index";

const App = () => {
  const [list, setList] = useState(items);
  const [newList, setNewList] = useState<Item[]>([]);
  const [mesAtual, setmesAtual] = useState(obterNomeMesAtual());
  const [ receita,setReceita]= useState(0);
  const [despesa,setDespesa]=useState(0);

  useEffect(() => {
    setNewList(listFilter(list, mesAtual));
  }, [list, mesAtual]);

  useEffect(()=>{
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in newList) {
      if(categorias[newList[i].category].expense) {
        expenseCount += newList[i].value;
      } else {
        incomeCount += newList[i].value;
      }
    }

    setReceita(incomeCount);
    setDespesa(expenseCount);
  }, [newList]);


  console.log('lista', list);
  console.log('lista filtrada', newList);
  const handleMonthChange = (newMonth: string) => {
    setmesAtual(newMonth);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea
        receita={receita}
        despesa={despesa}
         currentMonth={mesAtual}
 onMonthChange={handleMonthChange} 
    
 />
<Inputdados/>
        <TableArea list={newList} />
      </C.Body>
    </C.Container>
  );
}

export default App;
