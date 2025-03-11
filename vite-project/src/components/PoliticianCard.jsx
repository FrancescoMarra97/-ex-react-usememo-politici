import React from "react"
const PoliticianCard = React.memo(({ politician }) => {
    console.log(`Debug: ${politician.name}`)
    return (
        <>

            <div className="col-md-4 mb-4">
                <div key={politician.id} className="card">
                    <div className="card-header">
                        <img src={politician.image} alt="" />
                    </div>
                    <div className="card-body">
                        <p><strong>Nome: </strong>{politician.name}</p>
                        <p><strong>Posizione Politica: </strong>{politician.position}</p>
                        <p> <strong>Biografia: </strong>{politician.biography}</p>
                    </div>
                </div>
            </div>

        </>
    )
})

export default PoliticianCard