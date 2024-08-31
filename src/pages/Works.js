import React from 'react';
import Work from '../components/Work';
import IoT from "../assets/iot.jpg";
import Arcara from "../assets/arcara.jpg";
import Tierdrop from "../assets/tierdrop.png";
import Laptop from "../assets/laptop.png";
import Gameserver from "../assets/gameserver.png";

function Works() {
  return (
    <div className='w-10/12 md:max-w-4xl mx-auto '>
      <h2 className='text-2xl md:text-4xl font-bold mb-2'>Works</h2>
      <p className='text-sm md:text-sm pb-4'>今までに参加したプロジェクトや個人開発で，公開できるものを記載いたします．</p>
      <div className="mb-6">
        <Work
            imageUrl={IoT}
            title={'スマート工場化プロジェクト（株式会社yosugara）'}
            description={`友人：沢井宇宙と設立した会社yosugaraで最初に取り組んだプロジェクト．産業用工作機械に取り付けたIoTにより機器の稼働状況を計測・送信することで，工場内に設置されたモニターやWebアプリ上から現在の稼働状況をリアルタイムに取得できる．
                        IoTの基板や筐体の設計・製造から行い，対象機器に最適化することで，"おじいちゃんでも設置できるIoT"を目指した．また，経営層からは状況が見えにくい夜間の工場の稼働状況を可視化することで，生産効率の向上や目標設定の改善を図った．`}
        ></Work>
        <Work
            imageUrl={Arcara}
            title={'TCG通販サイトArcara（株式会社yosugara）'}
            description={'yosugara脱退直前に作成したTCGの通販サイト．モダンなUIや使いやすさ，買い物の楽しさを追求したサイトデザインを目指した．また，プロジェクト中では商品の売買に関するデータ分析も担当し，社内向けのデータ分析ツール開発を作成した．'}
            imagePosition='right'
        ></Work>
        <Work
            imageUrl={Tierdrop}
            title={'Airdrop情報サイト TierDrop'}
            description={`Airdrop（仮想通貨やトークンの無料配布イベントの総称）に関するポータルサイト.近年の仮想通貨プロジェクトでは，プロジェクト初期にコミットしてくれたユーザーに対し見返りとして仮想通貨やトークンを配布する"AirDrop"という仕組みが採用されていることが多い．
                仮想通貨やブロックチェーン技術の発展を促進するため，それらの情報や利用方法を提供するサイトを友人：沢井宇宙の主導のもと作成した．`}
        ></Work>
        <Work
            imageUrl={Gameserver}
            title={'Game Server (仮)'}
            description={'ユーザーフレンドリーかつ柔軟なゲーム体験を提供するサービス．Coming soon...'}
            imagePosition='right'
        ></Work>
        <Work
            imageUrl={Laptop}
            title={'StandOS（仮）'}
            description={`MacOSに新たな操作性を追加する，開発サポートアプリ．Coming soon...`}
        ></Work>
      </div>
      
    </div>
  );
}

export default Works;