const React = require('react')
const Default = require('./layouts/default.jsx')

const Index = ({breads}) => {
    return (
        <Default>
            <h2>Index Page</h2>
            <ul>
                {breads.map((bread) => (
                    <li key={bread.name}>{bread.name}</li>
                ))}
            </ul>
        </Default>
    )
}

module.exports = Index