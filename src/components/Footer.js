import logo from '../image/hoobank.svg' 
import { usefull,Partner,Community, socialMedia } from '../constants';

function Footer(){
    return (
        <>
        <div className="zone">
            <h1 className="footer-title">Let’s try our service now!</h1>
            <p className="footer-text">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            <button className="footer-btn">Get Started</button>
        </div>
        <div className="footer">
            <div className="footer-logo">
            
                <img src={logo} alt="logo"/>
                <h1 id='logo-title'>HooBank</h1>
            
                <h3>A new way to make the payments easy, reliable and secure.</h3> 
            </div>
        <div className='ul-container'>
        <ul className='list1'>

            <h1 className='list-title'>usefull Links</h1>
            {usefull.map((el)=>{
                return <li key={el.u1} className='list-text'>{el.u1}</li>
            }
            )}
        </ul>

        <ul className='list2'>

            <h1 className='list-title'>Community</h1>
            {Community.map((el)=>{
                return <li key={el.u1} className='list-text'>{el.u1}</li>
            }
            )}
        </ul>

        <ul className='list3'>

            <h1 className='list-title'>Partner</h1>
            {Partner.map((el2)=>{
                return <li key={el2.u1} className='list-text'>{el2.u1}</li>
            }
            )}
        </ul>
        </div>
        </div>
        <div className='br'></div>
        <summary className='ft-footer'>
            <div className='txt'>Copyright - 2021 HooBank. All Rights Reserved.</div>
            <div className='icon'>
                {socialMedia.map((el)=>{
                    return <a href={el.link} className={el.id} key={el.id}><img src={el.icon} alt={el.id}/></a>
                })}
            </div>
        </summary>
        </>
    )
}
export default Footer ;