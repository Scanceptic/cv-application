import '../styles/App.css'
import General from './General'
import Education from './Education'
import Work from './Work'

// Create Edit Button

// Create Submit Button


const App = () => {
    return (
        <>
            <h1>CV Application Builder</h1>
            {/* When edit is clicked, set editing to true */}
            <button>Edit</button>
            {/* if editing === false, disable input editing */}
            <div id='container'>
                <General />
                <Education />
                <Work />
            </div>
            {/* When submit is clicked, set editing to false */}
            <button>Submit</button>
        </>
    )
}

export default App