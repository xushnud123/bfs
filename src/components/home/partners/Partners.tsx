import React from 'react'

import cls from './Partners.module.scss'
import Slider from 'react-slick'

import TopTitle from '../../global/top-title/top-title'

import img_1 from '../../../../public/images/testimonials/1.svg'
import img_2 from '../../../../public/images/testimonials/2.svg'
import img_3 from '../../../../public/images/testimonials/3.svg'
import img_4 from '../../../../public/images/testimonials/4.svg'
import img_5 from '../../../../public/images/testimonials/5.svg'
import img_6 from '../../../../public/images/testimonials/6.svg'

const Partners = ({}) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
        title='Our Partners'
        description={`Sunflower oil “Bo'ston Food Company” is a natural oil of the highest
        quality, produced only from environmentally friendly sunflower seeds.
        "Bo'ston Food Company" – great for frying, dressing and canning!`}
      />
      <div className={cls.cards} slot='actions'>
        <Slider {...settings}>
          <div className={cls.container}>
            <div className={cls.card}>
              <img src={img_1.src} alt='bfs' />
            </div>
          </div>
          <div className={cls.container}>
            <div className={cls.card}>
              <img src={img_2.src} alt='bfs' />
            </div>
          </div>
          <div className={cls.container}>
            <div className={cls.card}>
              <img src={img_3.src} alt='bfs' />
            </div>
          </div>
          <div className={cls.container}>
            <div className={cls.card}>
              <img src={img_4.src} alt='bfs' />
            </div>
          </div>
          <div className={cls.container}>
            <div className={cls.card}>
              <img src={img_5.src} alt='bfs' />
            </div>
          </div>
          <div className={cls.container}>
            <div className={cls.card}>
              <img src={img_6.src} alt='bfs' />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Partners
