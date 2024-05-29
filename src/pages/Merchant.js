import React, { Component } from 'react';
import { CCard, CCardBody, CCardHeader, CTable, CTableBody, CTableCaption, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';

let initalStyle = {
  padding: "10px",
  minHeight: "400px",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "xxx-large",
  fontWeight: "bold",
}

const Merchant = () => {

  return (
    <CCard>
      <CCardHeader>Items Last Search Results</CCardHeader>
      <CCardBody>
        <CTable caption="top" responsive="lg">
          <CTableCaption>0 Catalog items found matching search criteria</CTableCaption>
          <CTableHead color="light">
            <CTableRow>
              <CTableHeaderCell scope="col">#</CTableHeaderCell>
              <CTableHeaderCell scope="col">Class</CTableHeaderCell>
              <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
              <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell style={{ display: 'flex', justifyContent: 'end' }}>No Catalog items found</CTableHeaderCell>
              <CTableDataCell></CTableDataCell>
              <CTableDataCell></CTableDataCell>
              <CTableDataCell></CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  )
}

export default Merchant