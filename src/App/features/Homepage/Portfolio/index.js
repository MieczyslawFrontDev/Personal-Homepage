import {
  Wrapper,
  Caption,
  Paragraph,
  Header,
  GitHubIcon,
} from "./styled";
import { Content } from "./Content/content";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  axiosGetRepositories,
  selectRepositories,
  selectRepositoriesStatus,
} from "../homepageSlice";

export const Portfolio = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(axiosGetRepositories());
  }, [dispatch]);

  const repositoriesStatus = useSelector(selectRepositoriesStatus);
  const repositories = useSelector(selectRepositories);

  return (
    <Wrapper>
      <Header>
        <GitHubIcon />
        <Caption>Portfolio</Caption>
        <Paragraph>My recent projects</Paragraph>
      </Header>
      <Content status={repositoriesStatus} repositories={repositories} />
    </Wrapper>
  );
};
