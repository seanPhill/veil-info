import axios from "axios";
import { useState, useEffect } from "react";

const Currentblock = () => {
  const [blockchainInfo, setBlockchainInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:3001/api/GetBlockchainInfo/',
      );
      console.log(result.data)
      setBlockchainInfo({ blocks: result.data.blocks });
    };

    fetchData(); // Initial fetch
    const intervalId = setInterval(fetchData, 15000); // Fetch every 15 seconds

    return () => clearInterval(intervalId); // Clean up the interval when the component unmounts
  }, []);

  return (
    <>
     {blockchainInfo && (
      <h4>The current Block number is <p>{blockchainInfo.blocks}</p>VEIL has a<p>1 minute block time</p>and is a<p>50/50 PoS/PoW Hybrid</p></h4>
     )}
    </>
  );
};

export default Currentblock;

