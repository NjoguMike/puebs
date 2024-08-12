import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import data1 from "../PageData.json"
import Contacts from '../Components/Contacts';
import { FaAngleDown , FaAngleUp } from  'react-icons/fa'


function Service() {
  const [ isActive, setActive] = useState(null)

  const handleActive = (index) => {
    if (isActive === index){
      setActive(null)
    }
    else{
      setActive(index)
    }
  }

  // console.log(isActive)
  const { serviceId } = useParams();

  const parameter = serviceId === undefined ? "services" : serviceId
  const data = data1.filter((serv) => serv[parameter])[0][parameter]
  const content = data.Section_A

  const heading = data.Jumbotron.Heading
  const heading_paragraph = data.Jumbotron.Paragraph
  const section_info = content.map((data, index) => 
    {
    const read_data = Object.values(data)[0]

      return <div className='service_content'>
          <img src={read_data.Images} alt=''/>
          <div onClick={()=>handleActive(index)}>
            <span className='details'>
              <h2>{read_data.Heading_2}</h2>
              <span>
              {isActive === index ? <FaAngleUp /> : <FaAngleDown />}</span>
              </span>
          </div>
          <div>
            {isActive === index && <p>{read_data.Paragraph}</p>}
          </div>

      </div>
      }
)

  return (
    <div className='services_container'>
      <div className='service_main'>
        <h1>{heading}</h1>
        <p>{heading_paragraph}</p>
      </div>
      <article className='service_container'>
        {section_info}
      </article>
      <Contacts/>
    </div>
  )
}

export default Service
