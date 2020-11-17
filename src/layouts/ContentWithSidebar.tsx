import React, { FC } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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

export const Body: FC = ({ children }) => (
  <Container>
    <Row>
      {children}
    </Row>
  </Container>
)

const ContentWithSidebar: FC = ({ children }) => (
  <>
    {children}
  </>
)

export default ContentWithSidebar
