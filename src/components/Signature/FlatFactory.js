import React from 'react';
import Flat from './Flat.js';
import flats from '../../flats.js';
import config from '../../config';

const getWidthOfBackground = (numberOfFlats) => {
  let widthOfBackground = 0;
  flats.forEach((_, index) => {
    if(index < numberOfFlats){
      widthOfBackground++;
    }
  });
  return widthOfBackground;
}

const pushFlatAlterationIntoArray = (numberOfFlats, alterationWidth) => {
  let flatsObjects = [];
  flats.forEach((value, index) => {
    if(index < numberOfFlats){
      flatsObjects.push(<Flat key={index} x={-290 + ( alterationWidth * index )} y={value} />)
    }
  })
  return flatsObjects;
}

const FlatFactory = ( { signatures, chosenScale } ) => {
  const clefWidth = config.clefWidth;
  const alterationWidth = config.alterationWidth;
  const numberOfFlats = Object.keys(signatures.flats).indexOf(chosenScale);
  const flatsObjects = pushFlatAlterationIntoArray(numberOfFlats, alterationWidth);
  const widthOfBackground = getWidthOfBackground(numberOfFlats);

  const deadline = <path key="deadline" fill="none" stroke="red" d={`M ${clefWidth + widthOfBackground * alterationWidth} 0 L ${clefWidth + widthOfBackground * alterationWidth} 40`}></path>;
  return Object.keys(signatures.flats).indexOf(chosenScale) > -1 ? [deadline, flatsObjects] : null;
}

export default FlatFactory;
