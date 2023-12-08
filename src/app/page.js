'use client';

import Image from 'next/image';
import Link from 'next/link';
import TimeLine from './Components/Fragments/TimeLine';
import Testimonial from './Components/Fragments/Testimonial';
import Skills from './Components/Fragments/Skills';
import Services from './Components/Fragments/Services';
import {
  Flask,
  CloudCheck,
  Headset,
  EnvelopeSimple,
  WhatsappLogo,
  MessengerLogo,
} from '@phosphor-icons/react';
import Forms from './Components/Fragments/Form';
import { useRef } from 'react';

export default function Home() {
  const skills = useRef();
  const about = useRef();
  const service = useRef();
  const contact = useRef();

  const HandleToSection = (elmRef) => {
    elmRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <nav className="sticky z-30 top-0 bg-white mb-32">
        <div className="relative flex justify-between max-w-5xl h-16 mx-auto">
          <div className="my-auto font-bold text-xl">
            <Link href="/">
              krish<span className="text-red-500">4alex</span>
            </Link>
          </div>
          <ul className="my-auto font-semibold flex gap-10 text-md">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#" onClick={() => HandleToSection(about)}>
                About
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => HandleToSection(service)}>
                Service
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => HandleToSection(skills)}>
                Skills
              </Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#" onClick={() => HandleToSection(contact)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <section className="relative max-w-5xl mx-auto mb-32">
        <div className="flex">
          <div className="w-6/12 my-auto">
            <div className="font-semibold text-5xl mb-10">
              <h1>
                krish<span className="text-red-500">4alex</span>
              </h1>
            </div>
            <div className="font-semibold flex gap-2 mb-8">
              <div className="h-[2px] w-16 bg-black my-auto"></div>
              <p className="">User Interface Designer</p>
            </div>
            <div className="max-w-[420px] mb-16">
              <p>
                I'm UI/UX Designer in lucknow, and i'm very passionate and
                dedicated to my work..
              </p>
            </div>
            <button className="bg-black text-white w-40 px-4 py-3 rounded-xl">
              say Hello
            </button>
          </div>
          <div className="w-6/12 my-auto">
            <div className="absolute top-0 right-10 w-80 h-80 bg-slate-400 rounded-tl-[200px] rounded-bl-[150px] rounded-tr-[100px] rounded-br-[160px] z-20">
              <Image
                src="hero.jpg"
                width={500}
                height={500}
                className="h-full bg-slate-400 rounded-tl-[200px] rounded-bl-[150px] rounded-tr-[100px] rounded-br-[160px] "
                alt="hero-alex"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center mb-16">
        <p className="text-[14px] text-gray-600">scroll down</p>
      </div>
      <section className="relative max-w-5xl mx-auto mb-32" ref={about}>
        <div className="flex justify-center mb-16">
          <div className="flex flex-col text-center gap-4">
            <h1 className="font-bold text-4xl tracking-wider">About me</h1>
            <p className="text-[14px] text-gray-600">My introduction</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-6/12 my-auto">
            <div className=" bg-slate-400 rounded-xl h-[340px] mx-10">
              <Image
                src="hero.jpg"
                height={500}
                width={500}
                className="w-full rounded-xl h-[340px]"
                alt="hero-alex"
              />
            </div>
          </div>
          <div className="w-6/12 my-auto">
            <div className="flex gap-4 text-center mb-14">
              <div className="flex flex-col w-1/3 h-32 rounded-xl border-[1px] border-gray-800">
                <div className="my-auto">
                  <Flask width="bold" size={32} />
                  <h1 className="text-md mb-2">Experience</h1>
                  <p className="text-sm text-gray-400">1+ years</p>
                </div>
              </div>
              <div className="flex flex-col w-1/3 h-32 rounded-xl border-[1px] border-gray-800">
                <div className="my-auto">
                  <CloudCheck width="bold" size={32} />
                  <h1 className="text-md mb-2">Completed</h1>
                  <p className="text-sm text-gray-400">10+ Projects</p>
                </div>
              </div>
              <div className="flex flex-col w-1/3 h-32 rounded-xl border-[1px] border-gray-800">
                <div className="my-auto">
                  <Headset width="bold" size={32} />

                  <h1 className="text-md mb-2">Completed</h1>
                  <p className="text-sm text-gray-400">10+ Projects</p>
                </div>
              </div>
            </div>
            <div className="max-w-[420px] mb-10 px-4">
              <p>
                UI/UX Designer,create web pages UI/UX userinterface, i have
                years of experience and many clients are happy with the projects
                carried out.
              </p>
            </div>
            <div className="px-4">
              <button className="bg-black text-white w-40 px-4 py-3 rounded-xl">
                Donwload CV
              </button>
            </div>
          </div>
        </div>
      </section>
      <Skills />
      <Services />
      <TimeLine />
      <Testimonial />
      <section className="relative max-w-5xl mx-auto mb-32" ref={contact}>
        <div className="flex justify-center mb-16">
          <div className="flex flex-col text-center gap-4">
            <h1 className="font-bold text-4xl tracking-wider">Contact Me</h1>
            <p className="text-[14px] text-gray-600">Get in touch</p>
          </div>
        </div>
        <div className="flex justify-between mb-16">
          <div className="w-6/12 flex flex-col text-center gap-4 px-14">
            <p className="font-semibold">Talk to me</p>
            <div className="flex flex-col w-full h-40 border border-gray-500 rounded-xl ">
              <div className="my-auto">
                <div>
                  <EnvelopeSimple width="bold" size={40} weight="bold" />
                </div>
                <h1 className="text-md mb-2">Email</h1>
                <p className="text-sm text-gray-400">user@email.com</p>
              </div>
            </div>

            <div className="flex flex-col w-full h-40 border border-gray-500 rounded-xl ">
              <div className="my-auto">
                <diz>
                  <WhatsappLogo width="bold" size={40} weight="bold" />
                </diz>
                <h1 className="text-md mb-2">Whatsapp</h1>
                <p className="text-sm text-gray-400">+62 3231 42141</p>
              </div>
            </div>
            <div className="flex flex-col w-full h-40 border border-gray-500 rounded-xl ">
              <div className="my-auto">
                <diz>
                  <MessengerLogo width="bold" size={40} weight="bold" />
                </diz>
                <h1 className="text-md mb-2">Messenger</h1>
                <p className="text-sm text-gray-400">user.fb123</p>
              </div>
            </div>
          </div>
          <div className="w-6/12 flex flex-col text-center gap-4">
            <p className="font-semibold">Write Me Your Project</p>

            <Forms />
          </div>
        </div>
      </section>
      <footer className="relative max-w-5xl mx-auto mb-32">
        <div className="flex justify-center mb-16">
          <div className="flex flex-col text-center gap-4">
            <div className="font-semibold text-4xl mb-5">
              <h1>
                krish<span className="text-red-500">4alex</span>
              </h1>
            </div>
            <ul className="my-auto font-semibold flex gap-14 text-md">
              <li>
                <Link href="#">projects</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Services</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
