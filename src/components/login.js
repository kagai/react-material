import React from 'react'
import {Typography,CardContent,CardActions,Card,TextField,Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        textAlign: 'center',
        marginTop: theme.spacing(25),
        paddingBottom: theme.spacing(2)
      },
      title: {
        marginTop: theme.spacing(2),
        color: theme.palette.openTitle
      },
      textField: {
        width: 400
      },
      submit: {
        margin: 'auto',
        marginBottom: theme.spacing(2),
        cursor: 'pointer',
        width: 400,
        paddingTop:10,
        paddingBottom:10
      }
}))
export default function Login() {
    const classes = useStyles()
    return (
       <Card className={classes.card}>
           <CardContent>
           <Typography variant="h6" className={classes.title}>
            Sign In
          </Typography>
          <TextField id="email" type="email" label="Email" className={classes.textField} variant="outlined" margin="normal"/><br/>
          <TextField id="password" type="password" label="Password" className={classes.textField} variant="outlined" margin="normal"/>
           </CardContent>
           <CardActions>
          <Button color="primary" variant="contained" className={classes.submit}>Submit</Button>
        </CardActions>


       </Card>
    )
}
