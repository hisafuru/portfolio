import React from 'react';
import '../style.css';
import Section from '../components/Section';

function Publications() {
  return (
    <div className="text-left max-w-4xl mx-auto publications">
      <h2 className="text-2xl font-bold mb-4">研究業績</h2>
      <p className="mb-8">研究や特許に関する業績を記載します．</p>
  
      <Section 
        title="論文誌 (査読付)" 
        items={[
          "Hisafuru, K., Takasaki, K., and Togawa, N., “An Anomalous Behavior Detection Method Utilizing IoT Power Waveform Shapes,” IEICE Trans. on Fundamentals of Electronics, Communications and Computer Sciences, vol. E107-A, No. 1, pp. 75-86 , Jan. 2024."
        ]}
      />

      <Section 
        title="国際会議 (査読付)" 
        items={[
          "Takasaki, K., Hisafuru, K., Negishi, R., Yamashita, K., Fukada, K., Wakaizumi, T., and Togawa, N., “An autonomous driving system utilizing image processing accelerated by FPGA,” in Proc. 2021 IEEE International Conference on Field Programmable Technology (ICFPT), pp. 1–4, Dec. 2021.",
          "Hisafuru, K., Takasaki, K., and Togawa, N., “An Anomalous Behavior Detection Method for IoT Devices Based on Power Waveform Shapes,” in Proc. 2022 IEEE International Symposium on On-Line Testing and Robust System Design (IOLTS), pp. 1-7, Sep. 2022.",
          "Hisafuru, K., Negishi, R., Kawakami, S., Sato, D., Yamashita, K., Fukada, K., and Togawa, N., “Autonomous driving system with feature extraction using a binarized autoencoder,” in Proc. 2022 IEEE International Conference on Field-Programmable Technology (ICFPT), pp. 1-4, Dec. 2022.",
          "Hisafuru, K., Togawa, N., “Gen-Power: Anomaly Detection in IoT Devices Utilizing Generated Power Waveforms,” in Proc. 2024 IEEE International Conference on Consumer Electronics (ICCE), pp. 1-4, Jan. 2024."
        ]}
      />

      <Section 
        title="国内学会/研究会 (査読無)" 
        items={[
          "久古 幸汰, 高崎 和成, 戸川 望, “消費電力波形の形状を考慮した IoT デバイス異常 動作検知手法,” 暗号と情報セキュリティシンポジウム (SCIS) 2022, Jan. 2022.",
          "久古 幸汰, 戸川 望, “消費電力波形の形状を考慮した IoT デバイス異常動作検知手 法の評価,” コンピュータセキュリティシンポジウム (CSS) 2022, Oct. 2022.",
          "久古 幸汰, 戸川 望, “消費電力波形の形状を考慮した IoT デバイス異常動作検知手 法の FPGA への適用,” デザインガイア 2022, Nov. 2022.",
          "久古 幸汰, 木田良一, 金子博一, 戸川 望, “定常電力波形予測に基づく電力解析によ る IoT デバイス異常動作検知の比較・評価,” 暗号と情報セキュリティシンポジウム (SCIS) 2023, Jan. 2023.",
          "江田 琉聖, 久古 幸汰, 根岸良太郎, 戸川 望, “LSTM を用いた定常状態を含む消費電 力波形予測に基づく IoT デバイス異常動作検知手法,” VLSI 設計技術研究会 (VLD), Mar. 2023.",
          "中西 響, 久古 幸汰, 根岸良太郎, 戸川 望, “消費電力波形の極値クラスタリングを 用いた文法的推論に基づく IoT デバイス異常動作検知手法,” VLSI 設計技術研究会 (VLD), Mar. 2023.",
          "矢部 拓真, 久古 幸汰, 根岸良太郎, 戸川 望, “消費電力波形データから抽出した特徴 量群に対する主成分分析に基づく IoT デバイス異常動作検知手法,” VLSI 設計技術 研究会 (VLD), Mar. 2023.",
          "久古 幸汰, 戸川 望, “生成電力波形による IoT 異常動作検知手法,” コンピュータセ キュリティシンポジウム (CSS) 2023, Oct. 2023.",
          "久古 幸汰, 戸川 望, “生成電力波形による IoT 異常動作検知手法の改良,” デザイン ガイア 2023, Nov. 2023.",
          "久古 幸汰, 江田 琉聖, 木田良一, 金子博一, 戸川 望, “LSTM を用いた定常状態を含 む消費電力波形予測に基づく IoT デバイス異常動作検知手法の評価,” 暗号と情報セ キュリティシンポジウム (SCIS) 2024, Jan. 2024.",
          "江田 琉聖, 久古 幸汰, 戸川 望, “ハイパーパラメータチューニングを導入した生成 電力波形による IoT 異常動作検知手法と FPGA チップへの適用,” 暗号と情報セキュ リティシンポジウム (SCIS) 2024, Jan. 2024.",
          "中西 響, 戸川 望, 久古 幸汰, 長谷川健人, 披田野 清良, 福島 和英, 橋本 和夫,“LLM を用いた初期シード生成による IoT デバイスのファジングの自動化に向けて,” 暗号 と情報セキュリティシンポジウム (SCIS) 2024, Jan. 2024.",
          "吉見 尚, 根岸 良太郎, 久古 幸汰, 戸川 望，“自動化フレームワークにより生成され たトロイ回路を対象とした機械学習によるハードウェアトロイ識別の評価,” VLSI 設計技術研究会 (VLD), Feb. 2024."
        ]}
      />

      <Section 
        title="国内学会 (ポスター発表)" 
        items={[
          "久古 幸汰, 戸川 望, “FPGA に対する消費電力波形の形状を考慮した IoT デバイス異常動作検知,” IEEE Circuits and Systems Society Japan Joint Chapter Young CAS Researchers Workshop, Nov. 2022.",
          "久古 幸汰, 戸川 望, “生成電力波形による IoT 異常動作検知手法の改良,” デザイン ガイア 2023, Nov. 2023.",
        ]}
      />

      <Section 
        title="受賞" 
        items={[
          "第 10 回相磯秀夫杯 FPGA デザインコンテスト (2021)第 4 位, Oct. 23, 2021.",
          "International Conference on Field-Programmable Technology (FPT ’21) FPGA Design Competition 5th place, Dec. 10, 2021.",
          "IEEE Circuits and Systems Society Japan Joint Chapter Young CAS Researchers Workshop Research Encouragement Award, Nov. 2022.",
          "デザインガイア 2022 優秀発表賞, Aug. 2023.",
          "システムと LSI の設計技術研究会 優秀論文賞, Aug. 2023."
        ]}
      />
    </div>
  );
}

export default Publications;