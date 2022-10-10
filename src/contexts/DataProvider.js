import { useState, useEffect, useContext, createContext } from 'react'
import { getFirestore, getDoc, getDocs, collection, collectionGroup, doc, addDoc, Timestamp, query, orderBy } from '@firebase/firestore'
import { AuthContext } from './AuthProvider'

export const DataContext = createContext()

export const DataProvider = function(props) {
    const [listings, setListings] = useState([])
    const { user } = useContext(AuthContext)
    const db = getFirestore()

    useEffect(() => {
        /* fetch('http://127.0.0.1:5000/api/posts')
            .then((res) => res.json())
            .then((data) => {
                setPosts(data)
                console.log(data)
            }) */
        const getListings = async function() {
            const collectionRef = collectionGroup(db, 'listings')
            const q = query(collectionRef, orderBy('dateCreated', 'desc'))
            const collectionSnap = await getDocs(q)

            const listingsArr = []

            collectionSnap.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                listingsArr.push({
                    ...doc.data(),
                    id: doc.id
                })
            })

            setListings(listingsArr)
        }
        getListings()
    }, [user])

    const getListing = async function(id, callback) {

        const docRef = doc(db, "listings", id)
        const docSnap = await getDoc(docRef)

        const listing = {
            ...docSnap.data(),
            id: docSnap.id
        }

        callback(listing)
    }

    const addListing = async function(vehicle, description) {
        const listing = {
            vehicle: vehicle,
            description: description,
            dateCreated: Timestamp.now()
        }

        const collectionRef = collection(db, 'user', user.uid, 'listings')
        const docRef = await addDoc(collectionRef, listing)

        listing.id = docRef.id

        setListings([listing, ...listings])
    }

    const value = {
        listings: listings,
        addListing: addListing,
        getListing: getListing
    }

    return (
        <DataContext.Provider value={value}>
            { props.children }
        </DataContext.Provider>
    )
}