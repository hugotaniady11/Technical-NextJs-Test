import React from 'react'
import Link from 'next/link'

const ButtonCart = ({ id }) => {
  return (
    <Link href="/carts/[id]" as={`/carts/${id}`}>

        <button>More</button>

    </Link>
  )
}

export default ButtonCart