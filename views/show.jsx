const React = require('react')
const Default = require('./layouts/default.jsx')

const Show = ({bread}) => {
    return (
        <Default>
            <h2>Show Page</h2>
            <h3>{bread.name}</h3>
            <p>
                This bread 
                {bread.hasGluten ? (<span> contains </span>) : (<span> does NOT contain </span>)}
                gluten.
            </p>
            <img src={bread.image} alt={bread.name}/>
        </Default>
    )
}

module.exports = Show