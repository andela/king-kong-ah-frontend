Page Layout Default:

```jsx
import Text from "<atoms>/Text/Text";
import { BrowserRouter as Router } from "react-router-dom";
import StyledLink from "<atoms>/StyledLink/StyledLink";
import headerMapper from "<helpers>/headerMapper";

const links = {
  "Sign Up": {
    type: "link",
    action: "/"
  },
  "Sign In": {
    type: "link",
    action: "/"
  }
};
const navItems = headerMapper(links);
<Router>
  <Header navItems={navItems}>
    <Text
      content="true"
      textTransform="uppercase"
      padding="md"
      fontWeight="normal"
      display="inline"
      fontSize="normal"
      textAlign="center"
      color="primary"
    >
      Authors-Haven
    </Text>
  </Header>
</Router>;
```
