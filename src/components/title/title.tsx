import { ReactElement } from "react";
import { Text } from "./title.style";

const Title = ({ children }: { children: ReactElement | String}) => (
  <Text>{children}</Text>
);

export default Title;
