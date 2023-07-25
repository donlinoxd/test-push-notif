import { useEffect } from 'react'
import { getMessaging, getToken } from 'firebase/messaging'
import { messaging } from '../src/lib/firebase'

export default function Home() {
    function requestPermission() {
        console.log('Requesting permission...')
        window?.Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
                console.log('Notification permission granted.')
            }
        })

        getToken(messaging, { vapidKey: 'BKIVHHmhVEKzCmMy9ukLTjhfuAlluEyJabTl4RTVFTm4FZOMMGbJBX6TE26LgMEcsZisU4W2LDvNpK42hliOsM8' })
            .then((currentToken) => {
                if (currentToken) {
                    // Send the token to your server and update the UI if necessary
                    // ...
                    console.log('Send the token to the server')
                    console.log('current Token: ', currentToken)
                } else {
                    // Show permission request UI
                    console.log('No registration token available. Request permission to generate one.')
                    // ...
                }
            })
            .catch((err) => {
                console.log('An error occurred while retrieving token. ', err)
                // ...
            })
    }

    useEffect(() => {
        requestPermission()
    }, [])

    return (
        <div>
            <h1>Push Notification</h1>
        </div>
    )
}
