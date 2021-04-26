import React from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
} from 'native-base';
const YjFooter = () => {
  return (
    <Footer>
      <FooterTab>
        <Button>
          <Icon name="apps" />
        </Button>
        <Button>
          <Icon name="camera" />
        </Button>
        <Button active>
          <Icon active name="navigate" />
        </Button>
        <Button>
          <Icon name="person" />
        </Button>
      </FooterTab>
    </Footer>
  );
};

export default YjFooter;
