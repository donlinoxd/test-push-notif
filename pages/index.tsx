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
