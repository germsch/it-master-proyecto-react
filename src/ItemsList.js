import items from './items.js'
import {useState} from 'react' 

function ItemsList() {
    var [page, setPage] = useState(0)

    var pages = items

    function nextPage() {
        if (page == pages.length-1) {
            return;
        }

        setPage(page+1)
    }

    return (
        <>
            <p>Mostrando página {page+1} de {pages.length-1}</p>

            <div className="App-items-list">
                {
                    pages[page].map(function (dato) {
                        return <div className="App-item" key={dato.id}>
                            <img src={dato.image} />
                            {dato.title}
                            </div>
                    })
                }
            </div>

            <button onClick={() => setPage(0)}>
                Primera página
            </button>

            <button className="App-items-pagination" onClick={nextPage}>
                Ver más productos
            </button>

            <button onClick={() => setPage(pages.length-1)}>
                Última página
            </button>
        </>
    )
}

export default ItemsList