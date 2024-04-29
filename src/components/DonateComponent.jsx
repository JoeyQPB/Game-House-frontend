function DonateComponent() {
    return (
        <>
            <div style={{ background: '#A9A9A9', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
                <h3 style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '10px' }}>DONATE</h3>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="src/assets/donate-pix.jpg" alt="QR Code" style={{ width: '16rem', marginBottom: '10px' }} />
                        <p style={{ textAlign: 'center', fontSize: '10px' }}>
                            00020126400014br.gov.bcb.pix0111009893535670203Pix5204000053039865802BR5925JOEY QUADROS PACHECO BAST6015VITORIA DA CONQ62240520DonatesFromGameHouse6304B8E7
                        </p>
                    </div>
                    <div style={{ maxWidth: '400px', marginLeft: '20px' }}>
                        <p style={{ textAlign: 'center' }}>
                            Help support our software development efforts! Your generous donations enable us to continue creating valuable tools and resources for our community. Simply scan the QR code or copy the code below to contribute. I promise that all money collected goes towards development costs which include pizza, burgers and hardware for bitcoin mining. Thank you for your support!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DonateComponent;
