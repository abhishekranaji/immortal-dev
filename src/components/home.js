import React from 'react'
import {ReactComponent as HomeSvg} from '../assests/Group 110.svg';
import {ReactComponent as Logo} from '../assests/Logo-immortal.svg';
import {ReactComponent as InstaLogo} from '../assests/instagram.svg';
import {ReactComponent as LinkLogo} from "../assests/linkedin.svg";
import {ReactComponent as WhatappLogo} from "../assests/whatsapp.svg"

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div style={{display:'flex', flex:1, flexDirection:'column'}}>
                <div className='upperHalf' style={{flex:0.5, display:'flex'}}>
                    <div className="logoImmortal" style={{flex:0.2, padding:'20px 0 0 20px'}}>
                        <Logo width={180} />
                    </div>
                    <div style={{flex:1, display:'flex', justifyContent:'center', alignItems:'flex-end'}}>
                        <div style={{position:'absolute', marginBottom:-30}}>
                            <HomeSvg width="auto" height="auto"/>
                        </div>
                    </div>
                    <div className="socialIcon" style={{flex:0.2, paddingTop:30, paddingRight:10}}>
                        <div style={{fontSize:12, marginBottom:10}}>Follow Us</div>
                        <div style={{display:'flex', columnGap:10, justifyContent:'center'}}>
                        <a href="https://instagram.com/immortalventures?igshid=oicdt7rimtjl"><InstaLogo /></a>
                        <a href="https://www.linkedin.com/company/immortal-ventures"><LinkLogo /></a>
                        </div>
                    </div>
                </div>
                <div className='lowerHalf' style={{flex:0.5, backgroundColor:'#C5D7FC', display:'flex', flexDirection:'column'}}>
                    <h1 style={{fontSize:60, color:'#424242'}}>CODERS AT WORK</h1>
                    <div style={{borderBottom:"1px solid #424242", width:200, alignSelf:'center'}}></div>
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <p style={{textAlign:'left'}}><span style={{fontSize:18, color:'white', borderRadius:5, backgroundColor: "#424242", paddingLeft:10, paddingRight:10, fontWeight:'normal'}}>What we do? </span> <br></br>
                        <span style={{fontSize:16, color:'white', backgroundColor: "#424242", borderRadius:5, paddingLeft:10, paddingRight:10, fontWeight:"lighter", display:'inline-block', marginTop:5}}>
                        Website Development, Mobile App development</span></p>
                    </div>
                    <div style={{borderBottom:"1px solid #424242", width:200, alignSelf:'center'}}></div>
                    <div style={{fontSize:16, fontWeight:'bold', marginTop:10}}>Contact Us +91 72757 40421</div>
                </div>
                <div style={{position:'absolute', bottom:10, right:20}}>
                    <a href="https://api.whatsapp.com/send?phone=917275740421&text=" ><WhatappLogo width={60} /></a>
                </div>
            </div>
        )
    }
}

export default Home