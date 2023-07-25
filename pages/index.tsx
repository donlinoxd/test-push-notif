import { useEffect, useState } from 'react'
import { getMessaging, getToken } from 'firebase/messaging'
import { app, messaging } from '../src/lib/firebase'

export default function Home() {
    const [w, setW] = useState<any>()

    function requestPermission() {
        console.log('Requesting permission...')
        Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
                console.log('Notification permission granted.')
            }
        })

        const messaging = getMessaging(app)
        getToken(messaging, { vapidKey: 'BNUXABuRKhjdi74AzmqX19gbBG7dx-60kr1UdbymgKDk4Uf9il7KJjVTYDCMhW_SsAG4IfNIlEXUt12AGHKe5hc' })
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
        setW(window)

        if (w) {
            console.log(w)
            requestPermission()
        }
    }, [window, w])

    return (
        <div>
            <h1>Push Notification</h1>
        </div>
    )
}
