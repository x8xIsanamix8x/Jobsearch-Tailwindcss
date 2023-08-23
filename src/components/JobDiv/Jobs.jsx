import React from 'react'

import{BiTimeFive} from 'react-icons/bi'

import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";
import logo6 from "../../assets/logo6.png";
import logo7 from "../../assets/logo7.png";
import logo8 from "../../assets/logo8.png";
import logo9 from "../../assets/logo9.png";
import logo10 from "../../assets/logo10.png";

const data = [{
    id: 1,
    image: logo1,
    title: 'Web Developer',
    time: 'Now',
    location: 'Canada',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, placeat.',
    company: 'Homebor Corp'
  },
  {
    id: 2,
    image: logo2,
    title: 'UI Designer',
    time: '14 hrs',
    location: 'Miami',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, placeat.',
    company: 'Google'
  },
  {
    id: 3,
    image: logo3,
    title: 'Delivery Manager',
    time: 'Now',
    location: 'España',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, placeat.',
    company: 'Burguer King'
  },
  {
    id: 4,
    image: logo4,
    title: 'Technical Lead',
    time: 'Now',
    location: 'Mexico',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, placeat.',
    company: 'Alcatel'
  },
  {
    id: 5,
    image: logo5,
    title: 'Global Product Owner',
    time: 'Now',
    location: 'San Francisco',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, placeat.',
    company: 'HomestayHome'
  },
  {
    id: 6,
    image: logo6,
    title: 'UI Designer',
    time: 'Now',
    location: 'Miami',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, placeat.',
    company: 'RockStarGames'
  },
  {
    id: 7,
    image: logo7,
    title: 'Tester',
    time: '20 hrs',
    location: 'Portugal',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, placeat.',
    company: 'Capcom'
  },
  {
    id: 8,
    image: logo8,
    title: 'UI Designer',
    time: 'Now',
    location: 'Miami',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, placeat.',
    company: 'Movistar'
  },
  {
    id: 9,
    image: logo9,
    title: 'UX Experience',
    time: '40 hrs',
    location: 'Silicon Valley',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, placeat.',
    company: 'Canaima GNU/LINUX'
  },
  {
    id: 10,
    image: logo10,
    title: 'IT Account Manager',
    time: '120 hrs',
    location: 'Venezuela',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, placeat.',
    company: 'Movistar'
  }
]


export const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">

        {
          data.map(({ id, image, title, time, location, desc, company}) => {

            return(
              
              <div key={id} className="group group/item singleJob w-[250px] rounded-md p-[20px] bg-white rounded[10px] hover:bg-violet-500 shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">

                <span className='flex justify-between items-center gap-4'>
                    <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
                    <span className='flex items-center text-[#ccc] gap-1 '>
                      <BiTimeFive/>{time}
                    </span>
                  </span>
                <h6 className='text-[#ccc]'>{location}</h6>
                <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'
                >{desc}
                </p>

                <div className='company flex items-center gap-2 m-2' >
                  <img src={image} alt="Company Logo" className='w-[20%]' />
                  <span className='text-[14px] py-[1rem] block group-hover:text-white '>{company}</span>
                </div>

                <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-black'>
                  Apply Now
                </button>

              </div>

            )
          })
        }


      </div>
    </div>
  )
}

{/* <div className="group group/item singleJob w-[250px] rounded-md p-[20px] bg-white rounded[10px] hover:bg-violet-500 shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">

          <span className='flex justify-between items-center gap-4'>
              <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>Web Developer</h1>
              <span className='flex items-center text-[#ccc] gap-1 '>
                <BiTimeFive/>Now
              </span>
            </span>
          <h6 className='text-[#ccc]'>Canada</h6>
          <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, placeat.
          </p>

          <div className='company flex items-center gap-2 m-2' >
            <img src={logo1} alt="Company Logo" className='w-[20%]' />
            <span className='text-[14px] py-[1rem] block group-hover:text-white '>Homebor Corp</span>
          </div>

          <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>
            Apply Now
          </button>


        </div> */}