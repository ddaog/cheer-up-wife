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

    // --- ADDITIONAL CONTENT (Humor, Short, T/F Specific) ---
    { id: 'x1', content: '식기세척기는 내가 돌릴게, {nickname}는 숨만 쉬어!', tone: 'cheerful', tags: ['activity', 'prep'], trimester: 'all' },
    { id: 'x2', content: '아기 낳으면 진짜 전쟁이래.. 지금 이 고요함을 즐기자 (물론 내가 다 할 거지만)', tone: 'cheer', tags: ['emotion', 'baby'], trimester: 'late' },
    { id: 'x3', content: '오늘따라 더 예뻐 보이네? 호르몬 요정님이 오셨나 봐!', tone: 'cheerful', tags: ['love', 'praise'], trimester: 'all' },
    { id: 'x4', content: '밤에 화장실 갈 때 무조건 나 깨워. 자다가도 업고 뛸 수 있어.', tone: 'cheerful', tags: ['sleep', 'safety'], trimester: 'late' },
    { id: 'x5', content: '입덧약 먹었어? 시간 체크해서 미리미리 먹어야 효과 있대.', tone: 'rational', tags: ['condition', 'health'], trimester: 'early' },
    { id: 'x6', content: '허리 아플 땐 참지 마. 바로 말해, 마사지 대기조 항시 대기 중.', tone: 'rational', tags: ['condition', 'touch'], trimester: 'middle' },
    { id: 'x7', content: '배 뭉침 있으면 하던 거 멈추고 바로 누워야 해. 그게 가장 빠른 해결책이야.', tone: 'rational', tags: ['condition', 'safety'], trimester: 'all' },
    { id: 'x8', content: '스트레스 받지 마. 아기한테 안 좋아. 그냥 다 나한테 화풀이해!', tone: 'warm', tags: ['emotion', 'comfort'], trimester: 'all' },
    { id: 'x9', content: '지금 {nickname}가 느끼는 모든 감정은 다 옳아. 내가 끝까지 편 들어줄게.', tone: 'emotional', tags: ['emotion', 'support'], trimester: 'all' },
    { id: 'x10', content: '오늘 저녁은 배달 찬스 어때? 설거지 없는 세상에서 살자.', tone: 'cheerful', tags: ['food', 'prep'], trimester: 'all' },
    { id: 'x11', content: '출산 가방에 빨대 텀블러 꼭 챙겨야 한대. 내가 예쁜 걸로 주문해뒀어.', tone: 'rational', tags: ['prep', 'item'], trimester: 'late' },
    { id: 'x12', content: '손목 보호대 찼어? 지금부터 아껴야 나중에 고생 안 해.', tone: 'stern', tags: ['health', 'safety'], trimester: 'late' },
    { id: 'x13', content: '혹시 우울해? 그냥 꼬옥 안아줄까? 말만 해, 다 들어줄게.', tone: 'emotional', tags: ['emotion', 'touch'], trimester: 'all' },
    { id: 'x14', content: '우리 아기 초음파 사진 다시 봐도 진짜 귀엽다. 누구 닮아서 도치맘 도치파파 예약이네.', tone: 'cheerful', tags: ['baby', 'love'], trimester: 'middle' },
    { id: 'x15', content: '임신하고 건망증 생기는 건 뇌가 아기에 집중해서 그런 거래. 똑똑한 거야!', tone: 'warm', tags: ['condition', 'praise'], trimester: 'all' },
    { id: 'x16', content: '잘하고 있어, 충분히 잘하고 있어. 더 이상 완벽할 순 없어.', tone: 'emotional', tags: ['emotion', 'praise'], trimester: 'all' },
    { id: 'x17', content: '다리 쥐 났어? 발끝 몸쪽으로 당겨! 내가 주물러줄게.', tone: 'rational', tags: ['condition', 'touch'], trimester: 'middle' },
    { id: 'x18', content: '오늘 영양제 챙겨 먹었는지 검사 들어갑니다~ 아 한번만 봐주세요~', tone: 'cheerful', tags: ['health', 'food'], trimester: 'all' },
    { id: 'x19', content: '무거운 건 내 눈앞에 보이면 안 돼. 내가 다 들 거야, 비켜 비켜!', tone: 'cheerful', tags: ['activity', 'safety'], trimester: 'all' },
    { id: 'x20', content: '병원 검진 언제지? 일정 공유해주라, 연차 쓰고 같이 가고 싶어.', tone: 'warm', tags: ['hospital', 'love'], trimester: 'all' },
    { id: 'x21', content: '지금 먹고 싶은 거 없어? 3초 안에 대답하면 사러 나간다! 3, 2, 1...', tone: 'cheerful', tags: ['food'], trimester: 'all' },
    { id: 'x22', content: '옷이 작아져서 속상해? 쇼핑하러 가자! 임부복도 패션이야.', tone: 'cheerful', tags: ['emotion', 'prep'], trimester: 'middle' },
    { id: 'x23', content: '매일매일 배 크기 사진 찍어둘까? 나중에 멋진 타임랩스가 될 거야.', tone: 'cheerful', tags: ['baby', 'prep'], trimester: 'middle' },
    { id: 'x24', content: '똑바로 눕기 힘들면 옆으로 누워 봐. 등 뒤에 쿠션 끼워줄게.', tone: 'calm', tags: ['sleep', 'touch'], trimester: 'late' },
    { id: 'x25', content: '숨차지? 천천히 심호흡 해봐. 후~ 하~ 후~ 하~', tone: 'calm', tags: ['condition'], trimester: 'late' },
    { id: 'x26', content: '오늘도 견뎌내느라 고생했어. 당신 몸은 지금 우주를 만들고 있는 중이야.', tone: 'emotional', tags: ['praise', 'baby'], trimester: 'all' },
    { id: 'x27', content: '임당 검사 걱정하지 마. 식단 관리 내가 같이 할게. 우린 한 팀이잖아.', tone: 'rational', tags: ['hospital', 'food'], trimester: 'middle' },
    { id: 'x28', content: '철분제 먹을 때 오렌지 주스랑 같이 먹으면 흡수율 좋대. 꿀팁이지?', tone: 'rational', tags: ['health', 'food'], trimester: 'middle' },
    { id: 'x29', content: '오늘 밤엔 태교 동화 읽어줄까? 아빠 목소리 들려주고 싶어.', tone: 'warm', tags: ['baby', 'love'], trimester: 'middle' },
    { id: 'x30', content: '가슴 답답하면 베란다 문 좀 열까? 시원한 공기 좀 마셔봐.', tone: 'calm', tags: ['condition'], trimester: 'all' },
    { id: 'x31', content: '배꼽 튀어나온 거 너무 귀여워. 딩동~ 누르면 아기가 나올까?', tone: 'cheerful', tags: ['baby', 'touch'], trimester: 'late' },
    { id: 'x32', content: '출산 휴가 계획은 잘 짰어? 나도 육아 휴직 알아보고 있어. 같이 키우자.', tone: 'rational', tags: ['prep'], trimester: 'late' },
    { id: 'x33', content: '오늘 점심 뭐 먹었어? 사진 찍어서 보내줘, 맛있는 거 먹었나 검사 좀 하게.', tone: 'cheerful', tags: ['food'], trimester: 'all' },
    { id: 'x34', content: '튼살 생겨도 내 눈엔 제일 섹시해. 진짜야.', tone: 'warm', tags: ['love', 'emotion'], trimester: 'middle' },
    { id: 'x35', content: '자다가 화장실 자주 가는 거 힘들지? 갔다 오면 토닥토닥 해줄게.', tone: 'warm', tags: ['sleep', 'touch'], trimester: 'late' },
    { id: 'x36', content: '골반 아플 땐 짐볼 타는 게 좋대. 짐볼 하나 장만할까?', tone: 'rational', tags: ['condition', 'item'], trimester: 'late' },
    { id: 'x37', content: '조리원 예약은 했어? 인기 많은 데는 빨리 마감된대. 서두르자.', tone: 'rational', tags: ['prep'], trimester: 'early' },
    { id: 'x38', content: '만삭 사진 언제 찍을까? 당신이 제일 예쁜 순간을 남기고 싶어.', tone: 'warm', tags: ['prep', 'love'], trimester: 'late' },
    { id: 'x39', content: '아기 이름 뭐로 할지 생각했어? 나는 우리 둘 이름 섞어서 짓고 싶어.', tone: 'cheerful', tags: ['baby', 'love'], trimester: 'middle' },
    { id: 'x40', content: '{nickname}, 사랑해. 이 말로도 부족할 만큼 많이 사랑해.', tone: 'emotional', tags: ['love'], trimester: 'all' },
    { id: 'x41', content: '힘든 거 있으면 혼자 끙끙 앓지 마. 나한테 다 털어놔. 난 당신의 쓰레기통이야!', tone: 'cheerful', tags: ['emotion', 'support'], trimester: 'all' },
];
