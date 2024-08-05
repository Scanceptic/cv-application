import '../styles/App.css'
import General from './General'
import Education from './Education'
import Work from './Work'

const App = () => {
    return (
        <>
            <h1>CV Application Builder</h1>
            <button>Edit</button>
            <div id='container'>
                <General />
                <Education />
                <Work />
            </div>
            <button>Submit</button>
        </>
    )
}

export default App