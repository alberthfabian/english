/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
// import Modal from '../../components/Modal';
// import { useDispatch, useSelector } from 'react-redux';
// import { back, next } from '../../redux/actions/ShopAction';
import { Div, Card, Back, Next, Validate, Img, Show, Language, LanguageDiv, Word } from './style';
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
    if (language === 'English') {
      if (count < 50) {
        const word = verbRegular.filter(val => val.spanish === value.toUpperCase());
        document.getElementById('clean').value = "";
        useValue('');
        if(word.length > 0) {
          useCount(count + e);
          useShowImgUser(0);
        } else {
          alert('Por favor verifique la palabra');
        }
      }
    } else {
      if (count < 50) {
        const word = verbRegular.filter(val => val.english === value.toUpperCase());
        document.getElementById('clean').value = "";
        useValue('');
        if(word.length > 0) {
          useCount(count + e);
          useShowImgUser(0);
        } else {
          alert('Please check the word');
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
            Language
          </Language>
        </LanguageDiv>
        <Card>
          {language === 'English' ? verbRegular.filter(regular => regular.id === count).map(value => (
            <Img key={value.id}>
              {value.id === count && 
                <>
                  <h2>{value.english}</h2>
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
                    <h2>{value.spanish}</h2>
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
                <p key={value.id}>
                  {language === 'English' ? value.spanish : value.english}
                </p>
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