import React from 'react'
import { useParams } from "react-router-dom";
import ServiceFooter from '../Components/services_footer'
import data1 from "../PageData.json"

function Services() {

  const { serviceId } = useParams();

  const parameter = serviceId === undefined ? "services" : serviceId
  const service = data1.filter((serv) => Object.keys(serv)[0] === parameter)[0]

  const heading = service[parameter].Jumbotron.Heading
  const heading_paragraph = service[parameter].Jumbotron.Paragraph
  // const section_images = service[parameter].Section_A.Images
  // const section_info = service[parameter].Section_A

  console.log(heading)
  return (
    <div>
      <div>
        <h1>{heading}</h1>
        <p>{heading_paragraph}</p>
      </div>
      <div>
        <img src="" alt=''/>
      </div>
      <ServiceFooter />
    </div>
  )
}

export default Services