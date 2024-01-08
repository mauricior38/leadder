import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/Container'
// import { Logo } from '@/components/Logo'

import Logo from '@/images/logos/LeadderLogo.png'

import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
            <NavLink href="#team">Sobre nós</NavLink>
              <NavLink href="#features">O que fazemos</NavLink>
              <NavLink href="#whyus">Porque nós?</NavLink>
              <NavLink href="#howitworks">Como funciona?</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Leadder. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  )
}
