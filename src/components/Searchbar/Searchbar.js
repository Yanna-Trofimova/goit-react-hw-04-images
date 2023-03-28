
import PropTypes from 'prop-types';
import css from 'components/Searchbar/Searchbar.module.css'
import { useState } from 'react';

export default function Searchbar({ onSubmit }) {
    const [pictureName,setPictureName] = useState('');

    
    const handleChange = e => {
        setPictureName( e.target.value.toLowerCase() );
    }


    const handelSubmit = (e  ) => {
        e.preventDefault();


         if (pictureName.trim() === '') {
            alert('Введіть назву')
            return;
         }

        onSubmit(pictureName);
    }




    
    return (
     <header className={css.Searchbar} >
            <form  onSubmit={handelSubmit} className={css.SearchForm}>
            <button type="submit"   className={css.SearchFormButton}>
            <span >Search</span>
            </button>

                <input
            className={css.SearchFormInput}
            onChange={handleChange}
            value={pictureName}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            />
        </form>
</header>
    );
  }
 

 Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};