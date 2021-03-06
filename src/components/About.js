import React from 'react'
import styled from 'styled-components'

import { List } from 'semantic-ui-react'

const AboutWrapper = styled.div`
  padding: 2em 1em;

  strong {
    font-weight: 400;
  }
`

export default class About extends React.Component {
  render() {
    const aboutParagraphs = this.props.aboutParagraphs

    return (
      <AboutWrapper id="AboutSection" className="section">
        <h2>About</h2>
        <div>
          <div>
            FMC Europe 2020 is a multi-location Fewest Moves competition. It
            will take place on 22nd March 2020.
          </div>
          <div className="paragraph">
            <h4 id="RegisterSection">How to register</h4>
            <ol>
              <li>Identify the location where you want to compete.</li>
              <li>
                Visit the competition page on the&nbsp;
                <a href="https://www.worldcubeassociation.org/competitions/FMCEurope2020/">
                  WCA Website.
                </a>
              </li>
              <li>
                Fill out the registration form and enter
                <strong>the city of the location you want to compete at</strong>
                in the comment field. Please do not write anything else in this
                field!
              </li>
            </ol>
          </div>
        </div>
      </AboutWrapper>
    )
  }
}
