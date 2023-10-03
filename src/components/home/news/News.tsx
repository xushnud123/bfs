import React from 'react'
import Slider from 'react-slick'
import TopTitle from '../../global/top-title/top-title'

import cls from './News.module.scss'

import productImage from '../../../../public/images/products/2.webp'

const News = ({}) => {
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
        title='News'
        description={`Sunflower oil “Bo'ston Food Company” is a natural oil of the highest
        quality, produced only from environmentally friendly sunflower seeds.
        "Bo'ston Food Company" – great for frying, dressing and canning!`}
      />
      <div className={cls.cards} slot='actions'>
        <Slider {...settings}>
          <div className={cls.container}>
            <div className={cls.card}>
              <div className={cls.head}>
                <img
                  src={productImage.src}
                  alt="Sunflower oil “Bo'ston Food Company” is a."
                  className={cls['product__image']}
                />
              </div>
              <div className={cls.body}>
                <div className={cls['body-title']}>
                  <h4 className={cls.name}>
                    Lorem ipsum dolor sit amet consectetur. Ut id diam gravida
                    varius.
                  </h4>
                  <p className={cls.info}>
                    Sunflower oil “Bo'ston Food Company” is a.
                  </p>
                </div>
                <button className={cls.btn}>Read More</button>
              </div>
            </div>
          </div>
          <div className={cls.container}>
            <div className={cls.card}>
              <div className={cls.head}>
                <img
                  src={productImage.src}
                  alt="Sunflower oil “Bo'ston Food Company” is a."
                  className={cls['product__image']}
                />
              </div>
              <div className={cls.body}>
                <div className={cls['body-title']}>
                  <h4 className={cls.name}>
                    Lorem ipsum dolor sit amet consectetur
                  </h4>
                  <p className={cls.info}>
                    Sunflower oil “Bo'ston Food Company” is a.
                  </p>
                </div>
                <button className={cls.btn}>Read More</button>
              </div>
            </div>
          </div>
          <div className={cls.container}>
            <div className={cls.card}>
              <div className={cls.head}>
                <img
                  src={productImage.src}
                  alt="Sunflower oil “Bo'ston Food Company” is a."
                  className={cls['product__image']}
                />
              </div>
              <div className={cls.body}>
                <div className={cls['body-title']}>
                  <h4 className={cls.name}>
                    Lorem ipsum dolor sit amet consectetur. Ut id diam gravida
                    varius.
                  </h4>
                  <p className={cls.info}>
                    Sunflower oil “Bo'ston Food Company” is a.
                  </p>
                </div>
                <button className={cls.btn}>Read More</button>
              </div>
            </div>
          </div>
          <div className={cls.container}>
            <div className={cls.card}>
              <div className={cls.head}>
                <img
                  src={productImage.src}
                  alt="Sunflower oil “Bo'ston Food Company” is a."
                  className={cls['product__image']}
                />
              </div>
              <div className={cls.body}>
                <div className={cls['body-title']}>
                  <h4 className={cls.name}>
                    Lorem ipsum dolor sit amet consectetur
                  </h4>
                  <p className={cls.info}>
                    Sunflower oil “Bo'ston Food Company” is a.
                  </p>
                </div>
                <button className={cls.btn}>Read More</button>
              </div>
            </div>
          </div>
          <div className={cls.container}>
            <div className={cls.card}>
              <div className={cls.head}>
                <img
                  src={productImage.src}
                  alt="Sunflower oil “Bo'ston Food Company” is a."
                  className={cls['product__image']}
                />
              </div>
              <div className={cls.body}>
                <div className={cls['body-title']}>
                  <h4 className={cls.name}>
                    Lorem ipsum dolor sit amet consectetur
                  </h4>
                  <p className={cls.info}>
                    Sunflower oil “Bo'ston Food Company” is a.
                  </p>
                </div>
                <button className={cls.btn}>Read More</button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default News
