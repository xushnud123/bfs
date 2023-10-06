import React, { useState, type FC, useEffect } from 'react'
import ReactPaginate from 'react-paginate'

import cls from './Product.module.scss'

interface ProductProps {}

import productImage from '../../../../public/images/products/1.webp'
import nextArrow from '../../../../public/images/icons/arrow.svg'

const Product: FC<ProductProps> = ({}) => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

  const pageCount = Math.ceil(items.length / 6)

  // * ----
  const urlSearchParams = new URLSearchParams(window.location.search)
  const getParam = urlSearchParams.get('page')

  console.log(getParam)

  const pushQuery = (count: number) => {
    urlSearchParams.set('page', `${count}`)
    const newRelativePathQuery =
      window.location.pathname + '?' + urlSearchParams.toString()
    history.pushState(null, '', newRelativePathQuery)
  }

  // * ----
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = event.selected

    pushQuery(newOffset + 1)
  }

  useEffect(() => {
    if (!getParam) {
      pushQuery(1)
    }
  }, [])
  return (
    <div className={cls.wrapper}>
      <div className={cls['wrap-container']}>
        {items
          .slice(((Number(getParam) || 1) - 1) * 6, Number(getParam) * 6)
          .map((item) => (
            <div key={item} className={cls.container}>
              <div className={cls.card}>
                <img
                  src={productImage.src}
                  alt="Sunflower oil “Bo'ston Food Company” is a."
                  className={cls['product__image']}
                  width={300}
                  height={320}
                />
                <>
                  <h4 className={cls.name}>Product Name {item}</h4>
                  <p className={cls.info}>
                    Sunflower oil “Bo'ston Food Company” is a.
                  </p>
                </>
                <button className={cls.btn}>Read More</button>
              </div>
            </div>
          ))}
      </div>
      <div className={cls.paginate}>
        <ReactPaginate
          breakLabel='...'
          nextLabel={
            <img
              src={nextArrow.src}
              alt='bfs next arrow'
              width={10}
              height={10}
            />
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          initialPage={Number(getParam) - 1}
          activeClassName={cls['custom-paginate']}
          previousLabel={
            <img
              src={nextArrow.src}
              alt='bfs next arrow'
              width={10}
              height={10}
            />
          }
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  )
}

export default Product
