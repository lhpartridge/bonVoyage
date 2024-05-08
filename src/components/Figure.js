const Figure =(props)=> {

    const image = `/media/${props.image}`
    const region = props.region
    const location = props.location
    const name = props.name
    const date = props.date
    let companions = props.companions
    const rating = props.rating

    if (companions.length > 1) {
        if (companions.length == 2) {
            companions = `${companions[0]} and ${companions[1]}`
        } else if (companions.length > 2) {
            companions = `${companions }`
        }
    }

    return(
        <figure className="figure col-md-3">
            <img src={image} alt={location} className="img-fluid"/>
            <figcaption className="figure-caption">Location: {location}</figcaption>
            <figcaption className="figure-caption">Name: {name}</figcaption>
            <figcaption className="figure-caption">Date: {date}</figcaption>
            <figcaption className="figure-caption">Companions: {companions}</figcaption>
            <figcaption className="figure-caption">Rating: {rating}</figcaption>
        </figure>
    )
}

export default Figure