import UsersList from "./components/UsersList"

// !!!! WARNING !!!!

// BEFORE START APP WITH NPM START
// RUN THE COMMAND: `npm run start:server`
// to run our json-server 

function App() {
    return <div className="container mx-auto">
        <UsersList />
    </div>
}

export default App