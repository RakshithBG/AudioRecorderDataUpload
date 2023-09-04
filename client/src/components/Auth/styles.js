import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme)=>({
    paper:{
        marginTop:theme.spacing(8),
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        padding:theme.spacing(2)

    },
    root:{

    },
    avatar:{
        margin:theme.spacing(1),
        backgrounddColor:theme.pallete.secondary.main,
    },
    form:{
        width:'100%',
        marginTop:theme.spacing(3),

    },
    submit:{
        margin:theme.spacing(3,0,2)
    }

}))

