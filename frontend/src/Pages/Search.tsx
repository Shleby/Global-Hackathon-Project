import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import './Search.scss';

interface SearchBarProps {
  query: string,
  onSearch: (q: string) => void,
  onClick?: () => void,
}

export default function SearchBar({
  query, onSearch, onClick,
}: SearchBarProps) {
  // controlledQuery represents what's typed into the searchbar - even BEFORE enter is hit
  const [controlledQuery, setControlledQuery] = useState(query);

  // Keep the controlledQuery in sync with the query prop (eg. browser popState)
  useEffect(() => {
    setControlledQuery(query);
  }, [query]);

  // Hide keyboard and execute search
  const search = () => {
    onSearch(controlledQuery);
  };

  return (
    <div className='searchbar'>
      <input
        type='search'
        id='search_id'
        autoComplete='off'
        spellCheck='false'
        /* eslint-disable-next-line jsx-a11y/no-autofocus */
        autoFocus
        tabIndex={ 0 }
        className='searchbar__input'
        size={ 10 }
        onKeyDown={ (event) => {
          if (event.key === 'Enter') {
            search();
          }
        } }
        onClick={ onClick }
        onChange={ (event) => { setControlledQuery(event.target.value); } }
        value={ controlledQuery }
        placeholder='Search text...'
      />
      <div onClick={ search } className='searchbar__button' role='button' tabIndex={ 0 }>
        <img src='../Images/logo.png' alt='' />
      </div>
    </div>
  );
}



// Why is search getting columns and rows? Am I missing something?

export const Search: React.FC = () => {
  const [columnDefs, setColumnDefs] = useState();
  const [rowData, setRowData] = useState();

  useEffect(() => {
    fetch('./jsonFolder/searchFakeBackend.json')
      .then((req) => req.json())
      .then((res) => {
        setColumnDefs(res.columnDefs);
        setRowData(res.rowData);
      });
  });
  return (
    <div
      className='ag-theme-balham'
      style={{
        height: '30px',
        width: '200px',
      }}
    >
      <AgGridReact columnDefs={ columnDefs } rowData={ rowData } />
    </div>
  );
};
