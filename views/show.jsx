const React = require('react')
const Default = require('./layouts/default.jsx')

const Show = ({bread, index}) => {
    // const ingredients = bread.ingredients.map((ingredient) => {
    //     return (
    //         <li className='ingredients-list' key={bread.name}>{ingredient} </li>
    //     )
    // })
    return (
        <Default>
            <h2>Show Page</h2>
            <h3>{bread.name}</h3>
            {/* <ul className='ingredients-ul'>
                Ingredients: {ingredients}
            </ul> */}
            <p>
                This bread 
                {bread.hasGluten ? (<span> contains </span>) : (<span> does NOT contain </span>)}
                gluten.
            </p>
            <img src={bread.image} alt={bread.name}/>
            <a href={`/breads/${index}/edit`}><button>Edit</button></a>
            <form action={`/breads/${index}?_method=DELETE`} method='POST'>
                <input type='submit' value='DELETE' />
            </form>
        </Default>
    )
}

module.exports = Show