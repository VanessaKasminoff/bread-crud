const React = require('react')
const Default = require('./layouts/default.jsx')

const bakerShow = ({baker}) => {
    return (
        <Default>
            <h2>{baker.name}</h2>
            <p>{baker.name} has been baking with us since {baker.startDate.getFullYear()}.</p>
            <p>About {baker.name}: {baker.bio}</p>
            <h3>Breads {baker.name} has baked</h3>
            <ul>
                {baker.breads.map((bread) => (
                    <li key={bread.id}>{bread.name}</li>
                ))}
            </ul>
            <form action={`/bakers/${baker.id}?_method=DELETE`} method='POST'>
                <input type='submit' value='DELETE' />
            </form>
        </Default>
    )
}

module.exports = bakerShow