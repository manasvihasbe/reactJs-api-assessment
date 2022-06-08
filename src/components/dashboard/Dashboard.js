import React, { Component } from "react";
import { render } from "react-dom";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Chart from "../chart/Chart";

class Dashboard extends Component {
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
            <Card sx={{ padding: "22px", marginTop: "2%" }}>
              <div style={{ marginLeft: "7%", fontWeight: "bold" }}>
                <Typography
                  sx={{ color: "rgb(19, 132, 197)", paddingBottom: "3%" }}
                >
                  Total number of Posts:
                </Typography>
                {this.state.data && this.state.data.posts.length}
              </div>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card sx={{ padding: "22px", marginTop: "2%" }}>
              <Typography
                sx={{ color: "rgb(19, 132, 197)", paddingBottom: "3%" }}
              >
                {" "}
                Total number of Pages:
              </Typography>{" "}
              {this.state.data && this.state.data.meta.pagination.pages}
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card sx={{ padding: "22px", marginTop: "2%" }}>
              <Typography
                sx={{ color: "rgb(19, 132, 197)", paddingBottom: "3%" }}
              >
                {" "}
                Total number of Authors :
              </Typography>
              {this.state.data && this.state.data.posts.length}
            </Card>
          </Grid>
        </Grid>

        <Chart />

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Card sx={{ padding: "22px", marginTop: "2%" }}>
              <Typography
                sx={{ color: "rgb(19, 132, 197)", paddingBottom: "3%" }}
              >
                {" "}
                Total number of Tags:
              </Typography>{" "}
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card sx={{ padding: "22px", marginTop: "2%" }}>
              <Typography
                sx={{ color: "rgb(19, 132, 197)", paddingBottom: "3%" }}
              >
                {" "}
                Latest 5 Published posts List:
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

render(<Dashboard />, document.getElementById("root"));
export default Dashboard;
