/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
// import Modal from '../../components/Modal';
// import { useDispatch, useSelector } from 'react-redux';
// import { back, next } from '../../redux/actions/ShopAction';
import { Div, Card, Back, Next, Validate, Img, Show, Language, LanguageDiv, Word, Title } from './style';
import { verbRegular } from '../../Data/verbRegular';

const Home = () => {

  // const dispatch = useDispatch();
  // const shop = useSelector((state) => state.shop);

  const [count , useCount ] = useState(1);
  const [value , useValue ] = useState('');
  const [showImgUser , useShowImgUser ] = useState(0);
  const [language, useLanguage ] = useState('English');
  const [showWord, useShowWord ] = useState(0);

  const backAction = (e) => {
    if (count > 0) {
      if (count === 1) {
        return;
      }
      useCount(count - e);
      document.getElementById('clean').value = "";
    }
  }

  const nextAction = (e) => {
    if (count < 50) {
      let word = verbRegular.filter(val => val.id === count).map(regular => language === 'English' ? regular.spanish : regular.english);
      document.getElementById('clean').value = "";
      useValue('');
      if (typeof(word[0]) === 'object') {
        const wordValue = word[0].filter(val => val.name === value.toUpperCase()); 
        if(wordValue.length > 0) {
          useCount(count + e);
          useShowImgUser(0);
          word = [];
        } else {
          alert('Por favor verifique la palabra');
        }
      } else {
        if(word[0] === value.toUpperCase()) {
          useCount(count + e);
          useShowImgUser(0);
          word = [];
        } else {
          alert('Por favor verifique la palabra');
        }
      }
    }
  }

  const validate = (e) => {
    useValue(e.target.value);
  }

  const showImg = (e) => {
    if (showImgUser === 0) {
      useShowImgUser(1);
    } else {
      useShowImgUser(0);
    }
  }

  const change = () => {
    if (language === 'English') {
      useLanguage('Spanish');
    } else {
      useLanguage('English');
    }
  }

  const word = () => {
    if (showWord === 1) {
      useShowWord(0);
    } else {
      useShowWord(1);
    }
  }

  return (
    <Div>
      <div>
        <LanguageDiv>
          <Language onClick={() => change()}>
            {language === 'English' ? `Write in ${language}` : `Write in ${language}` }
          </Language>
        </LanguageDiv>
        <Card>
          {language === 'English' ? verbRegular.filter(regular => regular.id === count).map(value => (
            <Img key={value.id}>
              {value.id === count && 
                <>
                  {typeof(value.english) === 'object' ? value.english.map(name => (
                    <Title key={name.id}>
                      {name.name}
                    </Title>
                  )) : <Title>{value.english}</Title> }
                  {showImgUser === 1 && (
                    <img src={value.img} alt={value.english} />
                  )}
                </>
              }
            </Img>
          )) : 
            verbRegular.filter(regular => regular.id === count).map(value => (
              <Img key={value.id}>
                {value.id === count && 
                  <>
                    {typeof(value.spanish) === 'object' ? value.spanish.map(name => (
                      <Title key={name.id}>
                        {name.name}
                      </Title>
                    )) : <Title>{value.spanish}</Title> }
                    {showImgUser === 1 && (
                      <img src={value.img} alt={value.english} />
                    )}
                  </>
                }
              </Img>
            ))
          }
        </Card>
        <Validate>
          <div>
            <div>
              <input type="text" name='word' onChange={(e) => validate(e)} id='clean' />
            </div>
          </div>
          <div>
            <Word onClick={() => word()}>
              {showWord === 0 ? 'Show Word' : 'Remove Word'}
            </Word>
          </div>
          <div>
            <div>{showWord === 1 && (
              verbRegular.filter(regular => regular.id === count).map(value => (
                <div key={value.id}>
                  {language === 'English' ? 
                    <>
                      {typeof(value.spanish) === 'object' ? value.spanish.map((name) => (
                        <p key={name.id}>
                          {name.name}
                        </p>
                      )) : <p>{value.spanish}</p> }
                    </> : 
                    <>
                      {typeof(value.english) === 'object' ? value.english.map((name) => (
                        <p key={name.id}>
                          {name.name}
                        </p>
                      )) : <p>{value.english}</p> }
                    </>
                  }
                </div>
              )))
            }</div>
          </div>
          <div>
            <Show onClick={() => showImg()}>
              {showImgUser === 0 ? 'Show Img' : 'Remove Img'}
            </Show>
          </div>
          <div>
            <Back onClick={() => backAction(1)}>
              Back
            </Back>
            <Next onClick={() => nextAction(1)}>
              Next
            </Next>
          </div>
        </Validate>
      </div>
      {/* {
        shop.open === true ? <Modal /> : ''
      } */}
    </Div>
  )
};

export default Home;