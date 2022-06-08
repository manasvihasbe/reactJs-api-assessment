import React, { Component } from "react";
import { render } from "react-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";

class One extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      data: null,
    };
  }

  componentDidMount = () => {
    fetch(
      "https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=8196190b08906dda0ebf6e6f5d"
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState((prevState) => ({
          ...prevState,
          data,
        }));
      });
  };

  render() {
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card sx={{ padding: "22px", marginTop: "10%" }}>
              <Typography
                sx={{ color: "rgb(19, 132, 197)", paddingBottom: "3%" }}
              >
                Too Short Posts, Below 250 words
              </Typography>
              <ul>
                {this.state.data &&
                  this.state.data.posts.map((authors) => (
                    <li key={authors.id} id={authors.id}>
                      {authors.html.length < 250
                        ? `${authors.title}...`
                        : "none"}
                    </li>
                  ))}
              </ul>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card sx={{ padding: "22px", marginTop: "10%" }}>
              <Typography
                sx={{ color: "rgb(19, 132, 197)", paddingBottom: "3%" }}
              >
                Too Long Posts, More than 1500 words
              </Typography>
              <ul>
                {this.state.data &&
                  this.state.data.posts.map((authors) => (
                    <li key={authors.id} id={authors.id}>
                      {authors.html.length > 1500
                        ? `${authors.title}...`
                        : "none"}
                    </li>
                  ))}
              </ul>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

render(<One />, document.getElementById("root"));
export default One;
