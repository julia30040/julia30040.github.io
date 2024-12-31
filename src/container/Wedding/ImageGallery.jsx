// @flow
import React from 'react'
import radium from 'radium';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

const styles = {
    gallery: {
      display: 'grid',
      width: '100%',
      gap: 16,
    },
    image: {
      width: '100%',
      objectFit: 'cover',
      aspectRatio: '1 / 1',
      borderRadius: 8,
    },
}

const ImageGallery = ({ images }) => {
    return (
        <LightGallery
            style={styles.gallery}
            plugins={[lgThumbnail]}
            speed={500}
            elementClassNames="wedding-light-gallery"
            backgroundColor="rgba(0, 0, 0, 0.65)"
        >
            {images.map((image, index) => (
                <a data-src={image.src} key={`image-$${index}`}>
                    <img style={styles.image} src={image.src} />
                </a>
            ))}
        </LightGallery>
    );
}

export default radium(ImageGallery);