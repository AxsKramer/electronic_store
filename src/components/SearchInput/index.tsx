import React, { useState } from 'react'
import { Container, Form, InputText, SearchButton } from '../../styles/index';

const SearchInput = () => {
  const [search, setSearch] = useState('');

  const handleSubmit = (e : React.FormEvent) => {
    e.preventDefault();
  } 

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputText type="text" placeholder='Buscar producto' value={search} onChange={(e) => setSearch(e.target.value) }/>
        <SearchButton type="submit" value='Buscar'/>
      </Form>
    </Container>
  )
}

export default SearchInput;
