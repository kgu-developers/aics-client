import { List } from '~/app/about/components/list';
import { Section } from '~/app/about/components/section';
import { PageHeader } from '~/components/page-header';

export default function Dept() {
  return (
    <>
      <PageHeader
        title="학부 소개"
        description="경기대학교 AI컴퓨터공학부를 소개해요."
      />
      <Section>
        <Section.Title>컴퓨터공학전공</Section.Title>
        <p style={{ marginBottom: 0 }}>
          컴퓨터공학전공에서는 수학적 기초와 논리적 사고를 바탕으로 한 전문
          소프트웨어 프로그래머 양성을 목표로 합니다. 특히 논리적 사고의 훈련과
          실습을 위해 프로그래밍 과목을 2, 3학년 과정에서 집중적으로 교육하고,
          과목마다 과제 및 개발 프로젝트를 통해 소프트웨어 시스템의 설계 및 개발
          경험을 훈련하고 팀워크를 학습합니다. 또한 3학년 2학기부터는 심화
          과목을 통해 전문적 지식과 과학적 사고, 그리고 복잡한 문제 해결 능력을
          훈련하며, 졸업 논문을 통해 전산학의 한 분야에 대한 전문적인 수준의
          지식을 습득하고 실제 시스템을 개발하여 전문인으로서의 발전을 위한
          능력을 다집니다.
        </p>
        <List title="교육 목표">
          <List.Row>
            소프트웨어 개발 능력을 갖춘 수요 지향적 소프트웨어 엔지니어 양성
          </List.Row>
          <List.Row>
            창의적인 문제해결 능력을 갖춘 자기 주도적 IT 전문가 양성
          </List.Row>
          <List.Row>국제 경쟁력을 갖춘 글로벌 인재 양성</List.Row>
        </List>
      </Section>
      <Section>
        <Section.Title>인공지능전공</Section.Title>
        <p style={{ marginBottom: 0 }}>
          인공지능전공에서는 4차 산업혁명 시대를 이끌 핵심기술인 혁신적인
          인공지능 기술 중심의 교육을 통해 정부와 기업, 사회의 모든 분야에서
          핵심적인 역할을 할 수 있는 인재 양성에 최선을 다합니다. 또한 인공지능
          분야의 산업체와의 협업, 현업에서의 전문 기술 교육을 통해 미래 지능형
          사회를 이끌어갈 인재를 양성합니다. 대학원에서는 컴퓨터공학 및
          인공지능에 대한 고급 지식을 익힐 기회를 얻을 수 있으며 석사 및 박사
          학위 취득이 가능합니다.
        </p>
        <List title="교육 목표">
          <List.Row>AI 시스템 개발에 필요한 기초 소프트웨어 지식 습득</List.Row>
          <List.Row>체계적인 AI 시스템 모델링 및 설계 능력 함양</List.Row>
          <List.Row>다양한 AI 응용산업별 AI 기술 활용 능력 배양</List.Row>
          <List.Row>
            소통과 문제 해결 능력을 갖춘 실무형 AI 전문 인력 양성
          </List.Row>
        </List>
      </Section>
      <Section>
        <Section.Title>SW안전보안전공</Section.Title>
        <p style={{ marginBottom: 0 }}>
          SW안전보안전공은 4차 산업혁명 시대를 이끄는 핵심 기술을 선도합니다.
          SW안전보안전공의 핵심 목표는 SW안전 및 보안 전문인력 양성으로 산학연
          연계를 통한 수준 높은 SW안전 및 보안 전문가를 배출하는 것입니다.
          SW안전보안전공에서 개설하고 있는 연구 분야로는 SW안전관리, SW윤리,
          SW안전메커니즘, SW위험분석, SW안전대책평가,
          웹서비스/네트워크/커널시스템보안 및 SW안전관련 국제규격 등의
          SW안전보안 분야입니다.
        </p>
        <List title="교육 목표">
          <List.Row>
            SW안전보안 시스템 개발에 필요한 기초 소프트웨어 지식 습득
          </List.Row>
          <List.Row>
            체계적인 SW안전보안 시스템 모델링 및 설계능력 함양
          </List.Row>
          <List.Row>
            다양한 SW안전보안 응용산업별 SW안전보안 기술 활용능력 배양
          </List.Row>
          <List.Row>
            소통과 문제해결 능력을 갖춘 실무형 SW안전보안 전문인력 양성
          </List.Row>
        </List>
      </Section>
    </>
  );
}
