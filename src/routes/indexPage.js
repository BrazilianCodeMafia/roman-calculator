import React from 'react';
import {Button} from '@blueprintjs/core';
import {connect} from 'dva';

class IndexPage extends React.Component {
  render() {
    return <Button>Teste</Button>
  }
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
