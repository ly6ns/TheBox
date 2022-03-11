import Head from 'next/head'
import Image from 'next/image'
import Box from './box';
import React, { useState } from 'react';

import styles from '../styles/Home.module.css'

export default function Home() {


  const [color, setColor] = useState('#000');
  const [width, setWidth] = useState('100');
  const [height, setHeight] = useState('100');
  const [rotate, setRotate] = useState('0');

  return (
    <div className={styles.container}>
      <h1 className={styles.text}>The Box 1++</h1>
      <Box 
      color={color}
      width={width}
      height={height}
      rotate={rotate}
      />
      <div className={styles.Wrapper}>
        <div className={styles.row}>
          <p>Set Color:</p>
          <input onChange={(e) => setColor(e.target.value)} className={styles.colorPick} type="color" name="cl" id="cl" />
        </div>
        <div className={styles.row}>
          <p>Set Width:</p>
          <input onChange={(e) => setWidth(e.target.value)} className={styles.colorPick} type="number" min="1" max="200" name="cl1" id="cl1" />
        </div>
        <div className={styles.row}>
          <p>Set Height:</p>
          <input onChange={(e) => setHeight(e.target.value)} className={styles.colorPick} type="number" min="1" max="200" name="cl2" id="cl2" />
        </div>
        <div className={styles.row}>
          <p>Set Rotation:</p>
          <input onChange={(e) => setRotate(e.target.value)} className={styles.colorPick} type="range"min="1" max="360" name="cl3" id="cl3" />
        </div>
      </div>
    </div>
  )
}
