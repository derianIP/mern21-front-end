import cx from 'classnames';

interface ButtonTabProps {
    active?: boolean;
    title: string;
}

export default function ButtonTab(props: Partial<ButtonTabProps>) {
  const { active, title } = props;
  const btnClass = cx({
    'btn btn-status rounded-pill text-sm me-3': true,
    'btn-active': active,
  });
  return (
    <a data-filter="*" href="/#" className={btnClass}>
      {title}
    </a>
  );
}
