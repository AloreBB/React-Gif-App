import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if( inputValue.trim() <= 1) return;

        // setCategories(cat => [inputValue, ...cat])
        onNewCategory( inputValue.trim() )
        setInputValue('')
    }

    return (
        <form action="" onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="Buscar Gif"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
