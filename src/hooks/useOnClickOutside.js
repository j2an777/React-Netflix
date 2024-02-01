import { useEffect } from 'react'

const useOnClickOutside = (ref, handler) => {
    
    useEffect(() => {
        const listener = (event) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler();
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        // 등록된 리스너들 없애주기
        return () => {
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
        };
    }, [ref, handler]);
};

export default useOnClickOutside;
