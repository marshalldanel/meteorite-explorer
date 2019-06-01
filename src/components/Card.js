import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InfoCard from './InfoCard';
import MapCard from './MapCard';

const Div = styled.div``;

const Body = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.7s linear;
  transform: ${props => {
    if (props.mapOpen) {
      return 'rotateY(180deg)';
    }
  }};
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
  margin: 32px auto;
  max-width: 720px;
  height: 260px;
`;

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapOpen: false
    };
  }

  openMap = () => {
    this.setState(prevState => ({
      mapOpen: !prevState.mapOpen
    }));
  };

  render() {
    return (
      <Container onClick={this.openMap}>
        <Body mapOpen={this.state.mapOpen}>
          <Div>
            <InfoCard data={this.props.data} />
          </Div>
          <MapCard data={this.props.data} />
        </Body>
      </Container>
    );
  }
}

Card.propTypes = {
  data: PropTypes.object
};

export default Card;
