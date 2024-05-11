'use client'
import Hero from './_sections/Hero'
import About from './_sections/About'
import Portfolio from './_sections/Portfolio'
import Contact from './_sections/Contact'
import ClipPath from './_components/ClipPath'

export default function Home() {
  return (
    <main>
      <section>
        <Hero />
      </section>
      <ClipPath
        clipPath={'polygon(100% 0, 20% 100%, 100% 100%)'}
        mb={'-2px'}
        bgColor={'primary.dark'}
      />
      <section>
        <About />
      </section>
      <ClipPath
        clipPath={'polygon(80% 0, 0 0, 0 100%)'}
        bgColor={'primary.dark'}
        mt={'-2px'}
      />
      <section>
        <Portfolio />
      </section>
      <ClipPath
        clipPath={'polygon(75% 50%, 100% 0, 100% 100%, 0 100%, 25% 50%)'}
        mb={'-2px'}
        bgColor={'primary.dark'}
      />
      <section>
        <Contact />
      </section>
    </main>
  )
}
