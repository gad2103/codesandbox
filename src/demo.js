import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import Email from "@material-ui/icons/Email";
import Shopify from "@material-ui/icons/ShoppingCart";
import Zendesk from "@material-ui/icons/HelpRounded";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    fontSize: "35px !important"
  },
  MuiTypographyBody1: {
    fontSize: "35px"
  },
  formControl: {
    margin: theme.spacing(3)
  },
  FormControlLabel: {
    fontSize: "35px"
  },
  Checkbox: {
    fontSize: "35px !important"
  }
}));

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter(v => v).length !== 2;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        {/* <FormLabel component="legend">Choose your integration</FormLabel> */}
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                icon={<Email />}
                checkedIcon={<Email />}
                checked={gilad}
                onChange={handleChange("gilad")}
                value="gilad"
                color="primary"
              />
            }
            label="GMail"
          />
          <FormControlLabel
            control={
              <Checkbox
                icon={<Shopify />}
                checkedIcon={<Shopify />}
                checked={jason}
                onChange={handleChange("jason")}
                value="jason"
              />
            }
            label="Shopify"
          />
          <FormControlLabel
            control={
              <Checkbox
                icon={<Zendesk />}
                checkedIcon={<Zendesk />}
                checked={antoine}
                onChange={handleChange("antoine")}
                value="antoine"
              />
            }
            label="Zendesk"
          />
        </FormGroup>
        {/* <FormHelperText>Be careful</FormHelperText> */}
      </FormControl>
      {/* <FormControl required error={error} component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Pick two</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={gilad} onChange={handleChange('gilad')} value="gilad" />}
            label="Gilad Gray"
          />
          <FormControlLabel
            control={<Checkbox checked={jason} onChange={handleChange('jason')} value="jason" />}
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox checked={antoine} onChange={handleChange('antoine')} value="antoine" />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>You can display an error</FormHelperText>
      </FormControl> */}
    </div>
  );
}
