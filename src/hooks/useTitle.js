import { useEffect } from "react";

function useTitle(title) {
    useEffect(()=>{
        document.title = `${title} - Rangpur Gen-Z Online Shop`;
    }, [title])
}

export default useTitle;