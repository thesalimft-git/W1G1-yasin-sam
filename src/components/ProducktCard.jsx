import { useState, useEffect } from "react";

export default function ProductCard() {

    const [seconds, setSeconds] = useState(59);
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prev) => {
                if (prev === 0) return 59; // restart or you can stop it
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className="produckt-card">
            <div>
                <div className="d-flex item-start">
                    <div className="produckt-card-img-area">
                        <img src="/assets/img/phons/mobail1.webp" alt="" />
                        <p>special sale</p>
                        <p>20:10: {seconds}</p>
                    </div>
                    <div>
                        <p className="produckt-card-tetle">iphone 17 orange 1tb </p>
                        <p><i class="bi bi-palette"></i>+orange</p>
                        <p>digikala</p>
                        <p><i class="bi bi-mailbox-flag"></i>post</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
