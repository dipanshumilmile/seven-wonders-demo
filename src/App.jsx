import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'


const users = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg",
    intro: "Ancient Egypt’s Great Pyramid remains the only surviving original wonder, massive, mysterious, and historically significant.",
    name: "Great Pyramid of Giza"
  },
  {
    img: "https://images.unsplash.com/photo-1608037521277-154cd1b89191?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro: "China’s Great Wall stretches across mountains and deserts, showcasing ancient engineering, protection, culture, and enduring strength.",
    name: "Great Wall of China"
  },
  {
    img: "https://images.unsplash.com/photo-1579606032821-4e6161c81bd3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro: "Petra’s stunning rock-cut structures highlight Nabatean ingenuity, blending architecture, desert history, culture, and ancient craftsmanship.",
    name: "Petra"
  },
  {
    img: "https://images.unsplash.com/photo-1683331404237-64c763c70f5b?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro: "Christ the Redeemer towers above Rio, symbolizing faith, peace, cultural unity, and Brazil’s iconic scenic landscape.",
    name: "Christ the Redeemer"
  },
  {
    img: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro: "Machu Picchu showcases Incan brilliance with breathtaking mountain views, ancient architecture, culture, and enduring historical significance.",
    name: "Machu Picchu"
  },
  {
    img: "https://images.unsplash.com/photo-1561577101-aa749bffbb70?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro: "Chichen Itza’s grand pyramid reflects Mayan intelligence, astronomy, culture, rituals, and enduring architectural mastery across centuries.",
    name: "Chichen Itza"
  },
  {
    img: "https://images.unsplash.com/photo-1585506942812-e72b29cef752?q=80&w=728&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    intro: "India’s Taj Mahal symbolizes eternal love with breathtaking marble architecture, symmetry, craftsmanship, gardens, and unmatched historical beauty.",
    name: "Taj Mahal"
  }
];

const App = () => {
  return (
    <div  >
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App
