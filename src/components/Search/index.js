import React from 'react';

import {SearchContainer, SearchContent, FormSearch,InputSearch,FaSearchCustom} from './styles'


    
function Search() {

    return(
        <SearchContainer>
        <SearchContent>
        <FormSearch>
          <InputSearch
            type='search' 
            placeholder="Busque por um filme"
          />
          <FaSearchCustom />
        </FormSearch>
        </SearchContent>
        </SearchContainer>
    );
}




export default Search;