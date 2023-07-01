import Image from "next/image";
import diagram from "../../images/arch.png";

// tests out rendering images
export default function Test1() {
  return (
    <div className="container">
      <div className="row mb-3">
        Testing images. This image represents a architectural diagram of highly
        scalable infrastructure.
      </div>
      <div className="row">
        <Image className="rounded-xl" src={diagram} alt="Architecture" />
      </div>
    </div>
  );
}
