import { useContext } from "react";
import { DataContext } from "../contexts/DataProvider";

export default function ListingForm(){
    const { addListing } = useContext(DataContext)

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const vehicle = formData.get('vehicle')
        const description = formData.get('description')
        addListing(vehicle, description)
        event.target.reset()
    }

    return (
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="vehicle">Vehicle</label>
            <input type="vehicle" className="form-control" name="vehicle" />
        </div>
        <div className="form-group">
            <label htmlFor="description">description</label>
            <input type="description" className="form-control" name="description" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>       
    )
}