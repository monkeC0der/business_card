import { useState } from 'react';

export default function Info () {
    return (
        <div className="info">
            <h3 className="info--header">About</h3>
            <p className="info--text">I am a food quality manager/paperwork monkey at my family's fifth generation potato farm, located in the beautiful Prince Edward Island. In my off-time, I enjoy researching the many ways I can make my work as easy
                as possible.
            </p>
            <h3 className="info--header">Interests</h3>
            <p className='info--text'>Coding. Outdoors. Operating heavy equipment. Traveling to weird spots. Looking at potatoes.</p>
        </div>
    )
}