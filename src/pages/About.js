import React from 'react';
import { SlArrowDown } from "react-icons/sl";
import Icon from "../assets/icon.webp";

const ExperienceItem = ({ year, title, description, top = false }) => (
    <div className={`py-6 border-b border-gray-300 flex items-center ${top ? 'border-t' : ''}`}>
      <div className="w-1/4 text-lg font-normal flex items-center justify-center">{year}</div>
      <div className="w-3/4">
        <div className="text-md font-bold pb-2">{title}</div>
        <div className="text-sm">{description}</div>
      </div>
    </div>
  );

function About() {
  return (
    <div>
      <div className="h-screen">
        <div className="flex justify-center items-center py-40 -ml-32">
            <div className="bg-orange-600 text-orange-50 pl-1 w-[350px] h-24 -rotate-90 -mr-24 text-xs text-left text-[15px]">
                <p>Development, Research and Innovation.</p>
                <p>If you want to go fast, go alone. </p>
                <p>If you want to go far, go together.</p>
                <p>However, I'll go as far as I can alone</p>
                <p>on <a href='https://www.youtube.com/watch?v=tIe-kXTmj3E'>the narrow way.</a></p>
            </div>
            <div className="text-left text-9xl">
            <p>Kota</p>
            <p>Hisafuru</p>
            <p>Portfolio</p>
            </div>
        </div>
        <p>Scroll</p>
        <div className="flex justify-center items-center">
            <SlArrowDown className="text-orange-600 text-4xl" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <a href='https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/57920695457072532059112617018159441295166854042840448471990459835367431340033/' target='_blank' rel='noreferrer'>
            <img src={Icon} alt="Kota Hisafuru" className="w-56 h-auto rounded-3xl mr-10" />
        </a>
        <div className="max-w-xl text-left">
          <h2 className="text-4xl font-bold mb-4">Kota Hisafuru</h2>
          <p className='text-sm text-opacity-80'>
            久古 幸汰（Kota Hisafuru）<br />
            1999年生まれ，埼玉県横瀬町出身．<br />
            大学時代の起業と研究の経験を経て，現在はITエンジニアとして働きながら個人開発を行っています．
            Web開発を中心に，機械学習やIoT，ロボティクスなど，幅広く技術を扱います．<br />
            私の作るプロダクトが，少しでも世の中に寄与することを祈ります．
          </p>
        </div>
      </div>
      <div className="mt-20 px-10 text-left max-w-4xl mx-auto pb-32">
        <h2 className="text-4xl font-bold mb-4 text-center">Experience</h2>
        <ExperienceItem 
          year="2021 ~ 2023" 
          title="株式会社yosugara" 
          description="友人：沢井宇宙と共に株式会社yosugaraを設立．IoTとIT技術を活用し，夜すがら(yosugara,夜通し)製造業をサポートするためのスマート工場化プロジェクトに従事．その他，ECサイトの設立等に従事し，Web開発を中心とした様々なIT技術を習得．"
          top={true}
        />
        <ExperienceItem 
          year="2022 ~ 2024"
          title="早稲田大学基幹理工学研究科情報理工情報通信専攻" 
          description="戸川研究室に所属し，IoTを中心としたハードウェアセキュリティの研究を行う．今後セキュリティ上の脅威となることが予想されるハードウェアトロイの検知手法の発展に取り組み，機械学習を応用した手法を提案．機械学習に対する知識のベースを培う．" 
        />
        <ExperienceItem 
          year="2024 ~ " 
          title="IT企業入社" 
          description="アジャイル開発を中心にサービス開発を行うIT企業に入社．フルスタックにWeb開発を中心に行いつつ，生成AIなど最新技術を活用したサービスを思案中．また，アジャイル開発により柔軟かつ迅速にクライアントの要望に答えるためのスキルを習得中．" 
        />
      </div>
    </div>
  );
}

export default About;