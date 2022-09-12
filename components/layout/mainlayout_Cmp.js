import React, { Fragment } from 'react'
import MainNavigationBar from './mainnavigation_Cmp'
function MainLayoutCmp(props) {
    return (
        <Fragment>
            <MainNavigationBar />
            <main>{props.children}</main>
        </Fragment>
    )
}

export default MainLayoutCmp