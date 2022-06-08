import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";

const HOST = "ghost-blog.ipxp.in";

function UrlExists(url) {
  var http = new XMLHttpRequest();
  http.open("HEAD", url, false);
  http.send();
  return http.status !== 404;
}

export default function Link() {
  const [authors, setAuthors] = useState([]);
  const [internalLinks, setLinkInternal] = useState([]);
  const [externalLinks, setLinkExternal] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        "https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=8196190b08906dda0ebf6e6f5d"
      );
      const jsonResult = await result.json();

      setAuthors(jsonResult);
      var internalLinks = [];
      var externalLinks = [];
      var posts = jsonResult["posts"];
      for (var i in posts) {
        var p = posts[i];
        var urlValid = UrlExists(p["url"]);
        var url = new URL(p["url"]);
        var hostname = url.hostname;
        if (hostname === HOST) {
          internalLinks.push({ url: p["url"], broken: !urlValid });
        } else {
          externalLinks.push({ url: p["url"], broken: !urlValid });
        }
      }
      setLinkInternal(internalLinks);
      setLinkExternal(externalLinks);
      console.log(externalLinks);
      console.log(internalLinks);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card sx={{ padding: "22px", marginTop: "2%" }}>
            <Typography
              sx={{ color: "rgb(19, 132, 197)", paddingBottom: "1%" }}
            >
              Total number of Internal Links:
            </Typography>
            {internalLinks && internalLinks.length} <br />
            <Typography
              sx={{ color: "rgb(19, 132, 197)", paddingBottom: "1%" }}
            >
              {" "}
             <br/> Total number of External Links:{" "}
            </Typography>
            {externalLinks && externalLinks.length}

          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card sx={{ padding: "22px", marginTop: "2%" }}>
            <Typography
              sx={{ color: "rgb(19, 132, 197)", paddingBottom: "3%" }}
            >
              List of Broken Internal Links:
            </Typography>

            {internalLinks &&
              internalLinks.map((internalLink) => (
                <li> {internalLink.url} </li>
              ))}
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card sx={{ padding: "22px", marginTop: "2%" }}>
            <Typography
              sx={{ color: "rgb(19, 132, 197)", paddingBottom: "3%" }}
            >
              List of Broken External Links:
            </Typography>
            {externalLinks &&
            externalLinks.map((externalLink) => externalLink.url)
              ? "null"
              : "externalLink.url"}
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
