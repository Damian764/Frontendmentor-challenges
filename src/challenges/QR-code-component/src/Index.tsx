import './scss/_index.scss';
import qrImage from './images/image-qr-code.png';

const Index = () => {
    return (
        <section id='qr__component'>
            <main className='qr__component-challenge'>
                <div className='qr__component-card'>
                    <div className='qr__component-image'>
                        <img src={qrImage} alt="" />
                    </div>
                    <h2 className='qr__component-title'>
                        Improve your front-end skills by building projects
                    </h2>
                    <div className='qr__component-description'>
                        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
                    </div>
                </div>
            </main>
            <footer>
                <div className='copyright'>
                    Challenge by <a href="https://www.frontendmentor.io/" target="_blank" rel="noreferrer">Frontend Mentor</a>.
                </div>
                <div className='copyright'>
                    Coded by <a href="https://www.frontendmentor.io/profile/Damian764">Damian</a>
                </div>
            </footer>
        </section>
    )
}

export default Index