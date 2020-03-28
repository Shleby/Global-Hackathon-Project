import React from "react"
import styled from 'styled-components'

const StyledSearchBar = styled.div`
    border-style: solid;
    border-radius: 10px;
    width: 700px;
    height: 20px;
    border-width: 1px;
    padding: 10px;
    input{
        height: 100%;
        width: 100%;
        border-style: none;
        border-radius: 10px;
        font-size: 20px
    }

`

interface KeyboardEvent {
    enterKey: boolean;
}

export const SearchBar: React.FC = () =>{
    return(
        <StyledSearchBar>
           <input type="text" name="SearchBar"/>
        </StyledSearchBar>
    );
}
