import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



export const GifExpertApp = () =>{
    // const categories = [ 'One Punch', 'Hunter x Hunter', 'OnePiece' ];
    const [categories, setCategories] = useState([ 'One Punch']);
    // const listCategories = categories.map(( categorie ) => <li key={categorie}>{ categorie } </li> )
    
    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>
            <ol>
                    {
                        categories.map(category => (
                            <GifGrid 
                                key={ category }
                                category={ category }
                            />
                        ))
                    }
            </ol> 
        </>
    );
};