import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMusic, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons"

const Nav = () => {
    return (
        <div className='nav-bar'>
            <div className='nav-title'>
                <FontAwesomeIcon icon={faExclamationTriangle} />
                <h1>Danger! Music Theory</h1>
                <FontAwesomeIcon icon={faMusic} />
            </div>
            <div className='nav-links'></div>
        </div>
    )
}

export default Nav