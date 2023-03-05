import React from 'react'
import { useParams } from 'react-router-dom'
import image1 from "../assets/image1.jpeg"
import image2 from "../assets/image2.jpeg"
import image3 from "../assets/image3.jpeg"
import image4 from "../assets/image4.jpeg"
import image5 from "../assets/image5.jpeg"
import { NewsData } from '../assets/Newsdata'
import SEO from './SEO'

const images = [image1, image2, image3, image4, image5]


const NewsMainData = () => {
  const { id } = useParams()
  console.log(id);
  const Id = parseInt(id)
  //console.log(Id);
  if (id){
    return (
      <div>
        <SEO title={NewsData[Id].heading}
          description={NewsData[Id].description}
          name=" bit coins"
          type="article" />
        <div className="card black p-5">
          <div className="card-header text-center">
            <h2><b> {NewsData[Id].heading}</b></h2>
          </div>
          <img src={images[Id]} height="300" weight="100%" className="card-img-top " alt="..." />
          <div className="card-body">
            <h4 className="card-title">{NewsData[Id].description}</h4>
            <p>{NewsData[Id].content}</p>
          </div>
          <div className="card-footer text-muted">
            2 days ago
          </div>
        </div>
      </div>
    )
  }else{
    return <></>
  }
}

export default NewsMainData