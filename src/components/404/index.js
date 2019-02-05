import React from 'react'
import {Link} from 'react-router-dom'
import './404.css'

export default props => {
    return (
        <div className='not-found-container'>
            <div className='not-found-content'>
                <h1>404 -page not found</h1>
                <Link to='/'>
                    <i className='material-icons'> home</i>
                </Link>
            </div>
        </div>

    )
}