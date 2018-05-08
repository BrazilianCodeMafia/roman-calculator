import React from 'react';
import {Button, Row, Col, Card, Input} from 'antd';
import {connect} from 'dva';

class IndexPage extends React.Component {
  render() {
    return (
      <Row style={styles.fullHeight} align="middle" justify="center" type="flex">
          <Col style={{width: '60%'}}>
            <div style={styles.headerBox}>
              <span style={styles.headerText}>ROMAN CALCULATOR</span>
              <span style={styles.headerNumber}>2000</span>
            </div>

            <Card style={styles.calculator}>
              <div style={styles.resultDisplay}>{'<o resultado aparecerá aqui>'}</div>
            </Card>
          </Col>
      </Row>
    );
  }
}

const styles = {
  fullHeight: {
    height: '100%'
  },

  calculator: {
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)'
  },

  headerText: {
    color: 'rgba(0,0,0,0.65)',
    marginRight: '5px'
  },

  headerNumber: {
    color: 'rgba(225,0,0,0.65)',
    fontStyle: 'bold'
  },

  headerBox: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingBottom: '4px',
    paddingRight: '4px',
    fontFamily: 'Norse',
    fontSize: '15px'
  },

  resultDisplay: {
    display: 'flex',
    padding: '5px',
    borderStyle: 'solid',
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: '1px',
    borderRadius: '3px',
    justifyContent: 'flex-end',
  }
};

IndexPage.propTypes = {};

export default connect()(IndexPage);
