/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Image from 'next/image'

import errorPageStyle from "/styles/jss/nextjs-material-kit-pro/pages/errorPageStyles.js";

const useStyles = makeStyles(errorPageStyle);

export default function ErrorPage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url('/img/album-20-large.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        {/* <div className={classes.container}> */}
        <div className={classes.contentCenter}>
          <GridContainer>
            <GridItem md={12}>
              {/*<h1 className={classes.Title}>ประกาศ</h1>
              <h2 className={classes.subTitle}></h2>
              <h4 className={classes.description}>
                Ooooups! Looks like you got lost.
              </h4>*/}
              <Image
                src="/img/S__505200672.jpg"
                layout="responsive"
                width={940}
                height={788}
              />
            </GridItem>
          </GridContainer>
        </div>
        </div>
      {/* </div>
      {/*<Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/?ref=njsmkp-error"
                    target="_blank"
                    className={classes.block}
                  >
                    Creative Tim
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation/?ref=njsmkp-error"
                    target="_blank"
                    className={classes.block}
                  >
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="http://blog.creative-tim.com/?ref=njsmkp-error"
                    className={classes.block}
                  >
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license/?ref=njsmkp-error"
                    target="_blank"
                    className={classes.block}
                  >
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with{" "}
              <Favorite className={classes.icon} /> by{" "}
              <a
                href="https://www.creative-tim.com/?ref=njsmkp-error"
                target="_blank"
              >
                Creative Tim
              </a>{" "}
              for a better web.
            </div>
          </div>
        }
      />*/}
    </div>
  );
}
