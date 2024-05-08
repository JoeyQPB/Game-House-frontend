import NavBarFrg from '../components/NavBarFrg'
import DonateComponent from '../components/DonateComponent.jsx'

const DonatePage = () => {
    return (
        <>
            <NavBarFrg />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '1.5rem',
                gap: '1rem',
            }}>
                <h2 style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '10px', color: "snow" }}>DONATE</h2>
                <DonateComponent />
            </div>
        </>
    )
}

export default DonatePage;