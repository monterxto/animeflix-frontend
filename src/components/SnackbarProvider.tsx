import * as React from 'react';
import {SnackbarProvider as NotistackProvider, SnackbarProviderProps} from "notistack";
import {IconButton, makeStyles, Theme, Typography} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme: Theme) => {
    return {
        variantSuccess: {
            color: '#000',
            backgroundColor: theme.palette.success.main
        },
        variantError: {
            color: '#000',
            backgroundColor: theme.palette.error.main
        },
        variantInfo: {
            color: '#000',
            backgroundColor: theme.palette.primary.main
        },
    }
});

export const SnackbarProvider: React.FC<SnackbarProviderProps> = (props) => {
    let snackbarProviderRef;
    const classes = useStyles();
    console.log(props);
    const defaultProps: SnackbarProviderProps = {
        children: props.children,
        classes,
        autoHideDuration: 3000,
        maxSnack: 3,
        anchorOrigin: {
            horizontal: 'right',
            vertical: 'top'
        },
        preventDuplicate: true,
        ref: (el) => snackbarProviderRef = el,
        action: (key) => (
            <IconButton
                color="inherit"
                style={{fontSize: 20}}
                onClick={() => snackbarProviderRef.closeSnackbar(key)}
            >
                <CloseIcon/>
            </IconButton>
        ),
        color: '#000',
    };

    const newProps = {...defaultProps, ...props};

    return (
        <NotistackProvider {...newProps}>
            {props.children}
        </NotistackProvider>
    );
};
