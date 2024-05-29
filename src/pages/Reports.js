import React, { Component } from 'react';
import {CCard} from '@coreui/react';

let initalStyle = {
  padding: "10px",
  minHeight: "400px",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "xxx-large",
  fontWeight: "bold",
}

class Reports extends Component {
    
  render() {
    return (
      <CCard style={initalStyle}>
      Reports works
    </CCard>
    )
  }
}

export default Reports