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
        url: '@/assets/pdf/test.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://github.com/vuejs'
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
        url: '@/assets/pdf/test.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://github.com/vuejs'
      }
    ],
    labels: ['label 1', 'label 2']
  },
  {
    year: '2023',
    title: 'Distributed Differential Privacy via Shuffling Versus Aggregation: A Curious Study',
    writer: 'Yu Wei, Jingyu Jia, Yuduo Wu, Changhui Hu,  Changyu Dong, Zheli Liu, Xiaofeng Chen, Yun Peng, and Shaowei Wang',
    subtitle: 'IEEE Trans. Inf. Forensics Secur., 2024',
    abbr: 'TIFS',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/test.pdf'
      },
      {
        ...TAGS.html,
        url: ''
      }
    ],
    labels: ['label 1', 'label 2']
  },
  {
    year: '2023',
    title: 'Toward Universal Detection of Adversarial Examples via Pseudorandom Classifiers',
    writer: 'Boyu Zhu,  Changyu Dong, Yuan Zhang, Yunlong Mao, and Sheng Zhong',
    subtitle: 'IEEE Trans. Inf. Forensics Secur., 2024',
    abbr: 'TIFS',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/test.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://github.com/vuejs'
      }
    ],
    labels: ['label 2', 'label 3']
  },
  {
    year: '2022',
    title: 'Distributed Differential Privacy via Shuffling Versus Aggregation: A Curious Study',
    writer: 'Yu Wei, Jingyu Jia, Yuduo Wu, Changhui Hu,  Changyu Dong, Zheli Liu, Xiaofeng Chen, Yun Peng, and Shaowei Wang',
    subtitle: 'IEEE Trans. Inf. Forensics Secur., 2024',
    abbr: 'TIFS',
    tags: [
      {
        ...TAGS.pdf,
        url: '@/assets/pdf/test.pdf'
      },
      {
        ...TAGS.html,
        url: 'https://github.com/vuejs'
      }
    ],
    labels: ['label 2', 'label 3']
  },
  {
    year: '2021',
    title: 'Toward Universal Detection of Adversarial Examples via Pseudorandom Classifiers',
    writer: 'Boyu Zhu,  Changyu Dong, Yuan Zhang, Yunlong Mao, and Sheng Zhong',
    subtitle: 'IEEE Trans. Inf. Forensics Secur., 2024',
    abbr: 'TIFS',
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
    labels: ['label 2', 'label 3']
  },
  {
    year: '2021',
    title: 'Toward Universal Detection of Adversarial Examples via Pseudorandom Classifiers',
    writer: 'Boyu Zhu,  Changyu Dong, Yuan Zhang, Yunlong Mao, and Sheng Zhong',
    subtitle: 'IEEE Trans. Inf. Forensics Secur., 2024',
    abbr: 'TIFS',
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
    labels: ['label 3', 'label 4']
  },
  {
    year: '2021',
    title: 'Toward Universal Detection of Adversarial Examples via Pseudorandom Classifiers',
    writer: 'Boyu Zhu,  Changyu Dong, Yuan Zhang, Yunlong Mao, and Sheng Zhong',
    subtitle: 'IEEE Trans. Inf. Forensics Secur., 2024',
    abbr: 'TIFS',
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
    labels: ['label 3', 'label 4']
  },
  {
    year: '2021',
    title: 'Toward Universal Detection of Adversarial Examples via Pseudorandom Classifiers',
    writer: 'Boyu Zhu,  Changyu Dong, Yuan Zhang, Yunlong Mao, and Sheng Zhong',
    subtitle: 'IEEE Trans. Inf. Forensics Secur., 2024',
    abbr: 'TIFS',
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
  }
]