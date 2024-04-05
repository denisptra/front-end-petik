import React from 'react'

const DetailProduct = () => {
  return (
    <section className='section mt-5'>
      <div class="container">
        <div class="columns">
          <div class="columns is-half">
            <figure class="image is4by3">
              <img src="https://picsum.photos/500/400" alt="product" />
            </figure>
          </div>
          <div class="column">
            <div class="content ml-5 has-text-dark">
              <div class="has-text-dark title is-4">Product Name</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat non quo soluta quod rerum, iusto doloremque atque magni laudantium aperiam quas est molestiae nisi perspiciatis quos nobis, alias optio maiores?
              </p>
              <p >
                <strong className='has-text-dark'>Price :</strong> Rp 1.000.000,-
              </p>
              <p>Stok</p>
              <div class="field">
                <button className='button is-primary is-fullwidth has-text-white mb-3'>Add to cart</button>
                <button class="button is-primary is-outlined is-fullwidth">Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default DetailProduct;
