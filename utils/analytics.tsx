import { getApps, initializeApp } from "firebase/app";
import { getAnalytics, logEvent, Analytics } from "firebase/analytics";

class GAnalytics
{
    private static _instance: GAnalytics;
    public analytics: Analytics;

    private constructor()
    {
        //...
    }

    public static get Instance()
    {
        // Do you need arguments? Make it a regular static method instead.
        return this._instance || (this._instance = new this());
    }

    public Initialize() {

        const firebaseConfig = {
            apiKey: "AIzaSyBkALx7_p6SgIgksmnrnFi-Uslc1iTGTUQ",
            authDomain: "procedurallygenerated-343c9.firebaseapp.com",
            projectId: "procedurallygenerated-343c9",
            storageBucket: "procedurallygenerated-343c9.appspot.com",
            messagingSenderId: "86287940207",
            appId: "1:86287940207:web:13dbb8f70e917a7cc5ab9a",
            measurementId: "G-9Z3M4XEV7G",
            debugMode: true,
          };
          
          if (!getApps().length) {
            initializeApp(firebaseConfig);
          }

          this.analytics = getAnalytics();
    }

    public LogEvent(event_name: string, payload = {}) {
        console.log('LogEvent %s %s', event_name, payload);
        logEvent(this.analytics, event_name, payload);
    }
}

export default GAnalytics;