import { Button } from "./call-to-action.style";

interface Props {
    handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    text?: String;
}

const CallToAction = ({ text, handleClick }: Props) => (
    <Button onClick={handleClick}>{text || 'Inscreva-se'}</Button>
);

export default CallToAction;
