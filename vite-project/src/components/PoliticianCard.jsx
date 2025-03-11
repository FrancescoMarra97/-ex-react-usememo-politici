export default function PoliticianCard({ politician }) {

    return (
        <>

            <div className="col-md-4 mb-4">
                <div key={politician.id} className="card">
                    <div className="card-header">
                        <img src={politician.image} alt="" />
                    </div>
                    <div className="card-body">
                        <p>{politician.name}</p>
                        <p>{politician.position}</p>
                        <p>{politician.biography}</p>
                    </div>
                </div>
            </div>

        </>
    )
}