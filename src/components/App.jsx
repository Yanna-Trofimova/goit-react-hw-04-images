
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';

import { useState, useEffect } from 'react';

export default function App() {
  const [pictureName,setPictureName] = useState('');
  const [page,setPage] = useState(1);
  const [picture,setPicture] = useState([]);
  const [,setError] = useState(null);
  const [buttonLoad,setButtonLoad] = useState(false);
  const [,setTotalImages] = useState(0);
  const [bigImg,setBigImg] = useState('');
  const [showModal,setShowModal] = useState(false);
  const [loading,setLoading]= useState(false);


  
  useEffect(() => {
    if (!pictureName) {
        return;
      }
    
    setLoading(true);

     fetch(`https://pixabay.com/api/?q=${pictureName}&page=${page}&key=33458251-0b67ccfbd4060c82b4c4d5dd0&image_type=photo&orientation=horizontal&per_page=12`)
       .then(response => response.json())
         .then(pic => {
           if (!pic.total) {
            
           return alert('К сожалению по Вашему запросу ничего не найдено');
          }
          

           setPicture(prevState => ([...prevState, ...pic.hits]));
           setTotalImages(pic.total);

       
           
          const hits = pic.hits;
           onButtonLoad(hits.length);
          
          
         })
          
       .catch(error => setError(error))
      .finally(() => {
         setLoading( false );
       });
  },[pictureName, page ]);
  


const onLoadMore = () => {
  setPage(prevState => prevState + 1);
};

const onButtonLoad = length => {
    if (length >= 12) {
     return setButtonLoad(true);
    }
    return setButtonLoad( false );
};
  


const onSubmit= text => {
 
  
 if(pictureName.trim() === text) {
       return alert(`ви вже продивляєтесь ${text}`);
 }
  

  setPictureName(text);
  setPicture([]);
  setPage(1);

        
};
  
  
const openModal = url => {
  setBigImg(url);
  setShowModal(true);

};

const closeModal = () => {
  setShowModal(false);
}

 
    return (
      <>
        <Searchbar onSubmit={onSubmit} />
        {picture && <ImageGallery picture={picture} onImageClick={openModal} />}
        {buttonLoad &&  <Button onLoadMore={onLoadMore} />}
        {loading && <Loader/>}
        {showModal && (
        <Modal closeModal={closeModal}  bigImg={bigImg}/>
        )}
      </>
    );
  }
