import React from 'react'
import ProductListing from './ProductListing'
import CategoryBanner from './CategoryBanner'

const Categrory = () => {
  return (
    <div>
      <CategoryBanner
        title="Designer Wallpapers"
        subtitle="Transform your walls with timeless designs"
        bgImage="/images/banners/wallpaper.jpg"
      />
      <ProductListing />
    </div>
  )
}

export default Categrory