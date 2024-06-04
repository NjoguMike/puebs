import React from 'react'
import { useParams } from "react-router-dom";
import data1 from "../PageData.json"
import Contacts from '../Components/Contacts';

function Service() {

  const { serviceId } = useParams();

  const parameter = serviceId === undefined ? "services" : serviceId
  const data = data1.filter((serv) => serv[parameter])[0][parameter]
  const content = data.Section_A

  const heading = data.Jumbotron.Heading
  const heading_paragraph = data.Jumbotron.Paragraph
  // const section_images = data.Section_A.Images
  const section_info = content.map((data) => 
    {
    const read_data = Object.values(data)[0]

      return <div className='service_content'>
        <h2>{read_data.Heading_2}</h2>
        <div>
          <img src={read_data.Images} alt=''/>
          <p>{read_data.Paragraph}</p>
        </div>
      </div>
      }
)

  // console.log(section_info)

  return (
    <div className='services_container'>
      <div>
        <h1>{heading}</h1>
        <p>{heading_paragraph}</p>
      </div>
      {section_info}
      <Contacts/>
    </div>
  )
}

export default Service