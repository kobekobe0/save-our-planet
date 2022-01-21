import React from 'react';
import './popup.css'
import {CloseButton} from 'react-bootstrap'

export function Popup (props) {
        return(props.trigger) ? (
          <div className="popup">
            <div className="popup-inner">
              <CloseButton 
              className="close" 
              onClick={()=> props.setTrigger(false)}/>
    
              <div className="updateComponent">
                { props.children }
              </div>
              
            </div>
          </div>
        ) : "";
    }


    