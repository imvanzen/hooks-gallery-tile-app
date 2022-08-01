import React, { ReactElement } from 'react'
import Gallery, {
    Big,
    Tile,
    High,
    Wide
} from './Gallery'

const App = (): ReactElement => {
    return (
        <div>
            <Gallery>
                <Big />
                <Tile />
                <Tile />
                <High />
                <Big />
                <Wide />
                <Tile />
                <Tile />
            </Gallery>
        </div>
    )
}

export default App