import { Zap } from "lucide-react";
import { Button } from "../ui/button";


interface ActionButtonProps {
    width: string;
    padding?: string;
    handleClick: () => void;
    text: string;
}

export default function ActionButton({ width, padding, handleClick, text }: ActionButtonProps) {
    return (
        <Button
            type="button"
            className={`text-lg md:text-base cursor-pointer bg-principal hover:bg-principal-hover text-principal-foreground ${width} ${padding ? padding : 'py-7 md:py-6'}`}
            onClick={handleClick}>
            <Zap />
            {text}
        </Button>
    );
}
