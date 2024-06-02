import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (144)
            </div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odio praesentium ea dicta magni voluptatem, hic ipsam doloribus excepturi laborum saepe exercitationem at officia iusto, laboriosam consequuntur nostrum numquam nobis?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque facilis, quod cum magni quo repudiandae vel eius similique numquam temporibus.</p>
        </div>
    </div>
  )
}
