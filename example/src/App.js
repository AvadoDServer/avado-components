import React from 'react'

import AvadoComponents from 'avado-components'
import 'avado-components/dist/index.css'

const App = () => {
    return (
        <>
            <AvadoComponents.Icons.Logo />
            <br />
            <section className="section">
        <div className="container">
            <h1 className="title is-1">I'm an h1!</h1>
            <h2 className="title is-2">I’m a regular h2...</h2>
            <h2 className="title is-2 has-text-info">Am I an info-h2?</h2>
            <br />
            <p>This is regular text.</p>
            <p className="has-text-info">This is info-text, used to give you instructions!</p>
</div>
    </section>

    <div className="avadobar-menu is-active has-avado-bg">
            <div className="avadobar-item is-inline-block-mobile is-inline-block-tablet-only">
                <AvadoComponents.Icons.Wifi fill="#fff" width={40}/>
            </div>
            <div className="avadobar-item is-inline-block-mobile is-inline-block-tablet-only cursorpointer">
                <AvadoComponents.Icons.Help fill="#fff" width={40}/>
            </div>
            {/* <a className="avadobar-item is-inline-block-mobile is-inline-block-tablet-only" href="https://ava.do">
                <Icons.Logo fill="#fff" width={60} />
            </a> */}
        </div>

           
        </>
    )

}

export default App
