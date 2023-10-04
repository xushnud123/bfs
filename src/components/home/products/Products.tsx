import React, { useState } from 'react'

import cls from './Products.module.scss'
import Slider from 'react-slick'

import productImage from '../../../../public/images/products/1.webp'
import TopTitle from '../../global/top-title/top-title'

const Products = ({}) => {
  const [activeSlide, setActiveSlide] = useState(0)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    arrows: false,
    beforeChange: (_: any, next: React.SetStateAction<number>) =>
      setActiveSlide(next)
  }

  return (
    <div className={cls.wrapper}>
      <TopTitle
        title='Our Products'
        description={`Sunflower oil “Bo'ston Food Company” is a natural oil of the highest
        quality, produced only from environmentally friendly sunflower seeds.
        "Bo'ston Food Company" – great for frying, dressing and canning!`}
      />
      <div className={cls.cards} slot='actions'>
        <Slider {...settings}>
          <div
            className={cls.container}
            aria-hidden={activeSlide !== 1 ? true : false}
          >
            <div className={cls.card}>
              <img
                src={productImage.src}
                alt="Sunflower oil “Bo'ston Food Company” is a."
                className={cls['product__image']}
                width={300}
                height={320}
              />
              <>
                <h4 className={cls.name}>Product Name</h4>
                <p className={cls.info}>
                  Sunflower oil “Bo'ston Food Company” is a.
                </p>
              </>
              <button className={cls.btn}>Read More</button>
            </div>
          </div>
          <div
            className={cls.container}
            aria-hidden={activeSlide !== 2 ? true : false}
          >
            <div className={cls.card}>
              <img
                src={productImage.src}
                alt="Sunflower oil “Bo'ston Food Company” is a."
                className={cls['product__image']}
                width={300}
                height={320}
              />
              <>
                <h4 className={cls.name}>Product Name</h4>
                <h5 className={cls.info}>
                  Sunflower oil “Bo'ston Food Company” is a.
                </h5>
              </>
              <button className={cls.btn}>Read More</button>
            </div>
          </div>
          <div
            className={cls.container}
            aria-hidden={activeSlide !== 3 ? true : false}
          >
            <div className={cls.card}>
              <img
                src={productImage.src}
                alt="Sunflower oil “Bo'ston Food Company” is a."
                className={cls['product__image']}
                width={300}
                height={320}
              />
              <>
                <h4 className={cls.name}>Product Name</h4>
                <p className={cls.info}>
                  Sunflower oil “Bo'ston Food Company” is a.
                </p>
              </>
              <button className={cls.btn}>Read More</button>
            </div>
          </div>
          <div
            className={cls.container}
            aria-hidden={activeSlide !== 4 ? true : false}
          >
            <div className={cls.card}>
              <img
                src={productImage.src}
                alt="Sunflower oil “Bo'ston Food Company” is a."
                className={cls['product__image']}
                width={300}
                height={320}
              />
              <>
                <h4 className={cls.name}>Product Name</h4>
                <p className={cls.info}>
                  Sunflower oil “Bo'ston Food Company” is a.
                </p>
              </>
              <button className={cls.btn}>Read More</button>
            </div>
          </div>
          <div
            className={cls.container}
            aria-hidden={activeSlide !== 5 ? true : false}
          >
            <div className={cls.card}>
              <img
                src={productImage.src}
                alt="Sunflower oil “Bo'ston Food Company” is a."
                className={cls['product__image']}
                width={300}
                height={320}
              />
              <>
                <h4 className={cls.name}>Product Name</h4>
                <p className={cls.info}>
                  Sunflower oil “Bo'ston Food Company” is a.
                </p>
              </>
              <button className={cls.btn}>Read More</button>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Products
