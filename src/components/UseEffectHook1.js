import React, { useState, useEffect } from 'react'

function UseEffectHook1() {
    // Define state variables
    const [user, setUser] = useState(null); // Stores the user data
    const [loading, setLoading] = useState(true); // Indicates if data is still loading
    const [error, setError] = useState(null); // Stores any error that occurs

    // useEffect runs after the component mounts
    useEffect(() => {
        // Define an async function to fetch user data
        const fetchUserData = async () => {
            try {
                // Fetch user data from the API
                const response = await fetch('https://jsonplaceholder.typicode.com/users/4');
                
                // Check if the response is not OK (status code outside 200-299)
                if (!response.ok) {
                    throw new Error("Failed to fetch user data");
                }
                
                // Parse the response data as JSON
                const data = await response.json();
                
                // Update the state with the fetched user data
                setUser(data);
            } catch (err) {
                // Update the error state if an error occurs
                setError(err.message);
            } finally {
                // Set loading to false after data fetching (whether successful or not)
                setLoading(false);
            }
        };

        // Call the async function
        fetchUserData();
        
    }, []); // Empty dependency array means this useEffect runs only once after the initial render

    // Conditional rendering based on the loading and error state
    if (loading) {
        // Display loading message while data is being fetched
        return <p>Loading user data...</p>;
    }

    if (error) {
        // Display error message if there was an error fetching data
        return <p>Error: {error}</p>;
    }

    // Render the user data once loading is complete and there are no errors
    return (
        <div>
            <h1>UseEffect Hook 1 Example With Fetching Data from API server</h1>
            <br />
            <div>
                <h2>Name: {user.name}</h2>
                <h2>Email: {user.email}</h2>
                <h2>Phone: {user.phone}</h2>
            </div>
        </div>
    );
}

export default UseEffectHook1;
