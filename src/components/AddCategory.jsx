import { useState } from "react";

export const AddCategory = ({ handleAddCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = ( event  ) => {
        event.preventDefault();

        const newInputValue = inputValue.trim();
        if( newInputValue.length <= 2 ) return;

        // setCategories( categories => [ inputValue, ...categories ] );
        handleAddCategory(  newInputValue );
        setInputValue('')
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Find gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

// export default AddCategory