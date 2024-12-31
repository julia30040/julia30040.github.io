// @flow
import React from 'react'
import radium from 'radium';

import ImageGallery from './ImageGallery';

import titleImageURL from './assets/title-look.png';
import photoImageURL1 from './assets/photo-1.JPG';
import photoImageURL2 from './assets/photo-2.JPG';
import photoImageURL3 from './assets/photo-3.JPG';
import photoImageURL4 from './assets/photo-4.JPG';
import photoImageURL5 from './assets/photo-5.JPG';
import photoImageURL6 from './assets/photo-6.JPG';
import photoImageURL7 from './assets/photo-7.JPG';
import photoImageURL8 from './assets/photo-8.JPG';
import photoImageURL9 from './assets/photo-9.JPG';
import photoImageURL10 from './assets/photo-10.JPG';

const galleryImages = [
    {
        src: photoImageURL1,
    },
    {
        src: photoImageURL2,
    },
    {
        src: photoImageURL3,
    },
    {
        src: photoImageURL4,
    },
    {
        src: photoImageURL5,
    },
    {
        src: photoImageURL6,
    },
    {
        src: photoImageURL7,
    },
    {
        src: photoImageURL8,
    },
    {
        src: photoImageURL9,
    },
    {
        src: photoImageURL10,
    }
  ];

const styles = {
    wrapper: {

    },
    title: {
        width: 310,
        display: 'block',
        margin: '32px auto 16px',
    },
}

function GallerySection() {
    return (
        <div style={styles.wrapper}>
            <img style={styles.title} src={titleImageURL} />
            <ImageGallery images={galleryImages} />
        </div>
    );
}

export default radium(GallerySection);