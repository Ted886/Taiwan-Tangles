

import { Lesson, Article } from './types';
import { 
  Ear, Bike, MessageCircle, Trash2, Home, CreditCard, 
  Megaphone, TrainFront, Headphones, Coffee, Eye, Calendar, Gauge, Waves,
  DoorOpen, Camera, QrCode, School
} from 'lucide-react';
import React from 'react';

// Content focused on: Polite yet firm conflict resolution in Taiwan.
// Traditional Chinese (Taiwan standard).

export const INITIAL_HEARTS = 5;

export const ARTICLES: Article[] = [
  {
    id: 'yuelao_concert',
    title: '月老「新業務」曝光',
    source: '月老「新業務」曝光 外國遊客全傻眼：除了牽紅線還得幫搶票？',
    vocab: [
        { word: '月老', pinyin: 'Yuèlǎo', meaning: 'Matchmaking God' },
        { word: '供桌', pinyin: 'gòngzhuō', meaning: 'Altar/Offering table' },
        { word: '牽紅線', pinyin: 'qiān hóngxiàn', meaning: 'To matchmake (lit. pull red string)' },
        { word: '索取', pinyin: 'suǒqǔ', meaning: 'To ask for/demand' },
        { word: '姻緣', pinyin: 'yīnyuán', meaning: 'Fate/Destiny (marriage)' },
        { word: '香火鼎盛', pinyin: 'xiānghuǒ dǐngshèng', meaning: 'Incense flourishing (very popular temple)' },
        { word: '還願', pinyin: 'huányuàn', meaning: 'To redeem a vow (give thanks)' },
        { word: '曝光', pinyin: 'pùguāng', meaning: 'Exposed/Revealed' },
        { word: '追星', pinyin: 'zhuīxīng', meaning: 'Chasing stars (fandom)' },
        { word: '傻眼', pinyin: 'shǎyǎn', meaning: 'Dumbfounded/Stupefied' }
    ],
    content: [
      {
        cn: '龍山寺在月老神君的供桌上準備了紅線供信徒索取，',
        pinyin: 'Lóngshānsì zài Yuèlǎo shénjūn de gòngzhuō shàng zhǔnbèi le hóngxiàn gōng xìntú suǒqǔ,',
        en: 'Longshan Temple has prepared red strings on the Matchmaking God\'s altar for believers to take,',
        isNewParagraph: true
      },
      {
        cn: '好使千里姻緣一線牽。',
        pinyin: 'hǎo shǐ qiānlǐ yīnyuán yīxiàn qiān.',
        en: 'to facilitate destiny connecting across a thousand miles.'
      },
      {
        cn: '台北龍山寺月老殿向來香火鼎盛，',
        pinyin: 'Táiběi Lóngshānsì Yuèlǎo diàn xiànglái xiānghuǒ dǐngshèng,',
        en: 'Taipei Longshan Temple\'s Matchmaking Hall has always been very popular,',
        isNewParagraph: true
      },
      {
        cn: '不少民眾前來祈求良緣或為願望還願。',
        pinyin: 'bùshǎo mínzhòng qiánlái qíqiú liángyuán huò wèi yuànwàng huányuàn.',
        en: 'with many people coming to pray for good matches or to give thanks.'
      },
      {
        cn: '近期有民眾分享一段逗趣經歷，',
        pinyin: 'Jìnqī yǒu mínzhòng fēnxiǎng yīduàn dòuqù jīnglì,',
        en: 'Recently, a person shared a funny experience,',
        isNewParagraph: true
      },
      {
        cn: '她到龍山寺還願時，',
        pinyin: 'tā dào Lóngshānsì huányuàn shí,',
        en: 'when she went to Longshan Temple to give thanks,'
      },
      {
        cn: '剛好遇上一團韓國旅客走到月老像前。',
        pinyin: 'gānghǎo yùshàng yītuán Hánguó lǚkè zǒudào Yuèlǎo xiàng qián.',
        en: 'she happened to meet a group of Korean tourists walking up to the Yue Lao statue.'
      },
      {
        cn: '導遊向遊客介紹這裡是「祈求男女朋友的地方」，',
        pinyin: 'Dǎoyóu xiàng yóukè jièshào zhèlǐ shì "qíqiú nánnǚ péngyǒu de dìfāng",',
        en: 'The guide introduced this as "a place to pray for a boyfriend or girlfriend,"',
        isNewParagraph: true
      },
      {
        cn: '而供桌上整齊排著一疊疊偶像小卡，',
        pinyin: 'ér gòngzhuō shàng zhěngqí páizhe yī dié dié ǒuxiàng xiǎokǎ,',
        en: 'but the neat stacks of idol photo cards on the altar,'
      },
      {
        cn: '讓外國遊客瞬間露出滿臉問號。',
        pinyin: 'ràng wàiguó yóukè shùnjiān lùchū mǎnliǎn wènhào.',
        en: 'instantly left the foreign tourists looking puzzled.'
      },
      {
        cn: '原PO在Threads上笑說，',
        pinyin: 'Yuán PO zài Threads shàng xiào shuō,',
        en: 'The original poster laughed on Threads,',
        isNewParagraph: true
      },
      {
        cn: '自己此行是為了感謝先前',
        pinyin: 'zìjǐ cǐxíng shì wèile gǎnxiè xiānqián',
        en: 'that her trip was to give thanks for previously'
      },
      {
        cn: '「搶到演唱會門票，且演唱會順利舉行」的願望達成。',
        pinyin: '"qiǎngdào yǎnchànghuì ménpiào, qiě yǎnchànghuì shùnlì jǔxíng" de yuànwàng dáchéng.',
        en: 'having her wish of "snatching concert tickets and the concert being held successfully" come true.'
      },
      {
        cn: '她建議拜拜時除了祈求搶票成功，',
        pinyin: 'Tā jiànyì bàibài shí chúle qíqiú qiǎngpiào chénggōng,',
        en: 'She suggested that when praying, besides asking for successful ticket snatching,',
        isNewParagraph: true
      },
      {
        cn: '最好還附註「演唱會順利如期舉辦、雙方健康平安」。',
        pinyin: 'zuìhǎo hái fùzhù "yǎnchànghuì shùnlì rúqī jǔbàn, shuāngfāng jiànkāng píng\'ān".',
        en: 'one should add "the concert be held on time, and both sides remain healthy and safe."'
      },
      {
        cn: '貼文曝光後，有網友表示，',
        pinyin: 'Tiēwén pùguāng hòu, yǒu wǎngyǒu biǎoshì,',
        en: 'After the post was revealed, netizens commented,',
        isNewParagraph: true
      },
      {
        cn: '對於迷妹迷弟而言，',
        pinyin: 'duìyú mímèi mídì éryán,',
        en: 'that for fangirls and fanboys,'
      },
      {
        cn: '追星本身就能取代談戀愛。',
        pinyin: 'zhuīxīng běnshēn jiù néng qǔdài tánliàn\'ài.',
        en: 'chasing stars can replace dating itself.'
      },
      {
        cn: '「有演唱會能追，哪還顧得上感情」，',
        pinyin: '"Yǒu yǎnchànghuì néng zhuī, nǎ hái gùdéshàng gǎnqíng",',
        en: '"If there are concerts to chase, who cares about romance?"',
        isNewParagraph: true
      },
      {
        cn: '笑稱同事曾提醒追星會影響桃花，',
        pinyin: 'xiàochēng tóngshì céng tíxǐng zhuīxīng huì yǐngxiǎng táohuā,',
        en: 'They joked that colleagues warned fandom affects love luck,'
      },
      {
        cn: '但他們寧願把桃花運全部換成「搶到票」。',
        pinyin: 'dàn tāmen nìngyuàn bǎ táohuāyùn quánbù huànchéng "qiǎngdào piào".',
        en: 'but they\'d rather trade all their love luck for "getting tickets".'
      },
      {
        cn: '也有人觀察到近年供桌景象的改變，',
        pinyin: 'Yě yǒurén guānchá dào jìnnián gòngzhuō jǐngxiàng de gǎibiàn,',
        en: 'Others observed changes in recent years,',
        isNewParagraph: true
      },
      {
        cn: '表示龍山寺、小區廟宇甚至其他縣市的月老殿桌面上，',
        pinyin: 'biǎoshì Lóngshānsì, xiǎoqū miàoyǔ shènzhì qítā xiànshì de Yuèlǎo diàn zhuōmiàn shàng,',
        en: 'noting that on altars in Longshan Temple, local temples, and other cities,'
      },
      {
        cn: '越來越常見韓團、台灣團體，',
        pinyin: 'yuèláiyuè chángjiàn Hántuán, Táiwān tuántǐ,',
        en: 'Korean groups and Taiwanese groups are increasingly common,'
      },
      {
        cn: '甚至歐美藝人的小卡。',
        pinyin: 'shènzhì Ōuměi yìrén de xiǎokǎ.',
        en: 'and even photo cards of Western artists.'
      },
      {
        cn: '「神明的業務看起來逐漸朝跨領域發展」。',
        pinyin: '"Shénmíng de yèwù kànqǐlái zhújiàn cháo kuàlǐngyù fāzhǎn".',
        en: '"It seems the God\'s business operations are gradually expanding into cross-disciplinary fields."',
        isNewParagraph: true
      },
      {
        cn: '全台月老現在最忙的案件不是牽紅線，',
        pinyin: 'Quántái Yuèlǎo xiànzài zuì máng de ànjiàn bùshì qiān hóngxiàn,',
        en: 'The busiest cases for Matchmaking Gods across Taiwan right now aren\'t matching couples,',
        isNewParagraph: true
      },
      {
        cn: '而是搶票。',
        pinyin: 'érshì qiǎng piào.',
        en: 'but snatching tickets.'
      }
    ]
  }
];

export const LESSONS: Lesson[] = [
  {
    id: 'kindergarten_war',
    title: 'Kindergarten War',
    description: 'The ultimate parking showdown with the school downstairs.',
    icon: 'School',
    color: 'red',
    exercises: [
        {
          id: 'kw1',
          type: 'matching',
          question: 'Match the key players and terms:',
          pairs: [
            { item: '主委', match: 'HOA Head (Zhuwei)' },
            { item: '幼兒園', match: 'Kindergarten' },
            { item: '人行道', match: 'Sidewalk' },
            { item: '違規', match: 'Violation/Illegal' }
          ],
          pinyin: 'Zhǔwěi, Yòu\'éryuán, Rénxíngdào, Wéiguī',
          translation: 'Committee Head, Kindergarten, Sidewalk, Violation',
          explanation: 'The "Zhuwei" is the most powerful person in your building complex.'
        },
        {
          id: 'kw_excuse',
          type: 'assemble_sentence',
          question: 'Parent says: "Just 30 seconds!" (一下下). You reply: "Even one minute is not okay."',
          correctAnswer: '就算一分鐘也不行',
          prefilled: ['就算'],
          segments: ['一分鐘', '也', '不行'],
          distractors: ['一下', '可以', '好吧'],
          pinyin: 'Jiùsuàn yī fēnzhōng yě bùxíng.',
          translation: 'Even one minute is not okay.',
          explanation: 'You must shut down the "Just for a bit" (一下下) excuse immediately.'
        },
        {
          id: 'kw2',
          type: 'assemble_sentence',
          question: 'Translate: "Parents can park on the roadside, there is no reason to drive on the sidewalk."',
          correctAnswer: '家長可以停在路邊沒有理由騎上人行道',
          prefilled: ['家長', '可以', '停在路邊'],
          segments: ['沒有', '理由', '騎上', '人行道'],
          distractors: ['因為', '所以', '方便'],
          pinyin: 'Jiāzhǎng kěyǐ tíng zài lùbiān, méiyǒu lǐyóu qí shàng rénxíngdào.',
          translation: 'Parents can park on the roadside; there is no reason to ride onto the sidewalk.',
          explanation: 'Dismantling their excuse that "there is nowhere to park".'
        },
        {
          id: 'kw3',
          type: 'multiple_choice',
          question: 'They say: "Maybe you don\'t understand Taiwanese culture." You reply:',
          correctAnswer: '違規停車不是文化，是安全問題。',
          options: [
              '違規停車不是文化，是安全問題。',
              '我愛台灣文化。',
              '真的嗎？對不起。',
              '你們的學費很貴。'
          ],
          pinyin: 'Wéiguī tíngchē bùshì wénhuà, shì ānquán wèntí.',
          translation: 'Illegal parking is not culture, it is a safety issue.',
          explanation: 'Using "問題" (problem/issue) is simpler and clearer than "隱憂".'
        },
        {
          id: 'kw_evidence',
          type: 'assemble_sentence',
          question: 'Translate: "I have already photographed all the violating license plates."',
          correctAnswer: '我已經拍下所有違規的車牌',
          prefilled: ['我已經', '拍下'],
          segments: ['所有', '違規的', '車牌'],
          distractors: ['看', '沒有', '照片'],
          pinyin: 'Wǒ yǐjīng pāi xià suǒyǒu wéiguī de chēpái.',
          translation: 'I have already photographed all the violating license plates.',
          explanation: '"車牌" (chēpái) is license plate. Proof is power.'
        },
        {
          id: 'kw4',
          type: 'assemble_sentence',
          question: 'Translate: "If you don\'t intend on obeying traffic laws, then we have nothing to discuss."',
          correctAnswer: '如果不用心遵守交通規則那我們沒什麼好談的',
          prefilled: ['如果', '不用心'],
          segments: ['遵守', '交通規則', '那', '我們', '沒什麼', '好談的'],
          distractors: ['喜歡', '可以', '生氣'],
          pinyin: 'Rúguǒ bù yòngxīn zūnshǒu jiāotōng guīzé, nà wǒmen méishéme hǎo tán de.',
          translation: 'If you don\'t put effort into obeying traffic rules, then we have nothing to discuss.',
          explanation: 'A firm ultimatum for the meeting.'
        },
        {
          id: 'kw_report',
          type: 'multiple_choice',
          question: 'The principal asks you to be reasonable. You threaten action:',
          correctAnswer: '請不要逼我報警。',
          options: [
              '請不要逼我報警。',
              '學校很漂亮。',
              '我喜歡小孩。',
              '大家都是鄰居。'
          ],
          pinyin: 'Qǐng bùyào bī wǒ bàojǐng.',
          translation: 'Please don\'t force me to report to the police.',
          explanation: '"逼" (bī) means to force/push someone to do something.'
        },
        {
          id: 'kw5',
          type: 'dialogue',
          question: 'Management: "Why is your wife so angry? Can\'t you talk to her?" (The twist)',
          dialogueLines: [
              { speaker: 'other', text: '你太太為什麼這麼生氣？你不能跟她溝通一下嗎？' },
              { speaker: 'me', text: '...' }
          ],
          correctAnswer: '你們不該找她，她比我更討厭交通違規。',
          options: [
              '你們不該找她，她比我更討厭交通違規。',
              '我會叫她不要生氣。',
              '她是壞警察。',
              '因為她是台灣人。'
          ],
          pinyin: 'Nǐmen bù gāi zhǎo tā, tā bǐ wǒ gèng tǎoyàn jiāotōng wéiguī.',
          translation: 'You shouldn\'t have sought her out; she hates traffic violations more than I do.',
          explanation: 'Revealing that they made a huge mistake by involving the "Bad Cop".'
        }
    ]
  },
  {
    id: 'waiguoren',
    title: 'The "Waiguoren" Scream',
    description: 'How to handle kids screaming at you.',
    icon: 'Ear',
    color: 'emerald',
    exercises: [
      {
        id: 'w1',
        type: 'assemble_sentence',
        question: 'Translate: "Please educate your child, screaming \'Waiguoren\' is impolite."',
        correctAnswer: '請教育您的孩子大叫外國人是不禮貌的',
        prefilled: ['請', '教育', '您的', '孩子'],
        segments: ['大叫', '外國人', '是', '不禮貌的'],
        distractors: ['好', '很', '可愛'],
        pinyin: 'Qǐng jiàoyù nín de háizi, dàjiào wàiguórén shì bù lǐmào de.',
        translation: 'Please educate your child, screaming "Foreigner" is impolite.',
        explanation: 'Using "大叫" (dàjiào) refers to the yelling/screaming. "外國人" is the specific word they are yelling.'
      },
      {
        id: 'w2',
        type: 'multiple_choice',
        question: 'A child yells "Waiguoren!" repeatedly. How do you respond firmly to the parent?',
        correctAnswer: '我們都是人，不需要大驚小怪。',
        options: [
          '你的小孩很可愛。',
          '我們都是人，不需要大驚小怪。',
          '我要報警了！',
          '外國人喜歡吃漢堡。'
        ],
        pinyin: 'Wǒmen dōu shì rén, bù xūyào dàjīngxiǎoguài.',
        translation: 'We are all people, no need to make a fuss.',
        explanation: '"大驚小怪" (dàjīngxiǎoguài) is a great idiom for "making a fuss over nothing".'
      },
      {
        id: 'w3',
        type: 'translate_en_to_cn',
        question: 'Translate: "I can understand Chinese."',
        correctAnswer: '我聽得懂中文',
        prefilled: ['我'],
        options: ['聽得懂', '中文', '看不懂', '英文'], // Options for the bank
        distractors: ['什麼', '不'],
        pinyin: 'Wǒ tīng dé dǒng Zhōngwén.',
        translation: 'I can understand Chinese.',
        explanation: 'Simple and effective. Used to stop people from talking about you right in front of you.'
      }
    ]
  },
  {
    id: 'scooter',
    title: 'Sidewalk Scooters',
    description: 'Reclaiming the pedestrian right of way.',
    icon: 'Bike',
    color: 'amber',
    exercises: [
      {
        id: 's1',
        type: 'assemble_sentence',
        question: 'Translate: "Sir, this is a sidewalk, please ride on the road."',
        correctAnswer: '先生這裡是人行道請騎在馬路上',
        prefilled: ['先生', '這裡', '是'],
        segments: ['人行道', '請', '騎在', '馬路上'],
        distractors: ['公車', '開車', '上面'],
        pinyin: 'Xiānshēng, zhèlǐ shì rénxíngdào, qǐng qí zài mǎlù shàng.',
        translation: 'Sir, this is a sidewalk, please ride on the road.',
        explanation: '"人行道" (rénxíngdào) is sidewalk. "馬路" (mǎlù) is road/street.'
      },
      {
        id: 's2',
        type: 'multiple_choice',
        question: 'A scooter is honking at you to move while on the sidewalk. You say:',
        correctAnswer: '行人有路權，請你尊重。',
        options: [
          '行人有路權，請你尊重。',
          '你的機車很漂亮。',
          '我要買珍珠奶茶。',
          '對不起，我馬上讓開。'
        ],
        pinyin: 'Xíngrén yǒu lùquán, qǐng nǐ zūnzhòng.',
        translation: 'Pedestrians have the right of way, please respect that.',
        explanation: '"路權" (lùquán) means "right of way". Crucial vocabulary for Taiwan traffic disputes.'
      },
      {
        id: 's3',
        type: 'assemble_sentence',
        question: 'Translate: "It is very dangerous to drive here."',
        correctAnswer: '在這裡騎車非常危險',
        prefilled: ['在', '這裡', '騎車'],
        segments: ['非常', '危險'],
        distractors: ['安全', '好玩', '一點'],
        pinyin: 'Zài zhèlǐ qíchē fēicháng wéixiǎn.',
        translation: 'It is very dangerous to ride here.',
        explanation: 'Focus on safety ("危險") rather than just rules to sound more reasonable.'
      }
    ]
  },
  {
    id: 'invisible',
    title: 'The Invisible Foreigner',
    description: 'When they only talk to your Taiwanese friend.',
    icon: 'MessageCircle',
    color: 'blue',
    exercises: [
      {
        id: 'i1',
        type: 'matching',
        question: 'Match the phrases to their meaning',
        pairs: [
          { item: '直接問我', match: 'Ask me directly' },
          { item: '我會說中文', match: 'I speak Chinese' },
          { item: '這是我的事', match: 'This is my business' },
          { item: '請尊重', match: 'Please respect' }
        ],
        pinyin: 'Review key vocabulary.',
        translation: 'Matching Activity',
        explanation: 'Reinforcing key phrases for assertiveness.'
      },
      {
        id: 'i2',
        type: 'multiple_choice',
        question: 'The waiter asks your friend what YOU want to eat. You say:',
        correctAnswer: '請直接問我，我會說中文。',
        options: [
          '請直接問我，我會說中文。',
          '他不知道我要吃什麼。',
          '我是外國人，我不懂。',
          '請給我們菜單。'
        ],
        pinyin: 'Qǐng zhíjiē wèn wǒ, wǒ huì shuō Zhōngwén.',
        translation: 'Please ask me directly, I can speak Chinese.',
        explanation: '"直接" (zhíjiē) means directly. Be assertive but calm.'
      },
      {
        id: 'i3',
        type: 'assemble_sentence',
        question: 'Translate: "This is my matter, please speak to me."',
        correctAnswer: '這是我的事情請跟我說',
        prefilled: ['這是', '我的'],
        segments: ['事情', '請', '跟', '我', '說'],
        distractors: ['他不', '朋友', '誰'],
        pinyin: 'Zhè shì wǒ de shìqíng, qǐng gēn wǒ shuō.',
        translation: 'This is my matter, please speak to me.',
        explanation: 'Useful at banks or government offices where clerks might pivot to your local friend.'
      }
    ]
  },
  {
    id: 'litter',
    title: 'Litterbugs & Feeders',
    description: 'Dealing with trash and stray dog feeders.',
    icon: 'Trash2',
    color: 'rose',
    exercises: [
      {
        id: 'l1',
        type: 'assemble_sentence',
        question: 'Translate: "Sir, you dropped your cigarette butt."',
        correctAnswer: '先生你的煙蒂掉了',
        prefilled: ['先生'],
        segments: ['你的', '煙蒂', '掉了'],
        distractors: ['垃圾', '請', '錢'],
        pinyin: 'Xiānshēng, nǐ de yāndì diào le.',
        translation: 'Sir, you dropped your cigarette butt.',
        explanation: 'A passive-aggressive but polite way to tell someone they littered. Implies it was an accident.'
      },
      {
        id: 'l2',
        type: 'dialogue',
        question: 'Complete the conversation:',
        dialogueLines: [
            { speaker: 'other', text: '這裡的流浪狗很可憐，我餵牠們骨頭。' },
            { speaker: 'me', text: '...' }
        ],
        correctAnswer: '亂丟廚餘會造成環境髒亂。',
        options: [
          '亂丟廚餘會造成環境髒亂。',
          '狗狗很餓，謝謝你。',
          '這個雞排很好吃。',
        ],
        pinyin: 'Luàn diū chúyú huì zàochéng huánjìng zāngluàn.',
        translation: 'Randomly dumping food waste will cause environmental mess.',
        explanation: 'The other person said: "The stray dogs here are pitiful, I feed them bones."'
      }
    ]
  },
  {
    id: 'rental',
    title: 'Rental Rejections',
    description: 'When the landlord says "No Foreigners".',
    icon: 'Home',
    color: 'indigo',
    exercises: [
      {
        id: 'r1',
        type: 'matching',
        question: 'Match the rental terms:',
        pairs: [
          { item: '房東', match: 'Landlord' },
          { item: '租約', match: 'Lease' },
          { item: '押金', match: 'Deposit' },
          { item: '居留證', match: 'ARC (ID)' }
        ],
        pinyin: 'Fángdōng, Zūyuē, Yājīn, Jūliúzhèng',
        translation: 'Landlord, Lease, Deposit, ARC',
        explanation: 'Essential vocabulary for renting apartments.'
      },
      {
        id: 'r2',
        type: 'assemble_sentence',
        question: 'Translate: "I have a stable job and a residence permit."',
        correctAnswer: '我有穩定的工作和居留證',
        prefilled: ['我有', '穩定的'],
        segments: ['工作', '和', '居留證'],
        distractors: ['沒有', '錢', '但是'],
        pinyin: 'Wǒ yǒu wěndìng de gōngzuò hé jūliúzhèng.',
        translation: 'I have a stable job and an ARC.',
        explanation: 'Reassure them you are not a flight risk.'
      },
      {
        id: 'r3',
        type: 'multiple_choice',
        question: 'The landlord says they don\'t rent to foreigners. You reply politely:',
        correctAnswer: '我有正當職業，請不要歧視外國人。',
        options: [
            '我有正當職業，請不要歧視外國人。',
            '我要告你！',
            '為什麼？我不懂。',
            '那我可以租這間嗎？'
        ],
        pinyin: 'Wǒ yǒu zhèngdāng zhíyè, qǐng bùyào qíshì wàiguórén.',
        translation: 'I have a proper profession, please do not discriminate against foreigners.',
        explanation: 'Remind them of fairness without immediately threatening legal action.'
      }
    ]
  },
  {
    id: 'bank',
    title: 'Bank Bureaucracy',
    description: 'Battling for credit cards and accounts.',
    icon: 'CreditCard',
    color: 'violet',
    exercises: [
      {
        id: 'b1',
        type: 'assemble_sentence',
        question: 'Translate: "I want to open an account."',
        correctAnswer: '你好我想開戶頭',
        prefilled: ['你好', '我想'],
        segments: ['開', '戶頭'],
        distractors: ['買', '關', '錢'],
        pinyin: 'Nǐhǎo, wǒ xiǎng kāi hùtóu.',
        translation: 'Hello, I want to open an account.',
        explanation: '"戶頭" (hùtóu) is account.'
      },
      {
        id: 'b2',
        type: 'dialogue',
        question: 'Clerk: "Do you have a personal seal (yinzhang)?"',
        dialogueLines: [
            { speaker: 'other', text: '請問你有印章嗎？我們需要印章。' },
            { speaker: 'me', text: '...' }
        ],
        correctAnswer: '外國人可以用簽名代替印章。',
        options: [
            '外國人可以用簽名代替印章。',
            '我沒有錢。',
            '印章是什麼？',
            '我不想開戶了。'
        ],
        pinyin: 'Wàiguórén kěyǐ yòng qiānmíng dàitì yìnzhāng.',
        translation: 'Foreigners can use a signature instead of a seal.',
        explanation: 'Legally, foreigners in Taiwan can sign (簽名) documents instead of using a chop.'
      },
      {
        id: 'b3',
        type: 'assemble_sentence',
        question: 'Translate: "Please help me apply for a credit card."',
        correctAnswer: '請幫我申請信用卡',
        prefilled: ['請', '幫我'],
        segments: ['申請', '信用卡'],
        distractors: ['買', '給', '錢'],
        pinyin: 'Qǐng bāng wǒ shēnqǐng xìnyòngkǎ.',
        translation: 'Please help me apply for a credit card.',
        explanation: '"申請" (shēnqǐng) means to apply.'
      }
    ]
  },
  {
    id: 'noise',
    title: 'Noise Pollution',
    description: 'Dealing with loud scooters and supercars.',
    icon: 'Megaphone',
    color: 'orange',
    exercises: [
       {
        id: 'n1',
        type: 'matching',
        question: 'Match the noise terms:',
        pairs: [
          { item: '吵', match: 'Noisy/Loud' },
          { item: '安靜', match: 'Quiet' },
          { item: '排氣管', match: 'Exhaust Pipe' },
          { item: '公德心', match: 'Civic Morality' }
        ],
        pinyin: 'Chǎo, Ānjìng, Páiqìguǎn, Gōngdéxīn',
        translation: 'Noisy, Quiet, Exhaust Pipe, Public Morality',
        explanation: 'Key words for noise complaints.'
      },
      {
        id: 'n2',
        type: 'assemble_sentence',
        question: 'Translate: "Your exhaust pipe is too loud."',
        correctAnswer: '你的排氣管太吵了',
        prefilled: ['你的'],
        segments: ['排氣管', '太', '吵', '了'],
        distractors: ['車子', '聲音', '很'],
        pinyin: 'Nǐ de páiqìguǎn tài chǎo le.',
        translation: 'Your exhaust pipe is too loud.',
        explanation: 'Direct and factual.'
      },
      {
        id: 'n3',
        type: 'multiple_choice',
        question: 'A supercar revs loudly at 2 AM. You shout:',
        correctAnswer: '大家在睡覺，請有點公德心！',
        options: [
            '大家在睡覺，請有點公德心！',
            '你的車很酷！',
            '我也想買跑車。',
            '現在幾點了？'
        ],
        pinyin: 'Dàjiā zài shuìjiào, qǐng yǒudiǎn gōngdéxīn!',
        translation: 'Everyone is sleeping, please have some civic morality!',
        explanation: 'Appealing to "Gōngdéxīn" (public morality) is very effective in Taiwan.'
      }
    ]
  },
  {
    id: 'mrt_rush',
    title: 'MRT Rush Hour',
    description: 'Getting off before they get on.',
    icon: 'TrainFront',
    color: 'teal',
    exercises: [
      {
        id: 'm1',
        type: 'matching',
        question: 'Match the commuting terms:',
        pairs: [
          { item: '先下後上', match: 'Off first, On later' },
          { item: '借過', match: 'Excuse me (passing)' },
          { item: '車門', match: 'Train Door' },
          { item: '擋住', match: 'Block' }
        ],
        pinyin: 'Xiān xià hòu shàng, Jièguò, Chēmén, Dǎngzhù',
        translation: 'Off first then on, Excuse me, Door, Block',
        explanation: '"先下後上" is the golden rule of the Taipei MRT.'
      },
      {
        id: 'm2',
        type: 'assemble_sentence',
        question: 'Translate: "Please let people get off first."',
        correctAnswer: '請讓裡面的人先下車',
        prefilled: ['請讓', '裡面的'],
        segments: ['人', '先', '下車'],
        distractors: ['上車', '不', '門'],
        pinyin: 'Qǐng ràng lǐmiàn de rén xiān xiàchē.',
        translation: 'Please let the people inside get off first.',
        explanation: 'If they rush, you can simply say "先下車!" (Get off first!).'
      },
      {
        id: 'm3',
        type: 'multiple_choice',
        question: 'People are rushing in as the doors open, blocking you. You say:',
        correctAnswer: '不好意思，我要下車，請借過！',
        options: [
            '不好意思，我要下車，請借過！',
            '你們去哪裡？',
            '車門要關了。',
            '歡迎搭乘捷運。'
        ],
        pinyin: 'Bùhǎoyìsi, wǒ yào xiàchē, qǐng jièguò!',
        translation: 'Excuse me, I need to get off, please let me pass!',
        explanation: 'Be loud. "借過" (Jièguò) is the most important word here.'
      }
    ]
  },
  {
    id: 'mrt_blockers',
    title: 'Door Blockers',
    description: 'Pushing past the door hoggers.',
    icon: 'DoorOpen',
    color: 'teal',
    exercises: [
      {
        id: 'mb1',
        type: 'matching',
        question: 'Match the boarding terms:',
        pairs: [
          { item: '往裡面走', match: 'Move inside' },
          { item: '中間', match: 'Middle/Center' },
          { item: '很空', match: 'Very empty' },
          { item: '門口', match: 'Doorway' }
        ],
        pinyin: 'Wǎng lǐmiàn zǒu, Zhōngjiān, Hěn kōng, Ménkǒu',
        translation: 'Move inside, Middle, Very empty, Doorway',
        explanation: 'Crucial phrases for directing traffic in the MRT.'
      },
      {
        id: 'mb2',
        type: 'assemble_sentence',
        question: 'Translate: "Please move inside, the middle is very empty."',
        correctAnswer: '請往裡面走中間很空',
        prefilled: ['請', '往裡面'],
        segments: ['走', '中間', '很空'],
        distractors: ['外面', '很擠', '站'],
        pinyin: 'Qǐng wǎng lǐmiàn zǒu, zhōngjiān hěn kōng.',
        translation: 'Please move inside, the middle is very empty.',
        explanation: 'Politely pointing out the obvious solution to the crowding.'
      },
      {
        id: 'mb3',
        type: 'multiple_choice',
        question: 'The doorway is packed, but the center is empty. You say:',
        correctAnswer: '不好意思，請往裡面移動，不要擋在門口！',
        options: [
            '不好意思，請往裡面移動，不要擋在門口！',
            '你們喜歡站在門口嗎？',
            '我要下車。',
            '這個車廂很漂亮。'
        ],
        pinyin: 'Bùhǎoyìsi, qǐng wǎng lǐmiàn yídòng, bùyào dǎng zài ménkǒu!',
        translation: 'Excuse me, please move inside, don\'t block the doorway!',
        explanation: 'Being specific ("Move inside", "Don\'t block") works better than just "Excuse me".'
      }
    ]
  },
  {
    id: 'audio_blaster',
    title: 'Silent Carriage',
    description: 'No headphones? No noise.',
    icon: 'Headphones',
    color: 'cyan',
    exercises: [
      {
        id: 'a1',
        type: 'assemble_sentence',
        question: 'Translate: "Please wear headphones when watching videos."',
        correctAnswer: '看影片請戴耳機',
        prefilled: ['看影片'],
        segments: ['請', '戴', '耳機'],
        distractors: ['大聲', '說話', '不'],
        pinyin: 'Kàn yǐngpiàn qǐng dài ěrjī.',
        translation: 'Please wear headphones when watching videos.',
        explanation: '"影片" (yǐngpiàn) means video. "戴" (dài) is to wear (accessories).'
      },
      {
        id: 'a2',
        type: 'dialogue',
        question: 'A passenger is watching TikTok at full volume.',
        dialogueLines: [
            { speaker: 'other', text: '(Loud video noise playing from phone)' },
            { speaker: 'me', text: '...' }
        ],
        correctAnswer: '不好意思，車廂內請保持安靜。',
        options: [
            '不好意思，車廂內請保持安靜。',
            '你的手機沒電了。',
            '這是什麼影片？',
            '我也想聽。'
        ],
        pinyin: 'Bùhǎoyìsi, chēxiāng nèi qǐng bǎochí ānjìng.',
        translation: 'Excuse me, please keep quiet in the carriage.',
        explanation: 'Polite but direct.'
      },
      {
        id: 'a3',
        type: 'multiple_choice',
        question: 'They ignore you. You add firmly:',
        correctAnswer: '你的聲音吵到別人了，請自重。',
        options: [
            '你的聲音吵到別人了，請自重。',
            '這首歌很好聽。',
            '捷運上可以吃東西嗎？',
            '請給我看你的手機。'
        ],
        pinyin: 'Nǐ de shēngyīn chǎo dào biérén le, qǐng zìzhòng.',
        translation: 'Your noise is disturbing others, please have some self-respect.',
        explanation: '"自重" (zìzhòng) means conduct oneself with dignity/self-respect. It is a heavy word.'
      }
    ]
  },
  {
    id: 'unpaid_tutor',
    title: 'Not Your Teacher',
    description: 'When they want free English lessons.',
    icon: 'Coffee',
    color: 'amber',
    exercises: [
      {
        id: 'ut1',
        type: 'matching',
        question: 'Match the boundaries:',
        pairs: [
          { item: '私人時間', match: 'Private time' },
          { item: '下班', match: 'Off work' },
          { item: '練習', match: 'Practice' },
          { item: '聊天', match: 'Chat' }
        ],
        pinyin: 'Sīrén shíjiān, Xiàbān, Liànxí, Liáotiān',
        translation: 'Private time, Off work, Practice, Chat',
        explanation: 'Key words for establishing work/life boundaries.'
      },
      {
        id: 'ut2',
        type: 'assemble_sentence',
        question: 'Translate: "Sorry, right now is my private time."',
        correctAnswer: '不好意思現在是我的私人時間',
        prefilled: ['不好意思'],
        segments: ['現在', '是', '我的', '私人時間'],
        distractors: ['上班', '你', '工作'],
        pinyin: 'Bùhǎoyìsi, xiànzài shì wǒ de sīrén shíjiān.',
        translation: 'Sorry, right now is my private time.',
        explanation: 'A polite but definitive way to refuse an interaction.'
      },
      {
        id: 'ut3',
        type: 'dialogue',
        question: 'Parent: "Go practice English with the foreigner!"',
        dialogueLines: [
            { speaker: 'other', text: '弟弟，去跟外國叔叔說哈囉！練習英文！' },
            { speaker: 'me', text: '...' }
        ],
        correctAnswer: '抱歉，我現在只想安靜休息。',
        options: [
            '抱歉，我現在只想安靜休息。',
            '你好，我叫Tom。',
            '你的孩子很聰明。',
            '英文很難學。'
        ],
        pinyin: 'Bàoqiàn, wǒ xiànzài zhǐ xiǎng ānjìng xiūxí.',
        translation: 'Sorry, right now I just want to rest quietly.',
        explanation: 'You are under no obligation to be an unpaid tutor in your free time.'
      }
    ]
  },
  {
    id: 'gossip',
    title: 'Secret Gossip',
    description: 'When they think you don\'t understand.',
    icon: 'Eye',
    color: 'purple',
    exercises: [
      {
        id: 'g1',
        type: 'assemble_sentence',
        question: 'Translate: "I heard everything you just said."',
        correctAnswer: '你們剛才說的話我都聽到了',
        prefilled: ['你們', '剛才', '說的話'],
        segments: ['我', '都', '聽到了'],
        distractors: ['沒', '看不懂', '英文'],
        pinyin: 'Nǐmen gāngcái shuō de huà wǒ dōu tīngdào le.',
        translation: 'I heard everything you just said.',
        explanation: 'Often the most shocking thing you can say to gossipers.'
      },
      {
        id: 'g2',
        type: 'multiple_choice',
        question: 'Two people are discussing your appearance right in front of you. You say:',
        correctAnswer: '請不要在別人面前討論私事。',
        options: [
            '請不要在別人面前討論私事。',
            '謝謝你的誇獎。',
            '我不知道你在說什麼。',
            '台灣人很熱情。'
        ],
        pinyin: 'Qǐng bùyào zài biérén miànqián tǎolùn sīshì.',
        translation: 'Please don\'t discuss private matters in front of others.',
        explanation: 'Calling out the rudeness directly usually stops it immediately.'
      }
    ]
  },
  {
    id: 'forever_newbie',
    title: 'Forever Newbie',
    description: 'Handling the "Welcome to Taiwan" loop.',
    icon: 'Calendar',
    color: 'emerald',
    exercises: [
      {
        id: 'fn1',
        type: 'assemble_sentence',
        question: 'Translate: "I have lived in Taiwan for 15 years."',
        correctAnswer: '我已經在台灣住十五年了',
        prefilled: ['我已經', '在台灣'],
        segments: ['住', '十五年', '了'],
        distractors: ['剛來', '天', '去'],
        pinyin: 'Wǒ yǐjīng zài Táiwān zhù shíwǔ nián le.',
        translation: 'I have already lived in Taiwan for 15 years.',
        explanation: 'Establishing your veteran status early changes the conversation level.'
      },
      {
        id: 'fn2',
        type: 'dialogue',
        question: 'Stranger: "Welcome to Taiwan! Do you dare to eat stinky tofu?"',
        dialogueLines: [
            { speaker: 'other', text: '歡迎來台灣！臭豆腐你敢吃嗎？' },
            { speaker: 'me', text: '...' }
        ],
        correctAnswer: '我是老鳥了，我知道哪一家最好吃。',
        options: [
            '我是老鳥了，我知道哪一家最好吃。',
            '謝謝，我剛來一個禮拜。',
            '臭豆腐很臭，我不敢吃。',
            '台灣很漂亮。'
        ],
        pinyin: 'Wǒ shì lǎoniǎo le, wǒ zhīdào nǎ yījiā zuì hǎochī.',
        translation: 'I\'m an old hand (veteran), I know which shop is the best.',
        explanation: '"老鳥" (lǎoniǎo) is slang for a veteran or old hand, as opposed to a rookie (菜鳥).'
      }
    ]
  },
  {
    id: 'taxi_speed',
    title: 'Turbo Taxi',
    description: 'When the driver thinks he is in F1.',
    icon: 'Gauge',
    color: 'red',
    exercises: [
      {
        id: 'ts1',
        type: 'matching',
        question: 'Match the driving terms:',
        pairs: [
          { item: '開慢一點', match: 'Drive Slower' },
          { item: '趕時間', match: 'In a rush' },
          { item: '危險', match: 'Dangerous' },
          { item: '安全', match: 'Safe' }
        ],
        pinyin: 'Kāi màn yīdiǎn, Gǎn shíjiān, Wéixiǎn, Ānquán',
        translation: 'Drive slower, In a rush, Dangerous, Safe',
        explanation: 'Key vocabulary for controlling the ride.'
      },
      {
        id: 'ts2',
        type: 'assemble_sentence',
        question: 'Translate: "Sir, please drive slower, I am not in a rush."',
        correctAnswer: '司機大哥請開慢一點我不趕時間',
        prefilled: ['司機大哥', '請'],
        segments: ['開', '慢一點', '我', '不', '趕時間'],
        distractors: ['快一點', '好', '車'],
        pinyin: 'Sījī dàgē, qǐng kāi màn yīdiǎn, wǒ bù gǎn shíjiān.',
        translation: 'Driver, please drive a bit slower, I am not in a hurry.',
        explanation: 'Calling the driver "大哥" (Big Brother) is polite and friendly, effectively softening the request.'
      },
      {
        id: 'ts3',
        type: 'multiple_choice',
        question: 'The driver is weaving through traffic dangerously. You say:',
        correctAnswer: '這樣開車很可怕，安全第一。',
        options: [
          '這樣開車很可怕，安全第一。',
          '你的車很快。',
          '我要去台北101。',
          '謝謝你開這麼快。'
        ],
        pinyin: 'Zhèyàng kāichē hěn kěpà, ānquán dìyī.',
        translation: 'Driving like this is scary, safety first.',
        explanation: '"安全第一" (Safety First) is a universal argument that is hard to argue against.'
      }
    ]
  },
  {
    id: 'taxi_brake',
    title: 'The Vomit Comet',
    description: 'Dealing with the "Brake Tapper".',
    icon: 'Waves',
    color: 'orange',
    exercises: [
      {
        id: 'tb1',
        type: 'assemble_sentence',
        question: 'Translate: "Please don\'t keep tapping the brake."',
        correctAnswer: '請不要一直踩煞車',
        prefilled: ['請不要'],
        segments: ['一直', '踩', '煞車'],
        distractors: ['油門', '開車', '看'],
        pinyin: 'Qǐng bùyào yīzhí cǎi shàchē.',
        translation: 'Please do not keep stepping on the brake.',
        explanation: '"踩" (cǎi) is to step on/pedal. "煞車" (shàchē) is brake.'
      },
      {
        id: 'tb2',
        type: 'multiple_choice',
        question: 'You are feeling carsick from the jerky driving. You say:',
        correctAnswer: '司機，我很暈車，請開穩一點。',
        options: [
            '司機，我很暈車，請開穩一點。',
            '我肚子餓了。',
            '這台車很新。',
            '你要去哪裡？'
        ],
        pinyin: 'Sījī, wǒ hěn yūnchē, qǐng kāi wěn yīdiǎn.',
        translation: 'Driver, I am carsick, please drive smoother.',
        explanation: '"暈車" (yūnchē) is carsick. "穩" (wěn) means stable/steady/smooth.'
      },
      {
        id: 'tb3',
        type: 'assemble_sentence',
        question: 'Translate: "I pay by the meter, you can slow down."',
        correctAnswer: '我照錶付錢你可以慢慢開',
        prefilled: ['我', '照錶付錢'],
        segments: ['你可以', '慢慢', '開'],
        distractors: ['不用', '快快', '走'],
        pinyin: 'Wǒ zhào biǎo fùqián, nǐ kěyǐ mànman kāi.',
        translation: 'I pay according to the meter, you can drive slowly.',
        explanation: 'Reassuring them that you aren\'t paying a flat rate and they don\'t need to rush to the next fare.'
      }
    ]
  },
  {
    id: 'human_zoo',
    title: 'The Human Zoo',
    description: 'You are not a tourist attraction.',
    icon: 'Camera',
    color: 'pink',
    exercises: [
      {
        id: 'hz1',
        type: 'matching',
        question: 'Match the photography terms:',
        pairs: [
          { item: '拍照', match: 'Take photo' },
          { item: '合照', match: 'Photo together' },
          { item: '隱私', match: 'Privacy' },
          { item: '拒絕', match: 'Refuse' }
        ],
        pinyin: 'Pāizhào, Hézhào, Yǐnsī, Jùjué',
        translation: 'Take photo, Group photo, Privacy, Refuse',
        explanation: 'Vocabulary for managing your image rights.'
      },
      {
        id: 'hz2',
        type: 'assemble_sentence',
        question: 'Translate: "Sorry, I don\'t like taking photos with strangers."',
        correctAnswer: '抱歉我不喜歡跟陌生人合照',
        prefilled: ['抱歉', '我不喜歡'],
        segments: ['跟', '陌生人', '合照'],
        distractors: ['朋友', '看', '給'],
        pinyin: 'Bàoqiàn, wǒ bù xǐhuān gēn mòshēngrén hézhào.',
        translation: 'Sorry, I don\'t like taking photos with strangers.',
        explanation: 'A soft but clear refusal.'
      },
      {
        id: 'hz3',
        type: 'dialogue',
        question: 'Passerby: "Wow, a foreigner! Let\'s take a picture!"',
        dialogueLines: [
            { speaker: 'other', text: '哇！外國人耶！我們可以跟你拍張照嗎？' },
            { speaker: 'me', text: '...' }
        ],
        correctAnswer: '我不是景點，請尊重我的隱私。',
        options: [
            '我不是景點，請尊重我的隱私。',
            '好啊，要給錢嗎？',
            '我很帥，謝謝。',
            '我也想拍你。'
        ],
        pinyin: 'Wǒ bùshì jǐngdiǎn, qǐng zūnzhòng wǒ de yǐnsī.',
        translation: 'I am not a tourist attraction, please respect my privacy.',
        explanation: '"景點" (jǐngdiǎn) means scenic spot/attraction. This phrase emphasizes you are a person living here.'
      }
    ]
  },
  {
    id: 'line_police',
    title: 'LINE Cutters',
    description: 'When strangers demand your contact info.',
    icon: 'QrCode',
    color: 'lime',
    exercises: [
      {
        id: 'lp1',
        type: 'matching',
        question: 'Match the messaging terms:',
        pairs: [
          { item: '加好友', match: 'Add friend' },
          { item: '掃描', match: 'Scan (QR)' },
          { item: '方便', match: 'Convenient' },
          { item: '聯絡', match: 'Contact' }
        ],
        pinyin: 'Jiā hǎoyǒu, Sǎomiáo, Fāngbiàn, Liánluò',
        translation: 'Add friend, Scan, Convenient, Contact',
        explanation: 'LINE is the primary messaging app in Taiwan.'
      },
      {
        id: 'lp2',
        type: 'assemble_sentence',
        question: 'Translate: "Sorry, my LINE is only for family."',
        correctAnswer: '不好意思我的LINE只加家人',
        prefilled: ['不好意思', '我的LINE'],
        segments: ['只', '加', '家人'],
        distractors: ['給', '全部', '朋友'],
        pinyin: 'Bùhǎoyìsi, wǒ de LINE zhǐ jiā jiārén.',
        translation: 'Sorry, my LINE only adds family.',
        explanation: 'Using family ("家人") as the excuse makes it impossible for them to argue.'
      },
      {
        id: 'lp3',
        type: 'multiple_choice',
        question: 'Stranger: "Hey, let\'s be friends! Scan my QR code!"',
        correctAnswer: '我們不認識，不太方便。',
        options: [
            '我們不認識，不太方便。',
            '我有微信，沒有LINE。',
            '好啊，我也想認識你。',
            '我的手機沒電了。'
        ],
        pinyin: 'Wǒmen bù rènshì, bù tài fāngbiàn.',
        translation: 'We don\'t know each other, it\'s not very convenient.',
        explanation: '"不太方便" (Not very convenient) is the standard polite Taiwanese way to say "No" to almost anything.'
      }
    ]
  }
];

export const ICONS: Record<string, React.FC<any>> = {
  Ear,
  Bike,
  MessageCircle,
  Trash2,
  Home,
  CreditCard,
  Megaphone,
  TrainFront,
  Headphones,
  Coffee,
  Eye,
  Calendar,
  Gauge,
  Waves,
  DoorOpen,
  Camera,
  QrCode,
  School
};