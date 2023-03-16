import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const HomePage = () => {

   
    const {user, setUser} = useContext(UserContext);
    console.log(user);
    return (
          <>
              <h1>Home page <small> {user?.name}</small> </h1>
              <hr />
              <pre>
                
              { JSON.stringify( user, null, 3)}
              </pre>

              <button 
                className="btn btn-primary"
                 onClick={ () => setUser({id:123, name: 'juanna', email: 'emmam@mas'}) }   
                >
                Establecer Usuario
              </button>
          </>
    )
  }
  