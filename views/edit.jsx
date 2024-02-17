const React = require('react')
const Default = require('./layouts/default.jsx')

const Edit = ({bread, bakers}) => {
    return (
        <Default>
             <h2>Edit a Bread</h2>
            <form action={`/breads/${bread.id}?_method=PUT`} method='POST'>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' id='name' required defaultValue={bread.name}/>
                <label htmlFor='image'>Image</label>
                <input type='text' name='image' id='image' defaultValue={bread.image}/>
                <label htmlFor='baker'>Baker</label>
                <select name='baker' id='baker' required defaultValue={bread.baker}>
                    <option value=''>--Select a Baker--</option>
                    {bakers.map((baker) => {
                        return (
                            <option key={baker.id} value={baker.id}>{baker.name}</option>
                        )
                    })}
                </select>
                <label htmlFor='hasGluten'>Has Gluten?</label>
                <input type='checkbox' name='hasGluten' id='hasGluten' defaultChecked={bread.hasGluten} />
                <br />
                <input type='submit' />
            </form>
            <div className="backButton">
                <a href={`/breads/${bread.id}`}><button>Cancel</button></a>
            </div>
        </Default>
    )
}

module.exports = Edit