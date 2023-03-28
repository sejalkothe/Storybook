import React from 'react'
import PropTypes from 'prop-types';
import './Input.css'


const Input = ({cardColor, backgroundColor, title, smallTitle, para,likeBtn,shareBtn,paraColor,headColor, subTitleColor,cardWidth}) => (
   <>
    <div className='card' style={{width:cardWidth ,backgroundColor: cardColor}}>

      <h2 style={{paddingTop:'10px',
      color: headColor}}>{title}</h2>
     
     
      <div style={{color:'gray',  marginTop:'-15px', color:subTitleColor}}>{smallTitle}</div>
      <p style={paraColor && {color: paraColor}}>{para}</p>
      
   

      <button style={backgroundColor && {backgroundColor}} className='btn1'>{likeBtn}</button>
      <button style={backgroundColor && {backgroundColor}} className='btn2'>{shareBtn}</button>
   
    </div>
    {/* <input className='input' type={type} placeholder={placeholder} value={value} /> */}

   </>
  );
  
  Input.propTypes = {
    title: PropTypes.string,
    smallTitle: PropTypes.string,
    para: PropTypes.string,
   

  };
  
  Input.defaultProps = {

    title: 'text',
    smallTitle: '',
    para: '',
    shareBtn:'null',
   
   
  };
  
  export default Input;
