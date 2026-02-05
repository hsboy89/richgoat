import { useState } from 'react'

// ============================================
// 설정
// ============================================
const CONFIG = {
  farmName: "기북 흑염소 농장",
  phoneNumber: "010-1234-5678",
  kakaoId: "blackgoat_farm",
  instagramUrl: "https://instagram.com/blackgoat_farm",
  blogUrl: "https://blog.naver.com/blackgoat_farm",
  location: "경상북도 기북면 기북로 ",
  processingFacility: "기북 건강원",
  yearsOfExperience: 20,
  goatCount: 100,
}

function App() {
  const [activeTab, setActiveTab] = useState<'info' | 'process' | 'adopt'>('info')

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* 헤더 */}
      <header className="bg-zinc-900/95 backdrop-blur border-b border-zinc-800 py-4 px-5 sticky top-0 z-50">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div>
            <h1 className="font-bold text-amber-400">{CONFIG.farmName}</h1>
            <p className="text-[10px] text-zinc-500 tracking-widest">SINCE 2022</p>
          </div>
          <a
            href={`tel:${CONFIG.phoneNumber}`}
            className="bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-2.5 rounded-lg text-sm font-semibold text-zinc-900"
          >
            상담문의
          </a>
        </div>
      </header>

      {/* 메인 비주얼 */}
      <section className="relative">
        {/* 배경 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-950" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-md mx-auto px-5 py-14">
          <div className="text-center">
            <p className="text-amber-500/80 text-xs tracking-[0.3em] mb-4">HONEST FARMING</p>
            <h2 className="text-3xl font-bold mb-3 leading-tight">
              <span className="text-amber-400">제 눈으로 보고</span><br />
              제 손으로 직접 키웁니다
            </h2>
            <p className="text-zinc-400 text-sm">
              거짓 없는 농장, 정직한 흑염소 이야기
            </p>
          </div>

          {/* 핵심 수치 */}
          <div className="mt-10 mb-8">
            <div className="grid grid-cols-3 text-center">
              <div className="border-r border-zinc-800">
                <p className="text-4xl font-bold bg-gradient-to-b from-amber-400 to-amber-600 bg-clip-text text-transparent">{CONFIG.yearsOfExperience}</p>
                <p className="text-[11px] text-zinc-500 mt-1 tracking-wider">YEARS</p>
              </div>
              <div className="border-r border-zinc-800">
                <p className="text-4xl font-bold bg-gradient-to-b from-amber-400 to-amber-600 bg-clip-text text-transparent">{CONFIG.goatCount}+</p>
                <p className="text-[11px] text-zinc-500 mt-1 tracking-wider">GOATS</p>
              </div>
              <div>
                <p className="text-4xl font-bold bg-gradient-to-b from-amber-400 to-amber-600 bg-clip-text text-transparent">24h</p>
                <p className="text-[11px] text-zinc-500 mt-1 tracking-wider">CARE</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <a
            href={`tel:${CONFIG.phoneNumber}`}
            className="block w-full bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-900 text-center py-4 rounded-xl font-bold text-lg shadow-lg shadow-amber-500/20"
          >
            전화 상담하기
          </a>
          <p className="text-center text-zinc-600 text-xs mt-4">
            평일·주말 언제든 부담없이 연락주세요
          </p>
        </div>
      </section>

      {/* 이미지 영역 */}
      <div className="max-w-md mx-auto px-5 -mt-2">
        <div className="aspect-video bg-zinc-900 rounded-2xl border border-zinc-800 flex items-center justify-center overflow-hidden">
          <div className="text-center text-zinc-600">
            <svg className="w-10 h-10 mx-auto mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-xs">농장 사진</p>
          </div>
        </div>
      </div>

      {/* 탭 */}
      <div className="bg-zinc-900/80 backdrop-blur border-y border-zinc-800 sticky top-[69px] z-40 mt-8">
        <div className="max-w-md mx-auto flex">
          {(['info', 'process', 'adopt'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-4 text-sm font-medium relative transition-colors ${activeTab === tab ? 'text-amber-400' : 'text-zinc-600'
                }`}
            >
              {tab === 'info' && '농장 소개'}
              {tab === 'process' && '추출 과정'}
              {tab === 'adopt' && '분양 안내'}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 탭 컨텐츠 */}
      <div className="max-w-md mx-auto p-5">
        {activeTab === 'info' && (
          <div className="space-y-4">
            <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
              <h3 className="font-bold text-amber-400 mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full"></span>
                우리 농장 소개
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                <strong className="text-white">{CONFIG.goatCount}여 마리의 흑염소</strong>를
                농장주가 직접 매일 돌봅니다.
                사료부터 환경까지, 농부의 고집으로 키웁니다.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed mt-3">
                {CONFIG.yearsOfExperience}년간 오직 흑염소만 키워온 노하우.
                잘 먹고 잘 자란 흑염소, 건강이 다릅니다.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
              <h3 className="font-bold text-amber-400 mb-5 flex items-center gap-2">
                <span className="w-1 h-5 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full"></span>
                깨끗한 관리
              </h3>
              <div className="space-y-4">
                {[
                  '농장주 24시간 밀착 관리',
                  '체계적인 사료·영양 관리',
                  '깨끗한 환경, 위생적인 축사',
                  '정기 건강검진 및 질병 예방',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-sm">
                    <span className="w-6 h-6 bg-amber-500/10 border border-amber-500/30 text-amber-500 rounded flex items-center justify-center text-xs">✓</span>
                    <span className="text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'process' && (
          <div className="space-y-4">
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4">
              <p className="text-amber-400 text-sm">
                ✓ 정식 허가 가공소 <strong className="text-amber-300">'{CONFIG.processingFacility}'</strong>에서 청결하게 추출
              </p>
            </div>

            <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
              {[
                { step: '01', title: '개체 선별', desc: '건강 검사 후 우량 개체 선별' },
                { step: '02', title: '가공소 위탁', desc: '허가받은 전문 가공소 처리' },
                { step: '03', title: '전통 달임', desc: '오랜 시간 정성껏 달임' },
                { step: '04', title: '위생 포장', desc: '개별 밀봉 포장 후 전달' },
              ].map((item, i) => (
                <div key={i} className={`p-5 flex items-center gap-5 ${i !== 3 ? 'border-b border-zinc-800' : ''}`}>
                  <span className="text-2xl font-bold bg-gradient-to-b from-amber-400 to-amber-600 bg-clip-text text-transparent">{item.step}</span>
                  <div>
                    <p className="font-medium text-white text-sm">{item.title}</p>
                    <p className="text-zinc-500 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-zinc-600 text-sm py-3 italic">
              "기력 보강을 위해 예부터 찾던 흑염소,<br/>농부의 고집으로 정성껏 달였습니다"
            </p>
          </div>
        )}

        {activeTab === 'adopt' && (
          <div className="space-y-4">
            <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
              <h3 className="font-bold text-amber-400 mb-5 flex items-center gap-2">
                <span className="w-1 h-5 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full"></span>
                분양 안내
              </h3>
              <div className="space-y-4">
                {[
                  '건강한 개체만 분양',
                  '시세에 따라 상담 후 결정',
                  '사육 노하우 전수',
                  '농장 방문 확인 가능',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-sm">
                    <span className="w-6 h-6 bg-amber-500/10 border border-amber-500/30 text-amber-500 rounded flex items-center justify-center text-xs">✓</span>
                    <span className="text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
              <h3 className="font-bold text-amber-400 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full"></span>
                찾아오시는 길
              </h3>
              <p className="text-zinc-300 text-sm">{CONFIG.location}</p>
              <p className="text-zinc-600 text-xs mt-2">* 방문 전 전화 예약 필수</p>
            </div>
          </div>
        )}
      </div>

      {/* 상담 섹션 */}
      <section className="bg-zinc-900 border-y border-zinc-800 py-12 px-5 mt-4">
        <div className="max-w-md mx-auto text-center">
          <p className="text-zinc-500 text-xs tracking-widest mb-2">CONTACT</p>
          <p className="text-3xl font-bold text-amber-400 mb-8">{CONFIG.phoneNumber}</p>

          <div className="grid grid-cols-3 gap-3">
            <a href={`tel:${CONFIG.phoneNumber}`} className="bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-900 py-4 rounded-xl font-semibold text-sm">
              전화
            </a>
            <a href={`sms:${CONFIG.phoneNumber}`} className="bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 py-4 rounded-xl font-medium text-sm text-zinc-300">
              문자
            </a>
            <a href={`https://open.kakao.com/o/${CONFIG.kakaoId}`} target="_blank" rel="noopener noreferrer" className="bg-yellow-500 hover:bg-yellow-400 text-zinc-900 py-4 rounded-xl font-semibold text-sm">
              카톡
            </a>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-zinc-950 py-8 px-5 border-t border-zinc-900">
        <div className="max-w-md mx-auto text-center text-xs">
          <p className="font-medium text-amber-500/80 mb-1">{CONFIG.farmName}</p>
          <p className="text-zinc-600">{CONFIG.location}</p>
          <div className="flex justify-center gap-4 mt-4 text-zinc-600">
            {CONFIG.blogUrl && <a href={CONFIG.blogUrl} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400">블로그</a>}
            {CONFIG.instagramUrl && <a href={CONFIG.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400">인스타그램</a>}
          </div>
        </div>
      </footer>

      {/* 플로팅 버튼 */}
      <a
        href={`tel:${CONFIG.phoneNumber}`}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-900 rounded-full shadow-lg shadow-amber-500/30 flex items-center justify-center z-50"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>
    </div>
  )
}

export default App
