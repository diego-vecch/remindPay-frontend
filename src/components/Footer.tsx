import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className='flex w-full bg-purple-regular  justify-center'>
      <div className=' w-full max-w-[1450px] flex flex-col items-center justify-between text-end flex-wrap pt-2 lg:items-center lg:w-auhref font-semibold '>
        <div className='w-full pt-4 block flex-grow lg:flex gap-10 lg:items-center'>
          <div className='text-sm lg:flex-grow flex justify-center flex-col md:flex-row gap-14 lg:gap-24'>
            <section className='text-purple-light flex justify-center items-center'>
              <Link href='/'>
                <Image
                  className='w-20 h-16'
                  width={20}
                  height={20}
                  src='Logo-Full-Dark.svg'
                  alt='Logo Git Hub'
                />
              </Link>
            </section>
            <section>
              <h1 className='text-blue-regular font-bold mr-2 text-center pb-4'>
                Links
              </h1>
              <div className='flex justify-around flex-col md:flex-row text-purple-light'>
                <Link
                  href='/HowItWork'
                  className='block mt-4 lg:inline-block lg:mt-0 hover:underline mr-2 text-center'
                >
                  How it work
                </Link>
                <Link
                  href='/About'
                  className='block mt-4 lg:inline-block lg:mt-0 hover:underline mr-2 text-center'
                >
                  About
                </Link>
                <Link
                  href='/Contact'
                  className='block mt-4 lg:inline-block lg:mt-0 hover:underline mr-2 text-center'
                >
                  Contact
                </Link>
              </div>
            </section>
            <section className=''>
              <h1 className='text-blue-regular font-bold text-center mr-4'>
                Technologies
              </h1>
              <div className='flex justify-around flex-col md:flex-row w-full pt-4 [&>a]:flex [&>a]:justify-center '>
                <a
                  href='https://reactjs.org/'
                  target='_black'
                  className=' sm:block mt-4 lg:inline-block lg:mt-0 text-white hover:underline mr-4 sm:text-center'
                >
                  <svg
                    width='50'
                    height='50'
                    viewBox='0 0 50 50'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M25 27.146C27.0538 27.146 28.7188 25.4811 28.7188 23.4272C28.7188 21.3734 27.0538 19.7085 25 19.7085C22.9462 19.7085 21.2812 21.3734 21.2812 23.4272C21.2812 25.4811 22.9462 27.146 25 27.146Z'
                      fill='#E5D1FF'
                    />
                    <path
                      d='M14.5872 30.8208L13.7643 30.6104C7.65176 29.0666 4.14551 26.4416 4.14551 23.4187C4.14551 20.3937 7.65384 17.7708 13.7643 16.227L14.5872 16.0187L14.8184 16.8333C15.4362 18.966 16.2278 21.0445 17.1851 23.0479L17.3622 23.4187L17.1851 23.7895C16.2268 25.7958 15.433 27.8749 14.8184 30.0083L14.5872 30.8208ZM13.3851 18.1229C8.74134 19.4312 5.88926 21.427 5.88926 23.4187C5.88926 25.4062 8.73926 27.4041 13.3851 28.7104C13.9538 26.902 14.6413 25.1333 15.4372 23.4187C14.6356 21.7012 13.95 19.932 13.3851 18.1229ZM35.4101 30.8208L35.1809 30.0041C34.5615 27.871 33.7693 25.7919 32.8122 23.7874L32.6351 23.4187L32.8122 23.0458C33.7705 21.0437 34.5601 18.9624 35.1809 16.8291L35.4101 16.0166L36.233 16.2249C42.3476 17.7687 45.8518 20.3916 45.8518 23.4187C45.8518 26.4437 42.3455 29.0666 36.233 30.6104L35.4101 30.8208ZM34.5559 23.4187C35.3893 25.2229 36.083 26.9979 36.6122 28.7104C41.258 27.4041 44.1101 25.4062 44.1101 23.4187C44.1101 21.427 41.2601 19.4333 36.6122 18.1229C36.044 19.9314 35.3571 21.7006 34.5559 23.4187Z'
                      fill='#E5D1FF'
                    />
                    <path
                      d='M13.373 18.1145L13.1438 17.302C11.423 11.2437 11.9438 6.90408 14.5751 5.39158C17.148 3.902 21.2876 5.66242 25.623 10.1103L26.2146 10.7187L25.623 11.3249C24.0831 12.9263 22.6757 14.6501 21.4146 16.4791L21.1792 16.8166L20.7709 16.8499C18.5534 17.0241 16.3537 17.3787 14.1938 17.9103L13.373 18.1145ZM16.6688 6.59575C16.2022 6.59575 15.7896 6.69783 15.4417 6.89783C13.7167 7.89158 13.4126 11.352 14.6001 16.0228C16.4563 15.6124 18.3292 15.3187 20.2167 15.1541C21.3095 13.6042 22.5016 12.1268 23.7855 10.7312C21.0709 8.09158 18.5084 6.59575 16.6688 6.59575ZM33.3292 41.9791C30.8542 41.9791 27.6751 40.1124 24.3751 36.7249L23.7855 36.1187L24.3751 35.5145C25.9152 33.9105 27.3232 32.1847 28.5855 30.3541L28.8188 30.0207L29.223 29.9812C31.4413 29.8101 33.6418 29.4568 35.8021 28.9249L36.6251 28.7166L36.8563 29.5312C38.5688 35.5853 38.0501 39.9312 35.423 41.4437C34.7851 41.8052 34.0624 41.9901 33.3292 41.9791ZM26.2146 36.1041C28.9271 38.7437 31.4917 40.2416 33.3292 40.2416C33.798 40.2416 34.2105 40.1374 34.5563 39.9395C36.2834 38.9437 36.5896 35.477 35.398 30.8062C33.5438 31.2187 31.6688 31.5145 29.7771 31.6791C28.689 33.2314 27.4989 34.7097 26.2146 36.1041Z'
                      fill='#E5D1FF'
                    />
                    <path
                      d='M36.6246 18.1144L35.8016 17.9081C33.6414 17.3748 31.4409 17.0202 29.2225 16.8477L28.8183 16.8123L28.585 16.4748C27.3245 14.6447 25.9163 12.9209 24.3746 11.3206L23.785 10.7144L24.3746 10.1102C28.7079 5.66436 32.8454 3.90394 35.4225 5.39144C38.0516 6.90602 38.5746 11.2456 36.8558 17.3019L36.6246 18.1144ZM29.7766 15.1539C31.7641 15.331 33.6475 15.6289 35.3975 16.0227C36.5871 11.3519 36.2829 7.89144 34.5558 6.89561C32.8391 5.90186 29.6079 7.42269 26.2142 10.731C27.4975 12.1269 28.6891 13.6019 29.7766 15.1539ZM16.6683 41.9789C15.9353 41.9894 15.2126 41.8046 14.5746 41.4435C11.9433 39.931 11.4225 35.5873 13.1412 29.531L13.3662 28.7164L14.1891 28.9248C16.1975 29.431 18.41 29.7873 20.7683 29.981L21.1725 30.0206L21.4079 30.3539C22.6662 32.1831 24.0746 33.9102 25.6162 35.5144L26.2079 36.1185L25.6162 36.7248C22.3183 40.1144 19.1392 41.9789 16.6683 41.9789ZM14.5996 30.8081C13.4121 35.4789 13.7162 38.9456 15.4412 39.9414C17.16 40.9206 20.3808 39.4102 23.785 36.1039C22.5016 34.7079 21.3095 33.2305 20.2162 31.681C18.3268 31.5139 16.4505 31.2223 14.5996 30.8081Z'
                      fill='#E5D1FF'
                    />
                    <path
                      d='M25 31.9023C23.5688 31.9023 22.1 31.8419 20.625 31.719L20.2167 31.6836L19.9812 31.3461C19.1495 30.15 18.3669 28.9205 17.6354 27.6606C16.9094 26.3974 16.2345 25.1054 15.6125 23.7877L15.4375 23.419L15.6125 23.0461C16.2354 21.7294 16.9083 20.4377 17.6354 19.1752C18.3583 17.9336 19.1479 16.6919 19.9812 15.4877L20.2167 15.1544L20.625 15.1169C23.5352 14.8731 26.4606 14.8731 29.3708 15.1169L29.775 15.1565L30.0104 15.4898C31.6767 17.883 33.1401 20.4113 34.3854 23.0481L34.5583 23.4211L34.3854 23.7898C33.1435 26.4285 31.6799 28.957 30.0104 31.3481L29.775 31.6856L29.3708 31.7211C27.9 31.8398 26.4292 31.9023 25 31.9023ZM21.1792 30.019C23.7521 30.2127 26.2479 30.2127 28.8188 30.019C30.2539 27.9173 31.5297 25.7112 32.6354 23.419C31.5336 21.1247 30.2577 18.9183 28.8188 16.819C26.276 16.6231 23.7219 16.6231 21.1792 16.819C19.739 18.9175 18.463 21.1241 17.3625 23.419C18.4706 25.7099 19.7463 27.9159 21.1792 30.019Z'
                      fill='#E5D1FF'
                    />
                  </svg>
                </a>
                <a
                  href='https://www.django-rest-framework.org/'
                  target='_black'
                  className='block mt-4 lg:inline-block lg:mt-0 text-white hover:underline mr-4'
                >
                  <svg
                    width='50'
                    height='50'
                    viewBox='0 0 50 50'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M15.6937 25.5186C15.6708 29.654 18.7041 32.1186 23.5437 30.9978V20.0374C18.6437 18.5457 15.7146 21.5645 15.6937 25.5186ZM23.6916 4.18945H30.3562V35.7374C23.9687 36.7811 17.8479 37.4436 13.4729 34.9978C7.83748 31.8457 7.38331 21.8332 11.8437 17.3728C14.1041 15.1124 18.6583 13.5186 23.5437 14.5582V4.63529C23.5312 4.42487 23.5187 4.21445 23.6916 4.18945ZM41.1687 11.152H34.5041V4.18945H41.1687V11.152Z'
                      fill='#E5D1FF'
                    />
                    <path
                      d='M41.169 14.6748C41.1628 19.5831 41.1628 23.1081 41.1628 29.0727C40.8794 34.9331 40.9461 39.5977 38.7982 42.4019C38.3753 42.9561 37.4773 43.7602 36.7253 44.3269C36.094 44.8019 34.8898 45.7665 34.2086 45.8081C33.519 45.8519 31.7503 44.8519 30.9503 44.4748C29.8982 43.9811 28.9273 43.3227 27.8398 42.9956C30.3773 41.4248 32.7815 40.2456 33.7648 37.0706C34.619 34.3081 34.5044 30.3061 34.5044 26.4061C34.5044 22.554 34.5232 18.0769 34.5232 14.6769L41.169 14.6748Z'
                      fill='#E5D1FF'
                    />
                  </svg>
                </a>
                <a
                  href='https://tailwindcss.com/'
                  target='_black'
                  className='block mt-4 lg:inline-block lg:mt-0 text-white hover:underline mr-4'
                >
                  <svg
                    width='50'
                    height='50'
                    viewBox='0 0 50 50'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M38.542 19.8127C36.9796 19.2746 35.6005 18.307 34.5628 17.021C33.4192 15.5882 31.9629 14.4359 30.3055 13.6523C28.6481 12.8687 26.8335 12.4746 25.0003 12.5002C22.5344 12.3255 20.0932 13.0861 18.1628 14.6304C16.2325 16.1747 14.9546 18.3894 14.5837 20.8335C15.3142 19.6111 16.4138 18.652 17.7241 18.0942C19.0344 17.5364 20.4878 17.4086 21.8753 17.7293C23.4351 18.2831 24.812 19.2563 25.8545 20.5418C27.0044 21.9632 28.4634 23.1036 30.1205 23.8762C31.7775 24.6488 33.589 25.0332 35.417 25.0002C37.8829 25.1748 40.3241 24.4142 42.2545 22.8699C44.1849 21.3257 45.4627 19.1109 45.8337 16.6668C45.1164 17.9039 44.0203 18.8775 42.7073 19.4439C41.3944 20.0104 39.9341 20.1397 38.542 19.8127ZM11.4587 30.1877C13.021 30.7258 14.4002 31.6933 15.4378 32.9793C16.5815 34.4122 18.0377 35.5645 19.6951 36.348C21.3525 37.1316 23.1672 37.5257 25.0003 37.5002C27.4662 37.6748 29.9074 36.9142 31.8378 35.3699C33.7682 33.8256 35.0461 31.6109 35.417 29.1668C34.6864 30.3892 33.5869 31.3484 32.2766 31.9062C30.9663 32.464 29.5128 32.5917 28.1253 32.271C26.5656 31.7172 25.1887 30.7441 24.1462 29.4585C22.9932 28.0406 21.5336 26.9027 19.8772 26.1305C18.2209 25.3583 16.411 24.9718 14.5837 25.0002C12.1178 24.8255 9.67654 25.5861 7.74617 27.1304C5.8158 28.6747 4.53791 30.8894 4.16699 33.3335C4.8843 32.0965 5.98034 31.1229 7.29331 30.5564C8.60628 29.99 10.0666 29.8607 11.4587 30.1877Z'
                      fill='#E5D1FF'
                    />
                  </svg>
                </a>
              </div>
            </section>
            <section className=''>
              <h1 className='text-blue-regular font-bold mr-4 text-center'>
                Repository
              </h1>
              <div className='flex justify-center'>
                <a
                  href='https://github.com/marcelowebdesigner/G4-Frontend.git'
                  target='_black'
                  className='block mt-4 lg:inline-block lg:mt-0 text-white hover:underline mr-4'
                >
                  <svg
                    width='50'
                    height='50'
                    viewBox='0 0 50 50'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M25.0546 4.1665C13.5775 4.1665 4.27539 13.4686 4.27539 24.9457C4.27539 34.1248 10.2275 41.9144 18.4858 44.6644C19.5254 44.8519 19.9004 44.2123 19.9004 43.6623C19.9004 43.1686 19.8837 41.8603 19.8775 40.129C14.0962 41.3832 12.8754 37.3415 12.8754 37.3415C11.9337 34.9415 10.5691 34.3019 10.5691 34.3019C8.68372 33.0123 10.7129 33.0415 10.7129 33.0415C12.8004 33.1873 13.8941 35.1832 13.8941 35.1832C15.7483 38.3582 18.7608 37.4415 19.94 36.9103C20.1296 35.5665 20.6712 34.6498 21.2629 34.1311C16.6504 33.6082 11.8004 31.8248 11.8004 23.8603C11.8004 21.5957 12.6108 19.7373 13.9337 18.2873C13.7233 17.7603 13.0046 15.6457 14.14 12.7873C14.14 12.7873 15.8837 12.2269 19.8525 14.9144C21.5475 14.4533 23.2959 14.218 25.0525 14.2144C26.8091 14.2173 28.5576 14.4526 30.2525 14.9144C34.2233 12.2248 35.965 12.7873 35.965 12.7873C37.1004 15.6457 36.3879 17.7603 36.1712 18.2873C37.5046 19.7373 38.3046 21.5936 38.3046 23.8603C38.3046 31.8457 33.4504 33.5998 28.8212 34.1144C29.5608 34.7561 30.2275 36.0228 30.2275 37.9603C30.2275 40.7394 30.2025 42.9811 30.2025 43.6623C30.2025 44.2186 30.5733 44.8644 31.6337 44.6603C39.8879 41.9061 45.8337 34.1228 45.8337 24.9457C45.8337 13.4686 36.5316 4.1665 25.0546 4.1665Z'
                      fill='#E5D1FF'
                    />
                  </svg>
                </a>
              </div>
            </section>
          </div>
        </div>
        <div className='flex justify-center text-sm pt-6 pb-4'>
          <h1 className='text-white'>
            © 2022 Remind Pay. All rights reserved.
          </h1>
        </div>
      </div>
    </footer>
  );
};
