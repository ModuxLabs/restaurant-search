import React, { FC } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import createLayout, { LayoutComp } from 'hocs/createLayout'

export const Header: FC = ({ children }) => (
  <header className='mb-3' style={{ background: 'gainsboro' }}>
    <Container>
      <Row>
        <Col>
          {children}
        </Col>
      </Row>
    </Container>
  </header>
)

export const Sidebar: FC = ({ children }) => (
  <Col as='aside' sm={3}>
    {children}
  </Col>
)

export const MainContent: FC = ({ children }) => (
  <Col as='main' sm={9}>
    {children}
  </Col>
)

const ContentWithSidebarBase: LayoutComp = ({ Child }) => (
  <>
    <Child render={Header} />
    <Container>
      <Row>
        <Child render={Sidebar} />
        <Child render={MainContent} />
      </Row>
    </Container>
  </>
)

const ContentWithSidebar = createLayout(ContentWithSidebarBase)

ContentWithSidebar.Header = Header
ContentWithSidebar.Sidebar = Sidebar
ContentWithSidebar.MainContent = MainContent

export default ContentWithSidebar
