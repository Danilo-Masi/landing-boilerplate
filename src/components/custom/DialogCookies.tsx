import { useAppContext } from "@/context/AppContext";
import DialogContainer from "./DialogContainer";

export default function DialogCookies() {

    const { isCookiesDialogOpen, setCookiesDialogOpen } = useAppContext();

    const handleCookiesAccept = () => {
        localStorage.setItem('Cookies-dialog', 'true');
        setCookiesDialogOpen(false);
    }

    return (
        <DialogContainer
            dialogTitle="Cookie policy"
            dialogDescription="We do not use any cookies on our platform except for a third-party cookie from Simple Analytics to track page views. This cookie helps us understand the traffic to our website, but we do not track any personal information. By clicking 'Accept', you consent to the use of this third-party cookie. If you do not accept, your experience will not be affected, but we won't be able to track page views."
            dialogAction="Accept"
            isDialogOpen={isCookiesDialogOpen}
            setDialogOpen={setCookiesDialogOpen}
            handleClick={handleCookiesAccept} />
    );
}
