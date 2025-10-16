import { TypeAnimation } from "react-type-animation";

export default function TypeAnimationStyled() {
  return (
    <TypeAnimation
      sequence={[
        "We produce food for Mice",
        1000,
        // "We produce food for Hamsters",
        // 1000,
        // "We produce food for Guinea Pigs",
        // 1000,
        // "We produce food for Chinchillas",
        // 1000,
      ]}
      wrapper="span"
      speed={50}
      className="text-2xl inline-block font-semibold text-gray-800"
      //   repeat={Infinity}
    />
  );
}
