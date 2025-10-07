import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export function FloorPlanDesigner() {
  const { setTitle } = useOutletContext() || {};

  useEffect(() => {
    setTitle && setTitle("Floor Plan");
  }, [setTitle]);

  return <div>testing123</div>;
}
