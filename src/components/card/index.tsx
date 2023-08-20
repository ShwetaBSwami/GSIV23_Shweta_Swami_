import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";
import { IData } from "./interface";
import styles from "./styles";
import { Link } from "react-router-dom";
import React from "react";

export const CustomCard = ({
  data,
  movieId,
}: {
  data: IData;
  movieId: number;
}) => {
  const {
    original_title: title = "",
    vote_average: rating,
    overview,
  } = data || {};

  const truncateWords = (text: string, limit: number) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  };

  return (
    <Link to={`/movie/${movieId}`} style={styles.linkDiv}>
      <Card sx={{ maxWidth: 345 }} style={styles.movieCard}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={"/cinema.webp"}
            alt={title}
          />
          <div style={styles.contentDiv}>
            <Typography gutterBottom variant="h5" style={styles.titleDiv}>
              {truncateWords(title, 4)}{" "}
              <span style={styles.spanDiv}>
                {rating !== 0 && `(${rating})`}
              </span>
            </Typography>
            <div style={styles.overViewDiv}>{overview}</div>
          </div>
        </CardActionArea>
      </Card>
    </Link>
  );
};
