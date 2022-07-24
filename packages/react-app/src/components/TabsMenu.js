import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  tab: {
    "&.MuiTab-textColorPrimary": {
      color: "#F1F1F1",
    },
  },
});

const TabsMenu = () => {
  const [value, setValue] = React.useState(0);

  const classes = useStyles();

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="tabs menu">
      <Tab className={classes.tab} disableRipple label="Markets" />
      <Tab className={classes.tab} disableRipple label="Portfolio" disabled />
    </Tabs>
  );
};

export default TabsMenu;
