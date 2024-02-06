const React = require('react')
const Default = require('./layouts/default.jsx')

const Index = ({breads}) => {
    return (
        <Default>
            <h2>Index Page</h2>
            <ul>
                {breads.map((bread, index) => (
                    <li key={bread.name}>
                        <a href={`/breads/${index}`}>
                            {bread.name}
                        </a>
                    </li>
                ))}
            </ul>
        </Default>
    )
}

module.exports = Index