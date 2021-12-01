import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
    container: {
        height: '100%',
        '& > *': {
            padding: '20px',
            border: '1px solid #000'
        }
    },
})