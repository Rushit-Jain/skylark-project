import React, { Component } from 'react';
import { Card, CardBody, Button} from 'reactstrap';
import Image from 'react-bootstrap/Image'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

class Home extends Component {

    constructor (props)
    {
        super(props);
    }
    render() {
    return(
        <div className="homeDiv">
            <div className="container">
                <div className="home p-4">
                    <h3>Who Are We?</h3>
                    <p>
                        DJS Skylark is a team of Undergraduate Engineering Students from SVKM’s Dwarkadas J. Sanghvi College of Engineering, Mumbai. We research, design, analyse and fabricate Radio Controlled (RC) aircrafts and compete on an international platform with some of the best universities from around the world. With numerous accolades to our name, we aim to set an example to promote aerospace.
                    </p>
                    <div className="team ">
                        <Image src='assets/images/team.jpeg' fluid ></Image>
                    </div>
                </div>
                <div className="home p-4 mt-5">
                    <h3>How It All Started?</h3>
                    <p>
                        Every journey, however onerous and arduous, starts somewhere, and our's began in 2014.
                        Our team was founded by Aman Tukrel and Ashutosh Khatri. It was a bold step into oblivion as our founding members set forth on this journey to build their own aircraft and participate at SAE Aero Design East, USA with no prior experience.
                    </p>
                </div>
                <div className="home p-4 mt-5">
                    <h3>Where Do We Compete?</h3>
                    <p>
                        In association with prominent industry leaders such as Boeing and Lockheed Martin, along with the backing of the American Aero-Modelling Association (AMA), the SAE Aero-Design,East Competition is held in Texas or Florida, USA every year with 85 teams participating from around the world.The competition intends to provide engineering students with challenges that can put their skills to the test and implement at international standards.
                    </p>
                </div>
                <div className="home p-4 mt-5">
                    <h3>Regular And Micro</h3>
                    <p>
                        DJS Skylark takes part in two different classes at SAE Aero Design International each year. For each class, there are a set of uniquely created rules that are updated and revised every 3 years challenging us to design and manufacture an aircraft that can operate at its very limits while maintaining maximum reliability and safety.
                    </p>
                    <div>
                        <Accordion allowZeroExpanded="true">
                            <AccordionItem uuid="regular">
                                <AccordionItemHeading>
                                    <AccordionItemButton className="accordioncustom text-center align-items-center">
                                        Regular Class
                                </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        <div className="wrapR col-xs-6 col-md-2">
                                        <Image src='assets/images/RegularRender.png' height="120" width="120" fluid></Image>
                                        </div>
                                        <div className="text-justify">
                                        The specific challenge for this class involves building a cargo aircraft that can take off from short runways along with Cargo and Payload to obtain maximum amount of points. This pushes us to carry out several trade studies and implement analytical methods to find the optimal combination of all factors to maximize our score. All of this must be done while adhering to the strict dimensional constraints set by SAE. Our goal along with this is also to accurately predict the lifting capacity of our aircraft demonstrating a deep and clear understanding of our design to the organizers.
                                        </div>                                   
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem uuid="micro">
                                <AccordionItemHeading>
                                    <AccordionItemButton className="accordioncustom text-center align-items-center">
                                        Micro Class
                                </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        <div className="wrapM col-xs-6 col-md-2">
                                        <Image src='assets/images/MicroRender.png' height="120" width="120" fluid></Image>
                                        </div>
                                        <div className="text-justify">
                                        This class requires us to build a Micro UAV (Unmanned Aerial Vehicle) style aircraft. The aircraft must be quickly assembled and deployed from a very small package. It should be able to carry large, unwieldy, low-density payload. Along with this, the assembly time of the aircraft contributes majorly to the final score. Our goal is to maximize the payload fraction, in turn maximizing the score. This leads to a continuous struggle between increasing the lifting capability , structural strength and reducing our empty aircraft weight to eventually increase our payload fraction making this class particularly challenging and pushing us as a team to our limits.
                                        </div>
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
}
}

export default Home;