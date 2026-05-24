import { useState } from 'react'
import './App.css'

function App() {
  return (
    <body className=' font-sans font-bold bg-bg-dark text-text-main p-0 m-0 line-hight-1.5 overflow-x-hidden'>
      <header className=' flex top-0 w-full box-border bg-[rgba(10,15,22,0.8)] z-1000  backdrop-blur-[10px] fixed justify-between items-center border-b border-white/5 py-6 px-[5%]'>
         
          <h1 className=' text-2xl bg-primary-gradient bg-clip-text text-transparent'>BOSSCODE</h1>
          <a href="" className=' py-2 px-6 bg-primary-gradient no-underline rounded-full font-semibold text-black transition-all duration-smooth ease-smooth hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(0,242,254,0.4)]'>ติดต่องาน</a>
      </header>

      <section className=' flex flex-col justify-center text-center items-center min-h-screen px-5 bg-[radial-gradient(circle_at_center,#1a2636_0%,var(--color-bg-dark)_70%)]  '>
        <h1 className='text-[clamp(2.5rem,5vw,4.5rem)] mb-4 leading-[1.1] font-extrabold  '>เปลี่ยนผู้เยี่ยมชมให้เป็นลูกค้า <br />ด้วยเว็บไซต์ที่ <span className=' text-primary-accent'>โดดเด่น</span> </h1>
        <p className='text-[clamp(2rem, 2vw, 1.25rem)] text-text-muted mb-10 max-w-[600px] '>รับออกแบบและพัฒนาเว็บไซต์แบบ Custom สวยงาม โหลดไว <br />
          รองรับมือถือ100% พร้อมยกระดับภาพลักษณ์ธุรกิจของคุณบนโลกออนไลน์ </p>

         <a className= ' text-[1.2rem] bg-transparent text-primary-accent border-2 border-primary-accent rounded-[50px] px-[2.5rem] py-[1rem] no-underline relative overflow-hidden transition-all duration-smooth ease-smooth  font-semibold  hover:bg-primary-accent hover:shadow-[0_10px_30px_rgba(0,242,254,0.3)] hover:text-black  hover:border-transparent   ' tyle={{ transitionDelay: '0.2s' }}>ดูผลงานเรา
          </a> 
      </section>

      <section className= 'px-[5%] py-[6rem] mx-auto my-0 max-w-[1200px] '>        
        <h2 className='text-center text-[2.5rem] mb-[3rem] relative after:absolute after:bottom-[-10px] after:left-[48%] after:transform-x-1/2 after:w-[60px] after:h-[4px] after:bg-primary-gradient after:rounded-sm'>สิ่งที่เราช่วยคุณได้</h2>
        <div className=' grid  grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[2rem] '>
          <div className= 'bg-surface-dark p-[2.5rem] rounded-[16px] transition-all duration-smooth ease-smooth border border-white/5 hover:-translate-y-2.5 hover:border-2 border-[rgba(0,242,254,0.3)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]'> 
          <div className='text-[2.5rem] mb-[1rem]'>⚡</div>
          <h3 className='mb-[1rem]'>Modern Front-End</h3>
          <p className='font-medium'>เขียนโค้ดด้วยโครงสร้าง HTML, CSS และ JavaScript ที่สะอาด ทันสมัย
                    สามารถเปลี่ยนจากดีไซน์ในฝันให้กลายเป็นเว็บไซต์ที่ใช้งานได้จริง</p>
       </div>

          <div className= 'bg-surface-dark p-[2.5rem] rounded-[16px] transition-all duration-smooth ease-smooth border border-white/5 hover:-translate-y-2.5 hover:border-2 border-[rgba(0,242,254,0.3)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]'>
          <div className='text-[2.5rem] mb-[1rem]'>⚙️</div>
          <h3 className='mb-[1rem]'>Interactive UT</h3>
          <p className='font-medium'>เพิ่มชีวิตชีวาให้เว็บไซต์ด้วย <br />แอนิเมชันและระบบตอบโต้ที่ลื่นไหล ทำให้ลูกค้ามีประสบการณ์การใช้งาน (UX)
                    ที่น่าประทับใจ</p>

          </div>
          <div className= 'bg-surface-dark p-[2.5rem] rounded-[16px] transition-all duration-smooth ease-smooth border border-white/5 hover:-translate-y-2.5 hover:border-2 border-[rgba(0,242,254,0.3)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]'>
             <div className='mb-[2.5rem] text-[2.5rem]'>🎨</div>
             <h3 className='mb-[1rem]'>Modern Front-End</h3>
             <p className='font-medium'>เขียนโค้ดด้วยโครงสร้าง HTML, CSS และ JavaScript ที่สะอาด ทันสมัย
                    สามารถเปลี่ยนจากดีไซน์ในฝันให้กลายเป็นเว็บไซต์ที่ใช้งานได้จริง</p>

          </div>

        </div>
      </section>

      <section className= 'px-[5%] py-[6rem] mx-auto my-0 max-w-[1200px] '>
        <h2 className='text-center text-[2.5rem] mb-[3rem] relative after:absolute after:bottom-[-10px] after:left-[48%] after:transform-x-1/2 after:w-[60px] after:h-[4px] after:bg-primary-gradient after:rounded-sm'>ผลงานที่ผ่านมา</h2>

        <div className='grid gap-[2rem] grid-cols-[repeat(auto-fit,minmax(350px,1fr))] '>
          <div className='bg-surface-dark rounded-[16px] overflow-hidden transition-all duration-smooth ease-smooth border border-white/5 hover:border-primary-accent'>
          <div className= ' p-[2rem]'>
            <h3 className='mb-4 text-[28px]'>📊 Smart Expense Tracker</h3>
          <p className='font-medium'>แอปพลิเคชันสำหรับจัดการบัญชีรายรับ-รายจ่ายส่วนบุคคล โดดเด่นด้วยระบบประมวลผลข้อมูล State
                        Management และการคำนวณที่แม่นยำ</p>

          </div>

          </div>

           <div className='bg-surface-dark rounded-[16px] overflow-hidden transition-all duration-smooth ease-smooth border border-white/5 hover: border-primary-accent'>
          <div className= ' p-[2rem]'>
            <h3>หีเรื้องเเสง</h3>

          </div>

          </div>

           <div className='bg-surface-dark rounded-[16px] overflow-hidden transition-all duration-smooth ease-smooth border border-white/5 hover: border-primary-accent'>
          <div className= ' p-[2rem]'>
            sy

          </div>

          </div>
           <div className='bg-surface-dark rounded-[16px] overflow-hidden transition-all duration-smooth ease-smooth border border-white/5 hover: border-primary-accent'>
          <div className= ' p-[2rem]'>
            <h3></h3>

          </div>

          </div>




        </div>

      </section>

      <section className= ' block align-center bg-surface-dark px-[20px] py-[5rem] border-t border-white/5 text-center '>
         
        <h2 className='text-[2.5rem]'>พร้อมที่จะเริ่มโปรเจกต์ใหมหรือยัง?</h2>
        <p className='text-text-muted mt-[2rem]'>ไม่ว่าจะเป็นเว็บไซต์โปรไฟล์บริษัท, หน้า
            Landing Page ขายสินค้า หรือ Web Application เราพร้อมให้คำปรึกษา</p>
            <a className='inline-block py-2 px-6  mt-8 bg-primary-gradient no-underline rounded-full font-semibold text-black transition-all duration-smooth ease-smooth hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(0,242,254,0.4)]'>ส่งอีเมลพุดคุยโปรเจกต์</a>


      </section>

      <footer className=' text-center p-[2rem] text-text-muted text-[0.9rem]'>
        © 2026 BOSSCODE Developer. Engineered for Business Growth.

      </footer>

      

      


    </body>
  )
}

export default App
