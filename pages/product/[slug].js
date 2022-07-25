import React, {useState} from 'react'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { client, urlFor } from '../../lib/client'
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';

const ProductDetails = ({ product, products }) => {
    const { image, name, details, price } = product;
    const [index, setIndex] = useState(0);

    return (
        <div>
            <div className='product-detail-container'>
                <div>
                    <div className='image-container'>
                        <img src={urlFor(image && image[index])} className='product-detail-image'/>
                    </div>
                    <div className='small-images-container'>
                        {image?.map((item, i) => (
                            <img 
                                src={urlFor(item)}
                                className={i === index ? 
                                    'small-image selected-image' :
                                    'small-image'}
                                onMouseEnter={() => setIndex(i)}
                            />
                        ))}
                    </div>
                </div>
                <div className='product-detail-desc'>
                    <h1>{name}</h1>
                    <div className='reviews'>
                        
                        <div>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                    </div> 
                    <h4>Detail: </h4>
                    <p>{details}</p>  
                    <h4>Harga: </h4>
                    <p className='price'>Rp. {price}</p> 
                </div>
            </div>
            <div className='maylike-products-wrapper'>
                <h2>Kamu Mungkin Juga Suka</h2>
                <div className='marquee'>
                    <div className='maylike-products-container track'>
                        {products.map(item => (
                            <Product key={item._id} product={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }`;

    const products = await client.fetch(query);

    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug }}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]';
  
    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);
  
    return {
      props: { products, product }
    }
  }

export default ProductDetails