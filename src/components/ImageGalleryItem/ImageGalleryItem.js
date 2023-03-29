import PropTypes from 'prop-types';
import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css'


 const ImageGalleryItem = ({ webformatURL,largeImageURL,openModal }) => {
  return (
    <li
      className={css.ImageGalleryItem}
    onClick = {() => {
      openModal(largeImageURL)
    }}>
      
      <img src={webformatURL} alt="pic" width={400} className={ css.ImageGalleryItemImage} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  openModal: PropTypes.func.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired
  
}



export default ImageGalleryItem