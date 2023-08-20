import { useEffect, useState } from "react";
import { CustomCard } from "../../components/card";
import { AppBar, Pagination, TextField } from "@mui/material";
import styles from "./styles";
import Autocomplete from "@mui/material/Autocomplete";
import { useApi } from "../../hooks/useApi";
import { Home } from "@mui/icons-material";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { setPageNumber } from "../../redux/action";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";

interface IMovieList {
  results: [];
  total_pages: number;
}
export const DisplayCard = () => {
  const [movieList, setMovieList] = useState<IMovieList>();
  const defaultPage = useSelector((state) => state) as Record<string, any>;
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(defaultPage?.pageNumber);
  const api = useApi();
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setPageNumber(value));
    setPage(value);
  };

  const apiCallForUpcoming = async (page: number) => {
    return await api.get(
      `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`
    );
  };
  const handleSearch = async (value: string) => {
    let response;
    if (value) {
      response = await api.get(
        `https://api.themoviedb.org/3/search/movie?query=${value}`
      );
    } else {
      response = await apiCallForUpcoming(1);
    }
    setMovieList(response);
  };

  useEffect(() => {
    const fetchApiResp = async () => {
      setLoading(true);
      const response = await apiCallForUpcoming(page);
      if (response?.results.length > 0) {
        setMovieList(response);
      } else {
        setPage(1);
      }
      setLoading(false);
    };
    fetchApiResp();
  }, [page]);

  const defaultProps = {
    options: movieList?.results || [],
    getOptionLabel: (option: any) => option.original_title,
  };

  return (
    <div style={styles.mainDiv}>
      <AppBar color="transparent" position="fixed" style={styles.appBarDiv}>
        <Toolbar style={styles.toolBarDiv}>
          <div>
            <Autocomplete
              freeSolo
              id="autocomplete"
              style={styles.autoCompleteDiv}
              disableClearable
              onInputChange={(_, newInputValue) => handleSearch(newInputValue)}
              {...defaultProps}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Search"
                  InputProps={{
                    ...params.InputProps,
                    type:'search',
                    startAdornment: (
                      <div style={styles.searchIcon}>
                        <SearchIcon />
                      </div>
                    ),
                  }}
                />
              )}
            />
          </div>
          <div style={styles.homeIcon}>
            <Home />
          </div>
        </Toolbar>
      </AppBar>

      {loading ? (
        <div style={styles.errorText}>Loading ...</div>
      ) : movieList?.results?.length! > 0 ? (
        <div style={styles.cardDiv}>
          {movieList?.results.map((data: any) => {
            return <CustomCard data={data} movieId={data.id} />;
          })}
          <div style={styles.paginationDiv}>
            <Pagination
              style={styles.pages}
              page={+page}
              count={movieList?.total_pages}
              onChange={handleChange}
              size="large"
            />
          </div>
        </div>
      ) : (
        <div style={styles.errorText}>Movie is not exists</div>
      )}
    </div>
  );
};
const mapStateToProps = (state: any) => {
  return {
    pageNumber: state.pageNumber,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setPageNumber: (pageNumber: number) => dispatch(setPageNumber(pageNumber)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DisplayCard);
