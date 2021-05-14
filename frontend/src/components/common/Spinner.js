import {Content, Spinner} from 'native-base';
import React from 'react';

const spinner = ({style}) => {
  return (
    <Content>
      <Spinner color="red" style={style} />
    </Content>
  );
};

export default spinner;
