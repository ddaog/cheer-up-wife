export type GuideCategory = 'physical' | 'emotional' | 'prep';

export interface Guide {
    id: string;
    title: string;
    category: GuideCategory;
    content: string;
    source?: string;
}

export const guides: Guide[] = [
    // --- PHYSICAL SUPPORT ---
    {
        id: 'p1',
        title: '임신 초기 입덧 완화 돕기',
        category: 'physical',
        content: '공복에 입덧이 심해질 수 있습니다. 아침에 눈 뜨자마자 먹을 수 있는 크래커나 비스킷을 침대 맡에 준비해주세요. 냄새에 예민하므로 요리할 때 환기를 철저히 하고, 냉장고 냄새 제거제를 사용하세요.',
        source: '보건복지부 임신육아종합포털'
    },
    {
        id: 'p2',
        title: '다리 부종 마사지 방법',
        category: 'physical',
        content: '1. 아내를 편안하게 눕히고 다리를 쿠션 위에 올립니다.\n2. 발바닥의 움푹 들어간 곳(용천혈)을 지그시 누릅니다.\n3. 발목에서 종아리 방향으로 쓸어올리듯 부드럽게 마사지합니다. (너무 강한 압박은 피하세요)',
        source: '대한산부인과학회'
    },
    {
        id: 'p3',
        title: '임신 중 허리 통증 관리',
        category: 'physical',
        content: '배가 나오면 무게중심이 앞으로 쏠려 허리에 부담이 갑니다. 잘 때 다리 사이에 끼우는 바디필로우를 챙겨주세요. 의자에 앉을 때는 등 쿠션을 받쳐주면 도움이 됩니다.',
    },

    // --- EMOTIONAL SUPPORT ---
    {
        id: 'e1',
        title: '호르몬 변화와 감정 기복 이해하기',
        category: 'emotional',
        content: '임신 중엔 에스트로겐과 프로게스테론이 급격히 증가하여 감정 조절이 어려울 수 있습니다. 이유 없이 짜증을 내거나 울더라도 "왜 그래?"라고 따지기보다 "지금 기분이 안 좋구나, 내가 옆에 있을게"라고 공감해주세요.',
        source: '서울아산병원 건강칼럼'
    },
    {
        id: 'e2',
        title: '산전 우울증 체크리스트',
        category: 'emotional',
        content: '2주 이상 불면증, 식욕 부진, 죄책감, 무기력함이 지속된다면 전문가의 도움이 필요합니다. "네가 의지가 약해서 그래"라는 말은 절대 금물입니다. 함께 병원에 동행해주세요.',
        source: '보건복지부 정신건강정보'
    },

    // --- PREPARATION ---
    {
        id: 'prep1',
        title: '출산 가방 체크리스트 (남편 편)',
        category: 'prep',
        content: '1. 산모 수첩 및 신분증\n2. 세면도구 및 수건\n3. 슬리퍼 및 편한 옷\n4. 충전기 및 멀티탭\n5. 빨대 텀블러 (누워서 물 마실 때 필수)\n6. 압박 스타킹 및 손목 보호대',
    },
    {
        id: 'prep2',
        title: '진통 주기 측정 앱 설치',
        category: 'prep',
        content: '진통이 시작되면 당황하기 쉽습니다. 미리 진통 주기 측정 앱을 남편 폰에 설치해두세요. 5분 간격으로 규칙적인 진통이 오면 병원에 연락해야 합니다.',
    }
];
