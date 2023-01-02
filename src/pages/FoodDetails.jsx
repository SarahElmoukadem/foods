import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import products from '../assets/fake-data/products'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import ProductCard from '../components/UI/product-card/ProductCard'
import { cartActions } from '../store/shopping-cart/cartSlice'
import '../styles/product-details.css'

const FoodDetails = () => {

  const { id } = useParams()
  const dispatch = useDispatch()
  const product = products.find(product => product.id === id)
  const [tab, setTab] = useState('desc')
  const [enteredName, setEnteredName] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('')
  const [reviewMsg, setReviewMsg] = useState('')
  const [previewImg, setPreviewImg] = useState(product.image01)
  const { title, price, category, desc, image01 } = product
  const relatedProuduct = products.filter(item => item.category === category)

  const addItem = () => {
    dispatch(cartActions.addItem({
      id,
      title,
      price,
      image01
    }))
  }

  const submitHandler = e => {
    e.preventDefault()
    console.log(enteredName, enteredEmail, reviewMsg);
  }
  useEffect(() => {
    setPreviewImg(product.image01)
  }, [product])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [product])
  return (
    <Helmet title='proudct-details'>
      <CommonSection title={title} />

      <section>
        <Container>
          <Row>
            <Col lg='2' md='2'>
              <div className="product__images">
                <div className="img__item mb-2"
                  onClick={() => setPreviewImg(product.image01)}>
                  <img src={product.image01} alt="" className='w-50' />
                </div>

                <div className="img__item mb-2"
                  onClick={() => setPreviewImg(product.image02)}>

                  <img src={product.image02} alt="" className='w-50' />
                </div>

                <div className="img__item mb-2"
                  onClick={() => setPreviewImg(product.image03)}>

                  <img src={product.image03} alt="" className='w-50' />
                </div>

              </div>
            </Col>

            <Col lg='4' md='4'>
              <div className="product__main-img">
                <img src={previewImg} alt="" className='w-100' />
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className="single__product-content">
                <h2 className="product__title mb-3">
                  Pizza with mushroom
                </h2>
                <p className='product__price'>price: <span>
                  ${price}
                </span>
                </p>
                <p>
                  Category:
                  <span>
                    {category}
                  </span>
                </p>
                <button onClick={addItem} className=' addToCart__btn'>
                  Add to Cart
                </button>
              </div>
            </Col>

            <Col lg='12'>
              <div className='tabs d-flex align-items-center gap-5 py-2'>
                <h6 className={`${tab === 'desc' ? 'tab__active' : ''}`}
                  onClick={() => setTab('desc')}
                >
                  Description
                </h6>
                <h6 onClick={() => setTab('rev')}
                  className={`${tab === 'rev' ? 'tab__active' : ''}`}
                >
                  Review
                </h6>
              </div>

              {
                tab === 'desc' ? <div className='tab__content'>
                  <p>
                    {desc}
                  </p>
                </div> :

                  <div className='tab__form'>

                    <div className='review pt-5'>
                      <p className='user__name mb-0'>
                        Sarah Ahmed
                      </p>

                      <p className='user__email'>
                        sarahelmoukadem.se@gmail.com
                      </p>

                      <p className='feedback__text'>
                        Great Product
                      </p>

                    </div>

                    <div className='review'>
                      <p className='user__name mb-0'>
                        Sarah Ahmed
                      </p>

                      <p className='user__email'>
                        sarahelmoukadem.se@gmail.com
                      </p>

                      <p className='feedback__text'>
                        Great Product
                      </p>

                    </div>


                    <div className='review'>
                      <p className='user__name mb-0'>
                        Sarah Ahmed
                      </p>

                      <p className='user__email'>
                        sarahelmoukadem.se@gmail.com
                      </p>

                      <p className='feedback__text'>
                        Great Product
                      </p>

                    </div>

                    <form className='form' onSubmit={submitHandler}>

                      <div className='form__group'>
                        <input type="text" required
                          placeholder="Enter your name"
                          onChange={e => setEnteredName(e.target.value)}
                        />
                      </div>

                      <div className='form__group'>
                        <input type="text" required
                          placeholder="Enter your Email"
                          onChange={e => setEnteredEmail(e.target.value)}
                        />
                      </div>

                      <div className='form__group'>
                        <textarea
                          required
                          rows={5}
                          type="text"
                          placeholder="Write your review"
                          onChange={e => setReviewMsg(e.target.value)}
                        />
                      </div>

                      <button
                        type='submit'
                        className='addToCart__btn'>
                        Submit
                      </button>
                    </form>
                  </div>
              }



            </Col>

            <Col lg='12' className='mb-5'>
              <h2 className='related__product-title'>
                You might also like
              </h2>
            </Col>

            {
              relatedProuduct.map(item => (
                <Col lg='3' md='4' sm='6' xs='6'
                  className='mb-4'
                  key={item.id}>
                  <ProductCard item={item} />
                </Col>
              ))
            }

          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default FoodDetails