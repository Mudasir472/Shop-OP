import "./BestQuality.css"
export default function ({}) {
    return (
        <>
            <div className="bestQuality">
                <div className="ship">
                    <i class="bi bi-truck"></i>
                    <div className="free">
                        <h4>Free Shipping</h4>
                        <p>When ordering over $100</p>
                    </div>
                </div>
                <div className="ship">
                <i class="bi bi-arrow-clockwise"></i>
                    <div className="free">
                        <h4>Free Return</h4>
                        <p>Get Return within 30 days</p>
                    </div>
                </div>
                <div className="ship">
                <i class="bi bi-shield-check"></i>
                    <div className="free">
                        <h4>Secure Payment</h4>
                        <p>100% Secure Online Payment</p>
                    </div>
                </div>
                <div className="ship">
                <i class="bi bi-award"></i>
                    <div className="free">
                        <h4>Best Quality</h4>
                        <p>Original Product Guarenteed</p>
                    </div>
                </div>
            </div>
        </>
    )
}