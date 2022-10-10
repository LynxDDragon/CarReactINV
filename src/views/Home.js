import ForSale from '../components/ForSale'
import ListingForm from '../components/ListingForm'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'

export default function Home() {
    const { user } = useContext(AuthContext)

    return (
        <div>
            <h1>These Cars are For sale</h1>
            {
                (user.loggedIn) ?
                (
                    <>
                        <p>Welcome { user.username }</p>
                        <ListingForm />
                    </>
                )
                :
                ''
            }
            <ForSale />
        </div>
    )
}