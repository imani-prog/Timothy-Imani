import * as LottieModule from 'lottie-react'
import codingAnimation from '../../assets/animations/coding-animation.json'

const Lottie = LottieModule?.default?.default ?? LottieModule?.default ?? LottieModule

export default function CodingAnimation() {
  return (
    <div className="w-full max-w-md mx-auto">
      <Lottie
        animationData={codingAnimation}
        loop={true}
        autoplay={true}
        className="w-full h-auto"
      />
    </div>
  )
}