import React from 'react'
import * as classes from './header.module.css'

const header = () => {
    return (
        <div className={classes.header}>
            <h1 className={classes.data}>Employee Data</h1>
        </div>
    )
}

export default header