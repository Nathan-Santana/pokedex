export default async function About() {
    const response = await fetch("https://pokeapi.co/api/v2/region/");
    const data = await response.json();
    return (
        <>
            {data.results.map((region, index) => (
          <div className="col-lg-3 col-md-6 col-12 mb-3 d-flex justify-content-center">
            <h1>{region.name}</h1>
          </div>
        ))}
        </>
    )
}

