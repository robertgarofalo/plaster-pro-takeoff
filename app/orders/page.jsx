'use client'

import { useState, useEffect } from "react"

const page = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
      const fetchOrders = async () => {
        const response = await fetch('/api/orders')
        const data = await response.json()
    
        setOrders(data)
      }
    
      fetchOrders()
    },[])
    
      return (
        <div>
          <h3>Orders --</h3>
          {orders.map((item) => (
            <p key={item._id}>the order -- {item.order}</p>
          ))}
        </div>
      )
}
export default page