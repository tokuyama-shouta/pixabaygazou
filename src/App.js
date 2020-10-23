import React,{ useState } from 'react'
import axios from 'axios';
import SearchBar from './components/SearcBar'
import ImageList from './components/ImageList'
import logo from './logo.png';

const App = () =>{
  const [images,setImages] = useState([]);
  //APIkeyをいれる
  const ApiKey = process.env.REACT_APP_PIXABAY_APIKEY;
  //非同期処理を行うのでasync awaitを使う
  const onSearchSubmit = async (term) => {
    /*予想していない異常によりエラーが発生するような場面で
    意図的に回避するための処理*/
    try{
      //例外エラーが発生するかもしれない処理
      const params={
        key: ApiKey,
        q: term,
      };
      //pixabayのAPIを叩く
      const response = await axios.get("https://pixabay.com/api/",{params});
      //imagesステートに画像データの配列を渡す
      setImages(response.data.hits);
      //検索した画像が一枚もなかった場合
      if(response.data.total === 0){
        window.alert('お探しの画像はありません。');
      }

    }catch{
      //例外エラーが起きた時に実行する処理
      window.alert('写真の取得に失敗しました。');

    }
  };
  return(
    <div className='ui container' style={{marginTop:'20px'}}>
      <img src={logo} alt='pixabay-logo' className='pixabay-logo'/>
      <SearchBar onSubmit={onSearchSubmit}/>
      <ImageList images={images} />
    </div>
  );
};

export default App