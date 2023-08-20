
const styles = {
  linkDiv: {
    textDecoration: "none",
  },
  movieCard: {
    width: "15rem",
    height: "16rem",
    margin: "1rem",
    borderRadius: "0.8rem",
   
   
  },
 
  '@media (max-width: 767px)': {
    movieCard: {
      backgroundColor:'red !important'
    },
  },

  contentDiv: {
    textAlign: "start" as "start",
    marginLeft: "0.5rem",
    marginTop: "1rem",
  },
  titleDiv: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "1.1rem",
    lineHeight: "1.3rem",
    fontWeight: "bold",
  },
  spanDiv: {
    color: "#9b9b9b",
    marginRight: "0.5rem",
  },
  overViewDiv: {
    display: "-webkit-box",
    webkitLineClamp: "2",
    overflow: "hidden",
    textOverflow: "ellipsis",
    webkitBoxOrient: "vertical",
    fontSize: "1rem",
  },
  
};


export default styles;
