import { useEffect } from 'react'

export default function Home() {
    function requestPermission() {
        console.log('Requesting permission...')
        Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
                console.log('Notification permission granted.')
            }
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
