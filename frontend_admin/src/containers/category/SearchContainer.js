import React, { useState } from 'react';
import SearchInput from '../../Components/common/SearchInput'
import ItemList from '../../Components/category/ItemList'
import useStyles from '../../css/useStyles';

const SearchContainer = () => {
  const classes = useStyles();

  const [keyword, setKeyword] = useState('');

  //인풋 변경 이벤트 핸들러
  const onChange = e => {
    setKeyword(e.target.value);
  };
  

  // 검색 엔터 이벤트 핸들러
  const onKeyPress = e => {
    if (e.key === 'Enter') {
     // dispatch(initialize());
     // history.push(`/searchMovie/${keyword.keyword}`);
    }
  };

  return (
    <>
      <div className={classes.search}>
        <SearchInput keyword={keyword} onChange={onChange} onKeyPress={onKeyPress} />
      </div>
      <div className={classes.paper}>
        <ItemList />
      </div>
    </>
  );
};

export default SearchContainer;
