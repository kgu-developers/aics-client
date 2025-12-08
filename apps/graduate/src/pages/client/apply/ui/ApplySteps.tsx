import { Steps } from 'antd';
import { type GraduationType } from '~/shared/constants';
import useStep from '../model/useStep';

export default function ApplySteps({
  selectedOption,
  confirm,
}: {
  confirm: boolean;
  selectedOption: GraduationType;
}) {
  const { index, step } = useStep({ selectedOption, confirm });
  return <Steps direction='vertical' current={index} items={step} />;
}
