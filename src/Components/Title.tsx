import React from "react";

type Props = {
    title: string;
}

const Title: React.FC<Props> = ({ title }) => {

  React.useMemo(() => {
    document.title = title;
  }, []);

  return null;
}

export default Title;
