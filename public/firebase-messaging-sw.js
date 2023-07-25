import { getMessaging, getToken } from 'firebase/messaging'

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging()
getToken(messaging, { vapidKey: 'BNUXABuRKhjdi74AzmqX19gbBG7dx-60kr1UdbymgKDk4Uf9il7KJjVTYDCMhW_SsAG4IfNIlEXUt12AGHKe5hc' })
    .then((currentToken) => {
        if (currentToken) {
            // Send the token to your server and update the UI if necessary
            // ...
            console.log('On this step, send the token to the server')
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
