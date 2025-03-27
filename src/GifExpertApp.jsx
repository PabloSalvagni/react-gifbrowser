import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

// import AddCategory from './components/AddCategory';
// import GifGrid from './components/GifGrid';


const GifExpertApp = () => {
    console.log("GifExpertApp")
    const [categories, setCategories] = useState(['One Punch']);

    const handleAddCategory = (newCategory) => {

        const formantCategory = categories.map(category => category.toLowerCase());
        const formatNewCategory = newCategory.toLowerCase();

        if (formantCategory.includes(formatNewCategory)) return;
        setCategories([...categories, newCategory]);

    }


    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory handleAddCategory={handleAddCategory} />
            {
                categories.map((category) => {
                    return (
                        // <div key={category}>
                        //     <h3>{category}</h3>
                        //     <li >{category}</li>
                        // </div>
                        <GifGrid key={category} category={category} />
                    )
                })
            }
            {/* LISTADO DE GIFT      */}

        </>
    )
}

export default GifExpertApp