import React,{useEffect} from 'react';
import useAuth from '../../../Hooks/useAuth';

const MyBooking = () => {
    const {user} = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/myOrder/${user?.email}`)
        .then((res)=>res.json())
        .then((data)=>console.log(data));
        
    }, [user?.email])
    return (
        <div className="text-center">
            <h3>All Order</h3>
        </div>
    );
};

export default MyBooking;