import React, {useEffect, useState} from 'react';
import SearchInput from '../../Components/common/SearchInput';
import ItemList from '../../Components/category/ItemList';
import useStyles from '../../css/useStyles';
import DatePickerComponent from '../../Components/common/DatePickerComponent';
import SetDuration from '../../Components/common/SetDuration';
import * as managingAPI from '../../lib/api/managing';

const SearchContainer = () => {
  const classes = useStyles();

  // 고객 번호 검색 키워드
  const [keyword, setKeyword] = useState('');

  // 구매 기한
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isBtnClicked, setIsBtnClicked] = useState('전체');

  // 현재 페이지
  const [page, setPage] = useState(0);

  // 현재 고객의 구매 내역 리스트
  const [paymentList, setPaymentList] = useState([]);

  //인풋 변경 이벤트 핸들러
  const onChange = e => {
    setKeyword(e.target.value);
  };

  // 검색 엔터 이벤트 핸들러
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      loadData(page);
    }
  };

  const dateToString = date => {
    console.log(date);
    return (
      date.getFullYear() +
      '-' +
      (date.getMonth() + 1).toString().padStart(2, '0') +
      '-' +
      date.getDate().toString().padStart(2, '0')
    );
  };

  const loadData = async PAGE => {
    console.log(PAGE);
    if (isBtnClicked === '전체') {
      let response = await managingAPI.getCostomerAllPaymentList(keyword, PAGE);
      console.log(response);
    } else {
      let response = await managingAPI.getCostomerPaymentList(
        dateToString(startDate),
        dateToString(endDate),
        keyword,
        PAGE,
      );
      console.log(response);
      setPaymentList(response.data);
    }
  };

  useEffect(() => {
    setPage(0);
  }, [startDate, endDate]);

  // Generate paymentList Data
  function createData(
    id,
    storedId,
    txDateTime,
    paymentAmount,
    paymentPlan,
    paymentResult,
    paymentDetail,
  ) {
    return {
      id,
      storedId,
      txDateTime,
      paymentAmount,
      paymentPlan,
      paymentResult,
      paymentDetail,
    };
  }

  // const paymentList = [
  //   createData(0, '1', '20210503120000', '1', '카드', '성공', [
  //     {
  //       prodID: 1,
  //       prodName: '테스트1',
  //     },
  //     {
  //       prodID: 2,
  //       prodName: '테스트2',
  //     },
  //   ]),
  //   createData(1, '1', '20210503120000', '1', '카드', '성공', [
  //     {
  //       prodID: 1,
  //       prodName: '테스트2',
  //     },
  //   ]),
  //   createData(2, '1', '20210503120000', '1', '카드', '성공', [
  //     {
  //       prodID: 1,
  //       prodName: '테스트3',
  //     },
  //   ]),
  //   createData(3, '1', '20210503120000', '1', '카드', '성공', [
  //     {
  //       prodID: 1,
  //       prodName: '테스트4',
  //     },
  //   ]),
  //   createData(4, '1', '20210503120000', '1', '카드', '성공', [
  //     {
  //       prodID: 1,
  //       prodName: '테스트5',
  //     },
  //   ]),
  //   createData(5, '1', '20210503120000', '1', '현금', '성공', [
  //     {
  //       prodID: 1,
  //       prodName: '테스트6',
  //     },
  //   ]),
  // ];

  return (
    <>
      <div>
        <SetDuration
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          isBtnClicked={isBtnClicked}
          setIsBtnClicked={setIsBtnClicked}
        />
        <DatePickerComponent
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          startDate={startDate}
          endDate={endDate}
          setIsBtnClicked={setIsBtnClicked}
        />
      </div>
      <div className={classes.search}>
        <SearchInput
          keyword={keyword}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      </div>
      <div className={classes.paper}>
        <ItemList paymentList={paymentList} />
      </div>
    </>
  );
};

export default SearchContainer;
