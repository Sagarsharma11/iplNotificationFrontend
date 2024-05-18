import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const TeamsUpdateComponent = () => {
    const [socket, setSocket] = useState(null);
    const [teamUpdate, setTeamUpdate] = useState(null);

    useEffect(() => {
        // Connect to the Socket.IO server
        const newSocket = io('http://localhost:8000'); // Replace with your server URL
        setSocket(newSocket);

        console.log(newSocket)
        // Clean up function to disconnect the socket when component unmounts
        return () => {
            newSocket.disconnect();
        };
    }, []);

    useEffect(() => {
        if (!socket) return;

        // Listen for 'teamUpdate' event from the server
        socket.on('teamUpdate', (data) => {
            // Update UI with the received team update
            console.log(`team Update => ${data}`)
            setTeamUpdate(data);
        });

        // Clean up function to remove the event listener when component unmounts
        return () => {
            socket.off('teamUpdate');
        };
    }, [socket]);

    return (
        <div>
            <h2>Notifications</h2>
            <h4>Team Updates</h4>
            {teamUpdate && (
                <div>
                    <h2>Team ID: {teamUpdate.teamId}</h2>
                    <p>Update: {teamUpdate.teamUpdate}</p>
                </div>
            )}
        </div>
    );
};

export default TeamsUpdateComponent;
