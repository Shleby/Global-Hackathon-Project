import React from "react"
import styled from 'styled-components'
import { KeyObject } from "crypto";

const StyledSearchBar = styled.div`
    border-style: solid;
    border-radius: 10px;
    width: 700px;
    height: 25px;
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



function handleSearch(event: React.KeyboardEvent<HTMLInputElement>){
    if(event.keyCode===13){
        console.log("Enter was pressed");
    }
}


export const SearchBar: React.FC = () =>{

    return(
        <StyledSearchBar>
           <input type="text" name="SearchBar" onKeyDown={handleSearch}/>
        </StyledSearchBar>
    );
}

