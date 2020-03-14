import React from 'react'
import styled from 'styled-components'

import ReactHtmlParser from 'react-html-parser'

const NewsWrapper = styled.div`
  max-width: 90%;
`

const Date = styled.div`
  font-weight: 500 !important;
`

const Divider = styled.div`
  border-bottom: 1px solid #bcbabe;
  background-color: #a1d6e2;
  height: 1px;
  margin: 0.5em 0px 1.5em;

  span {
    display: block;
    width: 50px;
    height: 1px;
    background-color: #1995ad;
  }
`

const AnnouncementSection = styled.div`
  padding: 1em 0 3em;
  margin-top: 2em;

  h2 {
    font-weight: 900;
  }

  h2:after {
    width: 150px;
    height: calc(12px + 10 * (100vw - 360px) / 1560);
    background-color: var(--red);
    top: 19px;
    left: -24px;
  }

  .large {
    font-size: 1.5em;
  }

  div {
    padding: 1em 0;
  }
`

export default class Announcement extends React.Component {
  render() {
    return (
      <AnnouncementSection id="NewsSection" className="section">
        <h2>Important: FMC Europe 2020 is cancelled</h2>
        <div>
          <div className="large">
            We are sorry to inform you that FMC Europe 2020 on March 22nd is
            cancelled due to the COVID-19 pandemic.
          </div>
          <div className="large">
            We now plan to postpone the competition to a later date to be
            determined once the situation in Europe has stabilized. As you might
            already know, the recent developments due to COVID-19 pandemic have
            already caused the cancelation of many FMC Europe 2020 locations in
            the last few days. Now, due to the{' '}
            <a href="https://www.worldcubeassociation.org/posts/covid-19-announcement">
              separate announcement by the WCA Board of Directors
            </a>{' '}
            and the feedback from WCA Board and FMC Europe 2020 delegates, we
            have decided to cancel FMC Europe 2020 on March 22nd entirely. We
            are sorry for any inconvenience caused by this.
          </div>

          <div className="large">
            As a small compensation, we currently plan to hold an unofficial FMC
            Europe online competition following the original competition
            schedule. We will announce more information about this on this
            website over the course of the next week.
          </div>
        </div>
      </AnnouncementSection>
    )
  }
}
