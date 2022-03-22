import React from 'react'
import Accordion from '../../components/Accordion'

const DetailsPage = () => {
  return (
    <div>
      <div className="contents">
        <div className="header">
          <h6>Web dev &gt; Frontend &gt; React</h6>
        </div>

        <h4>Intro</h4>
        <p>
          React is a front-end library for building user interfaces. It is
          maintained by Facebook and a community of individual developers and
          companies. React can be used as a base in the development of single
          page or mobile applications, as it is optimal for fetching data
          efficiently and rendering it on the web.
          <br />
          As of writing this, React is the most popular JavaScript library. It
          is used by over 1.5 million websites and apps, and is used by over 20%
          of the top 50 Fortune 500 companies.
        </p>

        <Accordion
          data={{
            detail: () => (
              <p>
                <li>Designing user interfaces</li>
                <li>
                  Building components that are reusable and composable from
                  given Design file
                </li>
                <li>
                  Building components that are accessible and performant and
                  supported across browsers and devices
                </li>
                <li>
                  Make data fetching from backend and rendering data on the
                  frontend
                </li>
                <li>
                  In one sentence- you stand between designer and backend
                  developers. You integrate and fetch data from backend and make
                  components according to design specifications
                </li>
              </p>
            ),
            question: 'What youll be working doing daily:',
          }}
        />

        <Accordion
          data={{
            question: 'Roles / Job titles',
            detail: () => (
              <p>
                <li>
                  <b>Associate Frontend developer</b>
                </li>
                <li>
                  <b>Senior Frontend developer</b>
                </li>
                <li>
                  <b>Full stack developer</b>
                </li>
              </p>
            ),
          }}
        />

        {[
          'Roadmap',
          'Prerequisites',
          'Start learning',
          'Resources',
          'Alternative roles',
          'Next steps/ Path ahead',
        ].map((data) => (
          <Accordion
            data={{
              question: data,
              answer:
                ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facilis aspernatur rem pariatur esse quidem, accusantium, totam ut eaque alias minus enim hic odio aperiam blanditiis, possimus consequuntur explicabo quis!',
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default DetailsPage
