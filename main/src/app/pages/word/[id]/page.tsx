import { getRandomWord, getWordData } from '@/app/api/getWordData';
import WordDisplay from '../../client/WordDisplay';
import Client from '../../client/client';
type WordProps = {
  params: { id: string };
};
const words = [
  'sad',
  'safe',
  'sail',
  'salt',
  'same',
  'sand',
  'save',
  'say',
  'school',
  'science',
  'scissors',
  'search',
  'seat',
  'second',
  'see',
  'seem',
  'sell',
  'send',
  'sentence',
  'serve',
  'seven',
  'several',
  'sex',
  'shade',
  'shadow',
  'shake',
  'shape',
  'share',
  'sharp',
];

export default async function Word({ params }: WordProps) {
  const { id } = params;
  const word = words[Number(id)];
  const data = await getWordData(word);
  const { syns } = data[0].meta;
  return <WordDisplay id={id} word={word} synonyms={syns} />;
}

[
  {
    meta: {
      id: 'safe',
      uuid: '65973526-438d-4806-8cf4-cd21be77a865',
      src: 'coll_thes',
      section: 'alpha',
      target: {
        tuuid: 'dfdee976-2a6a-4867-9d21-5bcd82f4612b',
        tsrc: 'collegiate',
      },
      stems: ['safe', 'safely', 'safeness', 'safenesses', 'safer', 'safest'],
      syns: [
        ['all right', 'alright', 'secure'],
        ['secure', 'snug'],
        ['noncontroversial', 'uncontroversial'],
        [
          'alert',
          'careful',
          'cautious',
          'chary',
          'circumspect',
          'conservative',
          'considerate',
          'gingerly',
          'guarded',
          'heedful',
          'wary',
        ],
        [
          'anodyne',
          'benign',
          'harmless',
          'hurtless',
          'innocent',
          'innocuous',
          'inoffensive',
          'white',
        ],
        [
          'calculable',
          'dependable',
          'good',
          'reliable',
          'responsible',
          'secure',
          'solid',
          'steady',
          'sure',
          'tried',
          'tried-and-true',
          'true',
          'trustable',
          'trustworthy',
          'trusty',
        ],
      ],
      ants: [
        [
          'endangered',
          'exposed',
          'imperiled',
          'insecure',
          'liable',
          'open',
          'subject (to)',
          'susceptible',
          'threatened',
          'unsafe',
          'violable',
          'vulnerable',
        ],
        ['dangerous', 'hazardous', 'insecure', 'risky', 'unsafe'],
        ['controversial', 'hot-button'],
        [
          'careless',
          'heedless',
          'incautious',
          'unguarded',
          'unmindful',
          'unsafe',
          'unwary',
        ],
        [
          'adverse',
          'bad',
          'baleful',
          'baneful',
          'damaging',
          'dangerous',
          'deleterious',
          'detrimental',
          'evil',
          'harmful',
          'hurtful',
          'ill',
          'injurious',
          'mischievous',
          'nocuous',
          'noxious',
          'pernicious',
          'prejudicial',
          'wicked',
        ],
        [
          'dodgy',
          'uncertain',
          'undependable',
          'unreliable',
          'unsafe',
          'untrustworthy',
        ],
      ],
      offensive: false,
    },
    hwi: { hw: 'safe' },
    fl: 'adjective',
    def: [
      {
        sseq: [
          [
            [
              'sense',
              {
                sn: '1',
                dt: [
                  ['text', 'not exposed to the threat of loss or injury '],
                  [
                    'vis',
                    [
                      {
                        t: 'the minute the rain started, we looked for a place where we would be {it}safe{/it} from a drenching downpour',
                      },
                    ],
                  ],
                ],
                syn_list: [
                  [{ wd: 'all right' }, { wd: 'alright' }, { wd: 'secure' }],
                ],
                rel_list: [
                  [
                    { wd: 'hale' },
                    { wd: 'healthy' },
                    { wd: 'intact' },
                    { wd: 'sound' },
                    { wd: 'well' },
                    { wd: 'whole' },
                  ],
                  [
                    { wd: 'scatheless' },
                    { wd: 'unharmed' },
                    { wd: 'unhurt' },
                    { wd: 'uninjured' },
                    { wd: 'unscathed' },
                  ],
                ],
                phrase_list: [[{ wd: 'home free' }]],
                near_list: [
                  [
                    { wd: 'damaged' },
                    { wd: 'harmed' },
                    { wd: 'hurt' },
                    { wd: 'injured' },
                    { wd: 'scathed' },
                    { wd: 'wounded' },
                  ],
                ],
                ant_list: [
                  [
                    { wd: 'endangered' },
                    { wd: 'exposed' },
                    {
                      wd: 'imperiled',
                      wvrs: [{ wvl: 'or', wva: 'imperilled' }],
                    },
                    { wd: 'insecure' },
                    { wd: 'liable' },
                    { wd: 'open' },
                    { wd: 'subject (to)' },
                    { wd: 'susceptible' },
                    { wd: 'threatened' },
                    { wd: 'unsafe' },
                    { wd: 'violable' },
                    { wd: 'vulnerable' },
                  ],
                ],
              },
            ],
          ],
          [
            [
              'sense',
              {
                sn: '2',
                dt: [
                  ['text', 'providing safety '],
                  [
                    'vis',
                    [
                      {
                        t: 'we tried to find a {it}safe{/it} place to hide our valuables while we went swimming',
                      },
                    ],
                  ],
                ],
                syn_list: [[{ wd: 'secure' }, { wd: 'snug' }]],
                rel_list: [
                  [
                    { wd: 'guarding' },
                    { wd: 'protecting' },
                    { wd: 'safeguarding' },
                    { wd: 'sheltering' },
                    { wd: 'shielding' },
                  ],
                  [
                    { wd: 'defended' },
                    { wd: 'guarded' },
                    { wd: 'protected' },
                    { wd: 'sheltered' },
                    { wd: 'shielded' },
                  ],
                  [
                    { wd: 'impregnable' },
                    { wd: 'inviolable' },
                    { wd: 'invulnerable' },
                    { wd: 'unassailable' },
                    { wd: 'unconquerable' },
                  ],
                ],
                near_list: [
                  [
                    { wd: 'menacing' },
                    { wd: 'minatory' },
                    { wd: 'parlous' },
                    { wd: 'perilous' },
                    { wd: 'threatening' },
                  ],
                  [
                    { wd: 'undefended' },
                    { wd: 'unguarded' },
                    { wd: 'unprotected' },
                    { wd: 'vulnerable' },
                  ],
                  [
                    { wd: 'precarious' },
                    { wd: 'treacherous' },
                    { wd: 'uncertain' },
                  ],
                ],
                ant_list: [
                  [
                    { wd: 'dangerous' },
                    { wd: 'hazardous' },
                    { wd: 'insecure' },
                    { wd: 'risky' },
                    { wd: 'unsafe' },
                  ],
                ],
              },
            ],
          ],
          [
            [
              'sense',
              {
                sn: '3',
                dt: [
                  ['text', 'unlikely to provoke controversy or offense '],
                  [
                    'vis',
                    [
                      {
                        t: 'when chatting with strangers, she prefers to stick to {it}safe{/it} topics such as the weather',
                      },
                    ],
                  ],
                ],
                syn_list: [
                  [{ wd: 'noncontroversial' }, { wd: 'uncontroversial' }],
                ],
                rel_list: [
                  [{ wd: 'politically correct' }],
                  [
                    { wd: 'hands-down' },
                    { wd: 'incontestable' },
                    { wd: 'incontrovertible' },
                    { wd: 'indisputable' },
                    { wd: 'indubitable' },
                    { wd: 'undeniable' },
                    { wd: 'unquestionable' },
                  ],
                  [{ wd: 'irrefutable' }],
                  [
                    { wd: 'certain' },
                    { wd: 'definite' },
                    { wd: 'positive' },
                    { wd: 'sure' },
                  ],
                  [{ wd: 'uncontested' }, { wd: 'undisputed' }],
                ],
                near_list: [
                  [
                    { wd: 'arguable' },
                    { wd: 'contestable' },
                    { wd: 'controvertible' },
                    { wd: 'debatable' },
                    { wd: 'disputable' },
                    { wd: 'doubtable' },
                    { wd: 'doubtful' },
                    { wd: 'moot' },
                    { wd: 'questionable' },
                  ],
                  [{ wd: 'debated' }, { wd: 'disputed' }],
                ],
                ant_list: [[{ wd: 'controversial' }, { wd: 'hot-button' }]],
              },
            ],
          ],
          [
            [
              'sense',
              {
                sn: '4',
                dt: [
                  [
                    'text',
                    'having or showing a close attentiveness to avoiding danger or trouble ',
                  ],
                  [
                    'vis',
                    [
                      {
                        t: 'rewarded {it}safe{/it} drivers with lower insurance rates',
                      },
                    ],
                  ],
                ],
                syn_list: [
                  [
                    { wd: 'alert' },
                    { wd: 'careful' },
                    { wd: 'cautious' },
                    { wd: 'chary' },
                    { wd: 'circumspect' },
                    { wd: 'conservative' },
                    { wd: 'considerate' },
                    { wd: 'gingerly' },
                    { wd: 'guarded' },
                    { wd: 'heedful' },
                    { wd: 'wary' },
                  ],
                ],
                rel_list: [
                  [
                    { wd: 'advertent' },
                    { wd: 'attentive' },
                    { wd: 'awake' },
                    { wd: 'observant' },
                    { wd: 'regardful' },
                    { wd: 'vigilant' },
                    { wd: 'watchful' },
                  ],
                  [{ wd: 'hypercautious' }],
                  [
                    { wd: 'foresighted' },
                    { wd: 'foresightful' },
                    { wd: 'forethoughtful' },
                    { wd: 'provident' },
                    { wd: 'thoughtful' },
                  ],
                  [
                    { wd: 'cagey', wvrs: [{ wvl: 'also', wva: 'cagy' }] },
                    { wd: 'calculating' },
                    { wd: 'canny' },
                    { wd: 'shrewd' },
                  ],
                  [{ wd: 'deliberate' }, { wd: 'slow' }],
                  [{ wd: 'ultracareful' }, { wd: 'ultracautious' }],
                ],
                near_list: [
                  [
                    { wd: 'bold' },
                    { wd: 'brash' },
                    { wd: 'impetuous' },
                    { wd: 'rash' },
                    { wd: 'reckless' },
                    { wd: 'venturesome' },
                  ],
                  [
                    { wd: 'asleep' },
                    { wd: 'inattentive' },
                    { wd: 'regardless' },
                  ],
                  [{ wd: 'inconsiderate' }, { wd: 'thoughtless' }],
                  [
                    { wd: 'lax' },
                    { wd: 'neglectful' },
                    { wd: 'negligent' },
                    { wd: 'remiss' },
                  ],
                  [
                    { wd: 'imprudent' },
                    { wd: 'indiscreet' },
                    { wd: 'injudicious' },
                  ],
                  [{ wd: 'absentminded' }, { wd: 'forgetful' }],
                  [
                    { wd: 'inadvertent' },
                    { wd: 'unintentional' },
                    { wd: 'unplanned' },
                  ],
                ],
                ant_list: [
                  [
                    { wd: 'careless' },
                    { wd: 'heedless' },
                    { wd: 'incautious' },
                    { wd: 'unguarded' },
                    { wd: 'unmindful' },
                    { wd: 'unsafe' },
                    { wd: 'unwary' },
                  ],
                ],
              },
            ],
          ],
          [
            [
              'sense',
              {
                sn: '5',
                dt: [
                  [
                    'text',
                    'not causing or being capable of causing injury or hurt ',
                  ],
                  [
                    'vis',
                    [
                      {
                        t: 'that pain reliever is {it}safe{/it} for most people to take',
                      },
                    ],
                  ],
                ],
                syn_list: [
                  [
                    { wd: 'anodyne' },
                    { wd: 'benign' },
                    { wd: 'harmless' },
                    { wd: 'hurtless' },
                    { wd: 'innocent' },
                    { wd: 'innocuous' },
                    { wd: 'inoffensive' },
                    { wd: 'white' },
                  ],
                ],
                rel_list: [
                  [
                    { wd: 'healthful' },
                    { wd: 'healthy' },
                    { wd: 'salubrious' },
                    { wd: 'wholesome' },
                  ],
                  [{ wd: 'benignant' }],
                  [{ wd: 'sound' }, { wd: 'trustworthy' }],
                  [{ wd: 'gentle' }, { wd: 'gracious' }, { wd: 'mild' }],
                  [
                    { wd: 'nonthreatening' },
                    { wd: 'painless' },
                    { wd: 'unobjectionable' },
                  ],
                  [
                    { wd: 'noncorrosive' },
                    { wd: 'nondestructive' },
                    { wd: 'nonfatal' },
                    { wd: 'noninfectious' },
                    { wd: 'nonlethal' },
                    { wd: 'nonpoisonous' },
                    { wd: 'nonpolluting' },
                    { wd: 'nontoxic' },
                    { wd: 'nonvenomous' },
                  ],
                ],
                near_list: [
                  [{ wd: 'poisonous' }, { wd: 'venomous' }],
                  [
                    { wd: 'menacing' },
                    { wd: 'ominous' },
                    { wd: 'sinister' },
                    { wd: 'threatening' },
                  ],
                  [
                    { wd: 'hazardous' },
                    {
                      wd: 'imperiling',
                      wvrs: [{ wvl: 'or', wva: 'imperilling' }],
                    },
                    { wd: 'jeopardizing' },
                    { wd: 'parlous' },
                    { wd: 'perilous' },
                    { wd: 'risky' },
                    { wd: 'unsafe' },
                    { wd: 'unsound' },
                  ],
                  [
                    { wd: 'nasty' },
                    { wd: 'noisome' },
                    { wd: 'unhealthful' },
                    { wd: 'unhealthy' },
                    { wd: 'unwholesome' },
                  ],
                  [
                    { wd: 'offensive' },
                    { wd: 'painful' },
                    { wd: 'scathing' },
                    { wd: 'wounding' },
                  ],
                  [
                    { wd: 'deadly' },
                    { wd: 'fatal' },
                    { wd: 'lethal' },
                    { wd: 'ruinous' },
                  ],
                  [
                    { wd: 'destructive' },
                    { wd: 'insidious' },
                    { wd: 'malignant' },
                    { wd: 'noxious' },
                    { wd: 'pestilent' },
                    { wd: 'polluted' },
                    { wd: 'tainted' },
                  ],
                ],
                ant_list: [
                  [
                    { wd: 'adverse' },
                    { wd: 'bad' },
                    { wd: 'baleful' },
                    { wd: 'baneful' },
                    { wd: 'damaging' },
                    { wd: 'dangerous' },
                    { wd: 'deleterious' },
                    { wd: 'detrimental' },
                    { wd: 'evil' },
                    { wd: 'harmful' },
                    { wd: 'hurtful' },
                    { wd: 'ill' },
                    { wd: 'injurious' },
                    { wd: 'mischievous' },
                    { wd: 'nocuous' },
                    { wd: 'noxious' },
                    { wd: 'pernicious' },
                    { wd: 'prejudicial' },
                    { wd: 'wicked' },
                  ],
                ],
              },
            ],
          ],
          [
            [
              'sense',
              {
                sn: '6',
                dt: [
                  ['text', "worthy of one's trust "],
                  ['vis', [{ t: 'she always offers {it}safe{/it} advice' }]],
                ],
                syn_list: [
                  [
                    { wd: 'calculable' },
                    { wd: 'dependable' },
                    { wd: 'good' },
                    { wd: 'reliable' },
                    { wd: 'responsible' },
                    { wd: 'secure' },
                    { wd: 'solid' },
                    { wd: 'steady' },
                    { wd: 'sure' },
                    { wd: 'tried' },
                    { wd: 'tried-and-true' },
                    { wd: 'true' },
                    { wd: 'trustable' },
                    { wd: 'trustworthy' },
                    { wd: 'trusty' },
                  ],
                ],
                rel_list: [
                  [
                    { wd: 'constant' },
                    { wd: 'devoted' },
                    { wd: 'faithful' },
                    { wd: 'fast' },
                    { wd: 'loyal' },
                    { wd: 'staunch', wvrs: [{ wvl: 'also', wva: 'stanch' }] },
                    { wd: 'steadfast' },
                    { wd: 'true-blue' },
                  ],
                  [
                    { wd: 'honest' },
                    { wd: 'sincere' },
                    { wd: 'single-minded' },
                  ],
                  [{ wd: 'infallible' }, { wd: 'unerring' }],
                  [
                    { wd: 'bedrock' },
                    { wd: 'firm' },
                    { wd: 'sound' },
                    { wd: 'strong' },
                  ],
                  [{ wd: 'effective' }, { wd: 'telling' }],
                  [
                    { wd: 'attested' },
                    { wd: 'authenticated' },
                    { wd: 'confirmed' },
                    { wd: 'proven' },
                    { wd: 'valid' },
                    { wd: 'validated' },
                    { wd: 'verified' },
                  ],
                  [
                    { wd: 'blameless' },
                    { wd: 'faultless' },
                    { wd: 'guiltless' },
                    { wd: 'impeccable' },
                    { wd: 'inerrant' },
                    { wd: 'irreproachable' },
                    { wd: 'unimpeachable' },
                    { wd: 'unquestionable' },
                  ],
                ],
                near_list: [
                  [
                    { wd: 'disloyal' },
                    { wd: 'faithless' },
                    { wd: 'false' },
                    { wd: 'fickle' },
                    { wd: 'inconstant' },
                    { wd: 'perfidious' },
                    { wd: 'recreant' },
                    { wd: 'traitorous' },
                    { wd: 'treacherous' },
                    { wd: 'unfaithful' },
                    { wd: 'untrue' },
                  ],
                  [
                    { wd: 'deceitful' },
                    { wd: 'dishonest' },
                    { wd: 'lying' },
                    { wd: 'mendacious' },
                    { wd: 'untruthful' },
                  ],
                  [
                    { wd: 'debatable' },
                    { wd: 'disputable' },
                    { wd: 'doubtable' },
                    { wd: 'doubtful' },
                    { wd: 'dubious' },
                    { wd: 'fishy' },
                    {
                      wd: 'problematic',
                      wvrs: [{ wvl: 'also', wva: 'problematical' }],
                    },
                    { wd: 'questionable' },
                    { wd: 'shady' },
                    { wd: 'shaky' },
                    { wd: 'suspect' },
                    { wd: 'uncertain' },
                    { wd: 'unsound' },
                  ],
                  [{ wd: 'hazardous' }, { wd: 'risky' }],
                  [{ wd: 'unconfirmed' }, { wd: 'untried' }],
                ],
                ant_list: [
                  [
                    { wd: 'dodgy', wsls: ['chiefly British'] },
                    { wd: 'uncertain' },
                    { wd: 'undependable' },
                    { wd: 'unreliable' },
                    { wd: 'unsafe' },
                    { wd: 'untrustworthy' },
                  ],
                ],
              },
            ],
          ],
        ],
      },
    ],
    shortdef: [
      'not exposed to the threat of loss or injury',
      'providing safety',
      'unlikely to provoke controversy or offense',
    ],
  },
  {
    meta: {
      id: 'safe',
      uuid: '557a8ed7-9873-46a3-8f7c-74ef6d8be323',
      src: 'coll_thes',
      section: 'alpha',
      target: {
        tuuid: '8027ebab-ae9c-42c2-ab38-517ff4f5afad',
        tsrc: 'collegiate',
      },
      stems: ['safe', 'safes'],
      syns: [['coffer', 'safe-deposit box', 'strongbox']],
      ants: [],
      offensive: false,
    },
    hwi: { hw: 'safe' },
    fl: 'noun',
    def: [
      {
        sseq: [
          [
            [
              'sense',
              {
                dt: [
                  [
                    'text',
                    'a specially reinforced container to keep valuables safe ',
                  ],
                  [
                    'vis',
                    [
                      {
                        t: 'the hotel recommended that we keep all our valuables in its {it}safe{/it} during our stay',
                      },
                    ],
                  ],
                ],
                syn_list: [
                  [
                    { wd: 'coffer' },
                    { wd: 'safe-deposit box' },
                    { wd: 'strongbox' },
                  ],
                ],
                rel_list: [
                  [{ wd: 'lockbox' }],
                  [{ wd: 'vault' }],
                  [{ wd: 'storeroom' }, { wd: 'treasury' }],
                  [
                    { wd: 'box' },
                    { wd: 'caddy' },
                    { wd: 'case' },
                    { wd: 'casket' },
                    { wd: 'chest' },
                    { wd: 'footlocker' },
                    { wd: 'locker' },
                    { wd: 'trunk' },
                  ],
                ],
              },
            ],
          ],
        ],
      },
    ],
    shortdef: ['a specially reinforced container to keep valuables safe'],
  },
  {
    meta: {
      id: 'safe-deposit box',
      uuid: 'edcffc95-261e-46ab-9566-e2dd962d1a17',
      src: 'coll_thes',
      section: 'alpha',
      target: {
        tuuid: '43eb9ec3-7ec1-40d7-9ca2-2582785ad321',
        tsrc: 'collegiate',
      },
      stems: ['safe-deposit box', 'safety-deposit box'],
      syns: [['coffer', 'safe', 'strongbox']],
      ants: [],
      offensive: false,
    },
    hwi: { hw: 'safe-deposit box' },
    fl: 'noun',
    def: [
      {
        sseq: [
          [
            [
              'sense',
              {
                dt: [
                  [
                    'text',
                    'a specially reinforced container to keep valuables safe ',
                  ],
                  [
                    'vis',
                    [
                      {
                        t: 'kept the deed to the house in a {it}safe-deposit box{/it} at the bank',
                      },
                    ],
                  ],
                ],
                syn_list: [
                  [{ wd: 'coffer' }, { wd: 'safe' }, { wd: 'strongbox' }],
                ],
                rel_list: [
                  [{ wd: 'lockbox' }],
                  [{ wd: 'vault' }],
                  [{ wd: 'storeroom' }, { wd: 'treasury' }],
                  [
                    { wd: 'box' },
                    { wd: 'caddy' },
                    { wd: 'case' },
                    { wd: 'casket' },
                    { wd: 'chest' },
                    { wd: 'footlocker' },
                    { wd: 'locker' },
                    { wd: 'trunk' },
                  ],
                ],
              },
            ],
          ],
        ],
      },
    ],
    shortdef: ['a specially reinforced container to keep valuables safe'],
  },
  {
    meta: {
      id: 'safe sex',
      uuid: 'ff3db076-e119-43c4-a9a1-5ef06ff2e5b0',
      src: 'CTcompile',
      section: 'alpha',
      stems: ['safe sex'],
      syns: [
        [
          'coition',
          'coitus',
          'commerce',
          'congress',
          'copulating',
          'copulation',
          'coupling',
          'intercourse',
          'lovemaking',
          'mating',
          'relations',
          'sex',
          'sex act',
          'sexual intercourse',
          'sexual relations',
          'carnality',
          'sexuality',
          'breeding',
          'insemination',
          'dalliance',
          'hanky-panky',
          'whoopee',
          'fornication',
        ],
      ],
      ants: [],
      offensive: false,
    },
    hwi: { hw: 'safe sex' },
    fl: 'noun',
    def: [
      {
        sseq: [
          [
            [
              'sense',
              {
                dt: [['text', 'as in {it}sex{/it}, {it}sexual relations{/it}']],
                sim_list: [
                  [
                    { wd: 'coition' },
                    { wd: 'coitus' },
                    { wd: 'commerce' },
                    { wd: 'congress' },
                    { wd: 'copulating' },
                    { wd: 'copulation' },
                    { wd: 'coupling' },
                    { wd: 'intercourse' },
                    { wd: 'lovemaking' },
                    { wd: 'mating' },
                    { wd: 'relations' },
                    { wd: 'sex' },
                    { wd: 'sex act' },
                    { wd: 'sexual intercourse' },
                    { wd: 'sexual relations' },
                  ],
                  [{ wd: 'carnality' }, { wd: 'sexuality' }],
                  [{ wd: 'breeding' }, { wd: 'insemination' }],
                  [
                    { wd: 'dalliance' },
                    { wd: 'hanky-panky' },
                    { wd: 'whoopee' },
                  ],
                  [{ wd: 'fornication' }],
                ],
              },
            ],
          ],
        ],
      },
    ],
    shortdef: ['as in sex, sexual relations'],
  },
  {
    meta: {
      id: 'safe-deposit boxes',
      uuid: '686e8658-4e4b-451f-bc98-7ef4fdceb3f7',
      src: 'coll_thes',
      section: 'alpha',
      stems: ['safe-deposit boxes'],
      syns: [['coffers', 'safes', 'strongboxes']],
      ants: [],
      offensive: false,
    },
    hwi: { hw: 'safe-deposit boxes' },
    fl: 'noun',
    sls: ['plural of {d_link|safe-deposit box|safe-deposit box}'],
    def: [
      {
        sseq: [
          [
            [
              'sense',
              {
                dt: [
                  [
                    'text',
                    'a specially reinforced container to keep valuables safe ',
                  ],
                  [
                    'vis',
                    [
                      {
                        t: 'kept the deed to the house in a {it}safe-deposit box{/it} at the bank',
                      },
                    ],
                  ],
                ],
                syn_list: [
                  [{ wd: 'coffers' }, { wd: 'safes' }, { wd: 'strongboxes' }],
                ],
                rel_list: [
                  [{ wd: 'lockboxes' }],
                  [{ wd: 'vaults' }],
                  [{ wd: 'storerooms' }, { wd: 'treasuries' }],
                  [
                    { wd: 'boxes' },
                    { wd: 'caddies' },
                    { wd: 'cases' },
                    { wd: 'caskets' },
                    { wd: 'chests' },
                    { wd: 'footlockers' },
                    { wd: 'lockers' },
                    { wd: 'trunks' },
                  ],
                ],
              },
            ],
          ],
        ],
      },
    ],
    shortdef: ['a specially reinforced container to keep valuables safe'],
  },
  {
    meta: {
      id: 'fail-safe',
      uuid: 'c82a822e-25d5-4a5b-9452-2240c183fa5e',
      src: 'coll_thes',
      section: 'alpha',
      target: {
        tuuid: '81faf131-71cb-4f8f-b4ce-b6f6036443a4',
        tsrc: 'collegiate',
      },
      stems: ['fail-safe'],
      syns: [
        [
          "can't-miss",
          'certain',
          'infallible',
          'sure',
          'surefire',
          'unfailing',
        ],
      ],
      ants: [['fallible']],
      offensive: false,
    },
    hwi: { hw: 'fail-safe' },
    fl: 'adjective',
    def: [
      {
        sseq: [
          [
            [
              'sense',
              {
                dt: [
                  ['text', 'not likely to fail '],
                  [
                    'vis',
                    [
                      {
                        t: "flowers have been traditionally regarded as the {it}fail-safe{/it} gift for Valentine's Day",
                      },
                    ],
                  ],
                ],
                syn_list: [
                  [
                    { wd: "can't-miss" },
                    { wd: 'certain' },
                    { wd: 'infallible' },
                    { wd: 'sure' },
                    { wd: 'surefire' },
                    { wd: 'unfailing' },
                  ],
                ],
                rel_list: [
                  [{ wd: 'dependable' }, { wd: 'reliable' }],
                  [{ wd: 'deadly' }, { wd: 'unerring' }],
                ],
                near_list: [
                  [
                    { wd: 'doubtful' },
                    { wd: 'questionable' },
                    { wd: 'uncertain' },
                  ],
                ],
                ant_list: [[{ wd: 'fallible' }]],
              },
            ],
          ],
        ],
      },
    ],
    shortdef: ['not likely to fail'],
  },
  {
    meta: {
      id: 'fail-safe',
      uuid: '078e8308-8935-422c-881b-f56b7bf68c93',
      src: 'coll_thes',
      section: 'alpha',
      target: {
        tuuid: '6d2b4079-cddc-4d0e-bf99-9a792db78435',
        tsrc: 'collegiate',
      },
      stems: ['fail-safe', 'fail-safes'],
      syns: [['caution', 'palladium', 'precaution', 'preventive', 'safeguard']],
      ants: [],
      offensive: false,
    },
    hwi: { hw: 'fail-safe' },
    fl: 'noun',
    def: [
      {
        sseq: [
          [
            [
              'sense',
              {
                dt: [
                  ['text', 'a measure taken to preclude loss or injury '],
                  [
                    'vis',
                    [
                      {
                        t: 'there are so many {it}fail-safes{/it} built into the system that a highly unlikely series of mistakes would have to be made before failure could occur',
                      },
                    ],
                  ],
                ],
                syn_list: [
                  [
                    { wd: 'caution' },
                    { wd: 'palladium' },
                    { wd: 'precaution' },
                    { wd: 'preventive' },
                    { wd: 'safeguard' },
                  ],
                ],
                rel_list: [
                  [
                    { wd: 'armor' },
                    { wd: 'cover' },
                    { wd: 'guard' },
                    { wd: 'protection' },
                    { wd: 'screen' },
                    { wd: 'shield' },
                    { wd: 'wall' },
                    { wd: 'ward' },
                  ],
                ],
              },
            ],
          ],
        ],
      },
    ],
    shortdef: ['a measure taken to preclude loss or injury'],
  },
  {
    meta: {
      id: 'pie safe',
      uuid: '9faa6880-e636-4c13-b0cf-d488801e5bf8',
      src: 'CTcompile',
      section: 'alpha',
      stems: ['pie safe'],
      syns: [
        [
          'cuddy',
          'dresser',
          'bookcase',
          'breakfront',
          'chest',
          'china closet',
          'credence',
          'credenza',
          'étagère',
          'secretary',
          'showcase',
          'taboret',
          'vitrine',
          'armoire',
          'clothespress',
          'garderobe',
          'wardrobe',
          'buffet',
          'cabinet',
          'closet',
          'console',
          'cupboard',
          'hutch',
          'locker',
          'press',
          'sideboard',
          'cabinetry',
          'shelving',
        ],
      ],
      ants: [],
      offensive: false,
    },
    hwi: { hw: 'pie safe' },
    fl: 'noun',
    def: [
      {
        sseq: [
          [
            [
              'sense',
              {
                dt: [['text', 'as in {it}dresser{/it}, {it}cuddy{/it}']],
                sim_list: [
                  [{ wd: 'cuddy' }, { wd: 'dresser' }],
                  [
                    { wd: 'bookcase' },
                    { wd: 'breakfront' },
                    { wd: 'chest' },
                    { wd: 'china closet' },
                    { wd: 'credence' },
                    { wd: 'credenza' },
                    { wd: 'étagère', wvrs: [{ wvl: 'or', wva: 'etagere' }] },
                    { wd: 'secretary' },
                    { wd: 'showcase' },
                    { wd: 'taboret', wvrs: [{ wvl: 'or', wva: 'tabouret' }] },
                    { wd: 'vitrine' },
                  ],
                  [
                    { wd: 'armoire' },
                    { wd: 'clothespress' },
                    { wd: 'garderobe' },
                    { wd: 'wardrobe' },
                  ],
                  [
                    { wd: 'buffet' },
                    { wd: 'cabinet' },
                    { wd: 'closet' },
                    { wd: 'console' },
                    { wd: 'cupboard' },
                    { wd: 'hutch' },
                    { wd: 'locker' },
                    { wd: 'press' },
                    { wd: 'sideboard' },
                  ],
                  [{ wd: 'cabinetry' }, { wd: 'shelving' }],
                ],
              },
            ],
          ],
        ],
      },
    ],
    shortdef: ['as in dresser, cuddy'],
  },
];
