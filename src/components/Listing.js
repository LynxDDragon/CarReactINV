import { Link } from 'react-router-dom';


export default function Listing(props) {
    return (
        <div className="card">
            <div className="card-header">
                {
                    (!props.preview) ?
                    (
                        <h2>{ props.listing.name }</h2>
                    )
                    :
                    <Link to={`/listing/${props.listing.id}`}>{ props.listing.name }</Link>
                }
            </div>
            {
                (!props.preview) ?
                (
                    <div className="card-body">
                        <p>{ props.listing.year }</p>
                    </div>
                )
                :
                ''
            }
        </div>
    )
}