const React = require('react')

const Default = (html) => {
    return (
        <html>
            <head>
                <title>BreadCRUD</title>
            </head>
            <body>
                <div className='wrapper'>
                    <header>
                        <h1><a href='/breads'>BreadCRUD</a></h1>
                    </header>
                    <div className='container'>{html.children}</div>
                </div>
            </body>
        </html>
    )
}

module.exports = Default