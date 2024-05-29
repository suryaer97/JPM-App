import React, { Component } from 'react';
import { CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem, CButton, CCard, CCardBody, CCardFooter, CCardHeader, CCol, CFormInput, CFormLabel, CFormSelect, CRow } from '@coreui/react';

let initalStyle = {
  padding: "10px",
  minHeight: "400px",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "xxx-large",
  fontWeight: "bold",
}

const CatalogSearch = () => {

  return (
    <CRow className="justify-content-center">
      <CCol xl={12}>
        <CCard className='mb-3'>
          <CCardHeader>Catalog Search</CCardHeader>
          <CCardBody>
            <CAccordion activeItemKey={1}>
              <CAccordionItem itemKey={1}>
                <CAccordionHeader><strong>Search Catalogs By Catalog Name</strong></CAccordionHeader>
                <CAccordionBody>
                  <CRow className="mb-3">
                    <CFormLabel htmlFor="staticEmail" className="col-sm-2 col-form-label">Merchant</CFormLabel>
                    <CCol sm={6}>
                      <CFormSelect id="inputGroupSelect02">
                        <option>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </CFormSelect>
                    </CCol>
                  </CRow>
                  <CRow className="mb-3">
                    <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">Catalog Name*</CFormLabel>
                    <CCol sm={6}>
                      <CFormInput type="password" id="inputPassword" />
                    </CCol>
                  </CRow>
                </CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={2}>
                <CAccordionHeader><strong>Show All Catalogs</strong></CAccordionHeader>
                <CAccordionBody>
                  <CRow className="mb-3">
                    <CFormLabel htmlFor="staticEmail" className="col-sm-2 col-form-label">Merchant</CFormLabel>
                    <CCol sm={10}>
                      <CFormInput type="text" id="staticEmail" defaultValue="email@example.com" readOnly plainText />
                    </CCol>
                  </CRow>
                  <CRow className="mb-3">
                    <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">Catalog Name*</CFormLabel>
                    <CCol sm={6}>
                      <CFormInput type="password" id="inputPassword" />
                    </CCol>
                  </CRow>
                </CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={3}>
                <CAccordionHeader><strong>Search Catalogs By Category Name</strong></CAccordionHeader>
                <CAccordionBody>
                  <CRow className="mb-3">
                    <CFormLabel htmlFor="staticEmail" className="col-sm-2 col-form-label">Merchant</CFormLabel>
                    <CCol sm={10}>
                      <CFormInput type="text" id="staticEmail" defaultValue="email@example.com" readOnly plainText />
                    </CCol>
                  </CRow>
                  <CRow className="mb-3">
                    <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">Catalog Name*</CFormLabel>
                    <CCol sm={6}>
                      <CFormInput type="password" id="inputPassword" />
                    </CCol>
                  </CRow>
                </CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={4}>
                <CAccordionHeader><strong>Search Items By Item Name or Item Code</strong></CAccordionHeader>
                <CAccordionBody>
                  <CRow className="mb-3">
                    <CFormLabel htmlFor="staticEmail" className="col-sm-2 col-form-label">Merchant</CFormLabel>
                    <CCol sm={10}>
                      <CFormInput type="text" id="staticEmail" defaultValue="email@example.com" readOnly plainText />
                    </CCol>
                  </CRow>
                  <CRow className="mb-3">
                    <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">Catalog Name*</CFormLabel>
                    <CCol sm={6}>
                      <CFormInput type="password" id="inputPassword" />
                    </CCol>
                  </CRow>
                </CAccordionBody>
              </CAccordionItem>
              <CAccordionItem itemKey={5}>
                <CAccordionHeader><strong>Show All Items By Catalog</strong></CAccordionHeader>
                <CAccordionBody>
                  <CRow className="mb-3">
                    <CFormLabel htmlFor="staticEmail" className="col-sm-2 col-form-label">Merchant</CFormLabel>
                    <CCol sm={10}>
                      <CFormInput type="text" id="staticEmail" defaultValue="email@example.com" readOnly plainText />
                    </CCol>
                  </CRow>
                  <CRow className="mb-3">
                    <CFormLabel htmlFor="inputPassword" className="col-sm-2 col-form-label">Catalog Name*</CFormLabel>
                    <CCol sm={6}>
                      <CFormInput type="password" id="inputPassword" />
                    </CCol>
                  </CRow>
                </CAccordionBody>
              </CAccordionItem>
            </CAccordion>
          </CCardBody>
          <CCardFooter style={{ display: 'flex', justifyContent: 'end' }}>
            <CButton>Search</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default CatalogSearch
