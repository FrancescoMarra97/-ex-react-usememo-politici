export default function PoliticianCard({ politicians }) {

    return (
        <>
            {politicians.map((politician) => (
                <div className="col-md-4 mb-4">
                    <div key={politician.id} className="card">
                        <div className="card-header">
                            <img src={politician.image} alt="" className="card-image" />
                        </div>
                        <div className="card-main">
                            <p>{politician.name}</p>
                            <p>{politician.position}</p>
                            <p>{politician.biography}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}