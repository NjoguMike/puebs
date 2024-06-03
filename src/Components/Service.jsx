import React from 'react'
import { useParams } from "react-router-dom";
import data1 from "../PageData.json"
import Contacts from '../Components/Contacts';

function Service() {

  const { serviceId } = useParams();

  const parameter = serviceId === undefined ? "services" : serviceId
  const service = data1.filter((serv) => Object.keys(serv)[0] === parameter)[0]

  const heading = service[parameter].Jumbotron.Heading
  const heading_paragraph = service[parameter].Jumbotron.Paragraph
  // const section_images = service[parameter].Section_A.Images
  // const section_info = service[parameter].Section_A

  const data = data1.filter((serv) => serv[parameter])
  console.log(data)

  return (
    <div className='services_container'>
      <div>
        <h1>{heading}</h1>
        <p>{heading_paragraph}</p>
      </div>
      <div>
        <img src="" alt=''/>
      </div>
      <Contacts/>
    </div>
  )
}

export default Service
