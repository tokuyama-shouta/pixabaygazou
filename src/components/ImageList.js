import React from 'react';
import Masonry from 'react-masonry-component'
import '../styles/ImageList.css';

//Appコンポーネントからpropsを受け取る
const ImageList = (props) => {
  /*Appコンポーネントから送られてきたimagesを
  mapを用いて展開する*/
  const images = props.images.map((image) => {
    return(
      <a 
        href={image.pageURL} 
        key={image.id} 
        target='_blank' 
        rel='noopener noreferrer' 
        className='ui medium image'>
        <img src={image.webformatURL} alt={image.tags}/>
      </a>
    );
  });
  return(
    <Masonry className="image-list">
      {images}
    </Masonry>
  );
};

export default ImageList