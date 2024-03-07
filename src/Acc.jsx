import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Acc = () => {
    return (
        <>
        <div class="pos-f-t">
            <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
           <h4 class="text-white">Collapsed content</h4>
           <span class="text-muted">Toggleable via the navbar brand.</span>
        </div>
       </div>
       <nav class="navbar navbar-dark bg-dark">
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
       </button>
       </nav>
       </div>
       <br />
       <br />
        <h2 className='text-center'>Know More About<span className='badge bg-danger text-light'><a href='https://notionpress.com/author/321668'><b><i>"MY"</i></b> </a>Book's</span></h2>
        <br />
        <br />
        <br />
        <br />
            <Container>
                <Row>
                    <Col>
                        {/* <h3>Basic example</h3> */}
                        <div>
                            <Accordion defaultActiveKey="">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Connection Unleashed</Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                        "Connections Unleashed" Explore the Power of Meaningful Connections In this thought-provoking and enlightening book, I wanted to take you on a transformative journey into the depths of human interactions and relationships. Through a diverse range of topics, Me as an Author invites you to delve into the intricacies of forging true connections and finding success in a bustling society.
                                        </p>
                                        <a href="https://notionpress.com/read/connections-unleashed">CONNECTION UNLEASHED</a>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Started Living</Accordion.Header>
                                    <Accordion.Body>
                                      <p>
                                         The text of this edition of “Started living”, as it exists in his second edition of “Self Made” the comparatively few readings of Great Poems followed by a curious lifestyle and what usually happens to be in someone’s life, which have not been adopted, are given at the foot of the page, with his name attached to them. As will be seen, the most important various readings are also given in footnotes; a plan which, it is believed, will, so far as it has been well executed, meet with the delicacy to the readers and listeners.
                                      </p>
                                      <a href="https://notionpress.com/read/started-living">STARTED LIVING</a>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Last Hope</Accordion.Header>
                                    <Accordion.Body>
                                    <p>
                                    This is somthing you all can understend what i can trying to say. This is called reality. This is called LAST HOPE to me.

                                    This virtual world every one is talking about only virtual love and social media love, but wait you guys really think that this is true love or real love.
                                    in this non fiction book i am on,y talking about thuth. what happned in someones life.
                                    </p>
                                    <a href="https://notionpress.com/read/last-hope">LAST HOPE</a>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Self Made</Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                        "Self Made" is not just another book; it's a catalyst for transformation. Are you ready to embark on a journey of self-discovery and unlock the true potential of your relationships?
                                        </p>
                                        <a href="https://notionpress.com/read/self-made">SELF MADE</a>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Broken Voice</Accordion.Header>
                                    <Accordion.Body>
                                      <p>
                                         You must have seen that we talk a lot about love and write a lot. You guys wonder why we talk so much about love and write so much, there is a poem, we have unfulfilled happiness ahead of us there.  A lot will happen, you will understand that there is some happiness and not a little happiness, I am speaking about love, I am speaking about everyone, there is a lot to say that there is a lot to see you and your thinking is on us only.
                                      </p>
                                      <a href="https://notionpress.com/read/broken-voice">BROKEN VOICE</a>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Col>
                </Row>
            </Container>
        
        
        
        
            
        </>
    )
}
export default Acc;