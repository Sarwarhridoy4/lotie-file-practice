import Lottie from "lottie-react";
import loader from "../src/assets/loading_ring_medium.json";

const App = () => {
  return (
    <div>
      <Lottie animationData={loader} style={{width:"250px"}}></Lottie>
    </div>
  );
};

export default App;
