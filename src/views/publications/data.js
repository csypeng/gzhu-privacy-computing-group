// color = { processing, success, error, warning, magenta, red, volcano, orange, gold, lime, green, cyan, blue, geekblue, purple }
import { TAGS } from '@/utils/tags.js'
export const pageBanner = {
  title: '研究成果',
  desc: '关于研究成果的介绍性文字'
}

export const ABBR = {
  NDSS: '#2db7f5',
  TOPS: '#87d068',
  TIFS: '#108ee9'
}

export const publications = [
  {
    year: '2024',
    title: 'Secret-Shared Shuffle with Malicious Security',
    writer: 'Xiangfu Song, Dong Yin, Jianli Bai,  Changyu Dong, and Ee-Chien Chang',
    subtitle: 'In 31st Annual Network and Distributed System Security Symposium (NDSS 2024), 2024',
    abbr: 'NDSS',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/ndss24.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://eprint.iacr.org/2023/1794'
      }
    ],
    labels: ['label 1', 'label 2']
  },
  {
    year: '2024',
    title: 'Sphinx-in-the-Head: Group Signatures from Symmetric Primitives',
    writer: 'Liqun Chen,  Changyu Dong, Christopher J. P. Newton, and Yalan Wang',
    subtitle: 'ACM Trans. Priv. Secur., 2024',
    abbr: 'TOPS',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/tops24.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://dl.acm.org/doi/10.1145/3638763'
      }
    ],
    labels: ['label 1', 'label 2']
  },
  {
    year: '2024',
    title: 'Distributed Differential Privacy via Shuffling Versus Aggregation: A Curious Study',
    writer: 'Yu Wei, Jingyu Jia, Yuduo Wu, Changhui Hu,  Changyu Dong, Zheli Liu, Xiaofeng Chen, Yun Peng, and Shaowei Wang',
    subtitle: 'IEEE Trans. Inf. Forensics Secur., 2024',
    abbr: 'TIFS',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/tifs24a.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://ieeexplore.ieee.org/document/10387292'
      }
    ],
    labels: ['label 1', 'label 2']
  },
  {
    year: '2024',
    title: 'Toward Universal Detection of Adversarial Examples via Pseudorandom Classifiers',
    writer: 'Boyu Zhu,  Changyu Dong, Yuan Zhang, Yunlong Mao, and Sheng Zhong',
    subtitle: 'IEEE Trans. Inf. Forensics Secur., 2024',
    abbr: 'TIFS',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/tifs24b.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://ieeexplore.ieee.org/document/10348609'
      }
    ],
    labels: ['label 2', 'label 3']
  },
  {
    year: '2024',
    title: 'Defenses to Membership Inference Attacks: A Survey',
    writer: 'Li Hu, Anli Yan, Hongyang Yan, Jin Li, Teng Huang, Yingying Zhang,  Changyu Dong, and Chunsheng Yang',
    subtitle: 'ACM Comput. Surv., 2024',
    abbr: 'CSUR',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/csur24.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1145/3620667'
      }
    ],
    labels: ['label 2', 'label 3']
  },
  {
    year: '2023',
    title: 'Hash-Based Direct Anonymous Attestation',
    writer: 'Liqun Chen,  Changyu Dong, Nada El Kassem, Christopher J. P. Newton, and Yalan Wang',
    subtitle: 'In 14th International Symposium on Post-Quantum Cryptography (PQCrypto 2023), 2023',
    abbr: 'PQCrypto',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/pqcrypto23.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1007/978-3-031-40003-2_21'
      }
    ],
    labels: ['label 2', 'label 3']
  },
  {
    year: '2023',
    title: 'Boost Off/On-Manifold Adversarial Robustness for Deep Learning with Latent Representation Mixup',
    writer: 'Mengdie Huang, Yi Xie, Xiaofeng Chen, Jin Li,  Changyu Dong, Zheli Liu, and Willy Susilo',
    subtitle: 'In 2023 ACM Asia Conference on Computer and Communications Security (AsiaCCS 2023), 2023',
    abbr: 'AsiaCCS',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/asiaccs23.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://dl.acm.org/doi/10.1145/3579856.3595786'
      }
    ],
    labels: ['label 2', 'label 3']
  },
  {
    year: '2023',
    title: 'The influence of explanation designs on user understanding differential privacy and making data-sharing decision',
    writer: 'Zikai Alex Wen, Jingyu Jia, Hongyang Yan, Yaxing Yao, Zheli Liu, and Changyu Dong',
    subtitle: 'Information Sciences, 2023',
    abbr: 'Inf. Sci.',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/InformationSciences23c.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1016/j.ins.2023.03.024'
      }
    ],
    labels: ['label 3', 'label 4']
  },
  {
    year: '2023',
    title: 'Explanation leaks: Explanation-guided model extraction attacks',
    writer: 'Anli Yan, Teng Huang, Lishan Ke, Xiaozhang Liu, Qi Chen, and Changyu Dong',
    subtitle: 'Information Sciences, 2023',
    abbr: 'Inf. Sci.',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/InformationSciences23b.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1016/j.ins.2023.03.020'
      }
    ],
    labels: ['label 3', 'label 4']
  },
  {
    year: '2023',
    title: 'Total variation distance privacy: Accurately measuring inference attacks and improving utility',
    writer: 'Jingyu Jia, Chang Tan, Zhewei Liu, Xinhao Li, Zheli Liu, Siyi Lv, and Changyu Dong',
    subtitle: 'Information Sciences, 2023',
    abbr: 'Inf. Sci.',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/InformationSciences23a.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1016/j.ins.2023.01.037'
      }
    ],
    labels: ['label 3', 'label 4']
  },
  {
    year: '2023',
    title: 'Predicate Private Set Intersection with Linear Complexity',
    writer: 'Yaxi Yang, Jian Weng, Yufeng Yi,  Changyu Dong, Leo Yu Zhang, and Jianying Zhou',
    subtitle: 'In 21st International Conference on Applied Cryptography and Network Security (ACNS 2023), 2023',
    abbr: 'ACNS',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/ACNS23.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1007/978-3-031-33491-7_6'
      }
    ],
    labels: ['label 4']
  },
  {
    year: '2023',
    title: 'Zero-Knowledge Multi-transfer Based on Range Proofs and Homomorphic Encryption',
    writer: 'Emanuele Scala,  Changyu Dong, Flavio Corradini, and Leonardo Mostarda',
    subtitle: 'In 37th International Conference on Advanced Information Networking and Applications (AINA-2023), 2023',
    abbr: 'AINA',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/AINA23.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1007/978-3-031-28451-9_41'
      }
    ],
    labels: ['label 4']
  },
  {
    year: '2022',
    title: 'Understanding adaptive gradient clipping in DP-SGD, empirically',
    writer: 'Guanbiao Lin, Hongyang Yan, Guang Kou, Teng Huang, Shiyu Peng, Yingying Zhang, and Changyu Dong',
    subtitle: 'Int. J. Intell. Syst., 2022',
    abbr: 'IJIS',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/lin.pdf'
      },
      {
        ...TAGS.html,
        url: ''
      }
    ],
    labels: ['label 4']
  },
  {
    year: '2022',
    title: 'GAME: Generative-Based Adaptive Model Extraction Attack',
    writer: 'Yi Xie, Mengdie Huang, Xiaoyu Zhang,  Changyu Dong, Willy Susilo, and Xiaofeng Chen',
    subtitle: 'In 27th European Symposium on Research in Computer Security Computer Security (ESORICS 2022), 2022',
    abbr: 'ESORICS',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/ESORICS22'
      },
      {
        ...TAGS.html,
        url: ''
      }
    ],
    labels: ['label 4']
  },
  {
    year: '2022',
    title: 'New Differential Privacy Communication Pipeline and Design Framework (Poster)',
    writer: 'Jingyu Jia, Zikai Wen, Zheli Liu, and Changyu Dong',
    subtitle: 'In 18th Symposium on Usable Privacy and Security (SOUPS 2022), 2022',
    abbr: 'SOUPS',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/SOUPS22'
      },
      {
        ...TAGS.html,
        url: ''
      }
    ],
    labels: ['label 4']
  },
  {
    year: '2022',
    title: 'Defending against Membership Inference Attacks with High Utility by GAN',
    writer: 'Li Hu, Jin Li, Guanbiao Lin, Shiyu Peng, Zhenxin Zhang, Yingying Zhang, and Changyu Dong',
    subtitle: 'IEEE Trans. Dependable Secur. Comput., 2022',
    abbr: 'TDSC',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/TDSC22'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1109/TDSC.2022.3174569'
      }
    ],
    labels: ['label 4']
  },  
  {
    year: '2022',
    title: 'Differentially Private Byzantine-robust Federated Learning',
    writer: 'Xu Ma, Xiaoqian Sun, Yuduo Wu, Zheli Liu, Xiaofeng Chen, and Changyu Dong',
    subtitle: 'Xu Ma, Xiaoqian Sun, Yuduo Wu, Zheli Liu, Xiaofeng Chen, and Changyu Dong',
    abbr: 'TPDS',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/TPDS22'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1109/TPDS.2022.3167434'
      }
    ],
    labels: ['label 4']
  },
  {
    year: '2022',
    title: 'Multi-party Updatable Delegated Private Set Intersection',
    writer: 'Aydin Abadi,  Changyu Dong, Steven Murdoch, and Sotirios Terzis',
    subtitle: 'In 26th International Conference on Financial Cryptography and Data Security, 2022',
    abbr: 'FC',
    tags: [
      {
        ...TAGS.pdf,
        url: ''
      },
      {
        ...TAGS.html,
        url: ''
      }
    ],
    labels: ['label 4']
  },
  {
    year: '2021',
    title: 'Cetus: an efficient symmetric searchable encryption against file-injection attack with SGX',
    writer: 'Yanyu Huang, Siyi Lv, Zheli Liu, Xiangfu Song, Jin Li, Yali Yuan, and Changyu Dong',
    subtitle: 'Sci. China Inf. Sci., 2021',
    abbr: 'Sci. China Inf. Sci.',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1007/s11432-020-3039-x'
      }
    ],
    labels: ['label 4']
  },
  {
    year: '2021',
    title: 'Differentially Private String Sanitization for Frequency-Based Mining Tasks',
    writer: 'Huiping Chen,  Changyu Dong, Liyue Fan, Grigorios Loukides, Solon P. Pissis, and Leen Stougie',
    subtitle: 'In IEEE International Conference on Data Mining, 2021',
    abbr: 'ICDM',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1109/ICDM51629.2021.00014'
      }
    ],
    labels: ['label 4']
  },
  {
    year: '2021',
    title: 'How to Make Private Distributed Cardinality Estimation Practical, and Get Differential Privacy for Free',
    writer: 'Changhui Hu, Jin Li, Zheli Liu, Xiaojie Guo, Yu Wei, Xuan Guang, Grigorios Loukides, and Changyu Dong',
    subtitle: 'In 30th USENIX Security Symposium, 2021',
    abbr: 'USENIX',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/USENIX_21_FULL'
      },
      {
        ...TAGS.html,
        url: 'https://www.usenix.org/conference/usenixsecurity21/presentation/hu-changhui'
      }
    ],
    labels: ['label 4']
  },
  {
    year: '2021',
    title: 'VeriFL: Communication-Efficient and Fast Verifiable Aggregation for Federated Learning',
    writer: 'Xiaojie Guo, Zheli Liu, Jin Li, Jiqiang Gao, Boyu Hou,  Changyu Dong, and Thar Baker',
    subtitle: 'IEEE Trans. Inf. Forensics Secur., 2021',
    abbr: 'TIFS',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/TIFS_20'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1109/TIFS.2020.3043139'
      }
    ],
    labels: ['label 4']
  },
  {
    year: '2021',
    title: 'Searchable Symmetric Encryption with Forward Search Privacy',
    writer: 'Jin Li, Yanyu Huang, Yu Wei, Siyi Lv, Zheli Liu,  Changyu Dong, and Wenjing Lou',
    subtitle: 'IEEE Trans. Dependable Secur. Comput., 2021',
    abbr: 'TDSC',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/TDSC_19'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1109/TDSC.2019.2894411'
      }
    ],
    labels: ['label 4']
  },
  {
    year: '2021',
    title: 'Encryption Switching Service: Securely Switch Your Encrypted Data to Another Format',
    writer: 'Peng Jiang, Jianting Ning, Kaitai Liang,  Changyu Dong, Jiageng Chen, and Zhenfu Cao',
    subtitle: 'IEEE Trans. Serv. Comput., 2021',
    abbr: 'TSC',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/TSC_2018'
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1109/TSC.2018.2876849'
      }
    ],
    labels: ['label 4']
  },
]