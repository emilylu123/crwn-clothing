import React from 'react'
import './menu-item.styles.scss'

const MenuItem = ({ id, title, imageUrl, linkUrl, size }) => (
    <div style={{ backgroundImage: `url(${imageUrl})` }} className={`${size} menu-item`}>
        <div className='content'>
            <div className='title'>{title}</div>
            <span className='subtitle'>Shop Now</span>

        </div>
    </div>
)

export default MenuItem;