import Image from 'next/image'

import CarlaPhoto from '@/images/avatars/CarlaPhoto.png'
import LeonardoPhoto from '@/images/avatars/LeonardoPhoto.png'
import SebreaLogo from '@/images/logos/SebraeLogo.png'

const people = [
  {
    name: 'Carla Lannes',
    role: 'CFO - Gestora Financeira',
    imageUrl: CarlaPhoto,
    bio: 'Formação em Administração com Experiência de mais de 16 anos na área Financeira, com forte conhecimento em gestão e estratégia financeira. Habilidade em operacionalizar Unidades de Negócios e produtos sob uma perspectiva financeira. Já teve passagem por empresas dos seguintes segmentos: Bancário, Mídia, Educação',
    twitterUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/carla-da-s-o-lannes-9802a753/',
  },
  {
    name: 'Leonardo Oliveira',
    role: 'CFO - Gestor Financeiro',
    imageUrl: LeonardoPhoto,
    bio: 'Formação em Matemática pelo IPA, com mais de 10 anos de experiência na área financeira de empresas de médio e grande porte. Atuei na área de Tesouraria, contas a pagar, a receber, custódia de renda variável e SPB – Sistema de Pagamentos Brasileiro, nos segmentos bancário, energético, cooperativa de crédito e investimento.',
    twitterUrl: '#',
    linkedinUrl: 'https://www.linkedin.com/in/leonardo-oliveira-financeiro/',
  },

  // More people...
]

export function Team() {
  return (
    <section id="team" aria-label="Nosso time" className="">
      <div className="bg-white py-24 md:py-32 lg:py-40">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl border-b-4 border-[#beaa6c]">
              Sobre a Leadder
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Confira o time que irá prestar todo o suporte necessário para o sucesso de sua empresa.
            </p>

            <hr className="mt-8 border-slate-300" />

            <div className="mt-16 flex flex-col items-center justify-center">
              <h2 className="text-md mt-8 font-bold  tracking-tight text-gray-900 ">
                Homologado pelo:
              </h2>
              <Image
                className="w-90 aspect-[3/2] rounded-2xl object-cover"
                src={SebreaLogo}
                width={0}
                height={0}
                alt=""
              />
            </div>
          </div>
          <ul
            role="list"
            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <Image
                  className="m-auto rounded-2xl object-cover"
                  src={person.imageUrl}
                  width={0}
                  height={0}
                  alt=""
                />
                <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {person.role}
                </p>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  {person.bio}
                </p>
                <ul role="list" className="mt-6 flex gap-x-6">
                  <li>
                    <a
                      href={person.linkedinUrl}
                      target="_blank"
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
