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
            {bread.baker && <p>{bread.getBakedBy()}</p>}
            <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>
            <form action={`/breads/${bread.id}?_method=DELETE`} method='POST'>
                <input type='submit' value='DELETE' />
            </form>
        </Default>
    )
}

module.exports = Show