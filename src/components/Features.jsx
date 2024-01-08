/* eslint-disable @next/next/no-img-element */
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'

const features = [
  {
    name: 'Planejamento orçamentário: ',
    description:
      'Essa prática auxilia na tomada de decisões estratégicas, promovendo o equilíbrio entre receitas e despesas.',
    // icon: CloudArrowUpIcon,
  },
  {
    name: 'Controle de Fluxo de Caixa: ',
    description: 'Essa ferramenta proporciona visibilidade sobre a liquidez, permite antecipar desafios financeiros e embasa decisões estratégicas para garantir a saúde financeira da organização.',
    // icon: LockClosedIcon,
  },
  {
    name: 'Gestão do Contas a Pagar e Contas a Receber: ',
    description: ' Envolve o controle eficiente dos compromissos a serem quitados e das receitas a serem recebidas.',
    // icon: ServerIcon,
  },
  {
    name: 'Conciliação Bancária: ',
    description: 'processo de comparação entre os registros financeiros da empresa e os extratos bancários, visando identificar e corrigir eventuais divergências.',
    // icon: ServerIcon,
  },
  {
    name: 'Emissão de Notas Fiscais: ',
    description: 'Esses documentos atestam a legalidade das operações, detalham produtos ou serviços, e são cruciais para o cumprimento de obrigações fiscais.',
    // icon: ServerIcon,
  },
  {
    name: 'Elaboração de Relatórios Financeiros: ',
    description: 'Processo crucial na comunicação de informações financeiras de uma empresa. Esses relatórios fornecem análises detalhadas sobre o desempenho financeiro, facilitando a tomada de decisões estratégicas. ',
    // icon: ServerIcon,
  },
]

export function Features() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden py-8"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">O que a Leadder Faz</p>
              <dl className="mt-14 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-bold text-[#202741]">
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          
          <div className="flex items-center justify-end lg:order-first">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Aperto de mão"
              className="w-[24rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>

      </Container>
    </section>
  )
}
