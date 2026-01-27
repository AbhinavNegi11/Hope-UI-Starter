import {useEffect,memo,Fragment} from 'react'

//react-bootstrap
import {Container,InputGroup,FormControl} from 'react-bootstrap'

//next-link
import Link  from 'next/link'
import Image  from 'next/image' 
// img
import error01 from '../../../public/images/error/01.png'
 const Maintenance =() => {



    useEffect(
        () =>{
            const myDate:any = new Date();
            const dateString = myDate.toISOString();
          //count down plugin js
            function getTimeRemaining(endtime: string) {
                const total = Date.parse(endtime) - Date.parse(dateString);
                const seconds = Math.floor((total / 1000) % 60);
                const minutes = Math.floor((total / 1000 / 60) % 60);
                const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
                const days = Math.floor(total / (1000 * 60 * 60 * 24));
            
                return {
                total,
                days,
                hours,
                minutes,
                seconds
                };
            }
          
            


           
            function initializeClock(elem: string, endtime: any | Date) {
                const clock =  document.querySelector(elem)
                const daysSpan = clock!.querySelector('[data-days]')
                const hoursSpan = clock!.querySelector('[data-hours]')
                const minutesSpan = clock!.querySelector('[data-minutes]')
                const secondsSpan = clock!.querySelector('[data-seconds]')
            
                if (daysSpan && hoursSpan && minutesSpan && secondsSpan) {
                var updateClock = function () {
                    const t = getTimeRemaining(endtime);
                    daysSpan.textContent = ('0' + t.days).slice(-2);
                    hoursSpan.textContent = ('0' + t.hours).slice(-2);
                    minutesSpan.textContent = ('0' + t.minutes).slice(-2);
                    secondsSpan.textContent = ('0' + t.seconds).slice(-2);
                    
                    const timeinterval = setInterval(updateClock, 1000)
                    if (t.total <= 0) {
                        clearInterval(timeinterval)
                    }
                }
                updateClock()
            }       
 }
            
            let time:any = document.querySelector('.countdown')?.getAttribute('data-date')
            if (time === undefined) {
                time = Date.parse(myDate) + 15 * 24 * 60 * 60 * 1000
            }
            const deadline = new Date(time)
            initializeClock('.countdown', deadline)
            
            }
    )

    return (
        <Fragment>
            <Container fluid className="p-0">
                <div className="iq-maintenance text-center"> 
                    <Image src={error01} className="img-fluid mb-4" alt=""/>            
                    <div className="maintenance-bottom text-white pb-0">
                        
                        <div className="  bg-primary" style={{background: "transparent", height: "350px"}}>
                            <div className="gradient-bottom">
                                <div className="bottom-text general-zindex">
                                    <h1 className="mb-2 text-white">Hang on! We are under maintenance</h1>
                                    <p>It will not take a long time till we get the error fiked. We wii live again in</p>
                                    <ul className="countdown d-flex justify-content-center align-items-center list-inline" data-date="Dec 31 2024 20:20:22">
                                        <li>
                                            <span data-days>0</span>Days
                                        </li>
                                        <li>
                                            <span data-hours>0</span>Hours
                                        </li>
                                        <li>
                                            <span data-minutes>0</span>Minutes
                                        </li>
                                        <li>
                                            <span data-seconds>0</span>Seconds
                                        </li>
                                    </ul>
                                    <div className="w-50 mx-auto mt-2">
                                        <InputGroup className="search-input search-input">
                                            <FormControl type="text" className="form-control" placeholder="Enter your mail"/>
                                            <Link href="#" className="btn bg-white text-primary ms-2 rounded">Notify Me</Link>
                                        </InputGroup>
                                    </div>
                                </div>
                                <div className="c xl-circle">
                                    <div className="c lg-circle">
                                        <div className="c md-circle">
                                        <div className="c sm-circle">
                                            <div className="c xs-circle"></div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>            
                </div>
                <div className="sign-bg">
                    <svg width="280" height="230" viewBox="0 0 431 398" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.05">
                        <rect x="-157.085" y="193.773" width="543" height="77.5714" rx="38.7857" transform="rotate(-45 -157.085 193.773)" fill="#3B8AFF"/>
                        <rect x="7.46875" y="358.327" width="543" height="77.5714" rx="38.7857" transform="rotate(-45 7.46875 358.327)" fill="#3B8AFF"/>
                        <rect x="61.9355" y="138.545" width="310.286" height="77.5714" rx="38.7857" transform="rotate(45 61.9355 138.545)" fill="#3B8AFF"/>
                        <rect x="62.3154" y="-190.173" width="543" height="77.5714" rx="38.7857" transform="rotate(45 62.3154 -190.173)" fill="#3B8AFF"/>
                        </g>
                    </svg>
                </div>
            </Container>
        </Fragment>
    )
}


Maintenance.layout="Blank";
export default Maintenance;
