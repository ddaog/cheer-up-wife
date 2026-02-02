export type Tone = 'calm' | 'warm' | 'cheerful' | 'rational' | 'emotional' | 'sad' | 'stern' | 'cheer';
export type Tag = 'condition' | 'hospital' | 'food' | 'sleep' | 'emotion' | 'prep' | 'item' | 'health' | 'activity' | 'safety' | 'touch' | 'weather' | 'thanks' | 'love' | 'empathy' | 'baby' | 'praise' | 'support' | 'hope' | 'comfort';
export type Trimester = 'early' | 'middle' | 'late' | 'all';

export interface Message {
    id: string;
    content: string;
    tone: Tone;
    tags: Tag[];
    trimester: Trimester;
}

export const messages: Message[] = [
    // --- EARLY (초기: 1-13주) ---
    // 입덧, 피로, 불안, 호르몬 변화
    { id: 'e1', content: '{nickname}, 입덧 때문에 못 먹는 거 보면 마음이 너무 아파. 억지로 먹지 말고 당기는 거 있으면 바로 말해줘.', tone: 'warm', tags: ['food', 'condition'], trimester: 'early' },
    { id: 'e2', content: '지금 겪는 피로감은 아기가 집을 짓느라 엄마 에너지를 써서 그렇대. 죄책감 갖지 말고 무조건 푹 자.', tone: 'calm', tags: ['sleep', 'condition'], trimester: 'early' },
    { id: 'e3', content: '호르몬 때문에 기분이 오르락내리락하는 건 당연한 거래. 짜증 내도 괜찮아, 내가 다 받아줄게.', tone: 'warm', tags: ['emotion'], trimester: 'early' },
    { id: 'e4', content: '아직 배가 안 나와서 실감이 안 날 수도 있어. 하지만 {nickname} 몸은 이미 엄청난 일을 하고 있어. 대단해.', tone: 'calm', tags: ['emotion', 'condition'], trimester: 'early' },
    { id: 'e5', content: '초기엔 유선이 발달하면서 가슴이 아플 수 있대. 오늘은 편한 속옷 입고 푹 쉬자.', tone: 'calm', tags: ['condition'], trimester: 'early' },
    { id: 'e6', content: '냄새 때문에 힘들지? 내가 환기시키고 냄새나는 건 다 치워둘게. 거실에서 좀 쉬고 있어.', tone: 'warm', tags: ['condition', 'food'], trimester: 'early' },
    { id: 'e7', content: '병원 검진 날이네. 아기집 잘 짓고 있는지 같이 확인하러 가자. 손 꼭 잡아줄게.', tone: 'warm', tags: ['hospital'], trimester: 'early' },
    { id: 'e8', content: '무리하지 마. 지금은 {nickname}랑 아기가 안전한 게 1순위야. 집안일은 내가 다 할게.', tone: 'calm', tags: ['condition', 'prep'], trimester: 'early' },

    // --- MIDDLE (중기: 14-27주) ---
    // 안정기, 배 불러옴, 허리 통증, 태동
    { id: 'm1', content: '배가 나오기 시작하면서 허리 아프지? 자기 전에 환도 서지 않게 마사지해줄게.', tone: 'warm', tags: ['condition', 'sleep'], trimester: 'middle' },
    { id: 'm2', content: '오늘 태동 느꼈어? 아기가 엄마 목소리 듣고 반응하나 봐. 정말 신비롭다.', tone: 'cheerful', tags: ['emotion', 'prep'], trimester: 'middle' },
    { id: 'm3', content: '철분제 먹어서 변비 생길 수 있대. 내가 유산균이랑 과일 챙겨놨어. 꼭 먹자.', tone: 'calm', tags: ['food', 'condition'], trimester: 'middle' },
    { id: 'm4', content: '임신선 생겨서 속상해하지 마. 영광스러운 훈장이야. 튼살 크림 꼼꼼히 발라줄게.', tone: 'warm', tags: ['condition', 'emotion'], trimester: 'middle' },
    { id: 'm5', content: '중기라 컨디션 좀 괜찮아졌지? 가볍게 산책하면서 바깥공기 쐬러 갈까?', tone: 'cheerful', tags: ['condition', 'emotion'], trimester: 'middle' },
    { id: 'm6', content: '자다 다리에 쥐나면 바로 나 깨워. 자다가도 1초 만에 일어나서 주물러 줄게!', tone: 'cheerful', tags: ['sleep', 'condition'], trimester: 'middle' },
    { id: 'm7', content: '아기 용품 보러 갈까? {nickname} 마음에 드는 걸로 다 고르자.', tone: 'cheerful', tags: ['prep'], trimester: 'middle' },
    { id: 'm8', content: '정밀 초음파 보는 날이네. 손가락 발가락 다 건강한지 꼼꼼히 보고 오자.', tone: 'warm', tags: ['hospital'], trimester: 'middle' },

    // --- LATE (후기: 28-40주) ---
    // 숨참, 소화불량, 부종, 불면증, 출산 공포
    { id: 'l1', content: '배가 많이 불러서 숨차지? 천천히 움직여도 돼. 내가 당신의 손과 발이 되어줄게.', tone: 'calm', tags: ['condition'], trimester: 'late' },
    { id: 'l2', content: '자궁이 위를 눌러서 소화가 안 된대. 조금씩 자주 먹자. 소화 잘 되는 걸로 준비할게.', tone: 'warm', tags: ['food', 'condition'], trimester: 'late' },
    { id: 'l3', content: '발이 많이 부었네. 쿠션에 다리 올리고 있어. 내가 족욕 물 받아올게.', tone: 'warm', tags: ['condition', 'sleep'], trimester: 'late' },
    { id: 'l4', content: '출산 때문에 무섭지? 나도 떨리지만, 우리가 함께라면 잘 해낼 수 있어. 무조건 {nickname} 편 들 거야.', tone: 'warm', tags: ['emotion', 'prep'], trimester: 'late' },
    { id: 'l5', content: '똑바로 눕기 힘들지? 바디필로우 내가 잘 받쳐줄게. 잠깐이라도 푹 잤으면 좋겠다.', tone: 'calm', tags: ['sleep'], trimester: 'late' },
    { id: 'l6', content: '가진통 자주 오면 체크해줘. 병원 언제 가야 할지 내가 계속 공부하고 있을게.', tone: 'calm', tags: ['hospital', 'condition'], trimester: 'late' },
    { id: 'l7', content: '출산 가방 다시 한번 점검해보자. 빠진 거 없이 내가 꼼꼼히 챙길게.', tone: 'cheerful', tags: ['prep'], trimester: 'late' },
    { id: 'l8', content: '이제 곧 우리 세 식구네. {nickname}가 건강하게만 출산하면 더 바랄 게 없어.', tone: 'warm', tags: ['emotion'], trimester: 'late' },

    // --- ALL (전 기간) ---
    { id: 'a1', content: '{nickname}, 오늘도 몸 무거운 상태로 하루 보내느라 정말 고생 많았어.', tone: 'calm', tags: ['condition', 'emotion'], trimester: 'all' },
    { id: 'a2', content: '엄마가 행복해야 아기도 행복하대. 오늘은 무조건 {nickname}가 하고 싶은 대로 하자.', tone: 'cheerful', tags: ['emotion'], trimester: 'all' },
    { id: 'a3', content: '거울 볼 때마다 살쪘다고 속상해하지 마. 내 눈엔 세상에서 제일 아름다운 D라인이야.', tone: 'warm', tags: ['emotion', 'condition'], trimester: 'all' },
    { id: 'a4', content: '병원 대기 시간 길어서 힘들지? 다음엔 꼭 재밌는 영상 다운로드 받아 갈게.', tone: 'cheerful', tags: ['hospital'], trimester: 'all' },
    { id: 'a5', content: '내가 더 많이 공부하고 노력할게. 부족한 남편 이해해줘서 고마워 사랑해.', tone: 'warm', tags: ['emotion'], trimester: 'all' },
    { id: 'a6', content: '갑자기 우울해지면 참지 말고 울어도 돼. 다 호르몬 때문이고, 당연한 감정이야.', tone: 'calm', tags: ['emotion'], trimester: 'all' },
    { id: 'a7', content: '오늘 점심은 맛있는 거 먹었어? 영양가 있는 거 잘 챙겨 먹어야 해.', tone: 'calm', tags: ['food'], trimester: 'all' },
    { id: 'a8', content: '무거운 건 절대 들지 마. 나 뒀다 뭐해? 이럴 때 쓰라고 있는 남편이야!', tone: 'cheerful', tags: ['condition'], trimester: 'all' },

    // --- EXTRA MBTI SPECIFIC (T=Reason/Solution, F=Emotion/Support) ---
    // T-Type (Solution-focused, Practical, Efficiency)
    { id: 't1', content: '{nickname}, 유산균이랑 철분제 챙겨먹었어? 알람 맞춰둘까?', tone: 'calm', tags: ['condition', 'food'], trimester: 'all' },
    { id: 't2', content: '오늘 병원 다녀오느라 고생했어. 다음 검진일은 캘린더에 미리 넣어뒀어.', tone: 'rational', tags: ['hospital', 'prep'], trimester: 'all' },
    { id: 't3', content: '입덧캔디랑 크래커 다 떨어져가네. 오늘 퇴근길에 올리브영 들러서 사갈게.', tone: 'rational', tags: ['food', 'prep'], trimester: 'early' },
    { id: 't4', content: '허리 많이 아프지? 임산부 바디필로우 후기 좋은 걸로 주문했어. 내일 도착한대.', tone: 'rational', tags: ['condition', 'item'], trimester: 'middle' },
    { id: 't5', content: '출산 가방 리스트 내가 엑셀로 정리해봤어. 빠진 거 있나 한번 봐줄래?', tone: 'rational', tags: ['prep'], trimester: 'late' },
    { id: 't6', content: '발 부종에는 족욕이 효과적이래. 물 온도 맞춰둘 테니 10분만 하고 자자.', tone: 'rational', tags: ['condition', 'health'], trimester: 'late' },
    { id: 't7', content: '오늘 저녁 메뉴 고민하지 마. 당신 좋아하는 그 집에서 포장해갈게. 시간만 말해.', tone: 'rational', tags: ['food'], trimester: 'all' },
    { id: 't8', content: '{nickname}, 무거운 건 절대 들지 마. 현관 앞에 둬, 내가 들어가서 정리할게.', tone: 'stern', tags: ['activity', 'safety'], trimester: 'all' },
    { id: 't9', content: '튼살 크림 바를 시간이야. 귀찮아도 지금 발라야 나중에 후회 안 한대. 내가 발라줄게.', tone: 'rational', tags: ['condition', 'touch'], trimester: 'middle' },
    { id: 't10', content: '오늘 날씨가 춥대. 나갈 때 핫팩 챙기고, 미끄러우니까 운동화 신고 가.', tone: 'stern', tags: ['safety', 'weather'], trimester: 'all' },

    // F-Type (Emotion-focused, Empathy, Validation)
    { id: 'f1', content: '{nickname}, 요즘 몸도 마음도 많이 힘들지? 그래도 우리 아기 위해 견뎌줘서 너무 고마워.', tone: 'emotional', tags: ['emotion', 'thanks'], trimester: 'all' },
    { id: 'f2', content: '거울 볼 때마다 속상해하지 마. 내 눈에는 세상에서 제일 아름다운 엄마야.', tone: 'warm', tags: ['emotion', 'love'], trimester: 'middle' },
    { id: 'f3', content: '오늘 밤은 아무 걱정 하지 말고 푹 잤으면 좋겠다. 내가 옆에서 지켜줄게.', tone: 'warm', tags: ['sleep', 'love'], trimester: 'all' },
    { id: 'f4', content: '입덧 때문에 먹고 싶은 것도 못 먹고... 내가 대신 아파해주고 싶다. 미안하고 사랑해.', tone: 'sad', tags: ['condition', 'empathy'], trimester: 'early' },
    { id: 'f5', content: '태동 느낄 때마다 당신이랑 아기가 연결된 게 신기하고 벅차. 정말 위대하고 멋져.', tone: 'emotional', tags: ['baby', 'praise'], trimester: 'middle' },
    { id: 'f6', content: '몸이 무거워서 자존감 떨어진다는 말... 마음 아파. 당신은 지금 기적을 만들고 있는 거야.', tone: 'emotional', tags: ['emotion', 'support'], trimester: 'late' },
    { id: 'f7', content: '우리 셋이 함께할 날도 머지않았네. 당신 닮은 아기라면 얼마나 예쁠까?', tone: 'cheerful', tags: ['baby', 'hope'], trimester: 'late' },
    { id: 'f8', content: '하루하루 변해가는 당신 모습이 나한테는 감동이야. 매일 더 사랑스러워.', tone: 'warm', tags: ['love', 'praise'], trimester: 'all' },
    { id: 'f9', content: '{nickname}, 가끔은 그냥 울어도 돼. 억지로 강한 척하지 않아도 돼. 내가 다 받아줄게.', tone: 'emotional', tags: ['emotion', 'comfort'], trimester: 'all' },
    { id: 'f10', content: '오늘 하루도 우리 아기 품고 있느라 진짜 고생 많았어. 쓰담쓰담.', tone: 'cheer', tags: ['emotion', 'praise'], trimester: 'all' },
];
