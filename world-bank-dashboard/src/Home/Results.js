import React, { useEffect, useState } from "react";

export default function Results(props) {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    setData(props.results);
  }, []);

  if (!data) return <div>Nothing to see here...</div>;

  return <div></div>;
}
