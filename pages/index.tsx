import { useEffect } from 'react'
import { getMessaging, getToken } from 'firebase/messaging'
import { messaging } from '../src/lib/firebase'

export default function Home() {
    function requestPermission() {
        console.log('Requesting permission...')
        Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
                console.log('Notification permission granted.')
            }
        })

        getToken(messaging, { vapidKey: '<YOUR_PUBLIC_VAPID_KEY_HERE>' })
            .then((currentToken) => {
                if (currentToken) {
                    // Send the token to your server and update the UI if necessary
                    // ...
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
        if (window) requestPermission()
    }, [])

    return (
        <div>
            <h1>Push Notification</h1>
        </div>
    )
}
