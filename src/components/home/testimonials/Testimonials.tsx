import React from 'react'

import cls from './Testimonials.module.scss'
import Slider from 'react-slick'

import productImage from '../../../../public/images/products/1.webp'
import TopTitle from '../../global/top-title/top-title'

const Testimonials = ({}) => {
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
    ]
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
          <div className={cls.container}>
            <div className={cls.card}>
              <h3 className={cls.description}>
                Sunflower oil “Bo'ston Food Company” is a natural oil of the
                highest quality, produced only from environmentally friendly
                sunflower seeds. "Bo'ston Food Company" – great for frying,
                dressing and canning!
              </h3>
              <div className={cls.row}>
                <h4 className={cls.name}>Xurshid Istamov</h4>
                <p className={cls.info}>UI/UX Designer</p>
              </div>
            </div>
          </div>
          <div className={cls.container}>
            <div className={cls.card}>
              <h3 className={cls.description}>
                Sunflower oil “Bo'ston Food Company” is a natural oil of the
                highest quality, produced only from environmentally friendly
              </h3>
              <div className={cls.row}>
                <h4 className={cls.name}>Xurshid Istamov</h4>
                <p className={cls.info}>UI/UX Designer</p>
              </div>
            </div>
          </div>
          <div className={cls.container}>
            <div className={cls.card}>
              <h3 className={cls.description}>
                Sunflower oil “Bo'ston Food Company” is a natural oil of the
                highest quality, produced only from environmentally friendly
                sunflower seeds. "Bo'ston Food Company" – great for frying,
                dressing and canning!
              </h3>
              <div className={cls.row}>
                <h4 className={cls.name}>Xurshid Istamov</h4>
                <p className={cls.info}>UI/UX Designer</p>
              </div>
            </div>
          </div>
          <div className={cls.container}>
            <div className={cls.card}>
              <h3 className={cls.description}>
                Sunflower oil “Bo'ston Food Company” is a natural oil of the
                highest quality, produced only from environmentally friendly
                sunflower seeds. "Bo'ston Food Company" – great for frying,
                dressing and canning!
              </h3>
              <div className={cls.row}>
                <h4 className={cls.name}>Xurshid Istamov</h4>
                <p className={cls.info}>UI/UX Designer</p>
              </div>
            </div>
          </div>
          <div className={cls.container}>
            <div className={cls.card}>
              <h3 className={cls.description}>
                Sunflower oil “Bo'ston Food Company” is a natural oil of the
                highest quality, produced only from environmentally friendly
                sunflower seeds. "Bo'ston Food Company" – great for frying,
                dressing and canning!
              </h3>
              <div className={cls.row}>
                <h4 className={cls.name}>Xurshid Istamov</h4>
                <p className={cls.info}>UI/UX Designer</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Testimonials
