import { useContext, useEffect, useState } from "react";
import Listing from './Listing';
import { DataContext } from "../contexts/DataProvider";

export default function ForSale() {
    const { listings } = useContext(DataContext)

    return (
        <div>
            { listings.map((listing) => <Listing listing={listing} preview={true} key={listing.id} />)}
        </div>
    )
}