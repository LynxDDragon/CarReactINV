import { useState, useEffect, useContext, createContext } from 'react'
import { getFirestore, getDoc, getDocs, collection, doc } from '@firebase/firestore'

export const DataContext = createContext()

export const DataProvider = function(props) {
    const [listings, setListings] = useState([])
    const db = getFirestore()

    useEffect(() => {
        /* fetch('http://127.0.0.1:5000/api/posts')
            .then((res) => res.json())
            .then((data) => {
                setPosts(data)
                console.log(data)
            }) */
        const getListings = async function() {
            const collectionRef = collection(db, 'listings')
            const collectionSnap = await getDocs(collectionRef)

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
    }, [])

    const getListing = async function(id, callback) {
        /* fetch(`http://127.0.0.1:5000/api/post/${id}`)
            .then((res) => res.json())
            .then((data) => {
                callback(data)
                console.log(data)
            }) */
//////////////////////////////////////////////////////////
            /*useEffect(() => {
                fetch('https://my-json-server.typicode.com/Llang8/cars-api/cars')
                    .then((res) => res.json())
                    .then((data) => {
                        setListings(data)
                        console.log(data)
                    })
            }, []) */

        const docRef = doc(db, "listings", id)
        const docSnap = await getDoc(docRef)

        const listing = {
            ...docSnap.data(),
            id: docSnap.id
        }

        callback(listing)
    }

    /* const getPokemon = function(pokemonId, callback) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
            .then((res) => res.json())
            .then((data) => {
                callback(data)
                console.log(data)
            })
    } */

    const getPokemon = async function(pokemonId, callback) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
        const data = await res.json()
        callback(data)
        console.log(data)
    }

    const value = {
        listings: listings,
        getListing: getListing,
        getPokemon: getPokemon
    }

    return (
        <DataContext.Provider value={value}>
            { props.children }
        </DataContext.Provider>
    )
}