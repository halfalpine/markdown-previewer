import React from "react";

const Title = () => {
  const styles = {
    pageTitle: {
      width: "100%",
      margin: "30px 0",
      fontSize: "1.2em"
    },
    h1: {
      textAlign: "center",
      marginBottom: "0px"
    },
    p: {
      textAlign: "center"
    }
  };
  return (
    <div className="page-title" style={styles.pageTitle}>
      <h1 style={styles.h1}>Markdown Previewer</h1>
      <p style={styles.p}>
        A React project for{" "}
        <a href="https://www.freecodecamp.org/challenges/build-a-markdown-previewer">
          Free Code Camp
        </a>
      </p>
    </div>
  );
};

export default Title;
