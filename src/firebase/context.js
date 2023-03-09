
import React, { createContext } from 'react'
import {db} from '../firebase/firebase'
import 'firebase/database';
import { useDispatch } from 'react-redux';
import { startSetExpense } from "../components/actions/expenses";

// we create a React Context, for this to be accessible
// from a component later
const FirebaseContext = createContext(null)
export { FirebaseContext }

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }) => {
    let firebase = {
        app: null,
        database: null
    }

    const dispatch = useDispatch();

    const getExpenses = (expenses)=>{

            dispatch(startSetExpense(expenses));
        }
    
    // check if firebase app has been initialized previously
    // if not, initialize with the config we saved earlier
    if (!firebase.app?.length) {
        firebase = {
            app: db,
            database:db,

            api: {
                getExpenses
            }
        }

    // function to query Todos from the database and
    // fire a Redux action to update the items in real-time

    return (
        <FirebaseContext.Provider value={firebase}>
            {children}
        </FirebaseContext.Provider>
    )
}
}