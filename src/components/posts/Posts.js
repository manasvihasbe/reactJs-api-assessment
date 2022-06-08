import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import One from "./One";
import "./posts.css";

function Posts() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        "https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=8196190b08906dda0ebf6e6f5d"
      );
      const jsonResult = await result.json();

      setAuthors(jsonResult);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card sx={{ padding: "22px", marginTop: "10%" }}>
            <Typography
              sx={{ color: "rgb(19, 132, 197)", paddingBottom: "3%" }}
            >
              List of Posts without Meta Description
            </Typography>
            <List>
              {authors.posts &&
                authors.posts.map((obj) => obj.meta_description)}
            </List>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card sx={{ padding: "22px", marginTop: "10%" }}>
            <Typography
              sx={{ color: "rgb(19, 132, 197)", paddingBottom: "3%" }}
            >
              Too long Meta Description
            </Typography>
            
              {authors.posts?.map((author) => (
                <div key={author.id}> {author.meta_description} </div>
              ))}
          
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card sx={{ padding: "22px", marginTop: "10%" }}>
            <Typography
              sx={{ color: "rgb(19, 132, 197)", paddingBottom: "3%" }}
            >
              List of Posts without Featured Image
            </Typography>
            <List>
              {authors.posts && authors.posts.map((obj) => obj.feature_image)}
            </List>
          </Card>
        </Grid>
      </Grid>

      <One />
    </div>
  );
}
export default Posts;
