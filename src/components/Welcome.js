import React from 'react'
import styled from 'styled-components'

const WelcomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;

  svg {
    height: 10vh;
  }

  div {
    justify-content: center;
  }
`

const Headline = styled.div`
  position: relative;
  margin:  0;
  padding: .25em 0;

  font-size: 2em;
  line-height: 1;
  text-transform: uppercase;

  &:before,
  &:after {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    content: "";
    width:  30%;
    height: .1em;
    
    background: #A1D6E2;
  }
  &:before {
    top: 0;
    animation: lineUp $duration $easing;
  }
  &:after {
    bottom: 0;
    animation: lineDown $duration $easing;
  }
`

export default class FAQ extends React.Component {
  render() {
    return (
      <WelcomeWrapper>
        <Headline>FMC Europe - 23/03/2018</Headline>
      </WelcomeWrapper>
    )
  }
}
