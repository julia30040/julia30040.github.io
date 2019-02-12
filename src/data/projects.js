import geesaa from '../media/img/geesaa_logo.png';
import eatme from '../media/img/eatme_logo.jpg';

const FORESTAGE_WEB = 'PROJECT/FORESTAGE_WEB';
const FORESTAGE_APP = 'PROJECT/FORESTAGE_APP';
const BACKSTAGE = 'PROJECT/BACKSTAGE';

export default [{
  id: 1,
  title: 'GEESAA',
  subtitle: '智慧手沖咖啡壺 App',
  cover: geesaa,
  type: FORESTAGE_APP,
  description: '透過雲端傳送專業咖啡師的配方，將手沖的溫度及風味帶回家。\n在這項專案中，使用 ReactNative 及相關開源專案來進行開發，其中運用 RN Animations 與使用者互動時，讓畫面更直覺、舒適。並與同事、第三方軟硬體合作，傳送配方、接收咖啡機回應，並結合開源專案介接 itunes 音樂、選擇手機中的音樂，讓人在沖泡咖啡的過程中更融入氛圍。',
  tags: [
    'ReactNative',
    'Apollo',
    'Redux',
    'ReduxForm',
    'iTunes',
    'facebook login',
  ],
  link: 'http://www.geesaa.com.tw/',
  year: '2018',
}, {
  id: 2,
  title: 'EatMe 一粒米',
  subtitle: '美食優惠之後台',
  cover: eatme,
  type: BACKSTAGE,
  description: '「EatMe 一粒米」 是一個美食優惠平台 App，使用者可利用地圖尋找特定種類、價位的餐廳，並查看菜單及優惠等資訊；觀看影片、掃描店家或網紅專屬的 QR Code 獲取點數，以換取店家優惠。\n在後台製作，與設計師討論，並運用 React、ReduxForm、GoogleMap Geocoding API，製作更符合需求的表單元件，簡化繁雜的上架過程；並透過 Apollo Cache 的機制，避免不必要的重複獲取資料，進而快速顯示大量的商家、會員、專題、廣告等資訊，必要時更新部分資訊。',
  tags: [
    'ReactJS',
    'Apollo',
    'Redux',
    'ReduxForm',
    'GoogleMap Geocoding API',
  ],
  link: 'https://itunes.apple.com/tw/app/%E4%B8%80%E7%B2%92%E7%B1%B3/id924934755?mt=8',
  year: '2018-2017',
}];
