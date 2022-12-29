import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'

import ReactPaginate from 'react-paginate'
import products from '../assets/fake-data/products'
import ProductCard from '../components/UI/product-card/ProductCard'
import '../styles/all-foods.css'
import '../styles/pagination.css'

const AllFoods = () => {

  const [searchItem, setSearchItem] = useState('')
  const [pageNumber, setPageNumber] = useState(0)
  const searchedProduct = products.filter(item => {
    if (searchItem.value === '')
      return item
    if (item.title.toLowerCase().includes(searchItem.toLowerCase()))
      return item
  })
  const productPerPage = 8
  const visitedPage = pageNumber * productPerPage
  const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage)
  const pageCount = Math.ceil(searchedProduct.length / productPerPage)
  const changePage = ({selected}) => {
    setPageNumber(selected)
  }

  return (
    <Helmet title='All-Foods'>
      <CommonSection title='All Foods' />

      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='6' xs='12'>
              <div className="search__widget d-flex align-items-center justify-content-between w-100">
                <input type='text' placeholder="I'm looking for...." value={searchItem}
                  onChange={e => setSearchItem(e.target.value)}
                />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>

            <Col lg='6' md='6' sm='6' xs='12' className="mb-5">
              <div className="sorting__widget text-end">
                <select className='w-50'>
                  <option >Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            {
              displayPage?.map(item => (
                  <Col lg='3' md='4' sm='6' xs='12' key={item.id}
                    className='mb-4'
                  >

                    <ProductCard item={item} />
                  </Col>
                )
                )
            }

            <div>
              <ReactPaginate 
              pageCount={pageCount}
              onPageChange={changePage}
              previousLabel='Prev'
              nextLabel='Next'
              containerClassName='paginationBttns'

              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default AllFoods