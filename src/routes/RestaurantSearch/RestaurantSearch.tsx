import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import RestaurantSearchControls from './components/RestaurantSearchControls'
import RestaurantSearchHeader from './components/RestaurantSearchHeader'
import RestaurantTable from './components/RestaurantTable'

// import restaurantData from './mockApiData.temp'

const RestaurantSearch: React.FC = () => (
  <>
    <Container>
      <Row>
        <Col>
          <RestaurantSearchHeader />
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col sm={3}>
          <RestaurantSearchControls />
        </Col>
        <Col sm={9}>
          <RestaurantTable />
        </Col>
      </Row>
    </Container>
  </>
)

export default RestaurantSearch
