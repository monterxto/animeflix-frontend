import React from "react";
import Link, {LinkProps} from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import MuiBreadcrumbs from '@material-ui/core/Breadcrumbs';
import {Route} from 'react-router';
import {Link as RouterLink} from 'react-router-dom';
import {Box, Container, createStyles, makeStyles} from "@material-ui/core";
import {Location} from 'history'
import routes from "../routes";
import RouteParser from 'route-parser';

const breadcrumbNameMap: { [key: string]: string } = {};
routes.forEach(route => breadcrumbNameMap[route.path as string] = route.label);

const useStyles = makeStyles(() =>
    createStyles({
        linkRouter: {
            color: '#000fdf',
            "&:focus, &:active": {
                color: '#000fdf'
            },
            "&:hover": {
                color: '#00043b'
            }
        }
    }),
);

interface LinkRouterProps extends LinkProps {
    to: string;
    replace?: boolean;
}

const LinkRouter = (props: LinkRouterProps) => <Link {...props} component={RouterLink as any}/>;

export default function Breadcrumbs() {
    const classes = useStyles();
    // const hasCatalogAdmin = useHasRealmRole('catalog-admin');

    function makeBreadcrumb(location: Location) {
        const pathnames = location.pathname.split('/').filter(x => x);
        pathnames.unshift('/'); // [ / , categories, create]
        return (
            <MuiBreadcrumbs aria-label="breadcrumb">
                {
                    pathnames.map((value, index) => { // /, categories, create //categories/create
                        const last = index === pathnames.length - 1;
                        const to = `${pathnames.slice(0, index + 1).join('/').replace('//', '/')}`; // /categories | /categories/create/xpto
                        const route = Object
                            .keys(breadcrumbNameMap)
                            .find(
                                path => new RouteParser(path).match(to)
                            );

                        if (route === undefined) {
                            return false;
                        }

                        return last ? (
                            <Typography color="textPrimary" key={to}>
                                {breadcrumbNameMap[route]}
                            </Typography>
                        ) : (
                            <LinkRouter color="inherit" to={to} key={to} className={classes.linkRouter}>
                                {breadcrumbNameMap[route]}
                            </LinkRouter>
                        );
                    })
                }
            </MuiBreadcrumbs>
        );
    }

    return (
        true ? <Container>
            <Box paddingTop={2} paddingBottom={1}>
                <Route>
                    {({location}: { location: Location }) => makeBreadcrumb(location)}
                </Route>
            </Box>
        </Container> : null
    );
}