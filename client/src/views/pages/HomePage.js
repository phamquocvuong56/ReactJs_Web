import React, {useState, useEffect}from 'react'
import Carousel from '../../components/carousel/CarouselCustom'
import CardContainer from '../../components/card/CardContainer'
import NewsCardContainer from '../../components/card/NewsCardContainer'
import axios from 'axios'

export default function HomePage() {
    // const [stateProduct, setStateProduct]= useState()
    // const getProduct=async ()=>{ 
    //     try {
    //   const response= axios.get("http://localhost:4000/api/products")
    //       setStateProduct({response.data.products})
    //   console.log(response.data)
    //     } catch (error) {
    //       console.log(error)
    //     }
    //   }
    //   useEffect(()=> {
    //     getProduct()
    //   }, [])
      
    //   console.log(stateProduct)
    return (
        <div>
            <div className="carousel_home">
                <Carousel/>
            </div>
            <div className="product_hot">
                <CardContainer title="SẢN PHẨM BÁN CHẠY"/>
            </div>
            <div className="product_new">
                <CardContainer title="HÀNG MỚI VỀ"/>
            </div>
            <div className="news">
                <NewsCardContainer/>
            </div>
        </div>
    )
}
