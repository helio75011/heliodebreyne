import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className='overflow-hidden'>
          <div className='flex items-center px-7 xl:px-40 py-5 lg:py-7 bg-white fond justify-center'>
            <div className='w-auto'>
              <div className='flex flex-wrap items-center'>
                <div className='w-auto mr-14'>
                  <a href='#'>
                    <img
                      src='images/1657028929844.jfif'
                      alt=''
                      className='bord'
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className='w-auto'>
              <div className='flex flex-wrap items-center'>
                <div className='w-auto lg:block'>
                  <ul className='flex flex-wrap items-center mr-16'>
                    <li className='mr-9 font-medium hover:text-gray-700'>
                      <a href='#website'>Website</a>
                    </li>
                    <li className='mr-9 font-medium hover:text-gray-700'>
                      <a href='#technology'>Technology</a>
                    </li>
                    <li className='mr-9 font-medium hover:text-gray-700'>
                      <a href='#companies'>Companies</a>
                    </li>
                    <li className='font-medium hover:text-gray-700'>
                      <a href='https://www.linkedin.com/in/h%C3%A9lio-de-breyne-50b414244/'>Linkedin</a>
                    </li>
                  </ul>
                </div>
                
              </div>
            </div>
          </div>
          
        </section>
        <section className='relative py-28 overflow-hidden bg-black'>
          <img
            className='absolute bottom-0 right-0'
            src='flaro-assets/images/cta/gradient.svg'
            alt=''
          />
          <div className='relative z-10 container px-4 mx-auto'>
            <div className='flex flex-wrap items-center -m-8'>
              <div id="about" className='w-full md:w-1/2 p-8'>
                <h2 className='mb-5 text-6xl md:text-7xl text-white font-bold tracking-px-n leading-tight'>
                  About me
                </h2>
                <p className='text-white text-opacity-90 font-medium md:max-w-md'>
                  My background has allowed me to specialize in front-end and
                  back-end technologies, including JavaScript, React, Node.js,
                  as well as various databases like SQL and MongoDB. I am
                  convinced that technology is more than just a tool - it can
                  transform businesses, improve lives, and propel innovation. In
                  every project, I seek to design solutions that deliver real
                  value and solve complex problems creatively and effectively.
                </p>
              </div>
              <div className='w-full md:w-1/2 p-8'>
                <div className='flex flex-wrap ml-auto md:w-56 -m-2'>
                  <div className='w-full p-2'>
                    <a href="mailto: debreynehelio@gmail.com">
                    <button class="inline-flex items-center justify-center py-4 px-6 w-full text-white font-medium border border-white border-opacity-20 hover:border-opacity-40 rounded-xl focus:ring focus:ring-white focus:ring-opacity-40 bg-transparent hover:bg-black hover:bg-opacity-5 transition ease-in-out duration-200" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="mr-2.5 w-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                      </svg><span>E-mail</span>
                    </button>
                    </a>
                  </div>
                  <div className='w-full p-2'>
                    <a href="tel:0750390751">
                    <button
                      className='inline-flex items-center justify-center py-4 px-6 w-full text-white font-medium border border-white border-opacity-20 hover:border-opacity-40 rounded-xl focus:ring focus:ring-white focus:ring-opacity-40 bg-transparent hover:bg-black hover:bg-opacity-5 transition ease-in-out duration-200'
                      type='button'
                    >
                      <svg
                        className='mr-2.5'
                        width={19}
                        height={18}
                        viewBox='0 0 19 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M2.75 3.75C2.75 2.92157 3.42157 2.25 4.25 2.25H6.70943C7.03225 2.25 7.31886 2.45657 7.42094 2.76283L8.5443 6.13291C8.66233 6.48699 8.50203 6.87398 8.1682 7.0409L6.47525 7.88737C7.30194 9.72091 8.77909 11.1981 10.6126 12.0247L11.4591 10.3318C11.626 9.99796 12.013 9.83767 12.3671 9.9557L15.7372 11.0791C16.0434 11.1811 16.25 11.4677 16.25 11.7906V14.25C16.25 15.0784 15.5784 15.75 14.75 15.75H14C7.7868 15.75 2.75 10.7132 2.75 4.5V3.75Z'
                          stroke='white'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                      <span>Call</span>
                    </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='website' className='overflow-hidden bg-blueGray-100 py-28'>
          <div className='container px-4 mx-auto'>
            <h2
              className='mb-20 text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none'
              contentEditable='false'
            >
              My website with Textiss USA
            </h2>
            <div className='max-w-5xl mx-auto'>
              <div className='flex flex-wrap -m-3'>
                <div className='w-full md:w-1/3 p-3'>
                  <div className='max-w-max mx-auto'>
                    <div className='mb-6 max-w-max overflow-hidden rounded-3xl'>
                      <a href='https://hypnocrazy.com/'>
                        <img
                          className='transform hover:scale-105 transition ease-in-out duration-1000'
                          src='images/hypno-2-11zon.png'
                          alt=''
                        />
                      </a>
                    </div>
                    <h3 className='mb-1 text-lg font-bold font-heading leading-snug'>
                      Hypnocrazy
                    </h3>
                    <p className='font-medium text-gray-600'>
                      Co-Founder, Web Integrator
                    </p>
                  </div>
                </div>
                <div className='w-full md:w-1/3 p-3'>
                  <div className='max-w-max mx-auto'>
                    <div className='mb-6 max-w-max overflow-hidden rounded-3xl'>
                      <a href='https://crazyboxer.com/'>
                        <img
                          className='transform hover:scale-105 transition ease-in-out duration-1000'
                          src='images/crazybox-11zon.png'
                          alt=''
                        />
                      </a>
                    </div>
                    <h3 className='mb-1 text-lg font-bold font-heading leading-snug'>
                      Crazyboxer
                    </h3>
                    <p className='font-medium text-gray-600'>
                      Web Integrator
                    </p>
                  </div>
                </div>
                <div className='w-full md:w-1/3 p-3'>
                  <div className='max-w-max mx-auto'>
                    <div className='mb-6 max-w-max overflow-hidden rounded-3xl'>
                      <a href='https://capslab.fr/fr/'>
                        <img
                          className='transform hover:scale-105 transition ease-in-out duration-1000'
                          src='images/capslab-11zon.png'
                          alt=''
                        />
                      </a>
                    </div>
                    <h3 className='mb-1 text-lg font-bold font-heading leading-snug'>
                      Capslab
                    </h3>
                    <p className='font-medium text-gray-600'>
                      Web Integrator
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="technology" className='bg-blueGray-100 overflow-hidden pt-20 pb-20'>
          <div className='container px-4 mx-auto'>
            <h2 className='mb-6 text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none md:max-w-2xl mx-auto'>
              Technology
            </h2>
            <div className='flex flex-wrap justify-center p-2'>
              <div className='w-auto pt-2'>
                <img
                  src='images/formation-react-avance.png'
                  alt=''
                  className='taille-2'
                />
              </div>
              <div className='w-auto pt-2'>
                <img
                  src='images/kisspng-django-web-development-web-framework-python-softwa-django-5b45d914274e46-055745571531304212161-1.png'
                  alt=''
                  className='taille bordure marge'
                />
              </div>
              <div className='w-auto pt-2'>
                <img
                  src='images/2048px-Angular-full-color-logo-svg.png'
                  alt=''
                  className='marge taille-deux'
                />
              </div>
              <div className='w-auto pt-2'>
                <img
                  src='images/nodejs-logo-FBE122E377-seeklogo-com.png'
                  alt=''
                  className='taille marge'
                />
              </div>
              <div className='w-auto pt-2'>
                <img
                  src='images/symfony.svg'
                  alt=''
                  className='taille marge'
                />
              </div>
              <div className='w-auto pt-2'>
                <img
                  src='images/JavaScript-logo.png'
                  alt=''
                  className='taille marge'
                />
              </div>
              <div className='w-auto pt-2'>
                <img
                  src='images/e06c37c6-5707-48e4-bb22-5aaf3cf6dea2.svg'
                  alt=''
                  className='taille marge'
                />
              </div>
              <div className='w-auto pt-2'>
                <img
                  src='images/jquery-logo-icon-167804.png'
                  alt=''
                  className='taille marge'
                />
              </div>
            </div>
            <div className='flex flex-wrap justify-center p-2'>
              <div className='w-auto'>
                <img
                  src='images/5848104fcef1014c0b5e4950.png'
                  alt=''
                  className='taille-2 sql'
                />
              </div>
              <div className='w-auto pt-2'>
                <img
                  src='images/Vue-js-Logo-2-svg.png'
                  alt=''
                  className='taille bordure marge'
                />
              </div>
              <div className='w-auto pt-2'>
                <img
                  src='images/Python-logo-notext-svg.png'
                  alt=''
                  className='marge taille'
                />
              </div>
              <div className='w-auto pt-2'>
                <img
                  src='images/nextjs-icon.svg'
                  alt=''
                  className='taille marge'
                />
              </div>
              <div className='w-auto pt-2'>
                <img
                  src='images/wordpress-318-183439.avif'
                  alt=''
                  className='taille marge'
                />
              </div>
              <div className='w-auto pt-2'>
                <img
                  src='images/Integrations-Woo-1.png'
                  alt=''
                  className='taille marge'
                />
              </div>
              <div className='w-auto pt-2'>
                <img
                  src='images/ECOM-4f6f76f8.png'
                  alt=''
                  className='taille marge'
                />
              </div>
            </div>
          </div>
        </section>
        <section id="companies" className='relative bg-blueGray-100 overflow-hidden pt-16 pb-16'>
          <div className='relative z-10 container px-4 mx-auto'>
            <h2 className='mb-14 text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none md:max-w-2xl mx-auto'>
              I have worked with these companies
            </h2>
            <div className='flex flex-wrap max-w-5xl mx-auto -m-3'>
              <div className='w-full md:w-1/2 lg:w-1/4 p-3'>
                <div className='flex items-center justify-center py-8 px-9 h-full bg-white rounded-3xl'>
                  <a href="http://www.textiss.com/">
                    <img
                      src='images/TEXTISS-UNDERWEAR-COMPANY-sans-fond.png'
                      alt=''
                    />
                  </a>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/4 p-3'>
                <div className='flex items-center justify-center py-8 px-9 h-full bg-white rounded-3xl'>
                  <a href="https://www.mydigitalschool.com/">
                    <img
                      src='images/43-logo.png'
                      alt=''
                    />
                  </a>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/4 p-3'>
                <div className='flex items-center justify-center py-8 px-9 h-full bg-white rounded-3xl'>
                  <a href="https://www.wf3.fr/">
                    <img
                      src='images/logo-classique-1024x0-c.png'
                      alt=''
                    />
                  </a>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/4 p-3'>
                <div className='flex items-center justify-center py-8 px-9 h-full bg-white rounded-3xl'>
                  <a href="https://laplateforme.io/">
                    <img
                      src='images/logo-laplateforme-bleu3.png'
                      alt=''
                    />
                  </a>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/4 p-3'></div>
            </div>
          </div>
        </section>
        <section className='relative py-16 bg-white overflow-hidden'>
          <img
            className='absolute top-0 left-0 h-full bg-black'
            src='flaro-assets/images/footers/gradient4.svg'
            alt=''
          />
          <div className='relative z-10 container px-4 mx-auto'>
            <div className='flex flex-wrap justify-between items-center -m-8'>
              <div className='w-auto p-8'>
                <a href='#'>
                  <img
                    src='images/1657028929844-1.jfif'
                    alt=''
                    className='bord'
                  />
                </a>
              </div>
              <div className='w-auto p-8'>
                <ul className='flex flex-wrap items-center -m-5'>
                  <li className='p-5'>
                    <a className='font-medium text-white' href='#about'>
                      About
                    </a>
                  </li>
                  <li className='p-5'>
                    <a className='font-medium text-white' href='#website'>
                      My website
                    </a>
                  </li>
                  <li className='p-5'>
                    <a className='font-medium text-white' href='#technology'>
                      Technology
                    </a>
                  </li>
                  <li className='p-5'>
                    <a className='font-medium text-white' href='#companies'>
                      Compagny
                    </a>
                  </li>
                  <li className='p-5'>
                    <a className='font-medium text-white' href='mailto: debreynehelio@gmail.com'>
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className='w-auto p-8'>
                <div className='flex flex-wrap -m-1.5'>
                  <div className='w-auto p-1.5'>
                    <a href='https://www.linkedin.com/in/h%C3%A9lio-de-breyne-50b414244/'>
                      <div className='flex items-center justify-center w-8 h-8 rounded-full'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          xmlnsXlink='http://www.w3.org/1999/xlink'
                          fill='#fff'
                          height='800px'
                          width='800px'
                          version='1.1'
                          id='Layer_1'
                          viewBox='0 0 455 455'
                          xmlSpace='preserve'
                          stroke='#fff'
                          className='h-10 w-10'
                        >
                          <g id='SVGRepo_bgCarrier' strokeWidth={0} />
                          <g
                            id='SVGRepo_tracerCarrier'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <g id='SVGRepo_iconCarrier'>
                            <g>
                              <path
                                style={{
                                  fillRule: 'evenodd',
                                  clipRule: 'evenodd',
                                }}
                                d='M246.4,204.35v-0.665c-0.136,0.223-0.324,0.446-0.442,0.665H246.4z'
                              />
                              <path
                                style={{
                                  fillRule: 'evenodd',
                                  clipRule: 'evenodd',
                                }}
                                d='M0,0v455h455V0H0z M141.522,378.002H74.016V174.906h67.506V378.002z M107.769,147.186h-0.446C84.678,147.186,70,131.585,70,112.085c0-19.928,15.107-35.087,38.211-35.087 c23.109,0,37.31,15.159,37.752,35.087C145.963,131.585,131.32,147.186,107.769,147.186z M385,378.002h-67.524V269.345 c0-27.291-9.756-45.92-34.195-45.92c-18.664,0-29.755,12.543-34.641,24.693c-1.776,4.34-2.24,10.373-2.24,16.459v113.426h-67.537 c0,0,0.905-184.043,0-203.096H246.4v28.779c8.973-13.807,24.986-33.547,60.856-33.547c44.437,0,77.744,29.02,77.744,91.398V378.002 z'
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}