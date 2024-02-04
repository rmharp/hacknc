import React, { useState } from 'react';
import '../CSS/Brain.css';

import brainOutline2 from '../media/brain-outline-2-removebg-preview.png';

import cerebellum from '../media/cerebellum-removebg-preview.png';

import brainOutline2 from '../media/brain-outline-2-removebg-preview.png';

import brainOutline2 from '../media/brain-outline-2-removebg-preview.png';

import brainOutline2 from '../media/brain-outline-2-removebg-preview.png';


//Frontal Lobe, Occipital Lobe, Hypothalamus, Parietal Lobe, Cerebellum

function Brain() {
    const [displayAbout, setDisplayAbout] = useState(false);

    const toggleAboutDisplay = () => {
        setDisplayAbout(!displayAbout);
    };

    return (
        <div className="testing1">
            <div className="brain-container">
                <h1>Test</h1>
                <img src={brainOutline2} className="brainOutline2" alt="Brain outline" />
            </div>
        </div>
    );
}

export default Brain;
