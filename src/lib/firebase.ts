// Import the functions you need from the SDKs you need
import { getMessaging, getToken } from 'firebase/messaging'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAWdH3ujh59faQ6oMjV_peG5Cr3M26DFXI',
    authDomain: 'test-push-notification-42367.firebaseapp.com',
    projectId: 'test-push-notification-42367',
    storageBucket: 'test-push-notification-42367.appspot.com',
    messagingSenderId: '852253176233',
    appId: '1:852253176233:web:0e8749a309a6d0273594b8',
    measurementId: 'G-3R2WG1HFRN',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

const messaging = getMessaging(app)

getToken(messaging, { vapidKey: 'BNUXABuRKhjdi74AzmqX19gbBG7dx-60kr1UdbymgKDk4Uf9il7KJjVTYDCMhW_SsAG4IfNIlEXUt12AGHKe5hc' })
