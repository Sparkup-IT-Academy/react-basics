import Dashboard from "./Dashboard"
import LoginForm from "./LoginForm"

export default function() {
    const status = 4;

    function returnJsx() {
        switch(status) {
            case 0: 
                return <Dashboard />;
            case 1:
                return <LoginForm />
            case 2: 
                return <div>Everything is bad</div>
            default:
                return <div>Status not recognized</div>
        }
    }

    const isLoggedIn = true;
    return (
        <>
            { isLoggedIn ? <Dashboard/> : <LoginForm/> }

            { returnJsx() }
        </>
    )
}