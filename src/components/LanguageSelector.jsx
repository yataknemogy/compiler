import React from 'react';

const languageSelector = ( {setLanguage} ) => {
    return (
        <select onChange={event => setLanguage (event.target.value) } defaultValue="java">
            <option value="java">
                Java
            </option>
            <option value="python">
                Python
            </option>
            <option value="javascript">
                JavaScript
            </option>
        </select>
    )
}

export default languageSelector();