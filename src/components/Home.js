import React from 'react'
import { Link } from 'react-router-dom'
import image1 from "../assets/image1.jpeg"
import image2 from "../assets/image2.jpeg"
import image3 from "../assets/image3.jpeg"
import image4 from "../assets/image4.jpeg"
import image5 from "../assets/image5.jpeg"
import { NewsData } from '../assets/Newsdata'
import SEO from './SEO'

const images = [image1, image2, image3, image4, image5]

const Home = () => {
  return (
    <div className=" card-group row row-cols-1 row-cols-md-2 g-4 p-5 ">
      {NewsData.map((news, index) => {
        const { number, heading, description } = news
        return (
          <div key={index} className="col">
            <SEO title={heading}
            description={description}
            name=" bitcoins"
            type="article"/>
            <div className="card  h-100">
              <img src={images[index]} height="250" weight="100%" className="card-img-top " alt="..." />
              <div className="card-body">
                <h5 className="card-title">{`${number}. `}{heading}</h5>
                <p className="card-text">{description}</p>
              </div>
              <div className="card-footer">
                <Link className="btn btn-primary" to={`${index}`} type="button">VIEW MORE</Link>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Home    