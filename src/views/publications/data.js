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
        url: '@/assets/pdf/test.pdf'
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
        url: '@/assets/pdf/test.pdf'
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
        url: ''
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
        url: ''
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
        url: ''
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
        url: ''
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
        url: ''
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
        url: ''
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
    title: 'Zero-Knowledge Multi-transfer Based on Range Proofs and Homomorphic Encryption',
    writer: 'Emanuele Scala,  Changyu Dong, Flavio Corradini, and Leonardo Mostarda',
    subtitle: 'In 37th International Conference on Advanced Information Networking and Applications (AINA-2023), 2023',
    abbr: 'AINA',
    tags: [
      {
        ...TAGS.pdf,
        url: ''
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1007/978-3-031-28451-9_41'
      }
    ],
    labels: ['label 4']
  },
  {
    year: '2021',
    title: 'Zero-Knowledge Multi-transfer Based on Range Proofs and Homomorphic Encryption',
    writer: 'Emanuele Scala,  Changyu Dong, Flavio Corradini, and Leonardo Mostarda',
    subtitle: 'In 37th International Conference on Advanced Information Networking and Applications (AINA-2023), 2023',
    abbr: 'AINA',
    tags: [
      {
        ...TAGS.pdf,
        url: ''
      },
      {
        ...TAGS.html,
        url: 'https://doi.org/10.1007/978-3-031-28451-9_41'
      }
    ],
    labels: ['label 4']
  },
]