import { LinkButtonContainer, LinkButtonContent } from "./styles";

type LinkButtonProps = {
  content: string;
  href: string;
};

export function LinkButton({ content, href }: LinkButtonProps) {
  return (
    <LinkButtonContainer href={href} rel="noopener noreferrer" target="_blank">
      <LinkButtonContent>{content}</LinkButtonContent>
    </LinkButtonContainer>
  );
}
