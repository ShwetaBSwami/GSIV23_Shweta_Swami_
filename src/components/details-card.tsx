import { Grid, Typography } from "@mui/material";
import React, { useMemo } from "react";
import styles from "../modules/display-card/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const DetailsCard = (props: any) => {
  const {
    url,
    title = "",
    description = "",
    rating,
    releaseDate="",
    time,
    characters,
    director,
  } = props || {};
  const matches = useMediaQuery("(min-width:600px)");

  const displayTime = useMemo(() => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  },[time]);

  return (
     <div style={styles.root}>
      <Grid container direction={matches ? "row" : "column"}>
        <Grid item xs={3} style={styles.gridImgDiv}>
          <img
            src={"/cinema.webp" || `https://api.themoviedb.org/3${url}`}
            alt={title}
            style={styles.image}
          />
        </Grid>
        <Grid item xs={8} style={styles.gridDiv}>
          {title && <Typography variant="h5" component="h2" gutterBottom>
            {title}
            <span style={styles.spanDiv}>{rating !== 0 && `(${rating})`}</span>
          </Typography>}
          {releaseDate && <div style={styles.releaseDate}>
            {releaseDate.split("-")[0]} | {displayTime} | {director}
          </div>}
          {characters && <div style={styles.castDiv}>Cast: {characters},...</div>}
          {description && <Typography variant="body1" gutterBottom style={styles.releaseDate}>
            Description: {description}
          </Typography>}
        </Grid>
      </Grid>
    </div> 
    
  );
};
