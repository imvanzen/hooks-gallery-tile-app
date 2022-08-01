import React from "react";
import "./GalleryEstate.scss";

// Galeria powinna obsługiwać kilka rodzajów kafelek
// oraz śledzić i wyświetlać zajmowaną przez nie powiezchnie
// Kafelki przekazywane są jako dzieci. Zajmowana przez nie ilość powinna byc wyświetlana w nagłówku
// h1 w komponencie Galerii.
// Obsługiwane kafelki i powierzchnia o którą powinien rosąć licznik:
// Tile 1x1 -> 1
// Wide 1x2 -> 2
// High 2x1 -> 2
// Big 2x2 -> 4
// Przykład: Jeśli uzytkownik przekaze jako dzieci
// <Gallery>
//   <Big/>
//   <Tile/>
//   <Tile/>
//   <High/>
// </Gallery>
// to licznik powinien wyświetlić liczbę 8
//
// BONUS: uzyj wzorca Compound Components

const map: any = {
    big: 4,
    wide: 2,
    high: 2,
    normal: 1
};

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + map[action.payload.variant] };
        default:
            throw new Error();
    }
};

const CounterContext = React.createContext([{}, () => { }]);

const Gallery = ({ children }: any) => {
    const [state, dispatch] = React.useReducer(reducer, { count: 0 });
    return (
        <CounterContext.Provider value={[state, dispatch]}>
            <div className="container">
                <h1>Squares used: {state.count}</h1>
                <div className="portfolio">{children}</div>
            </div>
        </CounterContext.Provider>
    );
};

export const Tile = ({ variant = "normal" }) => {
    const [, dispatch]: any = React.useContext(CounterContext);
    React.useEffect(() => {
        dispatch({ type: "increment", payload: { variant } });
    }, [dispatch, variant]);
    return <div className={`tile ${variant}`} />;
};

export const Big = () => {
    return <Tile variant="big" />;
};

export const High = () => {
    return <Tile variant="high" />;
};

export const Wide = () => {
    return <Tile variant="wide" />;
};

export default Gallery;
