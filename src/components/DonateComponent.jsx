function DonateComponent() {

    const divStyle = {
        border: '1px solid #ccc',
        padding: '20px',
        backgroundColor: '#d3d3d3',
        color: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    };

    const containerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '10px',
        backgroundColor: '#565656',
        color: '#000',
        padding: '20px',
    };

    return (
        <>
            <div style={containerStyle}>
                <div style={divStyle}>
                    <img src="src/assets/donate-pix.jpg" alt="QR Code" style={{ width: '16rem', marginBottom: '10px' }} />
                    <p style={{ textAlign: 'center', fontSize: '10px', maxWidth: '35vw' }}>
                        00020126400014br.gov.bcb.pix0111009893535670203Pix5204000053039865802BR5925
                        JOEY QUADROS PACHECO BAST6015VITORIA DA CONQ62240520DonatesFromGameHouse6304B8E7
                    </p>
                </div>

                <div style={{ ...divStyle, textAlign: 'center', fontSize: '1.2rem' }}>
                    <p>
                        Help support our software development efforts! Your generous donations enable us to continue creating valuable tools and resources for our community. Simply scan the QR code or copy the code below to contribute. I promise that all money collected goes towards development costs which include pizza, burgers and hardware for bitcoin mining.
                    </p>
                    <p>Thanks for support!</p>
                </div>

                <div style={divStyle}>
                    <img src="src/assets/gatopidao.jpg" alt="gatinho" style={{ width: '100%', height: '100%', marginBottom: '10px' }} />
                </div>
            </div>
        </>
    );
}

export default DonateComponent;
