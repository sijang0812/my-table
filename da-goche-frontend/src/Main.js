/*
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Question from './Question';
import List from './List';
import Head from './Head';

export default function Main({categories}) {
  var [logos, setLogos] = useState({categories}.categories);
  const [selectId, setSelectId] = useState("id");
  const [cntClick, setCntClick] = useState(0);//let cntClick = 0;

  function clickLogo(paramId, paramSub) {
    console.log("paramId", paramId);
    console.log("paramSub", paramSub);
    console.log("logos", logos);
    setCntClick(cntClick + 1);//cntClick++;
    console.log("cntClick", cntClick);
    
    setLogos(paramSub);
    console.log("logos", logos);
  }

  return (
    cntClick < 2
    ?
    <div className="bg">
      <Head/>
      <div className="divBody">
        <p id="pQstn">수리할 장소는 어디입니까?</p>
          {logos.map( 
            category => {
              return (
                <div className="divAnswr" key = {category.id}>
                  <Question category = {category} key = {category.id} />
                  <img className="imgAnswr" src={require( './img/' +  category.id + '.png').default } onClick={() => clickLogo(category.id, category.sub)}/>
                  <p className="pAnswr">{category.name}</p>
                </div>
              )
            }
          )}
      </div>
    </div>
    :
    <Link to="/list">
      <List selectId = {selectId}/>
    </Link>
  )
}
*/
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Question from './Question';
import List from './List';
import Head from './Head';

export default function Main({categories}) {
  var [logos, setLogos] = useState({categories}.categories);
  const [selectId, setSelectId] = useState("id");
  const [cntClick, setCntClick] = useState(0);//let cntClick = 0;

  function clickLogo(paramId, paramSub) {
    console.log("paramId", paramId);
    console.log("paramSub", paramSub);
    console.log("logos", logos);
    setCntClick(cntClick + 1);//cntClick++;
    console.log("cntClick", cntClick);
    
    setLogos(paramSub);
    console.log("logos", logos);
  }

  return (

    <div className="bg">
      <Head/>
      <div className="divBody">
        <p id="pQstn">수리할 장소는 어디입니까?</p>
          {logos.map( 
            category => {
              return (
                cntClick == 0
                      ?
                <div className="divAnswr" key = {category.id}>
                  {/* <Question category = {category} key = {category.id} /> */}
                  
                  <img className="imgAnswr" src={require( './img/' +  category.id + '.png').default } onClick={() => clickLogo(category.id, category.sub)}/>
                 
                  <p className="pAnswr">{category.name}</p>
                </div>
                :
                <div className="divAnswr" key = {category.id}>
                  {/* <Question category = {category} key = {category.id} /> */}
                  
                  <Link to="/list">

                  <img className="imgAnswr" src={require( './img/' +  category.id + '.png').default } onClick={() => <List selectId = {selectId}/>}/>
                 
                  <p className="pAnswr">{category.name}</p>
                  </Link>
                </div>
              )
            }
          )}
      </div>
    </div>
  )
}