import React from 'react'

function App() {
  return (
    <main className='py-10 px-5 text-Dark-Grayish-Magenta'>
      <section className='text-center'>
        <h1 className='text-4xl text-Very-Dark-Magenta font-[700] mb-5'>10,000+ of our users love our products.</h1>
        <p className='font-[500]'> We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
      </section>
      <section className='text-center py-10'>
        <div className='p-3 bg-Light-Grayish-Magenta mb-5 rounded-lg'>
          <div className='flex justify-center gap-2 mb-3'>
            <img src="./src/assets/images/icon-star.svg" alt="" />
            <img src="./src/assets/images/icon-star.svg" alt="" />
            <img src="./src/assets/images/icon-star.svg" alt="" />
            <img src="./src/assets/images/icon-star.svg" alt="" />
            <img src="./src/assets/images/icon-star.svg" alt="" />
          </div>
          <p className='text-Very-Dark-Magenta font-[700]'>Rated 5 Stars in Reviews</p>
        </div>
        <div className='p-3 bg-Light-Grayish-Magenta mb-5 rounded-lg'>
          <div className='flex justify-center gap-2 mb-3'>
            <img src="./src/assets/images/icon-star.svg" alt="" />
            <img src="./src/assets/images/icon-star.svg" alt="" />
            <img src="./src/assets/images/icon-star.svg" alt="" />
            <img src="./src/assets/images/icon-star.svg" alt="" />
            <img src="./src/assets/images/icon-star.svg" alt="" />
          </div>
          <p className='text-Very-Dark-Magenta font-[700]'>Rated 5 Stars in Report Guru</p>
        </div>
        <div className='p-3 bg-Light-Grayish-Magenta mb-5 rounded-lg'>
          <div className='flex justify-center gap-2 mb-3'>
            <img src="./src/assets/images/icon-star.svg" alt="" />
            <img src="./src/assets/images/icon-star.svg" alt="" />
            <img src="./src/assets/images/icon-star.svg" alt="" />
            <img src="./src/assets/images/icon-star.svg" alt="" />
            <img src="./src/assets/images/icon-star.svg" alt="" />
          </div>
          <p className='text-Very-Dark-Magenta font-[700]'>Rated 5 Stars in BestTech</p>
        </div>
      </section>
      <section className='text-White'>
        <div className='bg-Very-Dark-Magenta p-10 mb-5 rounded-lg'>
          <div className='flex gap-5 mb-5'>
            <img className='rounded-full w-[3rem]' src="./src/assets/images/image-colton.jpg" alt="Colton Smith" />
            <div>
              <p className='font-[700]'>Colton Smith</p>
              <p className='text-Soft-Pink'>Verified Buyer</p>
            </div>
          </div>
          <p>"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"</p>
        </div>
        <div className='bg-Very-Dark-Magenta p-10 mb-5 rounded-lg'>
          <div className='flex gap-5 mb-5'>
            <img className='rounded-full w-[3rem]' src="./src/assets/images/image-irene.jpg" alt="Irene Roberts" />
            <div>
              <p className='font-[700]'>Irene Roberts </p>
              <p className='text-Soft-Pink'>Verified Buyer</p>
            </div>
          </div>
          <p>"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."</p>
        </div>
        <div className='bg-Very-Dark-Magenta p-10 mb-5 rounded-lg'>
          <div className='flex gap-5 mb-5'>
            <img className='rounded-full w-[3rem]' src="./src/assets/images/image-anne.jpg" alt="Anne Wallace" />
            <div>
              <p className='font-[700]'>Anne Wallace</p>
              <p className='text-Soft-Pink'>Verified Buyer</p>
            </div>
          </div>
          <p>"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"</p>
        </div>
      </section>
    </main>
  )
}

export default App
