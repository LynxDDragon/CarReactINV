import { useEffect, useState, useContext } from 'react';
import { useParams} from 'react-router-dom';
import Listing from '../components/Listing';
import { DataContext } from '../contexts/DataProvider';

export default function SingleListing() {
    const [listing, setListing] = useState({})
    const { id } = useParams()
    const { getListing } = useContext(DataContext)

    useEffect(() => {
        getListing(id, setListing)
    }, [id])

    return (
        <div>
            <h1>Car Listing: {id}</h1>
            <Listing listing={listing} />
        </div>
    )
}