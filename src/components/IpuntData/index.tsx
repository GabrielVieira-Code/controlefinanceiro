import * as C from "./stiled";
import React, { useState } from 'react';
import { Item } from "../../Types/item";
import { items } from "../../Data/items";
import { categorias } from '../../Data/categoria'; // Certifique-se de que o caminho está correto

export const Inputdados = () => {
  // Definindo estados para cada input
  const [data, setData] = useState<string>('');
  const [categoria, setCategoria] = useState<string>('');
  const [titulo, setTitulo] = useState<string>('');
  const [valor, setValor] = useState<string>('');

  // Funções para atualizar os estados
  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  const handleCategoriaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoria(e.target.value);
  };

  const handleTituloChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitulo(e.target.value);
  };

  const handleValorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValor(e.target.value);
  };
  const handleAddItem = () => {
    // Crie um novo item com os valores dos estados atuais
    const newItem: Item = {
      date: new Date(data), // Converta a string de data para um objeto de data
      category: categoria,
      title: titulo,
      value: parseFloat(valor) // Converta a string de valor para um número
    };

    // Adicione o novo item ao array de items
    items.push(newItem);

    // Limpe os estados dos inputs após adicionar o item
    setData('');
    setCategoria('');
    setTitulo('');
    setValor('');
  };

  return (
    <C.Container>
      <C.InputLabel>
        <C.InputTitle>Data</C.InputTitle>
        <C.Input type="date" value={data} onChange={handleDataChange} />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Categoria</C.InputTitle>
        <C.Select value={categoria} onChange={handleCategoriaChange}>
          <option value="">Selecione uma Categoria</option>
          {Object.keys(categorias).map((key) => (
            <option key={key} value={key}>
              {categorias[key].title}
            </option>
          ))}
        </C.Select>
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Título</C.InputTitle>
        <C.Input type="text" value={titulo} onChange={handleTituloChange} />
      </C.InputLabel>
      <C.InputLabel>
        <C.InputTitle>Valor</C.InputTitle>
        <C.Input type="number" value={valor} onChange={handleValorChange} />
      </C.InputLabel>
      <C.Button onClick={handleAddItem}></C.Button>
    </C.Container>
  );
};
