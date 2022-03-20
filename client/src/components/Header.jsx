import { AppBar, Toolbar, makeStyles } from "@material-ui/core"

import { Menu } from "@material-ui/icons";

const useStyles = makeStyles({
  header: {
    background: "#fff",
    height: 70,
  },
  logo: {
    height: 55,
    margin: 'auto',
    paddingRight: 20,
  },
  menu:{
    color: "#000"
  }
})

const Header = () => {
  const classes = useStyles();
  const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
  return (
    <AppBar className={classes.header}>
      <Toolbar>
        <Menu className={classes.menu}/>
        <img src={url} alt="logo" className={classes.logo} />
      </Toolbar>
    </AppBar>
  )
}

export default Header