import React, { Component } from "react";
import axios from "axios";

class GithubCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img_url: "",
      username: "",
    };
  } 

  async componentDidMount() {
    let url = `https://api.github.com/users/${this.props.username}`
    const res =await axios.get(url)
    
    // .then((res) => {
      console.log(res.data)

      this.setState({
        img_url: res.data.avatar_url,
        username: res.data.name,
      });
    // });
  }

  render() {
    return (
      <div>
        <figure>
          <img src={this.state.img_url} alt="" />
          <figcaption>Name:{this.state.username}</figcaption>
        </figure>
      </div>
    );
  }
}

export default GithubCard;
