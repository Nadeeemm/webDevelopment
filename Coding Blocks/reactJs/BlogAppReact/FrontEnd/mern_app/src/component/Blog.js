import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./Blog.css"

class Blog extends Component {
  render() {
    let { author, content, img } = this.props;

    return (
      <div ClassName="Blog" style={{margin:"20px auto", width:"60%"}}>
        <Card>
          <Card.Img  src={img} />
          <Card.Body>
            <Card.Title>{author}</Card.Title>
            <Card.Text>{content}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Blog;
