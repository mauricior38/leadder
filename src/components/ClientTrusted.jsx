
import Image from 'next/image'

import neodigital from '@/images/logos/ndigital.png';
import feito from '@/images/logos/feito.png';
import startta from '@/images/logos/startta.png';
import genessis from '@/images/logos/genesis.png';

export function ClientTrusted() {
    return (
      <section id="trusted" className="bg-white p-14 sm:py-20">
        <div className="mx-auto max-w-7xl  lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none ">
            <h2 className="text-2xl font-semibold leading-8 text-slate-900 ">
              Clientes que confiam em nós
            </h2>
            <div className="mx-auto mt-6 grid grid-cols-2 flex items-start  gap-x-8 gap-y-10 sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:grid-cols-4" >
              <Image
                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                src={neodigital}
                alt="Neo Digital"
                width={158}
                height={48}
              />
              <Image
                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                src={feito}
                alt="Agência Feito"
                width={158}
                height={48}
              />
             <Image
                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                src={startta}
                alt="Startta Redes Sociais"
                width={158}
                height={48}
              />
              
              <Image
                className="col-span-2 max-h-12 w-full object-contain object-left lg:col-span-1"
                src={genessis}
                alt="Genessis"
                width={158}
                height={48}
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
  