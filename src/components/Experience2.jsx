import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { coderush2, codingninja, mnit, udemy } from '../assets';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import alpha from '../assets/alphaDsa.png';
import google from '../assets/Google.jpg';
import sql from '../assets/sql.png';

const certificates = [
  {
    title: 'Data Structure and Algorithms using Java',
    organization: 'Alpha',
    date: '2022',
    certificateLink: 'https://drive.google.com/file/d/1VyVSFTAkm8qmzuuRBW0CX7gb4tUNgRLQ/view?usp=drive_link',
    image: alpha
  },
  {
    title: 'Google Cloud Study JAM',
    organization: 'Google Cloud',
    date: '2023',
    certificateLink: 'https://drive.google.com/file/d/1B_2Xf1_LdZVU0jP7HYJl4UJg_wgmTrOK/view?usp=drive_link',
    image: google
  },
  {
    title: 'Introduction to SQL for Data Science',
    organization: 'Scaler',
    date: '2023',
    certificateLink: 'https://drive.google.com/file/d/1z3KEZt1nrGdm-4Ihj79SV2P5tC0TEJuc/view?usp=drive_link',
    image: sql
  },
];

const Experience2 = () => {
  return (
    <div className="certificate-carousel flex justify-center w-full overflow-hidden p-10">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="w-full max-w-[50vw]" // Restricts unnecessary expansion
      >
        {certificates.map((certificate, index) => (
          <SwiperSlide key={index} className="flex justify-center w-full">
            <div className="transition ease-in flex justify-center hover:translate-x-2 hover:translate-y-2 w-full">
              <div className="w-[30vw] md:w-[30vw] lg:w-[30vw] rounded-md border-4"> {/* 50% width */}
                <div className="certificate-slide p-2">
                  <a
                    href={certificate.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    <img src={certificate.image} alt="View certificate" className="rounded-md w-full" />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Experience2;
