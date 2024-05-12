import React from 'react'
import { useParams } from "react-router-dom";
import ServiceFooter from '../Components/services_footer'

function Services({data}) {

  console.log(data)
  const { serviceId } = useParams();

  // const service = service.filter((prod) => prod.id === parseInt(serviceId))[0];


  return (
    <div>
      
      <ServiceFooter />
    </div>
  )
}

export default Services