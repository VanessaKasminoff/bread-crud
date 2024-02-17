const React = require('react')
const Default = require('./layouts/default.jsx')

const New = ({bakers}) => {
    return (
        <Default>
            <h2>Add a New Bread</h2>
            <form action='/breads' method='POST'>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' id='name' required />
                <label htmlFor='image'>Image</label>
                <input type='text' name='image' id='image' />
                <label htmlFor='baker'>Baker</label>
                <select name='baker' id='baker' required>
                    <option value=''>--Select a Baker--</option>
                    {bakers.map((baker) => {
                        return (
                            <option key={baker.id} value={baker.id}>{baker.name}</option>
                        )
                    })}
                </select>
                <label htmlFor='hasGluten'>Has Gluten?</label>
                <input type='checkbox' name='hasGluten' id='hasGluten' defaultChecked />
                <br />
                <input type='submit' />
            </form>
            <div className="backButton">
                <a href="/breads"><button>Cancel</button></a>
            </div>
        </Default>
    )
}

module.exports = New