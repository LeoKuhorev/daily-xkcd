import React from "react";
import Link from "next/link";
import { Typography, Box } from "@material-ui/core";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  linksStyles: {
    marginRight: 10,
  },
});

export default function Links(props) {
  const nums = [];
  for (let i = props.num; i > props.num - 10; i--) {
    nums.push(i);
  }

  const router = useRouter();
  const classes = useStyles();
  const path = router.pathname.includes("comic") ? "." : "comic";

  return (
    <>
      <Typography>Previous {nums.length}</Typography>
      <Box display="flex" flexWrap="wrap">
        {nums.map((num, idx) => {
          return (
            <>
              <Link key={num} href={path + "/[id].js"} as={path + `/${num}/`}>
                <a className={classes.linksStyles}>#{num}</a>
              </Link>
            </>
          );
        })}
      </Box>
    </>
  );
}
