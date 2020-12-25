import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ScaleText from "react-scale-text";

function About (props) {

    return(
        <div className="timeDiv">
            <div className="container">
              <div className="row timeline row-content">

                <VerticalTimeline>
                    <VerticalTimelineElement
                       className="vertical-timeline-element--work"
                       date="2020"
                       iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      
                    >
                      
                      <ScaleText>
                      <h6 className="vertical-timeline-element-title"><b>LEADING THE RACE</b></h6>
                      <h6 className="vertical-timeline-element-subtitle">Triumph</h6>
                      <p>
                        <u>Regular Class</u> <br></br> 
                        Asia-Pacific Overall : 4<sup>th</sup> <br></br>
                        Technical presentation: 7<sup>th</sup><br></br>
                        <u>Micro Class</u><br></br>
                        <b>Worldwide: 3 <sup>rd</sup><br></br></b>
                        Mission Performance: 2<sup>nd</sup><br></br>
                        Technical presentation: 3<sup>rd</sup>
                      </p>
                      </ScaleText>
                      
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                       className="vertical-timeline-element--work"
                       date="2020"
                       iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      
                    >
                      <Image src='assets/images/2020.jpeg' height="300" width="400" fluid></Image>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="2019"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      
                    >
                      <ScaleText>
                      <h6 className="vertical-timeline-element-title"><b>SOARING TO NEW HEIGHTS</b></h6>
                      <h6 className="vertical-timeline-element-subtitle">To be higher than ever before.</h6>
                      <p>
                        <u>Regular Class</u> <br></br> 
                        Worldwide: 4<sup>th</sup> <br></br>
                        Design Report: 8<sup>th</sup><br></br>
                        Technical presentation: 7<sup>th</sup><br></br>
                        <u>Micro Class</u><br></br>
                        Worldwide: 8 <sup>th</sup><br></br>
                        Design Report: 2<sup>nd</sup><br></br>
                        Technical presentation: 6<sup>th</sup>
                      </p>
                      </ScaleText>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                       className="vertical-timeline-element--work"
                       date="2019"
                       iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      
                    >
                      <Image src='assets/images/2019.jpeg' height="300" width="400" fluid></Image>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="2018"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      
                    >
                      <ScaleText>
                      <h6 className="vertical-timeline-element-title"><b>WIDENING HORIZONS</b></h6>
                      <h6 className="vertical-timeline-element-subtitle">Raised the bar for future flights</h6>
                      <p>
                        <u>Regular Class</u> <br></br> 
                        Asia Pacific Overall: 1<sup>st</sup> <br></br>
                        Design Report: 8<sup>th</sup><br></br>
                        <u>Micro Class</u><br></br>
                        Asia Pacific Overall: 2 <sup>nd</sup><br></br>
                        Design Report: 4<sup>th</sup>
                      </p>
                      </ScaleText>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                       className="vertical-timeline-element--work"
                       date="2018"
                       iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      
                    >
                      <Image src='assets/images/2018.jpeg' height="300" width="400" fluid></Image>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--education"
                      date="2017"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      
                    >
                      <ScaleText>
                      <h6 className="vertical-timeline-element-title"><b>BEST IN THE ASIA</b></h6>
                      <h6 className="vertical-timeline-element-subtitle">Left an impact globally</h6>
                      <p>
                        <u>Regular Class</u><br></br>
                        Design Report: 1<sup>st</sup> <br></br>
                        Asia Pacific Overall: 1<sup>st</sup>
                      </p>
                      </ScaleText>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                       className="vertical-timeline-element--work"
                       date="2017"
                       iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      
                    >
                      <Image src='assets/images/2017.jpeg' height="400" width="400" fluid></Image>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--education"
                      date="2016"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      
                    >
                      <ScaleText>
                      <h6 className="vertical-timeline-element-title"><b>FIRST BLOOD</b></h6>
                      <h6 className="vertical-timeline-element-subtitle">We win our first Trophy</h6>
                      <p>
                        <u>Regular Class</u> <br></br>
                        Oral Presentation Worldwide: 3<sup>rd</sup>
                      </p>
                      </ScaleText>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--education"
                      date="2016"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      
                    >
                     <Image src='assets/images/2016.jpeg' height="300" width="400" fluid></Image>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--education"
                      date="2015"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      
                    >
                      <ScaleText>
                      <h6 className="vertical-timeline-element-title"><b>DEBUT YEAR</b></h6>
                      <h6 className="vertical-timeline-element-subtitle">Where it all Began.</h6>
                      <p>
                        <u>Regular Class</u><br></br>
                        Worldwide Overall:17<sup>th</sup>
                      </p>
                      </ScaleText>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                       className="vertical-timeline-element--work"
                       date="2015"
                       iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      
                    >
                      <Image src='assets/images/2015.jpeg' height="300" width="400" fluid></Image>
                    </VerticalTimelineElement>
                </VerticalTimeline>
              </div>
            </div>
          </div>
      );

}

export default About;