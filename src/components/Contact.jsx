'use client';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export function Contact() {
const form = useRef();
    
  async function SendEmail(e) {
    e.preventDefault();

   await emailjs.sendForm("service_r52tei7", "template_37drz4o", form.current, "Z0BOGblabxyKQI71d")
      .then((result) => {
         alert("Sua mensagem foi enviada com sucesso")
         document.getElementById("sendBtn").disabled = true;
         document.getElementById("sendBtn").classList.add("cursor-not-allowed");
      }, (error) => {
        console.log(result.text);
      });


  }

  return (
    <section id="contact" className="bg-[#beaa6c] p-20 sm:py-20">
      
      <form ref={form} onSubmit={SendEmail}>
        <div className="space-y-12">
          <div className="pb-12">
            <h1 className="text-center text-3xl font-semibold leading-7 text-gray-900">
              Deixe sua mensagem
            </h1>

            <div className="mt-10 flex flex-wrap gap-8 lg:flex-nowrap">
              <div className="w-full">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Nome
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                      <input
                        type="text"
                        name="user_name"
                        id="username"
                        autoComplete="username"
                        required
                        className="block flex-1 rounded-md border-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="Telefone"
                    className="mt-2 block text-sm font-medium leading-6 text-gray-900"
                  >
                    Telefone
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                      <input
                        type="number"
                        name="user_telefone"
                        id="telefone"
                        required
                        className="block flex-1 rounded-md border-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="mt-2 block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                      <input
                        type="email"
                        name="user_email"
                        id="email"
                        required
                        className="block flex-1 rounded-md border-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Escreva sua mensagem
                </label>
                <div className="mt-2 h-full">
                  <textarea
                    id="mensagem"
                    name="message"
                    required
                    className="block h-full w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />

                  <button
                    type="submit"
                    value="Send"
                    id="sendBtn"
                    className=" mt-2 rounded-md bg-[#202741] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#27335d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}
