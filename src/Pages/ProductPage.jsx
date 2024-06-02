import React, { useContext } from 'react'
import {useParams} from 'react-router-dom'

import {ShopContext} from '../Context/ShopContex'

import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay'
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox'
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts'

export const ProductPage = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams()
  const product = all_product.find((el) => el.id === Number(productId))
  return (
    <div className='productpage'>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts />
    </div>
  )
}
