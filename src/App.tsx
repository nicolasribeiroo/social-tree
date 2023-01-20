import styled from "styled-components";
import githubLogo from "./assets/github.svg";
import instagramLogo from "./assets/instagram.svg";
import linkedinLogo from "./assets/linkedin.svg";
import twitchLogo from "./assets/twitch.svg";
import twitterLogo from "./assets/twitter.svg";
import { LinkButton } from "./components/LinkButton/LinkButton";
import { GlobalStyle } from "./styles/global";

export default function App() {
  return (
    <Main>
      <Container>
        <UserImageBorder>
          <UserImage src="https://www.niskii.dev/assets/images/avatar-512.png" />
        </UserImageBorder>

        <UserNickname>@whoisniskii</UserNickname>

        <LinkButton content="GitHub" href="https://github.com/whoisniskii" />
        <LinkButton
          content="Spotify"
          href="https://open.spotify.com/user/wu6vyqmi5jig37nh6nkp3wzhg"
        />
        <LinkButton content="Twitter" href="https://twitter.com/niskiitwc" />
        <LinkButton content="Portfolio" href="https://www.niskii.dev/" />

        <SocialMedia>
          <a
            href="https://twitter.com/niskiitwc"
            rel="noopener noreferrer"
            target="_blank"
          >
            <SocialMediaImage src={twitterLogo} alt="Twitter" />
          </a>

          <a
            href="https://www.twitch.tv/niskiitwc"
            rel="noopener noreferrer"
            target="_blank"
          >
            <SocialMediaImage src={twitchLogo} alt="Twitch" />
          </a>

          <a
            href="https://www.instagram.com/niskiitwc"
            rel="noopener noreferrer"
            target="_blank"
          >
            <SocialMediaImage src={instagramLogo} alt="Instagram" />
          </a>

          <a
            href="https://https://www.linkedin.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <SocialMediaImage src={linkedinLogo} alt="LinkedIn" />
          </a>

          <a
            href="https://www.github.com/whoisniskii"
            rel="noopener noreferrer"
            target="_blank"
          >
            <SocialMediaImage src={githubLogo} alt="Github" />
          </a>
        </SocialMedia>
      </Container>
      <GlobalStyle />
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const UserImageBorder = styled.div`
  width: 214px;
  height: 214px;
  border-radius: 50%;
  border: 2px solid #bb99dd;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserNickname = styled.h1`
  text-align: center;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #bb99dd;
`;

const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 42px;

  @media (max-width: 512px) {
    gap: 1.5rem;
  }
`;

const SocialMediaImage = styled.img`
  width: 28px;
  height: 28px;
`;
