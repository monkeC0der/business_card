import { useState } from 'react';
import cover_photo from "../assets/cover_photo.jpg"

export default function About() {
    return (
        <>
            <img className="cover_photo" src={cover_photo}/>
            <h1 className="name">Timothy Ching</h1>
            <h4 className="occupation">Farming, Paperwork, and Coding</h4>
            <h4 className="email">timching@dal.ca</h4>
            <div className="button-group">
                    <a href="mailto:timpei96@gmail.com">
                <button className="button button--email"><i class="fa-solid fa-envelope"></i> Email</button>
                </a>
                <a href="https://ca.linkedin.com/in/tim-ching-45964b231?trk=people-guest_people_search-card">
                <button className="button button--linkedin"><i class="fa-brands fa-linkedin"></i> LinkedIn</button>
                </a>
            </div>
        </>
    )
}