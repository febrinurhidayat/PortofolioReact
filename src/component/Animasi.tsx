import { AnimatedBeamDemo } from "@/component/Animated";
import { IconCloudDemo } from "@/component/IconCloud";
import { SparklesTextDemo } from "./MagicUi";

const Animasi = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-white rounded-lg container">
      <div className="flex-1 flex justify-center md:justify-start mb-4 md:mb-0">
        <IconCloudDemo />
      </div>
      <div className="flex-1 flex justify-center mb-4 md:mb-0">
        <SparklesTextDemo />
      </div>
      <div className="flex-1 flex justify-center md:justify-end">
        <AnimatedBeamDemo />
      </div>
    </div>
  );
};

export default Animasi;
