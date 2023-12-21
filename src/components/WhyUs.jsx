import {
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

import Image from 'next/image'

import grouSteps from '../images/logos/group4Steps.png'

export function WhyUs() {
  return (
    <section id="whyus" aria-label="Como Funciona?" >
      <div className="flex items-center justify-center p-8 bg-slate-100 relative flex-col">
        <h1 className="mb-16 text-2xl font-bold">COMO FUNCIONA</h1>
        <Image
          className="relative"
          src={grouSteps}
          alt=""
          width={400}
          unoptimized
        />

        <div className="lg:text-lg text-lg font-bold flex lg:gap-8 gap-8 lg:absolute w-7/12 grid justify-items-stretch mt-8">
            <h2 className="lg:w-72  lg:ml-20 text-center ellipsis justify-self-center lg:justify-self-start">Painel de controle e monitoramento dos números</h2>
            <h2 className="lg:w-72  text-center ellipsis justify-self-center lg:justify-self-end ">Acordo das rotinas e processamento das informações </h2>
            <h2 className="lg:w-64  text-center ellipsis justify-self-center lg:justify-self-start" >Conversamos com você para mapear e organizar os números</h2>
            <h2 className="lg:w-72  text-center ellipsis justify-self-center lg:justify-self-end">Configuração do programa que usamos para gestão e controles</h2>
        </div>
      </div>
    </section>
  )
}
