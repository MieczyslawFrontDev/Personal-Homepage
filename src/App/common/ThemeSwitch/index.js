import { useDispatch, useSelector } from "react-redux"
import { Button, IconWrapper, Wrapper, Text, Box, Icon } from "./styled"
import { selectIsDarkTheme, toggleTheme } from "./themeSlice";

export const ThemeSwitch = () => {

  const dispatch = useDispatch();
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <Wrapper>
    <Button onClick={() => dispatch(toggleTheme())}>
      <Text>Dark Mode {isDarkTheme ? "ON" : "OFF"}</Text>
      <Box>
        <IconWrapper moveToRight={isDarkTheme}>
          <Icon />
        </IconWrapper>
      </Box>
    </Button>
    </Wrapper>
  );
};