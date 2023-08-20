import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { keys } from "../../movie/constants";
import { useApi } from "../../hooks/useApi";
import { AppBar, Toolbar } from "@mui/material";
import { DetailsCard } from "../../components/details-card";
import { Home } from "@mui/icons-material";
import styles from "../display-card/styles";
import React from "react";
import { IMovieDetails, IMovieInfo } from "./interface";

export const DetailPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState<IMovieDetails>();
  const [movieInfo, setMovieInfo] = useState<IMovieInfo>();
  const {
    original_title = "",
    poster_path = "",
    overview = "",
    vote_average,
    release_date,
    runtime,
  } = movieDetails || {};
  const { cast = [], crew = [] } = movieInfo || {};
  const api = useApi();
  useEffect(() => {
    const fetchApiResp = async () => {
      Promise.all([
        api.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${keys.API_KEY}`
        ),
        api.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US'`
        ),
      ])
        .then(([data1, data2]) => {
          setMovieDetails(data1);
          setMovieInfo(data2);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };
    fetchApiResp();
  }, []);

  const characters = useMemo(() => {
    return cast
      .slice(0, 2)
      .map((castName: Record<string, any>) => {
        return castName.original_name;
      })
      .join(", ");
  }, [cast]);

  const directors = useMemo(() => {
    const directorInfo = crew.filter(
      (data) =>
        data.known_for_department === "Directing" && data.job === "Director"
    );
    return directorInfo?.map((dire) => dire.name).join(", ");
  }, [crew]);

  const displayObj = Object.freeze({
    title: original_title,
    url: poster_path,
    description: overview,
    rating: vote_average,
    releaseDate: release_date,
    time: runtime,
    characters: characters,
    director: directors,
  });
  const redirectToAnotherRoute = () => {
    window.location.href = "/";
  };
  return (
    <div>
      <AppBar color="transparent" position="fixed" style={styles.appBarDiv}>
        <Toolbar style={styles.toolBarDiv}>
          <span>Movie Details</span>
          <div style={styles.homeIcon}>
            <Home onClick={redirectToAnotherRoute} />
          </div>
        </Toolbar>
      </AppBar>
      <div style={styles.detailsCardMainDiv}>
        <DetailsCard {...displayObj} />
      </div>
    </div>
  );
};
