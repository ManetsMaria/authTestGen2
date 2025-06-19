import './App.css'
import {Authenticator} from "@aws-amplify/ui-react";
import CustomFileUploader from "./components/CustomFileUploader.jsx";

function App() {
    return (
        <Authenticator socialProviders={['google']}>
            {({ signOut, user }) => {
                console.log(user);
                return (
                    <main>
                        <CustomFileUploader/>
                        <button onClick={signOut}>Sign out</button>
                    </main>
                );
            }}
        </Authenticator>
    );
}

export default App
