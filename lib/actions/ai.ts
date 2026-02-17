'use server';

import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function generateEncouragement(situation: string, mbti: string, weeks: number) {
    if (!situation || situation.length > 100) {
        throw new Error('상황은 1자 이상 100자 이하로 입력해주세요.');
    }

    const isThinking = mbti.includes('T');
    const toneDescription = isThinking
        ? '현실적이고 논리적인 해결책과 든든한 지원 중심의 말투'
        : '따뜻한 공감과 감성적인 위로 중심의 말투';

    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                {
                    role: 'system',
                    content: `당신은 임신한 아내를 둔 남편의 조력자입니다. 아내의 상황, MBTI 유형, 임신 주수를 바탕으로 남편이 아내에게 해줄 수 있는 최적의 응원 문장을 작성해주세요. 
                    - 말투: ${toneDescription}
                    - 조건: 따뜻하고 진정성 있게, 2~3문장 이내로 작성.
                    - 특징: {nickname} 등의 변수는 사용하지 말고 바로 전달할 수 있는 완성된 문장으로 작성.`
                },
                {
                    role: 'user',
                    content: `상황: ${situation}\n아내 MBTI: ${mbti}\n임신 주수: ${weeks}주`
                }
            ],
            max_tokens: 300,
            temperature: 0.7,
        });

        return response.choices[0].message.content;
    } catch (error) {
        console.error('OpenAI Error:', error);
        throw new Error('메시지 생성 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    }
}
