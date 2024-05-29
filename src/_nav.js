
import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilBrowser,
  cilStar,
  cilGrid,
  cilList,
  cilSettings,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'


const _nav = [
  {
    component: CNavTitle,
    name: 'options',
  },
  {
    component: CNavItem,
    name: 'Search',
    to: "/",
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Add Catalog',
    to: "/",
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Add Category',
    to: "/",
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Add Item',
    to: "/",
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavItem,
  //   name: 'Last Catalog Search Results',
  //   to: "/",
  //   icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Last Category Search Results',
  //   to: "/",
  //   icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Last Item Search Results',
  //   to: "/",
  //   icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  // },
  {
    component: CNavTitle,
    name: 'Recent Catalogs',
  },
  {
    component: CNavItem,
    name: 'No recent catalog',
    to: "/",
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Recent Categories',
  },
  {
    component: CNavItem,
    name: 'No recent catagory',
    to: "/",
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
]

export default _nav;