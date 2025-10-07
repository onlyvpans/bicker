import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export function Home() {
  const { setTitle } = useOutletContext() || {};

  useEffect(() => {
    setTitle && setTitle("Home");
  }, [setTitle]);

  return (
    <div>
      <div>Stop bickering</div>
      <div></div>
      <div></div>
    </div>
  );
}
