import {createContext, useState} from 'react'

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites:0,
    addFavorite: (favoriteMeeup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([])


    //add favorites
    function addFavoritesHandler(favoriteMeeup) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeeup);
        } )
    }

    //remove favorites
    function removeFavoriteHandler(meetupId) {
        //alert('remove')
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        })
    }
    
    // item is favorite 
    function itemIsFavoritesHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId); 
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoritesHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoritesHandler
    }
    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;