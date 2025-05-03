import React, { useEffect, useState } from 'react';
const api = import.meta.env.VITE_API;

const MyTrack = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(
          `${api}/order/get-order?access_token=6506e8bd6ec24be5de357927`
        );
        const data = await response.json();
        
        console.log(data); 

        if (response.ok) {
          setOrders(data.orders || []);
        } else {
          setError('Failed to fetch orders');
        }
      } catch (err) {
        setError('Network error');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

 

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="max-w-[1200px] mx-auto px-[15px]">
      <h1 className="text-xl font-semibold mb-4">My Track Orders</h1>

    </div>
  );
};

export default MyTrack;
