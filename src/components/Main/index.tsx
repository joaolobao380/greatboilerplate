import Link from 'next/link';
import * as S from './styles';

const Main = ({
  title = 'Great Boilerplate!',
  description = 'NextJs, ReactJs, TypeScript, Eslint, Prettier, Styled components,Test library,Cypress, Husky, Lint staged, Storybook',
  author = 'João Victor Lobão',
}) => (
  <S.Wrapper>
    <S.Logo src="/img/Logo.svg" alt="Bo, boilerplate graphic art" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <Link href="https://github.com/joaolobao380" replace>
      <S.GitHub>
        <S.GitHubImg src="/img/GithubImg.svg" alt="GitHub image" />
        <S.GitHubText>GitHub</S.GitHubText>
      </S.GitHub>
    </Link>
    <Link href="https://www.linkedin.com/in/jo%C3%A3o-victor-lob%C3%A3o-1b6b5012a/">
      <S.Linkedin>
        <S.LinkedinImg src="/img/LinkedinImg.svg" alt="Linkedin image" />
        <S.LinkedinText>Linkedin</S.LinkedinText>
      </S.Linkedin>
    </Link>
    <S.Author>Created by {author}</S.Author>
  </S.Wrapper>
);

export default Main;
