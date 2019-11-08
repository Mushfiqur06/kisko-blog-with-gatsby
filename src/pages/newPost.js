import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

class NewPost extends Component {
    state = {  
        name: '',
        title: '',
        postDetails: ''
    }

    getPostData = (e) => {
        const name = e.target.value
        const title = e.target.value
        const postDetails = e.target.value
        this.setState({
            name: name,
            title: title,
            postDetails: postDetails 
        })
    }

    postSubmite = (e) => {
        e.preventDefault()
    }

    render() { 
        return (
            <section className="newPostSection">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={7} md={10} sm={12}>
                            <div className="newPostWrapper">
                                <h2 className="newPostWrapper__title text-center text-capitalize mb-4">Write a new post</h2>
                                <Form onSubmit={this.postSubmite}>

                                    <Form.Group>
                                        <Form.Label for="yourName" className="sr-only">Your Name</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            name="yourName" 
                                            id="yourName"
                                            onChange={this.getPostData}
                                            placeholder="Write Your Name"
                                            />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label for="postTitle" className="sr-only">Post Title</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            name="postTitle" 
                                            id="postTitle"
                                            onChange={this.getPostData}
                                            placeholder="Write Post Title"
                                            />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label for="postDetails" className="sr-only">Post Details</Form.Label>
                                        <Form.Control 
                                            as="textarea"
                                            type="text" 
                                            name="postDetails" 
                                            id="postDetails"
                                            onChange={this.getPostData}
                                            placeholder="Write Your Post"
                                            />
                                    </Form.Group>

                                    <Button type="submit" className="postBtn">Post Publish</Button>

                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}
 
export default NewPost;