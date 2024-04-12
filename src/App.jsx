import React from 'react'

function App() {
  return (
    <main className='py-10 px-5 text-Dark-Grayish-Magenta sm:px-10 md:px-[4rem] sm:py-[4rem] max-w-[1440px]'>
      <section className='lg:flex lg:justify-between'>
        <div className='text-center sm:mb-5 lg:text-left lg:w-[50%] xl:pr-[12rem]'>
          <h1 className='text-4xl text-Very-Dark-Magenta font-[700] mb-5 sm:text-5xl sm:mb-10 lg:mb-5'>10,000+ of our users love our products.</h1>
          <p className='font-[500] sm:text-lg lg:text-[1rem]'> We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
        </div>
        <div className='grid grid-cols-1 text-center py-10 sm:grid-cols-3 sm:gap-3 lg:w-1/2 lg:grid-cols-1'>
          <div className='p-3 bg-Light-Grayish-Magenta mb-5 rounded-lg sm:px-3 sm:py-5 lg:flex lg:justify-center lg:mb-1 lg:items-center lg:py-2 lg:gap-10 lg:w-[400px]'>
            <div className='flex justify-center gap-2 mb-3 lg:mb-0'>
              <img src="https://raw.githubusercontent.com/RaulTindogan/social-proof-section/a73869c8c36b5331c5f9345832f617d1a5550726/src/assets/images/icon-star.svg" alt="Star Icon" />
              <img src="https://raw.githubusercontent.com/RaulTindogan/social-proof-section/a73869c8c36b5331c5f9345832f617d1a5550726/src/assets/images/icon-star.svg" alt="Star Icon" />
              <img src="https://raw.githubusercontent.com/RaulTindogan/social-proof-section/a73869c8c36b5331c5f9345832f617d1a5550726/src/assets/images/icon-star.svg" alt="Star Icon" />
              <img src="https://raw.githubusercontent.com/RaulTindogan/social-proof-section/a73869c8c36b5331c5f9345832f617d1a5550726/src/assets/images/icon-star.svg" alt="Star Icon" />
              <img src="https://raw.githubusercontent.com/RaulTindogan/social-proof-section/a73869c8c36b5331c5f9345832f617d1a5550726/src/assets/images/icon-star.svg" alt="Star Icon" />
            </div>
            <p className='text-Very-Dark-Magenta font-[700]'>Rated 5 Stars in Reviews</p>
          </div>
          <div className='p-3 bg-Light-Grayish-Magenta mb-5 rounded-lg sm:px-3 sm:py-5 lg:flex lg:justify-center lg:mb-1 lg:items-center lg:py-2 lg:gap-10 px-10 lg:ml-[10%] lg:w-[400px]'>
            <div className='flex justify-center gap-2 mb-3 lg:mb-0'>
              <img src="https://raw.githubusercontent.com/RaulTindogan/social-proof-section/a73869c8c36b5331c5f9345832f617d1a5550726/src/assets/images/icon-star.svg" alt="Star Icon" />
              <img src="https://raw.githubusercontent.com/RaulTindogan/social-proof-section/a73869c8c36b5331c5f9345832f617d1a5550726/src/assets/images/icon-star.svg" alt="Star Icon" />
              <img src="https://raw.githubusercontent.com/RaulTindogan/social-proof-section/a73869c8c36b5331c5f9345832f617d1a5550726/src/assets/images/icon-star.svg" alt="Star Icon" />
              <img src="https://raw.githubusercontent.com/RaulTindogan/social-proof-section/a73869c8c36b5331c5f9345832f617d1a5550726/src/assets/images/icon-star.svg" alt="Star Icon" />
              <img src="https://raw.githubusercontent.com/RaulTindogan/social-proof-section/a73869c8c36b5331c5f9345832f617d1a5550726/src/assets/images/icon-star.svg" alt="Star Icon" />
            </div>
            <p className='text-Very-Dark-Magenta font-[700]'>Rated 5 Stars in Report Guru</p>
          </div>
          <div className='p-3 bg-Light-Grayish-Magenta mb-5 rounded-lg sm:px-3 sm:py-5 lg:flex lg:justify-center lg:items-center lg:py-2 lg:gap-10 px-10 lg:ml-[20%] w-[400px]'>
            <div className='flex justify-center gap-2 mb-3 lg:mb-0'>
              <img src="https://raw.githubusercontent.com/RaulTindogan/social-proof-section/a73869c8c36b5331c5f9345832f617d1a5550726/src/assets/images/icon-star.svg" alt="Star Icon" />
              <img src="https://raw.githubusercontent.com/RaulTindogan/social-proof-section/a73869c8c36b5331c5f9345832f617d1a5550726/src/assets/images/icon-star.svg" alt="Star Icon" />
              <img src="https://raw.githubusercontent.com/RaulTindogan/social-proof-section/a73869c8c36b5331c5f9345832f617d1a5550726/src/assets/images/icon-star.svg" alt="Star Icon" />
              <img src="https://raw.githubusercontent.com/RaulTindogan/social-proof-section/a73869c8c36b5331c5f9345832f617d1a5550726/src/assets/images/icon-star.svg" alt="Star Icon" />
              <img src="https://raw.githubusercontent.com/RaulTindogan/social-proof-section/a73869c8c36b5331c5f9345832f617d1a5550726/src/assets/images/icon-star.svg" alt="Star Icon" />
            </div>
            <p className='text-Very-Dark-Magenta font-[700]'>Rated 5 Stars in BestTech</p>
          </div>
        </div>  
      </section>     
      <section className='text-White grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-3'>
        <div className='bg-Very-Dark-Magenta p-10 mb-5 rounded-lg'>
          <div className='flex gap-5 mb-5'>
            <img className='rounded-full w-[3rem]' src="https://raw.githubusercontent.com/RaulTindogan/social-proof-section/main/src/assets/images/image-colton.jpg" alt="Colton Smith" />
            <div>
              <p className='font-[700]'>Colton Smith</p>
              <p className='text-Soft-Pink'>Verified Buyer</p>
            </div>
          </div>
          <p>"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"</p>
        </div>
        <div className='bg-Very-Dark-Magenta p-10 mb-5 rounded-lg lg:mt-5'>
          <div className='flex gap-5 mb-5'>
            <img className='rounded-full w-[3rem]' src="https://raw.githubusercontent.com/RaulTindogan/social-proof-section/main/src/assets/images/image-irene.jpg" alt="Irene Roberts" />
            <div>
              <p className='font-[700]'>Irene Roberts </p>
              <p className='text-Soft-Pink'>Verified Buyer</p>
            </div>
          </div>
          <p>"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."</p>
        </div>
        <div className='bg-Very-Dark-Magenta p-10 mb-5 rounded-lg lg:mt-10'>
          <div className='flex gap-5 mb-5'>
            <img className='rounded-full w-[3rem]' src="https://raw.githubusercontent.com/RaulTindogan/social-proof-section/main/src/assets/images/image-anne.jpg" alt="Anne Wallace" />
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
