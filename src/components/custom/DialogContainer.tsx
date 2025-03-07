import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"

interface DialogContainerProps {
    dialogTitle: string;
    dialogDescription: string;
    dialogAction: string;
    isDialogOpen: boolean;
    setDialogOpen: (open: boolean) => void;
    handleClick: () => void;
}

export default function DialogContainer({ dialogTitle, dialogDescription, dialogAction, isDialogOpen, setDialogOpen, handleClick }: DialogContainerProps) {
    return (
        <AlertDialog open={isDialogOpen} onOpenChange={() => setDialogOpen(!isDialogOpen)}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-foreground">
                        {dialogTitle}
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-md text-muted-foreground">
                        {dialogDescription}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction
                        className="cursor-pointer bg-principal hover:bg-principal-hover text-principal-foreground"
                        onClick={handleClick}>
                        {dialogAction}
                    </AlertDialogAction>
                    <AlertDialogCancel className="cursor-pointer bg-muted-foreground text-principal-foreground px-3 rounded-md text-sm">
                        Cancel
                    </AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
