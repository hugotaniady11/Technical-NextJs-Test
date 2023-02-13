import { Inter } from '@next/font/google'
import axios from 'axios'
import ProductList from '@/components/ProductList'
import React from 'react'
import ProductChart from '@/components/ProductChart'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ products }) {

  return (
    <>
    <div>
      <h3 className='mb-4'>Product Page Admin Dashboard</h3>
      <ProductList products={products}/>
      <ProductChart/>
    </div>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await axios.get(`https://dummyjson.com/products/`)
  const products = await res.data.products;

  return {
    props: {
      products
    }
  }
}
