import AnimateOnScroll from '../utils/AnimateOnScroll'
import TextHoverEffect from '../utils/TextHoverEffect'

import './css/_index.scss'

const Index = () => {
  return (
    <>
      <div className="hero">
        <AnimateOnScroll
          options={{
            type: 'slide-in',
            delay: 100
          }}
        >
          <h1><TextHoverEffect text="Hi there!"/></h1>
        </AnimateOnScroll>
        <AnimateOnScroll
          options={{
            type: 'slide-in-left',
            delay: 300
          }}
          reappear>
          <p>My name is Damian and I'm a frontend engineer</p>
        </AnimateOnScroll>
      </div>
      <div className="about-me container">
        <h2>About me section</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim eos debitis quaerat quam vero distinctio? Consequatur repellat nisi minus alias! Aliquid nemo similique dicta quia aliquam hic molestiae minima molestias?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim eos debitis quaerat quam vero distinctio? Consequatur repellat nisi minus alias! Aliquid nemo similique dicta quia aliquam hic molestiae minima molestias?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim eos debitis quaerat quam vero distinctio? Consequatur repellat nisi minus alias! Aliquid nemo similique dicta quia aliquam hic molestiae minima molestias?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim eos debitis quaerat quam vero distinctio? Consequatur repellat nisi minus alias! Aliquid nemo similique dicta quia aliquam hic molestiae minima molestias?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim eos debitis quaerat quam vero distinctio? Consequatur repellat nisi minus alias! Aliquid nemo similique dicta quia aliquam hic molestiae minima molestias?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim eos debitis quaerat quam vero distinctio? Consequatur repellat nisi minus alias! Aliquid nemo similique dicta quia aliquam hic molestiae minima molestias?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim eos debitis quaerat quam vero distinctio? Consequatur repellat nisi minus alias! Aliquid nemo similique dicta quia aliquam hic molestiae minima molestias?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim eos debitis quaerat quam vero distinctio? Consequatur repellat nisi minus alias! Aliquid nemo similique dicta quia aliquam hic molestiae minima molestias?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim eos debitis quaerat quam vero distinctio? Consequatur repellat nisi minus alias! Aliquid nemo similique dicta quia aliquam hic molestiae minima molestias?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim eos debitis quaerat quam vero distinctio? Consequatur repellat nisi minus alias! Aliquid nemo similique dicta quia aliquam hic molestiae minima molestias?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim eos debitis quaerat quam vero distinctio? Consequatur repellat nisi minus alias! Aliquid nemo similique dicta quia aliquam hic molestiae minima molestias?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim eos debitis quaerat quam vero distinctio? Consequatur repellat nisi minus alias! Aliquid nemo similique dicta quia aliquam hic molestiae minima molestias?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim eos debitis quaerat quam vero distinctio? Consequatur repellat nisi minus alias! Aliquid nemo similique dicta quia aliquam hic molestiae minima molestias?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim eos debitis quaerat quam vero distinctio? Consequatur repellat nisi minus alias! Aliquid nemo similique dicta quia aliquam hic molestiae minima molestias?</p>
      </div>
    </>
  )
}

export default Index